import React from "react";
import Card from "../card/Card";
import "./CardsGrid.css"; // Ensure you have a corresponding CSS file for grid styles

// Dummy data array for cards content
const cardsData = [
  {
    title: "COMP90049",
    subtitle: "期末复习班",
    teacher: "Ivan",
    image: "https://placehold.co/600x400?text=Hello+World",
  },
  {
    title: "COMP90017",
    subtitle: "期末复习班",
    teacher: "Owen",
    image: "https://placehold.co/200x300?text=Hello+World",
  },
  {
    title: "COMP90050",
    subtitle: "平时班",
    teacher: "Leo",
    image: "https://placehold.co/700x300?text=Hello+World",
  },
  {
    title: "COMP90007",
    subtitle: "期末复习班",
    teacher: "Alice",
    image: "https://placehold.co/600x1200?text=Hello+World",
  },
  //   {
  //     title: "COMP90015",
  //     subtitle: "作业班",
  //     teacher: "Peter",
  //     image: "https://placehold.co/400x100?text=Hello+World",
  //   },
  //   {
  //     title: "COMP90038",
  //     subtitle: "作业班",
  //     teacher: "John",
  //     image: "https://placehold.co/1200x500?text=Hello+World",
  //   },
  //   {
  //     title: "COMP90049",
  //     subtitle: "期末复习班",
  //     teacher: "Lisa",
  //     image: "https://placehold.co/300x300?text=Hello+World",
  //   },
];

const CardsGrid = () => {
  return (
    <div className="cards-grid-wrapper">
      <h2>Engineering & IT</h2>
      <div className="cards-grid">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            teacher={card.teacher}
            image={card.image}
          />
        ))}
      </div>
      <h2>Business School</h2>
      <div className="cards-grid">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            teacher={card.teacher}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;
