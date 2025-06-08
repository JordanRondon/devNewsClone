import Link from "next/link";
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline'

export default function Navbar() {

    return (
        <div className="border-b border-gray-300 bg-white sticky top-0 z-50 flex items-center justify-between px-10 h-15">
            <Link href={"/"} className="text-2xl font-bold text-black">
                DEV-NEWS
            </Link>
            <Link href={"/search"} className="border border-gray-300 bg-white text-black px-4 py-1 rounded-md flex items-center hover:bg-gray-100 transition-colors">
                <ChatBubbleOvalLeftIcon className="w-4 h-4 mr-2" />
                AI Search
            </Link>
        </div>
    );
}