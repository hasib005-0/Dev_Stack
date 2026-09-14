import { useEffect, useState, type ReactNode } from "react";
import { toast } from "react-toastify";
import { FaReact, FaNodeJs, FaJava, FaDocker } from "react-icons/fa";
import {
    SiVuedotjs,
    SiSvelte,
    SiNextdotjs,
    SiPostgresql,
    SiRedis,
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
} from "react-icons/si";

interface TechnologyData {
    id: number;
    name: string;
    category: string;
    description: string;
    icon: string;
    rating: number;
    difficulty: string;
    badge: string;
}

interface Technology extends TechnologyData {
    iconComponent: ReactNode;
}

const iconMap: Record<string, ReactNode> = {
    react: <FaReact />,
    vue: <SiVuedotjs />,
    svelte: <SiSvelte />,
    nextjs: <SiNextdotjs />,
    nodejs: <FaNodeJs />,
    postgresql: <SiPostgresql />,
    redis: <SiRedis />,
    javascript: <SiJavascript />,
    typescript: <SiTypescript />,
    java: <FaJava />,
    tailwind: <SiTailwindcss />,
    docker: <FaDocker />,
};

const iconColorMap: Record<string, string> = {
    react: "text-cyan-500",
    vue: "text-green-500",
    svelte: "text-orange-500",
    nextjs: "text-black",
    nodejs: "text-green-600",
    postgresql: "text-blue-500",
    redis: "text-red-500",
    javascript: "text-yellow-400",
    typescript: "text-blue-400",
    java: "text-red-500",
    tailwind: "text-cyan-500",
    docker: "text-blue-500",
};

const Card = () => {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [stack, setStack] = useState<Technology[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTechnologies = async () => {
            try {
                const response = await fetch("/technologies.json");

                if (!response.ok) {
                    throw new Error("Failed to fetch technologies");
                }

                const data: TechnologyData[] = await response.json();

                const technologyList: Technology[] = data.map(
                    (technology) => ({
                        ...technology,
                        iconComponent: iconMap[technology.icon],
                    })
                );

                setTechnologies(technologyList);
            } catch {
                toast.error("Failed to load technologies");
            } finally {
                setLoading(false);
            }
        };

        loadTechnologies();
    }, []);

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
            <div className="bg-white">
                <div className="text-center md:text-left">
                    <span className="text-black text-3xl sm:text-4xl md:text-5xl font-bold">
                        Explore the
                    </span>

                    <span className="font-bold brand-gradient-text text-3xl sm:text-4xl md:text-5xl ml-2">
                        Technologies
                    </span>
                </div>

                <p className="text-gray-500 text-sm sm:text-base md:text-[18px] mt-4 text-center md:text-left">
                    Pick one technology per category to build your ideal stack
                </p>
            </div>

            {loading ? (
                <div className="flex flex-col items-center justify-center py-24">
                    <div className="w-10 h-10 border-4 border-gray-200 border-t-pink-600 rounded-full animate-spin"></div>

                    <p className="mt-4 text-sm text-gray-500">
                        Loading technologies...
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-4 mt-10 md:mt-16">
                    <div className="col-span-1 md:col-span-3 bg-white">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mr-4 ml-4 mt-4 mb-4">
                            {technologies.map((technology) => (
                                <div
                                    key={technology.id}
                                    className="w-full h-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                                >
                                    <div className="flex items-start justify-between mt-5">
                                        <div
                                            className={`text-3xl ${
                                                iconColorMap[
                                                    technology.icon
                                                ]
                                            }`}
                                        >
                                            {technology.iconComponent}
                                        </div>

                                        {technology.badge && (
                                            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                                                {technology.badge}
                                            </span>
                                        )}
                                    </div>

                                    <h2 className="mt-6 text-xl font-bold text-gray-900">
                                        {technology.name}
                                    </h2>

                                    <p className="mt-6 text-sm leading-5 text-gray-500">
                                        {technology.description}
                                    </p>

                                    <div className="mt-6 flex items-center justify-between text-xs text-gray-500">
                                        <span className="rounded-md bg-gray-50 px-2 py-1">
                                            {technology.category}
                                        </span>

                                        <span>
                                            {technology.difficulty}
                                        </span>

                                        <span className="text-yellow-500">
                                            ★ {technology.rating}
                                        </span>
                                    </div>

                                    <button
                                        onClick={() =>
                                            addToStack(technology)
                                        }
                                        disabled={isSelected(
                                            technology.id
                                        )}
                                        className={`mt-10 w-full rounded-md py-2.5 text-sm font-medium text-white transition mb-6 ${
                                            isSelected(technology.id)
                                                ? "brand-gradient opacity-60 cursor-not-allowed"
                                                : "brand-gradient cursor-pointer hover:opacity-90"
                                        }`}
                                    >
                                        {isSelected(technology.id)
                                            ? "✓ Added to Stack"
                                            : "Add to Stack"}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-1 bg-white p-4">
                        <div className="sticky top-24 z-40">
                            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                                <h2 className="text-xl font-bold text-gray-900">
                                    Your Stack
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
                                                    {item.iconComponent}
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
                                                className="text-gray-400 hover:text-red-500 text-xl cursor-pointer"
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
                                        className="w-full mt-5 border border-red-300 text-red-500 rounded-md py-2 text-sm font-medium hover:bg-red-50 cursor-pointer"
                                    >
                                        Remove All
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;