import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { UserRound, Search, Sun, ChevronDown, Menu, X } from "lucide-react";
import useIsMobile from "../hooks/useIsMobile";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
        {isSearchOpen ? (
          <div className="search-bar">
            <input
              type="text"
              className="search-input"
              placeholder="מה ברצונכם לחפש?"
              autoFocus
            />
            <div className="search-actions">
              <button
                className="search-close-btn"
                aria-label="סגירת חיפוש"
                onClick={() => setIsSearchOpen(false)}
              >
                <X size={24} strokeWidth={2.5} />
              </button>
              <button className="search-icon-btn" aria-label="חיפוש">
                <Search size={24} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        ) : (
          <>
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

                  <button
                    className="icon-btn"
                    aria-label="חיפוש"
                    onClick={() => setIsSearchOpen(true)}
                  >
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
          </>
        )}
      </header>
      <div className="navbar-spacer"></div>
    </>
  );
}
