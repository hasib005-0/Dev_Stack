import Banner from "./components/Banner";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <Nav />
            <Banner/>
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