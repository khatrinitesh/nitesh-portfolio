import { NavLink } from "react-router";
import { navigation } from "../../config/navigation";

type Props = {
  onNavigate?: () => void;
};

export default function DocsSidebar({ onNavigate }: Props) {
  return (
    <aside className="h-full overflow-y-auto border-r border-slate-200 bg-white px-3 py-6">
      <div className="mb-8 px-3">
        <h1 className="text-lg font-bold text-slate-900">
          Developer Coding
        </h1>
        <p className="mt-1 text-xs text-slate-500">
          Component documentation
        </p>
      </div>

      <nav className="space-y-6">
        {navigation.map((group) => (
          <div key={group.title}>
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              {group.title}
            </p>

            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    end={item.href === "/"}
                    onClick={onNavigate}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                        isActive
                          ? "bg-slate-900 font-medium text-white"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`
                    }
                  >
                    <Icon size={17} strokeWidth={1.8} />
                    <span>{item.title}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}