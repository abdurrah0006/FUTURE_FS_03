import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import About from "../../components/About/About";
import Menu from "../../components/Menu/Menu";
import StudentOffer from "../../components/StudentOffer/StudentOffer";
import Workspace from "../../components/Workspace/Workspace";
import Gallery from "../../components/Gallery/Gallery";
import Reviews from "../../components/Reviews/Reviews";
import Reservation from "../../components/Reservation/Reservation";
import Contact from "../../components/Contact/Contact";
import "./Home.css";

const Home = () => {
  return (
    <main className="home">
      <Hero />
      <Features />
      <About />
      <Menu />
      <StudentOffer />
      <Workspace />
      <Gallery />
      <Reviews />
      <Reservation />
      <Contact />
    </main>
  );
};

export default Home;