// ## Objectives
//  * Manipulate the DOM in response to user events using JavaScript
//  * Use event listeners to handle events

// ## Beginning Project
//  * You can open your `index.html` file in your browser to see your work
//  * All your work will be done in `index.js`
//  * Make sure to read both the `index.html` and `styles.css` files so that you know what you're working with

// ## Project Description
//  You are going to create a simple game where rockets can be moved up and down by clicking on them.  There are travelers inside of these rockets that can blast off as long as you hold the mouse down on their rocket.

//  Rockets:
//   * When a block is clicked, it should go to the top of the stack.

//  Travelers:
//   * While a mouse is clicked down on a box, it should move to the right (It should coninuously move, there is no limit on how far it will go).

// Variables

const blocks = document.querySelectorAll(".block");

// Animatiom Function

const flyUp = (event) => {
    blocks.forEach((block) => {
        block.classList.remove("last");
    });
        event.target.classList.add("last");
        event.target.classList.add("first");
}

blocks.forEach((block) => {
    block.addEventListener("click", flyUp);
});

const flyRight = (event) => {
    event.target.classList.add("right");
}

blocks.forEach((block) => {
    block.addEventListener("mousedown", flyRight);
})

blocks.forEach((block) => {
    block.addEventListener("mouseup", (event) => {
        blocks.forEach((block) => {
            block.classList.remove("right");
        })
    }
    )})   