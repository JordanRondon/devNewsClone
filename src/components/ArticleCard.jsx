import Link from "next/link";
import Image from "next/image";

export default function articleCard ( { article } ) {

    const date = new Date("2025-06-06T12:12:03Z");

    const formattedDate = date.toLocaleDateString("en-US", {
        dateStyle: "medium", // ej: "6 jun 2025"
    });

    const formattedTime = date.toLocaleTimeString("en-US", {
        timeStyle: "short",  // ej: "14:12"
    });

    return (
        <div className="w-full border border-gray-300 rounded-md hover:shadow-lg transition-shadow px-6 py-6 flex flex-col gap-y-2">
            <div className="flex items-center gap-2 text-md text-gray-600">
                <div className="rounded-full overflow-hidden h-10 w-10 flex items-center justify-center">
                    <Image
                        src={article.user.profile_image}
                        alt=""
                        width={40}
                        height={40}
                    />
                </div>
                <span> {article.user.name} </span>
                <span>.</span>
                <span> {formattedDate} </span>
                <span>.</span>
                <span> {formattedTime} </span>
            </div>
            <h1 className="text-xl font-bold hover:text-blue-600"> 
                <Link href={`/article/${article.id}`}>
                    {article.title}
                </Link>
            </h1>
            <p className="text-gray-600"> {article.description} </p>
            <div className="flex items-center justify-between ">
                <div className="flex flex-wrap gap-2">
                    {article.tag_list.map((tag, index) => (
                        <span key={index} className="bg-gray-100 rounded-full px-2 text-sm">
                            #{tag}
                        </span>
                    ))}
                </div>
                <Link href={`/article/${article.id}`} className="border border-gray-300 bg-white text-black px-4 py-1 rounded-md hover:bg-gray-100 transition-colors">
                    <button>send</button>
                </Link>
            </div>
        </div>
    );
}