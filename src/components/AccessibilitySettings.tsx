import { useState, useEffect } from "react";
import { FaCog } from "react-icons/fa";

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
        <div className="fixed bottom-5 right-5 z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#244937] text-white p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#244937]"
            >
                <FaCog size={24} />
            </button>

            {isOpen && (
                <div className="absolute right-0 bottom-14 w-80 bg-white shadow-md p-5 rounded-lg border border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">Accessibility Settings</h2>

                    <label className="block mb-2 text-gray-600">Text Size</label>
                    <select
                        name="textSize"
                        value={settings.textSize}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
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
                        <span className="text-gray-700">High Contrast</span>
                    </label>

                    <label className="flex items-center mt-4">
                        <input
                            type="checkbox"
                            name="grayscale"
                            checked={settings.grayscale}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <span className="text-gray-700">Grayscale Mode</span>
                    </label>

                    <label className="flex items-center mt-4">
                        <input
                            type="checkbox"
                            name="dyslexiaFont"
                            checked={settings.dyslexiaFont}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <span className="text-gray-700">Dyslexia-Friendly Font</span>
                    </label>

                    <label className="flex items-center mt-4">
                        <input
                            type="checkbox"
                            name="focusMode"
                            checked={settings.focusMode}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <span className="text-gray-700">Focus Mode</span>
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
