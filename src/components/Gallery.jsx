import React from "react";
import Camera from "../assets/images/gallery/camera.png";
import TallTrees from "../assets/images/gallery/tallTrees.jpg";
import SmokeyFields from "../assets/images/gallery/smokeyFields.png";

export default function Gallery() {
  return (
    <>
      <div className="gallery-container">
        <div className="gallery-header">
          <div className="gallery-text">
            <h2>הגלריה החקלאית</h2>
            <p>
              תחרות "הגלריה החקלאית" של קנט חושפת לציבור הרחב את תרומתה הגדולה
              של החקלאות לפיתוחה של המדינה ואת יופיים המרהיב של החקלאות, הטבע
              והנוף בישראל.
            </p>
            <a className="gallery-button">לצפייה בגלריה {">"}</a>
          </div>
        </div>
        <div className="gallery-pictures">
          <div>
            <img className="picture-item" src={TallTrees} alt="Tall Trees" />
          </div>
          <div>
            <img
              className="picture-item"
              src={SmokeyFields}
              alt="Smokey Fields"
            />
          </div>
        </div>
        <div className="camera-image">
          <img src={Camera} alt="Camera" />
        </div>
      </div>
    </>
  );
}
