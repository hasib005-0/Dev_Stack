import { FaJava } from "react-icons/fa";

const Card10 = ({ addToStack, isSelected }) => {
    const javaData = {
        id: 10,
        name: "Java",
        category: "Backend",
        icon: <FaJava />,
    };

    return (
        <div className="w-full h-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between mt-5">
                <div className="text-3xl text-red-500">
                    <FaJava />
                </div>
                <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-500">
                    Robust
                </span>
            </div>

            <h2 className="mt-6 text-xl font-bold text-gray-900">Java</h2>

            <p className="mt-6 text-sm leading-5 text-gray-500">
                A versatile, object-oriented programming language for building scalable applications.
            </p>

            <div className="mt-6 flex items-center justify-between text-xs text-gray-500">
                <span className="rounded-md bg-gray-50 px-2 py-1">Backend</span>
                <span>Beginner-Friendly</span>
                <span className="text-yellow-500">★ 4.7</span>
            </div>

            <button
                onClick={() => addToStack(javaData)}
                className={`mt-10 w-full rounded-md py-2.5 cursor-pointer text-sm font-medium text-white transition mb-6 ${
                    isSelected
                        ? "bg-pink-600 hover:bg-pink-700"
                        : "bg-gray-900 hover:bg-pink-600"
                }`}
            >
                {isSelected ? "Added to Stack" : "Add to Stack"}
            </button>
        </div>
    );
};

export default Card10;
