import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Pagination({ currentPage }) {
  const pageNum = Number(currentPage);
  const nextPage = pageNum + 1;
  const prevPage = pageNum > 1 ? pageNum - 1 : 1;

  return (
    <div className="w-full flex items-center justify-center gap-5">
      <Link
        href={`/?page=${prevPage}`}
        className={`flex items-center px-4 py-1 rounded-md ${
          currentPage === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-gray-500 hover:bg-gray-600"
        } text-white hover:bg-gray-600 transition-colors`}
      >
        <ArrowLongLeftIcon className="w-5 h-5 mr-2" />
        Back
      </Link>
      <span className="w-15 h-auto flex items-center justify-center">
        {currentPage}
      </span>
      <Link
        href={`/?page=${nextPage}`}
        className="flex items-center px-4 py-1 rounded-md bg-gray-500 text-white hover:bg-gray-600 transition-colors"
      >
        Next
        <ArrowLongRightIcon className="w-5 h-5 ml-2" />
      </Link>
    </div>
  );
}
