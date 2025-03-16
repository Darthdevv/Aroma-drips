import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const AccessibilitySettings = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [settings, setSettings] = useState({
        textSize: "base",
        highContrast: false,
        grayscale: false,
        dyslexiaFont: false,
        focusMode: false,
    });
    const [focusedElement, setFocusedElement] = useState<string | null>(null);

    useEffect(() => {
        document.documentElement.classList.remove("text-sm", "text-base", "text-lg");
        document.documentElement.classList.add(settings.textSize);

        if (settings.highContrast) {
            document.documentElement.classList.add("contrast-high");
        } else {
            document.documentElement.classList.remove("contrast-high");
        }

        if (settings.grayscale) {
            document.documentElement.classList.add("grayscale");
        } else {
            document.documentElement.classList.remove("grayscale");
        }

        if (settings.dyslexiaFont) {
            document.documentElement.classList.add("dyslexia-font");
        } else {
            document.documentElement.classList.remove("dyslexia-font");
        }

        if (settings.focusMode) {
            document.documentElement.classList.add("focus-overlay");
        } else {
            document.documentElement.classList.remove("focus-overlay");
            setFocusedElement(null);
        }
    }, [settings]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, type, value } = event.target;
        const checked = (event.target as HTMLInputElement).checked;
        setSettings((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    return (
        <div className="fixed bottom-5 right-5 z-50 ">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className=" p-3 rounded-full "
            >
                <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M50 25C50 18.3696 47.3661 12.0107 42.6777 7.32233C37.9893 2.63392 31.6304 0 25 0C18.3696 0 12.0107 2.63392 7.32233 7.32233C2.63392 12.0107 3.8147e-06 18.3696 3.8147e-06 25C3.8147e-06 31.6304 2.63392 37.9893 7.32233 42.6777C12.0107 47.3661 18.3696 50 25 50C31.6304 50 37.9893 47.3661 42.6777 42.6777C47.3661 37.9893 50 31.6304 50 25ZM34.2285 16.5918C35.4199 16.084 36.7969 16.6309 37.3047 17.8223C37.8125 19.0137 37.2656 20.3906 36.0742 20.8984L34.9121 21.3965C33.2227 22.1191 31.4746 22.6562 29.6777 22.9883V27.8809C29.6777 28.3008 29.7461 28.7207 29.8828 29.1113L32.6855 37.5195C33.0957 38.75 32.4316 40.0781 31.2012 40.4883C29.9707 40.8984 28.6426 40.2344 28.2324 39.0039L25.8496 31.8555C25.7227 31.4844 25.3809 31.2305 24.9902 31.2305C24.5996 31.2305 24.248 31.4844 24.1309 31.8555L21.7481 39.0039C21.3379 40.2344 20.0098 40.8984 18.7793 40.4883C17.5488 40.0781 16.8848 38.75 17.2949 37.5195L20.0977 29.1113C20.2344 28.7109 20.3027 28.3008 20.3027 27.8809V22.9883C18.5059 22.6465 16.7578 22.1191 15.0684 21.3965L13.9062 20.8984C12.7148 20.3906 12.168 19.0137 12.6758 17.8223C13.1836 16.6309 14.5605 16.084 15.752 16.5918L16.9238 17.0898C19.4727 18.1836 22.2168 18.75 25 18.75C27.7832 18.75 30.5176 18.1836 33.0762 17.0898L34.2383 16.5918H34.2285ZM25 15.625C23.964 15.625 22.9704 15.2135 22.2379 14.4809C21.5053 13.7483 21.0938 12.7548 21.0938 11.7188C21.0938 10.6827 21.5053 9.68918 22.2379 8.95661C22.9704 8.22405 23.964 7.8125 25 7.8125C26.036 7.8125 27.0296 8.22405 27.7621 8.95661C28.4947 9.68918 28.9063 10.6827 28.9063 11.7188C28.9063 12.7548 28.4947 13.7483 27.7621 14.4809C27.0296 15.2135 26.036 15.625 25 15.625Z"
                        fill="#FF8A42"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 bottom-20 w-80 bg-background-white dark:bg-background-navy text-text-blackish dark:text-text-whitish shadow-md p-5 rounded-lg border border-text-whitish dark:border-[#2E3439]">
                    <h2 className="text-lg font-semibold  mb-4">
                        Accessibility Settings
                    </h2>

                    <ThemeToggle />

                    <label className="block mb-2">Text Size</label>
                    <select
                        name="textSize"
                        value={settings.textSize}
                        onChange={handleChange}
                        className="w-full p-2 border border-text-whitish dark:border-[#2E3439] rounded-md bg-background-white dark:bg-background-navy text-text-blackish dark:text-text-whitish"
                    >
                        <option value="text-sm">Small</option>
                        <option value="text-base">Default</option>
                        <option value="text-lg">Large</option>
                    </select>

                    <label className="flex items-center mt-4">
                        <input
                            type="checkbox"
                            name="highContrast"
                            checked={settings.highContrast}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <span className="">High Contrast</span>
                    </label>

                    <label className="flex items-center mt-4">
                        <input
                            type="checkbox"
                            name="grayscale"
                            checked={settings.grayscale}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <span className="">Grayscale Mode</span>
                    </label>

                    <label className="flex items-center mt-4">
                        <input
                            type="checkbox"
                            name="dyslexiaFont"
                            checked={settings.dyslexiaFont}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <span className="">Dyslexia-Friendly Font</span>
                    </label>

                    <label className="flex items-center mt-4">
                        <input
                            type="checkbox"
                            name="focusMode"
                            checked={settings.focusMode}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <span className="">Focus Mode</span>
                    </label>
                </div>
            )}

            {settings.focusMode && focusedElement && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
            )}
        </div>
    );
};

export default AccessibilitySettings;
