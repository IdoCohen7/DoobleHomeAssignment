import React from "react";
import { ChevronLeft, Play } from "lucide-react";

export default function News(props) {
  const { newsItems } = props;

  // Sort news by date (newest first) and get hero (latest) and list items
  const sortedNews = [...newsItems].sort((a, b) => b.dateObj - a.dateObj);
  const heroNews = sortedNews[0];
  const listNews = sortedNews.slice(1, 4); // Get next 3 items

  return (
    <>
      <section className="news-container" aria-labelledby="news-title">
        <div className="news-header">
          <h2 id="news-title" className="news-title">
            מה חדש בקנט?
          </h2>
          <a className="news-cta" href="#" aria-label="מעבר לכל החדשות">
            לכל החדשות
            <ChevronLeft size={20} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </div>

        <div className="news-grid">
          {/* HERO */}
          <article className="news-hero">
            <img
              className="news-hero__img"
              src={heroNews.image}
              alt={heroNews.title}
              loading="lazy"
              decoding="async"
              width="600"
              height="600"
            />
            {heroNews.video && (
              <div className="news-video-icon">
                <Play size={32} fill="black" strokeWidth={0} />
              </div>
            )}
            <div className="news-hero__overlay">
              <time
                className="news-hero__date"
                dateTime={heroNews.dateObj.toISOString().split("T")[0]}
              >
                {heroNews.date}
              </time>
              <h3 className="news-hero__title">{heroNews.title}</h3>
              <p className="news-hero__subtitle">{heroNews.text}</p>
              <a
                className="news-hero__link"
                href="#"
                aria-label={`קרא עוד על ${heroNews.title}`}
              >
                קרא עוד
              </a>
            </div>
          </article>

          {/* LIST */}
          <ul className="news-list">
            {listNews.map((newsItem, index) => (
              <li className="news-card" key={index}>
                <div className="news-card__thumb-wrapper">
                  <img
                    className="news-card__thumb"
                    src={newsItem.image}
                    alt={newsItem.title}
                    loading="lazy"
                    decoding="async"
                    width="200"
                    height="140"
                  />
                  {newsItem.video && (
                    <div className="news-video-icon news-video-icon--small">
                      <Play size={24} fill="black" strokeWidth={0} />
                    </div>
                  )}
                </div>
                <div className="news-card__body">
                  <time
                    className="news-card__date"
                    dateTime={newsItem.dateObj.toISOString().split("T")[0]}
                  >
                    {newsItem.date}
                  </time>
                  <h4 className="news-card__title">{newsItem.title}</h4>
                  <p className="news-card__excerpt">{newsItem.text}</p>
                  <a
                    className="news-card__link"
                    href="#"
                    aria-label={`קרא עוד על ${newsItem.title}`}
                  >
                    קרא עוד
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <a
          className="news-cta mobile-cta"
          href="#"
          aria-label="מעבר לכל החדשות"
        >
          לכל החדשות
          <ChevronLeft size={20} strokeWidth={2.5} aria-hidden="true" />
        </a>
      </section>
    </>
  );
}
