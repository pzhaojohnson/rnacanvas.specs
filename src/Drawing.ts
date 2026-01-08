export interface Drawing {
  /**
   * All bases in the drawing.
   */
  readonly bases: {
    [Symbol.iterator](): Iterator<Nucleobase>;

    defaultValues: {
      attributes?: { [name: string]: string };
    };
  };

  /**
   * All outlines in the drawing.
   */
  readonly outlines: {
    [Symbol.iterator](): Iterator<Outline>;

    defaultValues: {
      attributes?: { [name: string]: string };
    }
  };

  /**
   * All numberings in the drawing.
   */
  readonly numberings: {
    [Symbol.iterator](): Iterator<Numbering>;

    defaultValues: {
      attributes?: { [name: string]: string };
    }
  };

  /**
   * All numbering lines in the drawing.
   */
  readonly numberingLines: {
    [Symbol.iterator](): Iterator<NumberingLine>;

    defaultValues: {
      attributes?: { [name: string]: string };

      basePadding?: number;
      textPadding?: number;
    }
  };

  /**
   * All primary bonds in the drawing.
   */
  readonly primaryBonds: {
    [Symbol.iterator](): Iterator<StraightBond>;

    defaultValues: {
      attributes?: { [name: string]: string };

      basePadding1?: number;
      basePadding2?: number;
    }
  };

  /**
   * All secondary bonds in the drawing.
   */
  readonly secondaryBonds: {
    [Symbol.iterator](): Iterator<StraightBond>;

    defaultValues: {
      attributes?: { [name: string]: string };

      basePadding1?: number;
      basePadding2?: number;
    };
  }

  /**
   * All tertiary bonds in the drawing.
   */
  readonly tertiaryBonds: {
    [Symbol.iterator](): Iterator<CurvedBond>;

    defaultValues: {
      attributes?: { [name: string]: string };

      basePadding1?: number;
      basePadding2?: number;
    };
  }
}

export interface Nucleobase {
  readonly domNode: SVGTextElement;
}

export interface Outline {
  readonly domNode: SVGCircleElement;
}

export interface Numbering {
  readonly domNode: SVGTextElement;
}

export interface NumberingLine {
  readonly domNode: SVGLineElement;

  basePadding: number;
  textPadding: number;
}

export interface StraightBond {
  readonly domNode: SVGLineElement;

  basePadding1: number;
  basePadding2: number;
}

export interface CurvedBond {
  readonly domNode: SVGPathElement;

  basePadding1: number;
  basePadding2: number;
}
