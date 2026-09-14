interface Technology {
    id: number;
    name: string;
    category: string;
    icon: React.ReactNode;
}

interface StackPanelProps {
    stack: Technology[];
    removeFromStack: (id: number) => void;
    removeAll: () => void;
}

const iconColorMap: Record<string, string> = {
    React: "text-cyan-500",
    "Vue.js": "text-green-500",
    Svelte: "text-orange-500",
    "Next.js": "text-black",
    "Node.js": "text-green-600",
    PostgreSQL: "text-blue-500",
    Redis: "text-red-500",
    JavaScript: "text-yellow-400",
    TypeScript: "text-blue-400",
    Java: "text-red-500",
    "Tailwind CSS": "text-cyan-500",
    Docker: "text-blue-500",
};

const StackPanel = ({
    stack,
    removeFromStack,
    removeAll,
}: StackPanelProps) => {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

            <h2 className="text-lg font-bold text-gray-900">
                Your Stack
            </h2>

            <p className="mt-1 text-sm text-gray-500">
                {stack.length} Technology Selected
            </p>

            <div className="mt-5 space-y-3">
                {stack.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center justify-between rounded-lg border border-gray-200 p-3"
                    >
                        <div className="flex items-center gap-3">

                            <div
                                className={`text-2xl ${
                                    iconColorMap[item.name] ||
                                    "text-gray-500"
                                }`}
                            >
                                {item.icon}
                            </div>

                            <div>
                                <span className="font-medium text-gray-900">
                                    {item.name}
                                </span>

                                <p className="text-xs text-gray-400">
                                    {item.category}
                                </p>
                            </div>

                        </div>

                        <button
                            onClick={() => removeFromStack(item.id)}
                            className="text-gray-400 hover:text-red-500 text-xl cursor-pointer"
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>

            {stack.length > 0 && (
                <button
                    onClick={removeAll}
                    className="mt-5 w-full rounded-md border border-red-200 py-2 text-sm font-medium text-red-500 hover:bg-red-50 cursor-pointer"
                >
                    Remove All
                </button>
            )}
        </div>
    );
};

export default StackPanel;