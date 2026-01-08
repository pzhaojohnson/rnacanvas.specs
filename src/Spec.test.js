/**
 * @jest-environment jsdom
 */

import { Spec } from './Spec';

describe('`class Spec`', () => {
  test('`constructor()`', () => {
    expect(() => new Spec({})).not.toThrow();

    // should be able to handle any inputs
    expect(() => new Spec()).not.toThrow();
    expect(() => new Spec(null)).not.toThrow();
    expect(() => new Spec(2)).not.toThrow();
    expect(() => new Spec('asdf')).not.toThrow();
  });

  test('`applyTo()`', () => {
    var drawing = new DrawingMock();

    drawing.bases.defaultValues.attributes['font-size'] = '9';
    drawing.bases.defaultValues.attributes['font-family'] = 'Impact';
    drawing.bases.defaultValues.attributes['fill-opacity'] = '0.62';

    // a mix of string and non-string attribute values
    var spec = new Spec({
      bases: {
        attributes: { 'fill': 'red', 'font-size': 18.36, 'text-decoration': 'underline' },
      },
    });

    spec.applyTo(drawing);

    expect([...drawing.bases].length).toBeGreaterThanOrEqual(3);

    // applies values to bases
    [...drawing.bases].forEach(b => expect(b.domNode.getAttribute('fill')).toBe('red'));
    [...drawing.bases].forEach(b => expect(b.domNode.getAttribute('font-size')).toBe('18.36'));
    [...drawing.bases].forEach(b => expect(b.domNode.getAttribute('text-decoration')).toBe('underline'));

    // updates default values for bases
    expect(drawing.bases.defaultValues.attributes['fill']).toBe('red');
    expect(drawing.bases.defaultValues.attributes['font-size']).toBe('18.36');

    // preserves unspecified default values for bases
    expect(drawing.bases.defaultValues.attributes['font-family']).toBe('Impact');
    expect(drawing.bases.defaultValues.attributes['fill-opacity']).toBe('0.62');

    var drawing = new DrawingMock();

    drawing.outlines.defaultValues.attributes['stroke'] = 'cyan';
    drawing.outlines.defaultValues.attributes['fill-opacity'] = '0.55';
    drawing.outlines.defaultValues.attributes['stroke-dasharray'] = '1 0.6';

    // a mix of string and non-string attribute values
    var spec = new Spec({
      outlines: {
        attributes: {
          'r': 15.2,
          'stroke': 'aliceblue',
          'stroke-width': '1.4',
        },
      },
    });

    spec.applyTo(drawing);

    expect([...drawing.outlines].length).toBeGreaterThanOrEqual(3);

    // applies values to outlines
    [...drawing.outlines].forEach(o => expect(o.domNode.getAttribute('r')).toBe('15.2'));
    [...drawing.outlines].forEach(o => expect(o.domNode.getAttribute('stroke')).toBe('aliceblue'));
    [...drawing.outlines].forEach(o => expect(o.domNode.getAttribute('stroke-width')).toBe('1.4'));

    // updates default values for outlines
    expect(drawing.outlines.defaultValues.attributes['r']).toBe('15.2');
    expect(drawing.outlines.defaultValues.attributes['stroke']).toBe('aliceblue');
    expect(drawing.outlines.defaultValues.attributes['stroke-width']).toBe('1.4');

    // preserves unspecified default values for outlines
    expect(drawing.outlines.defaultValues.attributes['fill-opacity']).toBe('0.55');
    expect(drawing.outlines.defaultValues.attributes['stroke-dasharray']).toBe('1 0.6');

    var drawing = new DrawingMock();

    drawing.numberings.defaultValues.attributes['font-size'] = '6';
    drawing.numberings.defaultValues.attributes['font-weight'] = 'light';
    drawing.numberings.defaultValues.attributes['fill-opacity'] = '0.5';

    // a mix of string and non-string attribute values
    var spec = new Spec({
      numberings: {
        attributes: { 'font-family': '"Open Sans"', 'font-size': 11.2, 'fill': 'salmon' },
      },
    });

    spec.applyTo(drawing);

    expect([...drawing.numberings].length).toBeGreaterThanOrEqual(3);

    // applies values to numberings
    [...drawing.numberings].forEach(n => expect(n.domNode.getAttribute('font-family')).toBe('"Open Sans"'));
    [...drawing.numberings].forEach(n => expect(n.domNode.getAttribute('font-size')).toBe('11.2'));
    [...drawing.numberings].forEach(n => expect(n.domNode.getAttribute('fill')).toBe('salmon'));

    // updates default values for numberings
    expect(drawing.numberings.defaultValues.attributes['font-family']).toBe('"Open Sans"');
    expect(drawing.numberings.defaultValues.attributes['font-size']).toBe('11.2');
    expect(drawing.numberings.defaultValues.attributes['fill']).toBe('salmon');

    // preserves unspecified default values for numberings
    expect(drawing.numberings.defaultValues.attributes['font-weight']).toBe('light');
    expect(drawing.numberings.defaultValues.attributes['fill-opacity']).toBe('0.5');

    var drawing = new DrawingMock();

    drawing.numberingLines.defaultValues.attributes['stroke-width'] = '5';
    drawing.numberingLines.defaultValues.attributes['stroke-dasharray'] = '0.3 0.4';
    drawing.numberingLines.defaultValues.basePadding = 2;
    drawing.numberingLines.defaultValues.textPadding = 5.5;

    // a mix of string and non-string attribute values
    var spec = new Spec({
      numberingLines: {
        attributes: { 'stroke-width': 11, 'stroke-opacity': '0.6' },
        textPadding: 12,
      },
    });

    spec.applyTo(drawing);

    expect([...drawing.numberingLines].length).toBeGreaterThanOrEqual(3);

    // applies values to numbering lines
    [...drawing.numberingLines].forEach(line => expect(line.domNode.getAttribute('stroke-width')).toBe('11'));
    [...drawing.numberingLines].forEach(line => expect(line.domNode.getAttribute('stroke-opacity')).toBe('0.6'));
    [...drawing.numberingLines].forEach(line => expect(line.textPadding).toBe(12));

    // updates default values for numbering liines
    expect(drawing.numberingLines.defaultValues.attributes['stroke-width']).toBe('11');
    expect(drawing.numberingLines.defaultValues.attributes['stroke-opacity']).toBe('0.6');
    expect(drawing.numberingLines.defaultValues.textPadding).toBe(12);

    // preserves unspecified default values for numbering lines
    expect(drawing.numberingLines.defaultValues.attributes['stroke-dasharray']).toBe('0.3 0.4');
    expect(drawing.numberingLines.defaultValues.basePadding).toBe(2);

    var drawing = new DrawingMock();

    drawing.primaryBonds.defaultValues.attributes['stroke-width'] = '3';
    drawing.primaryBonds.defaultValues.attributes['stroke-dasharray'] = '1 2 0.6';
    drawing.primaryBonds.defaultValues.basePadding1 = 3;
    drawing.primaryBonds.defaultValues.basePadding2 = 12;

    // a mix of string and non-string attribute values
    var spec = new Spec({
      primaryBonds: {
        attributes: { 'stroke': '#123abc', 'stroke-width': 7.2 },
        basePadding1: 5,
      },
    });

    spec.applyTo(drawing);

    expect([...drawing.primaryBonds].length).toBeGreaterThan(3);

    // applies values to primary bonds
    [...drawing.primaryBonds].forEach(pb => expect(pb.domNode.getAttribute('stroke')).toBe('#123abc'));
    [...drawing.primaryBonds].forEach(pb => expect(pb.domNode.getAttribute('stroke-width')).toBe('7.2'));
    [...drawing.primaryBonds].forEach(pb => expect(pb.basePadding1).toBe(5));

    // updates default values for primary bonds
    expect(drawing.primaryBonds.defaultValues.attributes['stroke']).toBe('#123abc');
    expect(drawing.primaryBonds.defaultValues.attributes['stroke-width']).toBe('7.2');
    expect(drawing.primaryBonds.defaultValues.basePadding1).toBe(5);

    // preserves unspecified default values for primary bonds
    expect(drawing.primaryBonds.defaultValues.attributes['stroke-dasharray']).toBe('1 2 0.6');
    expect(drawing.primaryBonds.defaultValues.basePadding2).toBe(12);

    var drawing = new DrawingMock();

    drawing.secondaryBonds.defaultValues.attributes['stroke'] = 'blue';
    drawing.secondaryBonds.defaultValues.attributes['stroke-dasharray'] = '8 1';
    drawing.secondaryBonds.defaultValues.basePadding1 = 30;
    drawing.secondaryBonds.defaultValues.basePadding2 = 12;

    // a mix of string and non-string attribute values
    var spec = new Spec({
      secondaryBonds: {
        attributes: { 'stroke': '#987bcd', 'stroke-width': 2.84 },
        basePadding2: 1.8,
      },
    });

    spec.applyTo(drawing);

    expect([...drawing.secondaryBonds].length).toBeGreaterThan(3);

    // applies values to secondary bonds
    [...drawing.secondaryBonds].forEach(sb => expect(sb.domNode.getAttribute('stroke')).toBe('#987bcd'));
    [...drawing.secondaryBonds].forEach(sb => expect(sb.domNode.getAttribute('stroke-width')).toBe('2.84'));
    [...drawing.secondaryBonds].forEach(sb => expect(sb.basePadding2).toBe(1.8));

    // updates default values for secondary bonds
    expect(drawing.secondaryBonds.defaultValues.attributes['stroke']).toBe('#987bcd');
    expect(drawing.secondaryBonds.defaultValues.attributes['stroke-width']).toBe('2.84');
    expect(drawing.secondaryBonds.defaultValues.basePadding2).toBe(1.8);

    // preserves unspecified default values for secondary bonds
    expect(drawing.secondaryBonds.defaultValues.attributes['stroke-dasharray']).toBe('8 1');
    expect(drawing.secondaryBonds.defaultValues.basePadding1).toBe(30);

    var drawing = new DrawingMock();

    drawing.tertiaryBonds.defaultValues.attributes['stroke-dasharray'] = '0.5 0.2 1';
    drawing.tertiaryBonds.defaultValues.attributes['stroke-opacity'] = '0.72';
    drawing.tertiaryBonds.defaultValues.basePadding1 = 2.5;
    drawing.tertiaryBonds.defaultValues.basePadding2 = 5;

    // a mix of string and non-string attribute values
    var spec = new Spec({
      tertiaryBonds: {
        attributes: { 'stroke-width': 4.1, 'stroke-dasharray': '1 2' },
        basePadding1: 6,
      },
    });

    spec.applyTo(drawing);

    expect([...drawing.tertiaryBonds].length).toBeGreaterThanOrEqual(3);

    // applies values to tertiary bonds
    [...drawing.tertiaryBonds].forEach(tb => expect(tb.domNode.getAttribute('stroke-width')).toBe('4.1'));
    [...drawing.tertiaryBonds].forEach(tb => expect(tb.domNode.getAttribute('stroke-dasharray')).toBe('1 2'));
    [...drawing.tertiaryBonds].forEach(tb => expect(tb.basePadding1).toBe(6));

    // updates default values for tertiary bonds
    expect(drawing.tertiaryBonds.defaultValues.attributes['stroke-width']).toBe('4.1');
    expect(drawing.tertiaryBonds.defaultValues.attributes['stroke-dasharray']).toBe('1 2');
    expect(drawing.tertiaryBonds.defaultValues.basePadding1).toBe(6);

    // preserves unspecified default values for tertiary bonds
    expect(drawing.tertiaryBonds.defaultValues.attributes['stroke-opacity']).toBe('0.72');
    expect(drawing.tertiaryBonds.defaultValues.basePadding2).toBe(5);
  });
});

class DrawingMock {
  constructor() {
    let bases = [...'1234567890'].map(() => ({ domNode: document.createElementNS('http://www.w3.org/2000/svg', 'text') }));

    this.bases = {
      [Symbol.iterator]() {
        return bases.values();
      },

      defaultValues: {
        attributes: {},
      },
    };

    var outlines = [...'1234567'].map(() => ({ domNode: document.createElementNS('http://www.w3.org/2000/svg', 'circle') }));

    this.outlines = {
      [Symbol.iterator]() {
        return outlines.values();
      },

      defaultValues: {
        attributes: {},
      },
    };

    var numberings = [...'123456'].map(() => ({ domNode: document.createElementNS('http://www.w3.org/2000/svg', 'text') }));

    this.numberings = {
      [Symbol.iterator]() {
        return numberings.values();
      },

      defaultValues: {
        attributes: {},
      },
    };

    let numberingLines = [...'123456'].map(() => ({ domNode: document.createElementNS('http://www.w3.org/2000/svg', 'line') }));

    this.numberingLines = {
      [Symbol.iterator]() {
        return numberingLines.values();
      },

      defaultValues: {
        attributes: {},
        basePadding: 0,
        textPadding: 0,
      },
    };

    let primaryBonds = [...'123456'].map(() => ({ domNode: document.createElementNS('http://www.w3.org/2000/svg', 'line') }));

    this.primaryBonds = {
      [Symbol.iterator]() {
        return primaryBonds.values();
      },

      defaultValues: {
        attributes: {},
        basePadding1: 0,
        basePadding2: 0,
      },
    };

    let secondaryBonds = [...'123456'].map(() => ({ domNode: document.createElementNS('http://www.w3.org/2000/svg', 'line') }));

    this.secondaryBonds = {
      [Symbol.iterator]() {
        return secondaryBonds.values();
      },

      defaultValues: {
        attributes: {},
        basePadding1: 0,
        basePadding2: 0,
      },
    };

    let tertiaryBonds = [...'123456'].map(() => ({ domNode: document.createElementNS('http://www.w3.org/2000/svg', 'path') }));

    this.tertiaryBonds = {
      [Symbol.iterator]() {
        return tertiaryBonds.values();
      },

      defaultValues: {
        attributes: {},
        basePadding1: 0,
        basePadding2: 0,
      },
    };
  }
}
