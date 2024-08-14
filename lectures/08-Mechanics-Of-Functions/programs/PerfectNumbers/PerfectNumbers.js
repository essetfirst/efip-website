/*
 * File: PerfectNumbers.js
 * -----------------------
 * Presents a program that prints all of the perfect numbers between low
 * and high, inclusive.  low and high are assumed to be positive integers.
 */
function PerfectNumbers(low, high) {
   console.log("The perfect numbers between " + low + " and " + high + " are:");
	for (var n = low; n <= high; n++) {
      if (isPerfect(n)) {
			console.log(n);
		}
   }
}

/*
 * Function: isPerfect
 * -------------------
 * isPerfect returns true if and only if the provided number, assumed to be a
 * positive whole number, is perfect.  Restated, isPerfect identifies all of
 * n's proper divisors, sums them all together, and returns true iff that sum
 * incidentally equals n.
 */
function isPerfect(n) {
   var sum = 0;
   for (var factor = 1; factor < n; factor++) {
		if (isDivisibleBy(n, factor)) {
    		sum += factor;
      }
	}
  	return sum === n;
}

/*
 * Function: isDivisibleBy
 * -----------------------
 * Returns true if and only if n is divisible by k.
 */
function isDivisibleBy(n, k) {
   return n % k === 0;
}
