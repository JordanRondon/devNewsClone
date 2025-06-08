import Link from "next/link";

export default function articleCard ( { article } ) {
    return (
        <div className="w-full border border-gray-300 h-50 rounded-md hover:shadow-lg transition-shadow px-5 pt-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span> {article.user.username} </span>
                <span>.</span>
                <span> {article.published_timestamp} </span>
            </div>
            <h1 className="text-xl font-bold mb-2 hover:text-blue-600"> 
                <Link href={`/article/${article.id}`}>
                    {article.title}
                </Link>
            </h1>
            <p className="text-gray-600 mb-4"> {article.description} </p>
            <div className="flex items-center justify-between ">
                <div>
                    {article.tag_list.map((tag, index) => (
                        <span key={index}> #{tag} </span>
                    ))}
                </div>
                <Link href={`/article/${article.id}`} className="border border-gray-300 bg-white text-black px-4 py-1 rounded-md hover:bg-gray-100 transition-colors">
                    <button>send</button>
                </Link>
            </div>
        </div>
    );
}