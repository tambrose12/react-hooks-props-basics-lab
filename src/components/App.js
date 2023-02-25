import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

const name = user.name
const color = user.color
const city = user.city
const bio = user.bio
const linkedin = user.links.linkedin
const github = user.links.github

function App() {
  return (
    <div>
      <NavBar />
      <Home name={name} color={color} city={city} />
      <About bio={bio} linkedin={linkedin} github={github} />
    </div>
  );
}

export default App;
