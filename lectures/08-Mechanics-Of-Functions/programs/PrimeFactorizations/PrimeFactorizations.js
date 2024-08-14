/*
 * Program: PrimeFactorizations
 * ----------------------------
 * Produces a table of the prime factorizations for all of the
 * numbers between low and high, inclusive.  For instance,
 * PrimeFactorizations(25, 35) would publish the following
 * to the SJS console.
 */

function PrimeFactorizations(low, high) {
	for (var n = low; n <= high; n++) {
      console.log(constructFactorization(n));
   }
}

/*
 * Function: constructFactorization
 * --------------------------------
 * Computes the prime factorization of the supplied
 * number and returns that factorization as a string.
 * The incoming parameter called n is assumed to be
 * positive.
 */
function constructFactorization(n) {
	var result = n + " = ";
   var first = true;
   var factor = 2;

   while (n > 1) {
      if (isDivisibleBy(n, factor)) {
         if (!first) result += " * ";
         first = false;
         result += factor;
         n /= factor;
      } else {
         factor++;
      }
   }

   return result;
}

/*
 * Function: isDivisibleBy
 * -----------------------
 * Returns true if and only if the second function argument,
 * assumed to be a positive integer, divides evenly into 
 * the first (itself assumed to be greater than or equal to 0).
 */
function isDivisibleBy(n, k) {
   return n % k === 0;
}
