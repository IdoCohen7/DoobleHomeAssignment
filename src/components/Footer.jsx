import React from "react";
import WhiteLogo from "../assets/images/footer/whitelogo.png";
import useIsMobile from "../hooks/useIsMobile";
import SocialMediaLinks from "./Footer/SocialMediaLinks";
import ContactSection from "./Footer/ContactSection";
import InfoSection from "./Footer/InfoSection";
import FooterCredits from "./Footer/FooterCredits";

export default function Footer() {
  const isMobile = useIsMobile();
  return (
    <>
      <footer className="footer-container">
        <div className="upper-footer">
          {isMobile ? (
            <>
              {/* Mobile Layout */}
              <div className="footer-section mobile-logo-section">
                <img
                  src={WhiteLogo}
                  alt="לוגו קנט"
                  loading="lazy"
                  width="150"
                  height="104"
                />
              </div>

              <div className="footer-section mobile-contact-section">
                <ContactSection />
              </div>

              <div className="footer-section mobile-info-section">
                <InfoSection />
              </div>

              <div className="footer-section mobile-social-section">
                <SocialMediaLinks />
              </div>
            </>
          ) : (
            <>
              {/* Desktop Layout */}
              <div className="footer-links">
                <ContactSection />
              </div>
              <InfoSection />
              <div className="footer-links footer-logo-column">
                <img
                  src={WhiteLogo}
                  className="white-logo"
                  alt="לוגו קנט"
                  loading="lazy"
                  width="150"
                  height="104"
                />
                <SocialMediaLinks />
              </div>
            </>
          )}
        </div>
        <FooterCredits />
      </footer>
    </>
  );
}
