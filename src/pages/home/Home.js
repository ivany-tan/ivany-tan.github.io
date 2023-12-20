import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Feature from "../../components/feature/Feature";
import Affiliation from "../../components/affiliation/Affiliation";
import Divider from "../../components/divider/Divider";
import CardsGrid from "../../components/cardsGrid/CardsGrid";
import Footer from "../../components/footer/Footer";
import "./Home.css";
import Carousel from "../../components/carousel/Carousel";
import Article from "../../components/article/Article";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
      <Affiliation />
      <Divider />
      <Feature />
      <Divider />
      <div className="rows">
        <h1>精选课程</h1>
        <Carousel />
        <Carousel />
        <Carousel />
      </div>
      <div className="comment">
        <h1>过往学员评价</h1>
        <Article />
      </div>

      {/* <CardsGrid /> */}
      <Footer />
    </div>
  );
}

export default Home;
