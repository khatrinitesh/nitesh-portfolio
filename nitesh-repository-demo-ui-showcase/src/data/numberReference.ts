export const numberReferenceEntries = [
  { slug: "number-constructor", title: "constructor", description: "Get the Number constructor that created Number.prototype.", code: `Number.prototype.constructor === Number; // true` },
  { slug: "number-epsilon", title: "EPSILON", description: "Get the difference between 1 and the next representable number greater than 1.", code: `Number.EPSILON;` },
  { slug: "number-is-finite", title: "isFinite()", description: "Check whether a value is a finite number without coercing non-number values.", code: `Number.isFinite(42); // true\nNumber.isFinite("42"); // false` },
  { slug: "number-is-integer", title: "isInteger()", description: "Check whether a value is a number with no fractional part.", code: `Number.isInteger(42); // true` },
  { slug: "number-is-nan", title: "isNaN()", description: "Check whether a value is the numeric NaN value without coercion.", code: `Number.isNaN(Number.NaN); // true` },
  { slug: "number-is-safe-integer", title: "isSafeInteger()", description: "Check whether a value is an integer that can be represented exactly as a JavaScript number.", code: `Number.isSafeInteger(42); // true` },
  { slug: "number-max-safe-integer", title: "MAX_SAFE_INTEGER", description: "Get the largest integer that JavaScript can represent exactly.", code: `Number.MAX_SAFE_INTEGER;` },
  { slug: "number-min-safe-integer", title: "MIN_SAFE_INTEGER", description: "Get the smallest integer that JavaScript can represent exactly.", code: `Number.MIN_SAFE_INTEGER;` },
  { slug: "number-max-value", title: "MAX_VALUE", description: "Get the largest finite positive number representable in JavaScript.", code: `Number.MAX_VALUE;` },
  { slug: "number-min-value", title: "MIN_VALUE", description: "Get the smallest positive number greater than zero representable in JavaScript.", code: `Number.MIN_VALUE;` },
  { slug: "number-nan", title: "NaN", description: "Get the numeric Not-a-Number value. Use Number.isNaN() to check for it.", code: `Number.NaN;` },
  { slug: "number-negative-infinity", title: "NEGATIVE_INFINITY", description: "Get negative infinity, which can result from numeric overflow or division by negative zero.", code: `Number.NEGATIVE_INFINITY;` },
  { slug: "number-positive-infinity", title: "POSITIVE_INFINITY", description: "Get positive infinity, which can result from numeric overflow or division by zero.", code: `Number.POSITIVE_INFINITY;` },
  { slug: "number-parse-float", title: "parseFloat()", description: "Parse a decimal number from the start of a string, allowing trailing non-numeric text.", code: `Number.parseFloat("3.14 meters"); // 3.14` },
  { slug: "number-parse-int", title: "parseInt()", description: "Parse an integer from the start of a string using the specified radix.", code: `Number.parseInt("101", 2); // 5` },
  { slug: "number-prototype", title: "prototype", description: "Access the prototype object that provides methods for Number instances.", code: `Object.getOwnPropertyNames(Number.prototype);` },
  { slug: "number-to-exponential", title: "toExponential(x)", description: "Format a number using exponential notation with x digits after the decimal point.", code: `(123.456).toExponential(2); // "1.23e+2"` },
  { slug: "number-to-fixed", title: "toFixed(x)", description: "Format a number with x digits after the decimal point.", code: `(12.345).toFixed(2); // "12.35"` },
  { slug: "number-to-locale-string", title: "toLocaleString()", description: "Format a number as a locale-sensitive string.", code: `(1234567.89).toLocaleString("en-US");` },
  { slug: "number-to-precision", title: "toPrecision(x)", description: "Format a number to x significant digits.", code: `(123.456).toPrecision(4); // "123.5"` },
  { slug: "number-to-string", title: "toString()", description: "Convert a number to a string, optionally using a radix from 2 to 36.", code: `(255).toString(16); // "ff"` },
  { slug: "number-value-of", title: "valueOf()", description: "Get the primitive numeric value from a Number object.", code: `Object(42).valueOf(); // 42` },
] as const;

export type NumberReferenceSlug =
  (typeof numberReferenceEntries)[number]["slug"];

export const numberReferenceSlugs = numberReferenceEntries.map(
  (entry) => entry.slug,
) as NumberReferenceSlug[];

export const numberReferenceDetails = Object.fromEntries(
  numberReferenceEntries.map(({ slug, title, description, code }) => [
    slug,
    { title, description, code },
  ]),
) as Record<
  NumberReferenceSlug,
  { title: string; description: string; code: string }
>;

export function isNumberReferenceSlug(
  value: string,
): value is NumberReferenceSlug {
  return numberReferenceSlugs.includes(value as NumberReferenceSlug);
}

export function runNumberExample(slug: NumberReferenceSlug): unknown {
  switch (slug) {
    case "number-constructor":
      return Number.prototype.constructor === Number;
    case "number-epsilon":
      return Number.EPSILON;
    case "number-is-finite":
      return [Number.isFinite(42), Number.isFinite("42")];
    case "number-is-integer":
      return Number.isInteger(42);
    case "number-is-nan":
      return Number.isNaN(Number.NaN);
    case "number-is-safe-integer":
      return Number.isSafeInteger(42);
    case "number-max-safe-integer":
      return Number.MAX_SAFE_INTEGER;
    case "number-min-safe-integer":
      return Number.MIN_SAFE_INTEGER;
    case "number-max-value":
      return Number.MAX_VALUE;
    case "number-min-value":
      return Number.MIN_VALUE;
    case "number-nan":
      return Number.NaN;
    case "number-negative-infinity":
      return Number.NEGATIVE_INFINITY;
    case "number-positive-infinity":
      return Number.POSITIVE_INFINITY;
    case "number-parse-float":
      return Number.parseFloat("3.14 meters");
    case "number-parse-int":
      return Number.parseInt("101", 2);
    case "number-prototype":
      return Object.getOwnPropertyNames(Number.prototype);
    case "number-to-exponential":
      return (123.456).toExponential(2);
    case "number-to-fixed":
      return (12.345).toFixed(2);
    case "number-to-locale-string":
      return (1234567.89).toLocaleString("en-US");
    case "number-to-precision":
      return (123.456).toPrecision(4);
    case "number-to-string":
      return (255).toString(16);
    case "number-value-of":
      return Object(42).valueOf();
  }
}
