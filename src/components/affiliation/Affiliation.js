import React from "react";
import "./Affiliation.css";

const Affiliation = () => {
  const affiliations = [
    { name: "unsw", src: "/images/unsw.png" },
    { name: "usyd", src: "/images/usyd.png" },
    { name: "unimelb", src: "/images/unimelb.png" },
    { name: "monash", src: "/images/monash.png" },
    { name: "usc", src: "/images/usc.png" },
    { name: "tsinghua", src: "/images/tsinghua.png" },
    { name: "bcg", src: "/images/bcg.png" },
  ];

  const header = "维克多教育的教学团队成员均来自世界顶尖大学或顶尖企业。";

  return (
    <div className="affiliation-container">
      <h2>{header}</h2>
      <div className="affiliation-logos">
        {affiliations.map((affiliation, index) => (
          <div key={index} className="affiliation-logo">
            <img src={affiliation.src} alt={`${affiliation.name} Logo`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Affiliation;
