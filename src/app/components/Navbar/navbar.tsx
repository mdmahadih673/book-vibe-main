import Link from "next/link";

const Navbar = () => {
    const link = <>
        <li>
            <Link
                href="/"
                className="font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-300 rounded-lg"
            >
                Home
            </Link>
        </li>
        <li>
            <Link
                href="/Listed-Books"
                className="font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-300 rounded-lg"
            >
                Listed Books
            </Link>
        </li>
        <li>
            <Link
                href="/"
                className="font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-300 rounded-lg"
            >
                Pages to Read
            </Link>
        </li>
        <li>
            <Link
                href="/"
                className="font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-300 rounded-lg"
            >
                About
            </Link>
        </li>
    </>

    return (
        <nav className="navbar sticky top-0 z-50  bg-white shadow-sm border-b border-gray-100 px-4 md:px-8 lg:px-12 py-3">

            <div className="container mx-auto navbar rounded-2xl hover:shadow-olive-400 transition z-50 bg-white shadow-sm border-b border-gray-100 px-4 md:px-8 lg:px-12 py-3">

                <div className="navbar-start ">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden hover:bg-green-50"
                        >
                            <svg
                                aria-label="Menu"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-white rounded-xl z-1 mt-3 w-56 p-3 shadow-xl border border-gray-100"
                        >
                            {link}
                        </ul>
                    </div>

                    <a className="btn btn-ghost text-2xl font-bold text-gray-900 hover:bg-transparent">
                        daisyUI
                    </a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-2 px-1">
                        {link}
                    </ul>
                </div>

                <div className="navbar-end">
                    <a className="btn bg-green-500 hover:bg-green-600 text-white border-none rounded-lg px-6 shadow-md hover:shadow-lg transition-all duration-300">
                        Button
                    </a>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;