import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import DocsSidebar from "./DocsSidebar";

const DocsLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!sidebarOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSidebarOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sidebarOpen]);

  return (
    <div className="flex min-h-screen bg-white">
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-gray-200 bg-white lg:block">
        <DocsSidebar />
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              aria-label={sidebarOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={sidebarOpen}
              aria-controls={sidebarOpen ? "mobile-docs-sidebar" : undefined}
              onClick={() => setSidebarOpen((open) => !open)}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700 lg:hidden"
            >
              {sidebarOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
            <div className="min-w-0">
              <h1 className="text-base font-semibold text-gray-900">
                UI Components
              </h1>
              <p className="text-xs text-gray-500">
                Component Documentation Repository
              </p>
            </div>
          </div>

          <span className="ml-3 shrink-0 rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-500">
            v1.0.0
          </span>
        </header>

        {sidebarOpen && (
          <>
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-x-0 bottom-0 top-16 z-30 bg-gray-950/40 lg:hidden"
            />
            <aside
              id="mobile-docs-sidebar"
              aria-label="Documentation navigation"
              className="fixed bottom-0 left-0 top-16 z-40 w-72 max-w-[85vw] border-r border-gray-200 bg-white shadow-xl lg:hidden"
            >
              <DocsSidebar onNavigate={() => setSidebarOpen(false)} />
            </aside>
          </>
        )}

        <main className="flex-1 px-6 py-8 lg:px-10">
          <div className="mx-auto w-full max-w-6xl">
            <Outlet />
          </div>
        </main>

        <footer className="border-t border-gray-200 px-6 py-4 text-center text-xs text-gray-500">
          UI Repository — React + TypeScript + Tailwind CSS
        </footer>
      </div>
    </div>
  );
};

export default DocsLayout;