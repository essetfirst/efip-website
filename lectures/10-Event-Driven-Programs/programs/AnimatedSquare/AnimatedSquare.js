/*
 * File: AnimatedSquare.js
 * -----------------------
 * This program animates a square so that it moves from the upper left
 * corner of the window to the lower right corner.
 */

import "graphics";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 300;
const N_STEPS = 100;
const TIME_STEP = 20;
const SQUARE_SIZE = 50;

/* Main program */

function AnimatedSquare() {
   var gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   var dx = (gw.getWidth() - SQUARE_SIZE) / N_STEPS;
   var dy = (gw.getHeight() - SQUARE_SIZE) / N_STEPS;
   var square = GRect(0, 0, SQUARE_SIZE, SQUARE_SIZE);
   square.setFilled(true);
   gw.add(square);
   var stepCount = 0;
   var step = function() {
      square.move(dx, dy);
      stepCount++;
      if (stepCount === N_STEPS) clearTimeout(timer);
   };
   var timer = setInterval(step, TIME_STEP);
}