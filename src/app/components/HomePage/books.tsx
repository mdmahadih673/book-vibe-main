import { IBook } from '@/app/type';
import React from 'react';
import BooksCard from './booksCard';
import Link from 'next/link';




const getBooks = async (): Promise<IBook[]> => {
    const res = await fetch("http://localhost:3000/booksData.json");
    const data: IBook[] = await res.json()
    return data
}

const BooksPage = async () => {
    const booksData = await getBooks()
    return (

        <div className="container mx-auto mt-10 px-4">
            <div className="mb-8 text-center">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-600">
                    Featured Books
                </p>

                <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
                    Explore Our Books
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-gray-300">
                    Discover popular books, explore different categories, and find
                    something perfect for your next reading session.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {booksData.slice(0, 6).map((books: IBook) => {
                    return (
                        <BooksCard
                            key={books.bookId}
                            books={books}
                        />

                    );
                })}
            </div>


            <div className="mt-5">
                <Link
                    href="/Listed-Books"
                    className="group/btn inline-flex items-center justify-center gap-2 rounded-xl border-2 border-green-600 bg-white px-6 py-3 text-sm font-semibold text-green-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-600 hover:text-white hover:shadow-lg hover:shadow-green-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-200 active:translate-y-0 active:scale-95"
                >
                    See All
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


    );
};

export default BooksPage;