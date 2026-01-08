import { DrawingElementValues } from '@rnacanvas/draw.style';

import { isFiniteNumber } from '@rnacanvas/value-check';

export const NumberingLineValues = {
  create: () => new DrawingElementValues({
    basePadding: {
      isValid: isFiniteNumber,
    },
    textPadding: {
      isValid: isFiniteNumber,
    },
  }),
};
