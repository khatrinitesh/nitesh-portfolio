import { ArrowDown, ArrowUpRight, Move3D, Sparkles } from "lucide-react";
import ThreeDCard from "../components/UI/threeDCard/ThreeDCard";

const exampleCode = `import ThreeDCard from "./components/UI/threeDCard/ThreeDCard";

export default function Example() {
  return (
    <ThreeDCard className="h-80 w-full max-w-sm">
      <div className="flex h-full flex-col justify-between">
        <span className="text-sm text-white/70">Your content</span>
        <h2 className="text-3xl font-bold">Make it move.</h2>
      </div>
    </ThreeDCard>
  );
}`;

const statementReference = [
  ["Blocks", "{ … }", "Groups statements into a block.", "{ const total = 1 + 2; }"],
  ["Functions", "function", "Declares a function.", "function greet() { return \"Hi\"; }"],
  ["Functions", "async function", "Declares an asynchronous function that returns a promise.", "async function load() { return await fetch(url); }"],
  ["Functions", "function*", "Declares a generator function.", "function* values() { yield 1; }"],
  ["Functions", "async function*", "Declares an asynchronous generator function.", "async function* values() { yield 1; }"],
  ["Classes", "class", "Declares a class.", "class User {}"],
  ["Declarations", "const", "Declares a block-scoped binding that cannot be reassigned.", "const answer = 42;"],
  ["Declarations", "let", "Declares a block-scoped, reassignable variable.", "let count = 0;"],
  ["Declarations", "var", "Declares a function-scoped or global variable.", "var message = \"Hello\";"],
  ["Declarations", "using", "Declares a disposable resource whose synchronous cleanup runs when its scope exits.", "using resource = openResource();"],
  ["Declarations", "await using", "Declares a resource whose asynchronous cleanup is awaited when its scope exits.", "await using resource = openResource();"],
  ["Conditionals", "if … else", "Runs a statement when a condition is true, with an optional alternative.", "if (ready) start(); else wait();"],
  ["Conditionals", "switch", "Selects a case to execute based on an expression.", "switch (status) { case \"ok\": break; }"],
  ["Loops", "for", "Repeats a loop with initialization, condition, and update expressions.", "for (let i = 0; i < 3; i++) {}"],
  ["Loops", "while", "Repeats a statement while a condition is true.", "while (active) update();"],
  ["Loops", "do … while", "Runs a statement once, then repeats while a condition is true.", "do { update(); } while (active);"],
  ["Loops", "for … in", "Iterates over an object's enumerable string-keyed properties.", "for (const key in object) {}"],
  ["Loops", "for … of", "Iterates over the values provided by an iterable.", "for (const value of items) {}"],
  ["Loops", "for await … of", "Iterates over values from an async iterable, awaiting each value.", "for await (const value of stream) {}"],
  ["Loop control", "break", "Exits the nearest loop or switch, or a labeled statement.", "if (done) break;"],
  ["Loop control", "continue", "Skips to the next iteration of the nearest loop, or a labeled loop.", "if (skip) continue;"],
  ["Functions", "return", "Ends function execution and optionally provides a return value.", "return result;"],
  ["Exceptions", "throw", "Throws a value, usually an Error, for exception handling.", "throw new Error(\"Failed\");"],
  ["Exceptions", "try … catch … finally", "Handles exceptions and optionally runs cleanup code.", "try { run(); } catch (error) { log(error); } finally { close(); }"],
  ["Modules", "import", "Imports bindings from another module; imported bindings cannot be reassigned.", "import { useState } from \"react\";"],
  ["Modules", "Import attributes", "Provides metadata that affects how an imported module is loaded.", "import data from \"./data.json\" with { type: \"json\" };"],
  ["Debugging", "debugger", "Requests a pause at this point when a debugger is attached.", "debugger;"],
] as const;

const windowProperties = [
  ["closed", "Whether this window has been closed."],
  ["console", "The Console object associated with the window."],
  ["defaultStatus", "Deprecated legacy property; avoid using it."],
  ["document", "The document loaded in this window."],
  ["frameElement", "The element (such as an iframe) that embeds this window, or null."],
  ["frames", "A collection of the child browsing contexts in this window."],
  ["history", "The session history for this window."],
  ["innerHeight", "The height of the layout viewport in CSS pixels."],
  ["innerWidth", "The width of the layout viewport in CSS pixels."],
  ["length", "The number of child frames in this window."],
  ["localStorage", "Storage for origin-scoped key/value data that persists across browser sessions."],
  ["location", "The current URL; assigning a URL navigates the window."],
  ["name", "The name of the browsing context."],
  ["navigator", "Information and APIs associated with the browser environment."],
  ["opener", "The window that opened this one, or null."],
  ["outerHeight", "The height of the browser window in CSS pixels, including browser chrome where available."],
  ["outerWidth", "The width of the browser window in CSS pixels, including browser chrome where available."],
  ["pageXOffset", "The horizontal scroll offset; an alias of scrollX."],
  ["pageYOffset", "The vertical scroll offset; an alias of scrollY."],
  ["parent", "The parent window of this window; equals itself when there is no parent."],
  ["screen", "Information about the display screen."],
  ["screenLeft", "The horizontal position of the window relative to the screen."],
  ["screenTop", "The vertical position of the window relative to the screen."],
  ["screenX", "An alias of screenLeft."],
  ["screenY", "An alias of screenTop."],
  ["sessionStorage", "Origin-scoped key/value data for the current page session."],
  ["scrollX", "The horizontal scroll offset; an alias of pageXOffset."],
  ["scrollY", "The vertical scroll offset; an alias of pageYOffset."],
  ["self", "A reference to the current window."],
  ["status", "Deprecated legacy property; avoid using it."],
  ["top", "The topmost window in the hierarchy of nested browsing contexts."],
] as const;

const windowMethods = [
  ["addEventListener()", "Registers an event listener on the window."],
  ["alert()", "Displays a message dialog."],
  ["atob()", "Decodes a Base64-encoded string into a binary string."],
  ["blur()", "Attempts to remove focus from the window; browser behavior may vary."],
  ["btoa()", "Encodes a binary string as Base64."],
  ["clearInterval()", "Cancels a repeating timer created by setInterval()."],
  ["clearTimeout()", "Cancels a delayed task created by setTimeout()."],
  ["close()", "Closes a window, generally only when it was opened by script."],
  ["confirm()", "Displays a confirmation dialog and returns whether it was accepted."],
  ["focus()", "Attempts to focus the window; browser behavior may vary."],
  ["getComputedStyle()", "Returns the computed style of an element."],
  ["getSelection()", "Returns the current text selection, if any."],
  ["matchMedia()", "Checks a media query and returns a MediaQueryList."],
  ["moveBy()", "Attempts to move the window by a relative offset; often restricted."],
  ["moveTo()", "Attempts to move the window to screen coordinates; often restricted."],
  ["open()", "Opens a URL in a new or existing browsing context; may be blocked by popup rules."],
  ["print()", "Opens the browser's print interface for the current document."],
  ["prompt()", "Displays a text-input dialog and returns the entered value or null."],
  ["removeEventListener()", "Removes a previously registered event listener."],
  ["requestAnimationFrame()", "Schedules a callback before the next browser repaint."],
  ["resizeBy()", "Attempts to resize the window by a relative amount; often restricted."],
  ["resizeTo()", "Attempts to resize the window to specified dimensions; often restricted."],
  ["scroll()", "Deprecated alias for scrollTo(); use scrollTo() instead."],
  ["scrollBy()", "Scrolls the document by a relative amount."],
  ["scrollTo()", "Scrolls the document to specified coordinates or options."],
  ["setInterval()", "Schedules a function to run repeatedly until canceled."],
  ["setTimeout()", "Schedules a function to run after a delay."],
  ["stop()", "Stops further resource loading in the current window."],
] as const;

const ThreeDCardPage = () => {
  return (
    <div className="w-full space-y-10">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500">
        <span>Components</span>
        <span aria-hidden="true">/</span>
        <span className="font-medium text-gray-900">3D Card</span>
      </nav>

      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-700">
          <Move3D size={14} />
          Interactive component
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
          3D Card
        </h1>

        <p className="max-w-2xl text-base leading-7 text-gray-600">
          Add depth to any content with a responsive perspective tilt and a
          subtle light reflection that follows your pointer.
        </p>
      </header>

      <section aria-labelledby="preview-title" className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 id="preview-title" className="text-lg font-semibold text-gray-950">
              Live preview
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Move your pointer over the card to see the effect.
            </p>
          </div>
          <span className="hidden items-center gap-2 text-xs text-gray-400 sm:inline-flex">
            <ArrowDown size={14} />
            Try it out
          </span>
        </div>

        <div className="flex min-h-100 items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-8">
          <ThreeDCard className="h-80 w-full max-w-sm">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10">
                  <Sparkles size={21} />
                </span>
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                  FEATURED
                </span>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-violet-200">
                  A little more depth
                </p>
                <h3 className="text-3xl font-bold tracking-tight">
                  Make it move.
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-white/70">
                  Put your own content inside. The tilt and light adapt to the
                  pointer position.
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-white/90">
                Explore the effect
                <ArrowUpRight size={16} />
              </div>
            </div>
          </ThreeDCard>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.75fr)]">
        <div className="overflow-hidden rounded-xl border border-gray-200">
          <div className="flex items-center justify-between border-b border-gray-800 bg-gray-900 px-5 py-3">
            <span className="text-xs font-medium text-gray-300">Example.tsx</span>
            <span className="text-xs text-gray-500">React + TypeScript</span>
          </div>
          <pre className="overflow-x-auto bg-[#0f172a] p-5 text-sm leading-6 text-slate-200">
            <code>{exampleCode}</code>
          </pre>
        </div>

        <aside className="space-y-5">
          <div>
            <h2 className="text-lg font-semibold text-gray-950">Usage</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Wrap any React content in <code className="rounded bg-gray-100 px-1.5 py-0.5 text-gray-800">ThreeDCard</code>.
              Set the size with <code className="rounded bg-gray-100 px-1.5 py-0.5 text-gray-800">className</code>;
              the wrapper fills the available content.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <h3 className="text-sm font-semibold text-gray-900">Options</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-start justify-between gap-4">
                <dt className="font-mono text-gray-700">tilt</dt>
                <dd className="text-right text-gray-500">Maximum tilt in degrees (15 by default)</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="font-mono text-gray-700">scale</dt>
                <dd className="text-right text-gray-500">Hover scale (1.03 by default)</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="font-mono text-gray-700">className</dt>
                <dd className="text-right text-gray-500">Classes applied to the card surface</dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>

      <section aria-labelledby="statements-title" className="space-y-5">
        <header>
          <h2 id="statements-title" className="text-2xl font-semibold tracking-tight text-gray-950">
            JavaScript Statements and Declarations
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-500">
            A quick reference to common JavaScript syntax for declaring values,
            controlling program flow, working with modules, and managing resources.
          </p>
        </header>

        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full min-w-[820px] divide-y divide-gray-200 text-left text-sm">
            <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500">
              <tr>
                <th scope="col" className="px-4 py-3">Category</th>
                <th scope="col" className="px-4 py-3">Syntax</th>
                <th scope="col" className="px-4 py-3">Description</th>
                <th scope="col" className="px-4 py-3">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white text-gray-700">
              {statementReference.map(([category, syntax, description, example]) => (
                <tr key={syntax} className="align-top">
                  <td className="whitespace-nowrap px-4 py-3 text-gray-500">{category}</td>
                  <td className="whitespace-nowrap px-4 py-3 font-mono font-medium text-gray-900">{syntax}</td>
                  <td className="px-4 py-3 leading-6">{description}</td>
                  <td className="px-4 py-3 font-mono text-xs leading-6 text-gray-600">{example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="window-object-title" className="space-y-6">
        <header className="space-y-3">
          <h2 id="window-object-title" className="text-2xl font-semibold tracking-tight text-gray-950">
            The Window Object
          </h2>
          <p className="max-w-3xl text-sm leading-6 text-gray-600">
            In a browser, <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-gray-800">window</code>{" "}
            represents a browsing context and exposes its document, location,
            history, and browser-related APIs. A page with frames has a window
            for the page and a separate window for each frame.
          </p>
        </header>

        <section aria-labelledby="window-properties-title" className="space-y-4">
          <h3 id="window-properties-title" className="text-lg font-semibold text-gray-950">
            Window Object Properties
          </h3>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full min-w-[620px] divide-y divide-gray-200 text-left text-sm">
              <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500">
                <tr>
                  <th scope="col" className="px-4 py-3">Property</th>
                  <th scope="col" className="px-4 py-3">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white text-gray-700">
                {windowProperties.map(([property, description]) => (
                  <tr key={property} className="align-top">
                    <td className="whitespace-nowrap px-4 py-3 font-mono font-medium text-gray-900">
                      {property}
                    </td>
                    <td className="px-4 py-3 leading-6">{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="window-methods-title" className="space-y-4">
          <h3 id="window-methods-title" className="text-lg font-semibold text-gray-950">
            Window Object Methods
          </h3>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full min-w-[620px] divide-y divide-gray-200 text-left text-sm">
              <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500">
                <tr>
                  <th scope="col" className="px-4 py-3">Method</th>
                  <th scope="col" className="px-4 py-3">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white text-gray-700">
                {windowMethods.map(([method, description]) => (
                  <tr key={method} className="align-top">
                    <td className="whitespace-nowrap px-4 py-3 font-mono font-medium text-gray-900">
                      {method}
                    </td>
                    <td className="px-4 py-3 leading-6">{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ThreeDCardPage;
