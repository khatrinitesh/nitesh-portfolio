export const objectReferenceEntries = [
  { slug: "object-assign", title: "assign()", description: "Copy enumerable own properties from one or more source objects into a target object.", code: `Object.assign({ name: "Ada" }, { role: "developer" });` },
  { slug: "object-constructor", title: "constructor", description: "Access the constructor function inherited by an object from its prototype.", code: `({}).constructor === Object; // true` },
  { slug: "object-create", title: "create()", description: "Create a new object with a specified prototype object.", code: `const prototype = { greet: () => "Hello" };\nconst person = Object.create(prototype);\nperson.greet(); // "Hello"` },
  { slug: "object-define-properties", title: "defineProperties()", description: "Define or modify multiple own properties using property descriptors.", code: `const settings = {};\nObject.defineProperties(settings, {\n  theme: { value: "dark", enumerable: true },\n  version: { value: 1, enumerable: true },\n});` },
  { slug: "object-define-property", title: "defineProperty()", description: "Define or modify an own property using a property descriptor.", code: `const user = {};\nObject.defineProperty(user, "name", {\n  value: "Ada",\n  enumerable: true,\n});` },
  { slug: "object-delete", title: "delete", description: "Remove a configurable own property from an object. It returns whether deletion succeeded.", code: `const user = { name: "Ada", role: "developer" };\ndelete user.role;` },
  { slug: "object-entries", title: "entries()", description: "Return an array of an object's enumerable own string-keyed [key, value] pairs.", code: `Object.entries({ name: "Ada", role: "developer" });` },
  { slug: "object-freeze", title: "freeze()", description: "Prevent extensions and make existing own properties non-writable and non-configurable (shallowly).", code: `const settings = Object.freeze({ theme: "dark" });\nObject.isFrozen(settings); // true` },
  { slug: "object-from-entries", title: "fromEntries()", description: "Create an object from an iterable of [key, value] pairs.", code: `Object.fromEntries([["name", "Ada"], ["role", "developer"]]);` },
  { slug: "object-get-own-property-descriptor", title: "getOwnPropertyDescriptor()", description: "Return the descriptor for an object's own property, or undefined if it does not exist.", code: `Object.getOwnPropertyDescriptor({ name: "Ada" }, "name");` },
  { slug: "object-get-own-property-descriptors", title: "getOwnPropertyDescriptors()", description: "Return the descriptors for all of an object's own properties.", code: `Object.getOwnPropertyDescriptors({ name: "Ada" });` },
  { slug: "object-get-own-property-names", title: "getOwnPropertyNames()", description: "Return all own string-keyed property names, including non-enumerable properties.", code: `Object.getOwnPropertyNames({ name: "Ada" });` },
  { slug: "object-group-by", title: "groupBy()", description: "Group iterable values by callback result into an object with a null prototype.", code: `Object.groupBy(["ant", "bear", "cat"], (animal) => animal.length);` },
  { slug: "object-is-extensible", title: "isExtensible()", description: "Check whether new properties can be added to an object.", code: `Object.isExtensible({}); // true` },
  { slug: "object-is-frozen", title: "isFrozen()", description: "Check whether an object is frozen.", code: `Object.isFrozen(Object.freeze({ name: "Ada" })); // true` },
  { slug: "object-is-sealed", title: "isSealed()", description: "Check whether an object is sealed.", code: `Object.isSealed(Object.seal({ name: "Ada" })); // true` },
  { slug: "object-keys", title: "keys()", description: "Return an array of an object's enumerable own string-keyed property names.", code: `Object.keys({ name: "Ada", role: "developer" });` },
  { slug: "object-prevent-extensions", title: "preventExtensions()", description: "Prevent new properties from being added to an object.", code: `const settings = Object.preventExtensions({ theme: "dark" });\nObject.isExtensible(settings); // false` },
  { slug: "object-prototype", title: "prototype", description: "Access Object.prototype, the prototype shared by ordinary objects.", code: `Object.getPrototypeOf({}) === Object.prototype; // true` },
  { slug: "object-seal", title: "seal()", description: "Prevent extensions and prevent existing own properties from being deleted or reconfigured.", code: `const settings = Object.seal({ theme: "dark" });\nObject.isSealed(settings); // true` },
  { slug: "object-to-string", title: "toString()", description: "Convert an object to its string representation.", code: `Object.prototype.toString.call({}); // "[object Object]"` },
  { slug: "object-value-of", title: "valueOf()", description: "Return the object's primitive value; for an ordinary object, this is the object itself.", code: `({ name: "Ada" }).valueOf();` },
  { slug: "object-values", title: "values()", description: "Return an array of an object's enumerable own string-keyed property values.", code: `Object.values({ name: "Ada", role: "developer" });` },
] as const;

export type ObjectReferenceSlug =
  (typeof objectReferenceEntries)[number]["slug"];

export const objectReferenceSlugs = objectReferenceEntries.map(
  (entry) => entry.slug,
) as ObjectReferenceSlug[];

export const objectReferenceDetails = Object.fromEntries(
  objectReferenceEntries.map(({ slug, title, description, code }) => [
    slug,
    { title, description, code },
  ]),
) as Record<
  ObjectReferenceSlug,
  { title: string; description: string; code: string }
>;

export function isObjectReferenceSlug(
  value: string,
): value is ObjectReferenceSlug {
  return objectReferenceSlugs.includes(value as ObjectReferenceSlug);
}

function groupBy<T>(
  values: Iterable<T>,
  callback: (value: T) => PropertyKey,
): Record<PropertyKey, T[]> {
  const grouped = Object.create(null) as Record<PropertyKey, T[]>;
  for (const value of values) {
    const key = callback(value);
    if (Object.hasOwn(grouped, key)) {
      grouped[key].push(value);
    } else {
      grouped[key] = [value];
    }
  }
  return grouped;
}

export function runObjectExample(slug: ObjectReferenceSlug): unknown {
  switch (slug) {
    case "object-assign":
      return Object.assign({ name: "Ada" }, { role: "developer" });
    case "object-constructor":
      return ({}).constructor === Object;
    case "object-create": {
      const prototype = { greet: () => "Hello" };
      const person = Object.create(prototype) as { greet: () => string };
      return { greeting: person.greet(), usesPrototype: Object.getPrototypeOf(person) === prototype };
    }
    case "object-define-properties": {
      const settings = {};
      Object.defineProperties(settings, {
        theme: { value: "dark", enumerable: true },
        version: { value: 1, enumerable: true },
      });
      return settings;
    }
    case "object-define-property": {
      const user = {};
      Object.defineProperty(user, "name", { value: "Ada", enumerable: true });
      return user;
    }
    case "object-delete": {
      const user: { name: string; role?: string } = { name: "Ada", role: "developer" };
      const deleted = delete user.role;
      return { deleted, user };
    }
    case "object-entries":
      return Object.entries({ name: "Ada", role: "developer" });
    case "object-freeze": {
      const settings = Object.freeze({ theme: "dark" });
      return { isFrozen: Object.isFrozen(settings), settings };
    }
    case "object-from-entries":
      return Object.fromEntries([["name", "Ada"], ["role", "developer"]]);
    case "object-get-own-property-descriptor":
      return Object.getOwnPropertyDescriptor({ name: "Ada" }, "name");
    case "object-get-own-property-descriptors":
      return Object.getOwnPropertyDescriptors({ name: "Ada" });
    case "object-get-own-property-names":
      return Object.getOwnPropertyNames({ name: "Ada" });
    case "object-group-by":
      return groupBy(["ant", "bear", "cat"], (animal) => animal.length);
    case "object-is-extensible":
      return Object.isExtensible({});
    case "object-is-frozen":
      return Object.isFrozen(Object.freeze({ name: "Ada" }));
    case "object-is-sealed":
      return Object.isSealed(Object.seal({ name: "Ada" }));
    case "object-keys":
      return Object.keys({ name: "Ada", role: "developer" });
    case "object-prevent-extensions": {
      const settings = Object.preventExtensions({ theme: "dark" });
      return { isExtensible: Object.isExtensible(settings), settings };
    }
    case "object-prototype":
      return Object.getPrototypeOf({}) === Object.prototype;
    case "object-seal": {
      const settings = Object.seal({ theme: "dark" });
      return { isSealed: Object.isSealed(settings), settings };
    }
    case "object-to-string":
      return Object.prototype.toString.call({});
    case "object-value-of":
      return ({ name: "Ada" }).valueOf();
    case "object-values":
      return Object.values({ name: "Ada", role: "developer" });
  }
}
