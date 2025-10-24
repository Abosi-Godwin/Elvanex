import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import SlideDown from "../components/SlideDown";

const Header = () => {
  return (
    <header className="relative pt-20 md:h-dvh">
      <NavBar />
      <Hero />
      <SlideDown />
    </header>
  );
};

export default Header;
