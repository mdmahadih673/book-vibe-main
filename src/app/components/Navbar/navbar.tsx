import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/Listed-Books", label: "Listed Books" },
  { href: "/pages-to-read", label: "Pages to Read" },
  { href: "/about", label: "About" },
];

const linkClass =
  "font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300 rounded-lg";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
      <nav className="navbar container mx-auto px-4 md:px-8 py-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              aria-label="Menu"
              className="btn btn-ghost lg:hidden hover:bg-emerald-50"
            >
              <svg
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
              {links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/"
            className="btn btn-ghost text-2xl font-bold text-gray-900 hover:bg-transparent"
          >
            Book<span className="text-emerald-500">Vibe</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">
            {links.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
          <Link
            href="/Listed-Books"
            className="btn bg-emerald-500 hover:bg-emerald-600 text-white border-none rounded-lg px-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
