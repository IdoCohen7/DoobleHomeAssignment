import Carousel from "./components/Carousel.jsx";
import Navbar from "./components/Navbar.jsx";
import { carouselObjects } from "./data/carouselObjects.js";
import Branches from "./components/Branches.jsx";
import { branchObjects } from "./data/branchObjects.js";

function App() {
  return (
    <>
      <Navbar />
      <Carousel carouselItems={carouselObjects} />
      <Branches branchItems={branchObjects} />
    </>
  );
}

export default App;
