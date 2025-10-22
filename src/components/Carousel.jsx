import React, { useState, useEffect } from "react";
import { PauseCircle, PlayCircle } from "lucide-react";
import AgricultureLogo from "../assets/images/carousel/israeliAgriculture.png";

export default function Carousel(props) {
  const { carouselItems } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const currentItem = carouselItems[currentIndex];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [carouselItems.length, isPaused]);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const carouselHeader = (
    <div className={`carousel-header ${isPaused ? "paused" : ""}`}>
      <button
        className="carousel-header-pause"
        onClick={togglePause}
        aria-label={isPaused ? "המשך גלילה" : "השהה גלילה"}
      >
        {isPaused ? (
          <PlayCircle size={24} strokeWidth={2.5} />
        ) : (
          <PauseCircle size={24} strokeWidth={2.5} />
        )}
      </button>
      <h3>חדשות ועדכונים</h3>
      <h3 aria-hidden="true">|</h3>
      <p className="carousel-header-text">
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
          <div className="carousel-controls">
            <button
              className="carousel-play-pause"
              onClick={togglePause}
              aria-label={
                isPaused ? "המשך הצגה אוטומטית" : "השהה הצגה אוטומטית"
              }
            >
              {isPaused ? (
                <PlayCircle size={32} strokeWidth={2} />
              ) : (
                <PauseCircle size={32} strokeWidth={2} />
              )}
            </button>
            <div className="carousel-indicators">
              {carouselItems.slice(0, 5).map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`עבור לשקופית ${index + 1}`}
                  aria-current={index === currentIndex ? "true" : "false"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
