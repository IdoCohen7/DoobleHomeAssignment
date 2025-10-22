import { lazy, Suspense } from "react";
import Carousel from "./components/Carousel.jsx";
import Navbar from "./components/Navbar.jsx";
import { carouselObjects } from "./data/carouselObjects.js";
import Branches from "./components/Branches.jsx";
import { branchObjects } from "./data/branchObjects.js";
import { newsObjects } from "./data/newsObjects.js";

// Lazy load below-the-fold components
const Gallery = lazy(() => import("./components/Gallery.jsx"));
const News = lazy(() => import("./components/News.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));

function App() {
  return (
    <>
      <Navbar />
      <Carousel carouselItems={carouselObjects} />
      <Branches branchItems={branchObjects} />
      <Suspense fallback={<div style={{ minHeight: "500px" }} />}>
        <Gallery />
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: "600px" }} />}>
        <News newsItems={newsObjects} />
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: "400px" }} />}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
