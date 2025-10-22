import React from "react";
import { ChevronLeft } from "lucide-react";

export default function ContactSection() {
  return (
    <>
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
    </>
  );
}
