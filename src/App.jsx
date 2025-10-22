import { lazy, Suspense } from "react";
import Carousel from "./components/Carousel.jsx";
import Navbar from "./components/Navbar.jsx";
import { carouselObjects } from "./data/carouselObjects.js";
import { branchObjects } from "./data/branchObjects.js";
import { newsObjects } from "./data/newsObjects.js";

// Lazy load below-the-fold components for faster initial load
const QuickActions = lazy(() => import("./components/QuickActions.jsx"));
const Branches = lazy(() => import("./components/Branches.jsx"));
const Gallery = lazy(() => import("./components/Gallery.jsx"));
const News = lazy(() => import("./components/News.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));
const FloatingButtons = lazy(() => import("./components/FloatingButtons.jsx"));

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Carousel carouselItems={carouselObjects} />
        <Suspense fallback={<div style={{ minHeight: "200px" }} />}>
          <QuickActions />
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: "600px" }} />}>
          <Branches branchItems={branchObjects} />
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: "500px" }} />}>
          <Gallery />
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: "600px" }} />}>
          <News newsItems={newsObjects} />
        </Suspense>
      </main>
      <Suspense fallback={<div style={{ minHeight: "400px" }} />}>
        <Footer />
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: "120px" }} />}>
        <FloatingButtons />
      </Suspense>
    </>
  );
}

export default App;
