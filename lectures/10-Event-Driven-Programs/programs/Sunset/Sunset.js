/*
 * File: Sunset.js
 * ---------------
 * Draws a sun over the ocean and animates sunset.
 */

import "graphics";

/** Primary Constants **/

const WINDOW_WIDTH = 700;
const WINDOW_HEIGHT = 400;
const SKY_COLOR = "Cyan";
const SUN_RADIUS = 30;
const SUN_BORDER_COLOR = "Red";
const SUN_FILL_COLOR = "Orange";
const OCEAN_COLOR = "Blue";
const NIGHT_COLOR = "Black";
const STEP_Y = 1;
const INTERVAL = 40;

/** Derived Constants **/

const OCEAN_DEPTH = WINDOW_HEIGHT/3;
const OCEAN_Y = WINDOW_HEIGHT - OCEAN_DEPTH;

/*
 * Function: DrawSunset
 * --------------------
 * Serves as the entry point for a program that animates a sunset.
 */

function DrawSunset() {
	var gw = GWindow(WINDOW_WIDTH, WINDOW_HEIGHT);
	drawSky(gw);
   drawSettingSun(gw);
   drawOcean(gw);
}

/*
 * Functions: drawSky, drawOcean, drawNight
 * ----------------------------------------
 * All self-explanatory.
 */

function drawSky(gw) {
	placeFilledRectangle(gw, 0, 0, WINDOW_WIDTH, OCEAN_Y, SKY_COLOR);
}

function drawOcean(gw) {
	placeFilledRectangle(gw, 0, OCEAN_Y, WINDOW_WIDTH, OCEAN_DEPTH, OCEAN_COLOR);
}

function drawNight(gw) {
	placeFilledRectangle(gw, 0, 0, WINDOW_WIDTH, WINDOW_HEIGHT, NIGHT_COLOR);
}

/*
 * Function: drawSettingSun
 * ------------------------
 * Draws the sun and then immediately schedules an internal function
 * to animate the sun setting.
 */

function drawSettingSun(gw) {
   var sun = drawSun(gw);
	animateSunset(gw, sun);
}

/*
 * Function: placeFilledRectangle
 * ------------------------------
 * Creates a filled rectangle with the specified location, dimentions, and color,
 * and then places it in the supplied graphics window.  This function exists
 * to unify logic common to drawSky, drawOcean, and drawNight, all of which
 * need what placeFilledRectangle provides.
 */
function placeFilledRectangle(gw, ulx, uly, width, height, color) {
   var rect = GRect(ulx, uly, width, height);
	rect.setFilled(true);
	rect.setColor(color);
	gw.add(rect);
}

/*
 * Function: drawSun
 * -----------------
 * Constructs the filled circle that plays the part of our sun, places it in the
 * supplied graphics window (our single parameter), and then returns a reference to it.
 * We return a reference to the sun so that it's visible to the closure we install as
 * our timer animation function.
 */
function drawSun(gw) {
	var sun = GOval(WINDOW_WIDTH/4 - SUN_RADIUS, -2 * SUN_RADIUS,
                   2 * SUN_RADIUS, 2 * SUN_RADIUS);
   sun.setFilled(true);
	sun.setColor(SUN_BORDER_COLOR);
	sun.setFillColor(SUN_FILL_COLOR);
	gw.add(sun);
   return sun;
}

/*
 * Function: animateSunset
 * -----------------------
 * Installs the timer function used to animate the sunset.  The timer
 * function is set to fire every INTERVAL milliseconds, and keeps
 * firing until the sun dips below the horizon.
 */
function animateSunset(gw, sun) {
	var animator = function() {
		sun.move(0, STEP_Y);
      if (sun.getY() > OCEAN_Y) {
			clearTimeout(timer);
			drawNight(gw);
		}
	};
	var timer = setInterval(animator, INTERVAL);
}
