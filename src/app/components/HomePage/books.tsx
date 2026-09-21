import { IBook } from '@/app/type';
import React from 'react';
import BooksCard from './booksCard';




const getBooks = async () => {
    const res = await fetch("http://localhost:3000/booksData.json")
    const data = res.json();
    return data
};

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
        </div>


    );
};

export default BooksPage;