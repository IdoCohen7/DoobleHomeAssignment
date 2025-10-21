import Carousel from "./components/Carousel.jsx";
import Navbar from "./components/Navbar.jsx";
import { carouselObjects } from "./data/carouselObjects.js";
import Branches from "./components/Branches.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Carousel carouselItems={carouselObjects} />
      <Branches />
    </>
  );
}

export default App;
