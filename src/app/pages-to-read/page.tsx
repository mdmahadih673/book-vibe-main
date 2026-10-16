import type { Metadata } from "next";
import Link from "next/link";
import { getBooks } from "@/app/lib/books";

export const metadata: Metadata = {
  title: "Pages to Read | BookVibe",
  description:
    "Books ranked by page count — pick your next long read or a quick one.",
};

export default function PagesToReadPage() {
  const books = [...getBooks()].sort((a, b) => b.totalPages - a.totalPages);
  const maxPages = books[0]?.totalPages ?? 1;

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50/60 via-white to-white">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-700">
            Reading List
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Pages to <span className="text-emerald-600">Read</span>
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-600">
            All {books.length} books ranked by page count — choose an epic or a
            quick evening read.
          </p>
        </div>

        {/* Ranked list */}
        <ol className="flex flex-col gap-4">
          {books.map((book, index) => (
            <li key={book.bookId}>
              <Link
                href={`/Listed-Books/${book.bookId}`}
                className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-lg sm:gap-6 sm:p-5"
              >
                <span className="w-8 shrink-0 text-center text-2xl font-extrabold text-gray-200 transition-colors group-hover:text-emerald-500">
                  {index + 1}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h2 className="truncate text-lg font-bold text-gray-900 transition-colors group-hover:text-emerald-600">
                      {book.bookName}
                    </h2>
                    <p className="shrink-0 text-sm font-bold text-gray-900">
                      {book.totalPages}{" "}
                      <span className="font-medium text-gray-500">pages</span>
                    </p>
                  </div>
                  <p className="mt-0.5 truncate text-sm text-gray-500">
                    {book.author} &middot; {book.category}
                  </p>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-500"
                      style={{
                        width: `${Math.round(
                          (book.totalPages / maxPages) * 100,
                        )}%`,
                      }}
                    />
                  </div>
                </div>

                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl font-bold text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-emerald-600"
                >
                  &rarr;
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
