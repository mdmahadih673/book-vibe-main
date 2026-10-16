import Image from "next/image";
import { IBook } from "@/app/type";
import Link from "next/link";

export interface BookCardProps {
    book: IBook;
}

const ListedBooksCard = ({ book }: BookCardProps) => {
    return (
        <div className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_2px_12px_-4px_rgba(0,0,0,0.12)] ring-1 ring-stone-200/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_48px_-16px_rgba(5,150,105,0.4)] hover:ring-emerald-200">
            {/* Cover */}
            <div className="relative h-80 w-full overflow-hidden bg-stone-100">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/10" />

                {/* Category badge */}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-800 shadow backdrop-blur">
                    {book.category}
                </span>

                {/* Rating badge */}
                <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-sm font-extrabold text-stone-900 shadow">
                    &#9733; {book.rating}
                </span>

                {/* Bottom meta */}
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between text-xs font-semibold text-white">
                    <span>{book.totalPages} pages</span>
                    <span>{book.yearOfPublishing}</span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-extrabold text-emerald-700">
                        {book.author.charAt(0)}
                    </span>
                    <div className="min-w-0">
                        <h2 className="truncate font-serif text-xl font-bold leading-tight text-stone-900 transition-colors group-hover:text-emerald-700">
                            {book.bookName}
                        </h2>
                        <p className="truncate text-sm text-stone-500">
                            by <span className="font-medium text-stone-700">{book.author}</span>
                        </p>
                    </div>
                </div>

                <p className="mt-2 text-xs font-medium text-stone-400">
                    {book.publisher}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-100"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* View Details btn */}
                <div className="mt-5 flex-1 content-end">
                    <Link
                        href={`/Listed-Books/${book.bookId}`}
                        className="group/btn flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200 active:translate-y-0 active:scale-95"
                    >
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
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ListedBooksCard;
