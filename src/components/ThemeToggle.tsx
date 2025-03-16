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
    { value: "light", label: "Light", icon: <Sun size={18} /> },
    { value: "dark", label: "Dark", icon: <Moon size={18} /> },
    { value: "system", label: "System", icon: <Monitor size={18} /> },
  ];

  const selectedTheme = themes.find((t) => t.value === theme);

  return (
    <div className="relative inline-block text-left mb-2">
      <div className="mb-2">Theme</div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center border border-text-whitish dark:border-[#2E3439] gap-2 px-4 py-2 bg-background-white dark:bg-background-navy text-text-blackish dark:text-text-whitish rounded-md"
      >
        {/* {selectedTheme.icon} */}
        {selectedTheme?.label}
        <svg
          className="w-4 h-4 ml-2"
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
        <div className="absolute border-text-whitish dark:border-[#2E3439] left-0 mt-2 w-32 bg-background-white dark:bg-background-navy text-text-blackish dark:text-text-whitish border rounded-md shadow-md">
          {themes.map((t) => (
            <button
              key={t.value}
              onClick={() => {
                setTheme(t.value as "light" | "dark" | "system");
                setIsOpen(false);
              }}
              className={`flex items-center gap-2 w-full px-4 py-2 text-left text-text-blackish dark:text-text-whitish hover:bg-background-gray dark:hover:bg-background-navygrey`}
            >
              {t.icon}
              {t.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
