Crane Animation Effect
This project creates a simple animation effect of cranes flying across a canvas using JavaScript. The animation simulates the graceful movement of origami cranes.

Usage
Simply open the index.html file in a web browser to view the animation.

Description
The animation is created using HTML5 Canvas and JavaScript. It generates a specified number of cranes with random positions, sizes, and speeds, and animates them across the canvas. When a crane reaches the top of the canvas, it wraps around to the bottom with a new random position.

How it Works
Canvas Setup: The JavaScript code gets the canvas element from the HTML file and sets its dimensions to match the window size.

Crane Class: A JavaScript class Crane is defined to represent each crane in the animation. Each crane has properties such as position, size, speed, and color. It also has methods to draw and update its position on the canvas.

Creating Cranes: Multiple crane objects are created with random positions, sizes, and speeds using a loop.

Animation Loop: An animation loop function animate is defined to continuously update and redraw the cranes on the canvas. It clears the canvas, updates the position of each crane, and then redraws them. The loop uses requestAnimationFrame for smoother animation rendering.