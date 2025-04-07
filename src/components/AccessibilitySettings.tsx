import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import AccessabiltyIcon from "@/assets/icons/AccessabiltyIcon";
import Eye from '@/assets/images/eye.png'
import CloseCircle from '@/assets/images/close-circle.png'
import FlashCircle from '@/assets/images/flash-circle.png'
import Location from '@/assets/images/location.png'
import Import from '@/assets/images/import.png'
import Voice from '@/assets/images/voice-square.png'
import Scanner from '@/assets/images/scanner.png'
import RefreshCircle from '@/assets/images/refresh-circle.png'
import EyeSlash from '@/assets/images/eye-slash.png'
import Reciept from '@/assets/images/receipt-minus.png'
import ToggleSwitch from "./ToggleSwitch";
import AccessProfielSection from "./AccessProfielSection";


interface Toggles {
    featureA: boolean;
    featureB: boolean;
    featureC: boolean;
}


const AccessibilitySettings = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [settings, setSettings] = useState({
        textSize: "base",
        highContrast: false,
        grayscale: false,
        dyslexiaFont: false,
        focusMode: false,
    });
    const [toggles, setToggles] = useState({
        featureA: false,
        featureB: true,
        featureC: false,
    });


    const handleToggle = (key: keyof Toggles) => {
        setToggles((prev: Toggles) => ({ ...prev, [key]: !prev[key] }));
    };
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
          className=" p-3 rounded-full z-50 "
        >
          <AccessabiltyIcon />
        </button>

        {isOpen && (
          <div
            className={`absolute ${
              !isOpen ? "left-[100px]" : "right-[-21px]"
            } bottom-20 w-[43.5rem] h-screen bg-background-white dark:bg-background-navy  dark:text-text-whitish shadow-md text-white rounded-lg border border-text-whitish dark:border-[#2E3439]`}
          >
            <div className="flex bg-[#e6e6e6] h-full flex-col mt-[6rem] rounded-t-lg items-center">
              <div className="bg-[#33664d] rounded-t-lg h-[22.313rem] w-full px-3 flex flex-col items-center">
                <div className="flex justify-start w-full mt-5">
                  <img
                    src={CloseCircle}
                    alt="Close"
                    className="cursor-pointer w-6 h-6"
                    onClick={() => setIsOpen(!isOpen)}
                  />
                </div>
                <h2 className="text-[28px] font-semibold  mb-4">
                  Accessibility Adjustments
                </h2>
                <div className="flex justify-between mb-4 items-center w-full">
                  <button className="w-[12.813rem] flex justify-center items-center gap-1  bg-white h-[3rem] rounded-2xl">
                    <img src={RefreshCircle} alt="Close" className="w-6 h-6" />
                    <span className="text-[16px] text-black">
                      Reset Settings
                    </span>
                  </button>
                  <button className="w-[12.813rem] flex justify-center items-center gap-1 bg-white h-[3rem] rounded-2xl">
                    <img src={Reciept} alt="Close" className="w-6 h-6" />
                    <span className="text-[16px] text-black">Statement</span>
                  </button>
                  <button className="w-[12.813rem] flex justify-center items-center gap-1 bg-white h-[3rem] rounded-2xl">
                    <img src={EyeSlash} alt="Close" className="w-6 h-6" />
                    <span className="text-[16px] text-black">
                      Hide Interface
                    </span>
                  </button>
                </div>
                <div className="w-full mb-4">
                  <input
                    type="text"
                    className="w-full h-[3rem] pl-5 rounded-2xl"
                    placeholder="Unclear content? Search in dictionary..."
                  />
                </div>
                <AccessProfielSection />
              </div>
            </div>

            {/*
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
                    </label> */}
          </div>
        )}

        {/* {settings.focusMode && focusedElement && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
            )} */}
      </div>
    );
};

export default AccessibilitySettings;
