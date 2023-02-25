import React from "react";
import Links from "./Links.js"



function RenderBio(props) {
  return (
    props.bio ? <p>{props.bio}</p> : null
  )
}

function About(props) {



  // const renderBio = () => {
  //   if (props.bio === "") {
  //     return ""
  //   } else {
  //     return <p>{props.bio}</p>
  //   }
  // }

  const linkedin = props.linkedin
  const github = props.github
  const bio = props.bio

  return (
    <div id="about">
      <h2>About Me</h2>
      <RenderBio bio={bio} />
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links linkedin={linkedin} github={github} />
    </div>
  );
}

export default About;
