export const booleanReferenceEntries = [
  {
    slug: "boolean-constructor-function",
    title: "Boolean()",
    description: "Convert a value to its boolean primitive using JavaScript truthiness rules.",
    code: `Boolean("hello"); // true\nBoolean(0); // false`,
  },
  {
    slug: "boolean-constructor-object",
    title: "new Boolean()",
    description: "Create a Boolean wrapper object. Avoid this form in application logic because even new Boolean(false) is truthy.",
    code: `const wrapped = new Boolean(false);\nBoolean(wrapped); // true\nwrapped.valueOf(); // false`,
  },
  {
    slug: "boolean-constructor-property",
    title: "constructor",
    description: "The constructor property on Boolean.prototype refers to the Boolean function.",
    code: `Boolean.prototype.constructor === Boolean; // true`,
  },
  {
    slug: "boolean-prototype-property",
    title: "prototype",
    description: "Boolean.prototype provides shared methods for Boolean wrapper objects. Avoid changing built-in prototypes.",
    code: `Object.getPrototypeOf(new Boolean(true)) === Boolean.prototype; // true`,
  },
  {
    slug: "boolean-to-string",
    title: "toString()",
    description: "Return the string \"true\" or \"false\" for a boolean primitive or Boolean object.",
    code: `Boolean(false).toString(); // "false"`,
  },
  {
    slug: "boolean-value-of",
    title: "valueOf()",
    description: "Return the boolean primitive represented by a Boolean object.",
    code: `new Boolean(false).valueOf(); // false`,
  },
] as const;

export type BooleanReferenceSlug = (typeof booleanReferenceEntries)[number]["slug"];

export const booleanReferenceSlugs = booleanReferenceEntries.map(
  (entry) => entry.slug,
) as BooleanReferenceSlug[];

export const booleanReferenceDetails = Object.fromEntries(
  booleanReferenceEntries.map(({ slug, title, description, code }) => [
    slug,
    { title, description, code },
  ]),
) as Record<
  BooleanReferenceSlug,
  { title: string; description: string; code: string }
>;

export function isBooleanReferenceSlug(
  value: string,
): value is BooleanReferenceSlug {
  return booleanReferenceSlugs.includes(value as BooleanReferenceSlug);
}

export function runBooleanExample(slug: BooleanReferenceSlug): unknown {
  switch (slug) {
    case "boolean-constructor-function":
      return { truthyString: Boolean("hello"), falsyZero: Boolean(0) };
    case "boolean-constructor-object": {
      const wrapped = new Boolean(false);
      return {
        booleanObjectIsTruthy: Boolean(wrapped),
        primitiveValue: wrapped.valueOf(),
      };
    }
    case "boolean-constructor-property":
      return Boolean.prototype.constructor === Boolean;
    case "boolean-prototype-property":
      return Object.getPrototypeOf(new Boolean(true)) === Boolean.prototype;
    case "boolean-to-string":
      return Boolean(false).toString();
    case "boolean-value-of":
      return new Boolean(false).valueOf();
  }
}
