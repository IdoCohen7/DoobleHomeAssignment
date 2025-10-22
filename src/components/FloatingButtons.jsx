import React from "react";
import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import useIsMobile from "../hooks/useIsMobile";

export default function FloatingButtons() {
  const isMobile = useIsMobile();

  return (
    <div className="floating-buttons">
      {!isMobile && (
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn floating-btn--whatsapp"
          aria-label="פתח שיחה ב-WhatsApp"
        >
          <FaWhatsapp size={28} />
        </a>
      )}
      <button className="floating-btn floating-btn--chat" aria-label="פתח צ'אט">
        <MessageCircle size={28} strokeWidth={2} />
      </button>
    </div>
  );
}
