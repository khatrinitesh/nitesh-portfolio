import { ChevronDown, Download, LayoutDashboard, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import FeatureDemos from "./FeatureDemos";

type Props = {
  component: string;
};

const buttonClass =
  "rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600";
const downloadUrl = `data:text/plain;charset=utf-8,${encodeURIComponent("Sample UI showcase download.")}`;

const rows = [
  { name: "Avery Johnson", email: "avery@example.com", role: "Admin", status: "Active" },
  { name: "Morgan Chen", email: "morgan@example.com", role: "Editor", status: "Active" },
  { name: "Jordan Lee", email: "jordan@example.com", role: "Viewer", status: "Pending" },
  { name: "Riley Patel", email: "riley@example.com", role: "Editor", status: "Active" },
  { name: "Casey Kim", email: "casey@example.com", role: "Viewer", status: "Pending" },
  { name: "Taylor Smith", email: "taylor@example.com", role: "Admin", status: "Active" },
];

export default function RequestedFeatureDemos({ component }: Props) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [sortAscending, setSortAscending] = useState(true);
  const [page, setPage] = useState(0);
  const [capsLock, setCapsLock] = useState(false);
  const [device, setDevice] = useState<"phone" | "tablet" | "desktop">("phone");
  const [dashboard, setDashboard] = useState<"Admin" | "Backend">("Admin");
  const [dragged, setDragged] = useState("");
  const [dropped, setDropped] = useState("");
  const [expandedCard, setExpandedCard] = useState("");
  const [expandedTile, setExpandedTile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [hoverFrom, setHoverFrom] = useState<"top" | "right" | "bottom" | "left">("bottom");
  const [hoverActive, setHoverActive] = useState(false);

  const featureDemoSlugs = [
    "fade-in",
    "fade-out",
    "fade-toggle",
    "fading-buttons",
    "fatnav",
    "favicon",
    "feature-sections",
    "fieldset-and-legend",
    "filter-dropdown",
    "filter-elements",
    "filter-list",
    "filter-table",
    "filter-transition",
    "find-hidden-element",
    "fixed-footer",
    "fixed-header",
    "fixed-menu",
    "fixed-sidebar",
    "flexbox",
    "flickering-grid",
    "flip-an-image",
    "flip-box",
    "flip-card",
    "flipbook",
    "floating-dock",
    "floating-images-left-and-right-to-wrap-text",
    "floating-navbar",
    "focus-cards",
    "folded-corner",
    "following-pointer",
    "font-face",
    "footer",
    "form-on-image",
    "form-validation",
    "form-with-icons",
    "frosted-glass-effect",
    "full-height-element",
    "full-page-background-image",
    "full-page-background-with-content",
    "fullscreen-navigation",
    "fullscreen-search",
    "fullscreen-video",
    "fullscreen-window",
    "full-width-table",
    "get-checkbox-values-using-checkbox-name",
    "github-globe",
    "glare-card",
    "glassmorphism",
    "glowing-effect",
    "glowing-stars",
    "glowing-text",
    "google-charts",
    "google-fonts",
    "google-gemini-effect",
    "google-maps",
    "google-search-engine",
    "google-translate",
    "gradient-animation",
    "gradient-bg-scroll",
    "grid-and-dot-backgrounds",
    "grid-layout",
    "grid-tile",
    "header",
    "headlines-animation-text-effect",
    "hero-highlight",
    "hero-image",
    "hide",
    "hide-navbar-on-scroll",
    "hide-scrollbar",
    "highlight-nav-on-div-scroll",
    "horizontal-line-with-words-in-the-middle",
    "horizontal-scroll-menu",
    "hotspot",
    "hover-border-gradient",
    "hover-dropdowns",
    "hover-sidenav-buttons",
    "hover-tabs",
    "how-do-vertically-center-text",
    "how-to-center-an-image-in-a-div",
    "how-to-disable-the-resize-grabber",
    "how-to-remove-arrows-from-number-input",
    "how-to-vertically-middle-align-floating-elements",
    "icon-bar",
    "icon-buttons",
    "iframe-embed-autoplay",
    "image-burst",
    "image-comparison-slider",
    "image-effects",
    "image-grid",
    "image-magnifier-glass",
    "image-overlay",
    "image-overlay-fade",
    "image-overlay-icon",
    "image-overlay-slide",
    "image-overlay-text",
    "image-overlay-title",
    "image-overlay-zoom",
    "image-text",
    "image-text-blocks",
    "image-zoom",
    "infinite-moving-cards",
    "inline-form",
    "input-field-in-navbar",
    "input-focus-autowidth",
    "labels",
    "lamp-effect",
    "lens",
    "lightbox",
    "link-preview",
    "list-grid-view",
    "list-group",
    "list-without-bullets",
    "load-more",
    "loaders",
    "loading-buttons",
    "login-form",
    "login-form-in-navbar",
    "macbook-scroll",
    "magnetic-effects",
    "mailto",
    "markdown-editor",
    "material-input",
    "media-queries",
    "meet-the-team",
    "mega-menu",
    "menu-icon-hamburger",
    "meteors",
    "mobile-app-development",
    "mobile-menu",
    "modal-boxes-dialog-backdrop-pseudo-element",
    "modal-images",
    "more-button-in-nav",
    "moving-border",
    "multiple-step-form-loader",
    "music-player",
    "navbar-on-image",
    "navbar-with-icons",
    "neumorphism",
    "newsletter",
    "next-previous-buttons",
    "notes",
    "notification-button",
    "off-canvas-menu",
    "offline-detection",
    "outline-buttons",
    "overlay-effect",
    "pagescroll-menu-smooth",
    "pagination",
    "parallax-scroll",
    "particles",
    "password-validation",
    "pattern-lock",
    "pill-buttons",
    "pill-navigation",
    "place-image-or-video-inside-silhouette",
    "placeholder-color-and-vanish-input",
    "play-iframe-embedded-youtube-video-on-click-of-a-button",
    "popovers",
    "popup-chat-window",
    "popup-form",
    "popup-to-show-youtube-video-inside-iframe-closed",
    "popups",
    "portfolio-filtering",
    "portfolio-gallery",
    "portrait-image-effect",
    "prefer-color-scheme",
    "preloader",
    "pricing-table",
    "product-card",
    "profile-card",
    "progress-bars",
    "pseudo-before-and-after",
    "qr-scanner",
    "quantity-increment-decrement",
    "quiz",
    "quotation",
    "quote-slideshow",
    "range-sliders",
    "read-more",
    "redirect-webpage",
    "register-form",
    "remove",
    "remove-property",
    "remove-class",
    "responsive-floats",
    "responsive-form",
    "responsive-header",
    "responsive-iframes",
    "responsive-images",
    "responsive-navbar-with-dropdown",
    "responsive-sidebar",
    "responsive-tables",
    "responsive-text",
    "right-aligned-menu-links",
    "round-buttons",
    "rounded-images",
    "scroll-drawing",
    "scroll-indicator",
    "scroll-page-horizontally-with-mouse-wheel",
    "scroll-to-top-bottom",
    "search-bar",
    "search-button",
    "search-menu",
    "section-counter",
    "selectable",
    "shake-an-image",
    "shapes",
    "share-box-social-media",
    "shooting-stars",
    "show",
    "show-and-hide-div-on-checkbox",
    "show-force-scrollbar",
    "shrink-header-on-scroll",
    "shrink-navigation-menu-on-scroll",
    "side-by-side-images",
    "slide-down-bar-on-scroll",
    "side-navigation",
    "side-by-side-tables",
    "signup-form",
    "single-page-with-smooth-scrolling-fixed-navigation",
    "skills-bars",
    "slide-down",
    "slideshow-carousel",
    "slideshow-gallery",
    "slideshow-with-audio-player",
    "slide-toggle",
    "slide-up",
    "smooth-scrolling",
    "snackbar",
    "social-login-form",
    "social-media-buttons",
    "sort-list",
    "sort-table",
    "sparkles",
    "speed-meter",
    "split-buttons",
    "split-screen",
    "spotlight",
    "spotlight-new",
    "sprite",
    "sprite-spin",
    "stacked-form",
    "star-rating",
    "sticky-element",
    "sticky-footer",
    "sticky-header",
    "sticky-image",
    "sticky-navbar",
    "sticky-scroll-reveal",
    "sticky-social-bar",
    "stroke-text",
    "style-hr",
    "subnavigation-menu",
    "svg",
    "svg-mask-effect",
    "tab-gallery",
    "tabbed",
    "table",
    "tel",
    "testimonials",
    "text-buttons",
    "text-generate-effect",
    "text-hover-effect",
    "text-image-effect",
    "text-reveal-card",
    "text-rotator",
    "text-selection-color",
    "thumbnails",
    "ticker-marquee",
    "timeline",
    "to-do-list",
    "toasts",
    "toggle",
    "toggle-darkmode",
    "toggle-like-and-dislike",
    "toggle-password-visibility",
    "toggle-show-hide",
    "toggle-switch-turn-on-and-off",
    "toggle-text",
    "toggle-class",
    "toggling-styles-on-label-active-focus-for-input-field",
    "tooltips",
    "top-navigation",
    "tracing-beam",
    "transition-on-hover",
    "transparent-image-text",
    "tree-view",
    "trigger-button-on-enter",
    "truncate-string-with-ellipsis",
    "turn-off-autocomplete",
    "turn-off-spellcheck",
    "typewriter-effect",
    "typical-device-breakpoints",
    "user-rating",
    "vertical-button-group",
    "vertical-line",
    "vertical-menu",
    "video",
    "vortex",
    "wrap-text",
    "zebra-striping-a-table",
    "zig-zag-with-layout",
    "zoom-hover",
    "primitives",
    "string",
    "number",
    "boolean",
    "bigint",
    "symbol",
    "undefined",
    "null",
  ];
  if (featureDemoSlugs.includes(component)) {
    return <FeatureDemos component={component} />;
  }

  if (component === "dashboard-templates") {
    return (
      <div className="w-full max-w-3xl overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
          <div className="flex items-center gap-2 font-semibold text-slate-900">
            <LayoutDashboard size={18} /> {dashboard} dashboard
          </div>
          <div className="flex gap-1 rounded-lg bg-slate-100 p-1">
            {(["Admin", "Backend"] as const).map((variant) => (
              <button
                key={variant}
                type="button"
                onClick={() => setDashboard(variant)}
                aria-pressed={dashboard === variant}
                className={`rounded-md px-3 py-1.5 text-xs font-medium ${
                  dashboard === variant
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500"
                }`}
              >
                {variant}
              </button>
            ))}
          </div>
        </div>
        <div className="grid min-h-64 sm:grid-cols-[140px_1fr]">
          <nav
            aria-label={`${dashboard} dashboard navigation`}
            className="hidden border-r border-slate-100 bg-slate-50 p-3 sm:block"
          >
            {(dashboard === "Admin"
              ? ["Overview", "Users", "Reports"]
              : ["Overview", "Services", "Logs"]
            ).map((label, index) => (
              <div
                key={label}
                className={`mb-1 rounded-md px-3 py-2 text-xs ${
                  index === 0
                    ? "bg-violet-100 font-semibold text-violet-800"
                    : "text-slate-600"
                }`}
              >
                {label}
              </div>
            ))}
          </nav>
          <div className="p-4">
            <h3 className="text-sm font-semibold text-slate-900">
              {dashboard === "Admin" ? "Workspace overview" : "Backend health"}
            </h3>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {(dashboard === "Admin"
                ? [["Users", "2,480"], ["Projects", "18"], ["Growth", "+12%"]]
                : [["Uptime", "99.9%"], ["Requests", "48k"], ["Errors", "0.2%"]]
              ).map(([label, value]) => (
                <div key={label} className="rounded-lg border border-slate-100 p-3">
                  <p className="text-[11px] text-slate-500">{label}</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-lg bg-slate-50 p-3 text-xs text-slate-600">
              Recent activity
              <span className="float-right text-slate-400">Updated just now</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (component === "datatable") {
    const filteredRows = rows
      .filter((row) =>
        `${row.name} ${row.email} ${row.role} ${row.status}`
          .toLowerCase()
          .includes(search.toLowerCase()),
      )
      .sort((a, b) =>
        sortAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
      );
    const pageRows = filteredRows.slice(page * 4, page * 4 + 4);

    return (
      <div className="w-full max-w-3xl overflow-hidden rounded-xl border border-slate-200 bg-white text-left">
        <div className="flex flex-wrap items-center justify-between gap-3 p-4">
          <h3 className="font-semibold text-slate-900">Team members</h3>
          <input
            aria-label="Search team members"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setPage(0);
            }}
            placeholder="Search..."
            className="w-44 rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] text-sm">
            <thead className="bg-slate-50 text-left text-xs text-slate-500">
              <tr>
                <th className="px-4 py-3">
                  <button
                    type="button"
                    onClick={() => setSortAscending((current) => !current)}
                    className="font-semibold"
                  >
                    Name {sortAscending ? "↑" : "↓"}
                  </button>
                </th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {pageRows.map((row) => (
                <tr key={row.email} className="border-t border-slate-100 text-slate-700">
                  <td className="px-4 py-3 font-medium">{row.name}</td>
                  <td className="px-4 py-3">{row.email}</td>
                  <td className="px-4 py-3">{row.role}</td>
                  <td className="px-4 py-3">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between border-t border-slate-100 px-4 py-3 text-xs text-slate-500">
          <span>
            {filteredRows.length
              ? `${page * 4 + 1}-${Math.min(page * 4 + 4, filteredRows.length)} of ${filteredRows.length}`
              : "No results"}
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              disabled={page === 0}
              onClick={() => setPage((current) => current - 1)}
              className="rounded border px-2 py-1 disabled:opacity-40"
            >
              Previous
            </button>
            <button
              type="button"
              disabled={(page + 1) * 4 >= filteredRows.length}
              onClick={() => setPage((current) => current + 1)}
              className="rounded border px-2 py-1 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }

  switch (component) {
    case "emailer":
      return (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setStatus(`Email sent to ${email}.`);
          }}
          className="grid w-full max-w-md gap-3 rounded-xl border border-slate-200 bg-white p-5 text-left"
        >
          <h3 className="font-semibold text-slate-900">Compose email</h3>
          <label className="grid gap-1 text-xs font-medium text-slate-600">
            To
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="name@example.com"
              className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm"
            />
          </label>
          <label className="grid gap-1 text-xs font-medium text-slate-600">
            Message
            <textarea
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Write your message..."
              className="min-h-24 rounded-lg border border-slate-200 px-3 py-2.5 text-sm"
            />
          </label>
          <div className="flex items-center justify-between gap-3">
            <p role="status" className="text-xs text-emerald-700">{status}</p>
            <button type="submit" className={buttonClass}>Send email</button>
          </div>
        </form>
      );
    case "empty-input-validation":
      return (
        <form
          noValidate
          onSubmit={(event) => {
            event.preventDefault();
            const value = new FormData(event.currentTarget).get("required-value");
            setValidationMessage(
              typeof value === "string" && value.trim()
                ? "Looks good."
                : "Please enter a value before continuing.",
            );
          }}
          className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5"
        >
          <label htmlFor="required-value" className="block text-left text-sm font-medium text-slate-700">
            Required field
          </label>
          <input
            id="required-value"
            name="required-value"
            onChange={() => setValidationMessage("")}
            className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm"
            placeholder="Enter a value"
          />
          <div className="mt-3 flex items-center justify-between">
            <p aria-live="polite" className={`text-xs ${validationMessage === "Looks good." ? "text-emerald-700" : "text-red-600"}`}>
              {validationMessage}
            </p>
            <button type="submit" className={buttonClass}>Continue</button>
          </div>
        </form>
      );
    case "equal-height":
      return (
        <div className="grid w-full max-w-2xl items-stretch gap-3 sm:grid-cols-3">
          {[
            ["Plan", "A clear overview of your workspace."],
            ["Design", "Flexible cards stretch to align with their neighbors, even when their content differs in length."],
            ["Launch", "Ready when you are."],
          ].map(([title, description], index) => (
            <article key={title} className={`flex flex-col rounded-xl p-5 text-left ${["bg-violet-50", "bg-sky-50", "bg-emerald-50"][index]}`}>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-5 text-slate-600">{description}</p>
              <span className="mt-4 text-xs font-medium text-slate-500">Learn more →</span>
            </article>
          ))}
        </div>
      );
    case "equal-width-nav-links":
      return (
        <nav aria-label="Example equal width navigation" className="grid w-full max-w-lg grid-cols-3 overflow-hidden rounded-xl border border-slate-200 bg-white text-center">
          {["Home", "About", "Contact"].map((item, index) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`px-2 py-4 text-sm font-medium text-slate-700 hover:bg-violet-50 ${index ? "border-l border-slate-200" : ""}`}>
              {item}
            </a>
          ))}
        </nav>
      );
    case "evervault-card":
      return (
        <div className="group relative w-full max-w-sm overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 p-7 text-left text-white shadow-xl">
          <div className="pointer-events-none absolute -right-10 -top-14 h-44 w-44 rounded-full bg-violet-500/30 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/40" />
          <div className="relative">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Secure vault</span>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-300">ENCRYPTED</span>
            </div>
            <p className="mt-10 font-mono text-lg tracking-[0.25em] text-slate-200">•••• •••• •••• 2048</p>
            <div className="mt-6 flex items-end justify-between">
              <div><p className="text-[10px] uppercase text-slate-500">Cardholder</p><p className="mt-1 text-sm">ALEX MORGAN</p></div>
              <span aria-hidden="true" className="text-2xl text-violet-300 transition-transform group-hover:rotate-12">◈</span>
            </div>
          </div>
        </div>
      );
    case "example-website":
      return (
        <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm">
          <nav className="flex items-center justify-between border-b border-slate-100 px-5 py-3">
            <a href="#example-home" className="font-bold tracking-tight text-slate-900">northstar<span className="text-violet-600">.</span></a>
            <div className="flex gap-4 text-xs text-slate-600"><a href="#example-features" className="hover:text-violet-700">Features</a><a href="#example-about" className="hover:text-violet-700">About</a></div>
          </nav>
          <section id="example-home" className="bg-linear-to-br from-violet-50 via-white to-sky-50 px-6 py-10 text-center sm:py-14">
            <span className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-violet-700 shadow-sm">A better way to work</span>
            <h3 className="mx-auto mt-4 max-w-md text-3xl font-bold tracking-tight text-slate-900">Make room for your next big idea.</h3>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-600">Bring your team and projects together in one thoughtful workspace.</p>
            <a href="#example-features" className="mt-5 inline-block rounded-lg bg-violet-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-800">Explore features</a>
          </section>
          <div id="example-features" className="grid grid-cols-3 gap-3 p-4 text-center text-xs text-slate-600"><span className="rounded-lg bg-slate-50 p-3">Plan together</span><span className="rounded-lg bg-slate-50 p-3">Build faster</span><span className="rounded-lg bg-slate-50 p-3">Stay focused</span></div>
        </div>
      );
    case "expandable-cards":
      return (
        <div className="grid w-full max-w-2xl gap-3 sm:grid-cols-3">
          {[
            ["Design", "Explore colors, typography, and reusable interface patterns."],
            ["Develop", "Build accessible, responsive experiences with your team."],
            ["Deliver", "Share your work and keep every project moving forward."],
          ].map(([title, description]) => {
            const expanded = expandedCard === title;
            return (
              <button key={title} type="button" aria-expanded={expanded} onClick={() => setExpandedCard(expanded ? "" : title)} className={`rounded-xl border p-5 text-left transition-all ${expanded ? "border-violet-300 bg-violet-50 sm:col-span-2" : "border-slate-200 bg-white hover:border-violet-200"}`}>
                <span className="flex items-center justify-between font-semibold text-slate-900">{title}<ChevronDown size={16} className={expanded ? "rotate-180" : ""} /></span>
                <span className={`mt-2 block text-sm leading-5 text-slate-600 ${expanded ? "" : "line-clamp-1"}`}>{description}</span>
                {expanded && <span className="mt-4 block text-xs font-medium text-violet-700">Selected · Click to collapse</span>}
              </button>
            );
          })}
        </div>
      );
    case "expanding-grid":
      return (
        <div className="grid w-full max-w-lg auto-rows-22 grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ["Focus", "Protect your time for the work that matters."],
            ["Create", "Turn early ideas into something tangible."],
            ["Connect", "Bring people and plans together."],
            ["Grow", "Learn from every step you take."],
            ["Reflect", "Make space to see how far you've come."],
          ].map(([title, description]) => {
            const expanded = expandedTile === title;
            return (
              <button key={title} type="button" aria-expanded={expanded} onClick={() => setExpandedTile(expanded ? "" : title)} className={`rounded-xl p-4 text-left transition-all ${expanded ? "col-span-2 row-span-2 bg-slate-900 text-white sm:col-span-2" : "bg-violet-50 text-slate-800 hover:bg-violet-100"}`}>
                <span className="font-semibold">{title}</span>
                {expanded && <span className="mt-3 block text-sm leading-5 text-slate-300">{description}</span>}
              </button>
            );
          })}
        </div>
      );
    case "datepicker":
      return (
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Choose a date
          <input
            type="date"
            className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900"
          />
        </label>
      );
    case "delete-modal":
      return (
        <div className="grid min-h-64 w-full place-items-center rounded-xl bg-slate-900/10 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-dialog-title"
            className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5 text-left shadow-xl"
          >
            <div className="mb-4 grid h-10 w-10 place-items-center rounded-full bg-red-50 text-red-600">
              !
            </div>
            <h3 id="delete-dialog-title" className="font-semibold text-slate-900">
              Delete this item?
            </h3>
            <p className="mt-2 text-sm leading-5 text-slate-500">
              This action cannot be undone. The item will be permanently removed.
            </p>
            {status === "Deleted" ? (
              <p role="status" className="mt-4 text-sm font-medium text-emerald-700">
                Item deleted.
              </p>
            ) : status === "Cancelled" ? (
              <p role="status" className="mt-4 text-sm text-slate-500">
                Deletion cancelled.
              </p>
            ) : (
              <div className="mt-5 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setStatus("Cancelled")}
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => setStatus("Deleted")}
                  className="rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      );
    case "detect-capslock":
      return (
        <div className="w-full max-w-sm">
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Password
            <input
              type="password"
              onKeyDown={(event) => setCapsLock(event.getModifierState("CapsLock"))}
              onKeyUp={(event) => setCapsLock(event.getModifierState("CapsLock"))}
              onBlur={() => setCapsLock(false)}
              className="rounded-lg border border-slate-200 px-3 py-2.5"
              placeholder="Type to check Caps Lock"
            />
          </label>
          <p aria-live="polite" className="mt-2 min-h-5 text-sm text-amber-700">
            {capsLock ? "Caps Lock is on." : ""}
          </p>
        </div>
      );
    case "detect-user-browser": {
      const ua = navigator.userAgent;
      const browser = ua.includes("Edg/")
        ? "Microsoft Edge"
        : ua.includes("Firefox/")
          ? "Mozilla Firefox"
          : ua.includes("Chrome/")
            ? "Google Chrome"
            : ua.includes("Safari/")
              ? "Apple Safari"
              : "Unknown browser";
      return (
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-left">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Detected browser
          </p>
          <p className="mt-2 text-xl font-semibold text-slate-900">{browser}</p>
          <p className="mt-1 text-xs text-slate-500">
            Detection is based on the browser user agent and may not be exact.
          </p>
        </div>
      );
    }
    case "device-look":
      return (
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-2" role="group" aria-label="Choose device frame">
            {(["phone", "tablet", "desktop"] as const).map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setDevice(size)}
                aria-pressed={device === size}
                className={`rounded-full px-3 py-1.5 text-xs capitalize ${
                  device === size ? "bg-slate-900 text-white" : "bg-white text-slate-600"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          <div
            className={`rounded-2xl border-[5px] border-slate-800 bg-white p-3 shadow-lg transition-all ${
              device === "phone"
                ? "w-40"
                : device === "tablet"
                  ? "w-64"
                  : "w-full max-w-lg"
            }`}
          >
            <div className="rounded-lg bg-violet-50 p-4 text-center">
              <div className="mx-auto h-2 w-14 rounded-full bg-violet-300" />
              <p className="mt-3 text-sm font-semibold text-slate-800">Preview on {device}</p>
              <p className="mt-1 text-xs text-slate-500">Responsive interface</p>
            </div>
          </div>
        </div>
      );
    case "direction-aware-hover":
      return (
        <div
          onPointerEnter={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const distances = [
              { side: "top" as const, distance: y },
              { side: "right" as const, distance: rect.width - x },
              { side: "bottom" as const, distance: rect.height - y },
              { side: "left" as const, distance: x },
            ];
            distances.sort((a, b) => a.distance - b.distance);
            setHoverFrom(distances[0].side);
            setHoverActive(true);
          }}
          onPointerLeave={() => setHoverActive(false)}
          className="group relative w-full max-w-sm overflow-hidden rounded-2xl bg-slate-900 p-8 text-white"
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-violet-600/70 to-cyan-500/30 transition-transform duration-300"
            style={{
              transform: hoverActive
                ? "translate(0, 0)"
                : hoverFrom === "top"
                  ? "translateY(-100%)"
                  : hoverFrom === "right"
                    ? "translateX(100%)"
                    : hoverFrom === "left"
                      ? "translateX(-100%)"
                      : "translateY(100%)",
            }}
          />
          <div className="relative">
            <p className="text-xs uppercase tracking-widest text-violet-200">
              Hover interaction
            </p>
            <h3 className="mt-3 text-2xl font-semibold">Move across the card</h3>
            <p className="mt-2 text-sm text-slate-300">
              The accent enters from the edge you approach.
            </p>
          </div>
        </div>
      );
    case "disable-right-click":
      return (
        <div
          onContextMenu={(event) => {
            event.preventDefault();
            setStatus("Context menu blocked inside this preview.");
          }}
          className="grid min-h-40 w-full max-w-sm cursor-context-menu place-items-center rounded-xl border-2 border-dashed border-slate-300 bg-white p-6 text-center"
        >
          <div>
            <p className="font-semibold text-slate-800">Right-click inside this box</p>
            <p aria-live="polite" className="mt-2 min-h-5 text-sm text-violet-700">
              {status}
            </p>
          </div>
        </div>
      );
    case "display-element-hover":
      return (
        <button
          type="button"
          className="group relative w-full max-w-sm overflow-hidden rounded-xl bg-slate-900 p-8 text-left text-white"
        >
          <span className="text-lg font-semibold">Project Aurora</span>
          <span className="mt-2 block text-sm text-slate-300">
            Hover or focus to view details
          </span>
          <span className="absolute inset-x-0 bottom-0 translate-y-full bg-violet-700 p-4 text-sm transition-transform group-hover:translate-y-0 group-focus-visible:translate-y-0">
            Design system · Updated today
          </span>
        </button>
      );
    case "divider":
      return (
        <div className="w-full max-w-lg space-y-6 rounded-xl bg-white p-6">
          <div>
            <p className="text-sm text-slate-700">Content above</p>
            <hr className="my-4 border-slate-200" />
            <p className="text-sm text-slate-700">Content below</p>
          </div>
          <div className="flex h-12 items-center justify-center gap-4 text-sm text-slate-700">
            <span>Left</span>
            <span className="h-full border-l border-slate-200" />
            <span>Right</span>
          </div>
        </div>
      );
    case "download-buttons":
      return (
        <div className="flex flex-wrap gap-3">
          <a href={downloadUrl} download="sample-report.txt" className={buttonClass}>
            <span className="inline-flex items-center gap-2">
              <Download size={16} /> Download report
            </span>
          </a>
          <a
            href={downloadUrl}
            download="sample-data.csv"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Export data
          </a>
        </div>
      );
    case "download-link":
      return (
        <a
          href={downloadUrl}
          download="sample-notes.txt"
          className="text-sm font-medium text-violet-700 underline decoration-violet-300 underline-offset-4 hover:text-violet-900"
        >
          Download sample notes
        </a>
      );
    case "draggable-html-element":
      return (
        <div className="flex w-full max-w-lg flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <div
            draggable
            onDragStart={(event) => {
              event.dataTransfer.setData("text/plain", "Draggable card");
              setDragged("Draggable card");
            }}
            className="cursor-grab rounded-lg bg-violet-700 px-4 py-3 text-sm font-medium text-white active:cursor-grabbing"
          >
            Drag this card
          </div>
          <div
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => {
              event.preventDefault();
              setDropped(event.dataTransfer.getData("text/plain") || dragged);
            }}
            className="grid min-h-16 min-w-40 place-items-center rounded-lg border-2 border-dashed border-slate-300 bg-white px-4 text-sm text-slate-500"
          >
            Drop it here
          </div>
          {dropped && (
            <p role="status" className="text-sm text-emerald-700">
              Dropped: {dropped}
            </p>
          )}
        </div>
      );
    case "dropdown-in-sidenav":
      return (
        <div className="w-full max-w-xs rounded-xl border border-slate-200 bg-white p-3 text-left">
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
          >
            Projects
            <ChevronDown size={16} className={open ? "rotate-180" : ""} />
          </button>
          {open && (
            <div className="ml-3 border-l border-slate-200 pl-3">
              {["All projects", "Archived", "Shared with me"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setStatus(item)}
                  className="block w-full rounded-md px-3 py-2 text-left text-sm text-slate-600 hover:bg-violet-50"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
          {status && <p className="px-3 pt-2 text-xs text-violet-700">{status}</p>}
        </div>
      );
    case "dropdown-in-topnav":
      return (
        <div className="relative flex w-full max-w-lg items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3">
          <span className="font-semibold text-slate-800">Workspace</span>
          <div className="relative">
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpen((current) => !current)}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
            >
              Resources <ChevronDown size={15} />
            </button>
            {open && (
              <div className="absolute right-0 top-full z-10 mt-2 w-40 rounded-lg border border-slate-200 bg-white p-1 shadow-lg">
                {["Documentation", "Guides", "Support"].map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => {
                      setStatus(item);
                      setOpen(false);
                    }}
                    className="block w-full rounded-md px-3 py-2 text-left text-sm hover:bg-slate-50"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
          {status && <span className="sr-only" role="status">{status} selected</span>}
        </div>
      );
    case "dropmorphism":
      return (
        <div className="relative rounded-2xl bg-gradient-to-br from-indigo-200 via-violet-200 to-pink-100 p-10">
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            className="flex items-center gap-2 rounded-xl border border-white/70 bg-white/60 px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-lg backdrop-blur-xl"
          >
            Quick actions <MoreHorizontal size={17} />
          </button>
          {open && (
            <div className="absolute left-10 top-24 z-10 w-44 rounded-xl border border-white/70 bg-white/65 p-2 shadow-xl backdrop-blur-xl">
              {["New document", "Invite team", "Settings"].map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => {
                    setStatus(item);
                    setOpen(false);
                  }}
                  className="block w-full rounded-lg px-3 py-2 text-left text-sm text-slate-700 hover:bg-white/70"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
          {status && <p className="mt-4 text-sm text-slate-700">{status} selected</p>}
        </div>
      );
    case "dropup":
      return (
        <div className="relative mt-28">
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            className={buttonClass}
          >
            Actions <ChevronDown size={15} className="ml-1 inline rotate-180" />
          </button>
          {open && (
            <div className="absolute bottom-full left-0 mb-2 w-40 rounded-lg border border-slate-200 bg-white p-1 shadow-lg">
              {["Edit", "Duplicate", "Archive"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setStatus(item);
                    setOpen(false);
                  }}
                  className="block w-full rounded-md px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
          {status && <p role="status" className="mt-2 text-sm text-slate-600">{status} selected</p>}
        </div>
      );
    default:
      return <p className="text-sm text-slate-600">Demo coming soon.</p>;
  }
}
