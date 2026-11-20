import { useState } from "react";
import {
  objectReferenceEntries,
  runObjectExample,
  type ObjectReferenceSlug,
} from "../data/objectReference";

type Props = {
  slug: ObjectReferenceSlug | "javascript-object-reference";
};

function formatResult(value: unknown): string {
  if (typeof value === "string") return JSON.stringify(value);
  return JSON.stringify(value, null, 2) ?? String(value);
}

export default function ObjectReferenceDemo({ slug }: Props) {
  const [hasRun, setHasRun] = useState(false);

  if (slug === "javascript-object-reference") {
    return (
      <div className="w-full max-w-3xl overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="border-b border-slate-200 p-4">
          <h2 className="font-semibold text-slate-900">JavaScript Object Reference</h2>
          <p className="mt-1 text-sm text-slate-600">
            Explore object creation, properties, inspection, and integrity methods with runnable examples.
          </p>
        </div>
        <div className="divide-y divide-slate-100">
          {objectReferenceEntries.map((entry) => (
            <a key={entry.slug} href={`/components/${entry.slug}`} className="block p-3 hover:bg-violet-50">
              <span className="font-mono text-sm font-semibold text-violet-800">{entry.title}</span>
              <span className="mt-1 block text-xs leading-5 text-slate-600">{entry.description}</span>
            </a>
          ))}
        </div>
      </div>
    );
  }

  const entry = objectReferenceEntries.find((item) => item.slug === slug);
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
          <pre className="mt-2 overflow-x-auto text-sm leading-6 text-slate-800"><code>{formatResult(runObjectExample(slug))}</code></pre>
        </div>
      )}
      <p className="mt-4 text-xs text-slate-500">
        Object.freeze() is shallow: nested objects are not frozen automatically. Object.groupBy() is demonstrated with a local equivalent for browser compatibility.
      </p>
    </article>
  );
}
