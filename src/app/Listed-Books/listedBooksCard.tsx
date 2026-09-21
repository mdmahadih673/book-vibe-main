import Image from "next/image";
import { IBook } from "@/app/type";

export interface BookCardProps {
    book: IBook;
}

const ListedBooksCard = ({ book }: BookCardProps) => {
    return (
        <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-200">

            {/* Image */}
            <div className="relative h-72 w-full overflow-hidden bg-gray-100">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Category badge */}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-700 shadow backdrop-blur">
                    {book.category}
                </span>

                {/* Rating badge */}
                <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-yellow-400 px-3 py-1 text-sm font-bold text-gray-900 shadow">
                    ⭐ {book.rating}
                </span>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">

                {/* Title & author */}
                <h2 className="line-clamp-2 text-2xl font-extrabold leading-tight text-gray-900 transition-colors group-hover:text-green-600">
                    {book.bookName}
                </h2>
                <p className="mt-1 text-sm font-medium text-gray-500">
                    by <span className="text-gray-700">{book.author}</span>
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-100"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Review */}
                <p className="mt-4 line-clamp-4 text-sm leading-6 text-gray-600">
                    {book.review}
                </p>

                {/* Info grid */}
                <div className="mt-auto pt-5">
                    <div className="grid grid-cols-2 gap-3 rounded-2xl bg-gray-50 p-4 text-sm">
                        <div>
                            <p className="text-xs uppercase tracking-wide text-gray-400">Pages</p>
                            <p className="font-semibold text-gray-800">{book.totalPages}</p>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-wide text-gray-400">Published</p>
                            <p className="font-semibold text-gray-800">{book.yearOfPublishing}</p>
                        </div>
                        <div className="col-span-2">
                            <p className="text-xs uppercase tracking-wide text-gray-400">Publisher</p>
                            <p className="font-semibold text-gray-800">{book.publisher}</p>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-4 flex items-center justify-between border-t border-dashed border-gray-200 pt-4">
                        <span className="text-xs text-gray-400">Book ID</span>
                        <span className="rounded-md bg-gray-900 px-2.5 py-1 text-xs font-semibold text-white">
                            #{book.bookId}
                        </span>
                    </div>
                </div>
                {/* View Details btn */}
                <div className="mt-5">
                    <button className="group/btn cursor-pointer flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-green-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-200 active:translate-y-0 active:scale-95">
                        View Details
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ListedBooksCard;