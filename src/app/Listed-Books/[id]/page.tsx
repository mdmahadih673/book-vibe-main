import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBookById, getBooks } from '@/app/lib/books';

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return getBooks().map((book) => ({ id: String(book.bookId) }));
}

const ViewDetailsPage = async ({ params }: PageProps) => {
    const { id } = await params;
    const data = getBookById(Number(id));

    if (!data) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-emerald-50/60 via-white to-white">
            <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
                {/* Back link */}
                <Link
                    href="/Listed-Books"
                    className="mb-8 inline-block font-semibold text-emerald-600 transition hover:text-emerald-700"
                >
                    &larr; Back to Listed Books
                </Link>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Left: Image */}
                    <div className="relative flex min-h-[380px] items-center justify-center rounded-3xl border border-gray-100 bg-white p-8 shadow-sm lg:min-h-[480px]">
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
                        <span className="absolute left-5 top-5 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                            {data.category}
                        </span>
                    </div>

                    {/* Right: Details */}
                    <div className="flex flex-col">
                        <h1 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
                            {data.bookName}
                        </h1>

                        <p className="mt-3 text-sm font-medium text-gray-600">
                            By : {data.author}
                        </p>

                        <p className="mt-3 flex items-center gap-2 text-sm">
                            <span className="font-semibold text-amber-500">
                                &#9733; {data.rating}
                            </span>
                            <span className="text-gray-400">&middot;</span>
                            <span className="text-gray-600">
                                {data.totalPages} pages
                            </span>
                        </p>

                        <div className="my-5 border-t border-gray-200" />

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
                                    className="rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-medium text-emerald-600 ring-1 ring-inset ring-emerald-100"
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
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/pages-to-read"
                                className="rounded-lg border border-gray-300 bg-white px-6 py-2.5 text-sm font-bold text-gray-900 transition hover:border-emerald-300 hover:bg-emerald-50 active:scale-95"
                            >
                                Pages to Read
                            </Link>
                            <Link
                                href="/Listed-Books"
                                className="rounded-lg bg-emerald-500 px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-200 transition hover:bg-emerald-600 active:scale-95"
                            >
                                More Books
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ViewDetailsPage;
