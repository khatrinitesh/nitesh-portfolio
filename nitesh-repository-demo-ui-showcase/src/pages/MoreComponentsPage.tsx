import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ChevronDown,
  CircleCheck,
  Copy,
  Menu,
  Plus,
  X,
} from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { useParams } from "react-router";
import {
  arrayReferenceDetails,
  arrayReferenceSlugs,
  isArrayReferenceSlug,
} from "../data/arrayReference";
import ArrayReferenceDemo from "./ArrayReferenceDemo";
import {
  booleanReferenceDetails,
  booleanReferenceSlugs,
  isBooleanReferenceSlug,
} from "../data/booleanReference";
import BooleanReferenceDemo from "./BooleanReferenceDemo";
import {
  dateReferenceDetails,
  dateReferenceSlugs,
  isDateReferenceSlug,
} from "../data/dateReference";
import DateReferenceDemo from "./DateReferenceDemo";
import {
  functionReferenceDetails,
  functionReferenceSlugs,
  isFunctionReferenceSlug,
} from "../data/functionReference";
import FunctionReferenceDemo from "./FunctionReferenceDemo";
import {
  isIteratorReferenceSlug,
  iteratorReferenceDetails,
  iteratorReferenceSlugs,
} from "../data/iteratorReference";
import IteratorReferenceDemo from "./IteratorReferenceDemo";
import {
  isJsonReferenceSlug,
  jsonReferenceDetails,
  jsonReferenceSlugs,
} from "../data/jsonReference";
import JsonReferenceDemo from "./JsonReferenceDemo";
import {
  isMapReferenceSlug,
  mapReferenceDetails,
  mapReferenceSlugs,
} from "../data/mapReference";
import MapReferenceDemo from "./MapReferenceDemo";
import {
  isMathReferenceSlug,
  mathReferenceDetails,
  mathReferenceSlugs,
} from "../data/mathReference";
import MathReferenceDemo from "./MathReferenceDemo";
import {
  isNumberReferenceSlug,
  numberReferenceDetails,
  numberReferenceSlugs,
} from "../data/numberReference";
import NumberReferenceDemo from "./NumberReferenceDemo";
import {
  isObjectReferenceSlug,
  objectReferenceDetails,
  objectReferenceSlugs,
} from "../data/objectReference";
import ObjectReferenceDemo from "./ObjectReferenceDemo";
import {
  isOperatorReferenceSlug,
  operatorReferenceDetails,
  operatorReferenceSlugs,
} from "../data/operatorReference";
import OperatorReferenceDemo from "./OperatorReferenceDemo";
import RequestedFeatureDemos from "./RequestedFeatureDemos";

const requestedComponents = [
  "calc",
  "calculator",
  "calendar",
  "callout",
  "canvas-reveal-effect",
  "car-running",
  "card-hover-effect",
  "card-spotlight",
  "card-stack",
  "cards",
  "cascading-dropdown",
  "center-button-div",
  "center-images",
  "center-tables",
  "center-vertically",
  "center-website",
  "centered-menu-link",
  "change-background-color-with-dropdown-menu",
  "change-background-on-scroll",
  "changing-active-menu-item-on-page-scroll",
  "character-counter",
  "chat-message",
  "check-checkbox",
  "check-if-value-is-numeric",
  "checkout-form",
  "circle-menu-for-mobile",
  "circles-dots",
  "classlist",
  "clear-input-field",
  "clearfix",
  "click-dropdowns",
  "closable-list-items",
  "close",
  "collapsed-sidebar",
  "collapsed-sidepanel",
  "collapsible",
  "color-picker",
  "colorful-text",
  "column-cards",
  "coming-soon-page",
  "compare",
  "comparison-table",
  "contact-chips",
  "contact-form",
  "contact-section",
  "container-cover",
  "container-scroll-animation",
  "contenteditable-border",
  "copy-text-to-clipboard",
  "copy-to-clipboard",
  "countdown-timer",
  "coupon",
  "create-zoom-in-and-out-an-image",
  "crud",
  "cursor",
  "curtain-menu",
  "custom-checkbox",
  "custom-file-upload",
  "custom-radio",
  "custom-scrollbar",
  "custom-select",
  "cutout-text",
  "dashboard-templates",
  "datatable",
  "datepicker",
  "delete-modal",
  "detect-capslock",
  "detect-user-browser",
  "device-look",
  "direction-aware-hover",
  "disable-right-click",
  "display-element-hover",
  "divider",
  "download-buttons",
  "download-link",
  "draggable-html-element",
  "dropdown-in-sidenav",
  "dropdown-in-topnav",
  "dropmorphism",
  "dropup",
  "emailer",
  "empty-input-validation",
  "equal-height",
  "equal-width-nav-links",
  "evervault-card",
  "example-website",
  "expandable-cards",
  "expanding-grid",
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
  "javascript-array-reference",
  ...arrayReferenceSlugs,
  "javascript-boolean-reference",
  ...booleanReferenceSlugs,
  "javascript-date-reference",
  ...dateReferenceSlugs,
  "javascript-function-reference",
  ...functionReferenceSlugs,
  "javascript-iterator-reference",
  ...iteratorReferenceSlugs,
  "javascript-json-reference",
  ...jsonReferenceSlugs,
  "javascript-map-reference",
  ...mapReferenceSlugs,
  "javascript-math-reference",
  ...mathReferenceSlugs,
  "javascript-number-reference",
  ...numberReferenceSlugs,
  "javascript-object-reference",
  ...objectReferenceSlugs,
  "javascript-operators-reference",
  ...operatorReferenceSlugs,
] as const;

type RequestedComponent = (typeof requestedComponents)[number];

const componentDetails: Record<
  RequestedComponent,
  { title: string; description: string; code: string }
> = {
  calc: {
    title: "Calc",
    description: "Use CSS calc() to combine flexible and fixed dimensions.",
    code: `<div className="w-[calc(100%-2rem)] max-w-xl">Responsive width</div>`,
  },
  calculator: {
    title: "Calculator",
    description: "A compact calculator with working arithmetic controls.",
    code: `<Calculator />`,
  },
  calendar: {
    title: "Calendar",
    description: "Browse a month and choose a date from a compact calendar.",
    code: `<Calendar selectedDate={date} onSelect={setDate} />`,
  },
  callout: {
    title: "Callout",
    description: "Draw attention to useful tips, warnings, and important notes.",
    code: `<aside role="note">Helpful information goes here.</aside>`,
  },
  "canvas-reveal-effect": {
    title: "Canvas Reveal Effect",
    description: "Reveal a glowing, gradient canvas on hover.",
    code: `<div className="group relative overflow-hidden">...</div>`,
  },
  "car-running": {
    title: "Car Running",
    description: "A playful animated car traveling across a track.",
    code: `<div className="animate-[drive_4s_ease-in-out_infinite]">🚗</div>`,
  },
  "card-hover-effect": {
    title: "Card Hover Effect",
    description: "Lift a card and reveal a color accent on hover.",
    code: `<article className="transition hover:-translate-y-1 hover:shadow-xl">...</article>`,
  },
  "card-spotlight": {
    title: "Card Spotlight",
    description: "Move a soft spotlight across a card with the pointer.",
    code: `<article className="group relative overflow-hidden">...</article>`,
  },
  "card-stack": {
    title: "Card Stack",
    description: "Cycle through a stack of cards to reveal the next item.",
    code: `<button onClick={showNextCard}>Next card</button>`,
  },
  cards: {
    title: "Cards",
    description: "Arrange flexible content cards in a responsive grid.",
    code: `<div className="grid gap-4 sm:grid-cols-2">{/* Cards */}</div>`,
  },
  "cascading-dropdown": {
    title: "Cascading Dropdown",
    description: "Update child options based on a parent selection.",
    code: `<select value={country} onChange={updateCountry}>...</select>`,
  },
  "center-button-div": {
    title: "Center Button Div",
    description: "Center an action horizontally and vertically with flexbox.",
    code: `<div className="flex items-center justify-center"><button>Action</button></div>`,
  },
  "center-images": {
    title: "Center Images",
    description: "Center images with a responsive flex container.",
    code: `<div className="flex justify-center"><img src="/image.jpg" alt="" /></div>`,
  },
  "center-tables": {
    title: "Center Tables",
    description: "Center a table in its container while preserving readable alignment.",
    code: `<div className="flex justify-center"><table>...</table></div>`,
  },
  "center-vertically": {
    title: "Center Vertically",
    description: "Center content vertically with grid or flexbox.",
    code: `<div className="grid min-h-48 place-items-center">Centered content</div>`,
  },
  "center-website": {
    title: "Center Website",
    description: "Keep a page comfortably centered with a responsive max-width container.",
    code: `<main className="mx-auto w-full max-w-6xl px-6">...</main>`,
  },
  "centered-menu-link": {
    title: "Centered Menu Link",
    description: "Center a menu link and give it a clear active state.",
    code: `<nav className="flex justify-center"><a href="/">Home</a></nav>`,
  },
  "change-background-color-with-dropdown-menu": {
    title: "Change Background Color With Dropdown Menu",
    description: "Change the preview surface color from a select menu.",
    code: `<select value={color} onChange={(event) => setColor(event.target.value)}>...</select>`,
  },
  "change-background-on-scroll": {
    title: "Change Background on Scroll",
    description: "Change a panel's background as its scroll position changes.",
    code: `<div onScroll={handleScroll} className={scrolled ? "bg-violet-100" : "bg-white"}>...</div>`,
  },
  "changing-active-menu-item-on-page-scroll": {
    title: "Changing Active Menu Item on Page Scroll",
    description: "Update the active navigation item as the preview scrolls between sections.",
    code: `<nav>{sections.map((section) => <a href={section.id}>{section.label}</a>)}</nav>`,
  },
  "character-counter": {
    title: "Character Counter",
    description: "Show the remaining characters as someone types.",
    code: `<textarea maxLength={160} onChange={(event) => setText(event.target.value)} />`,
  },
  "chat-message": {
    title: "Chat Message",
    description: "Display a message bubble with sender and timestamp.",
    code: `<div className="rounded-2xl rounded-bl-sm bg-violet-600 p-3 text-white">Hello!</div>`,
  },
  "check-checkbox": {
    title: "Check Checkbox",
    description: "Read a checkbox's current state and respond to user input.",
    code: `<input type="checkbox" checked={checked} onChange={(event) => setChecked(event.target.checked)} />`,
  },
  "check-if-value-is-numeric": {
    title: "Check if Value is Numeric",
    description: "Validate input and report whether it represents a number.",
    code: `const isNumeric = value.trim() !== "" && Number.isFinite(Number(value));`,
  },
  "checkout-form": {
    title: "Checkout Form",
    description: "Collect basic contact and payment details in a compact checkout form.",
    code: `<form onSubmit={handleCheckout}>{/* Contact and payment fields */}</form>`,
  },
  "circle-menu-for-mobile": {
    title: "Circle Menu for Mobile",
    description: "Expand a floating action into a circular set of quick actions.",
    code: `<button aria-expanded={open} onClick={() => setOpen(!open)}>Menu</button>`,
  },
  "circles-dots": {
    title: "Circles Dots",
    description: "Use a simple animated sequence of dots as a loading indicator.",
    code: `<div role="status" aria-label="Loading" className="flex gap-2">...</div>`,
  },
  classlist: {
    title: "classList",
    description: "Toggle a CSS class in response to interaction.",
    code: `<button onClick={() => setActive(!active)}>Toggle class</button>`,
  },
  "clear-input-field": {
    title: "Clear Input Field",
    description: "Provide an inline action that clears a text field.",
    code: `<button type="button" onClick={() => setValue("")} aria-label="Clear input">×</button>`,
  },
  clearfix: {
    title: "Clearfix",
    description: "Contain floated content using a flow-root formatting context.",
    code: `<div className="flow-root"><img className="float-left" src="/image.jpg" alt="" />...</div>`,
  },
  "click-dropdowns": {
    title: "Click Dropdowns",
    description: "Open and close a dropdown menu with a button.",
    code: `<button aria-expanded={open} onClick={() => setOpen(!open)}>Options</button>`,
  },
  "closable-list-items": {
    title: "Closable List Items",
    description: "Remove individual items from a list.",
    code: `<button aria-label="Remove item" onClick={() => removeItem(id)}>×</button>`,
  },
  close: {
    title: "Close",
    description: "Dismiss a panel and bring it back with a reopen control.",
    code: `<button aria-label="Close" onClick={() => setOpen(false)}>×</button>`,
  },
  "collapsed-sidebar": {
    title: "Collapsed Sidebar",
    description: "Toggle between compact icon navigation and an expanded sidebar.",
    code: `<aside className={collapsed ? "w-16" : "w-56"}>...</aside>`,
  },
  "collapsed-sidepanel": {
    title: "Collapsed Sidepanel",
    description: "Expand or collapse a supplemental panel beside the content.",
    code: `<aside hidden={!open}>Details</aside>`,
  },
  collapsible: {
    title: "Collapsible",
    description: "Reveal or hide a content panel with an accessible disclosure button.",
    code: `<button aria-expanded={open} onClick={() => setOpen(!open)}>Details</button>`,
  },
  "color-picker": {
    title: "Color Picker",
    description: "Choose a color and preview it immediately.",
    code: `<input type="color" value={color} onChange={(event) => setColor(event.target.value)} />`,
  },
  "colorful-text": {
    title: "Colorful Text",
    description: "Apply a gradient fill to large display text.",
    code: `<h2 className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">Colorful</h2>`,
  },
  "column-cards": {
    title: "Column Cards",
    description: "Present cards in a responsive multi-column layout.",
    code: `<div className="columns-1 gap-4 sm:columns-2">{/* Cards */}</div>`,
  },
  "coming-soon-page": {
    title: "Coming Soon Page",
    description: "Build anticipation with a launch message and countdown.",
    code: `<section><h1>Coming soon</h1><Countdown /></section>`,
  },
  compare: {
    title: "Compare",
    description: "Compare two choices side by side.",
    code: `<div className="grid grid-cols-2 gap-4">{/* Comparison items */}</div>`,
  },
  "comparison-table": {
    title: "Comparison Table",
    description: "Compare features across plans in an accessible table.",
    code: `<table><thead>...</thead><tbody>...</tbody></table>`,
  },
  "contact-chips": {
    title: "Contact Chips",
    description: "Show selected contacts as compact removable chips.",
    code: `<button onClick={() => removeContact(id)}>{name} ×</button>`,
  },
  "contact-form": {
    title: "Contact Form",
    description: "Collect a name, email, and message with a clear submit action.",
    code: `<form onSubmit={handleSubmit}>...</form>`,
  },
  "contact-section": {
    title: "Contact Section",
    description: "Present contact details and a direct way to get in touch.",
    code: `<section><h2>Let's talk</h2><a href="mailto:hello@example.com">Email us</a></section>`,
  },
  "container-cover": {
    title: "Container Cover",
    description: "Cover a container with a full-bleed image and readable overlay content.",
    code: `<div className="relative bg-cover bg-center">...</div>`,
  },
  "container-scroll-animation": {
    title: "Container Scroll Animation",
    description: "Reveal content as a scrollable container moves.",
    code: `<div className="overflow-y-auto"><article className="transition">...</article></div>`,
  },
  "contenteditable-border": {
    title: "Contenteditable Border",
    description: "Style an editable text area with a visible focus border.",
    code: `<div contentEditable suppressContentEditableWarning className="focus-within:ring-2">Edit me</div>`,
  },
  "copy-text-to-clipboard": {
    title: "Copy Text to Clipboard",
    description: "Copy selected text to the clipboard.",
    code: `await navigator.clipboard.writeText(text);`,
  },
  "copy-to-clipboard": {
    title: "Copy to Clipboard",
    description: "Copy a code snippet or value with one action.",
    code: `<button onClick={() => navigator.clipboard.writeText(value)}>Copy</button>`,
  },
  "countdown-timer": {
    title: "Countdown Timer",
    description: "Count down to a target date and update the display every second.",
    code: `useEffect(() => { const timer = setInterval(tick, 1000); return () => clearInterval(timer); }, []);`,
  },
  coupon: {
    title: "Coupon",
    description: "Present a discount code with a copy action.",
    code: `<button onClick={copyCoupon}>SAVE20 <Copy aria-hidden="true" /></button>`,
  },
  "create-zoom-in-and-out-an-image": {
    title: "Create Zoom In and Out an Image",
    description: "Zoom an image with an adjustable range control.",
    code: `<input type="range" min="1" max="1.8" step="0.1" value={scale} onChange={updateScale} />`,
  },
  crud: {
    title: "CRUD",
    description: "Create, read, update, and delete items in a simple list.",
    code: `<form onSubmit={addItem}>...</form>{items.map((item) => <Item onDelete={removeItem} />)}`,
  },
  cursor: {
    title: "Cursor",
    description: "Move a decorative cursor marker over a demo surface.",
    code: `<div onPointerMove={moveCursor} className="relative">...</div>`,
  },
  "curtain-menu": {
    title: "Curtain Menu",
    description: "Reveal a full-screen menu with a curtain transition.",
    code: `<button aria-expanded={open} onClick={() => setOpen(!open)}>Menu</button>`,
  },
  "custom-checkbox": {
    title: "Custom Checkbox",
    description: "Style a checkbox while retaining its native accessible behavior.",
    code: `<input type="checkbox" className="accent-violet-600" />`,
  },
  "custom-file-upload": {
    title: "Custom File Upload",
    description: "Style a file picker while keeping the native input available.",
    code: `<label>Choose file<input type="file" className="sr-only" /></label>`,
  },
  "custom-radio": {
    title: "Custom Radio",
    description: "Select one option from an accessible group of styled radio controls.",
    code: `<input type="radio" name="plan" value="starter" className="accent-violet-600" />`,
  },
  "custom-scrollbar": {
    title: "Custom Scrollbar",
    description: "Style a scrollable region with a subtle scrollbar.",
    code: `<div className="max-h-40 overflow-y-auto">Scrollable content</div>`,
  },
  "custom-select": {
    title: "Custom Select",
    description: "Style a native select control with custom colors and focus treatment.",
    code: `<select className="rounded-lg border px-3 py-2 focus:ring-2">...</select>`,
  },
  "cutout-text": {
    title: "Cutout Text",
    description: "Create a cutout display effect with text over a photographic background.",
    code: `<h2 className="bg-cover bg-clip-text text-transparent">Explore</h2>`,
  },
  "dashboard-templates": {
    title: "Dashboard Templates",
    description: "Preview compact admin and backend dashboard layouts with navigation, metrics, and recent activity.",
    code: `<DashboardTemplate variant="admin" />`,
  },
  datatable: {
    title: "Datatable",
    description: "Search, sort, and page through a small, accessible data table.",
    code: `<DataTable rows={users} pageSize={4} />`,
  },
  datepicker: {
    title: "Datepicker",
    description: "Choose a date using the browser's native date picker control.",
    code: `<input type="date" value={date} onChange={handleDateChange} />`,
  },
  "delete-modal": {
    title: "Delete Modal",
    description: "Confirm a destructive action before removing an item.",
    code: `<DeleteConfirmation onConfirm={deleteItem} onCancel={closeModal} />`,
  },
  "detect-capslock": {
    title: "Detect Caps Lock",
    description: "Show a hint when Caps Lock is active while entering a password.",
    code: `<input onKeyUp={(event) => setCapsLock(event.getModifierState("CapsLock"))} />`,
  },
  "detect-user-browser": {
    title: "Detect User Browser",
    description: "Identify the browser from the current user agent for a lightweight environment hint.",
    code: `const browser = detectBrowser(navigator.userAgent);`,
  },
  "device-look": {
    title: "Device Look",
    description: "Switch a sample interface between phone, tablet, and desktop frames.",
    code: `<DeviceFrame size={device} />`,
  },
  "direction-aware-hover": {
    title: "Direction Aware Hover",
    description: "Reveal a card accent as the pointer enters and moves across the preview.",
    code: `<article className="group overflow-hidden">...</article>`,
  },
  "disable-right-click": {
    title: "Disable Right Click",
    description: "Demonstrate a context-menu handler locally in this preview area only.",
    code: `<div onContextMenu={(event) => event.preventDefault()}>...</div>`,
  },
  "display-element-hover": {
    title: "Display Element Hover",
    description: "Reveal supplemental content when a user hovers over or focuses a card.",
    code: `<div className="group"><div className="invisible group-hover:visible">...</div></div>`,
  },
  divider: {
    title: "Divider",
    description: "Separate content with horizontal or vertical rules.",
    code: `<hr className="border-slate-200" />`,
  },
  "download-buttons": {
    title: "Download Buttons",
    description: "Download a sample text file from a clear button action.",
    code: `<a href={downloadUrl} download="report.txt">Download report</a>`,
  },
  "download-link": {
    title: "Download Link",
    description: "Provide a simple, accessible link to download a sample resource.",
    code: `<a href={downloadUrl} download="notes.txt">Download notes</a>`,
  },
  "draggable-html-element": {
    title: "Draggable HTML Element",
    description: "Drag an item and drop it into a target area using native HTML drag events.",
    code: `<div draggable onDragStart={handleDragStart}>Move me</div>`,
  },
  "dropdown-in-sidenav": {
    title: "Dropdown in Sidenav",
    description: "Expand and collapse a nested navigation group inside a sidebar.",
    code: `<button aria-expanded={open} onClick={() => setOpen(!open)}>Projects</button>`,
  },
  "dropdown-in-topnav": {
    title: "Dropdown in Topnav",
    description: "Open a compact navigation menu from a top bar.",
    code: `<button aria-expanded={open} onClick={() => setOpen(!open)}>Resources</button>`,
  },
  dropmorphism: {
    title: "Dropmorphism",
    description: "A translucent, blurred dropdown surface with readable menu actions.",
    code: `<div className="border border-white/60 bg-white/70 backdrop-blur-xl">...</div>`,
  },
  dropup: {
    title: "Dropup",
    description: "Open a menu above its trigger while keeping the actions easy to reach.",
    code: `<div className="relative"><Menu className="bottom-full" /></div>`,
  },
  emailer: {
    title: "Emailer",
    description: "Compose a short email and preview a simple sent confirmation.",
    code: `<form onSubmit={handleSend}><input type="email" required /><textarea required /><button>Send email</button></form>`,
  },
  "empty-input-validation": {
    title: "Empty Input Validation",
    description: "Require a value and provide an inline message when a form is submitted empty.",
    code: `<input required aria-describedby="validation-message" />`,
  },
  "equal-height": {
    title: "Equal Height",
    description: "Use a stretched grid layout to keep cards aligned at equal height.",
    code: `<div className="grid items-stretch sm:grid-cols-3">...</div>`,
  },
  "equal-width-nav-links": {
    title: "Equal Width Nav Links",
    description: "Give each navigation link a consistent share of the available width.",
    code: `<nav className="grid grid-cols-3"><a>Home</a><a>About</a><a>Contact</a></nav>`,
  },
  "evervault-card": {
    title: "Evervault Card",
    description: "An abstract encrypted-card visual with a subtle interactive glow.",
    code: `<div className="group relative overflow-hidden">...</div>`,
  },
  "example-website": {
    title: "Example Website",
    description: "A compact landing page example with navigation, a hero message, and a call to action.",
    code: `<main><nav>...</nav><section><h1>...</h1><a href="#features">Explore</a></section></main>`,
  },
  "expandable-cards": {
    title: "Expandable Cards",
    description: "Expand a card to reveal details while keeping the other cards compact.",
    code: `<button aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>...</button>`,
  },
  "expanding-grid": {
    title: "Expanding Grid",
    description: "Select a grid tile to expand its details in the available space.",
    code: `<button className={selected ? "sm:col-span-2 sm:row-span-2" : ""}>...</button>`,
  },
  "fade-in": {
    title: "Fade In",
    description: "Reveal an element with a smooth opacity transition.",
    code: `<div className={visible ? "opacity-100" : "opacity-0"}>...</div>`,
  },
  "fade-out": {
    title: "Fade Out",
    description: "Fade an element away while preserving its place in the layout.",
    code: `<div className={visible ? "opacity-100" : "opacity-0"}>...</div>`,
  },
  "fade-toggle": {
    title: "Fade Toggle",
    description: "Toggle an element's visibility with an opacity transition.",
    code: `<div className={visible ? "opacity-100" : "opacity-0"}>...</div>`,
  },
  "fading-buttons": {
    title: "Fading Buttons",
    description: "Use subtle opacity feedback when buttons are hovered or focused.",
    code: `<button className="transition-opacity hover:opacity-60">Hover me</button>`,
  },
  fatnav: {
    title: "Fatnav",
    description: "A bold, expanded navigation bar with prominent links.",
    code: `<nav className="flex items-center justify-between p-6">...</nav>`,
  },
  favicon: {
    title: "Favicon",
    description: "Preview a simple vector favicon mark as a browser-tab icon.",
    code: `<link rel="icon" href="/favicon.svg" type="image/svg+xml" />`,
  },
  "feature-sections": {
    title: "Feature Sections",
    description: "Present product benefits in a clear, responsive feature grid.",
    code: `<section className="grid gap-6 sm:grid-cols-3">...</section>`,
  },
  "fieldset-and-legend": {
    title: "Fieldset and Legend",
    description: "Group related form controls with semantic fieldset and legend elements.",
    code: `<fieldset><legend>Contact preferences</legend>...</fieldset>`,
  },
  "filter-dropdown": {
    title: "Filter Dropdown",
    description: "Filter a set of items by selecting a category.",
    code: `<select value={filter} onChange={(event) => setFilter(event.target.value)}>...</select>`,
  },
  "filter-elements": {
    title: "Filter Elements",
    description: "Instantly narrow down a collection of cards with a search field.",
    code: `{items.filter((item) => item.includes(query)).map(renderItem)}`,
  },
  "filter-list": {
    title: "Filter List",
    description: "Search and filter a list of example items as you type.",
    code: `{items.filter((item) => item.toLowerCase().includes(query.toLowerCase()))}`,
  },
  "filter-table": {
    title: "Filter Table",
    description: "Search across table rows to find matching records.",
    code: `<table>{rows.filter(matchesQuery).map(renderRow)}</table>`,
  },
  "filter-transition": {
    title: "Filter Transition",
    description: "Animate cards as the selected category changes.",
    code: `<div className="transition-all duration-300">Filtered content</div>`,
  },
  "find-hidden-element": {
    title: "Find Hidden Element",
    description: "Reveal a hidden element in the preview when you activate the control.",
    code: `<button onClick={() => setFound(true)}>Find hidden element</button>`,
  },
  "fixed-footer": {
    title: "Fixed Footer",
    description: "Preview a footer anchored to the bottom of a contained viewport.",
    code: `<footer className="absolute inset-x-0 bottom-0">...</footer>`,
  },
  "fixed-header": {
    title: "Fixed Header",
    description: "Preview a header that remains anchored while its content scrolls.",
    code: `<header className="sticky top-0">...</header>`,
  },
  "fixed-menu": {
    title: "Fixed Menu",
    description: "A compact fixed-position action menu, scoped to the preview.",
    code: `<nav className="absolute bottom-4 right-4">...</nav>`,
  },
  "fixed-sidebar": {
    title: "Fixed Sidebar",
    description: "A sidebar that stays visible beside a scrollable content panel.",
    code: `<aside className="sticky top-0 h-screen">...</aside>`,
  },
  flexbox: {
    title: "Flexbox",
    description: "Explore how flexible items align and distribute available space.",
    code: `<div className="flex items-center justify-between gap-4">...</div>`,
  },
  "flickering-grid": {
    title: "Flickering Grid",
    description: "A decorative grid with gently animated highlights.",
    code: `<div className="grid grid-cols-8 gap-2">...</div>`,
  },
  "flip-an-image": {
    title: "Flip an Image",
    description: "Flip an image horizontally with a transform transition.",
    code: `<img className={flipped ? "-scale-x-100" : ""} src={image} alt="..." />`,
  },
  "flip-box": {
    title: "Flip Box",
    description: "Reveal a card's reverse side with a 3D flip interaction.",
    code: `<div className="transform-style:[preserve-3d]">...</div>`,
  },
  "flip-card": {
    title: "Flip Card",
    description: "Turn over a card to reveal its back side.",
    code: `<button className={flipped ? "transform:[rotateY(180deg)]" : ""}>...</button>`,
  },
  flipbook: {
    title: "Flipbook",
    description: "Turn through a small set of pages using previous and next controls.",
    code: `<button onClick={() => setPage((page + 1) % pages.length)}>Next page</button>`,
  },
  "floating-dock": {
    title: "Floating Dock",
    description: "A floating toolbar with quick actions and accessible labels.",
    code: `<nav aria-label="Quick actions" className="rounded-full shadow-lg">...</nav>`,
  },
  "floating-images-left-and-right-to-wrap-text": {
    title: "Floating Images Left and Right to Wrap Text",
    description: "Float images on either side to let paragraph text wrap around them.",
    code: `<img className="float-left mr-4" /><img className="float-right ml-4" />...`,
  },
  "floating-navbar": {
    title: "Floating Navbar",
    description: "A centered floating navigation bar with a soft shadow.",
    code: `<nav className="fixed inset-x-4 top-4 mx-auto max-w-xl rounded-full">...</nav>`,
  },
  "focus-cards": {
    title: "Focus Cards",
    description: "Bring one card into focus while softening surrounding cards.",
    code: `<article className="transition hover:scale-105 hover:shadow-xl">...</article>`,
  },
  "folded-corner": {
    title: "Folded Corner",
    description: "Add a decorative folded-corner detail to a note card.",
    code: `<article className="relative overflow-hidden">...</article>`,
  },
  "following-pointer": {
    title: "Following Pointer",
    description: "Move a decorative highlight with the pointer inside the demo.",
    code: `<div onPointerMove={updatePosition} style={{ left: x, top: y }}>...</div>`,
  },
  "font-face": {
    title: "Font Face",
    description: "Preview a locally available font stack with a CSS font-face example.",
    code: `@font-face { font-family: "Demo"; src: local("Arial"); }`,
  },
  footer: {
    title: "Footer",
    description: "A responsive footer with navigation and a compact brand area.",
    code: `<footer className="grid gap-6 sm:grid-cols-3">...</footer>`,
  },
  "form-on-image": {
    title: "Form on Image",
    description: "Layer a readable contact form over a decorative background image.",
    code: `<form className="bg-white/90 backdrop-blur">...</form>`,
  },
  "form-validation": {
    title: "Form Validation",
    description: "Validate required fields and email format with helpful inline feedback.",
    code: `<input type="email" required aria-describedby="email-error" />`,
  },
  "form-with-icons": {
    title: "Form with Icons",
    description: "Pair common form fields with leading visual icons.",
    code: `<label><Mail aria-hidden="true" /><input type="email" /></label>`,
  },
  "frosted-glass-effect": {
    title: "Frosted Glass Effect",
    description: "Use a translucent surface and backdrop blur over a colorful background.",
    code: `<div className="border border-white/40 bg-white/60 backdrop-blur-xl">...</div>`,
  },
  "full-height-element": {
    title: "Full Height Element",
    description: "Fill the available preview height with a vertically centered panel.",
    code: `<div className="flex min-h-64 items-center justify-center">...</div>`,
  },
  "full-page-background-image": {
    title: "Full Page Background Image",
    description: "Preview a full-bleed image background inside the component canvas.",
    code: `<main className="bg-cover bg-center" style={{ backgroundImage: "url(...)" }}>...</main>`,
  },
  "full-page-background-with-content": {
    title: "Full Page Background with Content",
    description: "Layer readable foreground content over a full-bleed background.",
    code: `<main className="bg-cover"><section className="bg-black/40 text-white">...</section></main>`,
  },
  "fullscreen-navigation": {
    title: "Fullscreen Navigation",
    description: "Open a full-preview navigation overlay with prominent links.",
    code: `<nav className="absolute inset-0">...</nav>`,
  },
  "fullscreen-search": {
    title: "Fullscreen Search",
    description: "Expand search into a full-preview panel with a working query field.",
    code: `<section className="absolute inset-0"><input autoFocus /></section>`,
  },
  "fullscreen-video": {
    title: "Fullscreen Video",
    description: "Preview a video-style full-bleed panel with playback controls.",
    code: `<video controls className="h-full w-full object-cover" />`,
  },
  "fullscreen-window": {
    title: "Fullscreen Window",
    description: "Expand the demo panel to fill its component preview container.",
    code: `<div className={fullscreen ? "absolute inset-0" : ""}>...</div>`,
  },
  "full-width-table": {
    title: "Full-width Table",
    description: "Let a table span the full width of its responsive container.",
    code: `<table className="w-full">...</table>`,
  },
  "get-checkbox-values-using-checkbox-name": {
    title: "Get Checkbox Values Using Checkbox Name",
    description: "Collect the checked values from a group of checkboxes that share a name.",
    code: `const values = new FormData(form).getAll("interests");`,
  },
  "github-globe": {
    title: "GitHub Globe",
    description: "A stylized globe with animated connection arcs for a global activity visualization.",
    code: `<Globe className="animate-spin" aria-label="Global activity" />`,
  },
  "glare-card": {
    title: "Glare Card",
    description: "Move your pointer over the card to reveal a soft highlight.",
    code: `<article className="group relative overflow-hidden">...</article>`,
  },
  glassmorphism: {
    title: "Glassmorphism",
    description: "Create a frosted translucent panel over a colorful background.",
    code: `<div className="border border-white/40 bg-white/50 backdrop-blur-xl">...</div>`,
  },
  "glowing-effect": {
    title: "Glowing Effect",
    description: "Highlight a panel with a soft ambient glow.",
    code: `<div className="shadow-[0_0_40px_rgba(139,92,246,.35)]">...</div>`,
  },
  "glowing-stars": {
    title: "Glowing Stars",
    description: "Decorative stars pulse softly against a dark background.",
    code: `<span className="animate-pulse text-violet-300">✦</span>`,
  },
  "glowing-text": {
    title: "Glowing Text",
    description: "Apply a luminous text shadow to a short heading.",
    code: `<h2 className="drop-shadow-[0_0_16px_rgba(167,139,250,.9)]">...</h2>`,
  },
  "google-charts": {
    title: "Google Charts",
    description: "A lightweight chart-style preview with sample data, drawn locally as SVG.",
    code: `<svg role="img" aria-label="Monthly activity chart">...</svg>`,
  },
  "google-fonts": {
    title: "Google Fonts",
    description: "Preview a Google Fonts-style type specimen using a system fallback without external requests.",
    code: `font-family: "Georgia", "Times New Roman", serif;`,
  },
  "google-gemini-effect": {
    title: "Google Gemini Effect",
    description: "A colorful, animated gradient treatment inspired by AI assistant interfaces.",
    code: `<div className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500">...</div>`,
  },
  "google-maps": {
    title: "Google Maps",
    description: "A locally rendered map-style panel with a location marker; no map service is contacted.",
    code: `<div role="img" aria-label="Map preview">...</div>`,
  },
  "google-search-engine": {
    title: "Google Search Engine",
    description: "Enter a query and submit it to a Google search results page.",
    code: `<form action="https://www.google.com/search"><input name="q" /></form>`,
  },
  "google-translate": {
    title: "Google Translate",
    description: "Choose a language to preview translated sample copy locally.",
    code: `<select value={language} onChange={handleLanguageChange}>...</select>`,
  },
  "gradient-animation": {
    title: "Gradient Animation",
    description: "Animate a shifting gradient across a decorative surface.",
    code: `<div className="animate-[gradient_6s_ease_infinite] bg-length:[200%_200%]">...</div>`,
  },
  "gradient-bg-scroll": {
    title: "Gradient Background on Scroll",
    description: "Scroll the panel to reveal a changing gradient background.",
    code: `<div onScroll={handleScroll} className="overflow-y-auto">...</div>`,
  },
  "grid-and-dot-backgrounds": {
    title: "Grid and Dot Backgrounds",
    description: "Compare two subtle CSS-only grid and dot background patterns.",
    code: `<div className="bg-[radial-gradient(#94a3b8_1px,transparent_1px)]">...</div>`,
  },
  "grid-layout": {
    title: "Grid Layout",
    description: "Explore a responsive CSS grid with varied card sizes.",
    code: `<div className="grid grid-cols-2 gap-3 sm:grid-cols-3">...</div>`,
  },
  "grid-tile": {
    title: "Grid Tile",
    description: "Select a tile in the grid to highlight it and reveal more information.",
    code: `<button aria-pressed={selected} onClick={() => setSelected(!selected)}>...</button>`,
  },
  header: {
    title: "Header",
    description: "A responsive page header with a brand, navigation links, and a primary action.",
    code: `<header className="flex items-center justify-between">...</header>`,
  },
  "headlines-animation-text-effect": {
    title: "Headlines Animation Text Effect",
    description: "Cycle through short headline phrases with a subtle transition.",
    code: `<h1 className="transition-all">{headlines[index]}</h1>`,
  },
  "hero-highlight": {
    title: "Hero Highlight",
    description: "Emphasize a key phrase in a landing-page headline.",
    code: `<h1>Build <span className="bg-violet-100">something great</span></h1>`,
  },
  "hero-image": {
    title: "Hero Image",
    description: "Pair a concise hero message with a responsive image.",
    code: `<section className="grid items-center sm:grid-cols-2">...</section>`,
  },
  hide: {
    title: "Hide",
    description: "Hide and reveal a preview element with an accessible toggle.",
    code: `<button aria-expanded={visible} onClick={() => setVisible(!visible)}>Toggle</button>`,
  },
  "hide-navbar-on-scroll": {
    title: "Hide Navbar on Scroll",
    description: "Hide a navigation bar while scrolling down inside the preview.",
    code: `<div onScroll={handleScroll}><nav className={hidden ? "-translate-y-full" : ""}>...</nav></div>`,
  },
  "hide-scrollbar": {
    title: "Hide Scrollbar",
    description: "Keep a region scrollable while visually hiding its scrollbar.",
    code: `<div className="overflow-y-auto scrollbar-width:none [&::-webkit-scrollbar]:hidden">...</div>`,
  },
  "highlight-nav-on-div-scroll": {
    title: "Highlight Nav on Div Scroll",
    description: "Update active navigation based on the section currently in a scrollable panel.",
    code: `<div onScroll={updateActiveSection}>...</div>`,
  },
  "horizontal-line-with-words-in-the-middle": {
    title: "Horizontal Line with Words in the Middle",
    description: "Center a short label between two flexible horizontal rules.",
    code: `<div className="flex items-center gap-3"><hr className="flex-1" /><span>or</span><hr className="flex-1" /></div>`,
  },
  "horizontal-scroll-menu": {
    title: "Horizontal Scroll Menu",
    description: "Browse horizontally scrollable menu links, including on narrow screens.",
    code: `<nav className="flex overflow-x-auto whitespace-nowrap">...</nav>`,
  },
  hotspot: {
    title: "Hotspot",
    description: "Activate a marker on an illustration to reveal contextual details.",
    code: `<button className="absolute" aria-label="View location details">...</button>`,
  },
  "hover-border-gradient": {
    title: "Hover Border Gradient",
    description: "Reveal a colorful border gradient when a card is hovered or focused.",
    code: `<article className="bg-linear-to-r from-violet-500 to-cyan-400 p-px">...</article>`,
  },
  "hover-dropdowns": {
    title: "Hover Dropdowns",
    description: "Open a navigation submenu on hover or keyboard focus.",
    code: `<div className="group"><button>Menu</button><div className="hidden group-hover:block group-focus-within:block">...</div></div>`,
  },
  "hover-sidenav-buttons": {
    title: "Hover Sidenav Buttons",
    description: "Show clear hover and focus states on sidebar navigation actions.",
    code: `<a className="hover:bg-violet-50 focus-visible:ring-2">...</a>`,
  },
  "hover-tabs": {
    title: "Hover Tabs",
    description: "Preview a tab strip that responds to pointer hover and keyboard selection.",
    code: `<button role="tab" onMouseEnter={() => setActiveTab(tab)}>...</button>`,
  },
  "how-do-vertically-center-text": {
    title: "How Do Vertically Center Text",
    description: "Center text vertically with flex alignment, including with unknown content height.",
    code: `<div className="flex items-center">...</div>`,
  },
  "how-to-center-an-image-in-a-div": {
    title: "How to Center an Image in a Div",
    description: "Center an image in a container using grid placement.",
    code: `<div className="grid place-items-center"><img src="..." alt="..." /></div>`,
  },
  "how-to-disable-the-resize-grabber": {
    title: "How to Disable the Resize Grabber",
    description: "Disable manual resizing on a textarea with the CSS resize property.",
    code: `<textarea className="resize-none" />`,
  },
  "how-to-remove-arrows-from-number-input": {
    title: "How to Remove Arrows from Number Inputs",
    description: "Hide browser number steppers in this example while retaining numeric input semantics.",
    code: `<input type="number" className="[appearance:textfield]" />`,
  },
  "how-to-vertically-middle-align-floating-elements": {
    title: "How to Vertically Middle Align Floating Elements",
    description: "Use a flex row with centered alignment for adjacent elements of different heights.",
    code: `<div className="flex items-center gap-3">...</div>`,
  },
  "icon-bar": {
    title: "Icon Bar",
    description: "A compact icon toolbar with accessible labels and an active item.",
    code: `<nav aria-label="Quick actions"><button aria-label="Home"><Home /></button></nav>`,
  },
  "icon-buttons": {
    title: "Icon Buttons",
    description: "Accessible icon-only buttons with clear labels and hover feedback.",
    code: `<button type="button" aria-label="Search"><Search /></button>`,
  },
  "iframe-embed-autoplay": {
    title: "Iframe Embed Autoplay",
    description: "Embed a local, muted animated preview in an iframe without external media requests.",
    code: `<iframe title="Muted autoplay preview" srcDoc={previewDocument} />`,
  },
  "image-burst": {
    title: "Image Burst",
    description: "Reveal a burst of decorative image tiles with a button.",
    code: `<button onClick={() => setBurst(true)}>Reveal image burst</button>`,
  },
  "image-comparison-slider": {
    title: "Image Comparison Slider",
    description: "Drag the slider to compare two labeled image treatments.",
    code: `<input type="range" min="0" max="100" value={split} onChange={handleSplit} />`,
  },
  "image-effects": {
    title: "Image Effects",
    description: "Compare a few simple image treatments such as grayscale, saturation, and blur.",
    code: `<img className="grayscale hover:grayscale-0 transition" alt="..." />`,
  },
  "image-grid": {
    title: "Image Grid",
    description: "A responsive image gallery with consistent aspect ratios.",
    code: `<div className="grid grid-cols-2 gap-3 sm:grid-cols-3">...</div>`,
  },
  "image-magnifier-glass": {
    title: "Image Magnifier Glass",
    description: "Move the pointer over an image to inspect a magnified area.",
    code: `<div onPointerMove={updateLensPosition}><div className="magnifier" /></div>`,
  },
  "image-overlay": {
    title: "Image Overlay",
    description: "Layer a translucent color overlay over an image.",
    code: `<div className="relative"><img alt="..." /><div className="absolute inset-0 bg-slate-950/30" /></div>`,
  },
  "image-overlay-fade": {
    title: "Image Overlay Fade",
    description: "Fade an image caption overlay in when the image is hovered or focused.",
    code: `<div className="group relative"><div className="opacity-0 transition group-hover:opacity-100">...</div></div>`,
  },
  "image-overlay-icon": {
    title: "Image Overlay Icon",
    description: "Reveal an action icon over an image on hover or keyboard focus.",
    code: `<button className="group relative"><img alt="..." /><span className="opacity-0 group-hover:opacity-100">...</span></button>`,
  },
  "image-overlay-slide": {
    title: "Image Overlay Slide",
    description: "Slide a caption panel over an image on hover or focus.",
    code: `<div className="group relative overflow-hidden"><div className="translate-y-full group-hover:translate-y-0">...</div></div>`,
  },
  "image-overlay-text": {
    title: "Image Overlay Text",
    description: "Place readable text over a photograph with a contrast layer.",
    code: `<div className="relative"><img alt="..." /><h2 className="absolute text-white">...</h2></div>`,
  },
  "image-overlay-title": {
    title: "Image Overlay Title",
    description: "Display a title over an image with a dark gradient for legibility.",
    code: `<h2 className="absolute inset-x-0 bottom-0 bg-linear-to-t">...</h2>`,
  },
  "image-overlay-zoom": {
    title: "Image Overlay Zoom",
    description: "Zoom an image and reveal its overlay on hover or focus.",
    code: `<img className="transition-transform group-hover:scale-110" alt="..." />`,
  },
  "image-text": {
    title: "Image Text",
    description: "Combine an image and adjacent text in a responsive feature row.",
    code: `<article className="grid items-center sm:grid-cols-2"><img alt="..." /><p>...</p></article>`,
  },
  "image-text-blocks": {
    title: "Image Text Blocks",
    description: "Present image-led content in a set of aligned feature blocks.",
    code: `<section className="grid gap-4 sm:grid-cols-2">...</section>`,
  },
  "image-zoom": {
    title: "Image Zoom",
    description: "Adjust the image zoom level with a range control.",
    code: `<img style={{ transform: \`scale(\${zoom})\` }} alt="..." />`,
  },
  "infinite-moving-cards": {
    title: "Infinite Moving Cards",
    description: "A continuously moving card strip that respects reduced-motion preferences.",
    code: `<div className="animate-marquee motion-reduce:animate-none">...</div>`,
  },
  "inline-form": {
    title: "Inline Form",
    description: "A compact inline email signup form with a success message.",
    code: `<form className="flex gap-2"><input type="email" required /><button>Subscribe</button></form>`,
  },
  "input-field-in-navbar": {
    title: "Input Field in Navbar",
    description: "Place a compact search input alongside navigation actions.",
    code: `<nav><input type="search" aria-label="Search" /></nav>`,
  },
  "input-focus-autowidth": {
    title: "Input Focus Autowidth",
    description: "Expand a compact search field on focus and restore its width on blur.",
    code: `<input className="w-28 focus:w-64 transition-all" />`,
  },
  labels: {
    title: "Labels",
    description: "Use concise status labels to make states easy to scan.",
    code: `<span className="rounded-full bg-emerald-100 px-2 py-1">Active</span>`,
  },
  "lamp-effect": {
    title: "Lamp Effect",
    description: "Reveal a soft spotlight above a heading.",
    code: `<div className="bg-linear-to-b from-violet-300/40 to-transparent">...</div>`,
  },
  lens: {
    title: "Lens",
    description: "Move a magnified lens across an image to inspect details.",
    code: `<div onPointerMove={updateLens}><div className="rounded-full" /></div>`,
  },
  lightbox: {
    title: "Lightbox",
    description: "Open an image in a focused overlay and close it with a button or Escape.",
    code: `<dialog open><img src={image} alt="Expanded preview" /></dialog>`,
  },
  "link-preview": {
    title: "Link Preview",
    description: "Preview a destination card before following an external link.",
    code: `<a href="https://example.com" target="_blank" rel="noreferrer">...</a>`,
  },
  "list-grid-view": {
    title: "List Grid View",
    description: "Switch the same collection between list and grid layouts.",
    code: `<div className={view === "grid" ? "grid sm:grid-cols-2" : "divide-y"}>...</div>`,
  },
  "list-group": {
    title: "List Group",
    description: "Organize related actions in a bordered, selectable list.",
    code: `<ul className="divide-y">{items.map(renderItem)}</ul>`,
  },
  "list-without-bullets": {
    title: "List Without Bullets",
    description: "Remove list markers while keeping semantic list markup.",
    code: `<ul className="list-none">...</ul>`,
  },
  "load-more": {
    title: "Load More",
    description: "Append another set of sample items when requested.",
    code: `<button onClick={() => setVisibleCount((count) => count + pageSize)}>Load more</button>`,
  },
  loaders: {
    title: "Loaders",
    description: "Compare small CSS loading indicators with accessible status labels.",
    code: `<span role="status" aria-label="Loading" className="animate-spin" />`,
  },
  "loading-buttons": {
    title: "Loading Buttons",
    description: "Show a disabled loading state while a simulated action is in progress.",
    code: `<button disabled aria-busy={loading}>{loading ? "Saving..." : "Save"}</button>`,
  },
  "login-form": {
    title: "Login Form",
    description: "A compact, accessible login form with client-side required fields.",
    code: `<form onSubmit={handleLogin}><input type="email" required /><input type="password" required /></form>`,
  },
  "login-form-in-navbar": {
    title: "Login Form in Navbar",
    description: "Reveal a compact login form from a navigation bar action.",
    code: `<button aria-expanded={open} onClick={() => setOpen(!open)}>Sign in</button>`,
  },
  "macbook-scroll": {
    title: "Macbook Scroll",
    description: "Scroll the screen inside a laptop-style frame.",
    code: `<div className="overflow-y-auto"><LaptopScreen /></div>`,
  },
  "magnetic-effects": {
    title: "Magnetic Effects",
    description: "Move the pointer near the action to see a gentle magnetic-style response.",
    code: `<button onPointerMove={updateOffset} style={{ transform: \`translate(\${x}px,\${y}px)\` }}>...</button>`,
  },
  mailto: {
    title: "Mailto",
    description: "Open the visitor's default email application using a mailto link.",
    code: `<a href="mailto:hello@example.com?subject=Hello">Email us</a>`,
  },
  "markdown-editor": {
    title: "Markdown Editor",
    description: "Edit plain Markdown text and preview it safely without rendering raw HTML.",
    code: `<textarea value={markdown} onChange={handleChange} /><pre>{markdown}</pre>`,
  },
  "material-input": {
    title: "Material Input",
    description: "A floating-label input with a clear focus treatment.",
    code: `<label><input placeholder=" " /><span>Email address</span></label>`,
  },
  "media-queries": {
    title: "Media Queries",
    description: "Resize the preview to see a CSS media query change its layout.",
    code: `@media (min-width: 640px) { .cards { grid-template-columns: repeat(3, 1fr); } }`,
  },
  "meet-the-team": {
    title: "Meet the Team",
    description: "Introduce a small team with profile cards and role labels.",
    code: `<section className="grid gap-4 sm:grid-cols-3">...</section>`,
  },
  "mega-menu": {
    title: "Mega Menu",
    description: "Open a wide navigation panel with grouped links.",
    code: `<button aria-expanded={open}>Products</button><div className="absolute inset-x-0">...</div>`,
  },
  "menu-icon-hamburger": {
    title: "Menu Icon Hamburger",
    description: "Toggle an animated hamburger icon between open and closed states.",
    code: `<button aria-expanded={open} aria-label="Toggle menu"><Menu /></button>`,
  },
  meteors: {
    title: "Meteors",
    description: "A decorative meteor shower animation on a dark background.",
    code: `<span className="animate-[meteor_4s_linear_infinite]">...</span>`,
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    description: "Preview a simple mobile app screen inside a phone frame.",
    code: `<div className="mx-auto w-64 rounded-[2rem] border-8">...</div>`,
  },
  "mobile-menu": {
    title: "Mobile Menu",
    description: "Open and close a responsive mobile navigation panel.",
    code: `<button aria-expanded={open} onClick={() => setOpen(!open)}>Menu</button>`,
  },
  "modal-boxes-dialog-backdrop-pseudo-element": {
    title: "Modal Boxes Dialog Backdrop Pseudo Element",
    description: "Show a dialog with a dimmed backdrop using the native dialog element.",
    code: `<dialog open className="backdrop:bg-slate-950/60">...</dialog>`,
  },
  "modal-images": {
    title: "Modal Images",
    description: "Select a thumbnail to open a larger image in a dismissible dialog.",
    code: `<dialog open><img src={selectedImage} alt="Expanded image" /></dialog>`,
  },
  "more-button-in-nav": {
    title: "More Button in Nav",
    description: "Reveal additional navigation options from a More button.",
    code: `<button aria-expanded={open} onClick={() => setOpen(!open)}>More</button>`,
  },
  "moving-border": {
    title: "Moving Border",
    description: "Move a gradient highlight around the edge of a card.",
    code: `<article className="relative overflow-hidden">...</article>`,
  },
  "multiple-step-form-loader": {
    title: "Multiple Step Form Loader",
    description: "Move through a short multi-step form with a visible progress indicator.",
    code: `<progress value={step} max={steps.length - 1} />`,
  },
  "music-player": {
    title: "Music Player",
    description: "Control a locally generated tone preview with play and pause.",
    code: `<button onClick={togglePlayback}>{playing ? "Pause" : "Play"}</button>`,
  },
  "navbar-on-image": {
    title: "Navbar on Image",
    description: "Layer a high-contrast navigation bar over a hero image.",
    code: `<header className="absolute inset-x-0 top-0 text-white">...</header>`,
  },
  "navbar-with-icons": {
    title: "Navbar with Icons",
    description: "Combine navigation links with labeled icon actions.",
    code: `<nav><a href="/"><Home /> Home</a><button aria-label="Notifications"><Bell /></button></nav>`,
  },
  neumorphism: {
    title: "Neumorphism",
    description: "Create a softly raised interface using paired light and dark shadows.",
    code: `<button className="shadow-[6px_6px_14px_#c8cbd1,-6px_-6px_14px_#fff]">...</button>`,
  },
  newsletter: {
    title: "Newsletter",
    description: "Subscribe with an email address and receive an inline confirmation.",
    code: `<form onSubmit={handleSubscribe}><input type="email" required /><button>Subscribe</button></form>`,
  },
  "next-previous-buttons": {
    title: "Next Previous Buttons",
    description: "Navigate a small set of pages with boundary-aware previous and next actions.",
    code: `<button disabled={page === 0} onClick={() => setPage(page - 1)}>Previous</button>`,
  },
  notes: {
    title: "Notes",
    description: "Write and save a short note locally in the component preview.",
    code: `<textarea value={note} onChange={(event) => setNote(event.target.value)} />`,
  },
  "notification-button": {
    title: "Notification Button",
    description: "Toggle a notification popover and mark its sample items as read.",
    code: `<button aria-expanded={open} onClick={() => setOpen(!open)}><Bell /></button>`,
  },
  "off-canvas-menu": {
    title: "Off-canvas Menu",
    description: "Open a side panel menu that slides into the preview.",
    code: `<aside className={open ? "translate-x-0" : "-translate-x-full"}>...</aside>`,
  },
  "offline-detection": {
    title: "Offline Detection",
    description: "Display the browser's online status and update when connectivity changes.",
    code: `window.addEventListener("online", updateStatus);`,
  },
  "outline-buttons": {
    title: "Outline Buttons",
    description: "A set of outlined buttons with clear hover and focus states.",
    code: `<button className="border border-violet-600 hover:bg-violet-50">Action</button>`,
  },
  "overlay-effect": {
    title: "Overlay Effect",
    description: "Reveal a translucent color overlay over a card on hover or focus.",
    code: `<div className="group relative"><div className="absolute inset-0 bg-violet-900/40 opacity-0 group-hover:opacity-100" /></div>`,
  },
  "pagescroll-menu-smooth": {
    title: "Page Scroll Menu Smooth",
    description: "Navigate to sections with smooth scrolling inside the preview.",
    code: `<a href="#details" onClick={smoothScrollToSection}>Details</a>`,
  },
  pagination: {
    title: "Pagination",
    description: "Navigate a small dataset with working page controls.",
    code: `<button disabled={page === 0} onClick={() => setPage(page - 1)}>Previous</button>`,
  },
  "parallax-scroll": {
    title: "Parallax Scroll",
    description: "Scroll the panel to move decorative layers at different speeds.",
    code: `<div onScroll={updateParallax} style={{ transform: \`translateY(\${offset}px)\` }}>...</div>`,
  },
  particles: {
    title: "Particles",
    description: "A lightweight decorative particle field built from CSS elements.",
    code: `<div aria-hidden="true">{particles.map(renderParticle)}</div>`,
  },
  "password-validation": {
    title: "Password Validation",
    description: "Check password length and character requirements as the user types.",
    code: `<input type="password" onChange={(event) => validatePassword(event.target.value)} />`,
  },
  "pattern-lock": {
    title: "Pattern Lock",
    description: "Select a sequence of nodes to create a simple demo unlock pattern.",
    code: `<button aria-pressed={selectedNodes.includes(node)} onClick={() => selectNode(node)}>...</button>`,
  },
  "pill-buttons": {
    title: "Pill Buttons",
    description: "Rounded pill-shaped actions with selected and unselected states.",
    code: `<button className="rounded-full px-4 py-2">Action</button>`,
  },
  "pill-navigation": {
    title: "Pill Navigation",
    description: "Switch between navigation items styled as a pill group.",
    code: `<nav className="flex rounded-full bg-slate-100">{tabs.map(renderTab)}</nav>`,
  },
  "place-image-or-video-inside-silhouette": {
    title: "Place Image or Video Inside Silhouette",
    description: "Clip a decorative image into a simple silhouette using CSS masking.",
    code: `<div className="[clip-path:polygon(50%_0,100%_100%,0_100%)]">...</div>`,
  },
  "placeholder-color-and-vanish-input": {
    title: "Placeholder Color and Vanish Input",
    description: "Style an input placeholder that fades as the field receives focus.",
    code: `<input className="placeholder:text-slate-400 focus:placeholder:opacity-0" />`,
  },
  "play-iframe-embedded-youtube-video-on-click-of-a-button": {
    title: "Play Iframe Embedded YouTube Video on Click of a Button",
    description: "Load an embedded YouTube player only after the user activates the button.",
    code: `<button onClick={() => setPlay(true)}>Play video</button>{play && <iframe src={embedUrl} />}`,
  },
  popovers: {
    title: "Popovers",
    description: "Open a contextual popover from a button and dismiss it with a second click.",
    code: `<button aria-expanded={open} onClick={() => setOpen(!open)}>Details</button>`,
  },
  "popup-chat-window": {
    title: "Popup Chat Window",
    description: "Toggle a small chat panel with a local demo message form.",
    code: `<button aria-expanded={open} onClick={() => setOpen(!open)}>Chat</button>`,
  },
  "popup-form": {
    title: "Popup Form",
    description: "Open a modal contact form and display a local submission confirmation.",
    code: `<form onSubmit={handleSubmit}><input type="email" required /></form>`,
  },
  "popup-to-show-youtube-video-inside-iframe-closed": {
    title: "Popup to Show YouTube Video Inside Iframe",
    description: "Open a video dialog on demand; the iframe is created only after the user clicks play.",
    code: `<button onClick={() => setOpen(true)}>Watch video</button>{open && <iframe src={embedUrl} />}`,
  },
  popups: {
    title: "Popups",
    description: "Show and dismiss a lightweight popup card inside the preview.",
    code: `<button onClick={() => setOpen(!open)}>Toggle popup</button>`,
  },
  "portfolio-filtering": {
    title: "Portfolio Filtering",
    description: "Filter project cards by category.",
    code: `{projects.filter(matchesCategory).map(renderProject)}`,
  },
  "portfolio-gallery": {
    title: "Portfolio Gallery",
    description: "Browse a responsive image-led portfolio gallery.",
    code: `<div className="grid gap-3 sm:grid-cols-3">{projects.map(renderProject)}</div>`,
  },
  "portrait-image-effect": {
    title: "Portrait Image Effect",
    description: "Apply a visual duotone and hover treatment to a portrait image.",
    code: `<img className="grayscale transition hover:grayscale-0" alt="Portrait" />`,
  },
  "prefer-color-scheme": {
    title: "Prefer Color Scheme",
    description: "Respect the operating system light or dark color preference.",
    code: `@media (prefers-color-scheme: dark) { .panel { background: #0f172a; } }`,
  },
  preloader: {
    title: "Preloader",
    description: "Run a short loading sequence before revealing the sample content.",
    code: `<div role="status" aria-label="Loading"><Spinner /></div>`,
  },
  "pricing-table": {
    title: "Pricing Table",
    description: "Compare sample plans and highlight a recommended tier.",
    code: `<section className="grid gap-4 sm:grid-cols-3">{plans.map(renderPlan)}</section>`,
  },
  "product-card": {
    title: "Product Card",
    description: "Show product details, pricing, and an add-to-cart action.",
    code: `<article><img alt="Product" /><button onClick={addToCart}>Add to cart</button></article>`,
  },
  "profile-card": {
    title: "Profile Card",
    description: "Present a profile with an avatar, role, and contact action.",
    code: `<article><img alt="Profile avatar" /><h2>Name</h2></article>`,
  },
  "progress-bars": {
    title: "Progress Bars",
    description: "Display accessible progress indicators for sample tasks.",
    code: `<progress aria-label="Project progress" value={72} max={100} />`,
  },
  "pseudo-before-and-after": {
    title: "Pseudo Before and After",
    description: "Use CSS pseudo-elements to decorate a heading without extra markup.",
    code: `<h2 className="before:content-['✦'] after:content-['✦']">...</h2>`,
  },
  "qr-scanner": {
    title: "QR Scanner",
    description: "Preview a QR scanner interface and simulate reading a sample code without accessing a camera.",
    code: `<button onClick={() => setScanned(true)}>Simulate QR scan</button>`,
  },
  "quantity-increment-decrement": {
    title: "Quantity Increment Decrement",
    description: "Adjust a quantity with accessible increment and decrement controls and clear minimum and maximum values.",
    code: `<button onClick={() => setQuantity((quantity) => Math.max(1, quantity - 1))}>−</button>`,
  },
  quiz: {
    title: "Quiz",
    description: "Choose an answer, submit it, and see immediate feedback for a sample question.",
    code: `<form onSubmit={checkAnswer}><fieldset>{answers.map(renderAnswer)}</fieldset></form>`,
  },
  quotation: {
    title: "Quotation",
    description: "Present a quotation with semantic blockquote markup and a clear attribution.",
    code: `<figure><blockquote>...</blockquote><figcaption>— Author</figcaption></figure>`,
  },
  "quote-slideshow": {
    title: "Quote Slideshow",
    description: "Browse a short collection of attributed quotes with previous and next controls.",
    code: `<button onClick={() => setQuoteIndex((index) => (index + 1) % quotes.length)}>Next quote</button>`,
  },
  "range-sliders": {
    title: "Range Sliders",
    description: "Adjust range inputs and see their current values update immediately.",
    code: `<input type="range" min={0} max={100} value={value} onChange={handleChange} />`,
  },
  "read-more": {
    title: "Read More",
    description: "Expand or collapse supplementary text using a native disclosure control.",
    code: `<details><summary>Read more</summary><p>Additional content</p></details>`,
  },
  "redirect-webpage": {
    title: "Redirect Webpage",
    description: "Preview a safe external link that opens the example destination in a new tab.",
    code: `<a href="https://example.com" target="_blank" rel="noreferrer">Continue to example.com</a>`,
  },
  "register-form": {
    title: "Register Form",
    description: "Create a small registration form with required fields, email validation, and confirmation feedback.",
    code: `<form onSubmit={handleRegister}><input type="email" required /><input type="password" required /></form>`,
  },
  remove: {
    title: "Remove",
    description: "Remove a sample item from the list and restore it with the reset action.",
    code: `<button onClick={() => setItems((items) => items.filter((item) => item.id !== id))}>Remove</button>`,
  },
  "remove-property": {
    title: "Remove Property",
    description: "Remove one property from a sample object and restore the original object.",
    code: `const { category, ...remaining } = item;`,
  },
  "remove-class": {
    title: "Remove Class",
    description: "Toggle a utility class on a sample element to compare its styled and unstyled states.",
    code: `<button onClick={() => setHighlighted((value) => !value)}>Toggle class</button>`,
  },
  "responsive-floats": {
    title: "Responsive Floats",
    description: "Float an image beside text on larger screens and let it return to normal flow on small screens.",
    code: `<img className="mb-3 w-24 sm:float-left sm:mr-4" alt="..." />`,
  },
  "responsive-form": {
    title: "Responsive Form",
    description: "Stack form controls on narrow screens and align them in a row when space allows.",
    code: `<form className="flex flex-col gap-3 sm:flex-row">...</form>`,
  },
  "responsive-header": {
    title: "Responsive Header",
    description: "Adapt a header layout from stacked on small screens to a horizontal navigation on wider screens.",
    code: `<header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">...</header>`,
  },
  "responsive-iframes": {
    title: "Responsive Iframes",
    description: "Keep an embedded preview within a responsive 16:9 container.",
    code: `<div className="aspect-video w-full"><iframe title="Preview" srcDoc="..." /></div>`,
  },
  "responsive-images": {
    title: "Responsive Images",
    description: "Scale an image to its container while preserving its aspect ratio.",
    code: `<img className="h-auto max-w-full object-cover" alt="..." />`,
  },
  "responsive-navbar-with-dropdown": {
    title: "Responsive Navbar with Dropdown",
    description: "Combine responsive navigation links with an accessible dropdown menu.",
    code: `<button aria-expanded={open} onClick={() => setOpen((value) => !value)}>Resources</button>`,
  },
  "responsive-sidebar": {
    title: "Responsive Sidebar",
    description: "Toggle a compact sidebar on small screens and keep it visible beside content on larger screens.",
    code: `<aside className={open ? "block" : "hidden sm:block"}>...</aside>`,
  },
  "responsive-tables": {
    title: "Responsive Tables",
    description: "Allow wide tabular content to scroll horizontally on narrow screens.",
    code: `<div className="max-w-full overflow-x-auto"><table>...</table></div>`,
  },
  "responsive-text": {
    title: "Responsive Text",
    description: "Scale a heading smoothly across viewport sizes with responsive typography.",
    code: `<h2 className="text-2xl sm:text-4xl lg:text-5xl">Responsive heading</h2>`,
  },
  "right-aligned-menu-links": {
    title: "Right Aligned Menu Links",
    description: "Use flexible spacing to align navigation links to the right side of a menu.",
    code: `<nav className="flex items-center"><a className="ml-auto">Account</a></nav>`,
  },
  "round-buttons": {
    title: "Round Buttons",
    description: "Compare circular icon buttons and rounded pill-shaped actions.",
    code: `<button className="rounded-full" aria-label="Add">+</button>`,
  },
  "rounded-images": {
    title: "Rounded Images",
    description: "Compare common rounded corner and circular image treatments.",
    code: `<img className="rounded-2xl" alt="..." />`,
  },
  "scroll-drawing": {
    title: "Scroll Drawing",
    description: "Reveal a decorative path as the preview scrolls through its content.",
    code: `<svg><path pathLength="1" className="animate-[draw_2s_linear_forwards]" /></svg>`,
  },
  "scroll-indicator": {
    title: "Scroll Indicator",
    description: "Show a progress indicator that responds to scrolling in the preview.",
    code: `<div role="progressbar" aria-valuenow={progress} style={{ width: \`\${progress}%\` }} />`,
  },
  "scroll-page-horizontally-with-mouse-wheel": {
    title: "Scroll Page Horizontally with Mouse Wheel",
    description: "Use vertical wheel input to scroll a horizontal content strip.",
    code: `<div onWheel={(event) => { event.currentTarget.scrollLeft += event.deltaY; }}>...</div>`,
  },
  "scroll-to-top-bottom": {
    title: "Scroll to Top Bottom",
    description: "Move a scrollable preview to its start or end with accessible controls.",
    code: `<button onClick={() => container.scrollTo({ top: 0, behavior: "smooth" })}>Top</button>`,
  },
  "search-bar": {
    title: "Search Bar",
    description: "Filter a sample collection while entering a search query.",
    code: `<input type="search" value={query} onChange={(event) => setQuery(event.target.value)} />`,
  },
  "search-button": {
    title: "Search Button",
    description: "Open and focus a compact search field with a search action button.",
    code: `<button aria-label="Search" onClick={() => setSearchOpen(true)}><Search /></button>`,
  },
  "search-menu": {
    title: "Search Menu",
    description: "Open a searchable menu and filter its sample destinations.",
    code: `<input type="search" aria-label="Search menu" />`,
  },
  "section-counter": {
    title: "Section Counter",
    description: "Display numbered sections and their total count.",
    code: `{sections.map((section, index) => <h2>{index + 1}. {section}</h2>)}`,
  },
  selectable: {
    title: "Selectable",
    description: "Select and deselect sample options with clear selected states.",
    code: `<button aria-pressed={selected} onClick={() => setSelected(!selected)}>Select</button>`,
  },
  "shake-an-image": {
    title: "Shake an Image",
    description: "Trigger a short shake animation on a sample image.",
    code: `<img className={shaking ? "animate-[shake_.4s_ease-in-out]" : ""} alt="..." />`,
  },
  shapes: {
    title: "Shapes",
    description: "Explore basic geometric shapes created with CSS.",
    code: `<div className="h-16 w-16 rotate-45 bg-violet-500" />`,
  },
  "share-box-social-media": {
    title: "Share Box Social Media",
    description: "Present share actions for common social platforms.",
    code: `<div role="group" aria-label="Share options">{platforms.map(renderShareButton)}</div>`,
  },
  "shooting-stars": {
    title: "Shooting Stars",
    description: "Display a decorative night sky with animated shooting stars.",
    code: `<span className="animate-[shoot_3s_ease-in_infinite]" aria-hidden="true" />`,
  },
  show: {
    title: "Show",
    description: "Reveal sample content with a button and expose its current state.",
    code: `<button onClick={() => setVisible(true)}>Show</button>`,
  },
  "show-and-hide-div-on-checkbox": {
    title: "Show and Hide Div on Checkbox",
    description: "Toggle supplementary content using a labeled checkbox.",
    code: `<input type="checkbox" checked={visible} onChange={(event) => setVisible(event.target.checked)} />`,
  },
  "show-force-scrollbar": {
    title: "Show/Force Scrollbar",
    description: "Compare scrollable content with an always-visible scrollbar.",
    code: `<div className="h-40 overflow-y-scroll">Scrollable content</div>`,
  },
  "shrink-header-on-scroll": {
    title: "Shrink Header on Scroll",
    description: "Demonstrate a header that compacts after scrolling its preview.",
    code: `<header className={scrolled ? "py-2" : "py-6"}>...</header>`,
  },
  "shrink-navigation-menu-on-scroll": {
    title: "Shrink Navigation Menu on Scroll",
    description: "Reduce the navigation menu's spacing when its content is scrolled.",
    code: `<nav className={scrolled ? "gap-2 py-2" : "gap-6 py-5"}>...</nav>`,
  },
  "side-by-side-images": {
    title: "Side by Side Images",
    description: "Arrange images in columns that adapt to narrow viewports.",
    code: `<div className="grid grid-cols-1 gap-3 sm:grid-cols-2"><img /><img /></div>`,
  },
  "slide-down-bar-on-scroll": {
    title: "Slide Down Bar on Scroll",
    description: "Reveal a compact notification bar when the preview is scrolled.",
    code: `<div className={scrolled ? "translate-y-0" : "-translate-y-full"}>...</div>`,
  },
  "side-navigation": {
    title: "Side Navigation",
    description: "Navigate a sample content panel with a compact side menu.",
    code: `<nav aria-label="Sections"><a href="#overview">Overview</a></nav>`,
  },
  "side-by-side-tables": {
    title: "Side-by-Side Tables",
    description: "Compare two sample tables in a responsive grid.",
    code: `<div className="grid gap-4 md:grid-cols-2"><table>...</table><table>...</table></div>`,
  },
  "signup-form": {
    title: "Signup Form",
    description: "Collect an email address and show a local signup confirmation.",
    code: `<form onSubmit={handleSignup}><input type="email" required /><button>Sign up</button></form>`,
  },
  "single-page-with-smooth-scrolling-fixed-navigation": {
    title: "Single Page with Smooth Scrolling Fixed Navigation",
    description: "Combine fixed in-preview navigation with smooth-scrolling sections.",
    code: `<a href="#section" onClick={(event) => scrollToSection(event, "section")}>Section</a>`,
  },
  "skills-bars": {
    title: "Skills Bars",
    description: "Present named skills with accessible progress bars.",
    code: `<div role="progressbar" aria-label="Design skill" aria-valuenow={82}>...</div>`,
  },
  "slide-down": {
    title: "Slide Down",
    description: "Reveal a panel with a vertical slide transition.",
    code: `<div className={open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}>...</div>`,
  },
  "slideshow-carousel": {
    title: "Slideshow Carousel",
    description: "Browse a carousel of sample slides with previous and next controls.",
    code: `<button onClick={() => setSlide((slide + 1) % slides.length)}>Next</button>`,
  },
  "slideshow-gallery": {
    title: "Slideshow Gallery",
    description: "Select gallery thumbnails to update the featured image.",
    code: `<button onClick={() => setActiveImage(index)}><img alt={image.title} /></button>`,
  },
  "slideshow-with-audio-player": {
    title: "Slideshow with Audio Player",
    description: "Pair a visual slideshow with a sample audio-player control panel.",
    code: `<button aria-label={playing ? "Pause" : "Play"} onClick={togglePlayback}>...</button>`,
  },
  "slide-toggle": {
    title: "Slide Toggle",
    description: "Toggle a panel open and closed with a height transition.",
    code: `<div className={open ? "max-h-40" : "max-h-0"}>...</div>`,
  },
  "slide-up": {
    title: "Slide Up",
    description: "Hide a panel with an upward slide transition.",
    code: `<div className={open ? "translate-y-0" : "-translate-y-4"}>...</div>`,
  },
  "smooth-scrolling": {
    title: "Smooth Scrolling",
    description: "Move between sections in a scrollable preview with smooth behavior.",
    code: `<button onClick={() => target.scrollIntoView({ behavior: "smooth" })}>Go to section</button>`,
  },
  snackbar: {
    title: "Snackbar",
    description: "Show a temporary status message with a dismiss action.",
    code: `<div role="status">Changes saved <button onClick={dismiss}>Dismiss</button></div>`,
  },
  "social-login-form": {
    title: "Social Login Form",
    description: "Preview a login form with sample social sign-in actions.",
    code: `<button type="button">Continue with Google</button>`,
  },
  "social-media-buttons": {
    title: "Social Media Buttons",
    description: "Display labeled social links with accessible names.",
    code: `<a href="https://example.com" aria-label="Share on social media">...</a>`,
  },
  "sort-list": {
    title: "Sort List",
    description: "Sort a sample list alphabetically in ascending or descending order.",
    code: `{items.toSorted((a, b) => direction * a.localeCompare(b))}`,
  },
  "sort-table": {
    title: "Sort Table",
    description: "Sort table rows by a selected column.",
    code: `<th><button onClick={() => sortBy("name")}>Name</button></th>`,
  },
  sparkles: {
    title: "Sparkles",
    description: "Add a small decorative sparkle animation to a heading.",
    code: `<span className="animate-pulse" aria-hidden="true">✦</span>`,
  },
  "speed-meter": {
    title: "Speed Meter",
    description: "Show a meter with a value, units, and accessible progress semantics.",
    code: `<meter min={0} max={100} value={speed}>${"{speed}"} km/h</meter>`,
  },
  "split-buttons": {
    title: "Split Buttons",
    description: "Combine a primary action with a separate dropdown affordance.",
    code: `<div className="inline-flex"><button>Save</button><button aria-label="More save options">⌄</button></div>`,
  },
  "split-screen": {
    title: "Split Screen",
    description: "Divide a preview into two complementary responsive panels.",
    code: `<div className="grid sm:grid-cols-2"><section>...</section><section>...</section></div>`,
  },
  spotlight: {
    title: "Spotlight",
    description: "Highlight a card with a soft radial spotlight that follows pointer movement.",
    code: `<article style={{ background: \`radial-gradient(circle at \${x}% \${y}%, ...)\` }}>...</article>`,
  },
  "spotlight-new": {
    title: "Spotlight New",
    description: "Create a layered spotlight card with a luminous accent and highlighted content.",
    code: `<div className="relative overflow-hidden bg-[radial-gradient(...)]">...</div>`,
  },
  sprite: {
    title: "Sprite",
    description: "Preview a sprite sheet by shifting its background position.",
    code: `<div role="img" aria-label="Sprite frame" style={{ backgroundPositionX: position }} />`,
  },
  "sprite-spin": {
    title: "Sprite Spin",
    description: "Cycle through sprite-like frames to create a simple spin animation.",
    code: `<div className="animate-[spin_1s_steps(8)_infinite]">✦</div>`,
  },
  "stacked-form": {
    title: "Stacked Form",
    description: "Arrange labeled form fields vertically with consistent spacing.",
    code: `<form className="grid gap-4"><label>Name<input /></label><label>Email<input /></label></form>`,
  },
  "star-rating": {
    title: "Star Rating",
    description: "Select a rating from one to five stars using keyboard-accessible controls.",
    code: `<button aria-label="Rate 5 out of 5" aria-pressed={rating === 5}>★</button>`,
  },
  "sticky-element": {
    title: "Sticky Element",
    description: "Scroll the panel to see an element stick within its container.",
    code: `<div className="sticky top-0">Sticky element</div>`,
  },
  "sticky-footer": {
    title: "Sticky Footer",
    description: "Keep a footer at the bottom of the preview when content is short.",
    code: `<div className="flex min-h-64 flex-col"><main className="flex-1">...</main><footer>...</footer></div>`,
  },
  "sticky-header": {
    title: "Sticky Header",
    description: "Keep a header visible at the top of a scrollable content panel.",
    code: `<header className="sticky top-0">...</header>`,
  },
  "sticky-image": {
    title: "Sticky Image",
    description: "Pin an image within its scrollable container while adjacent content moves.",
    code: `<img className="sticky top-4" alt="..." />`,
  },
  "sticky-navbar": {
    title: "Sticky Navbar",
    description: "Keep a navigation bar pinned to the top of a scrollable preview.",
    code: `<nav className="sticky top-0 z-10">...</nav>`,
  },
  "sticky-scroll-reveal": {
    title: "Sticky Scroll Reveal",
    description: "Scroll through a sequence of content held beneath a sticky heading.",
    code: `<h2 className="sticky top-0">Chapter</h2>`,
  },
  "sticky-social-bar": {
    title: "Sticky Social Bar",
    description: "Keep a compact social action bar visible alongside scrolling content.",
    code: `<div className="sticky top-4 flex gap-2">...</div>`,
  },
  "stroke-text": {
    title: "Stroke Text",
    description: "Create outlined typography with a transparent fill and text stroke.",
    code: `<h2 className="[-webkit-text-stroke:1px_currentColor] text-transparent">Outline</h2>`,
  },
  "style-hr": {
    title: "Style HR",
    description: "Compare decorative horizontal rules for separating content.",
    code: `<hr className="h-px border-0 bg-gradient-to-r from-transparent via-violet-400 to-transparent" />`,
  },
  "subnavigation-menu": {
    title: "Subnavigation Menu",
    description: "Show a secondary navigation row for the active section.",
    code: `<nav aria-label="Section navigation">{links.map(renderLink)}</nav>`,
  },
  svg: {
    title: "SVG",
    description: "Compose a scalable vector graphic from accessible SVG shapes.",
    code: `<svg viewBox="0 0 120 80" role="img" aria-label="Decorative shapes">...</svg>`,
  },
  "svg-mask-effect": {
    title: "SVG Mask Effect",
    description: "Use an SVG mask to reveal a gradient-filled shape.",
    code: `<svg><mask id="shape-mask">...</mask><rect mask="url(#shape-mask)" /></svg>`,
  },
  "tab-gallery": {
    title: "Tab Gallery",
    description: "Select a thumbnail tab to update the featured gallery image and caption.",
    code: `<button role="tab" aria-selected={active} onClick={() => setActive(index)}>...</button>`,
  },
  tabbed: {
    title: "Tabbed",
    description: "Switch between accessible tabs and their corresponding content panels.",
    code: `<button role="tab" aria-selected={selected} onClick={() => setTab(tab)}>Overview</button>`,
  },
  table: {
    title: "Table",
    description: "Present sample data in a semantic table with a caption and labeled columns.",
    code: `<table><caption>Project status</caption><thead>...</thead><tbody>...</tbody></table>`,
  },
  tel: {
    title: "Tel",
    description: "Create a telephone link that can open a device's calling interface.",
    code: `<a href="tel:+15550102020">Call (555) 010-2020</a>`,
  },
  testimonials: {
    title: "Testimonials",
    description: "Show customer feedback with attribution and accessible quote markup.",
    code: `<figure><blockquote>...</blockquote><figcaption>Customer name</figcaption></figure>`,
  },
  "text-buttons": {
    title: "Text Buttons",
    description: "Compare lightweight text-only button treatments and focus states.",
    code: `<button className="text-violet-700 hover:underline">Learn more</button>`,
  },
  "text-generate-effect": {
    title: "Text Generate Effect",
    description: "Reveal a short line of text progressively with a gentle fade.",
    code: `<span className="animate-[fadeIn_.4s_ease-out_both]">Generated text</span>`,
  },
  "text-hover-effect": {
    title: "Text Hover Effect",
    description: "Transition text color and decoration when a pointer hovers over it.",
    code: `<a className="transition-colors hover:text-violet-700 hover:underline">Hover me</a>`,
  },
  "text-image-effect": {
    title: "Text Image Effect",
    description: "Clip a colorful image-like gradient into display text.",
    code: `<h2 className="bg-gradient-to-r from-violet-600 to-sky-400 bg-clip-text text-transparent">...</h2>`,
  },
  "text-reveal-card": {
    title: "Text Reveal Card",
    description: "Reveal supporting card text when the card is hovered or focused.",
    code: `<article className="group"><p className="opacity-0 transition group-hover:opacity-100">Details</p></article>`,
  },
  "text-rotator": {
    title: "Text Rotator",
    description: "Cycle through a set of short phrases using an explicit control.",
    code: `<button onClick={() => setIndex((index + 1) % phrases.length)}>Next phrase</button>`,
  },
  "text-selection-color": {
    title: "Text Selection Color",
    description: "Customize the selection highlight color for sample text.",
    code: `<p className="selection:bg-violet-200 selection:text-violet-950">Select this text.</p>`,
  },
  thumbnails: {
    title: "Thumbnails",
    description: "Choose a thumbnail to change the featured image preview.",
    code: `<button onClick={() => setActiveImage(index)}><img alt={image.label} /></button>`,
  },
  "ticker-marquee": {
    title: "Ticker Marquee",
    description: "Scroll a repeating row of sample updates with reduced-motion support.",
    code: `<div className="overflow-hidden"><div className="animate-[marquee_20s_linear_infinite]">...</div></div>`,
  },
  timeline: {
    title: "Timeline",
    description: "Display milestones in chronological order along a visual timeline.",
    code: `<ol>{events.map((event) => <li><time>{event.date}</time>{event.title}</li>)}</ol>`,
  },
  "to-do-list": {
    title: "To Do List",
    description: "Check off tasks and add or remove items in a small to-do list.",
    code: `<label><input type="checkbox" checked={task.done} onChange={toggleTask} />{task.title}</label>`,
  },
  toasts: {
    title: "Toasts",
    description: "Trigger and dismiss a concise status toast within the preview.",
    code: `<div role="status">Saved successfully <button onClick={dismiss}>Dismiss</button></div>`,
  },
  toggle: {
    title: "Toggle",
    description: "Switch a setting on and off with an accessible toggle control.",
    code: `<button role="switch" aria-checked={enabled} onClick={() => setEnabled(!enabled)}>...</button>`,
  },
  "toggle-darkmode": {
    title: "Toggle Darkmode",
    description: "Switch the preview card between light and dark themes.",
    code: `<button onClick={() => setDark((dark) => !dark)}>Toggle theme</button>`,
  },
  "toggle-like-and-dislike": {
    title: "Toggle Like and Dislike",
    description: "Choose like, dislike, or clear a reaction using toggle buttons.",
    code: `<button aria-pressed={reaction === "like"} onClick={() => setReaction("like")}>Like</button>`,
  },
  "toggle-password-visibility": {
    title: "Toggle Password Visibility",
    description: "Reveal or conceal a password field with an accessible visibility control.",
    code: `<input type={visible ? "text" : "password"} /><button aria-pressed={visible}>Show password</button>`,
  },
  "toggle-show-hide": {
    title: "Toggle Show and Hide",
    description: "Show or hide a content panel with one toggle button.",
    code: `<button aria-expanded={open} onClick={() => setOpen(!open)}>Show / hide</button>`,
  },
  "toggle-switch-turn-on-and-off": {
    title: "Toggle Switch Turn On and Off",
    description: "Use a labeled switch to turn a sample setting on and off.",
    code: `<button role="switch" aria-checked={on} onClick={() => setOn(!on)}>...</button>`,
  },
  "toggle-text": {
    title: "Toggle Text",
    description: "Change a label between two text states when activated.",
    code: `<button onClick={() => setEnabled(!enabled)}>{enabled ? "Enabled" : "Disabled"}</button>`,
  },
  "toggle-class": {
    title: "ToggleClass",
    description: "Add and remove a styling class from a sample element.",
    code: `<div className={active ? "bg-violet-100" : "bg-slate-100"}>...</div>`,
  },
  "toggling-styles-on-label-active-focus-for-input-field": {
    title: "Toggling Styles on Label Active Focus for Input Field",
    description: "Style an input label when its field is focused or contains a value.",
    code: `<label className="has-[:focus]:text-violet-700">Email<input type="email" /></label>`,
  },
  tooltips: {
    title: "Tooltips",
    description: "Reveal supplemental help text on hover and keyboard focus.",
    code: `<span className="group relative"><button>Help</button><span role="tooltip">Helpful details</span></span>`,
  },
  "top-navigation": {
    title: "Top Navigation",
    description: "Arrange common destinations and an action in a horizontal top bar.",
    code: `<nav aria-label="Main"><a href="#home">Home</a><a href="#about">About</a></nav>`,
  },
  "tracing-beam": {
    title: "Tracing Beam",
    description: "Decorate a vertical timeline with a gradient tracing line.",
    code: `<div className="absolute left-3 h-full bg-gradient-to-b from-violet-500 to-transparent" />`,
  },
  "transition-on-hover": {
    title: "Transition on Hover",
    description: "Compare a smooth color and elevation transition on pointer hover.",
    code: `<button className="transition duration-300 hover:-translate-y-1 hover:bg-violet-700">Hover me</button>`,
  },
  "transparent-image-text": {
    title: "Transparent Image Text",
    description: "Overlay readable text on an image with a translucent backing.",
    code: `<div className="bg-black/50 p-4 text-white">Image caption</div>`,
  },
  "tree-view": {
    title: "Tree View",
    description: "Expand and collapse nested items in a small file tree.",
    code: `<button aria-expanded={open} onClick={() => setOpen(!open)}>Folder</button>`,
  },
  "trigger-button-on-enter": {
    title: "Trigger Button on Enter",
    description: "Activate a sample action by pressing Enter in the input field.",
    code: `<input onKeyDown={(event) => event.key === "Enter" && activate()} />`,
  },
  "truncate-string-with-ellipsis": {
    title: "Truncate String with Ellipsis",
    description: "Clip a long single-line string with an ellipsis while preserving its full value in a title.",
    code: `<p className="truncate" title={text}>{text}</p>`,
  },
  "turn-off-autocomplete": {
    title: "Turn off Autocomplete",
    description: "Preview a form field configured not to request browser autocomplete.",
    code: `<input name="demo-code" autoComplete="off" />`,
  },
  "turn-off-spellcheck": {
    title: "Turn off Spellcheck",
    description: "Preview editable text with browser spellchecking disabled.",
    code: `<textarea spellCheck={false} />`,
  },
  "typewriter-effect": {
    title: "Typewriter Effect",
    description: "Animate a sample phrase with a CSS caret and typewriter-style reveal.",
    code: `<span className="animate-[typing_3s_steps(24)_both]">A short phrase...</span>`,
  },
  "typical-device-breakpoints": {
    title: "Typical Device Breakpoints",
    description: "Show responsive labels that change at common Tailwind breakpoints.",
    code: `<span className="sm:hidden">Small</span><span className="hidden sm:inline lg:hidden">Tablet</span>`,
  },
  "user-rating": {
    title: "User Rating",
    description: "Show a user's average rating and let visitors submit their own five-star rating.",
    code: `<button aria-label={\`Rate \${value} out of 5\`} aria-pressed={rating === value} onClick={() => setRating(value)}>★</button>`,
  },
  "vertical-button-group": {
    title: "Vertical Button Group",
    description: "Stack related actions in a compact vertical button group.",
    code: `<div role="group" aria-label="View options" className="flex flex-col">{actions.map(renderAction)}</div>`,
  },
  "vertical-line": {
    title: "Vertical Line",
    description: "Separate content with a decorative vertical rule.",
    code: `<span aria-hidden="true" className="h-16 w-px bg-slate-300" />`,
  },
  "vertical-menu": {
    title: "Vertical Menu",
    description: "Navigate sample sections using a vertical, selectable menu.",
    code: `<nav aria-label="Sections">{sections.map(renderSectionLink)}</nav>`,
  },
  video: {
    title: "Video",
    description: "Preview a video player layout with an illustrative poster and playback controls.",
    code: `<video controls poster="/preview.jpg"><source src="/video.mp4" type="video/mp4" /></video>`,
  },
  vortex: {
    title: "Vortex",
    description: "Create a decorative vortex from animated gradient rings.",
    code: `<div aria-hidden="true" className="animate-[spin_8s_linear_infinite] rounded-full border">...</div>`,
  },
  "wrap-text": {
    title: "Wrap Text",
    description: "Float a decorative image beside text so the paragraph wraps around it.",
    code: `<img className="float-left mr-4 h-20 w-20 rounded-lg" alt="" /><p>Text wraps around the image.</p>`,
  },
  "zebra-striping-a-table": {
    title: "Zebra Striping a Table",
    description: "Apply alternating row backgrounds to make table data easier to scan.",
    code: `<tbody>{rows.map((row, index) => <tr className={index % 2 ? "bg-slate-50" : "bg-white"}>...</tr>)}</tbody>`,
  },
  "zig-zag-with-layout": {
    title: "Zig Zag with Layout",
    description: "Alternate image and text placement across a responsive sequence of content rows.",
    code: `<section className="grid gap-4 md:grid-cols-2 even:[&>img]:md:order-2">...</section>`,
  },
  "zoom-hover": {
    title: "Zoom Hover",
    description: "Scale an image smoothly when hovered or focused.",
    code: `<img className="transition-transform duration-300 hover:scale-110" alt="..." />`,
  },
  primitives: {
    title: "Primitives",
    description: "An overview of JavaScript's seven primitive types, with examples and typeof results.",
    code: `const values = ["hello", 42, true, 42n, Symbol("id"), undefined, null];`,
  },
  string: {
    title: "String",
    description: "Strings are immutable sequences of text and have the typeof result \"string\".",
    code: `const greeting = "Hello, JavaScript";\ntypeof greeting; // "string"`,
  },
  number: {
    title: "Number",
    description: "The Number type represents integers and floating-point values, including special values such as NaN and Infinity.",
    code: `const score = 42;\ntypeof score; // "number"`,
  },
  boolean: {
    title: "Boolean",
    description: "Booleans represent the logical values true and false.",
    code: `const isReady = true;\ntypeof isReady; // "boolean"`,
  },
  bigint: {
    title: "BigInt",
    description: "BigInt represents integers beyond Number's safe integer range; use the n suffix and do not mix it directly with Number arithmetic.",
    code: `const largeValue = 9007199254740993n;\ntypeof largeValue; // "bigint"`,
  },
  symbol: {
    title: "Symbol",
    description: "Each Symbol() call creates a unique primitive value, often used as a collision-resistant object key.",
    code: `const key = Symbol("id");\ntypeof key; // "symbol"`,
  },
  undefined: {
    title: "undefined",
    description: "undefined is the value of an uninitialized variable and of a missing object property.",
    code: `let result;\ntypeof result; // "undefined"`,
  },
  null: {
    title: "null",
    description: "null represents an intentional absence of a value. The typeof null result is \"object\" for historical compatibility.",
    code: `const selected = null;\ntypeof selected; // "object"`,
  },
  "javascript-array-reference": {
    title: "JavaScript Array Reference",
    description: "Browse common JavaScript Array constructors, properties, and methods with runnable examples.",
    code: `const values = [1, 2, 3, 4];`,
  },
  ...arrayReferenceDetails,
  "javascript-boolean-reference": {
    title: "JavaScript Boolean Reference",
    description: "Browse the JavaScript Boolean constructor, properties, and methods with runnable examples.",
    code: `Boolean("hello"); // true`,
  },
  ...booleanReferenceDetails,
  "javascript-date-reference": {
    title: "JavaScript Date Reference",
    description: "Browse the JavaScript Date constructor, methods, properties, and static methods with runnable examples.",
    code: `const date = new Date("2024-06-15T12:34:56.789Z");`,
  },
  ...dateReferenceDetails,
  "javascript-function-reference": {
    title: "JavaScript Function Reference",
    description: "Browse common JavaScript function methods and properties with runnable examples.",
    code: `sampleFunction.call(thisValue, firstArgument, secondArgument);`,
  },
  ...functionReferenceDetails,
  "javascript-iterator-reference": {
    title: "JavaScript Iterator Reference",
    description: "Browse modern JavaScript iterator helper methods with runnable examples.",
    code: `Array.from([1, 2, 3].values().map((value) => value * 2));`,
  },
  ...iteratorReferenceDetails,
  "javascript-json-reference": {
    title: "JavaScript JSON Reference",
    description: "Explore JavaScript JSON parsing and serialization with runnable examples.",
    code: `JSON.parse('{"name":"Ada","active":true}');`,
  },
  ...jsonReferenceDetails,
  "javascript-map-reference": {
    title: "JavaScript Map Reference",
    description: "Browse the JavaScript Map constructor, methods, properties, and grouping with runnable examples.",
    code: `const users = new Map([["name", "Ada"], ["role", "developer"]]);`,
  },
  ...mapReferenceDetails,
  "javascript-math-reference": {
    title: "JavaScript Math Reference",
    description: "Browse the JavaScript Math methods and constants with runnable examples.",
    code: `Math.sqrt(81); // 9`,
  },
  ...mathReferenceDetails,
  "javascript-number-reference": {
    title: "JavaScript Number Reference",
    description: "Browse JavaScript Number constants, static methods, and instance methods with runnable examples.",
    code: `Number.isSafeInteger(42); // true`,
  },
  ...numberReferenceDetails,
  "javascript-object-reference": {
    title: "JavaScript Object Reference",
    description: "Browse JavaScript object creation, properties, inspection, and integrity methods with runnable examples.",
    code: `Object.entries({ name: "Ada", role: "developer" });`,
  },
  ...objectReferenceDetails,
  "javascript-operators-reference": {
    title: "JavaScript Operators Reference",
    description: "Explore JavaScript assignment, arithmetic, comparison, logical, bitwise, and miscellaneous operators with runnable examples.",
    code: `const result = 5 + 2; // 7`,
  },
  ...operatorReferenceDetails,
};

const demoImage =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80";

function Showcase({ component }: { component: RequestedComponent }) {
  const [value, setValue] = useState("");
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [items, setItems] = useState(["Design system", "Project notes", "Launch checklist"]);
  const [color, setColor] = useState("#8b5cf6");
  const [seconds, setSeconds] = useState(10);
  const [zoom, setZoom] = useState(1);
  const [monthOffset, setMonthOffset] = useState(0);
  const [day, setDay] = useState(12);
  const [selected, setSelected] = useState("Starter");
  const [country, setCountry] = useState("United States");
  const [city, setCity] = useState("New York");
  const [cursor, setCursor] = useState({ x: 50, y: 50 });
  const [tableBackground, setTableBackground] = useState(false);

  useEffect(() => {
    if (component !== "countdown-timer" && component !== "coming-soon-page") return;
    const timer = window.setInterval(() => setSeconds((current) => Math.max(0, current - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [component]);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("Copied to clipboard.");
    } catch {
      setStatus("Clipboard access is unavailable in this browser.");
    }
  };

  const addItem = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newItem = String(formData.get("item") ?? "").trim();
    if (!newItem) return;
    setItems((current) => [...current, newItem]);
    event.currentTarget.reset();
  };

  const centeredButton = (
    <button type="button" onClick={() => setStatus("Action selected.")} className="rounded-lg bg-violet-700 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-800">
      Centered action
    </button>
  );

  if (component === "javascript-array-reference" || isArrayReferenceSlug(component)) {
    return <ArrayReferenceDemo slug={component} />;
  }
  if (component === "javascript-boolean-reference" || isBooleanReferenceSlug(component)) {
    return <BooleanReferenceDemo slug={component} />;
  }
  if (component === "javascript-date-reference" || isDateReferenceSlug(component)) {
    return <DateReferenceDemo slug={component} />;
  }
  if (component === "javascript-function-reference" || isFunctionReferenceSlug(component)) {
    return <FunctionReferenceDemo slug={component} />;
  }
  if (component === "javascript-iterator-reference" || isIteratorReferenceSlug(component)) {
    return <IteratorReferenceDemo slug={component} />;
  }
  if (component === "javascript-json-reference" || isJsonReferenceSlug(component)) {
    return <JsonReferenceDemo slug={component} />;
  }
  if (component === "javascript-map-reference" || isMapReferenceSlug(component)) {
    return <MapReferenceDemo slug={component} />;
  }
  if (component === "javascript-math-reference" || isMathReferenceSlug(component)) {
    return <MathReferenceDemo slug={component} />;
  }
  if (component === "javascript-number-reference" || isNumberReferenceSlug(component)) {
    return <NumberReferenceDemo slug={component} />;
  }
  if (component === "javascript-object-reference" || isObjectReferenceSlug(component)) {
    return <ObjectReferenceDemo slug={component} />;
  }
  if (component === "javascript-operators-reference" || isOperatorReferenceSlug(component)) {
    return <OperatorReferenceDemo slug={component} />;
  }

  switch (component) {
    case "calc":
      return <div className="w-[calc(100%-2rem)] max-w-xl rounded-xl bg-violet-100 p-6 text-center font-medium text-violet-950">Width: <code>w-[calc(100%-2rem)]</code></div>;
    case "calculator":
      return <CalculatorDemo />;
    case "calendar":
      return <CalendarDemo monthOffset={monthOffset} setMonthOffset={setMonthOffset} day={day} setDay={setDay} />;
    case "callout":
      return <div role="note" className="flex w-full max-w-xl gap-3 rounded-xl border border-sky-200 bg-sky-50 p-5 text-left text-sky-950"><CircleCheck size={20} className="mt-0.5 shrink-0 text-sky-600" aria-hidden="true" /><div><h3 className="text-sm font-semibold">Tip</h3><p className="mt-1 text-sm leading-6 text-sky-900/80">Use this space for a helpful note that supports the content around it.</p></div></div>;
    case "canvas-reveal-effect":
      return <div className="group relative flex min-h-64 w-full max-w-xl items-center justify-center overflow-hidden rounded-2xl bg-slate-950 text-white"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(124,58,237,.85),transparent_55%)] opacity-30 transition-opacity duration-500 group-hover:opacity-100" /><div className="relative text-center"><p className="text-xs uppercase tracking-[0.3em] text-violet-200">Hover to reveal</p><h3 className="mt-3 text-3xl font-bold">A little magic</h3></div></div>;
    case "car-running":
      return <div className="relative w-full max-w-xl overflow-hidden rounded-xl bg-sky-50 p-8"><div className="animate-[drive_5s_ease-in-out_infinite_alternate] text-4xl">🚗</div><div className="mt-4 border-b-4 border-dashed border-gray-400" /><style>{`@keyframes drive { from { transform: translateX(0) } to { transform: translateX(calc(100% - 3rem)) } }`}</style></div>;
    case "card-hover-effect":
      return <article className="group w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl"><div className="h-1 w-12 rounded-full bg-violet-500 transition-all group-hover:w-20" /><h3 className="mt-5 text-lg font-semibold">Hover to lift</h3><p className="mt-2 text-sm leading-6 text-gray-600">A small elevation and color accent add a tactile feel.</p></article>;
    case "card-spotlight":
      return <article onPointerMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); setCursor({ x: event.clientX - rect.left, y: event.clientY - rect.top }); }} className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-violet-200 bg-white p-7 text-left shadow-sm"><div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: `radial-gradient(220px circle at ${cursor.x}px ${cursor.y}px, rgba(139,92,246,.16), transparent 70%)` }} /><div className="relative"><SparklesIcon /><h3 className="mt-4 font-semibold">Follow the light</h3><p className="mt-2 text-sm leading-6 text-gray-600">Move your pointer across the card.</p></div></article>;
    case "card-stack":
      return <CardStackDemo />;
    case "cards":
    case "column-cards":
      return <div className={`grid w-full max-w-2xl gap-3 ${component === "column-cards" ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>{["Design", "Build", "Ship"].map((item, index) => <article key={item} className={`rounded-xl p-5 text-left ${["bg-violet-100", "bg-sky-100", "bg-emerald-100"][index]}`}><span className="text-xs font-semibold uppercase tracking-widest text-gray-500">0{index + 1}</span><h3 className="mt-3 font-semibold text-gray-900">{item}</h3><p className="mt-1 text-sm text-gray-600">A flexible card for your content.</p></article>)}</div>;
    case "cascading-dropdown":
      return <div className="grid w-full max-w-md gap-4 rounded-xl bg-white p-6 text-left sm:grid-cols-2"><label className="text-sm font-medium">Country<select value={country} onChange={(event) => { const nextCountry = event.target.value; setCountry(nextCountry); setCity(nextCountry === "Canada" ? "Toronto" : "New York"); }} className="mt-2 w-full rounded-lg border border-gray-300 p-2.5"><option>United States</option><option>Canada</option></select></label><label className="text-sm font-medium">City<select value={city} onChange={(event) => setCity(event.target.value)} className="mt-2 w-full rounded-lg border border-gray-300 p-2.5">{(country === "Canada" ? ["Toronto", "Vancouver"] : ["New York", "Chicago"]).map((name) => <option key={name}>{name}</option>)}</select></label></div>;
    case "center-button-div":
      return <div className="grid min-h-44 w-full place-items-center rounded-xl bg-white">{centeredButton}</div>;
    case "center-images":
      return <div className="flex w-full justify-center rounded-xl bg-white p-6"><img src={demoImage} alt="Mountain landscape" className="h-40 w-60 rounded-xl object-cover" /></div>;
    case "center-tables":
      return <div className="w-full overflow-x-auto rounded-xl bg-white p-5"><table className="mx-auto text-left text-sm"><thead><tr className="border-b"><th className="px-4 py-2">Plan</th><th className="px-4 py-2">Projects</th><th className="px-4 py-2">Price</th></tr></thead><tbody><tr><td className="px-4 py-2">Starter</td><td className="px-4 py-2">3</td><td className="px-4 py-2">$0</td></tr><tr><td className="px-4 py-2">Pro</td><td className="px-4 py-2">Unlimited</td><td className="px-4 py-2">$12</td></tr></tbody></table></div>;
    case "center-vertically":
      return <div className="grid min-h-56 w-full place-items-center rounded-xl bg-violet-50"><p className="rounded-lg bg-white px-5 py-3 font-medium shadow-sm">Centered vertically and horizontally</p></div>;
    case "center-website":
      return <main className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 text-left shadow-sm"><p className="text-xs font-semibold uppercase tracking-widest text-violet-700">Centered container</p><h3 className="mt-3 text-2xl font-bold">A comfortable reading width</h3><p className="mt-2 text-sm leading-6 text-gray-600">This website layout uses a max-width and automatic horizontal margins.</p></main>;
    case "centered-menu-link":
      return <nav className="flex min-h-24 w-full items-center justify-center gap-8 rounded-xl bg-white"><a className="border-b-2 border-violet-600 py-2 text-sm font-semibold text-violet-700" href="#preview-title">Home</a><a className="py-2 text-sm text-gray-500 hover:text-gray-900" href="#preview-title">About</a><a className="py-2 text-sm text-gray-500 hover:text-gray-900" href="#preview-title">Contact</a></nav>;
    case "change-background-color-with-dropdown-menu":
      return <div className="w-full max-w-md rounded-xl p-6 transition-colors" style={{ backgroundColor: color }}><label className="text-sm font-medium">Choose a background <select value={color} onChange={(event) => setColor(event.target.value)} className="ml-3 rounded-lg border bg-white px-3 py-2"><option value="#ede9fe">Violet</option><option value="#dbeafe">Blue</option><option value="#dcfce7">Green</option><option value="#fef3c7">Amber</option></select></label></div>;
    case "change-background-on-scroll":
      return <div onScroll={(event) => setTableBackground(event.currentTarget.scrollTop > 5)} className={`h-48 w-full max-w-md overflow-y-auto rounded-xl border p-5 transition-colors ${tableBackground ? "border-violet-300 bg-violet-100" : "border-gray-200 bg-white"}`}><p className="sticky top-0 rounded-lg bg-white/80 p-2 text-sm font-semibold backdrop-blur">Scroll inside this panel to change its background</p>{Array.from({ length: 8 }, (_, index) => <p key={index} className="py-4 text-sm text-gray-600">Scroll content section {index + 1}</p>)}</div>;
    case "changing-active-menu-item-on-page-scroll":
      return <ScrollSections />;
    case "character-counter":
      return <div className="w-full max-w-md rounded-xl bg-white p-5"><textarea value={value} maxLength={160} onChange={(event) => setValue(event.target.value)} placeholder="Write a short message..." className="h-28 w-full resize-none rounded-lg border border-gray-300 p-3 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-100" /><p className="mt-2 text-right text-xs text-gray-500">{value.length}/160 characters</p></div>;
    case "chat-message":
      return <div className="w-full max-w-md space-y-3 rounded-xl bg-white p-5 text-left"><p className="text-xs text-gray-500">Maya · 10:42 AM</p><div className="w-fit max-w-[85%] rounded-2xl rounded-tl-sm bg-violet-600 px-4 py-3 text-sm leading-5 text-white">Hey! The new component previews look great. Want to review them together?</div><div className="ml-auto w-fit rounded-2xl rounded-tr-sm bg-gray-100 px-4 py-3 text-sm text-gray-800">Absolutely, sending a link now.</div></div>;
    case "check-checkbox":
    case "custom-checkbox":
      return <label className="flex cursor-pointer items-center gap-3 rounded-xl bg-white p-5 text-sm font-medium text-gray-800"><input type="checkbox" checked={active} onChange={(event) => setActive(event.target.checked)} className="h-5 w-5 accent-violet-600" />{component === "custom-checkbox" ? "I agree to the terms" : "Enable notifications"}<span className="ml-auto text-xs text-gray-500">{active ? "Checked" : "Unchecked"}</span></label>;
    case "check-if-value-is-numeric":
      return <div className="w-full max-w-sm rounded-xl bg-white p-5"><label className="text-sm font-medium">Enter a value<input value={value} onChange={(event) => setValue(event.target.value)} className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2.5" placeholder="Try 42 or hello" /></label><p className={`mt-3 text-sm ${value.trim() && Number.isFinite(Number(value)) ? "text-emerald-700" : "text-gray-500"}`}>{value.trim() && Number.isFinite(Number(value)) ? "This is a numeric value." : value ? "This is not numeric." : "Enter a value to check."}</p></div>;
    case "checkout-form":
    case "contact-form":
      return <form onSubmit={(event) => { event.preventDefault(); setStatus(component === "checkout-form" ? "Order details saved." : "Message sent. Thanks for reaching out!"); }} className="grid w-full max-w-lg gap-3 rounded-xl bg-white p-5 text-left"><h3 className="font-semibold">{component === "checkout-form" ? "Contact and payment" : "Send us a message"}</h3><input required placeholder="Full name" className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm" /><input required type="email" placeholder="Email address" className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm" />{component === "checkout-form" ? <input required inputMode="numeric" placeholder="Card number" className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm" /> : <textarea required placeholder="Your message" className="min-h-24 rounded-lg border border-gray-300 px-3 py-2.5 text-sm" />}<button className="rounded-lg bg-gray-950 px-4 py-2.5 text-sm font-semibold text-white">{component === "checkout-form" ? "Continue to payment" : "Send message"}</button><p aria-live="polite" className="text-sm text-emerald-700">{status}</p></form>;
    case "circle-menu-for-mobile":
      return <div className="relative flex h-64 w-full max-w-sm items-center justify-center rounded-2xl bg-gray-100"><div className={`absolute transition-all duration-300 ${open ? "-translate-y-20" : "translate-y-0"}`}><button type="button" onClick={() => setStatus("Home selected")} aria-label="Home" className="rounded-full bg-white p-3 shadow"><ArrowUp size={18} /></button></div><div className={`absolute transition-all duration-300 ${open ? "translate-x-20" : "translate-x-0"}`}><button type="button" onClick={() => setStatus("Search selected")} aria-label="Search" className="rounded-full bg-white p-3 shadow"><ArrowRight size={18} /></button></div><button type="button" onClick={() => setOpen(!open)} aria-expanded={open} className="z-10 rounded-full bg-violet-700 p-4 text-white shadow-lg">{open ? <X size={21} /> : <Menu size={21} />}</button><p className="absolute bottom-4 text-xs text-gray-500">{status}</p></div>;
    case "circles-dots":
      return <div role="status" aria-label="Loading" className="flex items-center gap-2 rounded-xl bg-white p-7">{["bg-violet-400", "bg-violet-500", "bg-violet-600"].map((className, index) => <span key={index} className={`h-3 w-3 animate-bounce rounded-full ${className}`} style={{ animationDelay: `${index * 120}ms` }} />)}</div>;
    case "classlist":
      return <button type="button" onClick={() => setActive(!active)} className={`rounded-xl px-6 py-4 font-medium transition-all ${active ? "scale-105 bg-violet-700 text-white shadow-lg" : "bg-white text-gray-700 shadow-sm"}`}>Click to toggle class</button>;
    case "clear-input-field":
      return <div className="flex w-full max-w-sm items-center rounded-lg border border-gray-300 bg-white px-3 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-100"><input value={value} onChange={(event) => setValue(event.target.value)} placeholder="Type something..." className="h-11 min-w-0 flex-1 outline-none" />{value && <button type="button" onClick={() => setValue("")} aria-label="Clear input" className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700"><X size={17} /></button>}</div>;
    case "clearfix":
      return <div className="flow-root w-full max-w-lg rounded-xl bg-white p-5 text-left"><div className="float-left mr-4 h-20 w-20 rounded-lg bg-linear-to-br from-violet-300 to-indigo-500" /><p className="text-sm leading-6 text-gray-700">The flow-root container establishes a new block formatting context, containing the floated visual and keeping the card height correct.</p></div>;
    case "click-dropdowns":
      return <div className="relative"><button type="button" aria-expanded={open} onClick={() => setOpen(!open)} className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium">{selected} <ChevronDown size={16} /></button>{open && <div className="absolute left-0 z-10 mt-2 w-40 rounded-lg border border-gray-200 bg-white p-1 shadow-lg">{["Starter", "Pro", "Team"].map((plan) => <button key={plan} onClick={() => { setSelected(plan); setOpen(false); }} className="block w-full rounded-md px-3 py-2 text-left text-sm hover:bg-violet-50">{plan}</button>)}</div>}</div>;
    case "closable-list-items":
      return <ul className="w-full max-w-md space-y-2">{items.map((item) => <li key={item} className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm">{item}<button type="button" aria-label={`Remove ${item}`} onClick={() => setItems((current) => current.filter((entry) => entry !== item))} className="ml-auto rounded p-1 text-gray-400 hover:bg-red-50 hover:text-red-600"><X size={16} /></button></li>)}</ul>;
    case "close":
      return active ? <div className="flex w-full max-w-md items-center gap-3 rounded-xl bg-white p-5"><p className="flex-1 text-sm">This panel can be dismissed.</p><button type="button" aria-label="Close panel" onClick={() => setActive(false)} className="rounded-md p-2 text-gray-500 hover:bg-gray-100"><X size={18} /></button></div> : <button type="button" onClick={() => setActive(true)} className="rounded-lg bg-violet-700 px-4 py-2 text-sm font-medium text-white">Reopen panel</button>;
    case "collapsed-sidebar":
      return <div className="flex h-56 w-full max-w-md overflow-hidden rounded-xl border border-gray-200 bg-white text-left"><aside className={`${open ? "w-40" : "w-16"} border-r border-gray-200 p-3 transition-all`}><button onClick={() => setOpen(!open)} aria-label="Toggle sidebar" className="rounded-lg p-2 hover:bg-gray-100"><Menu size={18} /></button>{["Home", "Projects", "Settings"].map((label) => <div key={label} className="mt-3 flex items-center gap-3 rounded-lg bg-gray-50 p-2 text-sm"><span className="h-4 w-4 rounded bg-violet-200" />{open && label}{!open && <span className="sr-only">{label}</span>}</div>)}</aside><div className="p-5 text-sm text-gray-600">Sidebar {open ? "expanded" : "collapsed"}</div></div>;
    case "collapsed-sidepanel":
      return <div className="flex h-52 w-full max-w-lg overflow-hidden rounded-xl border border-gray-200 bg-white"><main className="flex-1 p-5 text-left"><h3 className="font-semibold">Document</h3><p className="mt-2 text-sm text-gray-600">Main content remains visible.</p></main>{open && <aside className="w-40 border-l border-gray-200 bg-gray-50 p-4 text-sm">Sidepanel details</aside>}<button onClick={() => setOpen(!open)} className="self-start border-l border-gray-200 p-3 text-xs font-medium text-violet-700">{open ? "Hide" : "Show"}</button></div>;
    case "collapsible":
      return <div className="w-full max-w-md overflow-hidden rounded-xl border border-gray-200 bg-white text-left"><button aria-expanded={open} onClick={() => setOpen(!open)} className="flex w-full items-center justify-between p-4 text-sm font-semibold">What is included?<ChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} size={18} /></button>{open && <p className="border-t border-gray-100 p-4 text-sm leading-6 text-gray-600">A small disclosure panel that can be shown or hidden when needed.</p>}</div>;
    case "color-picker":
      return <div className="flex items-center gap-5 rounded-xl bg-white p-5"><input type="color" aria-label="Choose a color" value={color} onChange={(event) => setColor(event.target.value)} className="h-14 w-16 cursor-pointer rounded border-0" /><div><p className="text-sm font-medium">Selected color</p><code className="mt-1 block text-sm text-gray-500">{color}</code></div><div className="h-12 w-12 rounded-full border" style={{ backgroundColor: color }} /></div>;
    case "colorful-text":
      return <h3 className="bg-linear-to-r from-pink-500 via-violet-600 to-sky-500 bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-5xl">Color your ideas</h3>;
    case "coming-soon-page":
      return <div className="w-full max-w-xl rounded-2xl bg-slate-950 px-6 py-10 text-center text-white"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">Something good is coming</p><h3 className="mt-3 text-3xl font-bold">Launching soon</h3><p className="mt-3 text-sm text-slate-300">Preview countdown: {seconds} seconds</p></div>;
    case "compare":
      return <div className="grid w-full max-w-xl grid-cols-2 gap-3">{["Essential", "Advanced"].map((name, index) => <button key={name} onClick={() => setSelected(name)} className={`rounded-xl border p-5 text-left ${selected === name ? "border-violet-400 bg-violet-50 ring-2 ring-violet-100" : "border-gray-200 bg-white"}`}><span className="text-xs uppercase tracking-widest text-gray-500">Option {index + 1}</span><h3 className="mt-2 font-semibold">{name}</h3><p className="mt-1 text-sm text-gray-600">{index ? "More features" : "Simple and focused"}</p></button>)}</div>;
    case "comparison-table":
      return <div className="w-full overflow-x-auto rounded-xl bg-white p-4"><table className="w-full min-w-[400px] text-left text-sm"><thead><tr className="border-b"><th className="p-3">Feature</th><th className="p-3">Starter</th><th className="p-3">Pro</th></tr></thead><tbody>{[["Projects", "3", "Unlimited"], ["Team members", "1", "10"], ["Support", "Email", "Priority"]].map((row) => <tr key={row[0]} className="border-b last:border-0">{row.map((cell) => <td key={cell} className="p-3 text-gray-700">{cell}</td>)}</tr>)}</tbody></table></div>;
    case "contact-chips":
      return <div className="flex w-full max-w-lg flex-wrap gap-2 rounded-xl bg-white p-5">{items.map((person) => <span key={person} className="inline-flex items-center gap-2 rounded-full bg-violet-50 py-1 pl-3 pr-1 text-sm text-violet-900">{person}<button aria-label={`Remove ${person}`} onClick={() => setItems((current) => current.filter((entry) => entry !== person))} className="rounded-full p-1 hover:bg-violet-200"><X size={14} /></button></span>)}{items.length === 0 && <span className="text-sm text-gray-500">No contacts selected.</span>}</div>;
    case "contact-section":
      return <section className="w-full max-w-2xl rounded-2xl bg-slate-950 p-7 text-left text-white sm:p-9"><p className="text-xs font-semibold uppercase tracking-widest text-violet-300">Get in touch</p><h3 className="mt-3 text-3xl font-bold">Have a good idea?</h3><p className="mt-2 text-sm leading-6 text-slate-300">Tell us a little about it. We would love to hear from you.</p><a className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-violet-400 underline-offset-4" href="mailto:hello@example.com">hello@example.com <ArrowRight size={16} /></a></section>;
    case "container-cover":
      return <div className="relative flex min-h-64 w-full max-w-xl items-center justify-center overflow-hidden rounded-2xl bg-cover bg-center" style={{ backgroundImage: `url(${demoImage})` }}><div className="absolute inset-0 bg-slate-950/45" /><div className="relative p-8 text-center text-white"><h3 className="text-3xl font-bold">Cover the container</h3><p className="mt-2 text-sm text-white/80">Background imagery with readable foreground.</p></div></div>;
    case "container-scroll-animation":
      return <div onScroll={(event) => setActive(event.currentTarget.scrollTop > 60)} className="h-56 w-full max-w-md overflow-y-auto rounded-xl border border-gray-200 bg-white p-5"><div className="sticky top-0 flex items-center gap-2 bg-white/90 pb-3 text-xs font-semibold uppercase tracking-widest text-violet-700 backdrop-blur"><span className={`h-2 w-2 rounded-full ${active ? "bg-emerald-500" : "bg-gray-300"}`} />Scroll to reveal</div>{Array.from({ length: 6 }, (_, index) => <article key={index} className={`mb-3 rounded-lg bg-violet-50 p-4 transition-all duration-500 ${active ? "translate-y-0 opacity-100" : "translate-y-1 opacity-70"}`}><h3 className="text-sm font-semibold">Content section {index + 1}</h3><p className="mt-1 text-xs text-gray-600">A scrollable reveal area.</p></article>)}</div>;
    case "contenteditable-border":
      return <div contentEditable suppressContentEditableWarning onInput={(event) => setValue(event.currentTarget.textContent ?? "")} className="min-h-24 w-full max-w-md rounded-xl border-2 border-dashed border-gray-300 bg-white p-5 text-left text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100">Click here and edit this text.</div>;
    case "copy-text-to-clipboard":
      return <div className="w-full max-w-md rounded-xl bg-white p-5 text-left"><p className="text-sm text-gray-700">This sentence can be copied to your clipboard.</p><button onClick={() => copyToClipboard("This sentence can be copied to your clipboard.")} className="mt-3 inline-flex items-center gap-2 rounded-lg bg-gray-950 px-3 py-2 text-sm font-medium text-white"><Copy size={15} />Copy text</button><p aria-live="polite" className="mt-2 text-xs text-emerald-700">{status}</p></div>;
    case "copy-to-clipboard":
      return <div className="flex items-center gap-3 rounded-xl bg-white p-5"><code className="rounded bg-gray-100 px-3 py-2 text-sm">npm install ui-kit</code><button aria-label="Copy command" onClick={() => copyToClipboard("npm install ui-kit")} className="rounded-lg border border-gray-200 p-2 hover:bg-gray-50"><Copy size={17} /></button><span aria-live="polite" className="text-xs text-emerald-700">{status}</span></div>;
    case "countdown-timer":
      return <div className="flex items-center gap-4 rounded-xl bg-white p-6 text-center"><div><p className="text-3xl font-bold tabular-nums text-gray-950">00</p><p className="text-xs text-gray-500">MINUTES</p></div><span className="text-2xl text-gray-300">:</span><div><p className="text-3xl font-bold tabular-nums text-violet-700">{String(seconds).padStart(2, "0")}</p><p className="text-xs text-gray-500">SECONDS</p></div></div>;
    case "coupon":
      return <div className="flex w-full max-w-md items-center gap-4 rounded-xl border border-dashed border-violet-300 bg-violet-50 p-5"><div className="flex-1"><p className="text-xs font-medium uppercase tracking-widest text-violet-700">Your coupon</p><code className="mt-1 block text-lg font-bold tracking-widest text-gray-900">SAVE20</code></div><button onClick={() => copyToClipboard("SAVE20")} className="inline-flex items-center gap-2 rounded-lg bg-violet-700 px-3 py-2 text-sm font-semibold text-white"><Copy size={15} />Copy</button><span aria-live="polite" className="sr-only">{status}</span></div>;
    case "create-zoom-in-and-out-an-image":
      return <div className="w-full max-w-md space-y-4 rounded-xl bg-white p-5"><div className="h-48 overflow-hidden rounded-lg"><img src={demoImage} alt="Mountain landscape" style={{ transform: `scale(${zoom})` }} className="h-full w-full object-cover transition-transform duration-200" /></div><label className="flex items-center gap-3 text-sm">Zoom<input type="range" min="1" max="1.8" step="0.1" value={zoom} onChange={(event) => setZoom(Number(event.target.value))} className="flex-1 accent-violet-600" /><span>{zoom.toFixed(1)}×</span></label></div>;
    case "crud":
      return <div className="w-full max-w-md space-y-3"><form onSubmit={addItem} className="flex gap-2"><input name="item" required placeholder="Add a task..." className="min-w-0 flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm" /><button className="rounded-lg bg-violet-700 px-3 text-white"><Plus size={18} /></button></form><ul className="space-y-2">{items.map((item) => <li key={item} className="flex items-center rounded-lg bg-white px-3 py-2 text-sm">{item}<button aria-label={`Delete ${item}`} onClick={() => setItems((current) => current.filter((entry) => entry !== item))} className="ml-auto text-gray-400 hover:text-red-600"><X size={16} /></button></li>)}</ul></div>;
    case "cursor":
      return <div onPointerMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); setCursor({ x: event.clientX - rect.left, y: event.clientY - rect.top }); }} className="relative flex h-56 w-full max-w-lg cursor-none items-center justify-center overflow-hidden rounded-xl bg-slate-950 text-white"><span className="text-sm text-slate-300">Move the pointer in this area</span><span className="pointer-events-none absolute h-8 w-8 rounded-full border-2 border-violet-300 bg-violet-400/30 transition-transform" style={{ left: cursor.x - 16, top: cursor.y - 16 }} /></div>;
    case "curtain-menu":
      return <div className="relative flex h-64 w-full max-w-lg items-center justify-center overflow-hidden rounded-xl bg-white"><button onClick={() => setOpen(!open)} aria-expanded={open} className="absolute right-4 top-4 z-20 rounded-lg bg-gray-950 p-2 text-white"><Menu size={19} /></button><div className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-violet-700 text-white transition-transform duration-500 ${open ? "translate-y-0" : "-translate-y-full"}`}><a href="#preview-title" className="text-2xl font-bold">Home</a><a href="#preview-title" className="text-2xl font-bold">Work</a><a href="#preview-title" className="text-2xl font-bold">Contact</a></div><p className="text-sm text-gray-500">Click the menu to reveal the curtain.</p></div>;
    case "custom-file-upload":
      return <label className="inline-flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-violet-300 bg-white px-5 py-4 text-sm font-medium text-violet-800 hover:bg-violet-50"><Plus size={18} />Choose a file<input type="file" className="sr-only" onChange={(event) => setStatus(event.target.files?.[0]?.name ?? "")} /><span className="text-xs text-gray-500">{status}</span></label>;
    case "custom-radio":
      return <fieldset className="w-full max-w-sm rounded-xl bg-white p-5 text-left"><legend className="mb-3 text-sm font-semibold">Choose a plan</legend>{["Starter", "Pro", "Team"].map((plan) => <label key={plan} className="flex items-center gap-3 border-t border-gray-100 py-3 text-sm"><input type="radio" name="demo-plan" value={plan} checked={selected === plan} onChange={() => setSelected(plan)} className="h-4 w-4 accent-violet-600" />{plan}</label>)}</fieldset>;
    case "custom-scrollbar":
      return <div className="h-48 w-full max-w-sm overflow-y-auto rounded-xl bg-white p-4 [scrollbar-color:#8b5cf6_#ede9fe] scrollbar-width:thin">{Array.from({ length: 8 }, (_, index) => <p key={index} className="border-b border-gray-100 py-4 text-sm text-gray-700">Scrollable item {index + 1}</p>)}</div>;
    case "custom-select":
      return <label className="w-full max-w-xs text-left text-sm font-medium">Select a workspace<select value={selected} onChange={(event) => setSelected(event.target.value)} className="mt-2 w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100">{["Starter", "Pro", "Team"].map((item) => <option key={item}>{item}</option>)}</select></label>;
    case "cutout-text":
      return <div className="relative flex min-h-64 w-full max-w-xl items-center justify-center overflow-hidden rounded-2xl bg-cover bg-center" style={{ backgroundImage: `url(${demoImage})` }}><div className="absolute inset-0 bg-black/10" /><h3 style={{ backgroundImage: `url(${demoImage})`, WebkitTextFillColor: "transparent" }} className="relative bg-cover bg-center bg-clip-text px-4 py-2 text-5xl font-black uppercase tracking-tight text-transparent sm:text-7xl">Explore</h3></div>;
    default:
      return <RequestedFeatureDemos component={component} />;
  }
}

function SparklesIcon() {
  return <div aria-hidden="true" className="h-2 w-2 rounded-full bg-violet-500 shadow-[0_0_16px_4px_rgba(139,92,246,.45)]" />;
}

function CalculatorDemo() {
  const [display, setDisplay] = useState("0");
  const [stored, setStored] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [resetDisplay, setResetDisplay] = useState(false);

  const input = (key: string) => {
    if (key === "C") {
      setDisplay("0");
      setStored(null);
      setOperator(null);
      return;
    }
    if (["+", "-", "×", "÷"].includes(key)) {
      setStored(Number(display));
      setOperator(key);
      setResetDisplay(true);
      return;
    }
    if (key === "=" && operator && stored !== null) {
      const current = Number(display);
      const result =
        operator === "+"
          ? stored + current
          : operator === "-"
            ? stored - current
            : operator === "×"
              ? stored * current
              : current === 0
                ? 0
                : stored / current;
      setDisplay(String(Number(result.toFixed(8))));
      setStored(null);
      setOperator(null);
      setResetDisplay(true);
      return;
    }
    setDisplay((current) =>
      key === "."
        ? current.includes(".")
          ? current
          : `${current}.`
        : resetDisplay || current === "0"
          ? key
          : `${current}${key}`,
    );
    setResetDisplay(false);
  };

  return (
    <div className="w-full max-w-xs rounded-2xl bg-slate-950 p-4 shadow-xl">
      <output aria-live="polite" className="mb-3 block overflow-hidden rounded-lg bg-slate-900 px-4 py-5 text-right text-3xl font-semibold tabular-nums text-white">{display}</output>
      <div className="grid grid-cols-4 gap-2">
        {["C", "÷", "×", "-", "7", "8", "9", "+", "4", "5", "6", "=", "1", "2", "3", "0", ".", ""].map((key, index) => key ? <button key={`${key}-${index}`} onClick={() => input(key)} className={`rounded-lg py-3 text-lg font-medium transition-colors ${key === "=" || ["÷", "×", "-", "+"].includes(key) ? "bg-violet-600 text-white hover:bg-violet-500" : key === "C" ? "bg-rose-100 text-rose-700 hover:bg-rose-200" : "bg-slate-800 text-white hover:bg-slate-700"} ${key === "0" ? "col-span-2" : ""}`}>{key}</button> : <span key="empty" />)}
      </div>
    </div>
  );
}

function CalendarDemo({
  monthOffset,
  setMonthOffset,
  day,
  setDay,
}: {
  monthOffset: number;
  setMonthOffset: (offset: number) => void;
  day: number;
  setDay: (day: number) => void;
}) {
  const displayedDate = new Date(2026, 9 + monthOffset, 1);
  const monthName = displayedDate.toLocaleString("en-US", { month: "long", year: "numeric" });
  const firstDay = new Date(displayedDate.getFullYear(), displayedDate.getMonth(), 1).getDay();
  const daysInMonth = new Date(displayedDate.getFullYear(), displayedDate.getMonth() + 1, 0).getDate();

  return (
    <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <button aria-label="Previous month" onClick={() => setMonthOffset(monthOffset - 1)} className="rounded-lg p-2 hover:bg-gray-100"><ArrowLeft size={17} /></button>
        <h3 className="text-sm font-semibold">{monthName}</h3>
        <button aria-label="Next month" onClick={() => setMonthOffset(monthOffset + 1)} className="rounded-lg p-2 hover:bg-gray-100"><ArrowRight size={17} /></button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((name) => <span key={name} className="py-2 font-medium text-gray-400">{name}</span>)}
        {Array.from({ length: firstDay }, (_, index) => <span key={`blank-${index}`} />)}
        {Array.from({ length: daysInMonth }, (_, index) => index + 1).map((date) => <button key={date} onClick={() => setDay(date)} aria-pressed={day === date} className={`aspect-square rounded-full text-sm ${day === date ? "bg-violet-700 font-semibold text-white" : "text-gray-700 hover:bg-violet-50"}`}>{date}</button>)}
      </div>
      <p className="mt-3 text-center text-xs text-gray-500">Selected: {monthName.split(" ")[0]} {day}</p>
    </div>
  );
}

function CardStackDemo() {
  const [topIndex, setTopIndex] = useState(0);
  const cards = [
    { title: "Make", color: "bg-violet-600" },
    { title: "Something", color: "bg-sky-600" },
    { title: "Wonderful", color: "bg-emerald-600" },
  ];
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="relative h-48 w-64">
        {[2, 1, 0].map((layer) => {
          const card = cards[(topIndex + layer) % cards.length];
          return <div key={layer} className={`absolute inset-0 flex items-center justify-center rounded-2xl text-2xl font-bold text-white shadow-xl transition-all ${card.color}`} style={{ transform: `translateY(${layer * 9}px) scale(${1 - layer * 0.06})`, zIndex: 3 - layer }}>{card.title}</div>;
        })}
      </div>
      <button onClick={() => setTopIndex((index) => (index + 1) % cards.length)} className="rounded-lg bg-gray-950 px-4 py-2 text-sm font-medium text-white">Next card</button>
    </div>
  );
}

function ScrollSections() {
  const [activeSection, setActiveSection] = useState("Intro");
  return (
    <div className="w-full max-w-lg">
      <nav className="mb-3 flex gap-2">{["Intro", "Details", "Finish"].map((section) => <button key={section} onClick={() => { setActiveSection(section); document.getElementById(`scroll-${section}`)?.scrollIntoView({ block: "nearest", behavior: "smooth" }); }} className={`rounded-full px-3 py-1.5 text-xs font-medium ${activeSection === section ? "bg-violet-700 text-white" : "bg-white text-gray-600"}`}>{section}</button>)}</nav>
      <div onScroll={(event) => { const index = Math.min(2, Math.floor(event.currentTarget.scrollTop / 90)); setActiveSection(["Intro", "Details", "Finish"][index]); }} className="h-48 space-y-3 overflow-y-auto rounded-xl border border-gray-200 bg-white p-3">
        {["Intro", "Details", "Finish"].map((section) => <section id={`scroll-${section}`} key={section} className="flex h-24 items-center rounded-lg bg-violet-50 px-5"><h3 className="font-semibold">{section}</h3></section>)}
      </div>
    </div>
  );
}

export default function MoreComponentsPage() {
  const { slug } = useParams();
  if (!slug || !requestedComponents.includes(slug as RequestedComponent)) {
    return <p className="text-sm text-gray-600">Component not found.</p>;
  }
  const component = slug as RequestedComponent;
  const details = componentDetails[component];
  return (
    <div className="w-full space-y-10">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500">
        <span>Components</span><span aria-hidden="true">/</span><span className="font-medium text-gray-900">{details.title}</span>
      </nav>
      <header className="space-y-4">
        <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700">Component</div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">{details.title}</h1>
        <p className="max-w-2xl text-base leading-7 text-gray-600">{details.description}</p>
      </header>
      <section aria-labelledby="preview-title" className="space-y-4">
        <div><h2 id="preview-title" className="text-lg font-semibold text-gray-950">Live preview</h2><p className="mt-1 text-sm text-gray-500">Try the control or interaction in the preview.</p></div>
        <div className="flex min-h-64 items-center justify-center overflow-x-hidden rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-10"><Showcase component={component} /></div>
      </section>
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(240px,0.7fr)]">
        <div className="overflow-hidden rounded-xl border border-gray-200"><div className="flex items-center justify-between border-b border-gray-800 bg-gray-900 px-5 py-3"><span className="text-xs font-medium text-gray-300">Example.tsx</span><span className="text-xs text-gray-500">React + TypeScript</span></div><pre className="overflow-x-auto bg-[#0f172a] p-5 text-sm leading-6 text-slate-200"><code>{details.code}</code></pre></div>
        <aside><h2 className="text-lg font-semibold text-gray-950">About</h2><p className="mt-2 text-sm leading-6 text-gray-600">This example is built with React and Tailwind CSS. Adjust its content, behavior, and utility classes to fit your interface.</p></aside>
      </section>
    </div>
  );
}
