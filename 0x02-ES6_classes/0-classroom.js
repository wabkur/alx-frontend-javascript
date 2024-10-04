/**
 * Represents a classroom
 */
export default class ClassRoom {
  /**
   * Creates a new @see {@link ClassRoom}.
   * @param {Number} maxStudentsSize - The maximum no. of
   * students in the class.
   */
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
