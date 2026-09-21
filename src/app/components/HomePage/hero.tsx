import Image from "next/image";
import hero from "../../../assets/pngwing 1@2x.png";

const HeroPage = () => {
    return (
        <section className="bg-gradient-to-br container mx-auto rounded-2xl mt-2 from-green-50 via-white to-emerald-50">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20 lg:py-24">

                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <div className="text-center lg:text-left">

                        <p className="text-green-600 font-semibold text-sm md:text-base uppercase tracking-widest mb-4">
                            Welcome to Book Haven
                        </p>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Books to freshen up
                            <span className="block text-green-600">
                                your bookshelf
                            </span>
                        </h1>

                        <p className="mt-6 text-gray-600 text-base md:text-lg leading-8 max-w-xl mx-auto lg:mx-0">
                            Discover amazing books, explore new stories, and
                            find your next favorite read. Build your perfect
                            bookshelf one book at a time.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                            <button className="px-7 py-3.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                                View The List
                            </button>

                            <button className="px-7 py-3.5 border border-gray-300 hover:border-green-500 hover:text-green-600 text-gray-700 font-semibold rounded-lg transition-all duration-300">
                                Explore Books
                            </button>

                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">

                            <div className="absolute inset-0 bg-green-200/40 blur-3xl rounded-full scale-75"></div>

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