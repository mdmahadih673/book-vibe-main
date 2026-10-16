import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | BookVibe",
  description:
    "Learn about BookVibe — helping readers discover their next favorite book.",
};

const stats = [
  { value: "15+", label: "Curated Books" },
  { value: "8+", label: "Categories" },
  { value: "100%", label: "Reader Focused" },
];

const features = [
  {
    title: "Curated Collection",
    text: "Hand-picked books across classics, fiction, fantasy, mystery and more — no filler.",
  },
  {
    title: "Honest Reviews",
    text: "Short, reader-friendly reviews that help you decide what to read next.",
  },
  {
    title: "Easy Discovery",
    text: "Browse by category, rating and tags to find the perfect book for your mood.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50/60 via-white to-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-700">
            About Us
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            About <span className="text-emerald-600">BookVibe</span>
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-600">
            BookVibe helps readers discover amazing books, explore new stories,
            and build their perfect bookshelf — one book at a time.
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto mb-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
            >
              <p className="text-3xl font-extrabold text-emerald-600">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Mission + features */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-gray-950 p-8 text-gray-300 sm:p-10">
            <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            <p className="mt-4 text-sm leading-7 text-gray-400">
              Reading should feel exciting, not overwhelming. We collect
              essential details — author, category, rating, pages, publisher —
              alongside a quick review, so you can pick your next read with
              confidence.
            </p>
            <p className="mt-4 text-sm leading-7 text-gray-400">
              Whether you love timeless classics, thrilling mysteries, or books
              that help you grow, BookVibe is a simple home for your reading
              journey.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/Listed-Books"
                className="inline-block rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-600"
              >
                Browse Books
              </Link>
              <Link
                href="/pages-to-read"
                className="inline-block rounded-lg border border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50"
              >
                Pages to Read
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex-1 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8"
              >
                <h3 className="text-lg font-bold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
