import "../App.css";
import { Header } from "../components/Header";
import Gridproducts from "../components/Startpage/Gridproducts";
import { Footer } from "../components/Footer";

const Landing = () => {
    return (
        <div>
            <Header/>
            <Gridproducts />
            <Footer />
        </div>
    );
};

export default Landing;