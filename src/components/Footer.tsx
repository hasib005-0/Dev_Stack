const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 py-16">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                            <div className="w-7 h-7 rounded-md bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                <span className="text-white text-sm font-bold">
                                    DS
                                </span>
                            </div>

                            <h2 className="text-lg font-bold text-gray-800">
                                Dev <span className="text-pink-500">Stack</span>
                            </h2>
                        </div>

                        <p className="text-sm text-gray-400 leading-6 mb-5 max-w-sm mx-auto md:mx-0">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        <div className="flex justify-center md:justify-start gap-5">
                            <a
                                href="#"
                                className="text-sm font-medium text-gray-600 hover:text-purple-500"
                            >
                                GitHub
                            </a>

                            <a
                                href="#"
                                className="text-sm font-medium text-gray-600 hover:text-purple-500"
                            >
                                Twitter
                            </a>

                            <a
                                href="#"
                                className="text-sm font-medium text-gray-600 hover:text-purple-500"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <h3 className="text-xs font-bold text-gray-700 uppercase mb-5">
                            Product
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-400 hover:text-gray-700"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-400 hover:text-gray-700"
                                >
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-400 hover:text-gray-700"
                                >
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="hidden md:block">
                        <h3 className="text-xs font-bold text-gray-700 uppercase mb-5">
                            Company
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-400 hover:text-gray-700"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-400 hover:text-gray-700"
                                >
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-400 hover:text-gray-700"
                                >
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="hidden md:block">
                        <h3 className="text-xs font-bold text-gray-700 uppercase mb-5">
                            Legal
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-400 hover:text-gray-700"
                                >
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-400 hover:text-gray-700"
                                >
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-100 mt-10 pt-5 flex flex-row justify-between items-center gap-3">

                    <p className="text-xs text-gray-400 whitespace-nowrap">
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex gap-5 sm:gap-6">
                        <a
                            href="#"
                            className="text-xs text-gray-400 hover:text-gray-700 whitespace-nowrap"
                        >
                            Privacy
                        </a>

                        <a
                            href="#"
                            className="text-xs text-gray-400 hover:text-gray-700 whitespace-nowrap"
                        >
                            Terms
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;