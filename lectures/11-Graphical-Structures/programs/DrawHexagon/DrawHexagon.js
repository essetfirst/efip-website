/*
 * File: DrawHexagon.js
 * --------------------
 * This program draws a regular hexagon at the center of the window.
 */

import "graphics";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 200;
const HEXAGON_SIDE = 50;

/*
 * Draws a hexagon at the center of the graphics window.
 */

function DrawHexagon() {
   var gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   var hexagon = createHexagon(HEXAGON_SIDE);
   gw.add(hexagon, gw.getWidth() / 2, gw.getHeight() / 2);
}

/*
 * Creates a GPolygon representing a regular hexagon with the reference
 * point at the center.
 */

function createHexagon(side) {
   var hex = GPolygon();
   hex.addVertex(-side, 0);
   var angle = 60;
   for (var i = 0; i < 6; i++) {
      hex.addPolarEdge(side, angle);
      angle -= 60;
   }
   return hex;
}
