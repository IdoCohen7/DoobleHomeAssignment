import React from "react";

export default function News() {
  return (
    <>
      <div className="news-container">
        <div className="news-header">
          <h2 className="news-title">מה חדש בקנט?</h2>
        </div>

        <section className="news-grid">
          {/* HERO */}
          <article className="news-hero">
            <img
              className="news-hero__img"
              src="/images/hero.jpg" /* החלף לתמונה שלך */
              alt="דולור טיס אטמט קונסקוור לורם איפסום"
            />
            <div className="news-hero__overlay">
              <time className="news-hero__date">22.08.20</time>
              <h3 className="news-hero__title">
                לורם איפסום דולור סיט אמט קונסקוור
              </h3>
              <p className="news-hero__subtitle">
                קונסקוור אדיפיסינג אליט מיחוצים קלאצי
              </p>
              <a className="news-hero__link" href="#">
                עוד קרא
              </a>
            </div>
          </article>

          {/* LIST */}
          <ul className="news-list">
            <li className="news-card">
              <img
                className="news-card__thumb"
                src="/images/card1.jpg"
                alt=""
              />
              <div className="news-card__body">
                <time className="news-card__date">22.08.20</time>
                <h4 className="news-card__title">
                  נוסטי קלובר בריקנה סתום לפריק
                </h4>
                <p className="news-card__excerpt">
                  לורם איפסום דולור סיט אמט קונסקוור אדיפיסינג…
                </p>
                <a className="news-card__link" href="#">
                  עוד קרא
                </a>
              </div>
            </li>

            <li className="news-card">
              <img
                className="news-card__thumb"
                src="/images/card2.jpg"
                alt=""
              />
              <div className="news-card__body">
                <time className="news-card__date">22.08.20</time>
                <h4 className="news-card__title">
                  גול מונפר סובריט לורם שבק יהול
                </h4>
                <p className="news-card__excerpt">לורם איפסום דולור סיט אמט…</p>
                <a className="news-card__link" href="#">
                  עוד קרא
                </a>
              </div>
            </li>

            <li className="news-card">
              <img
                className="news-card__thumb"
                src="/images/card3.jpg"
                alt=""
              />
              <div className="news-card__body">
                <time className="news-card__date">22.08.20</time>
                <h4 className="news-card__title">
                  קונדימנטום קורום בלינקה נוסטי
                </h4>
                <p className="news-card__excerpt">לורם איפסום דולור סיט אמט…</p>
                <a className="news-card__link" href="#">
                  עוד קרא
                </a>
              </div>
            </li>
          </ul>
        </section>

        <a className="news-cta" href="#">
          לכל החדשות
        </a>
      </div>
    </>
  );
}
