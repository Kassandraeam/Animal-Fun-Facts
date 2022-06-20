import { animals } from './animals'; //this is importing animals object from animals.js
//task 1
import React from 'react'; //imports react
import ReactDOM from 'react-dom';

//task 2
const title = "";
const background = ( 
    <img 
    className='background'
    alt='ocean'
    src='/images/ocean.jpg'
    />
)

const animalFacts = (
    <div>
    <h1>{title == "" ? "Click an animal for a fun fact!" : title}
    </h1>
    {background}
    </div>
)

//task 3
//use a ternary operator within the above h1 tags

//Pass in animalFacts as the JSX expression
ReactDOM.render(animalFacts, document.getElementById("root"));