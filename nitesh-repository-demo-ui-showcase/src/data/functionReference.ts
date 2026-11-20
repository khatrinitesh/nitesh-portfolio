function addWithBase(this: { base: number }, first: number, second: number): number {
  return this.base + first + second;
}

function sampleFunction(first: number, second: number): number {
  return first + second;
}

export const functionReferenceEntries = [
  {
    slug: "function-apply",
    title: "apply()",
    description: "Call a function with a chosen this value and arguments supplied as an array-like value.",
    code: `addWithBase.apply({ base: 10 }, [2, 3]); // 15`,
  },
  {
    slug: "function-bind",
    title: "bind()",
    description: "Create a new function with a chosen this value and optionally pre-filled arguments.",
    code: `const addToTen = addWithBase.bind({ base: 10 }, 2);\naddToTen(3); // 15`,
  },
  {
    slug: "function-call",
    title: "call()",
    description: "Call a function with a chosen this value and arguments passed individually.",
    code: `addWithBase.call({ base: 10 }, 2, 3); // 15`,
  },
  {
    slug: "function-length",
    title: "length",
    description: "Return the number of parameters before the first one with a default value; rest parameters are not counted.",
    code: `sampleFunction.length; // 2`,
  },
  {
    slug: "function-name",
    title: "name",
    description: "Return the function's name as a string. Names are useful for debugging but should not be used as stable identifiers.",
    code: `sampleFunction.name; // "sampleFunction"`,
  },
  {
    slug: "function-to-string",
    title: "toString()",
    description: "Return a source-like string for a function. Native and bound functions may return implementation-dependent text.",
    code: `sampleFunction.toString();`,
  },
] as const;

export type FunctionReferenceSlug =
  (typeof functionReferenceEntries)[number]["slug"];

export const functionReferenceSlugs = functionReferenceEntries.map(
  (entry) => entry.slug,
) as FunctionReferenceSlug[];

export const functionReferenceDetails = Object.fromEntries(
  functionReferenceEntries.map(({ slug, title, description, code }) => [
    slug,
    { title, description, code },
  ]),
) as Record<
  FunctionReferenceSlug,
  { title: string; description: string; code: string }
>;

export function isFunctionReferenceSlug(
  value: string,
): value is FunctionReferenceSlug {
  return functionReferenceSlugs.includes(value as FunctionReferenceSlug);
}

export function runFunctionExample(slug: FunctionReferenceSlug): unknown {
  switch (slug) {
    case "function-apply":
      return addWithBase.apply({ base: 10 }, [2, 3]);
    case "function-bind":
      return addWithBase.bind({ base: 10 }, 2)(3);
    case "function-call":
      return addWithBase.call({ base: 10 }, 2, 3);
    case "function-length":
      return sampleFunction.length;
    case "function-name":
      return sampleFunction.name;
    case "function-to-string":
      return sampleFunction.toString();
  }
}
