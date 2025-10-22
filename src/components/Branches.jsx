import React from "react";
import Oranges from "../assets/images/branches/oranges.png";
export default function Branches(props) {
  const { branchItems } = props;

  return (
    <>
      <div className="branches-container">
        <div className="branches-header">
          <h2>ענפים מבוטחים</h2>
        </div>
        <div className="branches">
          {branchItems.map((item, index) => (
            <div className="branch-item" key={index}>
              <div className="branch-text">
                <h2>{`0${index + 1}`}</h2>
                <h3>{item.title}</h3>
              </div>

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
