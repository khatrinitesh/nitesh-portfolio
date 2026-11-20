export const iteratorReferenceEntries = [
  { slug: "iterator-drop", title: "drop()", description: "Return an iterator that skips the first n values.", code: `Iterator.from([1, 2, 3, 4, 5]).drop(2); // 3, 4, 5` },
  { slug: "iterator-every", title: "every()", description: "Test whether every value in the iterator passes a predicate. Iteration stops at the first failure.", code: `Iterator.from([2, 4, 6]).every((value) => value % 2 === 0); // true` },
  { slug: "iterator-filter", title: "filter()", description: "Return an iterator yielding only values that pass a predicate.", code: `Iterator.from([1, 2, 3, 4]).filter((value) => value % 2 === 0); // 2, 4` },
  { slug: "iterator-find", title: "find()", description: "Return the first value that passes a predicate, or undefined if none does.", code: `Iterator.from([1, 2, 3, 4]).find((value) => value > 2); // 3` },
  { slug: "iterator-flat-map", title: "flatMap()", description: "Map each value to an iterable and yield its values in sequence.", code: `Iterator.from([1, 2]).flatMap((value) => [value, value * 10]); // 1, 10, 2, 20` },
  { slug: "iterator-for-each", title: "forEach()", description: "Execute a callback once for each value in the iterator.", code: `Iterator.from([1, 2, 3]).forEach((value) => console.log(value));` },
  { slug: "iterator-from", title: "Iterator.from()", description: "Create an iterator from an iterable or iterator object.", code: `Iterator.from([1, 2, 3]);` },
  { slug: "iterator-map", title: "map()", description: "Return an iterator yielding the result of transforming each value.", code: `Iterator.from([1, 2, 3]).map((value) => value * 2); // 2, 4, 6` },
  { slug: "iterator-reduce", title: "reduce()", description: "Accumulate iterator values into one result from left to right.", code: `Iterator.from([1, 2, 3, 4]).reduce((sum, value) => sum + value, 0); // 10` },
  { slug: "iterator-some", title: "some()", description: "Test whether at least one iterator value passes a predicate. Iteration stops on the first match.", code: `Iterator.from([1, 2, 3]).some((value) => value > 2); // true` },
  { slug: "iterator-take", title: "take()", description: "Return an iterator yielding at most the first n values.", code: `Iterator.from([1, 2, 3, 4, 5]).take(3); // 1, 2, 3` },
] as const;

export type IteratorReferenceSlug =
  (typeof iteratorReferenceEntries)[number]["slug"];

export const iteratorReferenceSlugs = iteratorReferenceEntries.map(
  (entry) => entry.slug,
) as IteratorReferenceSlug[];

export const iteratorReferenceDetails = Object.fromEntries(
  iteratorReferenceEntries.map(({ slug, title, description, code }) => [
    slug,
    { title, description, code },
  ]),
) as Record<
  IteratorReferenceSlug,
  { title: string; description: string; code: string }
>;

export function isIteratorReferenceSlug(
  value: string,
): value is IteratorReferenceSlug {
  return iteratorReferenceSlugs.includes(value as IteratorReferenceSlug);
}

function* from<T>(source: Iterable<T>): Generator<T> {
  yield* source;
}

function* drop<T>(source: Iterable<T>, count: number): Generator<T> {
  let index = 0;
  for (const value of source) {
    if (index++ >= count) yield value;
  }
}

function* filter<T>(
  source: Iterable<T>,
  predicate: (value: T) => boolean,
): Generator<T> {
  for (const value of source) {
    if (predicate(value)) yield value;
  }
}

function* map<T, U>(
  source: Iterable<T>,
  callback: (value: T) => U,
): Generator<U> {
  for (const value of source) yield callback(value);
}

function* flatMap<T, U>(
  source: Iterable<T>,
  callback: (value: T) => Iterable<U>,
): Generator<U> {
  for (const value of source) yield* callback(value);
}

function every<T>(source: Iterable<T>, predicate: (value: T) => boolean): boolean {
  for (const value of source) {
    if (!predicate(value)) return false;
  }
  return true;
}

function find<T>(
  source: Iterable<T>,
  predicate: (value: T) => boolean,
): T | undefined {
  for (const value of source) {
    if (predicate(value)) return value;
  }
  return undefined;
}

function forEach<T>(source: Iterable<T>, callback: (value: T) => void): void {
  for (const value of source) callback(value);
}

function reduce<T>(
  source: Iterable<T>,
  reducer: (accumulator: number, value: T) => number,
  initialValue: number,
): number {
  let accumulator = initialValue;
  for (const value of source) accumulator = reducer(accumulator, value);
  return accumulator;
}

function some<T>(source: Iterable<T>, predicate: (value: T) => boolean): boolean {
  for (const value of source) {
    if (predicate(value)) return true;
  }
  return false;
}

function take<T>(source: Iterable<T>, count: number): T[] {
  const result: T[] = [];
  for (const value of source) {
    if (result.length >= count) break;
    result.push(value);
  }
  return result;
}

export function runIteratorExample(slug: IteratorReferenceSlug): unknown {
  const values = [1, 2, 3, 4, 5];

  switch (slug) {
    case "iterator-drop":
      return Array.from(drop(from(values), 2));
    case "iterator-every":
      return every(from([2, 4, 6]), (value) => value % 2 === 0);
    case "iterator-filter":
      return Array.from(filter(from(values), (value) => value % 2 === 0));
    case "iterator-find":
      return find(from(values), (value) => value > 2);
    case "iterator-flat-map":
      return Array.from(flatMap(from([1, 2]), (value) => [value, value * 10]));
    case "iterator-for-each": {
      const visited: number[] = [];
      forEach(from([1, 2, 3]), (value) => visited.push(value));
      return { returnValue: undefined, visited };
    }
    case "iterator-from":
      return Array.from(from(values));
    case "iterator-map":
      return Array.from(map(from([1, 2, 3]), (value) => value * 2));
    case "iterator-reduce":
      return reduce(from(values), (sum, value) => sum + value, 0);
    case "iterator-some":
      return some(from(values), (value) => value > 4);
    case "iterator-take":
      return take(from(values), 3);
  }
}
