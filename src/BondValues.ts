import { DrawingElementValues } from '@rnacanvas/draw.style';

import { isFiniteNumber } from '@rnacanvas/value-check';

export const BondValues = {
  create: () => new DrawingElementValues({
    basePadding1: {
      isValid: isFiniteNumber,
    },
    basePadding2: {
      isValid: isFiniteNumber,
    },
  }),
};
