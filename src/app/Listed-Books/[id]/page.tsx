import Image from 'next/image';
import { IBook } from '@/app/type';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PageProps {
    params: Promise<{ id: string }>;
};

const getBooks = async (): Promise<IBook[]> => {
    const res = await fetch("http://localhost:3000/booksData.json");
    return res.json();
};

const ViewDetailsPage = async ({ params }: PageProps) => {
    const { id } = await params;
    const datas = await getBooks();
    const data = datas.find((item) => item.bookId === Number(id));

    if (!data) {
        notFound()
    }
    return (
        <main className="min-h-screen bg-white">
            <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">

                {/* Back link (grid-এর বাইরে) */}
                <Link
                    href="/Listed-Books"
                    className="mb-8 inline-block font-semibold text-green-600 hover:text-green-700"
                >
                    &larr; Back to Listed Books
                </Link>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">

                    {/* Left: Image */}
                    <div className="relative flex min-h-[380px] items-center justify-center rounded-2xl bg-gray-100 p-8 lg:min-h-[480px]">
                        <div className="relative h-[340px] w-full lg:h-[420px]">
                            <Image
                                src={data.image}
                                alt={data.bookName}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-contain drop-shadow-xl"
                            />
                        </div>
                    </div>

                    {/* Right: Details */}
                    <div className="flex flex-col">
                        <h1 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
                            {data.bookName}
                        </h1>

                        <p className="mt-3 text-sm font-medium text-gray-600">
                            By : {data.author}
                        </p>

                        <div className="my-4 border-t border-gray-200" />

                        <p className="text-sm text-gray-700">{data.category}</p>

                        <div className="my-4 border-t border-gray-200" />

                        <p className="text-sm leading-6 text-gray-500">
                            <span className="font-bold text-gray-900">Review : </span>
                            {data.review}
                        </p>

                        {/* Tags */}
                        <div className="mt-5 flex flex-wrap items-center gap-3">
                            <span className="text-sm font-bold text-gray-900">Tag</span>
                            {data.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-green-50 px-4 py-1.5 text-xs font-medium text-green-600"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        <div className="my-5 border-t border-gray-200" />

                        {/* Info table */}
                        <dl className="grid grid-cols-[150px_1fr] gap-y-3 text-sm">
                            <dt className="text-gray-500">Number of Pages:</dt>
                            <dd className="font-bold text-gray-900">{data.totalPages}</dd>

                            <dt className="text-gray-500">Publisher:</dt>
                            <dd className="font-bold text-gray-900">{data.publisher}</dd>

                            <dt className="text-gray-500">Year of Publishing:</dt>
                            <dd className="font-bold text-gray-900">{data.yearOfPublishing}</dd>

                            <dt className="text-gray-500">Rating:</dt>
                            <dd className="font-bold text-gray-900">{data.rating}</dd>
                        </dl>

                        {/* Buttons */}
                        <div className="mt-6 flex flex-wrap gap-3">
                            <button className="rounded-lg border border-gray-300 bg-white px-6 py-2.5 text-sm font-bold text-gray-900 transition hover:bg-gray-50 active:scale-95">
                                Read
                            </button>
                            <button className="rounded-lg bg-sky-500 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-sky-600 active:scale-95">
                                Wishlist
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default ViewDetailsPage;