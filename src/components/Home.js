
import NavBar from "./Navbar";
import HeroSection from "./HeroSection";

function Home() {

  return (
    <div>
      <NavBar />
      <div className="hero-main">
        <HeroSection />
      </div>
    </div>
  );
}

export default Home;