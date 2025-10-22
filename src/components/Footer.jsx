import React from "react";
import WhiteLogo from "../assets/images/footer/whitelogo.png";
import { ChevronLeft } from "lucide-react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="upper-footer">
          <div className="footer-links">
            <h2 className="first-header">אנחנו פה בשבילך ונשמח לעזור!</h2>
            <a className="help-bttn" href="#" aria-label="צרו איתנו קשר">
              צרו איתנו קשר
              <ChevronLeft size={20} strokeWidth={2.5} aria-hidden="true" />
            </a>
            <div className="details-container">
              <div className="footer-detail">
                <p>כתובת: דרך מנחם בגין 74, ת.ד 51231</p>
                <p>תל-אביב 6721516</p>
              </div>
              <div className="footer-detail">
                <p>טלפון: 03-6270200</p>
              </div>
              <div className="footer-detail">
                <p>פקס: 03-6270206</p>
              </div>
              <div className="footer-detail">
                <p>דוא"ל: kanat@kanat.co.il</p>
              </div>
            </div>
          </div>
          <nav className="footer-links" aria-label="מידע כללי">
            <h2>מידע כללי</h2>
            <div className="info-container">
              <div className="info-column">
                <a href="#">ארכיון חוזי ביטוח</a>
                <a href="#">פניות הציבור</a>
                <a href="#">הצהרת חופש המידע</a>
                <a href="#">אמנת שירות</a>
              </div>
              <div className="info-column">
                <a href="#">מאגר ספקים</a>
                <a href="#">שירות לקוחות</a>
                <a href="#">מדריך שאלות ותשובות</a>
                <a href="#">פרסום הסדרי נגישות</a>
                <a href="#">מכרזים</a>
                <a href="#">דרושים</a>
              </div>
            </div>
          </nav>
          <div className="footer-links footer-logo-column">
            <img
              src={WhiteLogo}
              className="white-logo"
              alt="לוגו קנט"
              loading="lazy"
              width="150"
              height="104"
            />
            <div className="social-media-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <FaTelegram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="lower-footer">
          <div className="credits">
            <div className="credits-text">
              <span>
                <span> © כל הזכויות שמורות לקנט חברה לביטוח בע"מ 2024</span>
                <span> | </span>
                <a href="#">מפת אתר</a>
                <span> | </span>
                <a href="#">תנאי שימוש ופרטיות</a>
                <span> | </span>
                <a href="#">הצהרת נגישות</a>
              </span>
            </div>
            <div className="dooble">
              <p>dooble</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
