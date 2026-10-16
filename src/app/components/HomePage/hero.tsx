import Image from "next/image";
import hero from "../../../assets/pngwing 1@2x.png";
import Link from "next/link";

const stats = [
  { value: "15", label: "Curated Books" },
  { value: "8", label: "Categories" },
  { value: "4.6", label: "Average Rating" },
];

const HeroPage = () => {
  return (
    <section className="container mx-auto mt-4 rounded-3xl border border-emerald-100/70 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-700">
              Welcome to BookVibe
            </span>

            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Books to freshen up
              <span className="block text-emerald-600">your bookshelf</span>
            </h1>

            <p className="mt-6 text-gray-600 text-base md:text-lg leading-8 max-w-xl mx-auto lg:mx-0">
              Discover amazing books, explore new stories, and find your next
              favorite read. Build your perfect bookshelf one book at a time.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/Listed-Books"
                className="px-7 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                View The List
              </Link>
              <Link
                href="/about"
                className="px-7 py-3.5 bg-white hover:bg-emerald-50 text-emerald-700 font-semibold rounded-lg border border-emerald-200 shadow-sm hover:shadow transition-all duration-300 text-center"
              >
                About Us
              </Link>
            </div>

            <dl className="mt-10 flex items-center justify-center lg:justify-start gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl md:text-3xl font-extrabold text-gray-900">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-500">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-200/40 blur-3xl rounded-full scale-75"></div>

              <Image
                src={hero}
                alt="Books illustration"
                priority
                className="relative w-[280px] sm:w-[360px] md:w-[430px] lg:w-[500px] h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
