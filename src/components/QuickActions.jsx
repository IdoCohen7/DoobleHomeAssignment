// QuickActions.jsx
import useIsMobile from "../hooks/useIsMobile";
import { ChevronLeft } from "lucide-react";
import policiesIcon from "../assets/images/quickActions/policies.png";
import damageIcon from "../assets/images/quickActions/damage.png";
import statusIcon from "../assets/images/quickActions/status.png";
import editIcon from "../assets/images/quickActions/edit.png";

export default function QuickActions({ insideCarousel = false }) {
  const isMobile = useIsMobile();

  const handleBackClick = () => {
    window.history.back();
  };

  // Don't render if we're trying to show inside carousel on mobile
  if (insideCarousel && isMobile) return null;

  // Don't render if we're trying to show as standalone on desktop
  if (!insideCarousel && !isMobile) return null;

  return (
    <aside
      className={`quick-actions ${
        insideCarousel ? "quick-actions--carousel" : ""
      }`}
      aria-label="שירותים מהירים"
    >
      <header className="qa-header">
        <button
          className="qa-back"
          onClick={handleBackClick}
          aria-label="חזור"
        ></button>
        <h3>שירותים מהירים</h3>
        <ChevronLeft size={24} strokeWidth={2.5} />
      </header>

      <ul className="qa-list" role="list">
        <li role="listitem">
          <a href="#" aria-label="הפוליסות שלי">
            <img src={policiesIcon} alt="" aria-hidden="true" />
            <span>הפוליסות שלי</span>
          </a>
        </li>
        <li role="listitem">
          <a href="#" aria-label="הגשת בקשה להודעת נזק">
            <img src={damageIcon} alt="" aria-hidden="true" />
            <span>הגשת בקשה להודעת נזק</span>
          </a>
        </li>
        <li role="listitem">
          <a href="#" aria-label="בירור סטטוס תביעה">
            <img src={statusIcon} alt="" aria-hidden="true" />
            <span>בירור סטטוס תביעה</span>
          </a>
        </li>
        <li role="listitem">
          <a href="#" aria-label="עדכון פרטים אישיים">
            <img src={editIcon} alt="" aria-hidden="true" />
            <span>עדכון פרטים אישיים</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
