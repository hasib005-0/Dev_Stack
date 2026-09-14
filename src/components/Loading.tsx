const Loading = () => {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-pink-600 rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;