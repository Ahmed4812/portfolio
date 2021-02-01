const student = {
    name: 'Richard Kalehoff',
    guardian: 'Mr. Kalehoff'
};

const teacher = {
    name: 'Mrs. Wilson',
    room: 'N231'
};
// Template Literals
let message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;

//Destructuring
const point = [10, 25, -34];

const [x, y, z] = point;

console.log(x, y, z);

const gemstone = {
    type: 'quartz',
    color: 'rose',
    carat: 21.29
};
const { type, color, carat } = gemstone;
console.log(type, color, carat);

// Object Literal Shorthand
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

let gemstone = {
    type, color, carat, calc() {

    }
};

//Iteration
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
    console.log(digit);
}
//Spread Operator
const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);

// Rest Parameter
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);


document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
// Similiar to
document.querySelector()    //Returns the first one
document.querySelectorAll() //Returns all
const nanodegreeCard = document.querySelector('.card');

//innerHTML & outerHTML
<h1 id="pick-me">Greetings To <span>All</span>!</h1>

const innerResults = document.querySelector('#pick-me').innerHTML;
console.log(innerResults); // logs the string: "Greetings To <span>All</span>!"

const outerResults = document.querySelector('#pick-me').outerHTML;
console.log(outerResults); // logs the string: "<h1 id="pick-me">Greetings To <span>All</span>!</h1>"

// textContent(everything) or innerText (visible text)
nanodegreeCard.textContent = "I will be the updated text for the nanodegreeCard element!";

// create a brand new <span> element
const newSpan = document.createElement('span');

// select the first (main) heading of the page
const mainHeading = document.querySelector('h1');

// add the <span> element as the last child element of the main heading
mainHeading.appendChild(newSpan);

const myPara = document.createElement('p');

myPara.textContent = 'I am the text for the paragraph!';
document.body.appendChild(myPara);

// Remove page content
const mainHeading = document.querySelector('h1');

mainHeading.parentElement.removeChild(mainHeading);
// or
mainHeading.remove(); //same

//Style Page Content
const mainHeading = document.querySelector('h1');

mainHeading.style.cssText = 'color: blue; background-color: orange; font-size: 3.5em';
//Equivalent
mainHeading.style.color = 'blue';
mainHeading.style.backgroundColor = 'orange';
mainHeading.style.fontSize = '3.5em';

mainHeading.setAttribute('style', 'color: blue; background-color: orange; font-size: 3.5em;');

// add an ID to the heading's sibling element
mainHeading.nextElementSibling.setAttribute('id', 'heading-sibling');

// use the newly added ID to access that element
document.querySelector('#heading-sibling').style.backgroundColor = 'red';

const arrayOfClasses = listOfClasses.split(' ');

// store the list of classes in a variable
const listOfClasses = mainHeading.classList;

// logs out ["ank-student", "jpk-modal"]
console.log(listOfClasses);

// Respond to Events
const mainHeading = document.querySelector('h1');

mainHeading.addEventListener('click', function () {
    console.log('The heading was clicked!');
});

function myEventListeningFunction() {
    console.log('howdy');
}

// adds a listener for clicks, to run the `myEventListeningFunction` function
document.addEventListener('click', myEventListeningFunction);

// immediately removes the click listener that should run the `myEventListeningFunction` function
document.removeEventListener('click', myEventListeningFunction);

// Knowing when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    console.log('the DOM is ready to be interacted with!');
});

//setTimeout
setTimeout(function sayHi() {
    console.log('Howdy');
}, 1000);

// Node&Express Environment

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

//Async Javascript
// Anatomy of a Promise
var promise = new Promise(function (resolve, reject) {
    // do a thing, possibly async, then…

    if (/* everything turned out fine */) {
        resolve("Stuff worked!");
    }
    else {
        reject(Error("It broke"));
    }
});

//   To make a fetch() call, or any other methods inside of a function, asynchronous we must use the keywords provided by JavaScript. Here is an example of what it would look like to turn the fetch function from the previous example into an asynchronous function:
const postData = async (url = '', data = {}) => {
    // console.log(data)
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}

postData('/addMovie', { movie: ' the matrix', score: 5 })

// postData is an async arrow function that is called with parameters on the last line of code. It is asynchronous because of the keyword async placed before its parameters. Once you mark a function as 'async' you have access to the keywords await, try, and catch which mirror the underlying Promise functionality of resolving or rejecting a condition-- here the condition is successfully making a POST request to the specified route. The await keyword is used in places where the next actions requires data from the current action so we want to tell our program to wait until the data has been received before continuing with the next steps-- this is the magic of ASYNC JavaScript.

// Here is the client side code that would make a GET request to the animal info API:

let baseURL = 'http://api.animalinfo.org/data/?animal='
let apiKey = '&appid=9f15e45060...';

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
const newAnimal =  document.getElementById('animal').value;
getAnimal(baseURL,newAnimal, apiKey)

}
const getAnimal = async (baseURL, animal, key)=>{

  const res = await fetch(baseURL+animal+key)
  try {

    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

// Here is what it would look like to use chained GET and POST requests to retrieve information from our animal Web API, and then update DOM elements accordingly:
// HTML
{/* <label for="animal">Enter the name of your favorite animal</label>
<input id="animal" name="animal">
<textarea id="favorite" placeholder="Enter your favorite thing about your favorite animal" rows="9" cols="50"></textarea>
<button id = "generate">GO</button> */}

//JS 

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
  const newAnimal =  document.getElementById('animal').value;
  const favFact =  document.getElementById('favorite').value;

  getAnimal('/animalData',)
  // New Syntax!
  .then(function(data){
    // Add data
    console.log(data);
    postData('/addAnimal', {animal:data.animal, fact: data.fact, fav:favFact} );
  })
  .then(
    updateUI()
  )
}

const updateUI = async () => {
  const request = await fetch('/all');
  try{
    const allData = await request.json();
    document.getElementById('animalName').innerHTML = allData[0].animal;
    document.getElementById('animalFact').innerHTML = allData[0].facts;
    document.getElementById('animalFav').innerHTML = allData[0].fav;

  }catch(error){
    console.log("error", error);
  }
}