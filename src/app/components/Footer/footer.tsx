import Link from "next/link";

const FooterPage = () => {
    return (
        <footer className="mt-20 bg-gray-950 text-gray-300">
            <div className="container mx-auto px-6 py-14">

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <h2 className="text-3xl font-bold text-white">
                            Book<span className="text-green-500">Vibe</span>
                        </h2>

                        <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
                            Discover your next favorite book and explore
                            amazing stories from different authors and
                            categories.
                        </p>

                        <div className="mt-6 flex gap-3">
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-green-600 hover:text-white"
                            >
                                f
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-green-600 hover:text-white"
                            >
                                X
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-green-600 hover:text-white"
                            >
                                in
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    href="/"
                                    className="transition hover:text-green-500"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/listed-books"
                                    className="transition hover:text-green-500"
                                >
                                    Listed Books
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/pages-to-read"
                                    className="transition hover:text-green-500"
                                >
                                    Pages to Read
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about"
                                    className="transition hover:text-green-500"
                                >
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Categories
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li className="transition hover:text-green-500">
                                Fiction
                            </li>

                            <li className="transition hover:text-green-500">
                                Romance
                            </li>

                            <li className="transition hover:text-green-500">
                                Classic
                            </li>

                            <li className="transition hover:text-green-500">
                                Mystery
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Stay Connected
                        </h3>

                        <p className="text-sm leading-6 text-gray-400">
                            Subscribe to get updates about new books and
                            recommendations.
                        </p>

                        <div className="mt-5 flex overflow-hidden rounded-lg bg-white">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="min-w-0 flex-1 px-4 py-3 text-sm text-gray-900 outline-none"
                            />

                            <button className="bg-green-600 px-5 text-sm font-semibold text-white transition hover:bg-green-700">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 text-sm text-gray-500 md:flex-row">
                    <p>
                        © {new Date().getFullYear()} BookVibe. All rights
                        reserved.
                    </p>

                    <div className="flex gap-6">
                        <Link
                            href="#"
                            className="transition hover:text-green-500"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="#"
                            className="transition hover:text-green-500"
                        >
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterPage;
