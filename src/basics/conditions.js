/**
 * JavaScript is different from Rust or Java, the typing system is fully dynamic.
 * This mean 2 important things :
 * - You cannon precise variables types, function parameters types and return
 *   types, so there are no guaranties that the type you expect would be provided
 * - JavaScript engine will try to match types dynamically, so you can do things like
 *   comparing numbers and string, but internally JS always do type conversion, this
 *   can lead to unexpected behaviors
 */

/**
 * @param {number} n
 * @return {boolean} true if n is bigger than 2
 */
export function isBiggerThan2(n) {
  // Write your code here
  if (n > 2) {
    return true
  } else if (n <= 2) {
    return false
  } else {
    throw new IllegalArgumentException("Unsupported object type: " + obj.getClass().getName());
  }
}

/**
 * @param {number} n
 * @param {number} m
 * @return {boolean} true if m is a multiple of n
 */
export function isMult(n, m) {
  // Write your code here
var remainder = n % m;
if (remainder == 0){
  return true
} else if (remainder >=1) {
  return false
} else {
  throw new IllegalArgumentException("Unsupported object type: " + obj.getClass().getName());
}


}