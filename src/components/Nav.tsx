import Logo from "../assets/logo-text.png";

const Nav = () => {
    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">

                <img src={Logo} alt="Dev Stack" className="w-40" />

                <ul className="flex items-center gap-8 text-xl font-semibold">
                    <li className="text-pink-500 cursor-pointer">Home</li>
                    <li className="text-gray-700 cursor-pointer hover:text-pink-500">
                        Technologies
                    </li>
                    <li className="text-gray-700 cursor-pointer hover:text-pink-500">
                        Projects
                    </li>
                    <li className="text-gray-700 cursor-pointer hover:text-pink-500">
                        About
                    </li>
                    <li className="text-gray-700 cursor-pointer hover:text-pink-500">
                        Contact
                    </li>
                </ul>

                <div className="flex items-center gap-5 text-xl font-semibold">
                    <button className="text-gray-700">
                        Sign In
                    </button>

                    <button className="bg-pink-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-pink-700">
                        Sign Up
                    </button>
                </div>

            </div>
            
        </nav>
    );
};

export default Nav;