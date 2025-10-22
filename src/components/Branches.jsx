import React from "react";
import Oranges from "../assets/images/branches/oranges.png";
export default function Branches(props) {
  const { branchItems } = props;

  return (
    <>
      <section className="branches-container" aria-labelledby="branches-title">
        <div className="branches-header">
          <h2 id="branches-title">ענפים מבוטחים</h2>
        </div>
        <div className="branches" role="list">
          {branchItems.map((item, index) => (
            <article className="branch-item" key={index} role="listitem">
              <a
                href="#"
                className="branch-link"
                aria-label={`למד עוד על ${item.title}`}
              >
                <div className="branch-text">
                  <h2 className="branch-number" aria-hidden="true">{`0${
                    index + 1
                  }`}</h2>
                  <h3>{item.title}</h3>
                </div>

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  width="200"
                  height="200"
                />
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
