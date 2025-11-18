import { isNonNullObject } from '@rnacanvas/value-check';

/**
 * A specification for a drawing.
 */
export class Spec {
  #data: { [name: string]: unknown };

  constructor(data: unknown) {
    if (isNonNullObject(data)) {
      this.#data = data;
    } else {
      throw new Error('Data must be an object.');
    }
  }
}
