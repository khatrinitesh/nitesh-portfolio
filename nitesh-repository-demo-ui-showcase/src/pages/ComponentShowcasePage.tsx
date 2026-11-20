import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Bell,
  Check,
  ChevronDown,
  CircleAlert,
  CircleCheck,
  CreditCard,
  Globe,
  Home,
  Info,
  LayoutGrid,
  LoaderCircle,
  MoreHorizontal,
  Search,
  Sparkles,
  X
} from "lucide-react";
import { useState } from "react";

type ComponentName =
  | "accordion"
  | "alert"
  | "button"
  | "tabs"
  | "vertical-tabs"
  | "card"
  | "animated-icons"
  | "animated-search"
  | "arrow-icons"
  | "aspect-ratio"
  | "aurora-background"
  | "autocomplete"
  | "avatar"
  | "background-beams-with-collision"
  | "background-boxes"
  | "background-lines"
  | "banner"
  | "bento-grid"
  | "big-header"
  | "black-and-white-image"
  | "block-buttons"
  | "blog-layout"
  | "blur-background-image"
  | "body-text"
  | "border-around-image"
  | "border-frame"
  | "bottom-border-nav-links"
  | "bottom-navigation"
  | "breadcrumbs"
  | "browser-window"
  | "bullet-color"
  | "bullet-list"
  | "button-group"
  | "button-on-image";

const componentDetails: Record<
  ComponentName,
  { title: string; description: string; code: string }
> = {
  accordion: {
    title: "Accordion",
    description:
      "Expand one section at a time and highlight the active item with a customizable background and text color.",
    code: `const [active, setActive] = useState(0);

{items.map((item, index) => (
  <button
    key={item.title}
    aria-expanded={active === index}
    onClick={() => setActive(active === index ? -1 : index)}
    className={active === index
      ? "bg-violet-50 text-violet-900"
      : "bg-white text-gray-700"}
  >
    {item.title}
  </button>
))}`,
  },
  alert: {
    title: "Alert",
    description:
      "Bring important status messages into focus with clear, accessible visual treatments.",
    code: `<div role="status" className="flex gap-3 rounded-xl border
  border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
  <CircleCheck aria-hidden="true" />
  <div>
    <h3 className="font-semibold">Changes saved</h3>
    <p className="mt-1 text-sm">Your settings are up to date.</p>
  </div>
</div>`,
  },
  button: {
    title: "Button",
    description:
      "Use clear, consistent actions with distinct visual emphasis for primary and secondary tasks.",
    code: `<button
  type="button"
  onClick={handleSave}
  className="rounded-lg bg-gray-950 px-4 py-2.5
    text-sm font-medium text-white hover:bg-gray-800"
>
  Save changes
</button>`,
  },
  tabs: {
    title: "Tabs",
    description:
      "Switch between related panels without navigating away from the current page.",
    code: `<div role="tablist" aria-label="Account settings">
  <button role="tab" aria-selected={activeTab === "profile"}>
    Profile
  </button>
  <button role="tab" aria-selected={activeTab === "security"}>
    Security
  </button>
</div>`,
  },
  "vertical-tabs": {
    title: "Vertical Tabs",
    description:
      "Present a compact side-by-side navigation for switching between larger content panels.",
    code: `<div className="flex gap-6">
  <div role="tablist" aria-orientation="vertical">
    <button role="tab" aria-selected={activeTab === "profile"}>
      Profile
    </button>
    <button role="tab" aria-selected={activeTab === "notifications"}>
      Notifications
    </button>
  </div>
  <section role="tabpanel">{/* Active panel */}</section>
</div>`,
  },
  card: {
    title: "Card",
    description:
      "Group related content into a clear surface with a title, description, and contextual action.",
    code: `<article className="rounded-2xl border border-gray-200 bg-white p-6">
  <div className="flex items-start justify-between">
    <div>
      <h2 className="font-semibold">Project overview</h2>
      <p className="mt-1 text-sm text-gray-500">A quick snapshot</p>
    </div>
    <CreditCard aria-hidden="true" />
  </div>
  <p className="mt-6 text-3xl font-bold">24 tasks</p>
</article>`,
  },
  "animated-icons": {
    title: "Animated Icons",
    description:
      "Add subtle motion to interface icons to make feedback and affordances easier to notice.",
    code: `<button className="group rounded-xl p-4 hover:bg-violet-50">
  <Sparkles
    className="transition-transform duration-300
      group-hover:rotate-12 group-hover:scale-110"
    aria-hidden="true"
  />
  <span className="sr-only">Explore</span>
</button>`,
  },
  "animated-search": {
    title: "Animated Search",
    description:
      "Expand a compact search control into a field with a smooth, responsive transition.",
    code: `<form role="search" className="flex items-center">
  <button type="button" aria-label="Open search">
    <Search aria-hidden="true" />
  </button>
  <input
    type="search"
    placeholder="Search components..."
    className="w-full outline-none"
  />
</form>`,
  },
  "arrow-icons": {
    title: "Arrow Icons",
    description:
      "Use directional arrows with a small hover motion to reinforce navigation and actions.",
    code: `<ArrowRight
  className="transition-transform duration-200
    group-hover:translate-x-1"
  aria-hidden="true"
/>`,
  },
  "aspect-ratio": {
    title: "Aspect Ratio",
    description:
      "Keep media at a consistent shape across screen sizes with a fixed aspect ratio.",
    code: `<div className="aspect-video overflow-hidden rounded-xl">
  <img
    src="/images/preview.jpg"
    alt="A mountain landscape"
    className="h-full w-full object-cover"
  />
</div>`,
  },
  "aurora-background": {
    title: "Aurora Background",
    description:
      "Create a soft, layered aurora effect with blurred gradients and gentle movement.",
    code: `<div className="relative isolate overflow-hidden rounded-2xl bg-slate-950">
  <div className="aurora-blob" aria-hidden="true" />
  <div className="relative z-10 p-10 text-white">
    <h2 className="text-3xl font-bold">A brighter workspace</h2>
  </div>
</div>`,
  },
  autocomplete: {
    title: "Autocomplete",
    description:
      "Help people find a matching option as they type, with keyboard-friendly suggestions.",
    code: `<input
  role="combobox"
  aria-expanded={isOpen}
  aria-controls="suggestions"
  value={query}
  onChange={(event) => setQuery(event.target.value)}
/>
{isOpen && <ul id="suggestions" role="listbox">
  {matches.map((item) => <li role="option">{item}</li>)}
</ul>}`,
  },
  avatar: {
    title: "Avatar",
    description:
      "Show profile photos with accessible alternative text and a graceful initials fallback.",
    code: `<img
  src="/images/avatar.jpg"
  alt="Alex Morgan"
  className="h-12 w-12 rounded-full object-cover"
/>`,
  },
"background-beams-with-collision": {
  title: "Background Beams With Collision",
  description:
    "Layer animated light beams and glowing nodes to create an energetic background for a hero section.",
  code: `<section className="relative overflow-hidden bg-slate-950">
<div aria-hidden="true" className="beam beam-one" />
<div aria-hidden="true" className="beam beam-two" />
<div className="relative z-10 p-12 text-white">
  <h1 className="text-4xl font-bold">Ideas in motion</h1>
</div>
</section>`,
},
"background-boxes": {
  title: "Background Boxes",
  description:
    "Use a subtle geometric grid of outlined boxes as texture behind prominent page content.",
  code: `<section className="relative overflow-hidden bg-slate-950">
<div className="pointer-events-none absolute inset-0
  bg-[linear-gradient(rgba(148,163,184,.15)_1px,transparent_1px),
  linear-gradient(90deg,rgba(148,163,184,.15)_1px,transparent_1px)]
  bg-size:[32px_32px]" />
<h1 className="relative p-12 text-white">Build something great</h1>
</section>`,
},
"background-lines": {
  title: "Background Lines",
  description:
    "Add fine, repeating lines behind content for depth without competing with the foreground.",
  code: `<section className="relative overflow-hidden">
<div aria-hidden="true" className="absolute inset-0
  bg-[repeating-linear-gradient(135deg,#e5e7eb_0_1px,transparent_1px_12px)]" />
<div className="relative p-12">Foreground content</div>
</section>`,
},
banner: {
  title: "Banner",
  description:
    "Share an announcement or important message in a prominent, dismissible banner.",
  code: `<div role="status" className="flex items-center justify-between
rounded-xl bg-indigo-950 px-5 py-4 text-white">
<p><strong>New:</strong> Explore the latest updates.</p>
<button aria-label="Dismiss banner" onClick={dismiss}>
  <X aria-hidden="true" />
</button>
</div>`,
},
"bento-grid": {
  title: "Bento Grid",
  description:
    "Arrange feature cards in a responsive grid with varied sizes for visual hierarchy.",
  code: `<div className="grid auto-rows-37.5 gap-4 sm:grid-cols-3">
<article className="rounded-2xl bg-violet-100 p-6 sm:col-span-2">
  Feature highlight
</article>
<article className="rounded-2xl bg-blue-100 p-6">Analytics</article>
<article className="rounded-2xl bg-amber-100 p-6">Integrations</article>
<article className="rounded-2xl bg-emerald-100 p-6 sm:col-span-2">
  Collaboration
</article>
</div>`,
},
"big-header": {
  title: "Big Header",
  description:
    "Set the tone of a page with oversized typography, concise supporting copy, and a clear action.",
  code: `<header className="py-12">
<p className="text-sm font-semibold uppercase tracking-widest">Studio</p>
<h1 className="mt-4 text-6xl font-bold tracking-tight">
  Design without limits.
</h1>
<p className="mt-4 text-lg text-gray-600">Make your next idea real.</p>
</header>`,
},
"black-and-white-image": {
  title: "Black and White Image",
  description:
    "Apply a grayscale filter to imagery and restore full color on hover or focus.",
  code: `<img
src="/images/portrait.jpg"
alt="Portrait in a studio"
className="aspect-4/3 w-full rounded-xl object-cover
  grayscale transition duration-500 hover:grayscale-0"
/>`,
},
"block-buttons": {
  title: "Block Buttons",
  description:
    "Create bold, full-width actions that are easy to discover and tap.",
  code: `<div className="grid w-full max-w-sm gap-3">
<button className="w-full rounded-lg bg-gray-950 px-5 py-3
  text-center font-semibold text-white">Continue</button>
<button className="w-full rounded-lg border border-gray-300
  px-5 py-3 text-center font-semibold">Learn more</button>
</div>`,
},
"blog-layout": {
  title: "Blog Layout",
  description:
    "Combine a featured article with a readable, responsive list of recent posts.",
  code: `<main className="grid gap-8 lg:grid-cols-[2fr_1fr]">
<article>
  <img src="/images/story.jpg" alt="" className="rounded-2xl" />
  <p className="mt-4 text-sm text-violet-700">Design · 6 min read</p>
  <h1 className="mt-2 text-3xl font-bold">The craft of good interfaces</h1>
</article>
<aside>{/* Recent articles */}</aside>
</main>`,
},
"blur-background-image": {
  title: "Blur Background Image",
  description:
    "Place readable foreground content over a blurred, full-bleed photographic background.",
  code: `<div className="relative isolate overflow-hidden rounded-2xl">
<img src="/images/landscape.jpg" alt=""
  className="absolute inset-0 -z-10 h-full w-full object-cover blur-sm" />
<div className="absolute inset-0 -z-10 bg-slate-950/45" />
<div className="p-10 text-white">Readable foreground</div>
</div>`,
},
"body-text": {
  title: "Body Text",
  description:
    "Use comfortable line length, spacing, and contrast to make longer text easy to read.",
  code: `<div className="max-w-prose text-base leading-8 text-gray-600">
<p>
  Thoughtful typography makes content easier to scan and understand.
  Keep paragraphs focused and give each idea room to breathe.
</p>
</div>`,
},
"border-around-image": {
  title: "Border Around Image",
  description:
    "Frame an image with a clean border and padding that complements the surrounding layout.",
  code: `<div className="rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
<img src="/images/landscape.jpg" alt="Mountain landscape"
  className="aspect-video w-full rounded-xl object-cover" />
</div>`,
},
"border-frame": {
  title: "Border Frame",
  description:
    "Use a layered frame and inset border to give featured content a considered edge.",
  code: `<div className="rounded-2xl border border-gray-300 p-2">
<div className="rounded-xl border border-gray-200 bg-white p-8">
  Framed content
</div>
</div>`,
},
"bottom-border-nav-links": {
  title: "Bottom Border Nav Links",
  description:
    "Indicate the current navigation item with a clear underline that transitions between links.",
  code: `<nav className="flex gap-6 border-b border-gray-200">
<a aria-current="page" className="border-b-2 border-violet-600
  pb-3 font-medium text-violet-700">Overview</a>
<a className="pb-3 text-gray-500 hover:text-gray-900">Activity</a>
</nav>`,
},
"bottom-navigation": {
  title: "Bottom Navigation",
  description:
    "Give mobile layouts quick access to their primary destinations with a fixed bottom bar.",
  code: `<nav aria-label="Primary" className="fixed inset-x-0 bottom-0
flex justify-around border-t bg-white px-4 py-3">
<a href="/" aria-current="page">Home</a>
<a href="/explore">Explore</a>
<a href="/profile">Profile</a>
</nav>`,
},
breadcrumbs: {
  title: "Breadcrumbs",
  description:
    "Show users where they are in a hierarchy and provide links back to parent pages.",
  code: `<nav aria-label="Breadcrumb">
<ol className="flex items-center gap-2 text-sm">
  <li><a href="/" className="text-gray-500">Home</a></li>
  <li aria-hidden="true">/</li>
  <li><a href="/components" className="text-gray-500">Components</a></li>
  <li aria-hidden="true">/</li>
  <li aria-current="page" className="font-medium">Breadcrumbs</li>
</ol>
</nav>`,
},
"browser-window": {
  title: "Browser Window",
  description:
    "Present a website preview inside a browser-style frame with window controls and an address bar.",
  code: `<div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
<div className="flex items-center gap-2 border-b bg-gray-50 p-3">
  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
  <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1 text-xs">
    example.com
  </div>
</div>
<div className="p-8">Preview content</div>
</div>`,
},
"bullet-color": {
  title: "Bullet Color",
  description:
    "Use a custom marker color to draw attention to list items while keeping text readable.",
  code: `<ul className="list-disc space-y-2 pl-5 marker:text-violet-500">
<li>Accessible color contrast</li>
<li>Clear visual hierarchy</li>
<li>Consistent spacing</li>
</ul>`,
},
"bullet-list": {
  title: "Bullet List",
  description:
    "Present related items in a scannable list with consistent markers and spacing.",
  code: `<ul className="list-disc space-y-3 pl-5 text-gray-700">
<li>Organize key information</li>
<li>Keep list items concise</li>
<li>Use consistent punctuation</li>
</ul>`,
},
"button-group": {
  title: "Button Group",
  description:
    "Group related actions or options together, with a clear selected state.",
  code: `<div role="group" aria-label="Text alignment" className="inline-flex">
<button aria-pressed={align === "left"}>Left</button>
<button aria-pressed={align === "center"}>Center</button>
<button aria-pressed={align === "right"}>Right</button>
</div>`,
},
"button-on-image": {
  title: "Button on Image",
  description:
    "Overlay a high-contrast call to action on imagery using a gradient for legibility.",
  code: `<div className="relative overflow-hidden rounded-2xl">
<img src="/images/travel.jpg" alt="Coastal destination"
  className="aspect-video w-full object-cover" />
<div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
<button className="absolute bottom-5 left-5 rounded-lg bg-white
  px-4 py-2 font-semibold text-gray-950">Explore destination</button>
</div>`,
},
};

const accordionItems = [
  {
    title: "Can I customize the styles?",
    content:
      "Yes. Use the className prop and Tailwind utilities to match your product's design.",
  },
  {
    title: "Does it work on mobile?",
    content:
      "The sections are built with full-width controls and work with both touch and pointer input.",
  },
  {
    title: "Can I add any content?",
    content:
      "Accordion panels can contain text, links, forms, or other React components.",
  },
];

const tabContent = {
  Overview: "A quick summary of your workspace and recent activity.",
  Projects: "Your projects, milestones, and work in progress.",
  Settings: "Manage your preferences and account settings.",
};

const verticalTabContent = {
  Profile: "Update your name, photo, and public profile details.",
  Notifications: "Choose which product updates and reminders you receive.",
  Security: "Review your password and account security preferences.",
};

function AccordionDemo() {
  const [openItem, setOpenItem] = useState<number | null>(0);
  const [highlight, setHighlight] = useState<"violet" | "blue" | "emerald">("violet");
  const highlightStyles = {
    violet: {
      background: "bg-violet-50",
      text: "text-violet-900",
      muted: "text-violet-900/80",
      icon: "text-violet-700",
      selected: "border-violet-300 bg-violet-50 text-violet-800",
    },
    blue: {
      background: "bg-blue-50",
      text: "text-blue-900",
      muted: "text-blue-900/80",
      icon: "text-blue-700",
      selected: "border-blue-300 bg-blue-50 text-blue-800",
    },
    emerald: {
      background: "bg-emerald-50",
      text: "text-emerald-900",
      muted: "text-emerald-900/80",
      icon: "text-emerald-700",
      selected: "border-emerald-300 bg-emerald-50 text-emerald-800",
    },
  };
  const activeHighlight = highlightStyles[highlight];

  return (
    <div className="w-full max-w-2xl space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-1 text-xs font-medium text-gray-500">Active highlight:</span>
        {(["violet", "blue", "emerald"] as const).map((color) => (
          <button
            key={color}
            type="button"
            aria-pressed={highlight === color}
            onClick={() => setHighlight(color)}
            className={`rounded-full border px-3 py-1 text-xs font-medium capitalize transition-colors ${
              highlight === color
                ? highlightStyles[color].selected
                : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            {color}
          </button>
        ))}
      </div>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-xl border border-gray-200 bg-white">
        {accordionItems.map((item, index) => {
          const isOpen = openItem === index;
          const panelId = `accordion-panel-${index}`;

          return (
            <div
              key={item.title}
              className={`px-5 transition-colors duration-200 ${
                isOpen ? activeHighlight.background : "bg-white"
              }`}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenItem(isOpen ? null : index)}
                className={`flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold transition-colors ${
                  isOpen ? activeHighlight.text : "text-gray-800"
                }`}
              >
                {item.title}
                <ChevronDown
                  size={18}
                  aria-hidden="true"
                  className={`shrink-0 transition-transform ${
                    isOpen
                      ? `rotate-180 ${activeHighlight.icon}`
                      : "text-gray-500"
                  }`}
                />
              </button>
              {isOpen && (
                <div
                  id={panelId}
                  className={`pb-5 text-sm leading-6 ${activeHighlight.muted}`}
                >
                  {item.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AlertDemo() {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return (
      <button
        type="button"
        onClick={() => setVisible(true)}
        className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
      >
        Show alert again
      </button>
    );
  }

  return (
    <div
      role="status"
      className="flex w-full max-w-2xl items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-950"
    >
      <CircleCheck size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-emerald-600" />
      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-semibold">Changes saved</h3>
        <p className="mt-1 text-sm leading-5 text-emerald-800">
          Your profile has been updated successfully.
        </p>
      </div>
      <button
        type="button"
        aria-label="Dismiss alert"
        onClick={() => setVisible(false)}
        className="rounded-md p-1 text-emerald-700 hover:bg-emerald-100"
      >
        <X size={16} aria-hidden="true" />
      </button>
    </div>
  );
}

function ButtonDemo() {
  const [saved, setSaved] = useState(false);

  return (
    <div className="flex flex-col items-start gap-6">
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setSaved(true)}
          className="inline-flex items-center gap-2 rounded-lg bg-gray-950 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950"
        >
          {saved && <Check size={16} aria-hidden="true" />}
          {saved ? "Saved" : "Save changes"}
        </button>
        <button
          type="button"
          onClick={() => setSaved(false)}
          className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
        >
          Cancel
        </button>
        <button
          type="button"
          disabled
          className="cursor-not-allowed rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-medium text-gray-400"
        >
          Disabled
        </button>
      </div>
      <p className="text-sm text-gray-500" aria-live="polite">
        {saved ? "Your changes are saved." : "Choose an action to see the button state."}
      </p>
    </div>
  );
}

function TabsDemo() {
  const [activeTab, setActiveTab] = useState<keyof typeof tabContent>("Overview");
  const tabs = Object.keys(tabContent) as (keyof typeof tabContent)[];

  return (
    <div className="w-full max-w-2xl rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
      <div role="tablist" aria-label="Workspace sections" className="flex gap-1 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            id={`tab-${tab.toLowerCase()}`}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            aria-controls="workspace-tab-panel"
            onClick={() => setActiveTab(tab)}
            className={`-mb-px border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === tab
                ? "border-gray-950 text-gray-950"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div
        id="workspace-tab-panel"
        role="tabpanel"
        aria-labelledby={`tab-${activeTab.toLowerCase()}`}
        className="py-5"
      >
        <h3 className="text-sm font-semibold text-gray-900">{activeTab}</h3>
        <p className="mt-2 text-sm leading-6 text-gray-600">{tabContent[activeTab]}</p>
      </div>
    </div>
  );
}

function VerticalTabsDemo() {
  const [activeTab, setActiveTab] = useState<keyof typeof verticalTabContent>("Profile");
  const tabs = Object.keys(verticalTabContent) as (keyof typeof verticalTabContent)[];

  return (
    <div className="flex w-full max-w-2xl flex-col gap-5 rounded-xl border border-gray-200 bg-white p-5 sm:flex-row sm:p-6">
      <div
        role="tablist"
        aria-label="Account settings"
        aria-orientation="vertical"
        className="flex gap-1 overflow-x-auto sm:w-44 sm:shrink-0 sm:flex-col"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            id={`vertical-tab-${tab.toLowerCase()}`}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            aria-controls="account-tab-panel"
            onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
              activeTab === tab
                ? "bg-gray-100 text-gray-950"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div
        id="account-tab-panel"
        role="tabpanel"
        aria-labelledby={`vertical-tab-${activeTab.toLowerCase()}`}
        className="min-h-28 flex-1 border-t border-gray-100 pt-5 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-1"
      >
        <h3 className="text-sm font-semibold text-gray-900">{activeTab}</h3>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          {verticalTabContent[activeTab]}
        </p>
      </div>
    </div>
  );
}

function CardDemo() {
  return (
    <article className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition-shadow hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">Workspace</p>
          <h3 className="mt-1 text-lg font-semibold text-gray-950">Project overview</h3>
        </div>
        <span className="rounded-xl bg-violet-50 p-3 text-violet-700">
          <CreditCard size={20} aria-hidden="true" />
        </span>
      </div>
      <div className="mt-7 flex items-end justify-between">
        <div>
          <p className="text-3xl font-bold tracking-tight text-gray-950">24 tasks</p>
          <p className="mt-1 text-sm text-gray-500">Across 4 active projects</p>
        </div>
        <button
          type="button"
          className="group inline-flex items-center gap-1 text-sm font-medium text-violet-700 hover:text-violet-900"
        >
          View
          <ArrowUpRight
            size={16}
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>
      </div>
    </article>
  );
}

function AnimatedIconsDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <button
        type="button"
        aria-label="Show notifications"
        className="group rounded-2xl border border-gray-200 bg-white p-5 text-gray-700 transition-colors hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
      >
        <Bell
          size={25}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
        />
      </button>
      <button
        type="button"
        aria-label="Loading"
        className="group rounded-2xl border border-gray-200 bg-white p-5 text-gray-700 transition-colors hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
      >
        <LoaderCircle
          size={25}
          aria-hidden="true"
          className="transition-transform duration-500 group-hover:rotate-180"
        />
      </button>
      <button
        type="button"
        aria-label="Sparkle effect"
        className="group rounded-2xl border border-gray-200 bg-white p-5 text-gray-700 transition-colors hover:border-amber-200 hover:bg-amber-50 hover:text-amber-600"
      >
        <Sparkles
          size={25}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125"
        />
      </button>
      <p className="basis-full text-center text-sm text-gray-500">
        Hover or focus an icon to preview its motion.
      </p>
    </div>
  );
}

function AnimatedSearchDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="w-full max-w-md">
      <div
        className={`flex h-12 items-center rounded-full border bg-white shadow-sm transition-all duration-300 ${
          isOpen
            ? "w-full border-violet-300 pl-4 pr-1 ring-4 ring-violet-100"
            : "mx-auto w-12 border-gray-200"
        }`}
      >
        {isOpen && (
          <input
            autoFocus
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search components..."
            aria-label="Search components"
            className="min-w-0 flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
          />
        )}
        <button
          type="button"
          aria-label={isOpen ? "Close search" : "Open search"}
          onClick={() => {
            setIsOpen(!isOpen);
            if (isOpen) setQuery("");
          }}
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
            isOpen
              ? "bg-violet-600 text-white hover:bg-violet-700"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {isOpen ? <X size={18} aria-hidden="true" /> : <Search size={18} aria-hidden="true" />}
        </button>
      </div>
      {isOpen && (
        <p className="mt-3 text-center text-sm text-gray-500" aria-live="polite">
          {query ? `Searching for “${query}”` : "Type to search the component library"}
        </p>
      )}
    </div>
  );
}

function ArrowIconsDemo() {
  const arrows = [
    { label: "Up", Icon: ArrowUp, motion: "group-hover:-translate-y-1" },
    { label: "Right", Icon: ArrowRight, motion: "group-hover:translate-x-1" },
    { label: "Down", Icon: ArrowDown, motion: "group-hover:translate-y-1" },
    { label: "Left", Icon: ArrowLeft, motion: "group-hover:-translate-x-1" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {arrows.map(({ label, Icon, motion }) => (
        <button
          key={label}
          type="button"
          aria-label={`Arrow ${label.toLowerCase()}`}
          className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-700 transition-colors hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
        >
          <Icon
            size={23}
            aria-hidden="true"
            className={`transition-transform duration-200 ${motion}`}
          />
        </button>
      ))}
    </div>
  );
}

function AspectRatioDemo() {
  const ratios = [
    { label: "16:9", value: "16 / 9" },
    { label: "4:3", value: "4 / 3" },
    { label: "1:1", value: "1 / 1" },
  ];
  const [ratio, setRatio] = useState(ratios[0].value);

  return (
    <div className="w-full max-w-lg space-y-4">
      <div className="flex justify-center gap-2" aria-label="Choose aspect ratio">
        {ratios.map((option) => (
          <button
            key={option.label}
            type="button"
            aria-pressed={ratio === option.value}
            onClick={() => setRatio(option.value)}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              ratio === option.value
                ? "bg-gray-950 text-white"
                : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div
        style={{ aspectRatio: ratio }}
        className="relative overflow-hidden rounded-xl border border-violet-200 bg-linear-to-br from-indigo-400 via-violet-300 to-rose-200 transition-[aspect-ratio] duration-300"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_30%,rgba(255,255,255,0.65),transparent_35%)]" />
        <div className="absolute bottom-5 left-5 text-left text-white drop-shadow">
          <p className="text-xs font-medium uppercase tracking-widest text-white/80">
            Aspect ratio
          </p>
          <p className="mt-1 text-2xl font-bold">{ratios.find((item) => item.value === ratio)?.label}</p>
        </div>
      </div>
    </div>
  );
}

function AuroraBackgroundDemo() {
  return (
    <div className="relative isolate flex min-h-64 w-full max-w-2xl items-center justify-center overflow-hidden rounded-2xl bg-slate-950 p-8 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-20 -top-32 h-72 rounded-full bg-linear-to-r from-cyan-400/50 via-violet-500/60 to-fuchsia-500/50 blur-3xl motion-safe:animate-pulse"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/4 h-64 w-3/4 rounded-full bg-linear-to-r from-blue-500/40 via-indigo-400/40 to-emerald-300/30 blur-3xl motion-safe:animate-pulse"
      />
      <div className="relative z-10">
        <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-violet-200">
          <Sparkles size={20} aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
          A brighter workspace
        </h3>
        <p className="mt-2 text-sm text-slate-300">
          Layered gradients bring this background to life.
        </p>
      </div>
    </div>
  );
}

const autocompleteOptions = [
  "Accordion",
  "Animated icons",
  "Animated search",
  "Aspect ratio",
  "Autocomplete",
  "Avatar",
  "Button",
  "Card",
];

function AutocompleteDemo() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("");
  const matches = autocompleteOptions.filter((option) =>
    option.toLowerCase().includes(query.toLowerCase()),
  );
  const showOptions = query.length > 0 && !selected;

  return (
    <div className="relative w-full max-w-md">
      <label htmlFor="component-autocomplete" className="mb-2 block text-sm font-medium text-gray-800">
        Choose a component
      </label>
      <input
        id="component-autocomplete"
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={showOptions}
        aria-controls="component-suggestions"
        autoComplete="off"
        value={selected || query}
        onChange={(event) => {
          setSelected("");
          setQuery(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") setQuery("");
          if (event.key === "Enter" && matches.length > 0 && showOptions) {
            event.preventDefault();
            setSelected(matches[0]);
            setQuery("");
          }
        }}
        placeholder="Start typing..."
        className="h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-900 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
      />
      {showOptions && (
        <ul
          id="component-suggestions"
          role="listbox"
          className="absolute z-10 mt-2 max-h-52 w-full overflow-y-auto rounded-lg border border-gray-200 bg-white p-1 shadow-lg"
        >
          {matches.length > 0 ? (
            matches.map((option) => (
              <li key={option} role="option" aria-selected={false}>
                <button
                  type="button"
                  onClick={() => {
                    setSelected(option);
                    setQuery("");
                  }}
                  className="w-full rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-violet-50 hover:text-violet-900"
                >
                  {option}
                </button>
              </li>
            ))
          ) : (
            <li className="px-3 py-2 text-sm text-gray-500">No matching components</li>
          )}
        </ul>
      )}
      <p className="mt-2 text-xs text-gray-500" aria-live="polite">
        {selected ? `Selected: ${selected}` : "Filter the list by typing a name."}
      </p>
    </div>
  );
}

const avatarPeople = [
  {
    name: "Alex Morgan",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&h=96&q=80",
  },
  {
    name: "Jordan Lee",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=80",
  },
  {
    name: "Sam Rivera",
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=96&h=96&q=80",
  },
];

const landscapeImage =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85";

function RequestedComponentsDemo({ component }: { component: ComponentName }) {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [selectedButton, setSelectedButton] = useState("Day");
  const [activeNavigation, setActiveNavigation] = useState("Home");
  const demoImage = (
    <img
      src={landscapeImage}
      alt="Sunlit mountain landscape"
      className="h-full w-full object-cover"
    />
  );

  switch (component) {
    case "background-beams-with-collision":
      return (
        <div className="relative isolate flex min-h-72 w-full max-w-3xl items-center justify-center overflow-hidden rounded-2xl bg-slate-950 p-10 text-center">
          <div className="absolute -top-20 left-1/4 h-80 w-1 rotate-12 bg-linear-to-b from-transparent via-cyan-300 to-transparent opacity-80 blur-sm motion-safe:animate-pulse" />
          <div className="absolute -top-16 left-1/2 h-80 w-1 -rotate-12 bg-linear-to-b from-transparent via-violet-300 to-transparent opacity-80 blur-sm motion-safe:animate-pulse" />
          <div className="absolute -top-20 right-1/4 h-80 w-1 rotate-6 bg-linear-to-b from-transparent via-fuchsia-300 to-transparent opacity-80 blur-sm motion-safe:animate-pulse" />
          <div className="absolute left-1/2 top-1/2 h-3 w-3 animate-ping rounded-full bg-cyan-200" />
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Light in motion
            </p>
            <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Ideas collide.
              <br />
              Something new begins.
            </h3>
          </div>
        </div>
      );
    case "background-boxes":
      return (
        <div className="relative flex min-h-72 w-full max-w-3xl items-center justify-center overflow-hidden rounded-2xl bg-slate-950 p-10 text-center">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(rgba(148,163,184,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.18) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
              maskImage: "radial-gradient(ellipse at center, black, transparent 75%)",
            }}
          />
          <div className="relative z-10">
            <LayoutGrid className="mx-auto text-violet-300" size={28} aria-hidden="true" />
            <h3 className="mt-4 text-3xl font-bold text-white">Think inside the box.</h3>
            <p className="mt-2 text-sm text-slate-300">A geometric canvas for your next idea.</p>
          </div>
        </div>
      );
    case "background-lines":
      return (
        <div className="relative flex min-h-72 w-full max-w-3xl items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-slate-50 to-violet-100 p-10 text-center">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: "repeating-linear-gradient(135deg, #c4b5fd 0 1px, transparent 1px 14px)",
              maskImage: "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
            }}
          />
          <div className="relative z-10 rounded-2xl border border-white/70 bg-white/80 p-8 shadow-xl backdrop-blur-sm">
            <h3 className="text-3xl font-bold tracking-tight text-slate-900">Lines in the background</h3>
            <p className="mt-2 text-sm text-slate-600">Subtle texture, clear foreground.</p>
          </div>
        </div>
      );
    case "banner":
      return bannerVisible ? (
        <div role="status" className="flex w-full max-w-3xl items-center gap-4 rounded-xl bg-indigo-950 px-5 py-4 text-white shadow-lg">
          <Sparkles className="shrink-0 text-amber-300" size={20} aria-hidden="true" />
          <p className="flex-1 text-sm">
            <strong>New this week:</strong> Explore the latest component updates.
          </p>
          <a href="#preview-title" className="hidden text-sm font-semibold text-indigo-200 hover:text-white sm:inline">
            Learn more
          </a>
          <button type="button" aria-label="Dismiss banner" onClick={() => setBannerVisible(false)} className="rounded-md p-1 text-indigo-200 hover:bg-white/10 hover:text-white">
            <X size={18} aria-hidden="true" />
          </button>
        </div>
      ) : (
        <button type="button" onClick={() => setBannerVisible(true)} className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Show banner again
        </button>
      );
    case "bento-grid":
      return (
        <div className="grid w-full max-w-3xl auto-rows-32.5 gap-3 sm:grid-cols-3">
          <article className="relative flex flex-col justify-end overflow-hidden rounded-2xl bg-linear-to-br from-violet-600 to-indigo-800 p-5 text-white sm:col-span-2 sm:row-span-2">
            <Sparkles size={22} aria-hidden="true" />
            <h3 className="mt-4 text-xl font-bold">Everything in one place</h3>
            <p className="mt-1 text-sm text-white/75">A flexible workspace for your team.</p>
          </article>
          <article className="flex flex-col justify-between rounded-2xl bg-amber-100 p-5 text-amber-950">
            <CircleCheck size={21} aria-hidden="true" />
            <span className="text-sm font-semibold">Track progress</span>
          </article>
          <article className="flex flex-col justify-between rounded-2xl bg-sky-100 p-5 text-sky-950">
            <Globe size={21} aria-hidden="true" />
            <span className="text-sm font-semibold">Work anywhere</span>
          </article>
          <article className="flex flex-col justify-between rounded-2xl bg-emerald-100 p-5 text-emerald-950 sm:col-span-2">
            <span className="text-xs font-semibold uppercase tracking-widest">Built for teams</span>
            <span className="text-lg font-bold">Make good work happen together.</span>
          </article>
        </div>
      );
    case "big-header":
      return (
        <header className="w-full max-w-3xl rounded-2xl bg-white px-6 py-10 text-left sm:px-12 sm:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-700">A better way to create</p>
          <h3 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight text-gray-950 sm:text-7xl">
            Make room
            <br />
            for big ideas.
          </h3>
          <p className="mt-5 max-w-lg text-base leading-7 text-gray-600">
            A bold headline gives your story the space and clarity it deserves.
          </p>
          <button type="button" className="mt-6 rounded-lg bg-gray-950 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800">
            Get started
          </button>
        </header>
      );
    case "black-and-white-image":
      return (
        <figure className="group w-full max-w-xl overflow-hidden rounded-2xl bg-white p-2 shadow-lg">
          <div className="aspect-4/3 overflow-hidden">
            <div className="h-full w-full transition duration-700 [&>img]:grayscale [&>img]:transition [&>img]:duration-700 group-hover:[&>img]:grayscale-0">{demoImage}</div>
          </div>
          <figcaption className="px-3 py-3 text-sm text-gray-600">Hover the image to bring its colors back.</figcaption>
        </figure>
      );
    case "block-buttons":
      return (
        <div className="grid w-full max-w-sm gap-3">
          <button type="button" className="w-full rounded-xl bg-gray-950 px-5 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800">Continue</button>
          <button type="button" className="w-full rounded-xl border border-gray-300 bg-white px-5 py-3.5 text-center text-sm font-semibold text-gray-800 transition hover:bg-gray-100">Learn more</button>
        </div>
      );
    case "blog-layout":
      return (
        <div className="grid w-full max-w-3xl gap-5 rounded-2xl bg-white p-4 text-left shadow-sm sm:grid-cols-[1.4fr_1fr]">
          <article className="overflow-hidden rounded-xl">
            <div className="aspect-video overflow-hidden">{demoImage}</div>
            <div className="pt-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-700">Field notes · 6 min read</p>
              <h3 className="mt-2 text-xl font-bold text-gray-950">The quiet beauty of getting outside</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">A short story about taking the scenic route and noticing what is around us.</p>
            </div>
          </article>
          <aside className="space-y-3 rounded-xl bg-gray-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Recent stories</p>
            {["A guide to slower mornings", "Finding color in the everyday", "Notes from the coast"].map((story) => (
              <a key={story} href="#preview-title" className="block border-b border-gray-200 py-2 text-sm font-medium text-gray-800 last:border-0 hover:text-violet-700">{story}</a>
            ))}
          </aside>
        </div>
      );
    case "blur-background-image":
      return (
        <div className="relative isolate flex min-h-72 w-full max-w-3xl items-center justify-center overflow-hidden rounded-2xl text-center">
          <div className="absolute inset-0 -z-20 scale-110 blur-sm">{demoImage}</div>
          <div className="absolute inset-0 -z-10 bg-slate-950/50" />
          <div className="p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">Find your horizon</p>
            <h3 className="mt-3 text-3xl font-bold">A little further out.</h3>
            <p className="mt-2 text-sm text-white/80">Blurred scenery makes space for your message.</p>
          </div>
        </div>
      );
    case "body-text":
      return (
        <article className="w-full max-w-prose rounded-xl bg-white p-6 text-left sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-700">A small introduction</p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-gray-950">Good writing leaves room to think.</h3>
          <div className="mt-4 space-y-4 text-base leading-8 text-gray-600">
            <p>Body text works best when it feels effortless to read. A comfortable line length and a little breathing room help people stay with the story.</p>
            <p>Keep paragraphs focused on one idea at a time. Give the important details enough contrast without letting the styling get in the way.</p>
          </div>
        </article>
      );
    case "border-around-image":
      return (
        <figure className="w-full max-w-xl rounded-2xl border border-violet-200 bg-white p-2 shadow-lg">
          <div className="aspect-video overflow-hidden">{demoImage}</div>
          <figcaption className="px-3 py-3 text-sm text-gray-600">A simple frame adds polish to your imagery.</figcaption>
        </figure>
      );
    case "border-frame":
      return (
        <div className="w-full max-w-xl rounded-2xl border border-violet-300 bg-violet-50 p-2 shadow-sm">
          <div className="rounded-xl border border-violet-200 bg-white px-8 py-10 text-center">
            <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-700"><Sparkles size={19} aria-hidden="true" /></span>
            <h3 className="mt-4 text-xl font-semibold text-gray-950">A frame for your story</h3>
            <p className="mt-2 text-sm text-gray-600">Layered borders define this content area.</p>
          </div>
        </div>
      );
    case "bottom-border-nav-links":
      return (
        <nav aria-label="Preview navigation" className="flex w-full max-w-xl gap-2 overflow-x-auto border-b border-gray-200 bg-white px-4">
          {["Overview", "Activity", "Settings"].map((item) => (
            <button key={item} type="button" aria-current={activeNavigation === item ? "page" : undefined} onClick={() => setActiveNavigation(item)} className={`-mb-px shrink-0 border-b-2 px-4 py-4 text-sm font-medium transition-colors ${activeNavigation === item ? "border-violet-600 text-violet-700" : "border-transparent text-gray-500 hover:text-gray-900"}`}>{item}</button>
          ))}
        </nav>
      );
    case "bottom-navigation":
      return (
        <div className="relative h-64 w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-linear-to-b from-violet-50 to-white">
          <div className="p-6 text-left">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-700">Mobile preview</p>
            <h3 className="mt-2 text-xl font-bold text-gray-950">{activeNavigation}</h3>
            <p className="mt-1 text-sm text-gray-600">Navigate between your main sections.</p>
          </div>
          <nav aria-label="Primary navigation preview" className="absolute inset-x-0 bottom-0 flex justify-around border-t border-gray-200 bg-white px-3 py-3">
            {[
              { label: "Home", Icon: Home },
              { label: "Explore", Icon: Search },
              { label: "Saved", Icon: CreditCard },
              { label: "Profile", Icon: Info },
            ].map(({ label, Icon }) => (
              <button key={label} type="button" onClick={() => setActiveNavigation(label)} className={`flex min-w-14 flex-col items-center gap-1 text-[11px] font-medium ${activeNavigation === label ? "text-violet-700" : "text-gray-500"}`}>
                <Icon size={18} aria-hidden="true" />
                {label}
              </button>
            ))}
          </nav>
        </div>
      );
    case "breadcrumbs":
      return (
        <div className="w-full max-w-2xl rounded-xl border border-gray-200 bg-white p-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm">
              <li><a href="#preview-title" className="text-gray-500 hover:text-gray-900">Home</a></li>
              <li aria-hidden="true" className="text-gray-300">/</li>
              <li><a href="#preview-title" className="text-gray-500 hover:text-gray-900">Components</a></li>
              <li aria-hidden="true" className="text-gray-300">/</li>
              <li aria-current="page" className="font-medium text-gray-900">Breadcrumbs</li>
            </ol>
          </nav>
        </div>
      );
    case "browser-window":
      return (
        <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-gray-200 bg-white text-left shadow-xl">
          <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <div className="ml-3 flex flex-1 items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-500">
              <Globe size={13} aria-hidden="true" /> showcase.dev
            </div>
            <MoreHorizontal size={18} className="text-gray-500" aria-hidden="true" />
          </div>
          <div className="bg-linear-to-br from-violet-50 to-sky-50 px-7 py-9">
            <h3 className="text-2xl font-bold text-gray-950">Your site, in a frame.</h3>
            <p className="mt-2 text-sm text-gray-600">A browser window brings product previews to life.</p>
            <button type="button" className="mt-5 rounded-lg bg-gray-950 px-4 py-2 text-sm font-medium text-white">Open preview</button>
          </div>
        </div>
      );
    case "bullet-color":
      return (
        <div className="w-full max-w-md space-y-4 rounded-xl bg-white p-6">
          <p className="text-sm font-medium text-gray-700">Marker color</p>
          <div className="flex gap-2">
            {[
              ["Violet", "bg-violet-500"],
              ["Blue", "bg-blue-500"],
              ["Emerald", "bg-emerald-500"],
            ].map(([label, color]) => (
              <button key={label} type="button" onClick={() => setSelectedButton(label)} aria-pressed={selectedButton === label} className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${selectedButton === label ? "border-gray-400 bg-gray-50 text-gray-900" : "border-gray-200 text-gray-600"}`}>
                <span className={`h-2.5 w-2.5 rounded-full ${color}`} />{label}
              </button>
            ))}
          </div>
          <ul className={`list-disc space-y-2 pl-5 text-sm text-gray-700 ${selectedButton === "Violet" ? "marker:text-violet-500" : selectedButton === "Blue" ? "marker:text-blue-500" : "marker:text-emerald-500"}`}>
            <li>Custom marker color</li>
            <li>Readable body text</li>
            <li>Consistent spacing</li>
          </ul>
        </div>
      );
    case "bullet-list":
      return (
        <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-6 text-left">
          <h3 className="text-sm font-semibold text-gray-950">Included in your plan</h3>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-gray-600 marker:text-gray-400">
            <li>Unlimited saved projects</li>
            <li>Shareable team workspaces</li>
            <li>Priority email support</li>
          </ul>
        </div>
      );
    case "button-group":
      return (
        <div className="space-y-4">
          <div role="group" aria-label="Choose a time of day" className="inline-flex rounded-xl border border-gray-200 bg-white p-1 shadow-sm">
            {["Day", "Week", "Month"].map((item) => (
              <button key={item} type="button" aria-pressed={selectedButton === item} onClick={() => setSelectedButton(item)} className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${selectedButton === item ? "bg-gray-950 text-white shadow-sm" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}`}>{item}</button>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500" aria-live="polite">Showing: {selectedButton}</p>
        </div>
      );
    case "button-on-image":
      return (
        <div className="group relative w-full max-w-2xl overflow-hidden rounded-2xl text-left shadow-lg">
          <div className="aspect-video transition-transform duration-500 group-hover:scale-105">{demoImage}</div>
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-4 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/75">Weekend escape</p>
              <h3 className="mt-1 text-2xl font-bold text-white">Find your next view.</h3>
            </div>
            <button type="button" className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-gray-950 transition hover:bg-violet-100">
              Explore
              <ArrowUpRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      );
    default:
      return null;
  }
}

function AvatarDemo() {
  const [failedImages, setFailedImages] = useState<string[]>([]);

  return (
    <div className="flex flex-col items-center gap-7">
      <div className="flex -space-x-3">
        {avatarPeople.map((person, index) => (
          <div
            key={person.name}
            className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-violet-100 text-sm font-semibold text-violet-800 shadow-sm"
          >
            {!failedImages.includes(person.name) ? (
              <img
                src={person.src}
                alt={person.name}
                width="56"
                height="56"
                loading="lazy"
                onError={() =>
                  setFailedImages((current) => [...current, person.name])
                }
                className="h-full w-full object-cover"
              />
            ) : (
              <span aria-label={person.name}>{person.name.split(" ").map((part) => part[0]).join("")}</span>
            )}
            {index === 0 && <span className="sr-only">First team member</span>}
          </div>
        ))}
        <div
          aria-label="2 more team members"
          className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-gray-100 text-xs font-semibold text-gray-600 shadow-sm"
        >
          +2
        </div>
      </div>
      <p className="text-sm text-gray-500">
        Profile images with initials shown if an image cannot load.
      </p>
    </div>
  );
}

function ComponentPreview({ component }: { component: ComponentName }) {
  switch (component) {
    case "accordion":
      return <AccordionDemo />;
    case "alert":
      return <AlertDemo />;
    case "button":
      return <ButtonDemo />;
    case "tabs":
      return <TabsDemo />;
    case "vertical-tabs":
      return <VerticalTabsDemo />;
    case "card":
      return <CardDemo />;
    case "animated-icons":
      return <AnimatedIconsDemo />;
    case "animated-search":
      return <AnimatedSearchDemo />;
    case "arrow-icons":
      return <ArrowIconsDemo />;
    case "aspect-ratio":
      return <AspectRatioDemo />;
    case "aurora-background":
      return <AuroraBackgroundDemo />;
    case "autocomplete":
      return <AutocompleteDemo />;
    case "avatar":
      return <AvatarDemo />;
    default:
      return <RequestedComponentsDemo component={component} />;
  }
}

export default function ComponentShowcasePage({
  component,
}: {
  component: ComponentName;
}) {
  const details = componentDetails[component];

  return (
    <div className="w-full space-y-10">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500">
        <span>Components</span>
        <span aria-hidden="true">/</span>
        <span className="font-medium text-gray-900">{details.title}</span>
      </nav>

      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700">
          <Info size={14} aria-hidden="true" />
          Component
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
          {details.title}
        </h1>
        <p className="max-w-2xl text-base leading-7 text-gray-600">
          {details.description}
        </p>
      </header>

      <section aria-labelledby="preview-title" className="space-y-4">
        <div>
          <h2 id="preview-title" className="text-lg font-semibold text-gray-950">
            Live preview
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Try the controls to see the component in action.
          </p>
        </div>
        <div className="flex min-h-64 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-10">
          <ComponentPreview component={component} />
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(240px,0.7fr)]">
        <div className="overflow-hidden rounded-xl border border-gray-200">
          <div className="flex items-center justify-between border-b border-gray-800 bg-gray-900 px-5 py-3">
            <span className="text-xs font-medium text-gray-300">Example.tsx</span>
            <span className="text-xs text-gray-500">React + TypeScript</span>
          </div>
          <pre className="overflow-x-auto bg-[#0f172a] p-5 text-sm leading-6 text-slate-200">
            <code>{details.code}</code>
          </pre>
        </div>
        <aside className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-950">About</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              This example is built with React and Tailwind CSS. Adjust its
              content, behavior, and utility classes to fit your interface.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <h3 className="text-sm font-semibold text-gray-900">Included</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <CircleCheck size={16} className="text-emerald-600" aria-hidden="true" />
                Interactive example
              </li>
              <li className="flex items-center gap-2">
                <CircleAlert size={16} className="text-violet-600" aria-hidden="true" />
                Responsive layout
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}
