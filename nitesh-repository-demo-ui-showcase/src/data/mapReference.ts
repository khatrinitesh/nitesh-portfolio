export const mapReferenceEntries = [
  {
    slug: "map-constructor",
    title: "new Map()",
    description: "Create a Map that stores key/value pairs and preserves their insertion order.",
    code: `const users = new Map([["name", "Ada"], ["role", "developer"]]);`,
  },
  {
    slug: "map-clear",
    title: "clear()",
    description: "Remove all key/value pairs from a Map.",
    code: `users.clear();`,
  },
  {
    slug: "map-delete",
    title: "delete()",
    description: "Remove the entry for a key and return whether that key existed.",
    code: `users.delete("role");`,
  },
  {
    slug: "map-entries",
    title: "entries()",
    description: "Get an iterator of the Map's [key, value] pairs in insertion order.",
    code: `Array.from(users.entries());`,
  },
  {
    slug: "map-for-each",
    title: "forEach()",
    description: "Run a callback for each entry, receiving the value before the key.",
    code: `users.forEach((value, key) => console.log(key, value));`,
  },
  {
    slug: "map-get",
    title: "get()",
    description: "Get the value associated with a key, or undefined if the key is absent.",
    code: `users.get("name");`,
  },
  {
    slug: "map-group-by",
    title: "groupBy()",
    description: "Group iterable values into a Map using the key returned by a callback.",
    code: `Map.groupBy(["ant", "bear", "cat"], (animal) => animal.length);`,
  },
  {
    slug: "map-has",
    title: "has()",
    description: "Check whether a Map contains a particular key.",
    code: `users.has("name");`,
  },
  {
    slug: "map-keys",
    title: "keys()",
    description: "Get an iterator of the Map's keys in insertion order.",
    code: `Array.from(users.keys());`,
  },
  {
    slug: "map-set",
    title: "set()",
    description: "Add or update a key/value pair. Returns the Map so calls can be chained.",
    code: `users.set("language", "JavaScript");`,
  },
  {
    slug: "map-size",
    title: "size",
    description: "Get the number of entries in a Map.",
    code: `users.size;`,
  },
  {
    slug: "map-values",
    title: "values()",
    description: "Get an iterator of the Map's values in insertion order.",
    code: `Array.from(users.values());`,
  },
] as const;

export type MapReferenceSlug =
  (typeof mapReferenceEntries)[number]["slug"];

export const mapReferenceSlugs = mapReferenceEntries.map(
  (entry) => entry.slug,
) as MapReferenceSlug[];

export const mapReferenceDetails = Object.fromEntries(
  mapReferenceEntries.map(({ slug, title, description, code }) => [
    slug,
    { title, description, code },
  ]),
) as Record<
  MapReferenceSlug,
  { title: string; description: string; code: string }
>;

export function isMapReferenceSlug(value: string): value is MapReferenceSlug {
  return mapReferenceSlugs.includes(value as MapReferenceSlug);
}

function createSampleMap(): Map<string, string> {
  return new Map([
    ["name", "Ada"],
    ["role", "developer"],
  ]);
}

function groupBy<T, K>(
  items: Iterable<T>,
  callback: (item: T) => K,
): Map<K, T[]> {
  const groups = new Map<K, T[]>();
  for (const item of items) {
    const key = callback(item);
    const group = groups.get(key);
    if (group) {
      group.push(item);
    } else {
      groups.set(key, [item]);
    }
  }
  return groups;
}

export function runMapExample(slug: MapReferenceSlug): unknown {
  switch (slug) {
    case "map-constructor":
      return createSampleMap();
    case "map-clear": {
      const users = createSampleMap();
      users.clear();
      return users;
    }
    case "map-delete": {
      const users = createSampleMap();
      const deleted = users.delete("role");
      return { deleted, entries: Array.from(users.entries()) };
    }
    case "map-entries":
      return Array.from(createSampleMap().entries());
    case "map-for-each": {
      const visited: [string, string][] = [];
      createSampleMap().forEach((value, key) => visited.push([key, value]));
      return visited;
    }
    case "map-get":
      return createSampleMap().get("name");
    case "map-group-by":
      return groupBy(["ant", "bear", "cat"], (animal) => animal.length);
    case "map-has":
      return createSampleMap().has("name");
    case "map-keys":
      return Array.from(createSampleMap().keys());
    case "map-set":
      return createSampleMap().set("language", "JavaScript");
    case "map-size":
      return createSampleMap().size;
    case "map-values":
      return Array.from(createSampleMap().values());
  }
}
