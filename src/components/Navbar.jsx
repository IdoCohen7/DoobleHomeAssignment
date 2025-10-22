import React from "react";
import logo from "../assets/images/logo.svg";
import { UserRound, Search, Sun, ChevronDown, Menu } from "lucide-react";
import useIsMobile from "../hooks/useIsMobile";

export default function Navbar() {
  const navigationItems = [
    { label: "ענפי ביטוח", link: "/" },
    { label: "אודות", link: "/" },
    { label: "מה חדש?", link: "/" },
    { label: "שירות לקוחות", link: "/" },
  ];

  const isMobile = useIsMobile(1200);

  return (
    <>
      <header className="navbar">
        <div>
          <img
            className="logo"
            src={logo}
            alt="לוגו האתר"
            loading="eager"
            decoding="async"
          />
        </div>

        <div className="interactive">
          {/* mobile view*/}
          {isMobile ? (
            <div className="mobile-placeholder"></div>
          ) : (
            <div className="navigation">
              {navigationItems.map((item) => (
                <a className="nav-link" key={item.label} href={item.link}>
                  {item.label}
                </a>
              ))}
            </div>
          )}
          <div className="settings">
            <div className="settings-bttns">
              {isMobile ? null : (
                <button className="lang-btn" aria-label="שינוי שפה">
                  <ChevronDown size={16} strokeWidth={2.5} />
                  English
                </button>
              )}

              <button className="icon-btn" aria-label="חיפוש">
                <Search size={24} strokeWidth={2.5} />
              </button>
              <button className="icon-btn" aria-label="מצב כהה">
                <Sun size={24} strokeWidth={2.5} />
              </button>
            </div>

            {isMobile ? (
              <button className="icon-btn" aria-label="פתיחת תפריט">
                <Menu size={28} strokeWidth={2.5} />
              </button>
            ) : (
              <a href="#" className="login-btn">
                <span className="login-btn__icon">
                  <UserRound size={20} strokeWidth={2} color="#fff" />
                </span>
                כניסה לאזור אישי
              </a>
            )}
          </div>
        </div>
      </header>
      <div className="navbar-spacer"></div>
    </>
  );
}
