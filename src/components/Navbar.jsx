import Link from "next/link";

export default function Navbar() {

    return (
        <div className="border-b border-gray-300 bg-white sticky top-0 z-50 flex items-center justify-between px-10 h-15">
            <Link href={"/"} className="text-2xl font-bold text-black">
                DEV-NEWS
            </Link>
            <Link href={"/search"} className="border border-gray-300 bg-white text-black px-4 py-1 rounded-md hover:bg-gray-100 transition-colors">
                AI Search
            </Link>
        </div>
    );
}