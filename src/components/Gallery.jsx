import React from "react";
import Camera from "../assets/images/gallery/camera.png";
import Broccoli from "../assets/images/gallery/broccoli.png";
import TallTrees from "../assets/images/gallery/tallTrees.jpg";
import SmokeyFields from "../assets/images/gallery/smokeyFields.png";
import { ChevronLeft } from "lucide-react";

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
              לצפייה בגלריה
              <ChevronLeft size={20} strokeWidth={2.5} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="gallery-pictures">
          <div className="picture-frame picture-frame--higher">
            <img
              className="picture-item"
              src={TallTrees}
              alt="עצים גבוהים בנוף חקלאי ירוק"
              loading="lazy"
              decoding="async"
              width="400"
              height="400"
            />
            <div className="photographer-name">צלם: יוסי דגן</div>
          </div>
          <div className="picture-frame picture-frame--lower">
            <img
              className="picture-item"
              src={SmokeyFields}
              alt="שדות חקלאיים עם אפקט עשן ערפילי"
              loading="lazy"
              decoding="async"
              width="400"
              height="400"
            />
            <div className="photographer-name">צלם: דני מכליס</div>
          </div>
        </div>
        <div className="camera-image" aria-hidden="true">
          <img src={Camera} alt="" width="200" height="200" />
        </div>
        <div className="broccoli-image" aria-hidden="true">
          <img src={Broccoli} alt="" width="200" height="200" />
        </div>
      </section>
    </>
  );
}
