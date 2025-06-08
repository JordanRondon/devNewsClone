
import ArticleCard from "@/components/ArticleCard";

async function loadArticles() {
  const res = await fetch("https://dev.to/api/articles/latest");
  const data = await res.json();
  return data;
}

export default async function Home() {

  const articles = await loadArticles();

  return (
    <div className="w-full max-w-4xl mx-auto px-4 pt-8 ">
      <h1 className="text-3xl font-bold mb-2">Latest Articles</h1>
      <span className="text-gray-600">Are you a developer? Discover the latest in web development</span>
      <div className="flex flex-wrap gap-6">
        {articles.map((article, index) => (
          <ArticleCard article={article} key={index}/>
        ))}
      </div>
    </div>
  );
}
