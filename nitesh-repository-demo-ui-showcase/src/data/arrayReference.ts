export const arrayReferenceEntries = [
  { slug: "array-literal", title: "[]", description: "Create an array with the array literal syntax. This is the preferred way to create most arrays.", code: `const fruits = ["apple", "banana"];` },
  { slug: "array-constructor", title: "new Array()", description: "Create an array with the Array constructor. A single numeric argument creates an empty array of that length.", code: `const values = new Array(3); // three empty slots` },
  { slug: "array-at", title: "at()", description: "Return the element at an index; negative indexes count from the end.", code: `["a", "b", "c"].at(-1); // "c"` },
  { slug: "array-concat", title: "concat()", description: "Join arrays and values into a new array without changing the source arrays.", code: `[1, 2].concat([3, 4]); // [1, 2, 3, 4]` },
  { slug: "array-constructor-property", title: "constructor", description: "Access the constructor function that created an array; for ordinary arrays this is Array.", code: `[].constructor === Array; // true` },
  { slug: "array-copy-within", title: "copyWithin()", description: "Copy a range of elements to another position in the same array, mutating that array.", code: `[1, 2, 3, 4].copyWithin(1, 2); // [1, 3, 4, 4]` },
  { slug: "array-entries", title: "entries()", description: "Return an iterator of index and value pairs.", code: `Array.from(["a", "b"].entries()); // [[0, "a"], [1, "b"]]` },
  { slug: "array-every", title: "every()", description: "Test whether every element passes a callback condition.", code: `[2, 4, 6].every((value) => value % 2 === 0); // true` },
  { slug: "array-fill", title: "fill()", description: "Fill a range of an array with one value, mutating that array.", code: `[1, 2, 3].fill(0, 1); // [1, 0, 0]` },
  { slug: "array-filter", title: "filter()", description: "Create a new array containing elements that pass a callback condition.", code: `[1, 2, 3, 4].filter((value) => value % 2 === 0); // [2, 4]` },
  { slug: "array-find", title: "find()", description: "Return the first element that passes a callback condition, or undefined.", code: `[1, 2, 3, 4].find((value) => value > 2); // 3` },
  { slug: "array-find-index", title: "findIndex()", description: "Return the index of the first element that passes a callback condition, or -1.", code: `[1, 2, 3, 4].findIndex((value) => value > 2); // 2` },
  { slug: "array-find-last", title: "findLast()", description: "Return the last element that passes a callback condition, or undefined.", code: `[1, 2, 3, 4].findLast((value) => value > 2); // 4` },
  { slug: "array-find-last-index", title: "findLastIndex()", description: "Return the index of the last element that passes a callback condition, or -1.", code: `[1, 2, 3, 4].findLastIndex((value) => value > 2); // 3` },
  { slug: "array-flat", title: "flat()", description: "Create a new array with nested arrays flattened to the requested depth.", code: `[1, [2, [3]]].flat(2); // [1, 2, 3]` },
  { slug: "array-flat-map", title: "flatMap()", description: "Map each element and flatten the result by one level.", code: `[1, 2].flatMap((value) => [value, value * 2]); // [1, 2, 2, 4]` },
  { slug: "array-for-each", title: "forEach()", description: "Run a callback once for each array element; it returns undefined.", code: `[1, 2, 3].forEach((value) => console.log(value));` },
  { slug: "array-from", title: "Array.from()", description: "Create an array from an iterable or array-like value, optionally mapping its elements.", code: `Array.from("cat"); // ["c", "a", "t"]` },
  { slug: "array-includes", title: "includes()", description: "Check whether an array contains a value, using SameValueZero comparison.", code: `["red", "blue"].includes("blue"); // true` },
  { slug: "array-index-of", title: "indexOf()", description: "Return the first index of a strictly equal value, or -1 if it is absent.", code: `["a", "b", "a"].indexOf("a"); // 0` },
  { slug: "array-is-array", title: "Array.isArray()", description: "Check whether a value is an array, including arrays created in another realm.", code: `Array.isArray([1, 2]); // true` },
  { slug: "array-join", title: "join()", description: "Join array elements into a string with a chosen separator.", code: `["one", "two"].join(" · "); // "one · two"` },
  { slug: "array-keys", title: "keys()", description: "Return an iterator containing the array's indexes.", code: `Array.from(["a", "b"].keys()); // [0, 1]` },
  { slug: "array-last-index-of", title: "lastIndexOf()", description: "Return the last index of a strictly equal value, searching from the end.", code: `["a", "b", "a"].lastIndexOf("a"); // 2` },
  { slug: "array-length", title: "length", description: "Read or set the number of array slots. Setting a shorter length truncates the array.", code: `["a", "b", "c"].length; // 3` },
  { slug: "array-map", title: "map()", description: "Create a new array from the result of calling a function for each element.", code: `[1, 2, 3].map((value) => value * 2); // [2, 4, 6]` },
  { slug: "array-of", title: "Array.of()", description: "Create a new array from its arguments; unlike new Array(3), Array.of(3) contains one value.", code: `Array.of(3); // [3]` },
  { slug: "array-pop", title: "pop()", description: "Remove and return the last element, mutating the array.", code: `const values = [1, 2, 3]; values.pop(); // 3` },
  { slug: "array-prototype-property", title: "prototype", description: "Array.prototype is the shared prototype for array methods. Avoid modifying built-in prototypes in application code.", code: `Object.getPrototypeOf([]) === Array.prototype; // true` },
  { slug: "array-push", title: "push()", description: "Add one or more elements to the end of an array and return its new length.", code: `const values = [1, 2]; values.push(3); // 3` },
  { slug: "array-reduce", title: "reduce()", description: "Accumulate array elements into one value from left to right; provide an initial value when practical.", code: `[1, 2, 3].reduce((sum, value) => sum + value, 0); // 6` },
  { slug: "array-reduce-right", title: "reduceRight()", description: "Accumulate array elements into one value from right to left.", code: `["a", "b", "c"].reduceRight((text, value) => text + value, ""); // "cba"` },
  { slug: "array-reverse", title: "reverse()", description: "Reverse an array in place and return the same array.", code: `const values = [1, 2, 3]; values.reverse(); // [3, 2, 1]` },
  { slug: "array-shift", title: "shift()", description: "Remove and return the first element, mutating the array.", code: `const values = [1, 2, 3]; values.shift(); // 1` },
  { slug: "array-slice", title: "slice()", description: "Return a shallow copy of a selected range without changing the source array.", code: `["a", "b", "c"].slice(1); // ["b", "c"]` },
  { slug: "array-some", title: "some()", description: "Test whether at least one element passes a callback condition.", code: `[1, 2, 3].some((value) => value > 2); // true` },
  { slug: "array-sort", title: "sort()", description: "Sort an array in place. Pass a comparator for numeric ordering.", code: `[10, 2, 1].sort((a, b) => a - b); // [1, 2, 10]` },
  { slug: "array-splice", title: "splice()", description: "Add, remove, or replace elements in place and return the removed elements.", code: `const values = [1, 2, 3]; values.splice(1, 1, 9); // values is [1, 9, 3]` },
  { slug: "array-to-reversed", title: "toReversed()", description: "Return a reversed copy, leaving the original array unchanged.", code: `[1, 2, 3].toReversed(); // [3, 2, 1]` },
  { slug: "array-to-sorted", title: "toSorted()", description: "Return a sorted copy, leaving the original array unchanged.", code: `[10, 2, 1].toSorted((a, b) => a - b); // [1, 2, 10]` },
  { slug: "array-to-spliced", title: "toSpliced()", description: "Return a copy with elements added, removed, or replaced, leaving the original unchanged.", code: `[1, 2, 3].toSpliced(1, 1, 9); // [1, 9, 3]` },
  { slug: "array-to-string", title: "toString()", description: "Return a string representation of an array, joining elements with commas.", code: `[1, 2, 3].toString(); // "1,2,3"` },
  { slug: "array-unshift", title: "unshift()", description: "Add one or more elements to the beginning of an array and return its new length.", code: `const values = [2, 3]; values.unshift(1); // 3` },
  { slug: "array-value-of", title: "valueOf()", description: "Return the array itself; it does not convert an array to a primitive value.", code: `const values = [1, 2]; values.valueOf() === values; // true` },
  { slug: "array-with", title: "with()", description: "Return a copy with the element at one index replaced; negative indexes count from the end.", code: `["a", "b", "c"].with(1, "x"); // ["a", "x", "c"]` },
] as const;

export type ArrayReferenceSlug = (typeof arrayReferenceEntries)[number]["slug"];

export const arrayReferenceSlugs = arrayReferenceEntries.map(
  (entry) => entry.slug,
) as ArrayReferenceSlug[];

export const arrayReferenceDetails = Object.fromEntries(
  arrayReferenceEntries.map(({ slug, title, description, code }) => [
    slug,
    { title, description, code },
  ]),
) as Record<
  ArrayReferenceSlug,
  { title: string; description: string; code: string }
>;

export function isArrayReferenceSlug(value: string): value is ArrayReferenceSlug {
  return arrayReferenceSlugs.includes(value as ArrayReferenceSlug);
}

export function runArrayExample(slug: ArrayReferenceSlug): unknown {
  const values = [1, 2, 3, 4];

  switch (slug) {
    case "array-literal":
      return ["apple", "banana"];
    case "array-constructor":
      return "Array(3) creates three empty slots";
    case "array-at":
      return ["a", "b", "c"].at(-1);
    case "array-concat":
      return [1, 2].concat([3, 4]);
    case "array-constructor-property":
      return [].constructor === Array;
    case "array-copy-within":
      return values.slice().copyWithin(1, 2);
    case "array-entries":
      return Array.from(["a", "b"].entries());
    case "array-every":
      return [2, 4, 6].every((value) => value % 2 === 0);
    case "array-fill":
      return values.slice().fill(0, 1, 3);
    case "array-filter":
      return values.filter((value) => value % 2 === 0);
    case "array-find":
      return values.find((value) => value > 2);
    case "array-find-index":
      return values.findIndex((value) => value > 2);
    case "array-find-last":
      return values.findLast((value) => value > 2);
    case "array-find-last-index":
      return values.findLastIndex((value) => value > 2);
    case "array-flat":
      return [1, [2, [3]]].flat(2);
    case "array-flat-map":
      return [1, 2].flatMap((value) => [value, value * 2]);
    case "array-for-each": {
      const visited: number[] = [];
      values.forEach((value) => visited.push(value));
      return { returnValue: undefined, visited };
    }
    case "array-from":
      return Array.from("cat");
    case "array-includes":
      return ["red", "blue"].includes("blue");
    case "array-index-of":
      return ["a", "b", "a"].indexOf("a");
    case "array-is-array":
      return Array.isArray(values);
    case "array-join":
      return ["one", "two"].join(" · ");
    case "array-keys":
      return Array.from(["a", "b"].keys());
    case "array-last-index-of":
      return ["a", "b", "a"].lastIndexOf("a");
    case "array-length":
      return ["a", "b", "c"].length;
    case "array-map":
      return values.map((value) => value * 2);
    case "array-of":
      return Array.of(3);
    case "array-pop": {
      const copy = values.slice();
      return { removed: copy.pop(), array: copy };
    }
    case "array-prototype-property":
      return Object.getPrototypeOf([]) === Array.prototype;
    case "array-push": {
      const copy = [1, 2];
      return { newLength: copy.push(3), array: copy };
    }
    case "array-reduce":
      return values.reduce((sum, value) => sum + value, 0);
    case "array-reduce-right":
      return ["a", "b", "c"].reduceRight((text, value) => text + value, "");
    case "array-reverse":
      return values.slice().reverse();
    case "array-shift": {
      const copy = values.slice();
      return { removed: copy.shift(), array: copy };
    }
    case "array-slice":
      return ["a", "b", "c"].slice(1);
    case "array-some":
      return values.some((value) => value > 3);
    case "array-sort":
      return [10, 2, 1].sort((a, b) => a - b);
    case "array-splice": {
      const copy = values.slice();
      const removed = copy.splice(1, 1, 9);
      return { removed, array: copy };
    }
    case "array-to-reversed":
      return values.toReversed();
    case "array-to-sorted":
      return [10, 2, 1].toSorted((a, b) => a - b);
    case "array-to-spliced":
      return values.toSpliced(1, 1, 9);
    case "array-to-string":
      return values.toString();
    case "array-unshift": {
      const copy = [2, 3];
      return { newLength: copy.unshift(1), array: copy };
    }
    case "array-value-of":
      return values.valueOf() === values;
    case "array-with":
      return ["a", "b", "c"].with(1, "x");
  }
}
