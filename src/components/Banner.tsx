import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <section className="container mx-auto px-6 py-16">
            <div className="flex items-center justify-between">

                <div className="w-3/5">
                    <h1 className="text-7xl font-bold leading-tight">
                        Build Your Ideal
                        <br />
                        <span className="bg-linear-to-r from-orange-600 via-pink-600 to-violet-700 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="text-gray-500 mt-4 max-w-lg text-[14px]">
                        Explore frontend, backend, database, and tooling options.
                        Compare them side by side, and put together the stack
                        that fits your next project.
                    </p>

                    <div className="flex gap-4 mt-6">
                        <button className="bg-linear-to-r from-orange-600 to-pink-600 hover:from-orange-500 hover:to-purple-600 text-white px-5 py-2 rounded-md text-xl font-semibold cursor-pointer transition-all duration-300">
                            Explore Technologies
                        </button>

                        <button className="border border-gray-200 px-5 py-2 rounded-md text-xl cursor-pointer">
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="w-2/5 flex justify-center">
                    <img
                        src={BannerImg}
                        alt="Development Stack"
                        className="w-150"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;