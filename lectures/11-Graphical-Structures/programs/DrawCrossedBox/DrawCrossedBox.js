/*
 * File: DrawCrossedBox.js
 * -----------------------
 * This program draws a box with its two diagonals.
 */

import "graphics";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 200;
const BOX_WIDTH = 200;
const BOX_HEIGHT = 100;

/*
 * Draws a crossed box at the center of the graphics window.
 */

function DrawCrossedBox() {
   var gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   var box = createCrossedBox(BOX_WIDTH, BOX_HEIGHT);
   gw.add(box, gw.getWidth() / 2, gw.getHeight() / 2);
}

/*
 * Creates a crossed box, which is a compound consisting of a GRect and
 * its two diagonals.  The reference point for the crossed box is at the
 * center of the figure.
 */

function createCrossedBox(width, height) {
   var box = GCompound();
   box.add(GRect(-width / 2, -height / 2, width, height));
   box.add(GLine(-width / 2, -height / 2, width / 2, height / 2));
   box.add(GLine(-width / 2, height / 2, width / 2, -height / 2));
   return box;
}
