module.exports = Function.prototype.call.bind(Array.prototype.slice);

/**
 * same as
 * function() {
 *   return Array.prototype.slice.call(...arguments);
 * }
 * 
 * bind return a new function, whose this is the provided value;
 */
