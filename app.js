import { animals } from "./animals"; //this is importing animals object from animals.js
//task 1
import React from "react"; //imports react
import ReactDOM from "react-dom";

//task 2
const title = "";

const showBackground = true;
const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);
const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      ariaLabel={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const optionIndex = Math.floor(Math.random() *animalInfo.facts.length)

  const funFact = animalInfo.facts[optionIndex];
  document.getElementById('fact').innerHTML = funFact;
}
//below is the main jsx expression
const animalFacts = (
  <div>
    <h1>{title == "" ? "Click an animal for a fun fact!" : title}</h1>
     {showBackground && background}
     <p id='fact'></p>
    <div className="animals">
    {images}
    </div>
  </div>
)

//task 3
//use a ternary operator within the above h1 tags

//Pass in animalFacts as the JSX expression
ReactDOM.render(animalFacts, document.getElementById("root"));
