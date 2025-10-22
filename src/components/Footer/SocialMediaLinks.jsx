import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";

export default function SocialMediaLinks() {
  const socialLinks = [
    { href: "https://telegram.org", icon: FaTelegram, label: "Telegram" },
    { href: "https://linkedin.com", icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://youtube.com", icon: FaYoutube, label: "YouTube" },
    { href: "https://instagram.com", icon: FaInstagram, label: "Instagram" },
    { href: "https://twitter.com", icon: FaTwitter, label: "Twitter" },
    { href: "https://facebook.com", icon: FaFacebook, label: "Facebook" },
  ];

  return (
    <nav className="social-media-links" aria-label="קישורי רשתות חברתיות">
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`עקוב אחרינו ב-${label}`}
        >
          <Icon size={24} aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
