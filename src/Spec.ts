import type { Drawing } from './Drawing';

import { DrawingElementValues } from '@rnacanvas/draw.style';

import { NumberingLineValues } from './NumberingLineValues';

import { BondValues } from './BondValues';

import { isNonNullObject } from '@rnacanvas/value-check';

/**
 * A specification for a drawing.
 */
export class Spec {
  #elementKeys = [
    'bases',
    'outlines',
    'numberings',
    'numberingLines',
    'primaryBonds',
    'secondaryBonds',
    'tertiaryBonds',
  ] as const;

  #elementValues = {
    'bases': new DrawingElementValues(),
    'outlines': new DrawingElementValues(),
    'numberings': new DrawingElementValues(),
    'numberingLines': NumberingLineValues.create(),
    'primaryBonds': BondValues.create(),
    'secondaryBonds': BondValues.create(),
    'tertiaryBonds': BondValues.create(),
  };

  constructor(data: { [name: string]: unknown } | unknown) {
    if (!isNonNullObject(data)) {
      console.error('Specs must be specified using an object.');
    }

    this.#elementKeys.forEach(key => {
      if (isNonNullObject(data)) {
        if (data[key] !== undefined) {
          this.#elementValues[key].set(data[key]);
        }
      }
    });
  }

  applyTo(drawing: Drawing) {
    // apply values to elements
    this.#elementKeys.forEach(key => {
      [...drawing[key]].forEach(ele => this.#elementValues[key].applyTo(ele));
    });

    // update default values
    ([
      ['bases', new DrawingElementValues()],
      ['outlines', new DrawingElementValues()],
      ['numberings', new DrawingElementValues()],
      ['numberingLines', NumberingLineValues.create()],
      ['primaryBonds', BondValues.create()],
      ['secondaryBonds', BondValues.create()],
      ['tertiaryBonds', BondValues.create()],
    ] as const)
      .forEach(([key, defaultValues]) => {
        defaultValues.set(drawing[key].defaultValues);

        defaultValues.set(this.#elementValues[key].serialized());

        drawing[key].defaultValues = defaultValues.serialized();
      });
  }
}
