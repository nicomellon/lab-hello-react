import React from "react";

import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

import Article from "./Article";

const articles = [
  {
    img: icon1,
    title: "Declarative",
    text: "React makes it painless to create interactive UIs.",
  },
  {
    img: icon2,
    title: "Components",
    text: "Build encapsulated components that manage their state.",
  },
  {
    img: icon3,
    title: "Single-Way",
    text: "A set of immutable values are passed to the components.",
  },
  {
    img: icon4,
    title: "JSX",
    text: "Statically-typed, designed to run on modern browsers.",
  },
];

const SectionTwo = () => {
  return (
    <section id={"section-two"}>
      <div className="articles">
        <Article {...articles[0]} />
        <Article {...articles[1]} />
        <Article {...articles[2]} />
        <Article {...articles[3]} />
      </div>
    </section>
  );
};

export default SectionTwo;
