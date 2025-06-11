import Image from "next/image";
import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

async function loadArticleDetail(articleId) {
  const res = await fetch(`https://dev.to/api/articles/${articleId}`);
  const data = await res.json();
  return data;
}

export default async function ArticlePage({ params: paramsPromise }) {
  const params = await paramsPromise;
  const articleDetail = await loadArticleDetail(params.id);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2">
        <Image
          src={articleDetail.social_image}
          alt=""
          width={800}
          height={800}
          className="w-full h-auto object-cover"
        />
        <Link
          href={articleDetail.canonical_url}
          target="_blank"
          className="flex items-center text-md text-gray-500 font-bold hover:text-blue-600 transition-colors "
        >
          Go site
          <ArrowRightCircleIcon className="w-5 h-5 ml-2" />
        </Link>
      </div>
      <h1 className="text-center text-5xl font-bold py-10">
        {articleDetail.title}
      </h1>
      <div
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: articleDetail.body_html }}
      />
    </>
  );
}
