# Installation

With `npm`:

```
npm install @rnacanvas/specs
```

# Usage

All exports of this package can be accessed as named imports.

```javascript
// an example import
import { Spec } from '@rnacanvas/specs';
```

## `class Spec`

Represents a specification for a drawing.

```javascript
// an example specification
var spec = new Spec({
  bases: {
    attributes: {
      // make all bases red
      'fill': 'red',

      // give all bases a font size of 9 pixels
      // (non-string attribute values are converted to strings)
      'font-size': 9,
    },
  },
  outlines: {
    attributes: {
      'stroke': 'cyan',
      'stroke-width': 3,
    },
  },
  numberings: {
    attributes: {
      'font-family': 'Arial Narrow',
      'font-size': 12,
    },
  },
  numberingLines: {
    attributes: {
      'stroke-dasharray': '1 1',
      'stroke-width': 1,
    },
    basePadding: 8,
    textPadding: 4
  },
  primaryBonds: {
    attributes: { 'stroke': 'yellow' },
    basePadding1: 12,
    basePadding2: 12,
  },
  secondaryBonds: {
    attributes: { 'stroke-linecap': 'round' },
    basePadding1: 6,
    basePadding2: 6,
  },
  tertiaryBonds: {
    attributes: { 'stroke-dashsarray': '2 1' },
    basePadding1: 8,
    basePadding2: 8,
  },
});
```

Specifications are applied to RNAcanvas drawings using the `applyTo()` method.

```javascript
// apply the spec to an RNAcanvas drawing object
spec.applyTo(drawing);
```

Specifications are intended to be read in from the user
(e.g., from a JSON file).

Note that applying a specification also updates the default values for elements.

```javascript
var spec = new Spec({
  bases: {
    attributes: { 'fill': 'red' },
  },
});

spec.applyTo(drawing);

// all pre-existing bases are now red
[...drawing.bases][0].domNode.getAttribute('fill'); // "red"

// all newly added bases will also be red by default
drawing.bases.defaultValues.attributes['fill']; // "red"
```
