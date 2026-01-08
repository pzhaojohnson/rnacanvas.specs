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
var spec = new Spec({
  bases: {
    attributes: {
      // make all bases red
      'fill': 'red',

      // give all bases a font size of 9 pixels
      'font-size': 9,
    },
  },
  primaryBonds: {
    // give all primary bonds base paddings of 12
    basePadding1: 12,
    basePadding2: 12,
  },
});

// apply to an RNAcanvas drawing object
spec.applyTo(drawing);
```

Specifications are intended to be read in from the user
(e.g., from a JSON file)
and then applied to an RNAcanvas drawing.

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
