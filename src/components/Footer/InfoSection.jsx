import React from "react";
import { ChevronDown } from "lucide-react";
import useIsMobile from "../../hooks/useIsMobile";

export default function InfoSection() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="mobile-info-header">
        <h2>מידע כללי</h2>
        <ChevronDown size={24} strokeWidth={2.5} />
      </div>
    );
  }

  return (
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
  );
}
