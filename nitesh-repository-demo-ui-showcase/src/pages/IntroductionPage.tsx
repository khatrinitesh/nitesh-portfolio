import {
  ArrowRight,
  Box,
  Code2,
  Layers3,
  Palette,
  Smartphone,
  Zap,
} from "lucide-react";
import { Link } from "react-router";

const features = [
  {
    title: "Reusable Components",
    description:
      "Build consistent interfaces using flexible, reusable UI components.",
    icon: Box,
  },
  {
    title: "TypeScript Support",
    description:
      "Enjoy type-safe component APIs and a better development experience.",
    icon: Code2,
  },
  {
    title: "Tailwind CSS",
    description:
      "Customize every component with utility-first CSS classes.",
    icon: Palette,
  },
  {
    title: "Responsive Design",
    description:
      "Create beautiful interfaces across mobile, tablet, and desktop.",
    icon: Smartphone,
  },
  {
    title: "Interactive Effects",
    description:
      "Enhance your interfaces with transitions, animations, and 3D effects.",
    icon: Zap,
  },
  {
    title: "Component Library",
    description:
      "Find components, review examples, and explore implementation code.",
    icon: Layers3,
  },
];

const IntroductionPage = () => {
  return (
    <div className="w-full space-y-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span>Getting Started</span>
        <span>/</span>
        <span className="font-medium text-gray-900">
          Introduction
        </span>
      </div>

      {/* Hero Section */}
      <section className="space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Developer Coding
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
          Build better interfaces,
          <br />
          <span className="text-gray-500">
            faster and easier.
          </span>
        </h1>

        <p className="max-w-2xl text-base leading-8 text-gray-600">
          A modern collection of reusable React components built
          with TypeScript and Tailwind CSS. Explore interactive
          examples, implementation code, and documentation to
          accelerate your development workflow.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-3">
          <Link
            to="/components/3d-card"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            Explore Components
            <ArrowRight size={16} />
          </Link>

          <Link
            to="/installation"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
          >
            Installation Guide
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Features */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-950">
            Why use our components?
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Everything you need to build modern and consistent
            user interfaces.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 transition-colors group-hover:bg-gray-100">
                  <Icon
                    size={21}
                    strokeWidth={1.8}
                    className="text-gray-800"
                  />
                </div>

                <h3 className="text-base font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Start */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-950">
            Quick Start
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Get started with your first UI component.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200">
          <div className="flex items-center justify-between border-b border-gray-800 bg-gray-900 px-5 py-3">
            <span className="text-xs font-medium text-gray-300">
              Example.tsx
            </span>

            <span className="text-xs text-gray-500">
              React + TypeScript
            </span>
          </div>

          <div className="overflow-x-auto bg-[#0f172a] p-6">
            <pre className="text-sm leading-7 text-slate-200">
              <code>{`import ThreeDCard from "./components/ui/ThreeDCard";

export default function Example() {
  return (
    <ThreeDCard className="h-75 w-75">
      <h2 className="text-2xl font-bold">
        Hello World
      </h2>

      <p className="mt-2 text-sm">
        My first interactive component.
      </p>
    </ThreeDCard>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* JavaScript Operator Precedence */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-950">
            JavaScript Operator Precedence
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-500">
            Higher-precedence operations are grouped first. Operators on the
            same level usually group from left to right; exponentiation,
            conditional expressions, and assignments group from right to left.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full min-w-[760px] divide-y divide-gray-200 text-left text-sm">
            <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500">
              <tr>
                <th scope="col" className="px-4 py-3">Level</th>
                <th scope="col" className="px-4 py-3">Operators / syntax</th>
                <th scope="col" className="px-4 py-3">Description</th>
                <th scope="col" className="px-4 py-3">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white text-gray-700">
              {[
                ["18", "( … )", "Grouping", "(100 + 50) * 3"],
                ["17", "., [], (), ?.", "Member access, optional chaining, function calls, and new with arguments", "car.name; fn(); new Date(\"June 5, 2022\")"],
                ["16", "new", "new without an argument list", "new Date"],
                ["15", "++, --", "Postfix increment and decrement", "i++"],
                ["14", "!, ~, +, -, typeof, void, delete, ++, --", "Logical NOT, bitwise NOT, unary operators, and prefix increment / decrement", "!ready; -value; typeof value; ++i"],
                ["13", "**", "Exponentiation (right to left)", "2 ** 3 ** 2"],
                ["12", "*, /, %", "Multiplication, division, and remainder", "total * tax"],
                ["11", "+, -", "Addition, subtraction, and string concatenation", "first + last"],
                ["10", "<<, >>, >>>", "Bitwise shift operators", "value << 2"],
                ["9", "<, <=, >, >=, in, instanceof", "Relational and object-membership comparisons", "item instanceof Array"],
                ["8", "==, !=, ===, !==", "Equality comparisons", "value === expected"],
                ["7", "&", "Bitwise AND", "flags & mask"],
                ["6", "^", "Bitwise XOR", "left ^ right"],
                ["5", "|", "Bitwise OR", "flags | mask"],
                ["4", "&&", "Logical AND", "isReady && hasData"],
                ["3", "||, ??", "Logical OR and nullish coalescing", "name || \"Guest\"; value ?? fallback"],
                ["2", "?:; assignments; yield", "Conditional, assignment, and yield expressions", "ok ? \"yes\" : \"no\"; count += 1; x &&= y; yield value"],
                ["1", ",", "Comma operator", "(a = 1, b = 2)"],
              ].map(([level, operators, description, example]) => (
                <tr key={level} className="align-top">
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-500">
                    {level}
                  </td>
                  <td className="px-4 py-3 font-mono text-gray-900">
                    {operators}
                  </td>
                  <td className="px-4 py-3 leading-6">{description}</td>
                  <td className="px-4 py-3 font-mono text-xs leading-6 text-gray-600">
                    {example}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-6 text-gray-600">
          <span className="font-semibold text-gray-900">Note:</span>{" "}
          <code className="font-mono">??</code> has the same precedence as{" "}
          <code className="font-mono">||</code>. JavaScript does not allow
          mixing <code className="font-mono">??</code> directly with{" "}
          <code className="font-mono">&&</code> or{" "}
          <code className="font-mono">||</code>; use parentheses to make the
          intended grouping explicit. Exponentiation also cannot appear
          directly after a unary operator, so write{" "}
          <code className="font-mono">-(2 ** 2)</code> rather than{" "}
          <code className="font-mono">-2 ** 2</code>.
        </p>
      </section>

      {/* Next Steps */}
      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-7">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-950">
            Ready to get started?
          </h2>

          <p className="max-w-xl text-sm leading-6 text-gray-600">
            Explore the available components and learn how to
            implement them in your projects.
          </p>

          <Link
            to="/components/3d-card"
            className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-gray-900 hover:text-gray-600"
          >
            Browse Components
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IntroductionPage;