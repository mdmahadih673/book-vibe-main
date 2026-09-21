
import Image from "next/image";
import { IBook } from "@/app/type";

export interface BookCardProps {
    books: IBook;
}

const BooksCard = ({ books }: BookCardProps) => {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

            {/* Image */}
            <Image
                src={books.image}
                alt={books.bookName}
                width={300}
                height={400}
                className="h-64 w-full rounded-xl object-cover"
            />

            {/* Content */}
            <div className="mt-5">
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                    {books.category}
                </span>

                <h2 className="mt-3 text-2xl font-bold text-gray-900">
                    {books.bookName}
                </h2>

                <p className="mt-1 text-gray-600">
                    By {books.author}
                </p>

                <div className="mt-4 flex items-center justify-between">
                    <p className="font-semibold text-yellow-500">
                        ⭐ {books.rating}
                    </p>

                    <p className="text-sm text-gray-600">
                        {books.totalPages} Pages
                    </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {books.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>

            
        </div>
    );
};

export default BooksCard;

