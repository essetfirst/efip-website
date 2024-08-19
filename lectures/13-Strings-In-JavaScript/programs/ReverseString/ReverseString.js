/*
 * File: ReverseString.js
 * ----------------------
 * This file defines a function that reverses a string.
 */

function reverse(str) {
   var result = "";
   for (var i = str.length - 1; i >= 0; i--) {
      result += str.charAt(i);
   }
   return result;
}

