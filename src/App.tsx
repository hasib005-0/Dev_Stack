import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (document.readyState === "complete") {
            setLoading(false);
        } else {
            window.addEventListener("load", () => {
                setLoading(false);
            });
        }

        return () => {
            window.removeEventListener("load", () => {
                setLoading(false);
            });
        };
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Nav />
            <Banner />
            <Card />
            <Footer />

            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                newestOnTop={true}
                closeOnClick
                pauseOnHover
            />
        </>
    );
}

export default App;