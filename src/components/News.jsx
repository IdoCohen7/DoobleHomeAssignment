import React from "react";
import { ChevronLeft } from "lucide-react";

export default function News(props) {
  const { newsItems } = props;

  // Sort news by date (newest first) and get hero (latest) and list items
  const sortedNews = [...newsItems].sort((a, b) => b.dateObj - a.dateObj);
  const heroNews = sortedNews[0];
  const listNews = sortedNews.slice(1, 4); // Get next 3 items

  return (
    <>
      <div className="news-container">
        <div className="news-header">
          <h2 className="news-title">מה חדש בקנט?</h2>
          <a className="news-cta" href="#">
            לכל החדשות
            <ChevronLeft size={20} strokeWidth={2.5} />
          </a>
        </div>

        <section className="news-grid">
          {/* HERO */}
          <article className="news-hero">
            <img
              className="news-hero__img"
              src={heroNews.image}
              alt={heroNews.title}
              loading="lazy"
              decoding="async"
            />
            <div className="news-hero__overlay">
              <time className="news-hero__date">{heroNews.date}</time>
              <h3 className="news-hero__title">{heroNews.title}</h3>
              <p className="news-hero__subtitle">{heroNews.text}</p>
              <a className="news-hero__link" href="#">
                קרא עוד
              </a>
            </div>
          </article>

          {/* LIST */}
          <ul className="news-list">
            {listNews.map((newsItem, index) => (
              <li className="news-card" key={index}>
                <img
                  className="news-card__thumb"
                  src={newsItem.image}
                  alt={newsItem.title}
                  loading="lazy"
                  decoding="async"
                />
                <div className="news-card__body">
                  <time className="news-card__date">{newsItem.date}</time>
                  <h4 className="news-card__title">{newsItem.title}</h4>
                  <p className="news-card__excerpt">{newsItem.text}</p>
                  <a className="news-card__link" href="#">
                    קרא עוד
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <a className="news-cta mobile-cta" href="#">
          לכל החדשות
          <ChevronLeft size={20} strokeWidth={2.5} />
        </a>
      </div>
    </>
  );
}
