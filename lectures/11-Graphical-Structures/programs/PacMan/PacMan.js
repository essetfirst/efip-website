/*
 * File: PacMan.js
 * ---------------
 * This program draws a picture of the PacMan video game character,
 * animating it so that it moves across the window opening and closing
 * its mouth.
 */

import "graphics";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 300;
const TIME_STEP = 20;
const PACMAN_SIZE = 60;
const PACMAN_DX = 2;
const PACMAN_DTHETA = 5;

/* Main program */

function PacMan() {
   var gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   var x0 = 0;
   var y0 = (gw.getHeight() - PACMAN_SIZE) / 2;
   var pacman = GArc(x0, y0, PACMAN_SIZE, PACMAN_SIZE, 45, 270);
   pacman.setFilled(true);
   pacman.setFillColor("Yellow");
   gw.add(pacman);
   var angle = 45;
   var sign = -1;
   var step = function() {
      angle += sign * PACMAN_DTHETA;
      if (angle === 0 || angle === 45) sign = -sign;
      pacman.setStartAngle(angle);
      pacman.setSweepAngle(360 - 2 * angle);
      pacman.move(PACMAN_DX, 0);
      if (pacman.getX() >= gw.getWidth() - PACMAN_SIZE) clearTimeout(timer);
   };
   var timer = setInterval(step, TIME_STEP);
}
