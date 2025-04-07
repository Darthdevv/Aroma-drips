import { useState, useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeToggle() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = themeContext;

  const themes = [
    {
      value: "system",
      label: "System",
      icon: <Monitor size={18} />,
      className:
        "bg-gradient-to-r from-accent-orange to-accent-darkorange text-text-whitish",
    },
    {
      value: "dark",
      label: "Dark",
      icon: <Moon size={18} />,
      className: " bg-gradient-to-r from-[#2E3439] to-[#4D4D4D] text-white",
    },
    {
      value: "light",
      label: "light",
      icon: <Sun size={18} />,
      className: "bg-gradient-to-r from-[#244937] to-[#76BC9A] text-white",
    },
  ];

  const selectedTheme = themes.find((t) => t.value === theme);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-32 px-3 py-2 rounded-full shadow-md text-sm font-semibold transition-all duration-200 ${
          selectedTheme?.className || ""
        }`}
      >
        <div className="flex items-center gap-2">
          {selectedTheme?.icon}
          {selectedTheme?.label}
        </div>
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-36 z-10 rounded-lg shadow-md overflow-hidden">
          {themes.map((t) => (
            <button
              key={t.value}
              onClick={() => {
                setTheme(t.value as "light" | "dark" | "system");
                setIsOpen(false);
              }}
              className={`flex items-center justify-between gap-2 w-full px-4 py-2 text-sm font-medium ${t.className}`}
            >
              <div className="flex items-center gap-2">
                {t.icon}
                {t.label}
              </div>
              <svg
                className="w-4 h-4 opacity-70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
