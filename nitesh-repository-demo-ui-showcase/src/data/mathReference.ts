export const mathReferenceEntries = [
  { slug: "math-abs", title: "abs(x)", description: "Return the non-negative absolute value of a number.", code: `Math.abs(-7); // 7` },
  { slug: "math-acos", title: "acos(x)", description: "Return the arccosine of a value, in radians.", code: `Math.acos(0.5);` },
  { slug: "math-acosh", title: "acosh(x)", description: "Return the inverse hyperbolic cosine of a value.", code: `Math.acosh(2);` },
  { slug: "math-asin", title: "asin(x)", description: "Return the arcsine of a value, in radians.", code: `Math.asin(0.5);` },
  { slug: "math-asinh", title: "asinh(x)", description: "Return the inverse hyperbolic sine of a value.", code: `Math.asinh(1);` },
  { slug: "math-atan", title: "atan(x)", description: "Return the arctangent of a value, in radians.", code: `Math.atan(1);` },
  { slug: "math-atan2", title: "atan2(y, x)", description: "Return the angle in radians from the positive x-axis to the point (x, y).", code: `Math.atan2(1, 1);` },
  { slug: "math-atanh", title: "atanh(x)", description: "Return the inverse hyperbolic tangent of a value between -1 and 1.", code: `Math.atanh(0.5);` },
  { slug: "math-cbrt", title: "cbrt(x)", description: "Return the cube root of a value.", code: `Math.cbrt(27); // 3` },
  { slug: "math-ceil", title: "ceil(x)", description: "Round a value up to the nearest integer.", code: `Math.ceil(4.2); // 5` },
  { slug: "math-clz32", title: "clz32(x)", description: "Return the number of leading zero bits in the 32-bit representation of a value.", code: `Math.clz32(1); // 31` },
  { slug: "math-cos", title: "cos(x)", description: "Return the cosine of an angle measured in radians.", code: `Math.cos(Math.PI); // -1` },
  { slug: "math-cosh", title: "cosh(x)", description: "Return the hyperbolic cosine of a value.", code: `Math.cosh(1);` },
  { slug: "math-e", title: "E", description: "Return Euler's number, the base of natural logarithms.", code: `Math.E;` },
  { slug: "math-exp", title: "exp(x)", description: "Return Euler's number raised to a value.", code: `Math.exp(1); // Math.E` },
  { slug: "math-expm1", title: "expm1(x)", description: "Return e raised to a value, minus 1, with precision for values near zero.", code: `Math.expm1(1);` },
  { slug: "math-f16round", title: "f16round(x)", description: "Round a number to the nearest IEEE 754 binary16 (half-precision) value.", code: `Math.f16round(1.337);` },
  { slug: "math-floor", title: "floor(x)", description: "Round a value down to the nearest integer.", code: `Math.floor(4.8); // 4` },
  { slug: "math-fround", title: "fround(x)", description: "Round a value to the nearest IEEE 754 binary32 (single-precision) value.", code: `Math.fround(1.337);` },
  { slug: "math-ln2", title: "LN2", description: "Return the natural logarithm of 2.", code: `Math.LN2;` },
  { slug: "math-ln10", title: "LN10", description: "Return the natural logarithm of 10.", code: `Math.LN10;` },
  { slug: "math-log", title: "log(x)", description: "Return the natural logarithm of a value.", code: `Math.log(Math.E); // 1` },
  { slug: "math-log10", title: "log10(x)", description: "Return the base-10 logarithm of a value.", code: `Math.log10(100); // 2` },
  { slug: "math-log10e", title: "LOG10E", description: "Return the base-10 logarithm of Euler's number.", code: `Math.LOG10E;` },
  { slug: "math-log1p", title: "log1p(x)", description: "Return the natural logarithm of 1 plus a value, with precision near zero.", code: `Math.log1p(1);` },
  { slug: "math-log2", title: "log2(x)", description: "Return the base-2 logarithm of a value.", code: `Math.log2(8); // 3` },
  { slug: "math-log2e", title: "LOG2E", description: "Return the base-2 logarithm of Euler's number.", code: `Math.LOG2E;` },
  { slug: "math-max", title: "max(...values)", description: "Return the largest of the supplied numbers.", code: `Math.max(3, 9, -2); // 9` },
  { slug: "math-min", title: "min(...values)", description: "Return the smallest of the supplied numbers.", code: `Math.min(3, 9, -2); // -2` },
  { slug: "math-pi", title: "PI", description: "Return the ratio of a circle's circumference to its diameter.", code: `Math.PI;` },
  { slug: "math-pow", title: "pow(x, y)", description: "Return the first value raised to the power of the second.", code: `Math.pow(2, 5); // 32` },
  { slug: "math-random", title: "random()", description: "Return a pseudo-random number greater than or equal to 0 and less than 1.", code: `Math.random();` },
  { slug: "math-round", title: "round(x)", description: "Round to the nearest integer; exact half values round toward positive infinity.", code: `Math.round(4.5); // 5` },
  { slug: "math-sign", title: "sign(x)", description: "Return the sign of a value: -1, 0, or 1, while preserving NaN and signed zero.", code: `Math.sign(-12); // -1` },
  { slug: "math-sin", title: "sin(x)", description: "Return the sine of an angle measured in radians.", code: `Math.sin(Math.PI / 2); // 1` },
  { slug: "math-sinh", title: "sinh(x)", description: "Return the hyperbolic sine of a value.", code: `Math.sinh(1);` },
  { slug: "math-sqrt", title: "sqrt(x)", description: "Return the square root of a value.", code: `Math.sqrt(81); // 9` },
  { slug: "math-sqrt1-2", title: "SQRT1_2", description: "Return the square root of one half.", code: `Math.SQRT1_2;` },
  { slug: "math-sqrt2", title: "SQRT2", description: "Return the square root of 2.", code: `Math.SQRT2;` },
  { slug: "math-tan", title: "tan(x)", description: "Return the tangent of an angle measured in radians.", code: `Math.tan(Math.PI / 4); // approximately 1` },
  { slug: "math-tanh", title: "tanh(x)", description: "Return the hyperbolic tangent of a value.", code: `Math.tanh(1);` },
  { slug: "math-trunc", title: "trunc(x)", description: "Remove the fractional part of a value, truncating toward zero.", code: `Math.trunc(-4.8); // -4` },
] as const;

export type MathReferenceSlug =
  (typeof mathReferenceEntries)[number]["slug"];

export const mathReferenceSlugs = mathReferenceEntries.map(
  (entry) => entry.slug,
) as MathReferenceSlug[];

export const mathReferenceDetails = Object.fromEntries(
  mathReferenceEntries.map(({ slug, title, description, code }) => [
    slug,
    { title, description, code },
  ]),
) as Record<
  MathReferenceSlug,
  { title: string; description: string; code: string }
>;

export function isMathReferenceSlug(value: string): value is MathReferenceSlug {
  return mathReferenceSlugs.includes(value as MathReferenceSlug);
}

function roundToBinary16(value: number): number {
  if (!Number.isFinite(value) || value === 0) return value;
  const magnitude = Math.abs(value);
  const step = magnitude < 2 ** -14
    ? 2 ** -24
    : 2 ** (Math.floor(Math.log2(magnitude)) - 10);
  const scaled = magnitude / step;
  const lower = Math.floor(scaled);
  const fraction = scaled - lower;
  const rounded = fraction < 0.5
    ? lower
    : fraction > 0.5
      ? lower + 1
      : lower % 2 === 0
        ? lower
        : lower + 1;
  const result = rounded * step;
  if (result > 65504) return Math.sign(value) * Infinity;
  return Math.sign(value) * result;
}

export function runMathExample(slug: MathReferenceSlug): unknown {
  switch (slug) {
    case "math-abs": return Math.abs(-7);
    case "math-acos": return Math.acos(0.5);
    case "math-acosh": return Math.acosh(2);
    case "math-asin": return Math.asin(0.5);
    case "math-asinh": return Math.asinh(1);
    case "math-atan": return Math.atan(1);
    case "math-atan2": return Math.atan2(1, 1);
    case "math-atanh": return Math.atanh(0.5);
    case "math-cbrt": return Math.cbrt(27);
    case "math-ceil": return Math.ceil(4.2);
    case "math-clz32": return Math.clz32(1);
    case "math-cos": return Math.cos(Math.PI);
    case "math-cosh": return Math.cosh(1);
    case "math-e": return Math.E;
    case "math-exp": return Math.exp(1);
    case "math-expm1": return Math.expm1(1);
    case "math-f16round": return roundToBinary16(1.337);
    case "math-floor": return Math.floor(4.8);
    case "math-fround": return Math.fround(1.337);
    case "math-ln2": return Math.LN2;
    case "math-ln10": return Math.LN10;
    case "math-log": return Math.log(Math.E);
    case "math-log10": return Math.log10(100);
    case "math-log10e": return Math.LOG10E;
    case "math-log1p": return Math.log1p(1);
    case "math-log2": return Math.log2(8);
    case "math-log2e": return Math.LOG2E;
    case "math-max": return Math.max(3, 9, -2);
    case "math-min": return Math.min(3, 9, -2);
    case "math-pi": return Math.PI;
    case "math-pow": return Math.pow(2, 5);
    case "math-random": return Math.random();
    case "math-round": return Math.round(4.5);
    case "math-sign": return Math.sign(-12);
    case "math-sin": return Math.sin(Math.PI / 2);
    case "math-sinh": return Math.sinh(1);
    case "math-sqrt": return Math.sqrt(81);
    case "math-sqrt1-2": return Math.SQRT1_2;
    case "math-sqrt2": return Math.SQRT2;
    case "math-tan": return Math.tan(Math.PI / 4);
    case "math-tanh": return Math.tanh(1);
    case "math-trunc": return Math.trunc(-4.8);
  }
}
