import ArticleCard from "@/components/ArticleCard";
import Pagination from "@/components/Pagination";

async function loadArticles(page = 1) {
  const res = await fetch(`https://dev.to/api/articles/latest?page=${page}`);
  const data = await res.json();
  return data;
}

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const currentPage = Number(params) || 1;
  const articles = await loadArticles(currentPage);

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Latest Articles</h1>
      <p className="text-gray-600 mb-10">
        Are you a developer? Discover the latest in web development
      </p>
      <div className="flex flex-wrap gap-6">
        {articles.map((article, index) => (
          <ArticleCard article={article} key={index} />
        ))}
        <Pagination currentPage={currentPage} />
      </div>
    </>
  );
}
