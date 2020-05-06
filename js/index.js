// Create Unique Event Listeners
// Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

// *  Nest two similar events somewhere in the site and prevent the event propagation properly
// *  Stop the navigation items from refreshing the page by using `preventDefault()

// Variables

const boatImg = document.querySelectorAll("img")[4];
const body = document.querySelector("body");
const pikaBye = document.querySelector(".pikaBye");
const inputs = document.querySelectorAll("input");
const focusClass = document.querySelectorAll("focus");
const pictures = document.querySelectorAll(".container img");
const log = document.querySelector(".log");
const inputSelect = document.querySelector(".instructions");
const logo = document.querySelector(".logo-heading");

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

document.addEventListener("dragstart", (event) => {
    dragged = event.target;
    event.target.style.opacity = 0.5;
}, false);

document.addEventListener("dragend", (event) => {
    event.target.style.opacity = "";
}, false);

document.addEventListener("dragover", (event) => {
    // MDN: Allows changes to drop.
    event.preventDefault();
}, false);

document.addEventListener("drop", (event) => {
    // MDN: Prevents the image from opening as a link.
    event.preventDefault();
    event.target.classList.add("dropDestination");
});


// Load

window.addEventListener("load", (event) => {
    return console.log(("page is fully loaded"));
  });

// Focus

const rainbow = (event) => {
    event.target.classList.add("focus");
}

inputs.forEach((input) => {
    input.addEventListener("focus", rainbow);
});

const deFocus = (event) => {
    event.target.classList.remove("focus");
}
inputs.forEach((focus) => {
    focus.addEventListener("blur", deFocus);
});

// Resize

const responsiveHelper = (event) => {
    return(`Width: ${window.innerWidth} \n Height: ${window.innerHeight}`);
}
window.addEventListener("resize", (event) => {console.log(responsiveHelper())});

// Scroll

pictures.forEach((pic) => {
    pic.classList.add("vanish");
});

pictures.forEach((pics) => {
    window.addEventListener("scroll", (event) => {
        pics.classList.add("appear");
        pics.classList.remove("vanish");
    });
});

// Select

// I got this Idea from MDN.. It was really cool so I recreated it. 

const logThis = (event) => {
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You Selected: ${selection}`;
}

inputSelect.addEventListener("select", logThis)

// Double Click

const spin = (event) => {
    event.target.classList.add("dropDestination");
}

logo.addEventListener("dblclick", spin);

// ## Stretch Task:
// *  Go look at [GSAP](https://greensock.com/) and implement the animations found in that library with your custom events.



// ## Stretch assignment
// *  Take a look at the [stretch assignment](stretch-assignment) and follow the instructions in the read me file.