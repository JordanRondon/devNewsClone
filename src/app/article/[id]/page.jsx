import Image from "next/image";
import Link from "next/link";

async function loadArticleDetail(articleId) {
    const res = await fetch(`https://dev.to/api/articles/${articleId}`);
    const data = await res.json();
    return data;
}

export default async function articlePage ( {params} ) {

    const articleDetail = await loadArticleDetail(params.id);

    return (<>
        <Image
            src={articleDetail.social_image}
            alt=""
            width={800}
            height={800}
        />
        <Link 
            href={articleDetail.canonical_url}
            target="_blank">
                go there
        </Link>
        <h1>
            {articleDetail.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: articleDetail.body_html }} />
    </>);
}