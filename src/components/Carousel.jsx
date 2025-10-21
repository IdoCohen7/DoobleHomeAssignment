import React, { useState, useEffect } from "react";
import { PauseCircle } from "lucide-react";
import AgricultureLogo from "../assets/images/carousel/israeliAgriculture.png";
export default function Carousel(props) {
  const { carouselItems } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const currentItem = carouselItems[currentIndex];

  // Preload all carousel images
  useEffect(() => {
    const imagePromises = carouselItems.map((item) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = item.image;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Failed to load carousel images:", err));
  }, [carouselItems]);

  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [carouselItems.length, imagesLoaded]);

  const carouselHeader = (
    <div className="carousel-header">
      <PauseCircle size={24} strokeWidth={2.5} aria-hidden="true" />
      <h3>חדשות ועדכונים</h3>
      <h3>|</h3>
      <p>
        כדי להמנע מהמתנה ממושכת במענה הטלפוני שלנו, אנחנו מזמינים אתכם לפנות
        אלינו בדיגיטל
      </p>
    </div>
  );

  return (
    <>
      <div className="carousel-container">
        {carouselHeader}
        {!imagesLoaded ? (
          <div
            className="carousel"
            style={{
              backgroundColor: "#f0f0f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "#666" }}>טוען תמונות...</p>
          </div>
        ) : (
          <div
            className="carousel"
            style={{ backgroundImage: `url(${currentItem.image})` }}
          >
            <div className="carousel-window">
              <img
                src={AgricultureLogo}
                alt="לוגו משרד החקלאות"
                className="agriculture-logo"
              />
              {currentItem.header && <h2>{currentItem.header}</h2>}
              {currentItem.subHeader && <h3>{currentItem.subHeader}</h3>}
              {currentItem.text && <p>{currentItem.text}</p>}
              {currentItem.button && currentItem.buttonLink && (
                <a href={currentItem.buttonLink} className="carousel-btn">
                  {currentItem.button}
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
