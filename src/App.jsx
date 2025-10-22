import Carousel from "./components/Carousel.jsx";
import Navbar from "./components/Navbar.jsx";
import { carouselObjects } from "./data/carouselObjects.js";
import Branches from "./components/Branches.jsx";
import { branchObjects } from "./data/branchObjects.js";
import Gallery from "./components/Gallery.jsx";
import Footer from "./components/Footer.jsx";
import News from "./components/News.jsx";
import { newsObjects } from "./data/newsObjects.js";

function App() {
  return (
    <>
      <Navbar />
      <Carousel carouselItems={carouselObjects} />
      <Branches branchItems={branchObjects} />
      <Gallery />
      <News newsItems={newsObjects} />
      <Footer />
    </>
  );
}

export default App;
