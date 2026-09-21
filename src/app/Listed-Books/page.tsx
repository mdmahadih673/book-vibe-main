import React from 'react';
import { IBook } from '../type';
import ListedBooksCard from './listedBooksCard';


export interface BookCardProps {
    book: IBook;
}

const getBooks = async (): Promise<IBook[]> => {
    const res = await fetch("http://localhost:3000/booksData.json");
    const data: IBook[] = await res.json()
    return data
}

const ListedBooksPage = async () => {
    const booksData = await getBooks()

    return (
        <section className="min-h-screen bg-gradient-to-b from-green-50/60 via-white to-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <span className="rounded-full bg-green-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-green-700">
                        Library
                    </span>
                    <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        Listed <span className="text-green-600">Books</span>
                    </h1>
                    <p className="mt-4 text-base leading-7 text-gray-700">
                        তোমার সংগ্রহের সব বই এক জায়গায়। ব্রাউজ করো, রিভিউ পড়ো আর পরের বইটা বেছে নাও।
                    </p>
                    <p className="mt-3 text-sm font-medium text-gray-400">
                        মোট <span className="font-bold text-gray-700">{booksData.length}</span> টি বই
                    </p>
                </div>

                {/* Books grid */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        booksData.map((book) => {
                            return (
                                <ListedBooksCard key={book.bookId} book={book} />
                            )
                        })
                    }
                </div>

            </div>
        </section>
    );
};

export default ListedBooksPage;