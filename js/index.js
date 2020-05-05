// Create Unique Event Listeners

// *  Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 
// 	*  `mouseover`
// 	*  `keydown`
// 	*  `wheel`
// 	*  `drag / drop`
// 	*  `load`
// 	*  `focus`
// 	*  `resize`
// 	*  `scroll`
// 	*  `select`
// 	*  `dblclick`

// Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

// *  Nest two similar events somewhere in the site and prevent the event propagation properly
// *  Stop the navigation items from refreshing the page by using `preventDefault()

// Variables

const boatImg = document.querySelectorAll("img")[4];
const body = document.querySelector("body");
const pikaBye = document.querySelector(".pikaBye");
const sandBus = document.querySelector("#draggable");

// Mouse Over

const vanish = (event) => {
    event.target.classList.add("vanish");
}

boatImg.addEventListener("mouseover", vanish);

boatImg.addEventListener("mouseout", () => {
    boatImg.classList.remove("vanish");
    boatImg.classList.add("appear");
});

// Keydown

const escapeKey = (event) => {
    if (event.keyCode === 27){
        pikaBye.classList.remove("hidden");
        body.classList.add("goodbye");
    } 
}

body.addEventListener("keydown", escapeKey);
body.addEventListener("keyup", (event) => {
    body.classList.remove("goodbye");
    pikaBye.classList.add("hidden");
});

//Wheel


// Drag/Drop
var dragged;

document.addEventListener("drag", (event) => {

}, false);


document.addEventListener("dragstart", (event) => {
    dragged = event.target;
    event.target.style.opacity = 0.5;
}, false);

document.addEventListener("dragend", (event) => {
    // MDN: Allows changes to allow drop.
    
    event.preventDefault();
}, false);

document.addEventListener("dragover", (event) => {

}, false);

document.addEventListener("dragenter", (event) => {

}, false);

document.addEventListener("dragleave", (event) => {

}, false);


// Load


// Focus


// Resize


// Scroll


// Select


// Double Click



// ## Stretch Task:
// *  Go look at [GSAP](https://greensock.com/) and implement the animations found in that library with your custom events.



// ## Stretch assignment
// *  Take a look at the [stretch assignment](stretch-assignment) and follow the instructions in the read me file.