import {
  ArrowDown,
  ArrowLeft,
  Bell,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Mail,
  Menu,
  Music2,
  Pause,
  Play,
  Search,
  User,
  Wifi,
  WifiOff,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

type Props = { component: string };

const imageUrl =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80";
const items = [
  { name: "Aurora", category: "Design" },
  { name: "Atlas", category: "Engineering" },
  { name: "Bloom", category: "Design" },
  { name: "Cinder", category: "Marketing" },
  { name: "Drift", category: "Engineering" },
  { name: "Ember", category: "Marketing" },
];
const button =
  "rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-700";
const primitiveExamples = [
  { slug: "string", name: "String", value: '"Hello, JavaScript"', type: '"string"', note: "Immutable text values." },
  { slug: "number", name: "Number", value: "42", type: '"number"', note: "Integers and floating-point values; also includes NaN and Infinity." },
  { slug: "boolean", name: "Boolean", value: "true", type: '"boolean"', note: "Logical true or false values." },
  { slug: "bigint", name: "BigInt", value: "9007199254740993n", type: '"bigint"', note: "Arbitrary-precision integers. Use the n suffix; do not mix directly with Number." },
  { slug: "symbol", name: "Symbol", value: 'Symbol("id")', type: '"symbol"', note: "Every Symbol() call produces a unique value." },
  { slug: "undefined", name: "undefined", value: "undefined", type: '"undefined"', note: "The default value of uninitialized variables and missing properties." },
  { slug: "null", name: "null", value: "null", type: '"object"', note: 'Intentional absence of a value. typeof null is "object" for historical reasons.' },
] as const;

export default function FeatureDemos({ component }: Props) {
  const [visible, setVisible] = useState(component !== "fade-in");
  const [query, setQuery] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("All");
  const [found, setFound] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [page, setPage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [layout, setLayout] = useState("Flex");
  const [selectedTile, setSelectedTile] = useState("");
  const [language, setLanguage] = useState("English");
  const [scrollPastFold, setScrollPastFold] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");
  const [activeSection, setActiveSection] = useState("Intro");
  const [activeHotspot, setActiveHotspot] = useState("");
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [comparison, setComparison] = useState(50);
  const [imageZoom, setImageZoom] = useState(1);
  const [burst, setBurst] = useState(false);
  const [lensPosition, setLensPosition] = useState({ x: 50, y: 50 });
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });
  const [step, setStep] = useState(0);
  const [trackTime, setTrackTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [listView, setListView] = useState<"list" | "grid">("list");
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(false);
  const [loadingDone, setLoadingDone] = useState(false);
  const [playerStatus, setPlayerStatus] = useState("");
  const [note, setNote] = useState("Remember to share the latest update with the team.");
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(2);
  const [neumorphicPressed, setNeumorphicPressed] = useState(false);
  const [isOnline, setIsOnline] = useState(() => navigator.onLine);
  const [selectedNodes, setSelectedNodes] = useState<number[]>([]);
  const [mediaQuery, setMediaQuery] = useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches);
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [chatMessage, setChatMessage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [qrScanned, setQrScanned] = useState(false);
  const [rangeValue, setRangeValue] = useState(45);
  const [registered, setRegistered] = useState(false);
  const [sampleRemoved, setSampleRemoved] = useState(false);
  const [propertyRemoved, setPropertyRemoved] = useState(false);
  const [classRemoved, setClassRemoved] = useState(false);
  const [responsiveMenuOpen, setResponsiveMenuOpen] = useState(false);
  const [responsiveSidebarOpen, setResponsiveSidebarOpen] = useState(false);
  const [showChecked, setShowChecked] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [starRating, setStarRating] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [sortAscending, setSortAscending] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [signupComplete, setSignupComplete] = useState(false);
  const [sideNavOpen, setSideNavOpen] = useState(true);
  const [drawingProgress, setDrawingProgress] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [reaction, setReaction] = useState<"like" | "dislike" | "">("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [demoToggle, setDemoToggle] = useState(false);
  const [demoTextToggle, setDemoTextToggle] = useState(false);
  const [todoItems, setTodoItems] = useState([
    { label: "Review project brief", done: false },
    { label: "Share first draft", done: true },
    { label: "Collect feedback", done: false },
  ]);
  const [treeExpanded, setTreeExpanded] = useState(true);
  const [enterMessage, setEnterMessage] = useState("");
  const [userRating, setUserRating] = useState(0);
  const [verticalSelection, setVerticalSelection] = useState("Overview");
  const [videoPlaying, setVideoPlaying] = useState(false);
  const slideshowLabels = ["First look", "A new perspective", "The final scene"];

  const filtered = items.filter((item) => {
    const matchesText = item.name.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "All" || item.category === category;
    return matchesText && matchesCategory;
  });
  const loadItems = [
    "Accessible navigation",
    "Responsive layout",
    "Interactive controls",
    "Reusable components",
    "Helpful feedback",
    "Thoughtful details",
    "Flexible themes",
    "Clear content",
  ];
  const portfolioItems = [
    { title: "Aurora", category: "Branding" },
    { title: "Atlas", category: "Web" },
    { title: "Bloom", category: "Branding" },
    { title: "Cinder", category: "Product" },
    { title: "Drift", category: "Web" },
    { title: "Ember", category: "Product" },
  ];
  const quotes = [
    { text: "Great things are done by a series of small things brought together.", author: "Vincent van Gogh" },
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  ];

  useEffect(() => {
    if (!playing || component !== "music-player") return;
    const timer = window.setInterval(() => {
      setTrackTime((time) => (time >= 180 ? 0 : time + 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [playing, component]);

  useEffect(() => {
    if (component !== "offline-detection") return;
    const updateOnlineStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);
    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, [component]);

  useEffect(() => {
    if (component !== "prefer-color-scheme") return;
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const updatePreference = (event: MediaQueryListEvent) => setMediaQuery(event.matches);
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, [component]);

  useEffect(() => {
    if (component !== "preloader" || !preloaderVisible) return;
    const timer = window.setTimeout(() => setPreloaderVisible(false), 1800);
    return () => window.clearTimeout(timer);
  }, [component, preloaderVisible]);

  if (component === "fade-in" || component === "fade-out" || component === "fade-toggle") {
    return (
      <div className="flex flex-col items-center gap-5">
        <div
          className={`grid h-28 w-56 place-items-center rounded-xl bg-violet-700 font-semibold text-white transition-opacity duration-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          Fade {visible ? "visible" : "hidden"}
        </div>
        <button
          type="button"
          onClick={() => setVisible((current) => !current)}
          className={button}
        >
          {component === "fade-in"
            ? "Fade in"
            : component === "fade-out"
              ? "Fade out"
              : "Toggle fade"}
        </button>
      </div>
    );
  }

  if (
    component === "filter-dropdown" ||
    component === "filter-elements" ||
    component === "filter-list" ||
    component === "filter-table" ||
    component === "filter-transition"
  ) {
    const isDropdown = component === "filter-dropdown";
    const isTable = component === "filter-table";
    const isList = component === "filter-list";
    return (
      <div className="w-full max-w-xl rounded-xl border border-slate-200 bg-white p-4 text-left">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          {isDropdown ? (
            <label className="text-sm text-slate-700">
              Category
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="ml-2 rounded-lg border border-slate-200 bg-white px-3 py-2"
              >
                {["All", "Design", "Engineering", "Marketing"].map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
          ) : (
            <label className="flex flex-1 items-center gap-2 rounded-lg border border-slate-200 px-3">
              <Search size={16} className="text-slate-400" />
              <input
                aria-label="Filter items"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Filter by name..."
                className="min-w-0 flex-1 py-2 text-sm outline-none"
              />
            </label>
          )}
          {isDropdown && (
            <input
              aria-label="Filter by name"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search..."
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
            />
          )}
        </div>
        {isTable ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-left text-xs text-slate-500">
                <tr><th className="p-3">Project</th><th className="p-3">Category</th><th className="p-3">Status</th></tr>
              </thead>
              <tbody>
                {filtered.map((item) => (
                  <tr key={item.name} className="border-t border-slate-100">
                    <td className="p-3 font-medium text-slate-800">{item.name}</td>
                    <td className="p-3 text-slate-600">{item.category}</td>
                    <td className="p-3 text-emerald-700">Active</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className={isList ? "divide-y divide-slate-100" : "grid grid-cols-2 gap-3 sm:grid-cols-3"}>
            {filtered.map((item) => (
              <div
                key={item.name}
                className={`${isList ? "py-3" : "rounded-lg border border-slate-100 p-4"} ${
                  component === "filter-transition" ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-md" : ""
                }`}
              >
                <span className="font-medium text-slate-800">{item.name}</span>
                <span className="ml-2 text-xs text-slate-500">{item.category}</span>
              </div>
            ))}
          </div>
        )}
        {!filtered.length && <p role="status" className="py-5 text-center text-sm text-slate-500">No matching items.</p>}
      </div>
    );
  }

  switch (component) {
    case "primitives":
      return (
        <div className="w-full max-w-2xl overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <caption className="p-4 text-left font-semibold text-slate-900">JavaScript primitive types</caption>
            <thead className="bg-slate-50 text-xs uppercase text-slate-500"><tr><th className="px-4 py-2">Type</th><th className="px-4 py-2">Example</th><th className="px-4 py-2">typeof</th></tr></thead>
            <tbody className="divide-y divide-slate-100">{primitiveExamples.map((primitive) => <tr key={primitive.slug}><th className="px-4 py-3 font-medium text-violet-800"><a href={`/components/${primitive.slug}`} className="hover:underline">{primitive.name}</a></th><td className="px-4 py-3"><code className="rounded bg-slate-100 px-1.5 py-1 text-xs">{primitive.value}</code></td><td className="px-4 py-3"><code className="text-xs text-slate-600">{primitive.type}</code></td></tr>)}</tbody>
          </table>
          <p className="border-t border-slate-100 p-4 text-xs leading-5 text-slate-500">JavaScript has seven primitive types. Although <code>typeof null</code> returns <code>"object"</code>, null is a primitive value.</p>
        </div>
      );
    case "string":
    case "number":
    case "boolean":
    case "bigint":
    case "symbol":
    case "undefined":
    case "null": {
      const primitive = primitiveExamples.find((item) => item.slug === component);
      if (!primitive) return null;
      return (
        <article className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-start justify-between gap-4">
            <div><p className="text-xs font-semibold uppercase tracking-wide text-violet-700">JavaScript primitive</p><h3 className="mt-1 text-xl font-bold text-slate-900">{primitive.name}</h3></div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">typeof {primitive.type}</span>
          </div>
          <div className="mt-4 rounded-lg bg-slate-950 p-4 text-sm text-emerald-300"><code>const value = {primitive.value};</code></div>
          <p className="mt-4 text-sm leading-6 text-slate-600">{primitive.note}</p>
          {component === "bigint" && <p className="mt-3 rounded-lg bg-amber-50 p-3 text-xs leading-5 text-amber-900">For arithmetic, convert explicitly: <code>1n + 2n</code> works, but <code>1n + 2</code> throws a TypeError.</p>}
          {component === "symbol" && <p className="mt-3 rounded-lg bg-violet-50 p-3 text-xs leading-5 text-violet-900">Even symbols with the same description are distinct: <code>Symbol("id") !== Symbol("id")</code>.</p>}
          {component === "null" && <p className="mt-3 rounded-lg bg-sky-50 p-3 text-xs leading-5 text-sky-900">Check explicitly with <code>value === null</code>; <code>typeof</code> cannot distinguish null from ordinary objects.</p>}
        </article>
      );
    }
    case "wrap-text":
      return (
        <article className="w-full max-w-lg rounded-xl bg-white p-5 text-left text-sm leading-6 text-slate-600">
          <div className="float-left mb-2 mr-4 grid h-20 w-20 place-items-center rounded-xl bg-gradient-to-br from-sky-300 to-violet-500 text-2xl text-white" aria-hidden="true">✦</div>
          <p>Floating content lets text flow around an image instead of forcing everything into a rigid grid. This layout can be useful for editorial cards, profiles, and short descriptions where the visual and the copy should feel connected.</p>
          <p className="mt-2">The float clears naturally after the content ends.</p>
        </article>
      );
    case "zebra-striping-a-table":
      return (
        <div className="w-full max-w-lg overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm"><caption className="p-3 text-left font-semibold text-slate-800">Team projects</caption><thead className="bg-slate-900 text-xs uppercase text-white"><tr><th className="px-3 py-2">Project</th><th className="px-3 py-2">Owner</th><th className="px-3 py-2">Status</th></tr></thead><tbody>{[["Aurora", "Avery", "Active"], ["Atlas", "Morgan", "Review"], ["Bloom", "Jordan", "Planning"], ["Cinder", "Riley", "Active"]].map(([project, owner, status], index) => <tr key={project} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}><td className="px-3 py-3 font-medium text-slate-800">{project}</td><td className="px-3 py-3 text-slate-600">{owner}</td><td className="px-3 py-3 text-slate-600">{status}</td></tr>)}</tbody></table>
        </div>
      );
    case "zig-zag-with-layout":
      return (
        <div className="w-full max-w-lg space-y-3">
          {[["Discover", "Understand the opportunity and explore ideas.", "from-violet-300 to-indigo-500"], ["Design", "Shape the strongest ideas into a clear experience.", "from-amber-200 to-rose-400"], ["Deliver", "Bring the finished experience to the people who need it.", "from-sky-300 to-cyan-600"]].map(([title, description, gradient], index) => <article key={title} className={`grid items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 sm:grid-cols-2 ${index % 2 ? "sm:[&>div:first-child]:order-2" : ""}`}><div aria-hidden="true" className={`grid h-24 place-items-center rounded-lg bg-gradient-to-br ${gradient} text-2xl font-bold text-white`}>{String(index + 1).padStart(2, "0")}</div><div className="p-2"><h3 className="font-semibold text-slate-900">{title}</h3><p className="mt-1 text-sm text-slate-600">{description}</p></div></article>)}
        </div>
      );
    case "zoom-hover":
      return (
        <div className="w-full max-w-sm overflow-hidden rounded-xl border border-slate-200 bg-white p-2">
          <div className="overflow-hidden rounded-lg">
            <img src={imageUrl} alt="Mountain landscape" className="h-52 w-full object-cover transition-transform duration-300 ease-out hover:scale-110 focus:scale-110" tabIndex={0} />
          </div>
          <p className="p-2 text-center text-xs text-slate-500">Hover or focus the image to zoom.</p>
        </div>
      );
    case "vertical-button-group":
      return (
        <div role="group" aria-label="View options" className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {["Overview", "Activity", "Settings"].map((item) => <button key={item} type="button" aria-pressed={verticalSelection === item} onClick={() => setVerticalSelection(item)} className={`border-b border-slate-200 px-5 py-3 text-left text-sm last:border-b-0 ${verticalSelection === item ? "bg-violet-700 font-medium text-white" : "text-slate-700 hover:bg-violet-50"}`}>{item}</button>)}
        </div>
      );
    case "vertical-line":
      return (
        <div className="flex h-40 items-center gap-5 rounded-xl bg-white px-6">
          <div className="text-right"><p className="text-sm font-semibold text-slate-800">Step one</p><p className="text-xs text-slate-500">Prepare</p></div>
          <span aria-hidden="true" className="h-20 w-px bg-gradient-to-b from-transparent via-violet-500 to-transparent" />
          <div><p className="text-sm font-semibold text-slate-800">Step two</p><p className="text-xs text-slate-500">Continue</p></div>
        </div>
      );
    case "vertical-menu":
      return (
        <div className="flex w-full max-w-sm overflow-hidden rounded-xl border border-slate-200 bg-white">
          <nav aria-label="Vertical menu" className="w-36 shrink-0 border-r border-slate-200 bg-slate-50 p-2">{["Overview", "Activity", "Settings"].map((item) => <button key={item} type="button" onClick={() => setVerticalSelection(item)} className={`mb-1 block w-full rounded-lg px-3 py-2 text-left text-sm last:mb-0 ${verticalSelection === item ? "bg-violet-100 font-medium text-violet-900" : "text-slate-600 hover:bg-white"}`}>{item}</button>)}</nav>
          <div className="p-4"><p className="text-xs text-slate-500">Selected section</p><p className="mt-1 font-semibold text-slate-900">{verticalSelection}</p></div>
        </div>
      );
    case "video":
      return (
        <div className="w-full max-w-lg overflow-hidden rounded-xl bg-slate-950">
          <div className="relative grid aspect-video place-items-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-violet-900">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(139,92,246,.4),transparent_35%)]" />
            <button type="button" aria-label={videoPlaying ? "Pause video preview" : "Play video preview"} aria-pressed={videoPlaying} onClick={() => setVideoPlaying((playing) => !playing)} className="relative grid h-14 w-14 place-items-center rounded-full bg-white/90 text-slate-900 shadow-lg">{videoPlaying ? <Pause size={21} /> : <Play size={21} className="ml-1" />}</button>
            <span className="absolute bottom-3 left-3 text-xs text-white/80">Video player preview</span>
            <span className="absolute bottom-3 right-3 text-xs text-white/80">{videoPlaying ? "Playing preview" : "0:00 / 0:00"}</span>
          </div>
          <p role="status" className="px-3 py-2 text-center text-xs text-slate-400">{videoPlaying ? "This is a visual player demo; no video is loaded." : "Select play to preview the player controls."}</p>
        </div>
      );
    case "vortex":
      return (
        <div className="relative grid h-56 w-full max-w-md place-items-center overflow-hidden rounded-2xl bg-slate-950">
          <div aria-hidden="true" className="absolute h-40 w-40 animate-[spin_12s_linear_infinite] rounded-full border-[3px] border-violet-400/70 [box-shadow:0_0_30px_rgba(139,92,246,.35),inset_0_0_30px_rgba(139,92,246,.25)] motion-reduce:animate-none" />
          <div aria-hidden="true" className="absolute h-32 w-48 animate-[spin_9s_linear_infinite_reverse] rounded-[50%] border-2 border-sky-300/70 [transform:rotateX(65deg)] [box-shadow:0_0_24px_rgba(56,189,248,.3)] motion-reduce:animate-none" />
          <div aria-hidden="true" className="absolute h-28 w-44 animate-[spin_7s_linear_infinite] rounded-[50%] border border-fuchsia-400/70 [transform:rotateY(65deg)] motion-reduce:animate-none" />
          <span aria-hidden="true" className="h-4 w-4 rounded-full bg-white shadow-[0_0_32px_12px_rgba(167,139,250,.65)]" />
          <p className="absolute bottom-3 text-xs text-slate-300">CSS vortex effect</p>
        </div>
      );
    case "tab-gallery":
    case "thumbnails":
      return (
        <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-3">
          <div className="grid h-48 place-items-center rounded-lg bg-gradient-to-br from-indigo-950 via-violet-800 to-sky-600 text-xl font-semibold text-white">{["Mountain light", "Violet horizon", "Evening glow"][galleryIndex]}</div>
          <div role="tablist" aria-label="Gallery thumbnails" className="mt-3 flex justify-center gap-2">
            {["Mountain", "Horizon", "Evening"].map((label, index) => <button key={label} type="button" role="tab" aria-selected={galleryIndex === index} aria-label={`${label} image`} onClick={() => setGalleryIndex(index)} className={`h-12 w-16 rounded-md bg-gradient-to-br ${["from-sky-300 to-indigo-500", "from-fuchsia-300 to-violet-700", "from-amber-200 to-rose-600"][index]} ${galleryIndex === index ? "ring-2 ring-violet-700 ring-offset-2" : "opacity-70"}`} />)}
          </div>
        </div>
      );
    case "tabbed":
      return (
        <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-4">
          <div role="tablist" aria-label="Sample information" className="flex border-b border-slate-200">{["Overview", "Details", "Updates"].map((tab) => <button key={tab} type="button" role="tab" aria-selected={activeTab === tab} onClick={() => setActiveTab(tab)} className={`border-b-2 px-4 py-2 text-sm ${activeTab === tab ? "border-violet-700 font-semibold text-violet-800" : "border-transparent text-slate-500"}`}>{tab}</button>)}</div>
          <div role="tabpanel" className="min-h-20 p-3 text-sm text-slate-600">{activeTab === "Overview" ? "A quick overview of this sample component." : activeTab === "Details" ? "More information appears in the selected tab panel." : "The latest sample updates are shown here."}</div>
        </div>
      );
    case "table":
      return (
        <div className="w-full max-w-lg overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm"><caption className="p-3 text-left font-semibold text-slate-800">Project status</caption><thead className="bg-slate-50 text-xs uppercase text-slate-500"><tr><th className="px-3 py-2">Project</th><th className="px-3 py-2">Owner</th><th className="px-3 py-2">Status</th></tr></thead><tbody className="divide-y divide-slate-100"><tr><td className="px-3 py-3">Aurora</td><td className="px-3 py-3">Avery</td><td className="px-3 py-3">Active</td></tr><tr><td className="px-3 py-3">Atlas</td><td className="px-3 py-3">Morgan</td><td className="px-3 py-3">In review</td></tr></tbody></table>
        </div>
      );
    case "tel":
      return (
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
          <p className="text-sm text-slate-600">Telephone link preview</p><a href="tel:+15550102020" className="mt-2 inline-flex font-semibold text-violet-700 hover:underline">Call (555) 010-2020</a><p className="mt-2 text-xs text-slate-500">A supported device may open its phone app.</p>
        </div>
      );
    case "testimonials":
      return (
        <figure className="w-full max-w-lg rounded-2xl bg-white p-6 text-left shadow-md">
          <div aria-hidden="true" className="text-4xl text-violet-500">“</div><blockquote className="-mt-2 text-lg leading-relaxed text-slate-800">The thoughtful details made this project feel effortless from the very first day.</blockquote><figcaption className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4"><span className="grid h-10 w-10 place-items-center rounded-full bg-violet-100 font-semibold text-violet-800">AM</span><span><strong className="block text-sm text-slate-900">Alex Morgan</strong><span className="text-xs text-slate-500">Product designer</span></span></figcaption>
        </figure>
      );
    case "text-buttons":
      return (
        <div className="flex flex-wrap items-center gap-5 rounded-xl bg-white p-5">
          <button type="button" className="text-sm font-medium text-violet-700 hover:underline focus-visible:outline-2 focus-visible:outline-violet-600">Learn more</button><button type="button" className="text-sm text-slate-600 hover:text-slate-950">Cancel</button><button type="button" className="text-sm font-semibold text-rose-700 hover:text-rose-900">Delete item</button>
        </div>
      );
    case "text-generate-effect":
    case "typewriter-effect":
      return (
        <div className="w-full max-w-lg rounded-xl bg-slate-950 p-6 text-center text-white">
          <p className={`inline-block overflow-hidden whitespace-nowrap border-r-2 border-violet-300 pr-1 text-xl font-semibold ${component === "typewriter-effect" ? "animate-[typing_3s_steps(28)_both,caret_.8s_step-end_infinite]" : "animate-[textReveal_2.5s_steps(28)_both]"}`}>Ideas become reality.</p>
          <style>{`@keyframes typing { from { max-width: 0 } to { max-width: 28ch } } @keyframes textReveal { from { clip-path: inset(0 100% 0 0) } to { clip-path: inset(0 0 0 0) } } @keyframes caret { 50% { border-color: transparent } } @media (prefers-reduced-motion: reduce) { .animate-\\[typing_3s_steps\\(28\\)_both\\,caret_.8s_step-end_infinite\\], .animate-\\[textReveal_2\\.5s_steps\\(28\\)_both\\] { animation: none } }`}</style>
        </div>
      );
    case "text-hover-effect":
      return (
        <div className="rounded-xl bg-white p-6 text-center"><a href="#hover-text" className="text-2xl font-semibold text-slate-700 transition-all duration-300 hover:text-violet-700 hover:underline hover:decoration-2">Hover or focus this text</a></div>
      );
    case "text-image-effect":
      return (
        <div className="rounded-xl bg-slate-950 p-8 text-center"><h2 className="bg-gradient-to-r from-fuchsia-400 via-violet-300 to-sky-300 bg-clip-text text-4xl font-black text-transparent sm:text-5xl">Colorful words</h2><p className="mt-2 text-xs text-slate-400">Gradient clipped to text.</p></div>
      );
    case "text-reveal-card":
      return (
        <article tabIndex={0} className="group w-full max-w-sm overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-950 to-violet-800 p-6 text-white transition-transform duration-300 hover:-translate-y-1 focus-within:-translate-y-1">
          <p className="text-xs uppercase tracking-widest text-violet-200">Hover or focus</p><h3 className="mt-3 text-xl font-semibold">A card with more to say</h3><p className="mt-3 max-h-0 overflow-hidden text-sm text-violet-100 opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100 group-focus-within:max-h-20 group-focus-within:opacity-100">Reveal supporting details without crowding the initial view.</p>
        </article>
      );
    case "text-rotator":
      return (
        <div className="rounded-xl bg-white p-6 text-center"><p className="text-xs uppercase tracking-widest text-slate-500">We make</p><p aria-live="polite" className="my-2 text-3xl font-bold text-violet-800">{["Ideas", "Experiences", "Connections"][galleryIndex]}</p><button type="button" onClick={() => setGalleryIndex((index) => (index + 1) % 3)} className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-700">Next phrase</button></div>
      );
    case "text-selection-color":
      return (
        <div className="max-w-md rounded-xl bg-white p-6 text-left"><p className="selection:bg-fuchsia-200 selection:text-fuchsia-950 text-sm leading-7 text-slate-700">Select this paragraph to see the custom highlight color applied to the selected text. The selection styles are defined with CSS utilities.</p></div>
      );
    case "ticker-marquee":
      return (
        <div className="w-full max-w-lg overflow-hidden rounded-xl border border-slate-200 bg-white py-4">
          <div className="flex w-max animate-[marquee_18s_linear_infinite] gap-8 whitespace-nowrap text-sm font-medium text-slate-700 motion-reduce:animate-none">{Array.from({ length: 2 }, (_, repeat) => <span key={repeat} className="flex gap-8">{["Design systems", "Product updates", "Community news", "New releases"].map((text) => <span key={text} className="flex items-center gap-2"><span className="text-violet-600">✦</span>{text}</span>)}</span>)}</div>
          <style>{`@keyframes marquee { to { transform: translateX(-50%) } }`}</style>
        </div>
      );
    case "timeline":
    case "tracing-beam":
      return (
        <ol className="relative w-full max-w-sm space-y-5 border-l-2 border-violet-200 pl-6">
          {[["2023", "Project started"], ["2024", "First release"], ["2025", "Community grows"]].map(([date, title]) => <li key={date} className="relative"><span className={`absolute -left-[1.95rem] top-1 h-3 w-3 rounded-full ring-4 ring-white ${component === "tracing-beam" ? "bg-gradient-to-b from-violet-600 to-sky-400" : "bg-violet-600"}`} /><time className="text-xs font-semibold text-violet-700">{date}</time><h3 className="mt-1 text-sm font-semibold text-slate-900">{title}</h3><p className="mt-1 text-xs text-slate-500">A milestone along the journey.</p></li>)}
        </ol>
      );
    case "to-do-list":
      return (
        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-4">
          <h3 className="mb-3 font-semibold text-slate-900">To do</h3><ul className="space-y-2">{todoItems.map((item, index) => <li key={item.label} className="flex items-center gap-2"><input id={`todo-${index}`} type="checkbox" checked={item.done} onChange={() => setTodoItems((current) => current.map((task, taskIndex) => taskIndex === index ? { ...task, done: !task.done } : task))} className="accent-violet-700" /><label htmlFor={`todo-${index}`} className={`text-sm ${item.done ? "text-slate-400 line-through" : "text-slate-700"}`}>{item.label}</label></li>)}</ul>
        </div>
      );
    case "toasts":
      return (
        <div className="relative grid h-40 w-full max-w-md place-items-center rounded-xl bg-slate-100 p-4">
          <button type="button" onClick={() => setSnackbarOpen(true)} className={button}>Show toast</button>{snackbarOpen && <div role="status" className="absolute right-3 top-3 flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-lg"><Check size={16} className="text-emerald-600" />Changes saved<button type="button" aria-label="Dismiss toast" onClick={() => setSnackbarOpen(false)}><X size={15} /></button></div>}
        </div>
      );
    case "toggle":
    case "toggle-switch-turn-on-and-off":
      return (
        <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5">
          <button type="button" role="switch" aria-checked={demoToggle} onClick={() => setDemoToggle((enabled) => !enabled)} className={`relative h-7 w-12 rounded-full transition-colors ${demoToggle ? "bg-violet-700" : "bg-slate-300"}`}><span className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${demoToggle ? "translate-x-6" : "translate-x-1"}`} /></button><span className="text-sm text-slate-700">{demoToggle ? "On" : "Off"}</span>
        </div>
      );
    case "toggle-darkmode":
      return (
        <div className={`w-full max-w-sm rounded-xl p-5 transition-colors ${mediaQuery ? "bg-slate-950 text-white" : "bg-white text-slate-900"} border border-slate-200`}>
          <div className="flex items-center justify-between"><div><h3 className="font-semibold">Theme preview</h3><p className={`mt-1 text-xs ${mediaQuery ? "text-slate-300" : "text-slate-500"}`}>Switch between light and dark mode.</p></div><button type="button" role="switch" aria-checked={mediaQuery} onClick={() => setMediaQuery((dark) => !dark)} className={`rounded-full px-3 py-2 text-xs font-medium ${mediaQuery ? "bg-white text-slate-900" : "bg-slate-900 text-white"}`}>{mediaQuery ? "Dark" : "Light"}</button></div>
        </div>
      );
    case "toggle-like-and-dislike":
      return (
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-5"><button type="button" aria-pressed={reaction === "like"} onClick={() => setReaction((value) => value === "like" ? "" : "like")} className={`rounded-lg px-4 py-2 text-sm ${reaction === "like" ? "bg-emerald-100 text-emerald-800" : "border border-slate-200 text-slate-700"}`}>Like · {reaction === "like" ? 13 : 12}</button><button type="button" aria-pressed={reaction === "dislike"} onClick={() => setReaction((value) => value === "dislike" ? "" : "dislike")} className={`rounded-lg px-4 py-2 text-sm ${reaction === "dislike" ? "bg-rose-100 text-rose-800" : "border border-slate-200 text-slate-700"}`}>Dislike · {reaction === "dislike" ? 4 : 3}</button></div>
      );
    case "toggle-password-visibility":
      return (
        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5"><label htmlFor="toggle-password" className="block text-sm font-medium text-slate-700">Password</label><div className="mt-2 flex gap-2"><input id="toggle-password" type={passwordShown ? "text" : "password"} value={password} onChange={(event) => setPassword(event.target.value)} className="min-w-0 flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Enter password" /><button type="button" aria-pressed={passwordShown} onClick={() => setPasswordShown((shown) => !shown)} className="rounded-lg border border-slate-200 px-3 text-xs">{passwordShown ? "Hide" : "Show"}</button></div></div>
      );
    case "toggle-show-hide":
      return (
        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5"><button type="button" aria-expanded={demoToggle} onClick={() => setDemoToggle((open) => !open)} className={button}>{demoToggle ? "Hide details" : "Show details"}</button>{demoToggle && <p className="mt-4 rounded-lg bg-violet-50 p-3 text-sm text-violet-900">This content is shown or hidden by the button.</p>}</div>
      );
    case "toggle-text":
      return (
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-center"><p aria-live="polite" className="mb-3 text-sm text-slate-700">{demoTextToggle ? "You are all set." : "Ready to continue?"}</p><button type="button" onClick={() => setDemoTextToggle((enabled) => !enabled)} className={button}>{demoTextToggle ? "Reset text" : "Toggle text"}</button></div>
      );
    case "toggle-class":
      return (
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-center"><p className={`rounded-lg p-4 text-sm transition-all ${demoToggle ? "scale-105 bg-violet-100 font-semibold text-violet-900" : "bg-slate-100 text-slate-600"}`}>Class toggles change this element's appearance.</p><button type="button" aria-pressed={demoToggle} onClick={() => setDemoToggle((active) => !active)} className={`${button} mt-3`}>ToggleClass</button></div>
      );
    case "toggling-styles-on-label-active-focus-for-input-field":
      return (
        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5"><label htmlFor="focus-style-email" className="text-sm font-medium text-slate-600 transition-colors has-[:focus]:text-violet-700 has-[:focus]:font-semibold">Email address<input id="focus-style-email" type="email" placeholder="you@example.com" className="mt-2 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-normal text-slate-900 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100" /></label></div>
      );
    case "tooltips":
      return (
        <div className="flex gap-8 rounded-xl bg-white p-8"><span className="group relative"><button type="button" aria-describedby="tooltip-hover" className="rounded-lg border border-slate-200 px-3 py-2 text-sm">Hover me</button><span id="tooltip-hover" role="tooltip" className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">Helpful hint</span></span><button type="button" title="More information" className="rounded-full bg-violet-100 px-3 py-2 text-sm text-violet-900">Focus or hover · i</button></div>
      );
    case "top-navigation":
      return (
        <nav aria-label="Top navigation preview" className="flex w-full max-w-xl flex-wrap items-center gap-4 rounded-xl border border-slate-200 bg-white p-4"><a href="#top-brand" className="mr-auto text-lg font-bold text-slate-900">Northstar</a><a href="#top-products" className="text-sm text-slate-600">Products</a><a href="#top-resources" className="text-sm text-slate-600">Resources</a><a href="#top-contact" className="rounded-lg bg-violet-700 px-3 py-2 text-sm text-white">Contact</a></nav>
      );
    case "transition-on-hover":
      return (
        <button type="button" className="rounded-xl bg-violet-600 px-6 py-4 font-semibold text-white shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-violet-800 hover:shadow-lg">Hover for transition</button>
      );
    case "transparent-image-text":
      return (
        <div className="relative h-56 w-full max-w-lg overflow-hidden rounded-xl"><img src={imageUrl} alt="Mountain landscape at sunset" className="h-full w-full object-cover" /><div className="absolute inset-x-0 bottom-0 bg-slate-950/55 p-4 text-white backdrop-blur-sm"><h3 className="font-semibold">A view worth remembering</h3><p className="mt-1 text-sm text-white/85">Caption over a translucent image overlay.</p></div></div>
      );
    case "tree-view":
      return (
        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-4 text-sm">
          <button type="button" aria-expanded={treeExpanded} onClick={() => setTreeExpanded((open) => !open)} className="flex items-center gap-2 font-medium text-slate-800"><ChevronDown size={15} className={`transition-transform ${treeExpanded ? "" : "-rotate-90"}`} />src</button>
          {treeExpanded && <ul className="ml-5 mt-2 space-y-2 border-l border-slate-200 pl-4 text-slate-600"><li>components/</li><li>pages/</li><li>App.tsx</li><li>main.tsx</li></ul>}
        </div>
      );
    case "trigger-button-on-enter":
      return (
        <form onSubmit={(event) => { event.preventDefault(); setEnterMessage("Enter key triggered the action."); }} className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5"><label htmlFor="enter-trigger-input" className="block text-sm font-medium text-slate-700">Type and press Enter<input id="enter-trigger-input" onKeyDown={(event) => { if (event.key === "Enter") setEnterMessage("Enter key triggered the action."); }} className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Press Enter" /></label><button type="submit" className={`${button} mt-3`}>Trigger action</button><p role="status" className="mt-2 min-h-4 text-xs text-emerald-700">{enterMessage}</p></form>
      );
    case "truncate-string-with-ellipsis":
      return (
        <div className="w-full max-w-xs rounded-xl border border-slate-200 bg-white p-5"><p className="mb-2 text-xs text-slate-500">Full text is available on hover or focus.</p><p tabIndex={0} title="A longer sample string that will be truncated with an ellipsis when it exceeds the available width." className="truncate rounded bg-violet-50 p-3 text-sm text-violet-950">A longer sample string that will be truncated with an ellipsis when it exceeds the available width.</p></div>
      );
    case "turn-off-autocomplete":
      return (
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()} className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5"><label className="block text-sm font-medium text-slate-700">Demo code<input name="demo-code-no-autofill" autoComplete="off" className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Autocomplete disabled" /></label><p className="mt-2 text-xs text-slate-500">The form and field opt out of autocomplete suggestions.</p></form>
      );
    case "turn-off-spellcheck":
      return (
        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5"><label htmlFor="spellcheck-off" className="block text-sm font-medium text-slate-700">Spellcheck disabled<textarea id="spellcheck-off" spellCheck={false} rows={3} className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Type a message..." /></label><p className="mt-2 text-xs text-slate-500">Browser spellcheck is disabled for this field.</p></div>
      );
    case "typical-device-breakpoints":
      return (
        <div className="w-full max-w-lg rounded-xl border border-slate-200 bg-white p-5"><p className="mb-3 text-sm text-slate-600">Resize the preview width to see the active label.</p><div className="rounded-lg bg-violet-100 p-4 text-center text-sm font-semibold text-violet-900"><span className="sm:hidden">Small · under 640px</span><span className="hidden sm:inline md:hidden">Small/medium · 640–767px</span><span className="hidden md:inline lg:hidden">Medium · 768–1023px</span><span className="hidden lg:inline xl:hidden">Large · 1024–1279px</span><span className="hidden xl:inline">Extra large · 1280px and above</span></div></div>
      );
    case "scroll-drawing":
      return (
        <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-5 text-center">
          <p className="text-sm text-slate-600">Scroll to trace the path</p>
          <div onScroll={(event) => { const element = event.currentTarget; setDrawingProgress(element.scrollTop / (element.scrollHeight - element.clientHeight || 1)); }} className="mt-3 h-44 overflow-y-auto rounded-lg bg-slate-50">
            <div className="relative grid h-96 place-items-center">
              <svg aria-label="Decorative scroll drawing" role="img" viewBox="0 0 120 300" className="absolute inset-0 h-full w-full">
                <path d="M60 0 C15 45 105 65 60 105 S15 165 60 200 S105 255 60 300" fill="none" stroke="#8b5cf6" strokeWidth="4" strokeDasharray="1" pathLength="1" strokeDashoffset={1 - drawingProgress} />
              </svg>
              <span className="relative rounded-full bg-white px-3 py-2 text-xs text-violet-800 shadow">Scroll the drawing</span>
            </div>
          </div>
        </div>
      );
    case "scroll-indicator":
      return (
        <div className="w-full max-w-md">
          <div className="h-2 overflow-hidden rounded-full bg-slate-200" role="progressbar" aria-label="Preview scroll progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={comparison}>
            <div className="h-full rounded-full bg-violet-600 transition-all" style={{ width: `${comparison}%` }} />
          </div>
          <div onScroll={(event) => { const element = event.currentTarget; setComparison(Math.round((element.scrollTop / (element.scrollHeight - element.clientHeight || 1)) * 100)); }} className="mt-2 h-40 space-y-3 overflow-y-auto rounded-xl border border-slate-200 bg-white p-3">
            {["Start", "Keep going", "Halfway", "Almost there", "Finish"].map((item) => <p key={item} className="grid h-24 place-items-center rounded-lg bg-violet-50 text-sm text-slate-700">{item}</p>)}
          </div>
          <p className="mt-1 text-right text-xs text-slate-500">{comparison}% scrolled</p>
        </div>
      );
    case "scroll-page-horizontally-with-mouse-wheel":
      return (
        <div className="w-full max-w-lg">
          <p className="mb-2 text-xs text-slate-500">Scroll over the cards with a mouse wheel or trackpad.</p>
          <div onWheel={(event) => { event.currentTarget.scrollLeft += event.deltaY; }} className="flex gap-3 overflow-x-auto rounded-xl border border-slate-200 bg-white p-3">
            {["Aurora", "Atlas", "Bloom", "Cinder", "Drift"].map((item, index) => <article key={item} className="grid h-28 min-w-36 place-items-center rounded-lg bg-gradient-to-br from-violet-100 to-sky-100 p-3 text-sm font-medium text-slate-800">{item}<span className="text-xs font-normal text-slate-500">Card {index + 1}</span></article>)}
          </div>
        </div>
      );
    case "scroll-to-top-bottom":
      return (
        <div className="w-full max-w-md">
          <div className="mb-2 flex justify-between">
            <button type="button" onClick={() => document.getElementById("scroll-top-bottom-demo")?.scrollTo({ top: 0, behavior: "smooth" })} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm">Scroll to top</button>
            <button type="button" onClick={() => { const panel = document.getElementById("scroll-top-bottom-demo"); panel?.scrollTo({ top: panel.scrollHeight, behavior: "smooth" }); }} className={button}>Scroll to bottom</button>
          </div>
          <div id="scroll-top-bottom-demo" className="h-40 space-y-3 overflow-y-auto rounded-xl border border-slate-200 bg-white p-3">
            {["Top of the content", "Keep scrolling", "More content", "Bottom of the content"].map((item) => <p key={item} className="grid h-24 place-items-center rounded-lg bg-slate-50 text-sm text-slate-700">{item}</p>)}
          </div>
        </div>
      );
    case "search-bar":
    case "search-menu":
      return (
        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-4">
          <label htmlFor="feature-search" className="sr-only">{component === "search-menu" ? "Search menu items" : "Search items"}</label>
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-3"><Search size={16} className="text-slate-400" /><input id="feature-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects..." className="min-w-0 flex-1 py-2.5 text-sm outline-none" /></div>
          <ul className="mt-3 divide-y divide-slate-100">{items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())).map((item) => <li key={item.name} className="flex justify-between py-2 text-sm"><span>{item.name}</span><span className="text-slate-500">{item.category}</span></li>)}</ul>
          {!items.some((item) => item.name.toLowerCase().includes(query.toLowerCase())) && <p role="status" className="py-3 text-center text-sm text-slate-500">No matches found.</p>}
        </div>
      );
    case "search-button":
      return (
        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-3">
          {searchOpen && <label className="sr-only" htmlFor="button-search">Search</label>}
          {searchOpen && <input id="button-search" autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search..." className="w-40 rounded-lg border border-slate-200 px-3 py-2 text-sm" />}
          <button type="button" aria-label={searchOpen ? "Close search" : "Open search"} aria-expanded={searchOpen} onClick={() => { setSearchOpen((open) => !open); setQuery(""); }} className="grid h-10 w-10 place-items-center rounded-full bg-violet-700 text-white"><Search size={18} /></button>
        </div>
      );
    case "section-counter":
      return (
        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-4">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-slate-500">Sections · 3 total</p>
          {["Introduction", "Features", "Get started"].map((item, index) => <div key={item} className="flex items-center gap-3 border-t border-slate-100 py-3"><span className="grid h-7 w-7 place-items-center rounded-full bg-violet-100 text-xs font-semibold text-violet-800">{String(index + 1).padStart(2, "0")}</span><span className="text-sm text-slate-700">{item}</span></div>)}
        </div>
      );
    case "selectable":
      return (
        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-4">
          <p className="mb-3 text-sm font-semibold text-slate-800">Choose your interests</p>
          <div className="flex flex-wrap gap-2">{["Design", "Engineering", "Research", "Product"].map((item) => <button key={item} type="button" aria-pressed={selectedTile === item} onClick={() => setSelectedTile((selected) => selected === item ? "" : item)} className={`rounded-full border px-3 py-1.5 text-sm ${selectedTile === item ? "border-violet-700 bg-violet-700 text-white" : "border-slate-200 text-slate-700 hover:bg-slate-50"}`}>{item}</button>)}</div>
          <p role="status" className="mt-3 text-xs text-slate-500">{selectedTile ? `Selected: ${selectedTile}` : "Nothing selected"}</p>
        </div>
      );
    case "shake-an-image":
      return (
        <div className="text-center">
          <img src={imageUrl} alt="Mountain landscape" className={`h-40 w-64 rounded-xl object-cover ${shaking ? "animate-[shake_.4s_ease-in-out]" : ""}`} onAnimationEnd={() => setShaking(false)} />
          <button type="button" onClick={() => setShaking(true)} className={`${button} mt-3`}>Shake image</button>
          <style>{`@keyframes shake { 25% { transform: translateX(-8px) rotate(-2deg) } 50% { transform: translateX(8px) rotate(2deg) } 75% { transform: translateX(-5px) } } @media (prefers-reduced-motion: reduce) { .animate-\\[shake_.4s_ease-in-out\\] { animation: none } }`}</style>
        </div>
      );
    case "shapes":
      return (
        <div className="flex flex-wrap items-center justify-center gap-6 rounded-xl bg-white p-6">
          <span aria-label="Circle" role="img" className="h-16 w-16 rounded-full bg-violet-500" />
          <span aria-label="Square" role="img" className="h-16 w-16 rounded-lg bg-sky-500" />
          <span aria-label="Diamond" role="img" className="h-14 w-14 rotate-45 bg-rose-400" />
          <span aria-label="Triangle" role="img" className="h-0 w-0 border-x-[2rem] border-b-[3.5rem] border-x-transparent border-b-amber-400" />
        </div>
      );
    case "share-box-social-media":
    case "social-media-buttons":
      return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center">
          <p className="mb-3 text-sm font-semibold text-slate-800">{component === "share-box-social-media" ? "Share this page" : "Connect with us"}</p>
          <div role="group" aria-label="Social media options" className="flex justify-center gap-2">{["f", "𝕏", "in", "✉"].map((label, index) => <button key={label} type="button" aria-label={["Facebook", "X", "LinkedIn", "Email"][index]} onClick={() => setPlayerStatus(`${["Facebook", "X", "LinkedIn", "Email"][index]} option selected`)} className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 font-semibold text-violet-800 hover:bg-violet-50">{label}</button>)}</div>
          <p role="status" className="mt-3 min-h-4 text-xs text-slate-500">{playerStatus}</p>
        </div>
      );
    case "shooting-stars":
      return (
        <div className="relative h-52 w-full max-w-md overflow-hidden rounded-xl bg-slate-950">
          {Array.from({ length: 28 }, (_, index) => <span key={index} aria-hidden="true" className="absolute h-1 w-1 rounded-full bg-white/80" style={{ left: `${(index * 37 + 8) % 98}%`, top: `${(index * 53 + 11) % 94}%` }} />)}
          {[0, 1, 2].map((index) => <span key={index} aria-hidden="true" className="absolute h-px w-20 origin-left rotate-[25deg] bg-gradient-to-r from-transparent via-sky-200 to-transparent animate-[shootingStar_3s_linear_infinite]" style={{ left: `${15 + index * 30}%`, top: `${15 + index * 22}%`, animationDelay: `${index * 1.1}s` }} />)}
          <p className="absolute inset-0 grid place-items-center text-sm text-white">Shooting stars</p>
          <style>{`@keyframes shootingStar { 0% { opacity: 0; transform: translate(0,0) } 10% { opacity: 1 } 50%,100% { opacity: 0; transform: translate(100px,60px) } } @media (prefers-reduced-motion: reduce) { * { animation: none !important } }`}</style>
        </div>
      );
    case "show":
      return (
        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5 text-center">
          {visible && <p className="mb-4 rounded-lg bg-violet-50 p-4 text-sm text-violet-900">Here is the content you asked to see.</p>}
          <button type="button" onClick={() => setVisible((shown) => !shown)} className={button}>{visible ? "Hide content" : "Show content"}</button>
        </div>
      );
    case "show-and-hide-div-on-checkbox":
      return (
        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5">
          <label className="flex items-center gap-2 text-sm text-slate-700"><input type="checkbox" checked={showChecked} onChange={(event) => setShowChecked(event.target.checked)} />Show details</label>
          {showChecked && <div className="mt-4 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">The checkbox controls this content.</div>}
        </div>
      );
    case "show-force-scrollbar":
      return (
        <div className="h-40 w-full max-w-sm overflow-y-scroll rounded-xl border border-slate-200 bg-white p-3">
          <p className="sticky top-0 rounded bg-white/90 p-2 text-xs font-semibold text-slate-600">Scrollbar stays visible</p>
          {Array.from({ length: 8 }, (_, index) => <p key={index} className="my-2 rounded bg-slate-50 p-3 text-sm text-slate-700">Scrollable row {index + 1}</p>)}
        </div>
      );
    case "shrink-header-on-scroll":
    case "shrink-navigation-menu-on-scroll":
    case "slide-down-bar-on-scroll":
      return (
        <div onScroll={(event) => setScrollPastFold(event.currentTarget.scrollTop > 24)} className="h-48 w-full max-w-md overflow-y-auto rounded-xl border border-slate-200 bg-slate-50">
          {component === "slide-down-bar-on-scroll" && <div className={`sticky top-0 z-10 bg-violet-700 text-center text-xs text-white transition-all ${scrollPastFold ? "max-h-10 py-2 opacity-100" : "max-h-0 overflow-hidden py-0 opacity-0"}`}>New updates are available</div>}
          {component === "shrink-header-on-scroll" ? <header className={`sticky top-0 z-10 bg-white px-4 font-semibold text-slate-900 shadow-sm transition-all ${scrollPastFold ? "py-2 text-sm" : "py-6 text-xl"}`}>Northstar</header> : component === "shrink-navigation-menu-on-scroll" ? <nav className={`sticky top-0 z-10 flex justify-around bg-white text-slate-700 shadow-sm transition-all ${scrollPastFold ? "py-2 text-xs" : "py-5 text-sm"}`} aria-label="Shrink on scroll preview"><span>Home</span><span>Work</span><span>About</span></nav> : null}
          <div className="space-y-3 p-4">{["Scroll to see the change", "Keep scrolling down", "The header responds", "End of preview"].map((item) => <p key={item} className="grid h-20 place-items-center rounded-lg bg-white text-sm text-slate-600">{item}</p>)}</div>
        </div>
      );
    case "side-by-side-images":
      return (
        <div className="grid w-full max-w-lg grid-cols-1 gap-3 sm:grid-cols-2">
          {[0, 1].map((index) => <img key={index} src={imageUrl} alt={`Side-by-side landscape ${index + 1}`} className={`h-40 w-full rounded-xl object-cover ${index ? "object-right" : "object-left"}`} />)}
        </div>
      );
    case "side-navigation":
      return (
        <div className="flex h-48 w-full max-w-md overflow-hidden rounded-xl border border-slate-200 bg-white">
          {sideNavOpen && <nav aria-label="Side navigation preview" className="w-36 shrink-0 space-y-1 border-r border-slate-200 bg-slate-50 p-3 text-sm"><button type="button" onClick={() => setActiveSection("Overview")} className={`block w-full rounded p-2 text-left ${activeSection === "Overview" ? "bg-violet-100 text-violet-900" : "text-slate-600"}`}>Overview</button><button type="button" onClick={() => setActiveSection("Activity")} className={`block w-full rounded p-2 text-left ${activeSection === "Activity" ? "bg-violet-100 text-violet-900" : "text-slate-600"}`}>Activity</button></nav>}
          <div className="flex-1 p-4"><button type="button" onClick={() => setSideNavOpen((open) => !open)} className="rounded border border-slate-200 px-2 py-1 text-xs">Toggle navigation</button><p className="mt-4 text-sm font-semibold">{activeSection}</p></div>
        </div>
      );
    case "side-by-side-tables":
      return (
        <div className="grid w-full max-w-2xl gap-3 sm:grid-cols-2">
          {["Starter", "Team"].map((plan, index) => <table key={plan} className="overflow-hidden rounded-xl border border-slate-200 bg-white text-left text-sm"><caption className="bg-violet-50 p-3 font-semibold text-violet-900">{plan} plan</caption><tbody>{[["Price", index ? "$24" : "$9"], ["Seats", index ? "10" : "2"], ["Storage", index ? "100 GB" : "10 GB"]].map(([label, value]) => <tr key={label} className="border-t border-slate-100"><th className="px-3 py-2 font-normal text-slate-500">{label}</th><td className="px-3 py-2 font-medium text-slate-800">{value}</td></tr>)}</tbody></table>)}
        </div>
      );
    case "signup-form":
      return (
        <form onSubmit={(event) => { event.preventDefault(); setSignupComplete(true); }} onChange={() => setSignupComplete(false)} className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="font-semibold text-slate-900">Stay in the loop</h3><p className="mt-1 text-sm text-slate-500">Get occasional product updates.</p>
          <label htmlFor="signup-email" className="sr-only">Email address</label><input id="signup-email" type="email" required placeholder="you@example.com" className="mt-4 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
          <button type="submit" className={`${button} mt-3 w-full`}>Sign up</button>{signupComplete && <p role="status" className="mt-3 text-sm text-emerald-700">Thanks for signing up!</p>}
        </form>
      );
    case "single-page-with-smooth-scrolling-fixed-navigation":
    case "smooth-scrolling":
      return (
        <div className="w-full max-w-md">
          <nav aria-label="Smooth scrolling sections" className={`${component.startsWith("single-page") ? "sticky" : ""} top-0 z-10 mb-2 flex justify-center gap-2 rounded-lg bg-white p-2 shadow-sm`}>
            {["Intro", "Details", "Finish"].map((section) => <button key={section} type="button" onClick={() => document.getElementById(`smooth-section-${section}`)?.scrollIntoView({ behavior: "smooth", block: "nearest" })} className="rounded-md px-3 py-1.5 text-xs text-violet-800 hover:bg-violet-50">{section}</button>)}
          </nav>
          <div className="h-48 space-y-3 overflow-y-auto rounded-xl border border-slate-200 bg-white p-3">{["Intro", "Details", "Finish"].map((section) => <section id={`smooth-section-${section}`} key={section} className="grid h-32 place-items-center rounded-lg bg-violet-50 text-sm font-semibold text-slate-800">{section}</section>)}</div>
        </div>
      );
    case "skills-bars":
      return (
        <div className="w-full max-w-sm space-y-4 rounded-xl border border-slate-200 bg-white p-5">
          {[["Design", 88], ["Development", 74], ["Research", 62]].map(([skill, value]) => <div key={skill}><div className="mb-1 flex justify-between text-xs"><span className="font-medium text-slate-700">{skill}</span><span className="text-slate-500">{value}%</span></div><div role="progressbar" aria-label={`${skill} skill`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={Number(value)} className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-gradient-to-r from-violet-600 to-sky-500" style={{ width: `${value}%` }} /></div></div>)}
        </div>
      );
    case "slide-down":
    case "slide-toggle":
    case "slide-up":
      return (
        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5">
          <button type="button" aria-expanded={visible} onClick={() => setVisible((open) => !open)} className={button}>{visible ? "Close panel" : component === "slide-up" ? "Slide up to reveal" : "Toggle panel"}</button>
          <div className={`overflow-hidden transition-all duration-300 ${visible ? "mt-4 max-h-40 translate-y-0 opacity-100" : "max-h-0 -translate-y-3 opacity-0"}`}><div className="rounded-lg bg-violet-50 p-4 text-sm text-violet-900">This panel slides {component === "slide-up" ? "into view" : component === "slide-down" ? "down" : "open and closed"}.</div></div>
        </div>
      );
    case "slideshow-carousel":
    case "slideshow-gallery":
    case "slideshow-with-audio-player":
      return (
        <div className="w-full max-w-md overflow-hidden rounded-xl border border-slate-200 bg-white p-4">
          <div className="relative grid h-44 place-items-center overflow-hidden rounded-lg bg-gradient-to-br from-indigo-950 via-violet-800 to-sky-700 text-center text-white">
            <span className="text-xl font-semibold">{slideshowLabels[slideIndex]}</span>
            <button type="button" aria-label="Previous slide" onClick={() => setSlideIndex((index) => (index - 1 + slideshowLabels.length) % slideshowLabels.length)} className="absolute left-2 grid h-9 w-9 place-items-center rounded-full bg-white/20"><ChevronLeft size={18} /></button>
            <button type="button" aria-label="Next slide" onClick={() => setSlideIndex((index) => (index + 1) % slideshowLabels.length)} className="absolute right-2 grid h-9 w-9 place-items-center rounded-full bg-white/20"><ChevronRight size={18} /></button>
          </div>
          {component === "slideshow-gallery" && <div className="mt-3 flex justify-center gap-2">{slideshowLabels.map((label, index) => <button key={label} type="button" aria-label={`Show slide ${index + 1}`} aria-pressed={index === slideIndex} onClick={() => setSlideIndex(index)} className={`h-2.5 w-8 rounded-full ${index === slideIndex ? "bg-violet-700" : "bg-slate-200"}`} />)}</div>}
          {component === "slideshow-with-audio-player" && <div className="mt-3 flex items-center justify-between rounded-lg bg-slate-50 p-3"><span className="text-xs text-slate-600">Audio player preview · no audio loaded</span><button type="button" aria-label={playing ? "Pause audio preview" : "Play audio preview"} onClick={() => setPlaying((isPlaying) => !isPlaying)} className="grid h-9 w-9 place-items-center rounded-full bg-violet-700 text-white">{playing ? <Pause size={15} /> : <Play size={15} />}</button></div>}
          <p className="mt-2 text-center text-xs text-slate-500">{slideIndex + 1} / {slideshowLabels.length}</p>
        </div>
      );
    case "snackbar":
      return (
        <div className="relative grid h-40 w-full max-w-md place-items-center rounded-xl bg-slate-100 p-4">
          <button type="button" onClick={() => setSnackbarOpen(true)} className={button}>Show snackbar</button>
          {snackbarOpen && <div role="status" className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg bg-slate-900 px-4 py-3 text-sm text-white shadow-lg"><span>Changes saved successfully.</span><button type="button" onClick={() => setSnackbarOpen(false)} aria-label="Dismiss notification"><X size={16} /></button></div>}
        </div>
      );
    case "social-login-form":
      return (
        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-center font-semibold text-slate-900">Welcome back</h3><p className="mt-1 text-center text-xs text-slate-500">Demo actions only; no authentication is performed.</p>
          <div className="mt-4 grid gap-2"><button type="button" onClick={() => setPlayerStatus("Google sign-in preview selected")} className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-700">Continue with Google</button><button type="button" onClick={() => setPlayerStatus("Apple sign-in preview selected")} className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-700">Continue with Apple</button></div>
          <p role="status" className="mt-3 min-h-4 text-center text-xs text-slate-500">{playerStatus}</p>
        </div>
      );
    case "sort-list":
      return (
        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-4">
          <button type="button" onClick={() => setSortAscending((ascending) => !ascending)} className="mb-2 rounded-lg border border-slate-200 px-3 py-1.5 text-xs">{sortAscending ? "Sort Z–A" : "Sort A–Z"}</button>
          <ul className="divide-y divide-slate-100">{[...items].sort((a, b) => sortAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)).map((item) => <li key={item.name} className="py-2 text-sm text-slate-700">{item.name}</li>)}</ul>
        </div>
      );
    case "sort-table":
      return (
        <div className="w-full max-w-md overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm"><thead className="bg-slate-50"><tr><th className="px-3 py-2"><button type="button" onClick={() => setSortAscending((ascending) => !ascending)} className="font-semibold">Name {sortAscending ? "↑" : "↓"}</button></th><th className="px-3 py-2">Category</th></tr></thead><tbody className="divide-y divide-slate-100">{[...items].sort((a, b) => sortAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)).map((item) => <tr key={item.name}><td className="px-3 py-2">{item.name}</td><td className="px-3 py-2 text-slate-500">{item.category}</td></tr>)}</tbody></table>
        </div>
      );
    case "sparkles":
      return (
        <div className="relative overflow-hidden rounded-2xl bg-slate-950 px-10 py-12 text-center text-white">
          <span aria-hidden="true" className="absolute left-5 top-4 animate-pulse text-2xl text-violet-300">✦</span><span aria-hidden="true" className="absolute right-8 top-8 animate-pulse text-lg text-sky-300 [animation-delay:500ms]">✧</span>
          <h2 className="text-2xl font-bold">A little sparkle <span aria-hidden="true" className="text-amber-300">✦</span></h2>
        </div>
      );
    case "speed-meter":
      return (
        <div className="w-full max-w-xs rounded-xl border border-slate-200 bg-white p-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Speed</p><p className="my-2 text-4xl font-bold tabular-nums text-slate-900">{rangeValue}<span className="ml-1 text-base font-normal text-slate-500">km/h</span></p><meter min="0" max="100" value={rangeValue} className="h-3 w-full accent-violet-600">{rangeValue} km/h</meter><input aria-label="Set speed" type="range" min="0" max="100" value={rangeValue} onChange={(event) => setRangeValue(Number(event.target.value))} className="mt-3 w-full accent-violet-700" />
        </div>
      );
    case "split-buttons":
      return (
        <div className="inline-flex overflow-hidden rounded-lg shadow-sm">
          <button type="button" onClick={() => setPlayerStatus("Saved")} className="bg-violet-700 px-4 py-2 text-sm font-medium text-white hover:bg-violet-800">Save</button>
          <button type="button" aria-label="More save options" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="border-l border-violet-500 bg-violet-700 px-3 text-white hover:bg-violet-800"><ChevronDown size={16} /></button>
          {menuOpen && <span role="status" className="ml-3 self-center text-xs text-slate-600">Save options opened</span>}
        </div>
      );
    case "split-screen":
      return (
        <div className="grid min-h-52 w-full max-w-lg overflow-hidden rounded-xl sm:grid-cols-2">
          <section className="grid place-items-center bg-violet-700 p-6 text-center text-white"><div><p className="text-xs uppercase tracking-widest text-violet-200">Panel one</p><h3 className="mt-2 text-xl font-bold">Create</h3></div></section>
          <section className="grid place-items-center bg-slate-900 p-6 text-center text-white"><div><p className="text-xs uppercase tracking-widest text-slate-400">Panel two</p><h3 className="mt-2 text-xl font-bold">Explore</h3></div></section>
        </div>
      );
    case "spotlight":
    case "spotlight-new":
      return (
        <article onPointerMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); setPosition({ x: ((event.clientX - rect.left) / rect.width) * 100, y: ((event.clientY - rect.top) / rect.height) * 100 }); }} className="w-full max-w-sm rounded-2xl border border-slate-700 bg-slate-950 p-7 text-white" style={{ backgroundImage: `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(139,92,246,.4), transparent 55%)` }}>
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-300">{component === "spotlight-new" ? "New spotlight" : "Pointer spotlight"}</p><h3 className="mt-3 text-xl font-bold">Follow the light</h3><p className="mt-2 text-sm text-slate-300">Move the pointer across this card.</p>
        </article>
      );
    case "sprite":
    case "sprite-spin":
      return (
        <div className="rounded-xl border border-slate-200 bg-white p-6 text-center">
          <div className={`mx-auto grid h-24 w-24 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-sky-400 text-5xl text-white shadow-lg ${component === "sprite-spin" ? "animate-[spin_2s_steps(8)_infinite]" : ""}`}>✦</div>
          <p className="mt-3 text-xs text-slate-500">{component === "sprite" ? "Static sprite frame preview" : "Stepped sprite spin animation"}</p>
          {component === "sprite" && <button type="button" onClick={() => setSlideIndex((index) => (index + 1) % 4)} className="mt-2 rounded-lg border border-slate-200 px-3 py-1.5 text-xs">Next frame · {slideIndex + 1}</button>}
        </div>
      );
    case "stacked-form":
      return (
        <form onSubmit={(event) => event.preventDefault()} className="grid w-full max-w-sm gap-3 rounded-xl border border-slate-200 bg-white p-5">
          <label className="grid gap-1 text-xs font-medium text-slate-600">Full name<input required className="rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Your name" /></label>
          <label className="grid gap-1 text-xs font-medium text-slate-600">Email<input required type="email" className="rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="you@example.com" /></label>
          <label className="grid gap-1 text-xs font-medium text-slate-600">Message<textarea rows={3} className="resize-y rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="How can we help?" /></label>
          <button type="submit" className={button}>Send message</button>
        </form>
      );
    case "star-rating":
      return (
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
          <p className="text-sm font-medium text-slate-700">Rate this preview</p><div role="group" aria-label="Star rating" className="mt-2 flex justify-center">{[1, 2, 3, 4, 5].map((rating) => <button key={rating} type="button" aria-label={`${rating} ${rating === 1 ? "star" : "stars"}`} aria-pressed={starRating === rating} onClick={() => setStarRating(rating)} className={`px-1 text-3xl ${rating <= starRating ? "text-amber-400" : "text-slate-300"}`}>★</button>)}</div><p role="status" className="mt-1 text-xs text-slate-500">{starRating ? `You selected ${starRating} out of 5` : "No rating yet"}</p>
        </div>
      );
    case "user-rating":
      return (
        <section className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm" aria-labelledby="user-rating-title">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-violet-100 text-lg font-semibold text-violet-800" aria-hidden="true">AM</div>
          <h3 id="user-rating-title" className="mt-3 font-semibold text-slate-900">Alex Morgan</h3>
          <p className="text-xs text-slate-500">Product designer · Community member</p>
          <div className="mt-4 flex items-center justify-center gap-2"><span className="text-2xl font-bold text-slate-900">{userRating ? ((4.7 * 128 + userRating) / 129).toFixed(1) : "4.7"}</span><span aria-label="Rated 4.7 out of 5" className="text-amber-400">★★★★★</span><span className="text-xs text-slate-500">(128)</span></div>
          <div className="mt-4 border-t border-slate-100 pt-4">
            <p className="text-sm font-medium text-slate-700">Rate this user</p>
            <div role="group" aria-label="Your rating for Alex Morgan" className="mt-1 flex justify-center">{[1, 2, 3, 4, 5].map((rating) => <button key={rating} type="button" aria-label={`${rating} ${rating === 1 ? "star" : "stars"}`} aria-pressed={userRating === rating} onClick={() => setUserRating(rating)} className={`px-1 text-3xl transition-colors ${rating <= userRating ? "text-amber-400" : "text-slate-300 hover:text-amber-300"}`}>★</button>)}</div>
            <p role="status" className="mt-1 min-h-4 text-xs text-slate-500">{userRating ? `Your rating: ${userRating} out of 5` : "Select a star to leave a rating"}</p>
          </div>
        </section>
      );
    case "sticky-element":
    case "sticky-header":
    case "sticky-image":
    case "sticky-navbar":
    case "sticky-scroll-reveal":
    case "sticky-social-bar":
      return (
        <div className="h-52 w-full max-w-md overflow-y-auto rounded-xl border border-slate-200 bg-white">
          {component === "sticky-navbar" && <nav aria-label="Sticky navbar preview" className="sticky top-0 z-10 flex justify-around bg-violet-700 p-3 text-xs text-white"><span>Home</span><span>Work</span><span>About</span></nav>}
          {component === "sticky-header" && <h3 className="sticky top-0 bg-slate-900 p-3 text-sm font-semibold text-white">Sticky header</h3>}
          <div className="flex gap-3 p-3">
            {component === "sticky-image" && <img src={imageUrl} alt="Sticky landscape" className="sticky top-3 h-20 w-20 rounded-lg object-cover" />}
            {component === "sticky-social-bar" && <div className="sticky top-3 flex h-fit flex-col gap-2 rounded-full bg-violet-100 p-2 text-xs text-violet-900"><span aria-label="Share">↗</span><span aria-label="Like">♡</span></div>}
            <div className="min-w-0 flex-1 space-y-3">
              {component === "sticky-element" && <strong className="sticky top-2 block rounded bg-amber-100 p-2 text-xs text-amber-900">Sticky element</strong>}
              {component === "sticky-scroll-reveal" && <strong className="sticky top-0 block rounded bg-violet-100 p-2 text-xs text-violet-900">Chapter {slideIndex + 1}</strong>}
              {["Scroll to see sticky behavior", "Content section two", "Content section three", "More preview content", "End of scroll area"].map((item) => <p key={item} className="grid h-20 place-items-center rounded-lg bg-slate-50 text-xs text-slate-600">{item}</p>)}
            </div>
          </div>
        </div>
      );
    case "sticky-footer":
      return (
        <div className="flex h-56 w-full max-w-sm flex-col rounded-xl border border-slate-200 bg-white">
          <main className="flex-1 p-5"><h3 className="font-semibold text-slate-900">Page content</h3><p className="mt-2 text-sm text-slate-600">The footer sits at the bottom when content is short.</p></main>
          <footer className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-center text-xs text-slate-500">Sticky footer · Preview</footer>
        </div>
      );
    case "stroke-text":
      return (
        <div className="rounded-xl bg-slate-950 px-8 py-10 text-center">
          <h2 className="text-5xl font-black text-transparent [-webkit-text-stroke:1.5px_#a78bfa]">OUTLINE</h2><p className="mt-2 text-xs text-slate-400">Outlined with CSS text stroke.</p>
        </div>
      );
    case "style-hr":
      return (
        <div className="w-full max-w-md space-y-6 rounded-xl bg-white p-6 text-sm text-slate-700">
          <p>Section one</p><hr className="border-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent h-px" /><p>Gradient divider</p><hr className="border-0 border-t-2 border-dashed border-slate-300" /><p>Dashed divider</p>
        </div>
      );
    case "subnavigation-menu":
      return (
        <div className="w-full max-w-lg rounded-xl border border-slate-200 bg-white">
          <nav aria-label="Primary navigation" className="flex gap-4 border-b border-slate-200 px-4 py-3 text-sm text-slate-600"><button type="button" onClick={() => setActiveTab("Overview")}>Products</button><button type="button" onClick={() => setActiveTab("Resources")}>Resources</button></nav>
          <nav aria-label={`${activeTab} subnavigation`} className="flex flex-wrap gap-4 bg-slate-50 px-4 py-3 text-xs text-violet-800"><a href="#sub-all">All {activeTab}</a><a href="#sub-guides">Guides</a><a href="#sub-updates">Updates</a></nav>
        </div>
      );
    case "svg":
    case "svg-mask-effect":
      return (
        <div className="rounded-xl bg-slate-950 p-5">
          <svg role="img" aria-label={component === "svg" ? "Colorful geometric shapes" : "Gradient revealed through an SVG mask"} viewBox="0 0 320 150" className="h-auto w-full max-w-md">
            <defs><linearGradient id="demo-gradient" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#8b5cf6" /><stop offset="1" stopColor="#22d3ee" /></linearGradient><mask id="demo-mask"><rect width="320" height="150" fill="black" /><circle cx="160" cy="75" r="58" fill="white" /></mask></defs>
            {component === "svg-mask-effect" ? <><rect width="320" height="150" fill="url(#demo-gradient)" mask="url(#demo-mask)" /><circle cx="160" cy="75" r="58" fill="none" stroke="white" strokeWidth="2" /></> : <><rect x="15" y="25" width="85" height="85" rx="14" fill="#8b5cf6" /><circle cx="160" cy="68" r="43" fill="#22d3ee" /><path d="M225 110 270 25l45 85z" fill="#fb7185" /></>}
          </svg>
        </div>
      );
    case "range-sliders":
      return (
        <div className="w-full max-w-md space-y-5 rounded-xl border border-slate-200 bg-white p-5">
          {[{ label: "Brightness", value: rangeValue, update: setRangeValue }, { label: "Contrast", value: 100 - rangeValue, update: (value: number) => setRangeValue(100 - value) }].map(({ label, value, update }) => (
            <label key={label} className="block text-sm font-medium text-slate-700">{label}<span className="float-right tabular-nums text-slate-500">{value}%</span><input type="range" min="0" max="100" value={value} onChange={(event) => update(Number(event.target.value))} className="mt-2 w-full accent-violet-700" /></label>
          ))}
        </div>
      );
    case "read-more":
      return (
        <details className="w-full max-w-lg rounded-xl border border-slate-200 bg-white p-5 text-left">
          <summary className="cursor-pointer font-semibold text-slate-900 marker:text-violet-700">Read more</summary>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">Expandable content can keep a page concise while leaving supporting details available on demand. Native details and summary elements provide built-in keyboard interaction.</p>
        </details>
      );
    case "redirect-webpage":
      return (
        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5 text-center">
          <p className="text-sm text-slate-600">Continue to the example destination in a new tab.</p>
          <a href="https://example.com" target="_blank" rel="noreferrer" className={`${button} mt-4 inline-flex`}>Continue to example.com <ArrowDown className="ml-2 rotate-[-90deg]" size={16} /></a>
        </div>
      );
    case "register-form":
      return (
        <form onSubmit={(event) => { event.preventDefault(); setRegistered(true); }} onChange={() => setRegistered(false)} className="w-full max-w-sm space-y-3 rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-left font-semibold text-slate-900">Create your account</h3>
          <label className="block text-left text-xs font-medium text-slate-600">Name<input required autoComplete="name" className="mt-1.5 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Your name" /></label>
          <label className="block text-left text-xs font-medium text-slate-600">Email<input required type="email" autoComplete="email" className="mt-1.5 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="you@example.com" /></label>
          <label className="block text-left text-xs font-medium text-slate-600">Password<input required type="password" minLength={8} autoComplete="new-password" className="mt-1.5 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="At least 8 characters" /></label>
          <button type="submit" className={`${button} w-full`}>Register</button>
          {registered && <p role="status" className="text-sm text-emerald-700">Registration details validated for this demo.</p>}
        </form>
      );
    case "remove":
      return (
        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-4">
          {sampleRemoved ? <div className="flex items-center justify-between text-sm text-slate-600"><span>Sample item removed.</span><button type="button" onClick={() => setSampleRemoved(false)} className="font-medium text-violet-700 hover:underline">Undo</button></div> : <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3"><span className="text-sm font-medium text-slate-800">Sample item</span><button type="button" onClick={() => setSampleRemoved(true)} className="rounded-lg border border-rose-200 px-3 py-1.5 text-sm text-rose-700 hover:bg-rose-50">Remove</button></div>}
        </div>
      );
    case "remove-property":
      return (
        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5">
          <dl className="space-y-2 text-sm">{[["Name", "Sample item"], ...(!propertyRemoved ? [["Category", "Demo"]] : []), ["Status", "Active"]].map(([key, value]) => <div key={key} className="flex justify-between gap-4"><dt className="text-slate-500">{key}</dt><dd className="font-medium text-slate-800">{value}</dd></div>)}</dl>
          <button type="button" onClick={() => setPropertyRemoved((removed) => !removed)} className="mt-4 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700">{propertyRemoved ? "Restore category property" : "Remove category property"}</button>
        </div>
      );
    case "remove-class":
      return (
        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5 text-center">
          <p className={`rounded-lg p-4 text-sm transition-colors ${classRemoved ? "" : "bg-violet-100 font-semibold text-violet-900"}`}>This element's utility classes can be toggled.</p>
          <button type="button" aria-pressed={!classRemoved} onClick={() => setClassRemoved((removed) => !removed)} className={`${button} mt-4`}>{classRemoved ? "Apply class" : "Remove class"}</button>
        </div>
      );
    case "responsive-floats":
      return (
        <article className="w-full max-w-lg rounded-xl bg-white p-5 text-left text-sm leading-relaxed text-slate-600">
          <div className="mb-3 grid h-20 w-20 place-items-center rounded-xl bg-gradient-to-br from-sky-200 to-violet-300 text-2xl sm:float-left sm:mr-4">✦</div>
          <p>On narrow screens, this decorative image appears above the text. At wider breakpoints it floats to the left, allowing the paragraph to wrap beside it naturally.</p>
          <p className="mt-2">Resize the preview to see the layout adapt.</p>
        </article>
      );
    case "responsive-form":
      return (
        <form onSubmit={(event) => event.preventDefault()} className="flex w-full max-w-lg flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row">
          <label className="sr-only" htmlFor="responsive-form-email">Email address</label><input id="responsive-form-email" type="email" placeholder="Email address" className="min-w-0 flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm" />
          <button type="submit" className={button}>Subscribe</button>
        </form>
      );
    case "responsive-header":
      return (
        <header className="flex w-full max-w-xl flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
          <a href="#responsive-home" className="font-bold text-slate-900">Northstar</a>
          <nav aria-label="Responsive header preview" className="flex flex-wrap gap-4 text-sm text-slate-600"><a href="#responsive-work">Work</a><a href="#responsive-about">About</a><a href="#responsive-contact">Contact</a></nav>
          <button type="button" className="rounded-lg bg-violet-700 px-3 py-2 text-sm font-medium text-white">Get started</button>
        </header>
      );
    case "responsive-iframes":
      return (
        <div className="w-full max-w-lg">
          <div className="aspect-video w-full overflow-hidden rounded-xl border border-slate-200 bg-white">
            <iframe title="Responsive embedded preview" srcDoc={'<!doctype html><html><body style="margin:0;display:grid;place-items:center;height:100vh;background:#f5f3ff;color:#4c1d95;font:16px sans-serif">Responsive embedded content</body></html>'} className="h-full w-full" />
          </div>
          <p className="mt-2 text-center text-xs text-slate-500">The embedded preview keeps a 16:9 aspect ratio.</p>
        </div>
      );
    case "responsive-images":
      return (
        <div className="w-full max-w-md overflow-hidden rounded-xl border border-slate-200 bg-white p-2">
          <img src={imageUrl} alt="Mountain landscape at sunset" className="h-auto max-w-full rounded-lg object-cover" />
          <p className="p-2 text-xs text-slate-500">Scales to the available width while preserving aspect ratio.</p>
        </div>
      );
    case "responsive-navbar-with-dropdown":
      return (
        <nav aria-label="Responsive navigation preview" className="flex w-full max-w-xl flex-wrap items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 sm:gap-5">
          <a href="#responsive-brand" className="mr-auto font-bold text-slate-900">Studio</a>
          <a href="#responsive-projects" className="hidden text-sm text-slate-600 sm:inline">Projects</a>
          <div className="relative">
            <button type="button" aria-expanded={responsiveMenuOpen} onClick={() => setResponsiveMenuOpen((open) => !open)} className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">Resources <ChevronDown size={15} /></button>
            {responsiveMenuOpen && <div className="absolute right-0 top-full z-10 mt-1 min-w-36 rounded-lg border border-slate-200 bg-white p-1 shadow-lg"><a href="#responsive-guides" className="block rounded px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">Guides</a><a href="#responsive-support" className="block rounded px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">Support</a></div>}
          </div>
          <a href="#responsive-account" className="rounded-lg bg-violet-700 px-3 py-2 text-sm font-medium text-white">Account</a>
        </nav>
      );
    case "responsive-sidebar":
      return (
        <div className="flex w-full max-w-lg overflow-hidden rounded-xl border border-slate-200 bg-white">
          <aside className={`${responsiveSidebarOpen ? "block" : "hidden"} w-36 shrink-0 border-r border-slate-200 bg-slate-50 p-3 sm:block`}>
            <nav aria-label="Responsive sidebar preview" className="space-y-1 text-sm"><a href="#responsive-overview" className="block rounded bg-violet-100 px-2 py-1.5 text-violet-900">Overview</a><a href="#responsive-settings" className="block rounded px-2 py-1.5 text-slate-600">Settings</a></nav>
          </aside>
          <main className="min-h-32 flex-1 p-4"><button type="button" aria-expanded={responsiveSidebarOpen} onClick={() => setResponsiveSidebarOpen((open) => !open)} className="rounded border border-slate-200 px-2 py-1 text-xs sm:hidden">Toggle menu</button><p className="mt-2 text-sm font-medium text-slate-800">Responsive content area</p><p className="mt-1 text-xs text-slate-500">Sidebar stays visible on wider screens.</p></main>
        </div>
      );
    case "responsive-tables":
      return (
        <div className="w-full max-w-lg overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <caption className="p-3 text-left text-xs text-slate-500">Sample project status — scroll horizontally on small screens.</caption>
            <thead className="bg-slate-50 text-xs uppercase text-slate-500"><tr><th className="px-3 py-2">Project</th><th className="px-3 py-2">Owner</th><th className="px-3 py-2">Status</th><th className="px-3 py-2">Updated</th></tr></thead>
            <tbody className="divide-y divide-slate-100 text-slate-700"><tr><td className="px-3 py-3">Aurora</td><td className="px-3 py-3">Avery</td><td className="px-3 py-3">Active</td><td className="px-3 py-3">Today</td></tr><tr><td className="px-3 py-3">Atlas</td><td className="px-3 py-3">Morgan</td><td className="px-3 py-3">Review</td><td className="px-3 py-3">Yesterday</td></tr></tbody>
          </table>
        </div>
      );
    case "responsive-text":
      return (
        <div className="w-full max-w-xl rounded-2xl bg-slate-950 p-6 text-center text-white sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-300">Typography</p>
          <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl">Responsive by design</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-slate-300 sm:text-base">Text scales at breakpoints to stay comfortable to read on every screen.</p>
        </div>
      );
    case "right-aligned-menu-links":
      return (
        <nav aria-label="Right aligned menu preview" className="flex w-full max-w-lg items-center gap-4 rounded-xl border border-slate-200 bg-white p-3 text-sm">
          <a href="#menu-home" className="font-bold text-slate-900">Acme</a><a href="#menu-products" className="text-slate-600">Products</a><div className="ml-auto flex gap-4"><a href="#menu-help" className="text-slate-600">Help</a><a href="#menu-account" className="font-medium text-violet-700">Account</a></div>
        </nav>
      );
    case "round-buttons":
      return (
        <div className="flex items-center gap-4 rounded-xl bg-white p-5">
          <button type="button" aria-label="Add item" className="grid h-12 w-12 place-items-center rounded-full bg-violet-700 text-2xl text-white transition hover:bg-violet-800">+</button>
          <button type="button" className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50">Rounded action</button>
          <button type="button" className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700">Continue</button>
        </div>
      );
    case "rounded-images":
      return (
        <div className="flex flex-wrap items-center justify-center gap-4 rounded-xl bg-white p-5">
          <img src={imageUrl} alt="Landscape with slightly rounded corners" className="h-24 w-32 rounded-lg object-cover" />
          <img src={imageUrl} alt="Landscape with rounded corners" className="h-24 w-32 rounded-2xl object-cover" />
          <img src={imageUrl} alt="Circular landscape crop" className="h-24 w-24 rounded-full object-cover" />
        </div>
      );
    case "qr-scanner":
      return (
        <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 text-center">
          <div className="relative mx-auto grid aspect-square w-48 place-items-center overflow-hidden rounded-xl bg-slate-950">
            <div aria-hidden="true" className="grid grid-cols-7 gap-1 opacity-90">
              {Array.from({ length: 49 }, (_, index) => <span key={index} className={`h-4 w-4 rounded-sm ${((index * 17 + 3) % 5 < 2 || [0, 1, 5, 6, 7, 13, 35, 41, 42, 43, 47, 48].includes(index)) ? "bg-white" : "bg-slate-800"}`} />)}
            </div>
            <span aria-hidden="true" className="absolute inset-5 rounded-xl border-2 border-emerald-400" />
            <span aria-hidden="true" className="absolute inset-x-7 top-1/2 h-0.5 animate-pulse bg-emerald-300" />
          </div>
          <p className="mt-4 text-sm font-semibold text-slate-900">QR scanner preview</p>
          <p className="mt-1 text-xs text-slate-500">This demo does not access your camera.</p>
          <button type="button" onClick={() => setQrScanned((scanned) => !scanned)} className={`${button} mt-4`}>{qrScanned ? "Scan another sample" : "Simulate QR scan"}</button>
          {qrScanned && <p role="status" className="mt-3 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-800">Sample QR code detected: <code>showcase.example/demo</code></p>}
        </div>
      );
    case "quantity-increment-decrement":
      return (
        <div className="w-full max-w-xs rounded-xl border border-slate-200 bg-white p-5">
          <label htmlFor="demo-quantity" className="mb-3 block text-sm font-semibold text-slate-800">Quantity <span className="font-normal text-slate-500">(1–10)</span></label>
          <div className="flex items-center justify-between gap-3">
            <button type="button" aria-label="Decrease quantity" disabled={quantity <= 1} onClick={() => setQuantity((current) => Math.max(1, current - 1))} className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-lg disabled:cursor-not-allowed disabled:opacity-40">−</button>
            <output id="demo-quantity" aria-live="polite" className="min-w-10 text-center text-xl font-semibold text-slate-900">{quantity}</output>
            <button type="button" aria-label="Increase quantity" disabled={quantity >= 10} onClick={() => setQuantity((current) => Math.min(10, current + 1))} className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-lg disabled:cursor-not-allowed disabled:opacity-40">+</button>
          </div>
        </div>
      );
    case "quiz":
      return (
        <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-5">
          <form onSubmit={(event) => { event.preventDefault(); setQuizSubmitted(true); }}>
            <fieldset>
              <legend className="text-left text-base font-semibold text-slate-900">Which planet is known as the Red Planet?</legend>
              <div className="mt-4 space-y-2">
                {["Venus", "Mars", "Jupiter"].map((answer) => (
                  <label key={answer} className={`flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-2.5 text-sm ${quizAnswer === answer ? "border-violet-400 bg-violet-50 text-violet-900" : "border-slate-200 text-slate-700"}`}>
                    <input type="radio" name="planet-quiz" value={answer} checked={quizAnswer === answer} onChange={() => { setQuizAnswer(answer); setQuizSubmitted(false); }} />
                    {answer}
                  </label>
                ))}
              </div>
            </fieldset>
            <button type="submit" disabled={!quizAnswer} className={`${button} mt-4 disabled:cursor-not-allowed disabled:opacity-40`}>Check answer</button>
          </form>
          {quizSubmitted && <p role="status" className={`mt-3 text-sm font-medium ${quizAnswer === "Mars" ? "text-emerald-700" : "text-rose-700"}`}>{quizAnswer === "Mars" ? "Correct! Mars is known as the Red Planet." : "Not quite. Try Mars."}</p>}
        </div>
      );
    case "quotation":
      return (
        <figure className="w-full max-w-lg rounded-2xl bg-gradient-to-br from-violet-950 to-slate-900 p-7 text-left text-white shadow-lg">
          <span aria-hidden="true" className="text-5xl leading-none text-violet-300">“</span>
          <blockquote className="-mt-2 text-xl font-medium leading-relaxed">It is not the mountain we conquer, but ourselves.</blockquote>
          <figcaption className="mt-5 border-t border-white/15 pt-4 text-sm text-violet-200">— Sir Edmund Hillary</figcaption>
        </figure>
      );
    case "quote-slideshow":
      return (
        <div aria-live="polite" className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-700">Quote {quoteIndex + 1} of {quotes.length}</p>
          <blockquote className="mt-4 min-h-20 text-lg font-medium leading-relaxed text-slate-800">“{quotes[quoteIndex].text}”</blockquote>
          <p className="mt-3 text-sm text-slate-500">— {quotes[quoteIndex].author}</p>
          <div className="mt-5 flex justify-center gap-2">
            <button type="button" aria-label="Previous quote" onClick={() => setQuoteIndex((index) => (index - 1 + quotes.length) % quotes.length)} className="rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Previous</button>
            <button type="button" aria-label="Next quote" onClick={() => setQuoteIndex((index) => (index + 1) % quotes.length)} className={button}>Next</button>
          </div>
        </div>
      );
    case "pagescroll-menu-smooth":
      return (
        <div className="w-full max-w-lg">
          <nav aria-label="Smooth scroll sections" className="mb-3 flex flex-wrap gap-2">
            {["Intro", "Details", "Finish"].map((section) => (
              <button key={section} type="button" onClick={() => document.getElementById(`smooth-${section}`)?.scrollIntoView({ behavior: "smooth", block: "nearest" })} className={button}>{section}</button>
            ))}
          </nav>
          <div className="h-48 space-y-3 overflow-y-auto rounded-xl border border-slate-200 bg-white p-3">
            {["Intro", "Details", "Finish"].map((section) => <section id={`smooth-${section}`} key={section} className="grid h-32 place-items-center rounded-lg bg-violet-50"><h3 className="font-semibold text-slate-800">{section}</h3></section>)}
          </div>
        </div>
      );
    case "pagination": {
      const pageItems = portfolioItems.slice((page % 3) * 2, (page % 3) * 2 + 2);
      return (
        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-4">
          <ul className="divide-y divide-slate-100">{pageItems.map((item) => <li key={item.title} className="flex justify-between py-3 text-sm"><span className="font-medium text-slate-800">{item.title}</span><span className="text-slate-500">{item.category}</span></li>)}</ul>
          <div className="mt-3 flex items-center justify-between"><button type="button" onClick={() => setPage((current) => Math.max(0, current - 1))} disabled={page === 0} className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs disabled:opacity-40">Previous</button><span className="text-xs text-slate-500">Page {page + 1} of 3</span><button type="button" onClick={() => setPage((current) => Math.min(2, current + 1))} disabled={page === 2} className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs disabled:opacity-40">Next</button></div>
        </div>
      );
    }
    case "parallax-scroll":
      return (
        <div onScroll={(event) => setPosition((current) => ({ ...current, y: event.currentTarget.scrollTop }))} className="relative h-56 w-full max-w-lg overflow-y-auto rounded-xl bg-slate-950">
          <div className="sticky top-0 h-56 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-violet-900 to-slate-950" />
            <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle,#fff_1px,transparent_1px)] [background-size:22px_22px]" style={{ transform: `translateY(${position.y * 0.12}px)` }} />
            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/40 blur-2xl" style={{ transform: `translate(-50%, calc(-50% + ${position.y * -0.2}px))` }} />
            <p className="absolute inset-x-0 top-24 text-center text-sm font-medium text-white">Scroll to move the background layers</p>
          </div>
          <div className="relative -mt-2 space-y-3 bg-white p-4">{["A little further", "Beyond the horizon", "Keep exploring"].map((text) => <p key={text} className="grid h-28 place-items-center rounded-lg bg-slate-50 text-sm text-slate-600">{text}</p>)}</div>
        </div>
      );
    case "particles":
      return (
        <div aria-label="Decorative particle field" className="relative h-56 w-full max-w-lg overflow-hidden rounded-xl bg-slate-950">
          {Array.from({ length: 42 }, (_, index) => <span key={index} aria-hidden="true" className={`absolute rounded-full ${index % 5 === 0 ? "h-1.5 w-1.5 bg-violet-300" : "h-1 w-1 bg-sky-200/70"}`} style={{ left: `${(index * 47 + 3) % 98}%`, top: `${(index * 31 + 8) % 94}%`, animation: `particleDrift ${2 + (index % 5)}s ease-in-out ${index * 90}ms infinite alternate` }} />)}
          <style>{`@keyframes particleDrift { to { transform: translate(10px,-14px); opacity: .3 } } @media (prefers-reduced-motion: reduce) { * { animation: none !important } }`}</style>
          <p className="absolute inset-0 grid place-items-center text-sm text-white">A quiet field of particles</p>
        </div>
      );
    case "password-validation": {
      const rules = [
        ["At least 8 characters", password.length >= 8],
        ["One uppercase letter", /[A-Z]/.test(password)],
        ["One number", /\d/.test(password)],
      ] as const;
      return (
        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5">
          <label className="block text-left text-sm font-medium text-slate-700">Create password<input type="password" autoComplete="new-password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5" placeholder="Enter a password" /></label>
          <ul className="mt-4 space-y-2 text-left">{rules.map(([rule, valid]) => <li key={rule} className={`flex items-center gap-2 text-xs ${valid ? "text-emerald-700" : "text-slate-500"}`}><Check size={14} className={valid ? "opacity-100" : "opacity-30"} />{rule}</li>)}</ul>
        </div>
      );
    }
    case "pattern-lock":
      return (
        <div className="w-full max-w-xs rounded-2xl bg-slate-950 p-5 text-center text-white">
          <p className="text-sm font-semibold">Draw a pattern</p>
          <div className="mx-auto mt-4 grid w-fit grid-cols-3 gap-3" role="group" aria-label="Pattern lock nodes">{Array.from({ length: 9 }, (_, index) => <button key={index} type="button" aria-label={`Pattern node ${index + 1}`} aria-pressed={selectedNodes.includes(index)} onClick={() => setSelectedNodes((nodes) => nodes.includes(index) ? nodes.filter((node) => node !== index) : [...nodes, index])} className={`grid h-12 w-12 place-items-center rounded-full border ${selectedNodes.includes(index) ? "border-violet-300 bg-violet-500 text-white" : "border-slate-600 bg-slate-800 text-slate-400"}`}>{selectedNodes.includes(index) ? selectedNodes.indexOf(index) + 1 : "•"}</button>)}</div>
          <div className="mt-4 flex justify-center gap-2"><button type="button" onClick={() => setSelectedNodes([])} className="rounded-lg border border-slate-700 px-3 py-1.5 text-xs">Reset</button><span role="status" className="rounded-lg bg-slate-800 px-3 py-1.5 text-xs text-slate-300">{selectedNodes.length} nodes selected</span></div>
        </div>
      );
    case "pill-buttons":
      return (
        <div className="flex flex-wrap gap-3">
          {["Default", "Selected", "Disabled"].map((label, index) => (
            <button
              key={label}
              type="button"
              disabled={index === 2}
              aria-pressed={index === 1}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                index === 0
                  ? "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                  : index === 1
                    ? "bg-violet-700 text-white"
                    : "bg-slate-100 text-slate-400"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      );
    case "pill-navigation":
      return (
        <nav aria-label="Pill navigation" className="flex flex-wrap gap-1 rounded-full bg-slate-100 p-1">
          {["Overview", "Projects", "Activity", "Settings"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setActiveTab(item)}
              aria-current={activeTab === item ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm transition ${
                activeTab === item
                  ? "bg-white font-medium text-violet-800 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      );
    case "place-image-or-video-inside-silhouette":
      return (
        <div className="relative grid h-56 w-full max-w-sm place-items-center overflow-hidden rounded-xl bg-slate-950">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-violet-500 to-rose-400" />
          <div className="relative grid h-40 w-40 place-items-center bg-slate-950 text-center text-2xl font-black uppercase tracking-widest text-white [clip-path:polygon(50%_0%,95%_18%,88%_76%,50%_100%,12%_76%,5%_18%)]">Shape<br />Media</div>
          <p className="absolute bottom-3 text-xs text-white/80">CSS silhouette clipping preview</p>
        </div>
      );
    case "placeholder-color-and-vanish-input":
      return (
        <label className="flex w-full max-w-sm items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-100"><Search size={16} className="text-slate-400" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Placeholder fades on focus..." className="h-12 min-w-0 flex-1 text-sm outline-none placeholder:text-violet-400 focus:placeholder:opacity-0" /><span className="sr-only">Search preview</span></label>
      );
    case "play-iframe-embedded-youtube-video-on-click-of-a-button":
    case "popup-to-show-youtube-video-inside-iframe-closed":
      return (
        <div className="w-full max-w-lg">
          <button type="button" onClick={() => setLightboxOpen(true)} className={button}>{component === "popup-to-show-youtube-video-inside-iframe-closed" ? "Open video popup" : "Play embedded video"}</button>
          {lightboxOpen && <div role="dialog" aria-modal="true" aria-label="Video player dialog" tabIndex={0} onKeyDown={(event) => { if (event.key === "Escape") setLightboxOpen(false); }} onClick={(event) => { if (event.target === event.currentTarget) setLightboxOpen(false); }} className="fixed inset-0 z-50 grid place-items-center bg-slate-950/80 p-5"><div className="relative w-full max-w-3xl rounded-xl bg-slate-900 p-3"><button type="button" autoFocus aria-label="Close video" onClick={() => setLightboxOpen(false)} className="mb-2 ml-auto grid h-9 w-9 place-items-center rounded-lg text-white hover:bg-white/10"><X size={20} /></button><iframe title="YouTube video demo" className="aspect-video w-full rounded-lg" src="https://www.youtube-nocookie.com/embed/M7lc1UVf-VE?autoplay=1" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /></div></div>}
          <p className="mt-2 text-xs text-slate-500">The iframe is created only after you click. Playback requires network access.</p>
        </div>
      );
    case "popovers":
      return (
        <div className="relative"><button type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen((current) => !current)} className={`${button} inline-flex items-center gap-2`}>Details<ChevronDown size={15} /></button>{menuOpen && <div className="absolute left-0 top-full z-10 mt-2 w-64 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-xl"><h3 className="text-sm font-semibold text-slate-900">Quick details</h3><p className="mt-2 text-sm text-slate-600">A small contextual panel anchored to its trigger.</p><button type="button" onClick={() => setMenuOpen(false)} className="mt-3 text-xs font-medium text-violet-700">Got it</button></div>}</div>
      );
    case "popup-chat-window":
      return (
        <div className="relative flex h-64 w-full max-w-lg items-end justify-end rounded-xl bg-slate-100 p-4">
          {menuOpen && <section aria-label="Chat window" className="absolute bottom-16 right-4 flex h-48 w-64 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl"><div className="bg-violet-700 px-3 py-2 text-sm font-semibold text-white">Support chat</div><div className="flex-1 p-3"><p className="w-fit rounded-lg bg-slate-100 p-2 text-xs text-slate-700">Hi! How can we help?</p>{chatMessage && <p className="ml-auto mt-2 w-fit rounded-lg bg-violet-100 p-2 text-xs text-violet-900">{chatMessage}</p>}</div><form onSubmit={(event) => { event.preventDefault(); if (query.trim()) { setChatMessage(query.trim()); setQuery(""); } }} className="flex border-t p-2"><input aria-label="Chat message" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Type a message..." className="min-w-0 flex-1 text-xs outline-none" /><button aria-label="Send chat message" type="submit" className="text-xs font-semibold text-violet-700">Send</button></form></section>}
          <button type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen((current) => !current)} className={`${button} rounded-full px-4 py-3`}>{menuOpen ? "Close chat" : "Chat with us"}</button>
        </div>
      );
    case "popup-form":
    case "popups":
      return (
        <div className="grid min-h-56 w-full max-w-lg place-items-center rounded-xl bg-slate-100 p-5">
          <button type="button" onClick={() => setLightboxOpen(true)} className={button}>{component === "popup-form" ? "Open contact form" : "Open popup"}</button>
          {lightboxOpen && <div role="dialog" aria-modal="true" aria-label="Popup form dialog" tabIndex={0} onKeyDown={(event) => { if (event.key === "Escape") setLightboxOpen(false); }} onClick={(event) => { if (event.target === event.currentTarget) setLightboxOpen(false); }} className="fixed inset-0 z-50 grid place-items-center bg-slate-950/60 p-4"><div className="relative w-full max-w-sm rounded-xl bg-white p-5 shadow-xl"><button type="button" autoFocus aria-label="Close popup" onClick={() => setLightboxOpen(false)} className="absolute right-3 top-3 rounded p-1 text-slate-500 hover:bg-slate-100"><X size={18} /></button><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="grid gap-3 pt-2"><h3 className="font-semibold text-slate-900">{component === "popup-form" ? "Get in touch" : "A quick popup"}</h3><input required aria-label="Your name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" className="rounded-lg border border-slate-200 px-3 py-2 text-sm" /><input required type="email" aria-label="Your email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email address" className="rounded-lg border border-slate-200 px-3 py-2 text-sm" /><button type="submit" className={button}>Submit</button><p role="status" className="text-xs text-emerald-700">{submitted ? "Demo form submitted." : ""}</p></form></div></div>}
        </div>
      );
    case "portfolio-filtering":
    case "portfolio-gallery": {
      const filteredProjects = portfolioItems.filter((item) => (category === "All" || item.category === category) && item.title.toLowerCase().includes(query.toLowerCase()));
      return (
        <div className="w-full max-w-2xl">
          {component === "portfolio-filtering" && <div className="mb-3 flex flex-wrap gap-2">{["All", "Branding", "Web", "Product"].map((filter) => <button key={filter} type="button" aria-pressed={category === filter} onClick={() => setCategory(filter)} className={`rounded-full px-3 py-1.5 text-xs ${category === filter ? "bg-violet-700 text-white" : "bg-white text-slate-600"}`}>{filter}</button>)}</div>}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{filteredProjects.map((item, index) => <article key={item.title} className="overflow-hidden rounded-xl border border-slate-200 bg-white"><div className={`grid h-24 place-items-center text-2xl font-bold text-white ${["bg-violet-600", "bg-sky-600", "bg-rose-500", "bg-amber-500", "bg-emerald-600", "bg-indigo-600"][index % 6]}`}>{item.title.slice(0, 1)}</div><div className="p-3"><h3 className="text-sm font-semibold text-slate-900">{item.title}</h3><p className="mt-1 text-xs text-slate-500">{item.category}</p></div></article>)}</div>
        </div>
      );
    }
    case "portrait-image-effect":
      return (
        <figure className="group relative w-48 overflow-hidden rounded-2xl bg-violet-200">
          <img src={imageUrl} alt="Portrait-style landscape image" className="h-64 w-full object-cover grayscale contrast-125 transition duration-500 group-hover:scale-105 group-hover:grayscale-0" />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-4 pt-12 text-sm font-medium text-white">A portrait in changing light</figcaption>
        </figure>
      );
    case "prefer-color-scheme":
      return (
        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5 text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
          <h3 className="font-semibold">System color preference</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">This panel follows your device&apos;s light or dark setting.</p>
          <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">Current system setting: {mediaQuery ? "dark" : "light"}</p>
        </div>
      );
    case "preloader":
      return (
        <div className="grid min-h-48 w-full max-w-sm place-items-center rounded-xl border border-slate-200 bg-white p-5">
          {preloaderVisible ? <div role="status" aria-label="Loading preview" className="flex flex-col items-center gap-3"><span className="h-9 w-9 animate-spin rounded-full border-4 border-violet-100 border-t-violet-700" /><span className="text-sm text-slate-500">Loading preview...</span></div> : <div className="text-center"><Check className="mx-auto text-emerald-600" /><p className="mt-2 text-sm font-medium text-slate-800">Content is ready.</p><button type="button" onClick={() => setPreloaderVisible(true)} className="mt-3 text-xs text-violet-700">Replay loader</button></div>}
        </div>
      );
    case "pricing-table":
      return (
        <div className="grid w-full max-w-2xl gap-3 sm:grid-cols-3">
          {[["Starter", "$0", "For trying things out"], ["Pro", "$12", "For growing teams"], ["Team", "$29", "For collaborative work"]].map(([plan, price, description], index) => <article key={plan} className={`rounded-xl border bg-white p-4 ${index === 1 ? "border-violet-500 shadow-lg ring-1 ring-violet-500" : "border-slate-200"}`}><p className="text-xs font-semibold uppercase tracking-wide text-violet-700">{plan}{index === 1 && <span className="ml-2 rounded-full bg-violet-100 px-2 py-0.5 text-[9px]">Popular</span>}</p><p className="mt-3 text-2xl font-bold text-slate-900">{price}<span className="text-xs font-normal text-slate-500"> / month</span></p><p className="mt-2 min-h-10 text-xs text-slate-600">{description}</p><button type="button" onClick={() => setActiveTab(plan)} className={`mt-3 w-full rounded-lg px-3 py-2 text-xs font-semibold ${index === 1 ? "bg-violet-700 text-white" : "border border-slate-200 text-slate-700"}`}>{activeTab === plan ? "Selected" : "Choose plan"}</button></article>)}
        </div>
      );
    case "product-card":
      return (
        <article className="w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="relative overflow-hidden bg-slate-100"><img src={imageUrl} alt="Canvas daypack in a mountain setting" className="h-44 w-full object-cover" /><span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-violet-700">NEW</span></div>
          <div className="p-4"><div className="flex items-start justify-between"><div><h3 className="font-semibold text-slate-900">Everyday Daypack</h3><p className="mt-1 text-xs text-slate-500">Lightweight · Recycled canvas</p></div><span className="font-semibold text-slate-900">$48</span></div><button type="button" onClick={() => setSubmitted(true)} className={`${button} mt-4 w-full`}>{submitted ? "Added to bag" : "Add to bag"}</button></div>
        </article>
      );
    case "profile-card":
      return (
        <article className="w-full max-w-sm overflow-hidden rounded-xl border border-slate-200 bg-white text-center shadow-sm">
          <div className="h-20 bg-gradient-to-r from-violet-600 to-sky-500" /><div className="-mt-10"><div className="mx-auto grid h-20 w-20 place-items-center rounded-full border-4 border-white bg-slate-900 text-xl font-bold text-white">AJ</div></div>
          <div className="px-5 pb-5 pt-2"><h3 className="font-semibold text-slate-900">Alex Johnson</h3><p className="mt-1 text-sm text-violet-700">Product designer</p><p className="mt-3 text-xs leading-5 text-slate-600">Making thoughtful digital experiences with curious teams.</p><a href="mailto:alex@example.com" className="mt-4 inline-block rounded-lg border border-slate-200 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50">Contact</a></div>
        </article>
      );
    case "progress-bars":
      return (
        <div className="w-full max-w-md space-y-4 rounded-xl border border-slate-200 bg-white p-5">
          {[["Design system", 84], ["Website", 62], ["Mobile app", 37]].map(([label, amount]) => <div key={label}><div className="mb-1.5 flex justify-between text-xs"><span className="font-medium text-slate-700">{label}</span><span className="text-slate-500">{amount}%</span></div><div role="progressbar" aria-label={`${label} progress`} aria-valuenow={Number(amount)} aria-valuemin={0} aria-valuemax={100} className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-violet-600" style={{ width: `${amount}%` }} /></div></div>)}
        </div>
      );
    case "pseudo-before-and-after":
      return (
        <div className="rounded-xl bg-white p-8 text-center">
          <h3 className="before:mr-3 before:text-violet-500 before:content-['✦'] after:ml-3 after:text-sky-500 after:content-['✦'] text-2xl font-bold text-slate-900">Small details</h3>
          <p className="mt-3 text-sm text-slate-600">Decorative stars are rendered with CSS pseudo-elements.</p>
        </div>
      );
    case "off-canvas-menu":
      return (
        <div className="relative h-64 w-full max-w-lg overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
          <div className="absolute inset-0 p-5"><button type="button" onClick={() => setMenuOpen(true)} className={`${button} inline-flex items-center gap-2`}><Menu size={16} />Open menu</button><p className="mt-4 text-sm text-slate-600">The panel slides in from the left.</p></div>
          <button type="button" aria-label="Close menu backdrop" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)} className={`absolute inset-0 z-10 bg-slate-950/40 transition-opacity ${menuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`} />
          <aside aria-label="Off-canvas navigation" aria-hidden={!menuOpen} className={`absolute inset-y-0 left-0 z-20 w-64 max-w-[85%] bg-white p-4 shadow-xl transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="flex items-center justify-between"><span className="font-semibold text-slate-900">Navigation</span><button type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)} className="rounded p-2 text-slate-500 hover:bg-slate-100"><X size={18} /></button></div>
            <nav className="mt-4 grid gap-1">{["Dashboard", "Projects", "Team", "Settings"].map((item) => <button key={item} type="button" onClick={() => { setActiveTab(item); setMenuOpen(false); }} className="rounded-lg px-3 py-2.5 text-left text-sm text-slate-700 hover:bg-violet-50">{item}</button>)}</nav>
          </aside>
          <span role="status" className="sr-only">{activeTab} selected</span>
        </div>
      );
    case "offline-detection":
      return (
        <div className={`w-full max-w-md rounded-xl border p-5 ${isOnline ? "border-emerald-200 bg-emerald-50" : "border-amber-200 bg-amber-50"}`}>
          <div className="flex items-center gap-3">
            {isOnline ? <Wifi size={20} className="text-emerald-700" /> : <WifiOff size={20} className="text-amber-700" />}
            <div><h3 className="font-semibold text-slate-900">{isOnline ? "You are online" : "You are offline"}</h3><p className="mt-1 text-sm text-slate-600">Status reflects the browser&apos;s network connection.</p></div>
          </div>
          <p role="status" className="mt-3 text-xs text-slate-500">The status updates when the browser fires an online or offline event.</p>
        </div>
      );
    case "outline-buttons":
      return (
        <div className="flex flex-wrap gap-3">
          <button type="button" className="rounded-lg border border-violet-700 px-4 py-2 text-sm font-medium text-violet-700 transition hover:bg-violet-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700">Primary outline</button>
          <button type="button" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500">Neutral outline</button>
          <button type="button" className="rounded-lg border border-rose-600 px-4 py-2 text-sm font-medium text-rose-700 transition hover:bg-rose-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600">Destructive outline</button>
        </div>
      );
    case "overlay-effect":
      return (
        <button type="button" className="group relative w-full max-w-sm overflow-hidden rounded-xl text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600">
          <img src={imageUrl} alt="Mountain landscape" className="h-52 w-full object-cover" />
          <span className="absolute inset-0 grid place-items-center bg-violet-950/60 p-5 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
            <span><span className="block text-lg font-semibold">Overlay revealed</span><span className="mt-1 block text-sm text-white/80">Hover or focus to view more.</span></span>
          </span>
        </button>
      );
    case "navbar-on-image":
      return (
        <div className="relative h-64 w-full max-w-2xl overflow-hidden rounded-xl bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
          <div className="absolute inset-0 bg-slate-950/35" />
          <nav aria-label="Image hero navigation" className="relative flex items-center justify-between px-5 py-4 text-white">
            <a href="#image-nav-home" className="font-bold tracking-tight">northstar.</a>
            <div className="flex items-center gap-4 text-xs font-medium"><a href="#image-nav-work" className="hover:text-violet-200">Work</a><a href="#image-nav-about" className="hover:text-violet-200">About</a><a href="#image-nav-contact" className="rounded-full border border-white/60 px-3 py-1.5 hover:bg-white/15">Contact</a></div>
          </nav>
          <div className="relative mt-8 px-6 text-white sm:mt-10"><p className="text-xs uppercase tracking-[.25em] text-white/80">A little further</p><h3 className="mt-2 text-3xl font-bold">Find your horizon.</h3></div>
        </div>
      );
    case "navbar-with-icons":
      return (
        <nav aria-label="Navigation with icon actions" className="flex w-full max-w-xl items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-3">
          <a href="#icons-home" className="font-bold text-slate-900">northstar.</a>
          <div className="flex items-center gap-1">
            <a href="#icons-work" className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">Work</a>
            <button type="button" aria-label="Search" title="Search" onClick={() => setActiveTab("Search")} className="grid h-10 w-10 place-items-center rounded-lg text-slate-600 hover:bg-slate-100"><Search size={17} /></button>
            <button type="button" aria-label="Email us" title="Email us" onClick={() => setActiveTab("Email")} className="grid h-10 w-10 place-items-center rounded-lg text-slate-600 hover:bg-slate-100"><Mail size={17} /></button>
            <span role="status" className="sr-only">{activeTab} selected</span>
          </div>
        </nav>
      );
    case "neumorphism":
      return (
        <div className="flex flex-col items-center gap-5 rounded-2xl bg-[#e6e9ef] p-8">
          <div className="grid h-20 w-20 place-items-center rounded-2xl bg-[#e6e9ef] text-violet-700 shadow-[8px_8px_16px_#c4c7cc,-8px_-8px_16px_#ffffff]"><span className="text-2xl">✦</span></div>
          <button type="button" aria-pressed={neumorphicPressed} onClick={() => setNeumorphicPressed((current) => !current)} className={`rounded-xl bg-[#e6e9ef] px-5 py-3 text-sm font-semibold text-slate-700 transition-shadow ${neumorphicPressed ? "shadow-[inset_5px_5px_10px_#c4c7cc,inset_-5px_-5px_10px_#ffffff]" : "shadow-[6px_6px_12px_#c4c7cc,-6px_-6px_12px_#ffffff]"}`}>{neumorphicPressed ? "Pressed" : "Press me"}</button>
        </div>
      );
    case "newsletter":
      return (
        <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="w-full max-w-lg rounded-2xl bg-violet-50 p-6 text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-violet-700">The Northstar note</span>
          <h3 className="mt-2 text-xl font-bold text-slate-900">Good ideas, delivered occasionally.</h3>
          <p className="mt-2 text-sm text-slate-600">A short monthly email with practical inspiration.</p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row"><input required type="email" aria-label="Newsletter email" autoComplete="email" value={email} onChange={(event) => { setEmail(event.target.value); setSubmitted(false); }} placeholder="you@example.com" className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm" /><button type="submit" className={button}>Subscribe</button></div>
          <p role="status" className="mt-2 min-h-4 text-xs text-emerald-700">{submitted ? "Thanks for subscribing to this demo." : ""}</p>
        </form>
      );
    case "next-previous-buttons":
      return (
        <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-5 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-violet-700">Page {page + 1} of 4</p>
          <h3 className="mt-3 text-2xl font-bold text-slate-900">{["Welcome", "Discover", "Create", "Finish"][page]}</h3>
          <p className="mt-2 min-h-10 text-sm text-slate-600">{["Start with an idea.", "Explore new perspectives.", "Turn plans into progress.", "You have reached the end."][page]}</p>
          <div className="mt-5 flex justify-between"><button type="button" disabled={page === 0} onClick={() => setPage((current) => Math.max(0, current - 1))} className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm disabled:opacity-40"><ChevronLeft size={16} />Previous</button><button type="button" disabled={page === 3} onClick={() => setPage((current) => Math.min(3, current + 1))} className="inline-flex items-center gap-2 rounded-lg bg-violet-700 px-3 py-2 text-sm text-white disabled:opacity-40">Next<ChevronRight size={16} /></button></div>
        </div>
      );
    case "notes":
      return (
        <div className="w-full max-w-md rounded-xl border border-amber-200 bg-amber-50 p-4 text-left shadow-sm">
          <div className="flex items-center justify-between"><label htmlFor="demo-note" className="font-semibold text-amber-950">Quick note</label><span className="text-[11px] text-amber-800">Saved in this preview</span></div>
          <textarea id="demo-note" value={note} onChange={(event) => setNote(event.target.value)} maxLength={240} className="mt-3 min-h-32 w-full resize-y rounded-lg border border-amber-200 bg-white/80 p-3 text-sm leading-5 text-slate-700 outline-none focus:ring-2 focus:ring-amber-300" />
          <p className="mt-1 text-right text-xs text-amber-800">{note.length}/240</p>
        </div>
      );
    case "notification-button":
      return (
        <div className="relative">
          <button type="button" aria-label={`Notifications${unreadNotifications ? `, ${unreadNotifications} unread` : ""}`} aria-expanded={notificationsOpen} onClick={() => setNotificationsOpen((current) => !current)} className="relative grid h-12 w-12 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50">
            <Bell size={20} />
            {unreadNotifications > 0 && <span aria-hidden="true" className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-rose-600 px-1 text-[10px] font-bold text-white">{unreadNotifications}</span>}
          </button>
          {notificationsOpen && <div className="absolute right-0 top-full z-20 mt-2 w-72 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-xl"><div className="flex items-center justify-between"><h3 className="font-semibold text-slate-900">Notifications</h3><button type="button" onClick={() => setUnreadNotifications(0)} className="text-xs text-violet-700 hover:underline">Mark all read</button></div><ul className="mt-3 divide-y divide-slate-100">{["Your weekly report is ready.", "Avery mentioned you in a comment."].map((item, index) => <li key={item} className="flex gap-2 py-3 text-sm text-slate-700"><span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${index < unreadNotifications ? "bg-violet-600" : "bg-slate-200"}`} />{item}</li>)}</ul>{unreadNotifications === 0 && <p role="status" className="text-xs text-emerald-700">All caught up.</p>}</div>}
        </div>
      );
    case "macbook-scroll":
      return (
        <div className="w-full max-w-xl rounded-[1.25rem] border-[7px] border-slate-800 bg-slate-900 p-2 shadow-2xl">
          <div className="relative h-56 overflow-y-auto rounded-lg bg-white [scrollbar-width:thin]">
            <header className="sticky top-0 z-10 flex items-center justify-between bg-white/90 px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur"><span>northstar.</span><span>Design · Build · Share</span></header>
            <section className="grid min-h-44 place-items-center bg-gradient-to-br from-violet-100 via-white to-sky-100 p-6 text-center"><div><p className="text-xs uppercase tracking-widest text-violet-700">A scrollable screen</p><h3 className="mt-2 text-2xl font-bold text-slate-900">Think beyond the frame.</h3></div></section>
            {["Make space for ideas", "Bring your team together", "Move projects forward"].map((item) => <section key={item} className="grid min-h-40 place-items-center border-t border-slate-100 p-5"><p className="text-lg font-semibold text-slate-700">{item}</p></section>)}
          </div>
          <div className="mx-auto mt-2 h-2 w-1/3 rounded-full bg-slate-700" />
          <div className="-mx-5 mt-1 h-2 rounded-b-xl bg-gradient-to-b from-slate-300 to-slate-500" />
        </div>
      );
    case "magnetic-effects":
      return (
        <div
          onPointerMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            setMagneticOffset({
              x: Math.max(-18, Math.min(18, (event.clientX - rect.left - rect.width / 2) * 0.18)),
              y: Math.max(-18, Math.min(18, (event.clientY - rect.top - rect.height / 2) * 0.18)),
            });
          }}
          onPointerLeave={() => setMagneticOffset({ x: 0, y: 0 })}
          className="grid h-48 w-full max-w-sm place-items-center rounded-2xl bg-violet-50"
        >
          <button type="button" style={{ transform: `translate(${magneticOffset.x}px, ${magneticOffset.y}px)` }} className="rounded-full bg-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-200">Magnetic action</button>
        </div>
      );
    case "mailto":
      return (
        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5 text-left">
          <h3 className="font-semibold text-slate-900">Have a question?</h3>
          <p className="mt-2 text-sm text-slate-600">Open a new message in your default email app.</p>
          <a href="mailto:hello@example.com?subject=Hello%20there" className={`${button} mt-4 inline-flex items-center gap-2`}><Mail size={16} /> Email hello@example.com</a>
        </div>
      );
    case "markdown-editor":
      return (
        <div className="grid w-full max-w-2xl gap-3 md:grid-cols-2">
          <label className="text-left text-xs font-semibold text-slate-600">Markdown source<textarea value={query} onChange={(event) => setQuery(event.target.value)} className="mt-2 h-48 w-full resize-y rounded-xl border border-slate-200 bg-slate-950 p-4 font-mono text-sm text-slate-100" /></label>
          <section aria-label="Plain text preview" className="h-48 overflow-auto rounded-xl border border-slate-200 bg-white p-4 text-left"><p className="text-xs font-semibold text-slate-500">Safe text preview</p><pre className="mt-3 whitespace-pre-wrap break-words font-sans text-sm leading-6 text-slate-800">{query || "Type Markdown in the editor to see the source preview."}</pre></section>
        </div>
      );
    case "material-input":
      return (
        <label className="group relative block w-full max-w-sm rounded-t-lg border-b-2 border-slate-300 bg-slate-50 px-3 pt-5 focus-within:border-violet-700">
          <span className="pointer-events-none absolute left-3 top-1 text-[11px] font-medium text-slate-500 transition-colors group-focus-within:text-violet-700">Email address</span>
          <input type="email" placeholder="you@example.com" className="h-9 w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400" />
        </label>
      );
    case "media-queries":
      return (
        <div className="w-full max-w-lg">
          <div className="flex items-center justify-between text-xs text-slate-500"><span>Resize this preview</span><span className="hidden sm:inline">At least 640px · three columns</span><span className="sm:hidden">Under 640px · two columns</span></div>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">{["One", "Two", "Three", "Four", "Five", "Six"].map((item) => <div key={item} className="grid h-20 place-items-center rounded-lg bg-violet-100 text-sm font-medium text-violet-900">{item}</div>)}</div>
        </div>
      );
    case "meet-the-team":
      return (
        <section className="w-full max-w-2xl rounded-xl bg-white p-5">
          <h3 className="text-center text-xl font-bold text-slate-900">Meet the team</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">{[["Avery Johnson", "Product design", "AJ"], ["Morgan Chen", "Engineering", "MC"], ["Jordan Lee", "Research", "JL"]].map(([person, role, initials]) => <article key={person} className="rounded-xl border border-slate-100 p-4 text-center"><div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-sky-400 font-semibold text-white">{initials}</div><h4 className="mt-3 text-sm font-semibold text-slate-900">{person}</h4><p className="mt-1 text-xs text-slate-500">{role}</p></article>)}</div>
        </section>
      );
    case "mega-menu":
      return (
        <nav aria-label="Mega menu preview" className="relative w-full max-w-xl rounded-xl border border-slate-200 bg-white p-3">
          <button type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen((current) => !current)} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50">Products <ChevronDown size={16} /></button>
          {menuOpen && <div className="absolute left-0 right-0 top-full z-20 mt-2 grid gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-xl sm:grid-cols-3">{[["Build", "Components", "Templates", "Integrations"], ["Manage", "Team", "Projects", "Analytics"], ["Learn", "Guides", "Examples", "Support"]].map(([heading, ...links]) => <section key={heading}><h3 className="text-xs font-semibold uppercase tracking-wide text-violet-700">{heading}</h3>{links.map((link) => <button key={link} type="button" onClick={() => setActiveTab(link)} className="mt-2 block w-full rounded-md px-2 py-1.5 text-left text-sm text-slate-600 hover:bg-violet-50">{link}</button>)}</section>)}</div>}
          <span role="status" className="sr-only">{activeTab !== "Overview" ? `${activeTab} selected` : ""}</span>
        </nav>
      );
    case "menu-icon-hamburger":
    case "mobile-menu":
      return (
        <div className="w-full max-w-sm overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="flex items-center justify-between p-4"><span className="font-bold text-slate-900">northstar.</span><button type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((current) => !current)} className="grid h-10 w-10 place-items-center rounded-lg hover:bg-slate-100"><span className="relative block h-5 w-5"><span className={`absolute left-0 top-1 h-0.5 w-5 bg-slate-800 transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} /><span className={`absolute left-0 top-2.5 h-0.5 w-5 bg-slate-800 transition-opacity ${menuOpen ? "opacity-0" : ""}`} /><span className={`absolute left-0 top-4 h-0.5 w-5 bg-slate-800 transition-transform ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} /></span></button></div>
          {menuOpen && <nav aria-label="Mobile menu" className="grid border-t border-slate-100 p-2">{["Home", "Features", "Pricing", "Contact"].map((item) => <a key={item} href={`#mobile-${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm text-slate-700 hover:bg-violet-50">{item}</a>)}</nav>}
        </div>
      );
    case "meteors":
      return (
        <div className="relative h-56 w-full max-w-lg overflow-hidden rounded-2xl bg-slate-950">
          {Array.from({ length: 14 }, (_, index) => <span key={index} aria-hidden="true" className="absolute h-px w-20 -rotate-45 bg-gradient-to-r from-transparent via-violet-200 to-transparent" style={{ left: `${(index * 41) % 100}%`, top: `${(index * 31) % 90}%`, animation: `meteorFall ${2.5 + (index % 4)}s linear ${index * 230}ms infinite` }} />)}
          <style>{`@keyframes meteorFall { 0% { transform: translate(0,-20px) rotate(-45deg); opacity: 0 } 10% { opacity: 1 } 70% { opacity: .8 } 100% { transform: translate(-120px,180px) rotate(-45deg); opacity: 0 } } @media (prefers-reduced-motion: reduce) { * { animation: none !important } }`}</style>
          <div className="absolute inset-0 grid place-items-center text-sm text-slate-300">A meteor shower</div>
        </div>
      );
    case "mobile-app-development":
      return (
        <div className="w-64 rounded-[2rem] border-[8px] border-slate-800 bg-slate-950 p-2 shadow-xl">
          <div className="overflow-hidden rounded-[1.35rem] bg-white"><div className="mx-auto mt-2 h-1.5 w-14 rounded-full bg-slate-300" /><header className="flex items-center justify-between px-4 py-4"><span className="font-bold text-slate-900">Goodday</span><span className="grid h-8 w-8 place-items-center rounded-full bg-violet-100 text-xs font-semibold text-violet-700">AJ</span></header><div className="px-4 pb-4"><p className="text-xs text-slate-500">MONDAY, OCTOBER 26</p><h3 className="mt-1 text-xl font-bold text-slate-900">Your day,<br />in focus.</h3><div className="mt-4 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-500 p-4 text-white"><p className="text-xs text-white/75">TODAY&apos;S FOCUS</p><p className="mt-2 text-sm font-semibold">Make progress on the things that matter.</p></div><p className="mt-4 text-xs font-semibold text-slate-800">UP NEXT</p><p className="mt-2 rounded-lg bg-slate-50 p-3 text-xs text-slate-600">10:30 · Design review</p></div></div>
        </div>
      );
    case "modal-boxes-dialog-backdrop-pseudo-element":
    case "modal-images":
      return (
        <div className="grid min-h-56 w-full max-w-lg place-items-center rounded-xl bg-slate-100 p-5">
          {component === "modal-images" ? <button type="button" onClick={() => setLightboxOpen(true)} className="overflow-hidden rounded-lg"><img src={imageUrl} alt="Open landscape image modal" className="h-36 w-56 object-cover" /></button> : <button type="button" onClick={() => setLightboxOpen(true)} className={button}>Open dialog</button>}
          {lightboxOpen && <div role="dialog" aria-modal="true" aria-labelledby="modal-heading" tabIndex={0} onKeyDown={(event) => { if (event.key === "Escape") setLightboxOpen(false); }} onClick={(event) => { if (event.target === event.currentTarget) setLightboxOpen(false); }} className="fixed inset-0 z-50 grid place-items-center bg-slate-950/65 p-5"><div className="relative w-full max-w-sm rounded-xl bg-white p-5 shadow-2xl"><button type="button" autoFocus aria-label="Close dialog" onClick={() => setLightboxOpen(false)} className="absolute right-3 top-3 rounded p-1 text-slate-500 hover:bg-slate-100"><X size={18} /></button>{component === "modal-images" ? <img src={imageUrl} alt="Expanded mountain landscape" className="h-52 w-full rounded-lg object-cover" /> : <><h3 id="modal-heading" className="font-semibold text-slate-900">Dialog with backdrop</h3><p className="mt-2 text-sm text-slate-600">The backdrop separates this dialog from the page behind it.</p><button type="button" onClick={() => setLightboxOpen(false)} className={`${button} mt-4`}>Continue</button></>}</div></div>}
        </div>
      );
    case "more-button-in-nav":
      return (
        <nav aria-label="More navigation options" className="relative flex w-full max-w-lg items-center gap-2 rounded-xl border border-slate-200 bg-white p-3">
          {["Home", "Work"].map((item) => <a key={item} href={`#more-${item.toLowerCase()}`} className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">{item}</a>)}
          <div className="relative ml-auto"><button type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen((current) => !current)} className="rounded-lg px-3 py-2 text-sm font-medium text-violet-700 hover:bg-violet-50">More <ChevronDown size={14} className="ml-1 inline" /></button>{menuOpen && <div className="absolute right-0 top-full z-10 mt-2 w-40 rounded-lg border border-slate-200 bg-white p-1 shadow-lg">{["Blog", "Careers", "Support"].map((item) => <a key={item} href={`#more-${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-violet-50">{item}</a>)}</div>}</div>
        </nav>
      );
    case "moving-border":
      return (
        <article className="group relative w-full max-w-sm rounded-2xl bg-[conic-gradient(from_var(--border-angle),#8b5cf6_0deg,#22d3ee_120deg,#ec4899_240deg,#8b5cf6_360deg)] p-[2px] [--border-angle:0deg] hover:[--border-angle:180deg]">
          <div className="rounded-[14px] bg-slate-950 p-7 text-white"><p className="text-xs uppercase tracking-widest text-violet-300">Moving border</p><h3 className="mt-3 text-xl font-semibold">A colorful edge</h3><p className="mt-2 text-sm text-slate-400">Hover the card to shift its gradient border.</p></div>
        </article>
      );
    case "multiple-step-form-loader":
      return (
        <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-5">
          <div className="mb-4 flex items-center justify-between text-xs text-slate-500"><span>Step {step + 1} of 3</span><span>{Math.round(((step + 1) / 3) * 100)}%</span></div>
          <div role="progressbar" aria-label="Form progress" aria-valuemin={1} aria-valuemax={3} aria-valuenow={step + 1} className="mb-5 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-violet-600 transition-all duration-300" style={{ width: `${((step + 1) / 3) * 100}%` }} /></div>
          <h3 className="font-semibold text-slate-900">{["Your details", "Preferences", "Review"][step]}</h3>
          <p className="mt-2 text-sm text-slate-600">{["Add your contact information to get started.", "Choose how you would like to hear from us.", "Your information is ready to submit."][step]}</p>
          <div className="mt-5 flex justify-between"><button type="button" disabled={step === 0} onClick={() => setStep((current) => current - 1)} className="rounded-lg border border-slate-200 px-3 py-2 text-sm disabled:opacity-40">Back</button><button type="button" onClick={() => setStep((current) => (current + 1) % 3)} className={button}>{step === 2 ? "Start again" : "Continue"}</button></div>
        </div>
      );
    case "music-player":
      return (
        <div className="w-full max-w-sm rounded-2xl bg-slate-950 p-5 text-white shadow-xl">
          <div className="flex items-center gap-4"><div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-pink-500"><Music2 size={24} /></div><div><h3 className="font-semibold">Midnight Signals</h3><p className="mt-1 text-xs text-slate-400">Sample track · player UI demo</p></div></div>
          <div className="mt-5"><div className="h-1.5 overflow-hidden rounded-full bg-slate-700"><div className="h-full rounded-full bg-violet-400 transition-all" style={{ width: `${(trackTime / 180) * 100}%` }} /></div><div className="mt-1 flex justify-between text-[10px] text-slate-400"><span>{`${Math.floor(trackTime / 60)}:${String(trackTime % 60).padStart(2, "0")}`}</span><span>3:00</span></div></div>
          <div className="mt-4 flex items-center justify-center gap-5"><button type="button" aria-label="Restart track" onClick={() => setTrackTime(0)} className="text-xs text-slate-300">↺</button><button type="button" aria-label={playing ? "Pause demo playback" : "Start demo playback"} aria-pressed={playing} onClick={() => setPlaying((current) => !current)} className="grid h-11 w-11 place-items-center rounded-full bg-white text-slate-900">{playing ? <Pause size={18} /> : <Play size={18} />}</button><button type="button" aria-label="Next track" onClick={() => { setTrackTime(0); setPlaying(false); setPlayerStatus("No other demo tracks."); }} className="text-xs text-slate-300">↻</button></div>
          <p role="status" className="mt-3 text-center text-[10px] text-slate-500">{playerStatus || "Playback is a visual demo; no audio is loaded."}</p>
        </div>
      );
    case "labels":
      return (
        <div className="flex flex-wrap items-center gap-3">
          {[["Active", "bg-emerald-100 text-emerald-800"], ["In review", "bg-amber-100 text-amber-800"], ["Draft", "bg-slate-100 text-slate-700"], ["Archived", "bg-violet-100 text-violet-800"]].map(([label, color]) => (
            <span key={label} className={`rounded-full px-3 py-1 text-xs font-semibold ${color}`}>{label}</span>
          ))}
        </div>
      );
    case "lamp-effect":
      return (
        <div className="relative grid min-h-64 w-full max-w-xl place-items-center overflow-hidden rounded-2xl bg-slate-950 px-6 text-center text-white">
          <div className="absolute -top-20 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-violet-500/40 blur-3xl" />
          <div className="absolute left-1/2 top-0 h-40 w-px -translate-x-1/2 bg-gradient-to-b from-violet-200/80 to-transparent" />
          <div className="relative"><p className="text-xs font-semibold uppercase tracking-[.25em] text-violet-300">A brighter idea</p><h3 className="mt-3 text-3xl font-bold">Illuminate what matters.</h3><p className="mt-2 text-sm text-slate-400">A soft lamp-like spotlight made with CSS gradients.</p></div>
        </div>
      );
    case "lens":
      return (
        <div className="relative grid h-56 w-full max-w-lg place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-sky-100 via-violet-100 to-rose-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.9),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(124,58,237,.25),transparent_35%)]" />
          <div className="relative grid h-32 w-32 place-items-center rounded-full border-[10px] border-white/80 bg-white/30 text-4xl shadow-xl backdrop-blur-md"><span>✦</span></div>
          <p className="absolute bottom-3 text-xs text-slate-600">A translucent lens effect</p>
        </div>
      );
    case "lightbox":
      return (
        <div className="flex flex-col items-center gap-3">
          <button type="button" onClick={() => setLightboxOpen(true)} aria-label="Open mountain image in lightbox" className="overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-violet-600">
            <img src={imageUrl} alt="Mountain landscape" className="h-40 w-60 object-cover transition-transform hover:scale-105" />
          </button>
          <p className="text-xs text-slate-500">Select the image to enlarge it.</p>
          {lightboxOpen && (
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Expanded mountain landscape"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Escape") setLightboxOpen(false);
              }}
              onClick={(event) => {
                if (event.target === event.currentTarget) setLightboxOpen(false);
              }}
              className="fixed inset-0 z-50 grid place-items-center bg-slate-950/85 p-6"
            >
              <button type="button" autoFocus aria-label="Close lightbox" onClick={() => setLightboxOpen(false)} className="absolute right-5 top-5 rounded-full bg-white/15 p-2 text-white hover:bg-white/25"><X size={22} /></button>
              <img src={imageUrl} alt="Expanded mountain landscape" className="max-h-[80vh] max-w-full rounded-xl object-contain shadow-2xl" />
            </div>
          )}
        </div>
      );
    case "link-preview":
      return (
        <div className="w-full max-w-sm">
          <a href="https://example.com" target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm transition hover:shadow-md">
            <div className="h-24 bg-gradient-to-br from-violet-700 via-indigo-600 to-sky-500 p-4 text-2xl font-bold text-white">example<span className="text-violet-200">.</span></div>
            <div className="p-4"><p className="text-xs font-medium text-emerald-700">example.com</p><h3 className="mt-1 font-semibold text-slate-900 group-hover:text-violet-700">Example Domain</h3><p className="mt-1 text-sm text-slate-500">A preview card for an example destination. Opens in a new tab.</p></div>
          </a>
        </div>
      );
    case "list-grid-view":
      return (
        <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-4">
          <div className="mb-3 flex justify-end gap-1">
            {(["list", "grid"] as const).map((view) => <button key={view} type="button" aria-pressed={listView === view} onClick={() => setListView(view)} className={`rounded-md px-3 py-1.5 text-xs capitalize ${listView === view ? "bg-violet-700 text-white" : "bg-slate-100 text-slate-600"}`}>{view} view</button>)}
          </div>
          <div className={listView === "grid" ? "grid grid-cols-2 gap-2" : "divide-y divide-slate-100"}>
            {loadItems.slice(0, 4).map((item) => <div key={item} className={listView === "grid" ? "rounded-lg bg-violet-50 p-3 text-sm text-slate-700" : "py-3 text-sm text-slate-700"}>{item}</div>)}
          </div>
        </div>
      );
    case "list-group":
      return (
        <ul className="w-full max-w-sm divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white">
          {["Overview", "Notifications", "Account settings", "Privacy"].map((item) => <li key={item}><button type="button" onClick={() => setActiveTab(item)} className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm ${activeTab === item ? "bg-violet-50 font-medium text-violet-800" : "text-slate-700 hover:bg-slate-50"}`}>{item}{activeTab === item && <Check size={16} />}</button></li>)}
        </ul>
      );
    case "list-without-bullets":
      return (
        <ul className="list-none space-y-2 rounded-xl bg-white p-5 text-left">
          {["Plan your next step", "Share with your team", "Review the results"].map((item) => <li key={item} className="flex items-center gap-3 text-sm text-slate-700"><Check size={16} className="text-emerald-600" />{item}</li>)}
        </ul>
      );
    case "load-more":
      return (
        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-4">
          <ul className="divide-y divide-slate-100">{loadItems.slice(0, visibleCount).map((item, index) => <li key={item} className="py-2.5 text-sm text-slate-700">{String(index + 1).padStart(2, "0")} · {item}</li>)}</ul>
          {visibleCount < loadItems.length ? <button type="button" onClick={() => setVisibleCount((count) => Math.min(count + 2, loadItems.length))} className={`${button} mt-3 w-full`}>Load more</button> : <p role="status" className="pt-3 text-center text-xs text-slate-500">All items loaded.</p>}
        </div>
      );
    case "loaders":
      return (
        <div className="flex flex-wrap items-center justify-center gap-8 rounded-xl bg-slate-950 p-8 text-white">
          <span role="status" aria-label="Spinner loading" className="h-8 w-8 animate-spin rounded-full border-4 border-slate-600 border-t-violet-300" />
          <span role="status" aria-label="Dots loading" className="flex gap-1.5">{[0, 1, 2].map((index) => <span key={index} className="h-2.5 w-2.5 animate-bounce rounded-full bg-sky-300" style={{ animationDelay: `${index * 130}ms` }} />)}</span>
          <span role="status" aria-label="Progress loading" className="h-2 w-24 overflow-hidden rounded-full bg-slate-700"><span className="block h-full w-1/2 animate-pulse rounded-full bg-violet-400" /></span>
          <span className="sr-only">Loading examples</span>
        </div>
      );
    case "loading-buttons":
      return (
        <div className="flex flex-col items-center gap-3">
          <button
            type="button"
            disabled={loading}
            aria-busy={loading}
            onClick={() => {
              setLoading(true);
              setLoadingDone(false);
              window.setTimeout(() => {
                setLoading(false);
                setLoadingDone(true);
              }, 1200);
            }}
            className={`${button} inline-flex min-w-32 items-center justify-center gap-2 disabled:cursor-wait disabled:opacity-70`}
          >
            {loading ? <><span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />Saving...</> : loadingDone ? <><Check size={16} />Saved</> : "Save changes"}
          </button>
          <p role="status" className="min-h-4 text-xs text-slate-500">{loading ? "Saving your changes..." : loadingDone ? "Save complete." : "Click to simulate a loading state."}</p>
        </div>
      );
    case "login-form":
      return (
        <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="grid w-full max-w-sm gap-4 rounded-xl border border-slate-200 bg-white p-5 text-left">
          <div><h3 className="font-semibold text-slate-900">Welcome back</h3><p className="mt-1 text-sm text-slate-500">Sign in to your account.</p></div>
          <label className="grid gap-1 text-sm font-medium text-slate-700">Email<input type="email" required autoComplete="email" value={email} onChange={(event) => { setEmail(event.target.value); setSubmitted(false); }} placeholder="you@example.com" className="rounded-lg border border-slate-200 px-3 py-2.5 font-normal" /></label>
          <label className="grid gap-1 text-sm font-medium text-slate-700">Password<input type="password" required minLength={6} autoComplete="current-password" onChange={() => setSubmitted(false)} placeholder="At least 6 characters" className="rounded-lg border border-slate-200 px-3 py-2.5 font-normal" /></label>
          <button type="submit" className={`${button} w-full`}>Sign in</button>
          <p role="status" className="text-center text-xs text-emerald-700">{submitted ? "Demo form validated. No account was contacted." : ""}</p>
        </form>
      );
    case "login-form-in-navbar":
      return (
        <div className="relative flex w-full max-w-xl items-center justify-between rounded-xl border border-slate-200 bg-white p-3">
          <a href="#login-navbar-home" className="font-bold text-slate-900">northstar.</a>
          <nav aria-label="Login navbar" className="flex items-center gap-3"><a href="#login-navbar-about" className="text-sm text-slate-600">About</a><button type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen((current) => !current)} className={`${button} px-3 py-1.5`}>{menuOpen ? "Close" : "Sign in"}</button></nav>
          {menuOpen && <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="absolute right-3 top-full z-10 mt-2 grid w-64 gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-xl"><label className="grid gap-1 text-xs font-medium text-slate-600">Email<input required type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} className="rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="you@example.com" /></label><label className="grid gap-1 text-xs font-medium text-slate-600">Password<input required type="password" autoComplete="current-password" className="rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Password" /></label><button type="submit" className={button}>Sign in</button><p role="status" className="text-xs text-emerald-700">{submitted ? "Demo form submitted." : ""}</p></form>}
        </div>
      );
    case "icon-bar":
      return (
        <nav aria-label="Icon bar" className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
          {[
            [<Search key="search-icon" size={18} />, "Search"],
            [<Mail key="messages-icon" size={18} />, "Messages"],
            [<Check key="tasks-icon" size={18} />, "Tasks"],
            [<User key="profile-icon" size={18} />, "Profile"],
          ].map(([icon, label], index) => (
            <button
              key={String(label)}
              type="button"
              aria-label={String(label)}
              title={String(label)}
              aria-current={index === 0 ? "page" : undefined}
              onClick={() => setActiveTab(String(label))}
              className={`grid h-11 w-11 place-items-center rounded-lg transition ${activeTab === String(label) ? "bg-violet-100 text-violet-800" : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"}`}
            >
              {icon}
            </button>
          ))}
          <span role="status" className="sr-only">{activeTab} selected</span>
        </nav>
      );
    case "icon-buttons":
      return (
        <div className="flex gap-3">
          <button type="button" aria-label="Search" title="Search" onClick={() => setActiveTab("Search")} className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-violet-50 hover:text-violet-700"><Search size={18} /></button>
          <button type="button" aria-label="Send message" title="Send message" onClick={() => setActiveTab("Message")} className="grid h-11 w-11 place-items-center rounded-lg bg-violet-700 text-white hover:bg-violet-800"><Mail size={18} /></button>
          <button type="button" aria-label="Open profile" title="Open profile" onClick={() => setActiveTab("Profile")} className="grid h-11 w-11 place-items-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200"><User size={18} /></button>
          <span role="status" className="sr-only">{activeTab} action selected</span>
        </div>
      );
    case "iframe-embed-autoplay":
      return (
        <div className="w-full max-w-lg overflow-hidden rounded-xl border border-slate-200 bg-white">
          <iframe
            title="Muted autoplay animation preview"
            className="h-56 w-full"
            srcDoc={`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>*{box-sizing:border-box}body{margin:0;height:100vh;display:grid;place-items:center;background:linear-gradient(135deg,#0f172a,#312e81,#7c3aed);background-size:200% 200%;animation:bg 8s ease-in-out infinite alternate;font:600 16px system-ui;color:#fff}.orb{width:72px;height:72px;border-radius:50%;background:radial-gradient(circle at 30% 30%,#fff,#a78bfa 30%,#7c3aed 70%);box-shadow:0 0 45px #a78bfa;animation:float 2s ease-in-out infinite alternate}@keyframes bg{to{background-position:100% 100%}}@keyframes float{to{transform:translateY(-22px) scale(1.08)}}@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important}}</style><div><div class="orb"></div><p>Muted autoplay-style animation</p></div></html>`}
          />
          <p className="px-3 py-2 text-xs text-slate-500">Self-contained animated iframe · no audio or external media.</p>
        </div>
      );
    case "image-burst":
      return (
        <div className="flex min-h-64 w-full max-w-lg flex-col items-center justify-center">
          <div className={`mb-4 grid grid-cols-3 gap-2 transition-all duration-500 ${burst ? "rotate-0 scale-100 opacity-100" : "scale-50 opacity-0"}`}>
            {Array.from({ length: 6 }, (_, index) => <img key={index} src={imageUrl} alt={`Burst tile ${index + 1}`} className={`h-16 w-20 rounded-lg object-cover shadow-md ${burst ? ["-rotate-6", "rotate-3", "rotate-6", "rotate-3", "-rotate-3", "-rotate-6"][index] : "rotate-0"}`} />)}
          </div>
          <button type="button" aria-expanded={burst} onClick={() => setBurst((current) => !current)} className={button}>{burst ? "Gather images" : "Create image burst"}</button>
        </div>
      );
    case "image-comparison-slider":
      return (
        <div className="w-full max-w-lg">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
            <img src={imageUrl} alt="Color mountain landscape" className="absolute inset-0 h-full w-full object-cover" />
            <img src={imageUrl} alt="Grayscale version of the same mountain landscape" className="absolute inset-0 h-full w-full object-cover grayscale" style={{ clipPath: `inset(0 ${100 - comparison}% 0 0)` }} />
            <span className="absolute left-2 top-2 rounded bg-black/55 px-2 py-1 text-[10px] text-white">Grayscale</span>
            <span className="absolute right-2 top-2 rounded bg-black/55 px-2 py-1 text-[10px] text-white">Color</span>
            <span className="pointer-events-none absolute bottom-0 top-0 w-0.5 bg-white shadow" style={{ left: `${comparison}%` }} />
          </div>
          <label className="mt-3 flex items-center gap-3 text-xs text-slate-600">Comparison
            <input aria-label="Image comparison split" type="range" min="0" max="100" value={comparison} onChange={(event) => setComparison(Number(event.target.value))} className="flex-1 accent-violet-700" />
          </label>
        </div>
      );
    case "image-effects":
      return (
        <div className="grid grid-cols-3 gap-3">
          {[["Original", ""], ["Grayscale", "grayscale"], ["Saturated", "saturate-200"]].map(([label, effect]) => <figure key={label}><img src={imageUrl} alt={`${label} mountain landscape effect`} className={`h-28 w-32 rounded-lg object-cover ${effect}`} /><figcaption className="mt-1 text-center text-xs text-slate-600">{label}</figcaption></figure>)}
        </div>
      );
    case "image-grid":
      return (
        <div className="grid w-full max-w-lg grid-cols-2 gap-2 sm:grid-cols-3">
          {Array.from({ length: 6 }, (_, index) => <img key={index} src={imageUrl} alt={`Mountain gallery view ${index + 1}`} className={`h-28 w-full rounded-lg object-cover ${index === 0 ? "col-span-2 sm:col-span-2" : ""}`} style={{ objectPosition: `${20 + index * 12}% center` }} />)}
        </div>
      );
    case "image-magnifier-glass":
      return (
        <div
          onPointerMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            setLensPosition({
              x: Math.max(12, Math.min(88, ((event.clientX - rect.left) / rect.width) * 100)),
              y: Math.max(18, Math.min(82, ((event.clientY - rect.top) / rect.height) * 100)),
            });
          }}
          className="relative w-full max-w-lg overflow-hidden rounded-xl"
        >
          <img src={imageUrl} alt="Move pointer over mountain landscape to magnify details" className="block h-56 w-full object-cover" />
          <div className="pointer-events-none absolute h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white shadow-xl" style={{ left: `${lensPosition.x}%`, top: `${lensPosition.y}%`, backgroundImage: `url("${imageUrl}")`, backgroundSize: "240% 240%", backgroundPosition: `${lensPosition.x}% ${lensPosition.y}%` }} />
        </div>
      );
    case "image-overlay":
      return (
        <figure className="relative w-full max-w-sm overflow-hidden rounded-xl">
          <img src={imageUrl} alt="Mountain landscape with a color overlay" className="h-52 w-full object-cover" />
          <span aria-hidden="true" className="absolute inset-0 bg-violet-900/35" />
          <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-white">Tinted image overlay</figcaption>
        </figure>
      );
    case "image-overlay-fade":
    case "image-overlay-icon":
    case "image-overlay-slide":
    case "image-overlay-text":
    case "image-overlay-title":
    case "image-overlay-zoom":
      return (
        <button type="button" className="group relative w-full max-w-sm overflow-hidden rounded-xl text-left">
          <img src={imageUrl} alt="Mountain landscape" className={`h-56 w-full object-cover transition duration-500 ${component === "image-overlay-zoom" ? "group-hover:scale-110 group-focus-visible:scale-110" : ""}`} />
          {component === "image-overlay-fade" && <span className="absolute inset-0 grid place-items-center bg-slate-950/60 p-4 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">Fade-in image caption</span>}
          {component === "image-overlay-icon" && <span className="absolute inset-0 grid place-items-center bg-slate-950/30 text-3xl text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" aria-label="View image">⌕</span>}
          {component === "image-overlay-slide" && <span className="absolute inset-x-0 bottom-0 translate-y-full bg-slate-950/80 p-4 text-sm text-white transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">Slide-up image details</span>}
          {component === "image-overlay-text" && <span className="absolute inset-0 grid place-items-center bg-slate-950/30 p-4 text-xl font-semibold text-white">Text over image</span>}
          {component === "image-overlay-title" && <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12 text-lg font-bold text-white">A title over the view</span>}
          {component === "image-overlay-zoom" && <span className="absolute inset-x-0 bottom-0 bg-black/50 p-3 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">Zoom image</span>}
          <span className="sr-only">Focus or hover to view the image overlay.</span>
        </button>
      );
    case "image-text":
      return (
        <article className="grid w-full max-w-2xl overflow-hidden rounded-xl bg-white sm:grid-cols-2">
          <img src={imageUrl} alt="Mountain landscape" className="h-48 w-full object-cover sm:h-full" />
          <div className="p-5 text-left"><p className="text-xs font-semibold uppercase tracking-widest text-violet-700">A place to pause</p><h3 className="mt-2 text-xl font-bold text-slate-900">Find a fresh perspective.</h3><p className="mt-2 text-sm leading-5 text-slate-600">Pair a meaningful image with concise supporting text.</p></div>
        </article>
      );
    case "image-text-blocks":
      return (
        <div className="grid w-full max-w-2xl gap-3 sm:grid-cols-2">
          {["Discover", "Create"].map((item, index) => <article key={item} className="overflow-hidden rounded-xl border border-slate-200 bg-white"><img src={imageUrl} alt={`${item} mountain landscape`} className="h-32 w-full object-cover" style={{ objectPosition: index ? "70% center" : "30% center" }} /><div className="p-4 text-left"><h3 className="font-semibold text-slate-900">{item}</h3><p className="mt-1 text-sm text-slate-600">A flexible image and text content block.</p></div></article>)}
        </div>
      );
    case "image-zoom":
      return (
        <div className="w-full max-w-sm">
          <div className="overflow-hidden rounded-xl"><img src={imageUrl} alt="Mountain landscape with adjustable zoom" className="h-48 w-full object-cover transition-transform duration-200" style={{ transform: `scale(${imageZoom})` }} /></div>
          <label className="mt-3 flex items-center gap-3 text-xs text-slate-600">Zoom
            <input aria-label="Image zoom level" type="range" min="1" max="2" step="0.05" value={imageZoom} onChange={(event) => setImageZoom(Number(event.target.value))} className="flex-1 accent-violet-700" />
            {imageZoom.toFixed(1)}×
          </label>
        </div>
      );
    case "infinite-moving-cards":
      return (
        <div className="w-full max-w-lg overflow-hidden rounded-xl bg-slate-950 py-4">
          <div className="flex w-max animate-[cardMarquee_18s_linear_infinite] gap-3 motion-reduce:animate-none" style={{ animation: "cardMarquee 18s linear infinite" }}>
            {[...["Ideas", "Design", "Build", "Launch", "Ideas", "Design", "Build", "Launch"]].map((item, index) => <article key={`${item}-${index}`} className="w-36 rounded-lg border border-white/10 bg-white/10 p-4 text-white"><span className="text-xs text-violet-300">0{(index % 4) + 1}</span><h3 className="mt-3 font-semibold">{item}</h3></article>)}
          </div>
          <style>{`@keyframes cardMarquee { to { transform: translateX(-50%) } } @media (prefers-reduced-motion: reduce) { .animate-\\[cardMarquee_18s_linear_infinite\\] { animation: none !important } }`}</style>
        </div>
      );
    case "inline-form":
      return (
        <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="w-full max-w-lg rounded-xl border border-slate-200 bg-white p-5 text-left">
          <label htmlFor="inline-email" className="text-sm font-semibold text-slate-900">Get updates in your inbox</label>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row"><input id="inline-email" required type="email" value={email} onChange={(event) => { setEmail(event.target.value); setSubmitted(false); }} placeholder="you@example.com" className="min-w-0 flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm" /><button type="submit" className={button}>Subscribe</button></div>
          <p role="status" className="mt-2 min-h-4 text-xs text-emerald-700">{submitted ? "You are subscribed." : ""}</p>
        </form>
      );
    case "input-field-in-navbar":
      return (
        <nav aria-label="Navigation with search field" className="flex w-full max-w-xl flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-3">
          <a href="#navbar-search-home" className="font-bold text-slate-900">northstar.</a>
          <div className="flex gap-3 text-xs text-slate-600"><a href="#navbar-search-work">Work</a><a href="#navbar-search-about">About</a></div>
          <label className="flex items-center gap-2 rounded-lg border border-slate-200 px-2"><Search size={15} className="text-slate-400" /><input type="search" aria-label="Search from navbar" placeholder="Search..." className="h-9 w-28 text-xs outline-none" /></label>
        </nav>
      );
    case "input-focus-autowidth":
      return (
        <label className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-slate-400 transition-all focus-within:w-72 focus-within:border-violet-400 focus-within:text-violet-600 w-40">
          <Search size={16} />
          <input type="search" aria-label="Expandable search input" placeholder="Focus to expand..." className="w-full min-w-0 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400" />
        </label>
      );
    case "header":
      return (
        <header className="flex w-full max-w-2xl flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4">
          <a href="#header-home" className="text-lg font-bold tracking-tight text-slate-900">northstar<span className="text-violet-600">.</span></a>
          <nav aria-label="Example header" className="flex gap-4 text-sm text-slate-600"><a href="#header-work" className="hover:text-violet-700">Work</a><a href="#header-about" className="hover:text-violet-700">About</a><a href="#header-contact" className="hover:text-violet-700">Contact</a></nav>
          <a href="#header-contact" className={`${button} bg-violet-700 hover:bg-violet-800`}>Get started</a>
        </header>
      );
    case "headlines-animation-text-effect":
      return (
        <div className="w-full max-w-lg rounded-2xl bg-slate-950 p-8 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[.25em] text-violet-300">Ideas in motion</p>
          <h2 key={headlineIndex} className="mt-4 animate-[headlineIn_.5s_ease-out] text-3xl font-bold" style={{ animation: "headlineIn .5s ease-out" }}>{["Build with clarity.", "Create with purpose.", "Grow with confidence."][headlineIndex]}</h2>
          <style>{`@keyframes headlineIn { from { opacity: 0; transform: translateY(12px) } to { opacity: 1; transform: translateY(0) } }`}</style>
          <button type="button" onClick={() => setHeadlineIndex((current) => (current + 1) % 3)} className={`${button} mt-5`}>Next headline</button>
        </div>
      );
    case "hero-highlight":
      return (
        <section className="w-full max-w-2xl rounded-2xl bg-white px-6 py-10 text-center sm:py-14">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-violet-700">Your next chapter</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">Make space for <span className="relative whitespace-nowrap"><span aria-hidden="true" className="absolute inset-x-0 bottom-1 h-3 -rotate-1 bg-amber-200" /><span className="relative">what matters.</span></span></h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-600">Highlight the most important words without losing readability.</p>
        </section>
      );
    case "hero-image":
      return (
        <section className="grid w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-sm sm:grid-cols-2">
          <div className="flex flex-col justify-center p-6 text-left sm:p-8"><p className="text-xs font-semibold uppercase tracking-widest text-violet-700">Plan · Make · Share</p><h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900">Bring good ideas to life.</h2><p className="mt-3 text-sm leading-6 text-slate-600">A balanced hero pairs a clear message with a strong visual.</p><a href="#hero-image-learn" className={`${button} mt-5 w-fit bg-violet-700`}>Explore more</a></div>
          <img src={imageUrl} alt="Mountain landscape at sunrise" className="h-52 w-full object-cover sm:h-full" />
        </section>
      );
    case "hide":
      return (
        <div className="flex flex-col items-center gap-4">
          <button type="button" aria-expanded={visible} onClick={() => setVisible((current) => !current)} className={button}>{visible ? "Hide message" : "Show message"}</button>
          <p aria-live="polite" className={`rounded-lg bg-violet-50 px-5 py-3 text-sm text-violet-900 transition-opacity ${visible ? "opacity-100" : "opacity-0"}`}>{visible ? "This message can be hidden or shown." : "Message hidden"}</p>
        </div>
      );
    case "hide-navbar-on-scroll":
      return (
        <div className="relative h-64 w-full max-w-lg overflow-y-auto rounded-xl border border-slate-200 bg-slate-50" onScroll={(event) => setMenuOpen(event.currentTarget.scrollTop > 24)}>
          <nav className={`sticky top-0 z-10 flex items-center justify-between bg-white px-4 py-3 shadow-sm transition-transform duration-300 ${menuOpen ? "-translate-y-full" : "translate-y-0"}`}><span className="font-semibold text-slate-900">Scroll demo</span><span className="flex gap-3 text-xs text-slate-600"><a href="#scroll-home">Home</a><a href="#scroll-work">Work</a></span></nav>
          {Array.from({ length: 6 }, (_, index) => <p key={index} className="m-3 rounded-lg bg-white p-5 text-sm text-slate-600">Scroll down to hide the navbar · section {index + 1}</p>)}
          <p className="sticky bottom-2 mx-3 rounded bg-slate-900/80 p-2 text-center text-[11px] text-white">Scroll up to reveal the navigation</p>
        </div>
      );
    case "hide-scrollbar":
      return (
        <div className="h-48 w-full max-w-sm overflow-y-auto rounded-xl border border-slate-200 bg-white p-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <p className="sticky top-0 rounded bg-white/90 p-2 text-xs font-semibold text-slate-700">Scrollable panel · scrollbar hidden</p>
          {Array.from({ length: 8 }, (_, index) => <p key={index} className="my-3 rounded-lg bg-slate-50 p-4 text-sm text-slate-600">Scrollable content {index + 1}</p>)}
        </div>
      );
    case "highlight-nav-on-div-scroll":
      return (
        <div className="w-full max-w-lg">
          <nav aria-label="Scroll sections" className="mb-3 flex gap-2">{["Intro", "Details", "Finish"].map((section) => <button key={section} type="button" onClick={() => { setActiveSection(section); document.getElementById(`highlight-${section}`)?.scrollIntoView({ block: "nearest", behavior: "smooth" }); }} aria-current={activeSection === section ? "location" : undefined} className={`rounded-full px-3 py-1.5 text-xs font-medium ${activeSection === section ? "bg-violet-700 text-white" : "bg-white text-slate-600"}`}>{section}</button>)}</nav>
          <div onScroll={(event) => { const index = Math.min(2, Math.floor(event.currentTarget.scrollTop / 88)); setActiveSection(["Intro", "Details", "Finish"][index]); }} className="h-48 space-y-3 overflow-y-auto rounded-xl border border-slate-200 bg-white p-3">{["Intro", "Details", "Finish"].map((section) => <section id={`highlight-${section}`} key={section} className="flex h-24 items-center rounded-lg bg-violet-50 px-5"><h3 className="font-semibold text-slate-800">{section}</h3></section>)}</div>
        </div>
      );
    case "horizontal-line-with-words-in-the-middle":
      return <div className="flex w-full max-w-md items-center gap-4"><span className="h-px flex-1 bg-slate-300" /><span className="shrink-0 text-sm text-slate-500">OR CONTINUE WITH</span><span className="h-px flex-1 bg-slate-300" /></div>;
    case "horizontal-scroll-menu":
      return (
        <nav aria-label="Horizontally scrollable menu" className="w-full max-w-lg overflow-x-auto rounded-xl border border-slate-200 bg-white [scrollbar-width:thin]">
          <div className="flex min-w-max gap-2 p-3">{["Overview", "Projects", "Team", "Activity", "Settings", "Integrations", "Billing"].map((label, index) => <a key={label} href={`#horizontal-${index}`} className={`rounded-full px-4 py-2 text-sm ${index === 0 ? "bg-violet-700 text-white" : "bg-slate-50 text-slate-600 hover:bg-violet-50"}`}>{label}</a>)}</div>
        </nav>
      );
    case "hotspot":
      return (
        <div className="relative h-64 w-full max-w-lg overflow-hidden rounded-xl bg-gradient-to-br from-sky-100 via-emerald-50 to-amber-100">
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(45deg,#94a3b8_1px,transparent_1px),linear-gradient(-45deg,#94a3b8_1px,transparent_1px)] [background-size:28px_28px]" />
          {[["Cafe", "24%", "30%"], ["Garden", "70%", "62%"], ["Studio", "43%", "78%"]].map(([label, left, top]) => <button key={label} type="button" aria-label={`View ${label} hotspot`} onClick={() => setActiveHotspot(label)} style={{ left, top }} className="absolute grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-violet-700 text-sm text-white shadow-lg ring-4 ring-violet-300/50">+</button>)}
          <div className="absolute left-3 top-3 rounded-lg bg-white/90 px-3 py-2 text-xs text-slate-700 shadow">{activeHotspot ? `${activeHotspot} · Point of interest` : "Select a map marker"}</div>
        </div>
      );
    case "hover-border-gradient":
      return <div className="group rounded-2xl bg-gradient-to-r from-violet-500 via-pink-500 to-sky-400 p-[2px] transition-shadow hover:shadow-[0_0_30px_rgba(139,92,246,.35)] focus-within:shadow-[0_0_30px_rgba(139,92,246,.35)]"><article tabIndex={0} className="rounded-[14px] bg-white px-8 py-7 text-center outline-none"><h3 className="font-semibold text-slate-900">A gradient border</h3><p className="mt-2 text-sm text-slate-500">Hover or keyboard focus to reveal a glow.</p></article></div>;
    case "hover-dropdowns":
      return (
        <nav aria-label="Hover dropdown demo" className="flex w-full max-w-md items-center gap-2 rounded-xl border border-slate-200 bg-white p-3">
          <a href="#dropdown-home" className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">Home</a>
          <div className="group relative"><button type="button" aria-haspopup="true" className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-violet-600">Explore <ArrowDown size={14} /></button><div className="invisible absolute left-0 top-full z-10 w-40 translate-y-1 rounded-lg border border-slate-200 bg-white p-1 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">{["Discover", "Collections", "Stories"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-violet-50">{item}</a>)}</div></div>
          <a href="#dropdown-contact" className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">Contact</a>
          <span className="sr-only">Hover over Explore or focus it and use Tab to open the submenu.</span>
        </nav>
      );
    case "hover-sidenav-buttons":
      return <nav aria-label="Sidebar button hover demo" className="w-full max-w-xs space-y-1 rounded-xl border border-slate-200 bg-white p-3">{["Overview", "Projects", "Messages", "Settings"].map((label, index) => <a key={label} href={`#sidenav-${index}`} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-violet-600 ${index === 0 ? "bg-violet-50 font-semibold text-violet-800" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`}><span className="h-2 w-2 rounded-full bg-current opacity-60" />{label}</a>)}</nav>;
    case "hover-tabs":
      return (
        <div className="w-full max-w-lg rounded-xl border border-slate-200 bg-white p-4">
          <div role="tablist" aria-label="Hover tabs" className="flex border-b border-slate-200">{["Overview", "Activity", "Settings"].map((tab) => <button key={tab} type="button" role="tab" aria-selected={activeTab === tab} onMouseEnter={() => setActiveTab(tab)} onFocus={() => setActiveTab(tab)} onClick={() => setActiveTab(tab)} className={`flex-1 border-b-2 px-3 py-2 text-sm ${activeTab === tab ? "border-violet-600 font-semibold text-violet-700" : "border-transparent text-slate-500"}`}>{tab}</button>)}</div>
          <div role="tabpanel" className="min-h-20 px-2 py-5 text-sm text-slate-600">{activeTab} content · hover, focus, or select a tab.</div>
        </div>
      );
    case "how-do-vertically-center-text":
      return <div className="flex h-56 w-full max-w-md items-center rounded-xl bg-violet-50 p-6"><div className="rounded-lg bg-white p-4 shadow-sm"><h3 className="font-semibold text-slate-900">Vertically centered</h3><p className="mt-1 text-sm text-slate-600">Flexbox aligns this text even when the height is unknown.</p></div></div>;
    case "how-to-center-an-image-in-a-div":
      return <div className="grid h-56 w-full max-w-lg place-items-center rounded-xl border border-dashed border-slate-300 bg-white p-4"><img src={imageUrl} alt="Mountain landscape centered inside a container" className="h-36 max-w-full rounded-lg object-cover shadow" /></div>;
    case "how-to-disable-the-resize-grabber":
      return <label className="w-full max-w-sm text-left text-sm font-medium text-slate-700">Textarea with resize disabled<textarea className="mt-2 h-28 w-full resize-none rounded-lg border border-slate-200 bg-white p-3 text-sm" defaultValue="Try dragging the corner — resizing is disabled." /></label>;
    case "how-to-remove-arrows-from-number-input":
      return <div className="w-full max-w-xs"><label className="text-sm font-medium text-slate-700">Quantity<input type="number" defaultValue={3} className="mt-2 w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 py-2.5 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" /></label><p className="mt-2 text-xs text-slate-500">Number input semantics remain intact; browser stepper arrows are hidden.</p></div>;
    case "how-to-vertically-middle-align-floating-elements":
      return <div className="flex w-full max-w-md items-center gap-4 rounded-xl bg-white p-5"><span className="rounded-lg bg-violet-100 px-3 py-2 text-xs text-violet-800">Short</span><span className="rounded-lg bg-sky-100 px-3 py-6 text-sm text-sky-800">Taller element<br />with two lines</span><span className="rounded-lg bg-emerald-100 px-3 py-3 text-xs text-emerald-800">Aligned center</span></div>;
    case "get-checkbox-values-using-checkbox-name":
      return (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const values = new FormData(event.currentTarget).getAll("interests");
            setSubmitted(true);
            setQuery(values.map(String).join(", "));
          }}
          className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5 text-left"
        >
          <fieldset>
            <legend className="font-semibold text-slate-900">Choose interests</legend>
            <div className="mt-4 space-y-3">
              {["Design", "Engineering", "Research", "Accessibility"].map((item) => (
                <label key={item} className="flex items-center gap-3 text-sm text-slate-700">
                  <input type="checkbox" name="interests" value={item} className="h-4 w-4 accent-violet-700" />
                  {item}
                </label>
              ))}
            </div>
          </fieldset>
          <button type="submit" className={`${button} mt-4`}>Get checked values</button>
          <p role="status" className="mt-3 min-h-5 text-xs text-violet-700">
            {submitted ? query ? `Selected: ${query}` : "No checkboxes selected." : ""}
          </p>
        </form>
      );
    case "github-globe":
      return (
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit GitHub"
          className="group relative grid h-56 w-56 place-items-center overflow-hidden rounded-full bg-slate-950 text-white shadow-[0_0_45px_rgba(99,102,241,.3)]"
        >
          <div className="absolute inset-5 rounded-full border border-violet-300/40 bg-[radial-gradient(circle_at_35%_30%,rgba(139,92,246,.35),transparent_60%)]" />
          <div className="absolute inset-x-7 top-1/2 h-16 -translate-y-1/2 rounded-[50%] border border-sky-300/60 transition-transform duration-700 group-hover:rotate-12" />
          <div className="absolute inset-y-7 left-1/2 w-20 -translate-x-1/2 rounded-[50%] border border-violet-300/50" />
          <span className="relative grid h-14 w-14 place-items-center rounded-full bg-slate-800 font-bold text-xl ring-1 ring-white/20">GH</span>
          <span className="absolute bottom-8 text-xs text-slate-300">Global developer network</span>
        </a>
      );
    case "glare-card":
      return (
        <article
          onPointerMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            setPosition({
              x: ((event.clientX - rect.left) / rect.width) * 100,
              y: ((event.clientY - rect.top) / rect.height) * 100,
            });
          }}
          className="group relative w-full max-w-sm overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 p-7 text-left text-white"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(255,255,255,.25), transparent 45%)` }}
          />
          <div className="relative"><p className="text-xs uppercase tracking-widest text-violet-300">Interactive highlight</p><h3 className="mt-4 text-2xl font-semibold">A little glare goes a long way.</h3><p className="mt-2 text-sm text-slate-400">Move your pointer across the card.</p></div>
        </article>
      );
    case "glassmorphism":
      return (
        <div className="grid min-h-56 w-full max-w-lg place-items-center rounded-2xl bg-gradient-to-br from-sky-400 via-violet-500 to-rose-400 p-6">
          <div className="w-full rounded-2xl border border-white/50 bg-white/35 p-6 text-white shadow-xl backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/80">Glass surface</p><h3 className="mt-2 text-2xl font-bold">Clarity through blur</h3><p className="mt-2 text-sm text-white/90">A translucent panel blends with the colors behind it.</p>
          </div>
        </div>
      );
    case "glowing-effect":
      return (
        <div className="rounded-2xl bg-violet-500/15 p-1 shadow-[0_0_45px_rgba(139,92,246,.55)]">
          <div className="rounded-2xl border border-violet-300/30 bg-slate-950 px-8 py-10 text-center text-white">
            <span className="mx-auto block h-3 w-3 rounded-full bg-violet-300 shadow-[0_0_20px_8px_rgba(167,139,250,.6)]" />
            <h3 className="mt-5 text-xl font-semibold">A soft ambient glow</h3>
            <p className="mt-2 text-sm text-slate-400">Built with layered shadows.</p>
          </div>
        </div>
      );
    case "glowing-stars":
      return (
        <div className="relative grid h-56 w-full max-w-lg place-items-center overflow-hidden rounded-2xl bg-slate-950 text-white">
          {Array.from({ length: 22 }, (_, index) => (
            <span
              key={index}
              aria-hidden="true"
              className={`absolute animate-pulse text-violet-200 ${index % 3 === 0 ? "text-lg drop-shadow-[0_0_8px_rgba(196,181,253,.9)]" : "text-xs"}`}
              style={{ left: `${(index * 37 + 9) % 95}%`, top: `${(index * 53 + 7) % 90}%`, animationDelay: `${(index % 7) * 180}ms` }}
            >✦</span>
          ))}
          <div className="relative text-center"><p className="text-3xl text-violet-200 drop-shadow-[0_0_16px_rgba(196,181,253,.9)]">✧</p><p className="mt-2 text-sm text-slate-300">A small constellation</p></div>
        </div>
      );
    case "glowing-text":
      return (
        <div className="rounded-2xl bg-slate-950 px-8 py-10 text-center">
          <p className="text-sm uppercase tracking-[.3em] text-slate-400">Light up your ideas</p>
          <h3 className="mt-4 text-4xl font-black tracking-tight text-white drop-shadow-[0_0_8px_rgba(167,139,250,.9)] [text-shadow:0_0_30px_rgba(167,139,250,.8)]">GLOW</h3>
        </div>
      );
    case "google-charts":
      return (
        <div className="w-full max-w-lg rounded-xl border border-slate-200 bg-white p-5 text-left">
          <h3 className="font-semibold text-slate-900">Monthly activity</h3>
          <p className="mt-1 text-xs text-slate-500">Sample chart rendered locally as SVG</p>
          <svg viewBox="0 0 360 180" role="img" aria-label="Bar chart showing monthly activity" className="mt-4 w-full">
            <path d="M35 10V145H350M35 110H350M35 75H350M35 40H350" fill="none" stroke="#e2e8f0" />
            {[["Jan", 70], ["Feb", 105], ["Mar", 82], ["Apr", 132], ["May", 112], ["Jun", 155]].map(([label, height], index) => (
              <g key={label as string}><rect x={50 + index * 48} y={145 - Number(height)} width="26" height={height as number} rx="4" fill={index === 5 ? "#7c3aed" : "#c4b5fd"} /><text x={63 + index * 48} y="165" textAnchor="middle" fill="#64748b" fontSize="10">{label}</text></g>
            ))}
          </svg>
        </div>
      );
    case "google-fonts":
      return (
        <div className="w-full max-w-lg rounded-xl border border-slate-200 bg-white p-6 text-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-700">Type specimen · system fallback</p>
          <p className="mt-4 text-4xl font-medium text-slate-900" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>A clearer way to think.</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">This preview avoids loading third-party font files. Replace the fallback with a Google Fonts family in your own project if needed.</p>
        </div>
      );
    case "google-gemini-effect":
      return (
        <div className="group relative w-full max-w-lg overflow-hidden rounded-2xl bg-slate-950 p-7 text-white">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 opacity-50 blur-xl transition-opacity duration-500 group-hover:opacity-90" />
          <div className="relative rounded-xl border border-white/15 bg-slate-950/85 p-6">
            <span className="bg-gradient-to-r from-sky-300 via-violet-300 to-pink-300 bg-clip-text text-xs font-semibold uppercase tracking-widest text-transparent">AI assistant style</span>
            <h3 className="mt-3 text-xl font-semibold">What would you like to explore?</h3>
            <p className="mt-2 text-sm text-slate-400">A colorful gradient effect for an assistant-inspired interface.</p>
            <div className="mt-5 h-2 rounded-full bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400" />
          </div>
        </div>
      );
    case "google-maps":
      return (
        <div role="img" aria-label="Illustrative map preview with a location marker" className="relative h-64 w-full max-w-lg overflow-hidden rounded-xl border border-slate-200 bg-[#e8eee5]">
          <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(28deg,transparent_45%,#fff_46%,#fff_49%,transparent_50%),linear-gradient(112deg,transparent_38%,#fff_39%,#fff_42%,transparent_43%),linear-gradient(0deg,transparent_48%,#fff_49%,#fff_51%,transparent_52%)] [background-size:140px_120px,180px_150px,100%_90px]" />
          <div className="absolute left-[18%] top-[25%] h-10 w-32 rotate-12 rounded-full bg-emerald-200/80" />
          <div className="absolute right-[12%] top-[53%] h-12 w-28 -rotate-12 rounded-full bg-sky-200/80" />
          <div className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-red-500 text-white shadow-lg ring-4 ring-white/70">•</div>
          <span className="absolute bottom-3 left-3 rounded-md bg-white/90 px-2 py-1 text-[10px] text-slate-600">Illustrative map · not a live map</span>
        </div>
      );
    case "google-search-engine":
      return (
        <form action="https://www.google.com/search" method="get" target="_blank" className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 text-center">
          <div className="mb-5 text-3xl font-semibold tracking-tight"><span className="text-blue-600">G</span><span className="text-red-500">o</span><span className="text-amber-500">o</span><span className="text-blue-600">g</span><span className="text-emerald-600">l</span><span className="text-red-500">e</span></div>
          <label className="flex items-center gap-3 rounded-full border border-slate-200 px-4 shadow-sm focus-within:shadow-md"><Search size={17} className="text-slate-400" /><input name="q" required aria-label="Google search query" placeholder="Search the web" className="h-11 flex-1 outline-none" /></label>
          <button type="submit" className="mt-4 rounded-lg bg-slate-50 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">Search Google</button>
        </form>
      );
    case "google-translate":
      return (
        <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-5 text-left">
          <label className="text-sm font-medium text-slate-700">Preview language
            <select value={language} onChange={(event) => setLanguage(event.target.value)} className="ml-3 rounded-lg border border-slate-200 bg-white px-3 py-2">
              {["English", "Spanish", "French", "Japanese"].map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <blockquote className="mt-5 border-l-2 border-violet-400 pl-4 text-lg text-slate-800">
            {{ English: "Welcome to our website.", Spanish: "Bienvenido a nuestro sitio web.", French: "Bienvenue sur notre site web.", Japanese: "ウェブサイトへようこそ。" }[language as "English" | "Spanish" | "French" | "Japanese"]}
          </blockquote>
          <p className="mt-2 text-xs text-slate-500">Local example text · no translation service is contacted.</p>
        </div>
      );
    case "gradient-animation":
      return (
        <div className="grid h-56 w-full max-w-lg place-items-center rounded-2xl bg-gradient-to-r from-fuchsia-500 via-blue-500 to-emerald-400 bg-[length:200%_200%] text-lg font-bold text-white shadow-lg animate-[gradient_6s_ease_infinite]" style={{ backgroundSize: "200% 200%", animation: "gradientShift 6s ease infinite" }}>
          <style>{`@keyframes gradientShift { 0%,100% { background-position: 0% 50% } 50% { background-position: 100% 50% } }`}</style>
          Animated gradient
        </div>
      );
    case "gradient-bg-scroll":
      return (
        <div
          onScroll={(event) => setScrollPastFold(event.currentTarget.scrollTop > 30)}
          className={`h-56 w-full max-w-lg overflow-y-auto rounded-xl p-5 transition-colors duration-500 ${scrollPastFold ? "bg-gradient-to-br from-violet-200 to-sky-200" : "bg-gradient-to-br from-amber-100 to-rose-100"}`}
        >
          <div className="sticky top-0 rounded-lg bg-white/80 p-3 text-sm font-medium text-slate-800 backdrop-blur">Scroll inside this panel to change the gradient</div>
          {Array.from({ length: 5 }, (_, index) => <p key={index} className="my-4 rounded-lg bg-white/50 p-4 text-sm text-slate-700">Scrollable section {index + 1}</p>)}
        </div>
      );
    case "grid-and-dot-backgrounds":
      return (
        <div className="grid w-full max-w-lg grid-cols-2 gap-4">
          <div className="grid h-44 place-items-center rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-700 [background-image:linear-gradient(#cbd5e1_1px,transparent_1px),linear-gradient(90deg,#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]">Grid background</div>
          <div className="grid h-44 place-items-center rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-700 [background-image:radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]">Dot background</div>
        </div>
      );
    case "grid-layout":
      return (
        <div className="grid w-full max-w-lg grid-cols-2 gap-3 sm:grid-cols-3">
          {["One", "Two", "Three", "Four", "Five", "Six"].map((item, index) => <div key={item} className={`grid min-h-20 place-items-center rounded-xl text-sm font-semibold ${index === 0 ? "col-span-2 bg-violet-700 text-white sm:col-span-2" : index % 2 ? "bg-slate-100 text-slate-700" : "bg-violet-100 text-violet-900"}`}>{item}</div>)}
        </div>
      );
    case "grid-tile":
      return (
        <div className="grid w-full max-w-lg grid-cols-3 gap-2">
          {["North", "East", "South", "West", "Center", "Harbor"].map((tile) => (
            <button key={tile} type="button" aria-pressed={selectedTile === tile} onClick={() => setSelectedTile(selectedTile === tile ? "" : tile)} className={`min-h-20 rounded-lg p-3 text-sm font-medium transition ${selectedTile === tile ? "col-span-2 row-span-2 bg-violet-700 text-white" : "bg-slate-100 text-slate-700 hover:bg-violet-100"}`}>
              {tile}{selectedTile === tile && <span className="mt-2 block text-xs font-normal text-violet-100">Selected grid tile</span>}
            </button>
          ))}
        </div>
      );
    case "fading-buttons":
      return <div className="flex flex-wrap gap-3">{["Save changes", "Cancel", "Learn more"].map((label) => <button key={label} type="button" className={`${button} transition-opacity hover:opacity-50 focus-visible:opacity-50`}>{label}</button>)}</div>;
    case "fatnav":
      return <nav aria-label="Fat navigation" className="flex w-full max-w-2xl flex-wrap items-center justify-between gap-4 rounded-2xl bg-slate-950 px-6 py-5 text-white"><a href="#fatnav-home" className="text-xl font-black tracking-tight">NORTHSTAR</a><div className="flex gap-5 text-sm font-semibold"><a href="#fatnav-work" className="hover:text-violet-300">Work</a><a href="#fatnav-about" className="hover:text-violet-300">About</a><a href="#fatnav-contact" className="hover:text-violet-300">Contact</a></div><span className="rounded-full bg-violet-600 px-4 py-2 text-xs font-bold uppercase">Let&apos;s talk</span></nav>;
    case "favicon":
      return <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5"><svg viewBox="0 0 40 40" role="img" aria-label="Example favicon" className="h-10 w-10"><rect width="40" height="40" rx="12" fill="#6d28d9" /><path d="M10 28 20 9l10 19h-7l-3-7-3 7z" fill="white" /></svg><div><p className="font-semibold text-slate-800">northstar.example</p><p className="text-xs text-slate-500">Example tab icon preview</p></div></div>;
    case "feature-sections":
      return <div className="w-full max-w-2xl rounded-xl bg-white p-5"><h3 className="text-center text-xl font-bold text-slate-900">Everything in one place</h3><div className="mt-5 grid gap-3 sm:grid-cols-3">{[["Plan", "Organize work and set clear priorities."], ["Build", "Turn ideas into practical solutions."], ["Grow", "Learn from useful, clear insights."]].map(([title, copy]) => <article key={title} className="rounded-xl border border-slate-100 p-4"><span className="text-xs font-bold text-violet-600">✦ {title}</span><p className="mt-2 text-sm leading-5 text-slate-600">{copy}</p></article>)}</div></div>;
    case "fieldset-and-legend":
      return <fieldset className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5 text-left"><legend className="px-2 text-sm font-semibold text-slate-800">Contact preferences</legend><div className="space-y-3">{["Email updates", "Product news", "Release notes"].map((label) => <label key={label} className="flex items-center gap-3 text-sm text-slate-700"><input type="checkbox" className="accent-violet-700" />{label}</label>)}</div></fieldset>;
    case "find-hidden-element":
      return <div className="grid min-h-44 w-full max-w-sm place-items-center rounded-xl bg-slate-100 p-5 text-center"><div><button type="button" onClick={() => setFound(true)} className={button}>Find hidden element</button><p aria-live="polite" className={`mt-4 rounded-lg bg-white p-3 text-sm text-emerald-700 transition-opacity ${found ? "opacity-100" : "opacity-0"}`}>{found ? "Found it! The hidden element is now visible." : "Hidden result"}</p></div></div>;
    case "fixed-header":
    case "fixed-footer":
    case "fixed-menu":
    case "fixed-sidebar":
      return <div className="relative h-64 w-full max-w-lg overflow-hidden rounded-xl border border-slate-200 bg-white text-left">{component === "fixed-header" && <div className="absolute inset-x-0 top-0 z-10 border-b bg-white px-4 py-3 text-sm font-semibold">Pinned preview header</div>}{component === "fixed-sidebar" && <div className="absolute inset-y-0 left-0 z-10 w-24 border-r bg-slate-50 p-3 text-xs font-semibold">Pinned<br />sidebar</div>}<div className={`h-full overflow-y-auto p-4 ${component === "fixed-header" ? "pt-14" : ""} ${component === "fixed-footer" ? "pb-14" : ""} ${component === "fixed-sidebar" ? "ml-24" : ""}`}>{Array.from({ length: 6 }, (_, index) => <p key={index} className="mb-3 rounded-lg bg-slate-50 p-3 text-xs text-slate-600">Scroll content section {index + 1}</p>)}</div>{component === "fixed-footer" && <div className="absolute inset-x-0 bottom-0 border-t bg-white px-4 py-3 text-xs font-semibold">Pinned preview footer</div>}{component === "fixed-menu" && <button type="button" aria-label="Open fixed quick menu" onClick={() => setMenuOpen(!menuOpen)} className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-violet-700 text-white shadow-lg">{menuOpen ? <X size={18} /> : <Menu size={18} />}</button>}{component === "fixed-menu" && menuOpen && <div className="absolute bottom-16 right-4 rounded-lg border bg-white p-3 text-xs shadow-lg">Quick actions</div>}</div>;
    case "flexbox":
      return <div className="w-full max-w-xl space-y-4 rounded-xl bg-white p-5"><div className="flex gap-2"><button onClick={() => setLayout("Flex")} className={`rounded-full px-3 py-1 text-xs ${layout === "Flex" ? "bg-violet-700 text-white" : "bg-slate-100"}`}>Flex</button><button onClick={() => setLayout("Space between")} className={`rounded-full px-3 py-1 text-xs ${layout === "Space between" ? "bg-violet-700 text-white" : "bg-slate-100"}`}>Space between</button></div><div className={`flex items-center rounded-lg bg-slate-50 p-4 ${layout === "Flex" ? "justify-center gap-4" : "justify-between"}`}>{["One", "Two", "Three"].map((item) => <div key={item} className="rounded-lg bg-violet-100 px-5 py-3 text-sm font-medium text-violet-800">{item}</div>)}</div><p className="text-xs text-slate-500">Current alignment: {layout}</p></div>;
    case "flickering-grid":
      return <div aria-label="Decorative flickering grid" className="grid grid-cols-8 gap-2 rounded-xl bg-slate-950 p-6">{Array.from({ length: 48 }, (_, index) => <span key={index} className={`aspect-square rounded-sm ${index % 7 === 0 ? "animate-pulse bg-violet-400" : index % 5 === 0 ? "bg-sky-900" : "bg-slate-800"}`} style={{ animationDelay: `${(index % 6) * 120}ms` }} />)}</div>;
    case "flip-an-image":
      return <button type="button" onClick={() => setFlipped(!flipped)} aria-pressed={flipped} className="rounded-xl text-left"><img src={imageUrl} alt="Mountain landscape; activate to flip horizontally" className={`h-48 w-72 rounded-xl object-cover transition-transform duration-500 ${flipped ? "-scale-x-100" : ""}`} /><span className="mt-2 block text-center text-xs text-slate-600">Click to flip image</span></button>;
    case "flip-box":
    case "flip-card":
      return <button type="button" onClick={() => setFlipped(!flipped)} aria-pressed={flipped} className="[perspective:800px]"><span className="relative grid h-48 w-64 transition-transform duration-500 [transform-style:preserve-3d]" style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}><span className="absolute inset-0 grid place-items-center rounded-xl bg-violet-700 text-xl font-bold text-white [backface-visibility:hidden]">Front · flip me</span><span className="absolute inset-0 grid place-items-center rounded-xl bg-slate-900 p-5 text-sm text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">The reverse side reveals the details.</span></span></button>;
    case "flipbook":
      return <div className="w-full max-w-sm rounded-xl bg-slate-100 p-4 text-center"><div className="grid h-48 place-items-center rounded-lg border border-slate-200 bg-white p-5 shadow-inner"><div><p className="text-xs font-semibold uppercase tracking-widest text-violet-600">Page {page + 1} of 4</p><h3 className="mt-3 text-2xl font-bold text-slate-900">{["Welcome", "Explore", "Discover", "The End"][page]}</h3><p className="mt-2 text-sm text-slate-500">A tiny interactive flipbook preview.</p></div></div><div className="mt-3 flex justify-between"><button type="button" disabled={page === 0} onClick={() => setPage(page - 1)} className="rounded-lg border bg-white px-3 py-2 disabled:opacity-40"><ChevronLeft size={18} /></button><button type="button" disabled={page === 3} onClick={() => setPage(page + 1)} className="rounded-lg border bg-white px-3 py-2 disabled:opacity-40"><ChevronRight size={18} /></button></div></div>;
    case "floating-dock":
      return <nav aria-label="Floating quick actions" className="flex gap-2 rounded-full border border-slate-200 bg-white/90 p-2 shadow-xl">{[[<ArrowLeft key="back-icon" size={18} />, "Back"], [<Search key="search-icon" size={18} />, "Search"], [<Check key="done-icon" size={18} />, "Done"], [<User key="profile-icon" size={18} />, "Profile"]].map(([icon, label]) => <button key={String(label)} type="button" aria-label={String(label)} title={String(label)} className="grid h-11 w-11 place-items-center rounded-full text-slate-600 transition hover:-translate-y-1 hover:bg-violet-100 hover:text-violet-800">{icon}</button>)}</nav>;
    case "floating-images-left-and-right-to-wrap-text":
      return <article className="w-full max-w-lg rounded-xl bg-white p-5 text-left text-sm leading-6 text-slate-600"><img src={imageUrl} alt="Mountain scenery" className="float-left mb-2 mr-4 h-20 w-24 rounded-lg object-cover" /><img src={imageUrl} alt="Another view of the mountain scenery" className="float-right mb-2 ml-4 h-20 w-24 rounded-lg object-cover" /><h3 className="mb-2 font-semibold text-slate-900">Text wraps around floated images</h3><p>Floating images to the left and right creates a classic editorial layout. Paragraph text flows around both pictures and continues below them naturally. Resize the preview to see how the text reflows alongside the images.</p><div className="clear-both" /></article>;
    case "floating-navbar":
      return <div className="relative h-52 w-full max-w-lg overflow-hidden rounded-xl bg-gradient-to-br from-sky-100 to-violet-100"><p className="p-5 text-sm text-slate-500">A floating navigation bar stays centered within this preview.</p><nav aria-label="Floating navbar preview" className="absolute inset-x-4 bottom-5 mx-auto flex max-w-sm items-center justify-around rounded-full border border-white/70 bg-white/80 px-4 py-3 text-xs font-medium text-slate-700 shadow-xl backdrop-blur"><a href="#float-home">Home</a><a href="#float-work">Work</a><a href="#float-about">About</a><a href="#float-contact">Contact</a></nav></div>;
    case "focus-cards":
      return <div className="group grid w-full max-w-2xl gap-3 sm:grid-cols-3">{["Strategy", "Creativity", "Momentum"].map((title) => <article key={title} tabIndex={0} className="rounded-xl border border-slate-200 bg-white p-5 transition duration-300 hover:scale-105 hover:border-violet-300 hover:shadow-xl focus:scale-105 focus:border-violet-300 focus:shadow-xl group-hover:opacity-50 hover:opacity-100 group-focus-within:opacity-50 focus:opacity-100"><h3 className="font-semibold text-slate-900">{title}</h3><p className="mt-2 text-sm text-slate-500">Focus a card to bring its details forward.</p></article>)}</div>;
    case "folded-corner":
      return <article className="relative w-full max-w-sm overflow-hidden rounded-xl bg-amber-50 p-6 text-left shadow-sm"><span aria-hidden="true" className="absolute right-0 top-0 h-0 w-0 border-b-[36px] border-l-[36px] border-b-amber-200 border-l-transparent drop-shadow-sm" /><h3 className="font-semibold text-amber-950">A little note</h3><p className="mt-2 text-sm leading-5 text-amber-900/70">A folded corner can make a card feel like a paper memo.</p></article>;
    case "following-pointer":
      return <div onPointerMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); setPosition({ x: ((event.clientX - rect.left) / rect.width) * 100, y: ((event.clientY - rect.top) / rect.height) * 100 }); }} className="relative h-56 w-full max-w-lg overflow-hidden rounded-2xl bg-slate-950"><div className="pointer-events-none absolute h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/30 blur-3xl transition-all duration-75" style={{ left: `${position.x}%`, top: `${position.y}%` }} /><div className="absolute inset-0 grid place-items-center text-sm text-slate-300">Move the pointer in this area</div></div>;
    case "font-face":
      return <div className="w-full max-w-lg rounded-xl border border-slate-200 bg-white p-6 text-left"><p className="text-xs font-semibold uppercase tracking-widest text-violet-700">@font-face example</p><p className="mt-3 text-3xl font-semibold text-slate-900" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>A considered typeface</p><p className="mt-2 text-sm text-slate-500">This preview uses a system serif font; the CSS snippet shows where a local font can be registered.</p></div>;
    case "footer":
      return <footer className="grid w-full max-w-2xl gap-5 rounded-xl bg-slate-950 p-6 text-left text-white sm:grid-cols-3"><div><p className="font-bold">northstar.</p><p className="mt-2 text-xs text-slate-400">Thoughtful tools for your team.</p></div><div><p className="text-xs font-semibold uppercase text-slate-400">Explore</p><a href="#footer-about" className="mt-2 block text-sm hover:text-violet-300">About</a><a href="#footer-work" className="mt-1 block text-sm hover:text-violet-300">Work</a></div><div><p className="text-xs font-semibold uppercase text-slate-400">Connect</p><a href="mailto:hello@example.com" className="mt-2 block text-sm hover:text-violet-300">Email us</a><p className="mt-4 text-[11px] text-slate-500">© 2026 Northstar</p></div></footer>;
    case "form-on-image":
      return <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="w-full max-w-md rounded-2xl bg-cover bg-center p-5 shadow-lg" style={{ backgroundImage: `linear-gradient(#1e1b4dcc,#1e1b4dcc),url(${imageUrl})` }}><div className="rounded-xl border border-white/50 bg-white/90 p-5 backdrop-blur"><h3 className="font-semibold text-slate-900">Get in touch</h3><input required aria-label="Your email" type="email" placeholder="Email address" className="mt-3 w-full rounded-lg border px-3 py-2 text-sm" /><button className={`${button} mt-3 w-full`}>Send a note</button><p role="status" className="mt-2 text-center text-xs text-emerald-700">{submitted ? "Thanks, we will be in touch." : ""}</p></div></form>;
    case "form-validation":
      return <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="grid w-full max-w-sm gap-3 rounded-xl border border-slate-200 bg-white p-5 text-left"><label className="text-sm font-medium text-slate-700">Name<input required value={name} onChange={(event) => setName(event.target.value)} className="mt-1 w-full rounded-lg border px-3 py-2 text-sm" placeholder="Your name" /></label><label className="text-sm font-medium text-slate-700">Email<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-1 w-full rounded-lg border px-3 py-2 text-sm" placeholder="you@example.com" /></label><button className={button}>Validate form</button><p aria-live="polite" className="text-xs text-emerald-700">{submitted ? "Form details are valid." : ""}</p></form>;
    case "form-with-icons":
      return <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="grid w-full max-w-sm gap-3 rounded-xl border border-slate-200 bg-white p-5"><label className="flex items-center gap-3 rounded-lg border border-slate-200 px-3"><User size={17} className="text-slate-400" /><input required aria-label="Name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" className="h-11 min-w-0 flex-1 text-sm outline-none" /></label><label className="flex items-center gap-3 rounded-lg border border-slate-200 px-3"><Mail size={17} className="text-slate-400" /><input required type="email" aria-label="Email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email address" className="h-11 min-w-0 flex-1 text-sm outline-none" /></label><button className={button}>Submit</button>{submitted && <p role="status" className="text-xs text-emerald-700">Submitted successfully.</p>}</form>;
    case "frosted-glass-effect":
      return <div className="grid min-h-56 w-full max-w-lg place-items-center rounded-2xl bg-gradient-to-br from-pink-300 via-violet-500 to-sky-400 p-6"><div className="w-full rounded-2xl border border-white/50 bg-white/40 p-6 text-white shadow-xl backdrop-blur-xl"><p className="text-xs uppercase tracking-widest text-white/80">Frosted glass</p><h3 className="mt-2 text-2xl font-semibold">A translucent surface</h3><p className="mt-2 text-sm text-white/85">Backdrop blur softens the colors behind this panel.</p></div></div>;
    case "full-height-element":
      return <div className="grid h-64 w-full max-w-lg place-items-center rounded-xl bg-gradient-to-b from-violet-50 to-sky-100"><div className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-slate-800 shadow">Centered in a full-height panel</div></div>;
    case "full-page-background-image":
    case "full-page-background-with-content":
      return <div className="relative grid h-64 w-full max-w-2xl place-items-center overflow-hidden rounded-xl bg-cover bg-center text-center text-white" style={{ backgroundImage: `url(${imageUrl})` }}><div className="absolute inset-0 bg-slate-950/45" /><div className="relative p-6"><p className="text-xs font-semibold uppercase tracking-[0.25em]">Background image</p>{component === "full-page-background-with-content" && <><h3 className="mt-3 text-3xl font-bold">Find your horizon</h3><p className="mt-2 text-sm text-white/80">Readable content layered over a full-bleed image.</p></>}</div></div>;
    case "fullscreen-navigation":
      return <div className="relative grid h-64 w-full max-w-xl place-items-center overflow-hidden rounded-xl bg-slate-900">{menuOpen ? <div className="absolute inset-0 z-10 grid content-center justify-items-center gap-4 bg-slate-950 text-2xl font-semibold text-white"><button type="button" aria-label="Close navigation" onClick={() => setMenuOpen(false)} className="absolute right-4 top-4"><X /></button>{["Home", "Work", "About", "Contact"].map((label) => <a key={label} href={`#fullscreen-${label.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{label}</a>)}</div> : <button type="button" onClick={() => setMenuOpen(true)} className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900"><Menu size={17} /> Open navigation</button>}</div>;
    case "fullscreen-search":
      return <div className="relative grid h-64 w-full max-w-xl place-items-center overflow-hidden rounded-xl bg-slate-900 p-5">{menuOpen ? <div className="absolute inset-0 z-10 bg-white p-5"><button type="button" aria-label="Close search" onClick={() => { setMenuOpen(false); setQuery(""); }} className="float-right rounded p-2"><X size={18} /></button><label className="mt-12 flex items-center gap-3 border-b-2 border-violet-500 py-3"><Search className="text-violet-600" /><input autoFocus aria-label="Search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search anything..." className="flex-1 text-lg outline-none" /></label><p className="mt-4 text-sm text-slate-500">{query ? `Searching for “${query}”` : "Start typing to search"}</p></div> : <button type="button" onClick={() => setMenuOpen(true)} className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold"><Search size={17} /> Open search</button>}</div>;
    case "fullscreen-video":
      return <div className="relative grid h-64 w-full max-w-xl place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-900 text-white"><div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_30%,#a78bfa_0,transparent_30%),radial-gradient(circle_at_80%_70%,#38bdf8_0,transparent_25%)]" /><div className="relative text-center"><button type="button" aria-label={visible ? "Pause animation" : "Play animation"} onClick={() => setVisible(!visible)} className="grid h-14 w-14 place-items-center rounded-full border border-white/60 bg-white/15 backdrop-blur">{visible ? "Ⅱ" : "▶"}</button><p className="mt-3 text-xs text-white/70">Decorative video-style preview · {visible ? "Playing" : "Paused"}</p></div></div>;
    case "fullscreen-window":
      return <div className={`relative ${fullscreen ? "fixed inset-4 z-50 flex items-center justify-center bg-slate-950/80 p-6" : "h-64 w-full max-w-xl overflow-hidden rounded-xl border border-slate-200 bg-white"}`}><div className={`${fullscreen ? "w-full max-w-2xl rounded-xl" : "h-full"} bg-white p-5`}><div className="flex items-center justify-between"><h3 className="font-semibold text-slate-900">Window preview</h3><button type="button" aria-label={fullscreen ? "Exit fullscreen" : "Expand window"} onClick={() => setFullscreen(!fullscreen)} className="rounded-lg border px-3 py-1.5 text-xs">{fullscreen ? "Close" : "Expand"}</button></div><p className="mt-5 text-sm text-slate-600">This panel expands within the preview experience.</p></div></div>;
    case "full-width-table":
      return <div className="w-full max-w-2xl overflow-x-auto rounded-xl border border-slate-200 bg-white"><table className="w-full text-left text-sm"><thead className="bg-slate-50 text-xs uppercase text-slate-500"><tr><th className="px-4 py-3">Project</th><th className="px-4 py-3">Owner</th><th className="px-4 py-3">Status</th><th className="px-4 py-3">Updated</th></tr></thead><tbody>{[["Aurora", "Avery", "Active", "Today"], ["Atlas", "Morgan", "Review", "Yesterday"], ["Bloom", "Jordan", "Active", "Oct 12"]].map(([project, owner, state, updated]) => <tr key={project} className="border-t border-slate-100"><td className="px-4 py-3 font-medium text-slate-800">{project}</td><td className="px-4 py-3 text-slate-600">{owner}</td><td className="px-4 py-3 text-slate-600">{state}</td><td className="px-4 py-3 text-slate-500">{updated}</td></tr>)}</tbody></table></div>;
    default:
      return null;
  }
}
