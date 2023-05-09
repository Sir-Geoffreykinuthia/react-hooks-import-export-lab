import React from "react";
// using .. to import named properties of the user component 
import { username, city } from "../data/user";

function Home() {
  return (
    <div id="home">
      <h1>
        {username}is a Web Developer from {city}
      </h1>
    </div>
  );
}
export default Home;
