import { useState } from "react";
import {
  iteratorReferenceEntries,
  runIteratorExample,
  type IteratorReferenceSlug,
} from "../data/iteratorReference";

type Props = {
  slug: IteratorReferenceSlug | "javascript-iterator-reference";
};

function formatResult(value: unknown): string {
  if (value === undefined) return "undefined";
  if (typeof value === "string") return JSON.stringify(value);
  return JSON.stringify(value, null, 2) ?? String(value);
}

export default function IteratorReferenceDemo({ slug }: Props) {
  const [hasRun, setHasRun] = useState(false);

  if (slug === "javascript-iterator-reference") {
    return (
      <div className="w-full max-w-3xl overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="border-b border-slate-200 p-4">
          <h2 className="font-semibold text-slate-900">JavaScript Iterator Reference</h2>
          <p className="mt-1 text-sm text-slate-600">
            Explore iterator helper methods with examples you can run. Examples display the yielded values.
          </p>
        </div>
        <div className="divide-y divide-slate-100">
          {iteratorReferenceEntries.map((entry) => (
            <a key={entry.slug} href={`/components/${entry.slug}`} className="block p-3 hover:bg-violet-50">
              <span className="font-mono text-sm font-semibold text-violet-800">{entry.title}</span>
              <span className="mt-1 block text-xs leading-5 text-slate-600">{entry.description}</span>
            </a>
          ))}
        </div>
      </div>
    );
  }

  const entry = iteratorReferenceEntries.find((item) => item.slug === slug);
  if (!entry) return null;

  return (
    <article className="w-full max-w-2xl rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-sm leading-6 text-slate-600">{entry.description}</p>
      <h2 className="mt-5 text-xs font-semibold uppercase tracking-wide text-slate-500">Example</h2>
      <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm leading-6 text-emerald-300"><code>{entry.code}</code></pre>
      <button type="button" onClick={() => setHasRun(true)} className="mt-4 rounded-lg bg-violet-700 px-4 py-2 text-sm font-medium text-white hover:bg-violet-800">
        Run example
      </button>
      {hasRun && (
        <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">Result</h2>
          <pre className="mt-2 overflow-x-auto text-sm leading-6 text-slate-800"><code>{formatResult(runIteratorExample(slug))}</code></pre>
        </div>
      )}
      <p className="mt-4 text-xs text-slate-500">
        Iterator Helpers are a modern JavaScript feature. These demos use local iterable helpers for compatibility and materialize the result for display.
      </p>
    </article>
  );
}
