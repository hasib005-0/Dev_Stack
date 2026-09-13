const StackPanel = ({ stack, removeFromStack, removeAll }) => {
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
                            <div className="text-2xl text-cyan-500">
                                {item.icon}
                            </div>

                            <span className="font-medium">
                                {item.name}
                            </span>
                        </div>

                        <button
                            onClick={() => removeFromStack(item.id)}
                            className="text-gray-400 hover:text-red-500"
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>

            {stack.length > 0 && (
                <button
                    onClick={removeAll}
                    className="mt-5 w-full rounded-md border border-red-200 py-2 text-sm font-medium text-red-500 hover:bg-red-50"
                >
                    Remove All
                </button>
            )}
        </div>
    );
};

export default StackPanel;
