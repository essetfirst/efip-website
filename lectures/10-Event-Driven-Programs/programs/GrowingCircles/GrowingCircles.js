/*
 * File: GrowingCircles.js
 * -----------------------
 * This program draws random circles that grow to their final size.
 */

import "graphics";
import "RandomLib.js";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 300;
const N_CIRCLES = 10;
const MIN_RADIUS = 15;
const MAX_RADIUS = 50;
const TIME_STEP = 20;
const DELTA_SIZE = 1;

/* Main program */

function GrowingCircles() {
   var gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   var circlesCreated = 0;
   var desiredSize = 0;
   var currentSize = 0;
   var circle = null;
   var createNewCircle = function() {
      var r = randomReal(MIN_RADIUS, MAX_RADIUS);
      var x = randomReal(r, GWINDOW_WIDTH - r);
      var y = randomReal(r, GWINDOW_HEIGHT - r);
      circle = GOval(x, y, 0, 0);
      circle.setFilled(true);
      circle.setColor(randomColor());
      desiredSize = 2 * r;
      currentSize = 0;
      return circle;
   };
   var step = function() {
      if (currentSize < desiredSize) {
         currentSize += DELTA_SIZE;
         var x = circle.getX() - DELTA_SIZE / 2;
         var y = circle.getY() - DELTA_SIZE / 2;
         circle.setBounds(x, y, currentSize, currentSize);
      } else if (circlesCreated < N_CIRCLES) {
         gw.add(createNewCircle());
         circlesCreated++;
      } else {
         clearTimeout(timer);
      }
   };
   var timer = setInterval(step, TIME_STEP);
}