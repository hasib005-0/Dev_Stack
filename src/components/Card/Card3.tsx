import { SiSvelte } from "react-icons/si";
import type { ReactNode } from "react";

interface Technology {
    id: number;
    name: string;
    category: string;
    icon: ReactNode;
}

interface CardProps {
    addToStack: (technology: Technology) => void;
    isSelected: boolean;
}

const Card3 = ({ addToStack, isSelected }: CardProps) => {
    const svelteData = {
        id: 3,
        name: "Svelte",
        category: "Frontend",
        icon: <SiSvelte />,
    };

    return (
        <div className="w-full h-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between mt-5">
                <div className="text-3xl text-red-500">
                    <SiSvelte />
                </div>

                <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-500">
                    Fast
                </span>
            </div>

            <h2 className="mt-6 text-xl font-bold text-gray-900">
                Svelte
            </h2>

            <p className="mt-6 text-sm leading-5 text-gray-500">
                A lightweight, JavaScript framework for building fast and interactive web interfaces.
            </p>

            <div className="mt-6 flex items-center justify-between text-xs text-gray-500">
                <span className="rounded-md bg-gray-50 px-2 py-1">
                    Frontend
                </span>

                <span>
                    Beginner-Friendly
                </span>

                <span className="text-yellow-500">
                    ★ 4.8
                </span>
            </div>

            <button
                onClick={() => addToStack(svelteData)}
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

export default Card3;