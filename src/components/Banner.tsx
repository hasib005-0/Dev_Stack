import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-14 lg:py-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6">

                {/* Left Side */}
                <div className="w-full lg:w-3/5 text-center lg:text-left">

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        Build Your Ideal
                        <br />
                        <span className="bg-linear-to-r from-orange-600 via-pink-600 to-violet-700 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="text-gray-500 mt-4 max-w-lg mx-auto lg:mx-0 text-[14px] sm:text-[15px]">
                        Explore frontend, backend, database, and tooling options.
                        Compare them side by side, and put together the stack
                        that fits your next project.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-row justify-center lg:justify-start gap-2 sm:gap-4 mt-6">

                        <button className="flex-1 sm:flex-none bg-linear-to-r from-orange-600 to-pink-600 hover:from-orange-500 hover:to-purple-600 text-white px-3 sm:px-5 py-2 rounded-md text-sm sm:text-lg md:text-xl font-semibold cursor-pointer transition-all duration-300 whitespace-nowrap">
                            Explore Technologies
                        </button>

                        <button className="flex-1 sm:flex-none border border-gray-200 px-3 sm:px-5 py-2 rounded-md text-sm sm:text-lg md:text-xl cursor-pointer hover:bg-gray-50 transition-all duration-300 whitespace-nowrap">
                            Learn More
                        </button>

                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full lg:w-2/5 flex justify-center">
                    <img
                        src={BannerImg}
                        alt="Development Stack"
                        className="w-60 sm:w-80 md:w-96 lg:w-125 xl:w-150"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;
