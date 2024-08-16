/*
 * File: DrawDiamond.js
 * --------------------
 * This program draws a diamond shape at the center of the window.
 */

import "graphics";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 200;
const DIAMOND_WIDTH = 60;
const DIAMOND_HEIGHT = 100;

function DrawDiamond() {
   var gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   var diamond = createDiamond(DIAMOND_WIDTH, DIAMOND_HEIGHT);
   diamond.setFilled(true);
   diamond.setFillColor("Magenta");
   gw.add(diamond, gw.getWidth() / 2, gw.getHeight() / 2);
}

/*
 * Creates a GCompound representing a diamond with the specified width
 * and height.  The reference point is the center.
 */

function createDiamond(width, height) {
   var diamond = GPolygon();
   diamond.addVertex(-width / 2, 0);
   diamond.addEdge(width / 2, -height / 2);
   diamond.addEdge(width / 2, height / 2);
   diamond.addEdge(-width / 2, height / 2);
   diamond.addEdge(-width / 2, -height / 2);
   return diamond;
}
