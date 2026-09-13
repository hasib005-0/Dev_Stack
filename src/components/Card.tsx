import { useState, type ReactNode } from "react";
import { toast } from "react-toastify";
import Card1 from "./Card/Card1";
import Card2 from "./Card/Card2";
import Card3 from "./Card/Card3";
import Card4 from "./Card/Card4";
import Card5 from "./Card/Card5";
import Card6 from "./Card/Card6";
import Card7 from "./Card/Card7";
import Card8 from "./Card/Card8";
import Card9 from "./Card/Card9";
import Card10 from "./Card/Card10";
import Card11 from "./Card/Card11";
import Card12 from "./Card/Card12";

interface Technology {
    id: number;
    name: string;
    category: string;
    icon: ReactNode;
}

const Card = () => {
    const [stack, setStack] = useState<Technology[]>([]);

    const addToStack = (technology: Technology) => {
        const alreadyExists = stack.some(
            (item) => item.id === technology.id
        );

        if (alreadyExists) {
            toast.info(`${technology.name} is already in your stack`);
            return;
        }

        setStack((prev) => [...prev, technology]);
        toast.success(`${technology.name} added to your stack`);
    };

    const removeFromStack = (id: number) => {
        const technology = stack.find((item) => item.id === id);

        setStack((prev) => prev.filter((item) => item.id !== id));

        if (technology) {
            toast.error(`${technology.name} removed from your stack`);
        }
    };

    const removeAll = () => {
        if (stack.length === 0) {
            toast.info("Your stack is already empty");
            return;
        }

        setStack([]);
        toast.error("All technologies removed from your stack");
    };

    const isSelected = (id: number) => {
        return stack.some((item) => item.id === id);
    };

    return (
        <div className="flex flex-col bg-white container mx-auto px-4">
            <div className="h-20 bg-white">
                <span className="text-black text-5xl font-bold">
                    Explore the
                </span>

                <span className="font-bold bg-linear-to-r from-pink-600 to-purple-500 bg-clip-text text-transparent text-5xl ml-2">
                    Technologies
                </span>

                <br />

                <p className="text-gray-500 text-[18px] mt-4">
                    Pick one technology per category to build your ideal stack
                </p>
            </div>

            <div className="grid grid-cols-4 mt-16">
                <div className="col-span-3 bg-white">
                    <div className="grid grid-cols-3 grid-rows-4 gap-4 mr-4 ml-4 mt-4 mb-4">
                        <Card1
                            addToStack={addToStack}
                            isSelected={isSelected(1)}
                        />

                        <Card2
                            addToStack={addToStack}
                            isSelected={isSelected(2)}
                        />

                        <Card3
                            addToStack={addToStack}
                            isSelected={isSelected(3)}
                        />

                        <Card4
                            addToStack={addToStack}
                            isSelected={isSelected(4)}
                        />

                        <Card5
                            addToStack={addToStack}
                            isSelected={isSelected(5)}
                        />

                        <Card6
                            addToStack={addToStack}
                            isSelected={isSelected(6)}
                        />

                        <Card7
                            addToStack={addToStack}
                            isSelected={isSelected(7)}
                        />

                        <Card8
                            addToStack={addToStack}
                            isSelected={isSelected(8)}
                        />

                        <Card9
                            addToStack={addToStack}
                            isSelected={isSelected(9)}
                        />

                        <Card10
                            addToStack={addToStack}
                            isSelected={isSelected(10)}
                        />

                        <Card11
                            addToStack={addToStack}
                            isSelected={isSelected(11)}
                        />

                        <Card12
                            addToStack={addToStack}
                            isSelected={isSelected(12)}
                        />
                    </div>
                </div>

                <div className="col-span-1 bg-white p-4">
                    <div className="sticky top-24 z-40">
                        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                            <h2 className="text-xl font-bold text-gray-900">
                                Your Cart
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                                {stack.length} Technologies Selected
                            </p>

                            <div className="mt-5 space-y-3">
                                {stack.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between border border-gray-200 rounded-lg px-3 py-3"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="text-xl">
                                                {item.icon}
                                            </div>

                                            <div>
                                                <p className="text-sm font-semibold text-gray-900">
                                                    {item.name}
                                                </p>

                                                <p className="text-xs text-gray-400">
                                                    {item.category}
                                                </p>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() =>
                                                removeFromStack(item.id)
                                            }
                                            className="text-gray-400 hover:text-red-500 text-xl"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {stack.length === 0 && (
                                <p className="text-sm text-gray-400 text-center py-8">
                                    No technology selected
                                </p>
                            )}

                            {stack.length > 0 && (
                                <button
                                    onClick={removeAll}
                                    className="w-full mt-5 border border-red-300 text-red-500 rounded-md py-2 text-sm font-medium hover:bg-red-50"
                                >
                                    Remove All
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;