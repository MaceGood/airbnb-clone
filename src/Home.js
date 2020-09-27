import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/a6e9bd99-99d9-4f18-8dbc-faa416cf6d7d.jpg?aki_policy=x_large"
          title="Morning Star River Retreat"
          description="Morning Star River Retreat"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/d0e4857e-5197-482d-8c83-d3472a8d98a5.jpg?aki_policy=x_large"
          title="Entire villa"
          description="The Lake House - Relax Your Mind, Body & Soul!"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/51088819/e6febc76_original.jpg?aki_policy=x_large"
          title="Entire villa
          "
          description="Stupendo TRULLO in Valle d'Itria"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/73a6bd32-467f-415b-b777-4982aa98b914.jpg?aki_policy=large"
          title="Hobbit house"
          description="Earth House!"
          price="$20/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/552c3079-ee7f-4a46-9388-65cb280d6a65.jpg?aki_policy=large"
          title="Treehouse"
          description="Transylvania Loft Treehouse ★ Self Check-In★"
          price="$70/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/107555542/29b44a28_original.jpg?aki_policy=large"
          title="Entire cabin"
          description="Unique, stone-built countryhouse in a rural area"
          price="$50/night"
        />
      </div>
    </div>
  );
}

export default Home;
