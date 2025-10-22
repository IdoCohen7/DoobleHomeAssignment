import React, { useState, useEffect } from "react";
import { PauseCircle } from "lucide-react";
import AgricultureLogo from "../assets/images/carousel/israeliAgriculture.png";

export default function Carousel(props) {
  const { carouselItems } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = carouselItems[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const carouselHeader = (
    <div className="carousel-header">
      <PauseCircle size={24} strokeWidth={2.5} aria-hidden="true" />
      <h3>חדשות ועדכונים</h3>
      <h3 aria-hidden="true">|</h3>
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
        <div
          className="carousel"
          style={{ backgroundImage: `url(${currentItem.image})` }}
          role="region"
          aria-label="קרוסלת חדשות ועדכונים"
        >
          <div className="carousel-window">
            <img
              src={AgricultureLogo}
              alt="לוגו משרד החקלאות ופיתוח הכפר"
              className="agriculture-logo"
              loading="lazy"
              decoding="async"
              width="120"
              height="auto"
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
      </div>
    </>
  );
}
