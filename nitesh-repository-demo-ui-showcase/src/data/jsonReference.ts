export const jsonReferenceEntries = [
  {
    slug: "json-parse",
    title: "parse()",
    description: "Parse a JSON string and return the corresponding JavaScript value. Invalid JSON text throws a SyntaxError.",
    code: `JSON.parse('{"name":"Ada","active":true}');`,
  },
  {
    slug: "json-stringify",
    title: "stringify()",
    description: "Convert a JavaScript value to a JSON string. Object properties with undefined values are omitted.",
    code: `JSON.stringify({ name: "Ada", active: true });`,
  },
] as const;

export type JsonReferenceSlug =
  (typeof jsonReferenceEntries)[number]["slug"];

export const jsonReferenceSlugs = jsonReferenceEntries.map(
  (entry) => entry.slug,
) as JsonReferenceSlug[];

export const jsonReferenceDetails = Object.fromEntries(
  jsonReferenceEntries.map(({ slug, title, description, code }) => [
    slug,
    { title, description, code },
  ]),
) as Record<
  JsonReferenceSlug,
  { title: string; description: string; code: string }
>;

export function isJsonReferenceSlug(value: string): value is JsonReferenceSlug {
  return jsonReferenceSlugs.includes(value as JsonReferenceSlug);
}

export function runJsonExample(slug: JsonReferenceSlug): unknown {
  switch (slug) {
    case "json-parse":
      return JSON.parse('{"name":"Ada","active":true}') as unknown;
    case "json-stringify":
      return JSON.stringify({ name: "Ada", active: true });
  }
}
