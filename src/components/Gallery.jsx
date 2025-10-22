import React from "react";
import Camera from "../assets/images/gallery/camera.png";
import TallTrees from "../assets/images/gallery/tallTrees.jpg";
import SmokeyFields from "../assets/images/gallery/smokeyFields.png";

export default function Gallery() {
  return (
    <>
      <section className="gallery-container" aria-labelledby="gallery-title">
        <div className="gallery-header">
          <div className="gallery-text">
            <h2 id="gallery-title">הגלריה החקלאית</h2>
            <p>
              תחרות "הגלריה החקלאית" של קנט חושפת לציבור הרחב את תרומתה הגדולה
              של החקלאות לפיתוחה של המדינה ואת יופיים המרהיב של החקלאות, הטבע
              והנוף בישראל.
            </p>
            <a
              href="#"
              className="gallery-button"
              aria-label="לצפייה בגלריה המלאה"
            >
              לצפייה בגלריה {">"}
            </a>
          </div>
        </div>
        <div className="gallery-pictures">
          <div>
            <img
              className="picture-item"
              src={TallTrees}
              alt="עצים גבוהים בנוף חקלאי ירוק"
              loading="lazy"
              decoding="async"
              width="400"
              height="400"
            />
          </div>
          <div>
            <img
              className="picture-item"
              src={SmokeyFields}
              alt="שדות חקלאיים עם אפקט עשן ערפילי"
              loading="lazy"
              decoding="async"
              width="400"
              height="400"
            />
          </div>
        </div>
        <div className="camera-image" aria-hidden="true">
          <img src={Camera} alt="" width="200" height="200" />
        </div>
      </section>
    </>
  );
}
