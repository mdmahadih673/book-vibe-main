import { getBooks } from '@/app/lib/books';
import BooksCard from './booksCard';
import Link from 'next/link';

const BooksPage = () => {
    const booksData = getBooks();

    return (
        <div className="container mx-auto mt-16 px-4">
            <div className="mb-10 text-center">
                <span className="rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-700">
                    Featured Books
                </span>

                <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
                    Explore Our Books
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-gray-600">
                    Discover popular books, explore different categories, and find
                    something perfect for your next reading session.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {booksData.slice(0, 6).map((book) => (
                    <BooksCard key={book.bookId} books={book} />
                ))}
            </div>

            <div className="mt-10 text-center">
                <Link
                    href="/Listed-Books"
                    className="inline-block px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                    See All Books
                </Link>
            </div>
        </div>
    );
};

export default BooksPage;
