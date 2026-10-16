import Image from "next/image";
import Link from "next/link";
import { IBook } from "@/app/type";

export interface BookCardProps {
    books: IBook;
}

const BooksCard = ({ books }: BookCardProps) => {
    return (
        <Link
            href={`/Listed-Books/${books.bookId}`}
            className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_2px_12px_-4px_rgba(0,0,0,0.12)] ring-1 ring-stone-200/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_48px_-16px_rgba(5,150,105,0.4)] hover:ring-emerald-200"
        >
            {/* Cover */}
            <div className="relative h-72 overflow-hidden bg-stone-100">
                <Image
                    src={books.image}
                    alt={books.bookName}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/10" />

                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-800 shadow backdrop-blur">
                    {books.category}
                </span>
                <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-sm font-extrabold text-stone-900 shadow">
                    &#9733; {books.rating}
                </span>

                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between text-xs font-semibold text-white">
                    <span>{books.totalPages} pages</span>
                    <span>{books.yearOfPublishing}</span>
                </div>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-extrabold text-emerald-700">
                        {books.author.charAt(0)}
                    </span>
                    <div className="min-w-0">
                        <h2 className="truncate font-serif text-xl font-bold text-stone-900 transition-colors group-hover:text-emerald-700">
                            {books.bookName}
                        </h2>
                        <p className="truncate text-sm text-stone-500">
                            {books.author}
                        </p>
                    </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {books.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600 transition-colors group-hover:bg-emerald-50 group-hover:text-emerald-700"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                <div className="mt-auto flex items-center justify-between pt-5">
                    <span className="text-sm font-bold text-emerald-700">
                        View Details
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white shadow-md shadow-emerald-200 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-emerald-700">
                        &rarr;
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default BooksCard;
