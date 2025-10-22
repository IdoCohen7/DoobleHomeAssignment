import React from "react";
import WhiteLogo from "../assets/images/footer/whitelogo.png";
export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="upper-footer">
          <div className="footer-links">
            <h2 className="first-header">אנחנו פה בשבילך ונשמח לעזור!</h2>
            <a className="help-bttn">צרו איתנו קשר {"  >"}</a>
            <div className="footer-detail">
              <p>כתובת: דרך מנחם בגין 74, ת.ד 51231</p>
              <p>תל-אביב 6721516</p>
            </div>
            <div className="footer-detail">
              <p>כתובת: דרך מנחם בגין 74, ת.ד 51231</p>
              <p>תל-אביב 6721516</p>
            </div>
          </div>
          <div className="footer-links">
            <h2>מידע כללי</h2>
            <div className="info-container">
              <div className="info-column">
                <a>ארכיון חוזי ביטוח</a>
                <a>פניות הציבור</a>
                <a>הצהרת חופש המידע</a>
                <a>אמנת שירות</a>
              </div>
              <div className="info-column">
                <a>מאגר ספקים</a>
                <a>שירות לקוחות</a>
                <a>מדריך שאלות ותשובות</a>
                <a>פרסום הסדרי נגישות</a>
                <a>מכרזים</a>
                <a>דרושים</a>
              </div>
            </div>
          </div>
          <div className="footer-links">
            <img src={WhiteLogo} alt="Logo" loading="lazy" height={104} />
          </div>
        </div>
        <div className="lower-footer">
          <div className="credits">
            <div className="credits-text">
              <span>
                <span> © כל הזכויות שמורות לקנט חברה לביטוח בע"מ 2024</span>
                <span> | </span>
                <span>מפת אתר</span>
                <span> | </span>
                <span>תנאי שימוש ופרטיות</span>
                <span> | </span>
                <span>הצהרת נגישות</span>
              </span>
            </div>
            <div className="dooble">
              <p>dooble</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
