import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/Listed-Books", label: "Listed Books" },
  { href: "/pages-to-read", label: "Pages to Read" },
  { href: "/about", label: "About Us" },
];

const categories = ["Fiction", "Romance", "Classic", "Mystery"];

const socials = [
  {
    label: "Facebook",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "X",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "LinkedIn",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
];

const FooterPage = () => {
  return (
    <footer className="mt-20 bg-gray-950 text-gray-300">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="text-3xl font-bold text-white">
              Book<span className="text-emerald-500">Vibe</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              Discover your next favorite book and explore amazing stories from
              different authors and categories.
            </p>

            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-emerald-600 hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-emerald-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Categories */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Categories
            </h3>

            <ul className="space-y-3 text-sm">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    href="/Listed-Books"
                    className="transition hover:text-emerald-500"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Stay Connected
            </h3>

            <p className="text-sm leading-6 text-gray-400">
              Subscribe to get updates about new books and recommendations.
            </p>

            <form
              action="#"
              className="mt-5 flex overflow-hidden rounded-lg bg-white focus-within:ring-2 focus-within:ring-emerald-500"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Your email"
                className="min-w-0 flex-1 px-4 py-3 text-sm text-gray-900 outline-none"
              />

              <button
                type="submit"
                className="bg-emerald-600 px-5 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 text-sm text-gray-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} BookVibe. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="#" className="transition hover:text-emerald-500">
              Privacy Policy
            </Link>

            <Link href="#" className="transition hover:text-emerald-500">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
