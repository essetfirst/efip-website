/*
 * File: OrbitalMechanics.js
 * -------------------------
 * This program models a planet orbiting a star.
 */

import "graphics";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 300;
const TIME_STEP = 20;
const GRAVITATIONAL_CONSTANT = 3000;
const SUN_RADIUS = 15;
const PLANET_RADIUS = 3;
const INITIAL_X_DISTANCE = 150;
const INITIAL_Y_VELOCITY = 3;

/* Main program */

function OrbitalMechanics() {
   var gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   var sx = gw.getWidth() / 2;
   var sy = gw.getHeight() / 2;
   var sun = createFilledCircle(sx, sy, SUN_RADIUS, "Goldenrod");
   gw.add(sun);
   var px = sx + INITIAL_X_DISTANCE;
   var py = sy;
   var planet = createFilledCircle(px, py, PLANET_RADIUS, "Blue");
   gw.add(planet);
   var vx = 0;
   var vy = INITIAL_Y_VELOCITY;
   var step = function() {
      planet.move(vx, vy);
		px += vx;
 		py += vy;
      var dx = sx - px;
      var dy = sy - py;
      var rSquared = dx * dx + dy * dy;
      var r = Math.sqrt(rSquared);
      var ax = GRAVITATIONAL_CONSTANT / rSquared * dx / r;
      var ay = GRAVITATIONAL_CONSTANT / rSquared * dy / r;
      vx += ax;
      vy += ay;
   };
   var timer = setInterval(step, TIME_STEP);
}

/*
 * Creates a circle of radius r centered at the point (x, y) filled
 * with the specified color.
 */

function createFilledCircle(x, y, r, color) {
   var circle = GOval(x - r, y - r, 2 * r, 2 * r);
   circle.setColor(color);
   circle.setFilled(true);
   return circle;
}
