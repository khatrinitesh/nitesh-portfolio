export const operatorReferenceCategories = [
  "Assignment",
  "Arithmetic",
  "Comparison",
  "Logical",
  "Bitwise",
  "Miscellaneous",
] as const;

export type OperatorCategory = (typeof operatorReferenceCategories)[number];

export const operatorReferenceEntries = [
  { slug: "operator-assignment", category: "Assignment", title: "=", description: "Assign a value to a variable.", code: `let x = 5;\nx; // 5` },
  { slug: "operator-addition-assignment", category: "Assignment", title: "+=", description: "Add a value and assign the result.", code: `let x = 10;\nx += 5; // x is 15` },
  { slug: "operator-subtraction-assignment", category: "Assignment", title: "-=", description: "Subtract a value and assign the result.", code: `let x = 10;\nx -= 5; // x is 5` },
  { slug: "operator-multiplication-assignment", category: "Assignment", title: "*=", description: "Multiply by a value and assign the result.", code: `let x = 10;\nx *= 5; // x is 50` },
  { slug: "operator-division-assignment", category: "Assignment", title: "/=", description: "Divide by a value and assign the result.", code: `let x = 10;\nx /= 5; // x is 2` },
  { slug: "operator-remainder-assignment", category: "Assignment", title: "%=", description: "Assign the remainder after division.", code: `let x = 10;\nx %= 4; // x is 2` },
  { slug: "operator-exponentiation-assignment", category: "Assignment", title: "**=", description: "Raise a variable to a power and assign the result.", code: `let x = 3;\nx **= 2; // x is 9` },
  { slug: "operator-bitwise-and-assignment", category: "Assignment", title: "&=", description: "Apply bitwise AND and assign the result.", code: `let x = 5;\nx &= 3; // x is 1` },
  { slug: "operator-bitwise-or-assignment", category: "Assignment", title: "|=", description: "Apply bitwise OR and assign the result.", code: `let x = 5;\nx |= 2; // x is 7` },
  { slug: "operator-bitwise-xor-assignment", category: "Assignment", title: "^=", description: "Apply bitwise XOR and assign the result.", code: `let x = 5;\nx ^= 3; // x is 6` },
  { slug: "operator-left-shift-assignment", category: "Assignment", title: "<<=", description: "Shift bits left and assign the result.", code: `let x = 5;\nx <<= 1; // x is 10` },
  { slug: "operator-right-shift-assignment", category: "Assignment", title: ">>=", description: "Sign-propagating right-shift bits and assign the result.", code: `let x = 5;\nx >>= 1; // x is 2` },
  { slug: "operator-unsigned-right-shift-assignment", category: "Assignment", title: ">>>=", description: "Zero-fill right-shift bits and assign the result.", code: `let x = 5;\nx >>>= 1; // x is 2` },
  { slug: "operator-logical-and-assignment", category: "Assignment", title: "&&=", description: "Assign the right side only when the left side is truthy.", code: `let value = true;\nvalue &&= "ready"; // "ready"` },
  { slug: "operator-logical-or-assignment", category: "Assignment", title: "||=", description: "Assign the right side only when the left side is falsy.", code: `let value = 0;\nvalue ||= 10; // 10` },
  { slug: "operator-nullish-assignment", category: "Assignment", title: "??=", description: "Assign the right side only when the left side is null or undefined.", code: `let value = null;\nvalue ??= 10; // 10` },
  { slug: "operator-addition", category: "Arithmetic", title: "+", description: "Add numbers or concatenate strings.", code: `5 + 2; // 7` },
  { slug: "operator-subtraction", category: "Arithmetic", title: "-", description: "Subtract the right value from the left.", code: `5 - 2; // 3` },
  { slug: "operator-multiplication", category: "Arithmetic", title: "*", description: "Multiply two values.", code: `5 * 2; // 10` },
  { slug: "operator-division", category: "Arithmetic", title: "/", description: "Divide the left value by the right.", code: `5 / 2; // 2.5` },
  { slug: "operator-exponentiation", category: "Arithmetic", title: "**", description: "Raise the left value to the power of the right value.", code: `5 ** 2; // 25` },
  { slug: "operator-remainder", category: "Arithmetic", title: "%", description: "Return the remainder after division.", code: `5 % 2; // 1` },
  { slug: "operator-increment", category: "Arithmetic", title: "++", description: "Increase a variable by one. Prefix returns the new value; postfix returns the old value.", code: `let y = 5;\nconst oldValue = y++;\nconst newValue = ++y;\n({ oldValue, newValue, y }); // { oldValue: 5, newValue: 7, y: 7 }` },
  { slug: "operator-decrement", category: "Arithmetic", title: "--", description: "Decrease a variable by one. Prefix returns the new value; postfix returns the old value.", code: `let y = 5;\nconst oldValue = y--;\nconst newValue = --y;\n({ oldValue, newValue, y }); // { oldValue: 5, newValue: 3, y: 3 }` },
  { slug: "operator-unary-plus", category: "Arithmetic", title: "Unary +", description: "Convert an operand to a number.", code: `+"42"; // 42` },
  { slug: "operator-unary-negation", category: "Arithmetic", title: "Unary -", description: "Negate a numeric operand.", code: `-5; // -5` },
  { slug: "operator-equality", category: "Comparison", title: "==", description: "Compare values for equality after type coercion.", code: `5 == "5"; // true` },
  { slug: "operator-strict-equality", category: "Comparison", title: "===", description: "Compare values for equality without type coercion.", code: `5 === "5"; // false` },
  { slug: "operator-inequality", category: "Comparison", title: "!=", description: "Compare values for inequality after type coercion.", code: `5 != "8"; // true` },
  { slug: "operator-strict-inequality", category: "Comparison", title: "!==", description: "Compare values for inequality without type coercion.", code: `5 !== "5"; // true` },
  { slug: "operator-greater-than", category: "Comparison", title: ">", description: "Check whether the left value is greater than the right.", code: `5 > 3; // true` },
  { slug: "operator-less-than", category: "Comparison", title: "<", description: "Check whether the left value is less than the right.", code: `5 < 8; // true` },
  { slug: "operator-greater-equal", category: "Comparison", title: ">=", description: "Check whether the left value is greater than or equal to the right.", code: `5 >= 5; // true` },
  { slug: "operator-less-equal", category: "Comparison", title: "<=", description: "Check whether the left value is less than or equal to the right.", code: `5 <= 8; // true` },
  { slug: "operator-logical-and", category: "Logical", title: "&&", description: "Return the first falsy operand, or the last operand if all are truthy.", code: `6 < 10 && 3 > 1; // true` },
  { slug: "operator-logical-or", category: "Logical", title: "||", description: "Return the first truthy operand, or the last operand if all are falsy.", code: `0 || "fallback"; // "fallback"` },
  { slug: "operator-logical-not", category: "Logical", title: "!", description: "Return the logical opposite of an operand's truthiness.", code: `!(5 === 5); // false` },
  { slug: "operator-nullish-coalescing", category: "Logical", title: "??", description: "Use the right operand only when the left is null or undefined.", code: `null ?? "fallback"; // "fallback"` },
  { slug: "operator-bitwise-and", category: "Bitwise", title: "&", description: "Apply bitwise AND to the 32-bit integer representations of two numbers.", code: `5 & 1; // 1` },
  { slug: "operator-bitwise-or", category: "Bitwise", title: "|", description: "Apply bitwise OR to the 32-bit integer representations of two numbers.", code: `5 | 1; // 5` },
  { slug: "operator-bitwise-not", category: "Bitwise", title: "~", description: "Invert the bits of a 32-bit integer representation.", code: `~5; // -6` },
  { slug: "operator-bitwise-xor", category: "Bitwise", title: "^", description: "Apply bitwise XOR to the 32-bit integer representations of two numbers.", code: `5 ^ 1; // 4` },
  { slug: "operator-left-shift", category: "Bitwise", title: "<<", description: "Shift bits left, filling the right with zeroes.", code: `5 << 1; // 10` },
  { slug: "operator-right-shift", category: "Bitwise", title: ">>", description: "Shift bits right while preserving the sign bit.", code: `5 >> 1; // 2` },
  { slug: "operator-unsigned-right-shift", category: "Bitwise", title: ">>>", description: "Shift bits right while filling the left with zeroes.", code: `5 >>> 1; // 2` },
  { slug: "operator-optional-chaining", category: "Miscellaneous", title: "?.", description: "Access a property or call a function only when the preceding value is not null or undefined.", code: `const user = null;\nuser?.name; // undefined` },
  { slug: "operator-spread", category: "Miscellaneous", title: "... spread", description: "Expand iterable values or object properties into a new array or object.", code: `const values = [1, 2];\n[...values, 3]; // [1, 2, 3]` },
  { slug: "operator-conditional", category: "Miscellaneous", title: "?:", description: "Choose one of two expressions based on a condition.", code: `const age = 20;\nage >= 18 ? "adult" : "minor"; // "adult"` },
  { slug: "operator-new", category: "Miscellaneous", title: "new", description: "Create an instance using a constructor function.", code: `new Date("2024-01-01T00:00:00Z").getUTCFullYear(); // 2024` },
  { slug: "operator-delete", category: "Miscellaneous", title: "delete", description: "Remove a configurable property from an object.", code: `const user = { name: "Ada" };\ndelete user.name; // true` },
  { slug: "operator-in", category: "Miscellaneous", title: "in", description: "Check whether a property exists on an object or anywhere in its prototype chain.", code: `"name" in { name: "Ada" }; // true` },
  { slug: "operator-instanceof", category: "Miscellaneous", title: "instanceof", description: "Check whether a constructor's prototype appears in an object's prototype chain.", code: `[] instanceof Array; // true` },
  { slug: "operator-typeof", category: "Miscellaneous", title: "typeof", description: "Return a string identifying the type of a value.", code: `typeof "Ada"; // "string"` },
  { slug: "operator-void", category: "Miscellaneous", title: "void", description: "Evaluate an expression and return undefined.", code: `void (1 + 2); // undefined` },
  { slug: "operator-yield", category: "Miscellaneous", title: "yield", description: "Pause a generator function and produce a value to its caller.", code: `function* values() { yield "first"; }\nvalues().next(); // { value: "first", done: false }` },
  { slug: "operator-yield-star", category: "Miscellaneous", title: "yield*", description: "Delegate iteration from a generator to another iterable or generator.", code: `function* values() { yield* [1, 2]; }\nArray.from(values()); // [1, 2]` },
  { slug: "operator-invocation", category: "Miscellaneous", title: "() invocation", description: "Call a function by placing parentheses after its name or expression.", code: `const double = (value) => value * 2;\ndouble(4); // 8` },
  { slug: "operator-arrow-function", category: "Miscellaneous", title: "=>", description: "Create a concise function expression. Arrow functions do not have their own this value.", code: `const add = (a, b) => a + b;\nadd(2, 3); // 5` },
  { slug: "operator-dot-access", category: "Miscellaneous", title: ". property access", description: "Access a named property using dot notation.", code: `const person = { age: 30 };\nperson.age; // 30` },
  { slug: "operator-bracket-access", category: "Miscellaneous", title: "[] property access", description: "Access a property using a key expression in brackets.", code: `const person = { age: 30 };\nperson["age"]; // 30` },
  { slug: "operator-grouping", category: "Miscellaneous", title: "() grouping", description: "Group an expression to explicitly control evaluation order.", code: `(2 + 3) * 4; // 20` },
  { slug: "operator-colon", category: "Miscellaneous", title: ": syntax", description: "A colon is syntax used in object properties, labels, and conditional expressions; it is not itself an operator.", code: `const person = { age: 30 };\nperson.age; // 30` },
  { slug: "operator-array-literal", category: "Miscellaneous", title: "[] array literal", description: "Create an array literal. Brackets are syntax, not an operator.", code: `const values = [1, 2, 3];\nvalues.length; // 3` },
  { slug: "operator-object-literal", category: "Miscellaneous", title: "{} object literal", description: "Create an object literal. Braces are syntax, not an operator.", code: `const car = { type: "Fiat", model: "500" };\ncar.type; // "Fiat"` },
  { slug: "operator-block", category: "Miscellaneous", title: "{} block", description: "Group statements in a block. Braces used for blocks are syntax, not an operator.", code: `let result;\n{\n  const value = 2;\n  result = value * 3;\n}\nresult; // 6` },
] as const satisfies readonly {
  slug: string;
  category: OperatorCategory;
  title: string;
  description: string;
  code: string;
}[];

export type OperatorReferenceSlug =
  (typeof operatorReferenceEntries)[number]["slug"];

export const operatorReferenceSlugs = operatorReferenceEntries.map(
  (entry) => entry.slug,
) as OperatorReferenceSlug[];

export const operatorReferenceDetails = Object.fromEntries(
  operatorReferenceEntries.map(({ slug, title, description, code }) => [
    slug,
    { title, description, code },
  ]),
) as Record<
  OperatorReferenceSlug,
  { title: string; description: string; code: string }
>;

export function isOperatorReferenceSlug(
  value: string,
): value is OperatorReferenceSlug {
  return operatorReferenceSlugs.includes(value as OperatorReferenceSlug);
}

function looselyEqual(left: unknown, right: unknown): boolean {
  return left == right;
}

function strictlyEqual(left: unknown, right: unknown): boolean {
  return left === right;
}

export function runOperatorExample(slug: OperatorReferenceSlug): unknown {
  switch (slug) {
    case "operator-assignment": { let x = 5; return x; }
    case "operator-addition-assignment": { let x = 10; x += 5; return x; }
    case "operator-subtraction-assignment": { let x = 10; x -= 5; return x; }
    case "operator-multiplication-assignment": { let x = 10; x *= 5; return x; }
    case "operator-division-assignment": { let x = 10; x /= 5; return x; }
    case "operator-remainder-assignment": { let x = 10; x %= 4; return x; }
    case "operator-exponentiation-assignment": { let x = 3; x **= 2; return x; }
    case "operator-bitwise-and-assignment": { let x = 5; x &= 3; return x; }
    case "operator-bitwise-or-assignment": { let x = 5; x |= 2; return x; }
    case "operator-bitwise-xor-assignment": { let x = 5; x ^= 3; return x; }
    case "operator-left-shift-assignment": { let x = 5; x <<= 1; return x; }
    case "operator-right-shift-assignment": { let x = 5; x >>= 1; return x; }
    case "operator-unsigned-right-shift-assignment": { let x = 5; x >>>= 1; return x; }
    case "operator-logical-and-assignment": { let value: string | boolean = true; value &&= "ready"; return value; }
    case "operator-logical-or-assignment": { let value: number | string = 0; value ||= 10; return value; }
    case "operator-nullish-assignment": { let value: number | null = null; value ??= 10; return value; }
    case "operator-addition": return 5 + 2;
    case "operator-subtraction": return 5 - 2;
    case "operator-multiplication": return 5 * 2;
    case "operator-division": return 5 / 2;
    case "operator-exponentiation": return 5 ** 2;
    case "operator-remainder": return 5 % 2;
    case "operator-increment": { let y = 5; const oldValue = y++; const newValue = ++y; return { oldValue, newValue, y }; }
    case "operator-decrement": { let y = 5; const oldValue = y--; const newValue = --y; return { oldValue, newValue, y }; }
    case "operator-unary-plus": return +"42";
    case "operator-unary-negation": return -5;
    case "operator-equality": return looselyEqual(5, "5");
    case "operator-strict-equality": return strictlyEqual(5, "5");
    case "operator-inequality": return !looselyEqual(5, "8");
    case "operator-strict-inequality": return !strictlyEqual(5, "5");
    case "operator-greater-than": { let left = 5; let right = 3; return left > right; }
    case "operator-less-than": { let left = 5; let right = 8; return left < right; }
    case "operator-greater-equal": { let left = 5; let right = 5; return left >= right; }
    case "operator-less-equal": { let left = 5; let right = 8; return left <= right; }
    case "operator-logical-and": { let left = 6; let right = 3; return left < 10 && right > 1; }
    case "operator-logical-or": { let value: number | string = 0; return value || "fallback"; }
    case "operator-logical-not": { let left = 5; let right = 5; return !(left === right); }
    case "operator-nullish-coalescing": { const getValue = (): number | null => null; return getValue() ?? "fallback"; }
    case "operator-bitwise-and": return 5 & 1;
    case "operator-bitwise-or": return 5 | 1;
    case "operator-bitwise-not": return ~5;
    case "operator-bitwise-xor": return 5 ^ 1;
    case "operator-left-shift": return 5 << 1;
    case "operator-right-shift": return 5 >> 1;
    case "operator-unsigned-right-shift": return 5 >>> 1;
    case "operator-optional-chaining": { const getUser = (): { name: string } | null => null; return getUser()?.name; }
    case "operator-spread": { const values = [1, 2]; return [...values, 3]; }
    case "operator-conditional": { const age = 20; return age >= 18 ? "adult" : "minor"; }
    case "operator-new": return new Date("2024-01-01T00:00:00Z").getUTCFullYear();
    case "operator-delete": { const user: { name?: string } = { name: "Ada" }; const deleted = delete user.name; return { deleted, user }; }
    case "operator-in": return "name" in { name: "Ada" };
    case "operator-instanceof": return [] instanceof Array;
    case "operator-typeof": return typeof "Ada";
    case "operator-void": return void (1 + 2);
    case "operator-yield": { function* values() { yield "first"; } return values().next(); }
    case "operator-yield-star": { function* values() { yield* [1, 2]; } return Array.from(values()); }
    case "operator-invocation": { const double = (value: number) => value * 2; return double(4); }
    case "operator-arrow-function": { const add = (a: number, b: number) => a + b; return add(2, 3); }
    case "operator-dot-access": { const person = { age: 30 }; return person.age; }
    case "operator-bracket-access": { const person = { age: 30 }; return person["age"]; }
    case "operator-grouping": return (2 + 3) * 4;
    case "operator-colon": { const person = { age: 30 }; return person.age; }
    case "operator-array-literal": { const values = [1, 2, 3]; return values.length; }
    case "operator-object-literal": { const car = { type: "Fiat", model: "500" }; return car.type; }
    case "operator-block": { let result: number; { const value = 2; result = value * 3; } return result; }
  }
}
