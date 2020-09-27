import { Button } from "@material-ui/core";
import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays · 26 August to 1 September · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">Моre filters</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/6037af7a-b273-49b1-b6ea-42fba39b075e.jpg?aki_policy=large"
        location="Cogolin, France"
        title="Boat · Cogolin"
        description="Logement insolite Gofe de Saint Tropez"
        star={4.4}
        price="$40/night"
        total="$80/night"
      />

      <SearchResult
        img="https://a0.muscache.com/im/pictures/a6203d6b-f67e-4e2a-91d2-393690ae723c.jpg?aki_policy=large"
        location="Divici, Județul Caraș-Severin, Romania"
        title="Tiny house"
        description="Danube Microhouse and Water Dock Unique Experience"
        star={4.97}
        price="$45/night"
        total="$90/night"
      />

      <SearchResult
        img="https://a0.muscache.com/im/pictures/c1ede008-17b6-4fd1-a2a1-4cd194193b1b.jpg?im_w=320"
        location="Platamonas, Greece"
        title="Vanilia Luxury Yacht"
        description="Amazing Rides In Luxury Yacht"
        star={5}
        price="$300/night"
        total="$600/night"
      />

      <SearchResult
        img="https://a0.muscache.com/im/pictures/5c6958d2-a939-4b5c-844f-e9c1aee0f020.jpg?im_w=960"
        location="Hundleby, England, United Kingdom"
        title="Earth house"
        description="Hudson River Carriage House - Featured on Netflix"
        star={4.87}
        price="$350/night"
        total="$700/night"
      />

      <SearchResult
        img="https://a0.muscache.com/im/pictures/f51f6b0c-8455-4764-833f-b3c89a859480.jpg?aki_policy=large"
        location="LaFayette, New York, United States"
        title="Treehouse"
        description="Welcome to the magical Chez' Tree Rest Treehouse!"
        star={5}
        price="$220/night"
        total="$440/night"
      />

      <SearchResult
        img="https://a0.muscache.com/im/pictures/2e5550b5-628f-46a6-ae3b-93495384c15e.jpg?aki_policy=large"
        location="Sutton, England, United Kingdom"
        title="Hut"
        description="Unique glamping experience near Ely & Cambridge"
        star={4.94}
        price="$200/night"
        total="$400/night"
      />

      <SearchResult
        img="https://a0.muscache.com/im/pictures/6c155b95-4d56-4e61-9a77-3e700311591a.jpg?aki_policy=large"
        location="Brindisi, Puglia, Italy"
        title="Boat"
        description="Boat in the Heart of the historical city center"
        star={4.9}
        price="$50/night"
        total="$100/night"
      />

      <SearchResult
        img="https://a0.muscache.com/im/pictures/41254db0-87d6-4d77-b5e4-5e41f68f4729.jpg?aki_policy=large"
        location="Foça, İzmir, Turkey"
        title="Boat"
        description="foça’nın keyfini denizde yaşa ,Konaklama ve Yelken"
        star={4.7}
        price="$20/night"
        total="$40/night"
      />

      <SearchResult
        img="https://a0.muscache.com/im/pictures/f396401b-f158-45d7-be4f-899ada7be0a6.jpg?aki_policy=large"
        location="Kalamaria, Greece"
        title="Boat"
        description="Lxurious sailing yacht!"
        star={5}
        price="$100/night"
        total="$200/night"
      />
    </div>
  );
}

export default SearchPage;
