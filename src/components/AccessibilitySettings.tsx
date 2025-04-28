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

interface ProfileSettings {
  seizureSafe: boolean;
  visionImpaired: boolean;
  adhdFriendly: boolean;
  cognitiveDisability: boolean;
  keyboardNavigation: boolean;
  screenReader: boolean;
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
  const [profileSettings, setProfileSettings] = useState<ProfileSettings>({
    seizureSafe: false,
    visionImpaired: false,
    adhdFriendly: false,
    cognitiveDisability: false,
    keyboardNavigation: false,
    screenReader: false,
  });

  const handleProfileToggle = (profile: keyof ProfileSettings) => {
    setProfileSettings(prev => {
      const newSettings = { ...prev, [profile]: !prev[profile] };

      // Apply accessibility effects based on the toggled profile
      applyProfileEffects(newSettings);

      return newSettings;
    });
  };

  const applyProfileEffects = (profiles: ProfileSettings) => {
    // Seizure Safe Profile - reduces animations and flashing
    if (profiles.seizureSafe) {
      document.documentElement.classList.add("reduced-motion", "no-flash");
    } else {
      document.documentElement.classList.remove("reduced-motion", "no-flash");
    }

    // Vision Impaired Profile - high contrast and larger text
    if (profiles.visionImpaired) {
      document.documentElement.classList.add("high-contrast", "large-text");
    } else {
      document.documentElement.classList.remove("high-contrast", "large-text");
    }

    // ADHD Friendly Profile - focus mode and reduced distractions
    if (profiles.adhdFriendly) {
      document.documentElement.classList.add("focus-mode", "reduced-distractions");
    } else {
      document.documentElement.classList.remove("focus-mode", "reduced-distractions");
    }

    // Cognitive Disability Profile - dyslexia font and simplified layout
    if (profiles.cognitiveDisability) {
      document.documentElement.classList.add("dyslexia-font", "simplified-layout");
    } else {
      document.documentElement.classList.remove("dyslexia-font", "simplified-layout");
    }

    // Keyboard Navigation - adds keyboard navigation enhancements
    if (profiles.keyboardNavigation) {
      document.documentElement.classList.add("keyboard-navigation");
    } else {
      document.documentElement.classList.remove("keyboard-navigation");
    }

    // Screen Reader - optimizes for screen readers
    if (profiles.screenReader) {
      document.documentElement.classList.add("screen-reader-optimized");
    } else {
      document.documentElement.classList.remove("screen-reader-optimized");
    }
  };

  const resetSettings = () => {
    setSettings({
      textSize: "base",
      highContrast: false,
      grayscale: false,
      dyslexiaFont: false,
      focusMode: false,
    });
    setProfileSettings({
      seizureSafe: false,
      visionImpaired: false,
      adhdFriendly: false,
      cognitiveDisability: false,
      keyboardNavigation: false,
      screenReader: false,
    });

    // Remove all accessibility classes
    document.documentElement.className = "";
  };

  useEffect(() => {
    // Apply text size
    document.documentElement.classList.remove("text-sm", "text-base", "text-lg");
    document.documentElement.classList.add(settings.textSize);

    // Apply high contrast
    if (settings.highContrast) {
      document.documentElement.classList.add("contrast-high");
    } else {
      document.documentElement.classList.remove("contrast-high");
    }

    // Apply grayscale
    if (settings.grayscale) {
      document.documentElement.classList.add("grayscale");
    } else {
      document.documentElement.classList.remove("grayscale");
    }

    // Apply dyslexia font
    if (settings.dyslexiaFont) {
      document.documentElement.classList.add("dyslexia-font");
    } else {
      document.documentElement.classList.remove("dyslexia-font");
    }

    // Apply focus mode
    if (settings.focusMode) {
      document.documentElement.classList.add("focus-overlay");
    } else {
      document.documentElement.classList.remove("focus-overlay");
    }
  }, [settings]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, type, value } = event.target;
    const checked = (event.target as HTMLInputElement).checked;
    setSettings(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-full z-50 bg-white dark:bg-gray-700 shadow-lg"
        aria-label="Accessibility settings"
      >
        <AccessabiltyIcon />
      </button>

      {isOpen && (
        <div className="absolute right-0 bottom-20 w-[22rem] sm:w-[35rem] max-h-[80vh] bg-background-white dark:bg-background-navy dark:text-text-whitish shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 overflow-y-auto">
          <div className="flex flex-col">
            <div className="bg-green-700 rounded-t-lg p-4 flex flex-col items-center">
              <div className="flex justify-between w-full items-center mb-4">
                <img
                  src={CloseCircle}
                  alt="Close"
                  className="cursor-pointer w-6 h-6"
                  onClick={() => setIsOpen(false)}
                />
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  Accessibility Adjustments
                </h2>
                <div className="w-6 h-6"></div> {/* Spacer for alignment */}
              </div>

              <div className="flex flex-wrap justify-center gap-2 mb-4 w-full">
                <button
                  className="flex items-center gap-1 bg-white px-4 py-2 rounded-xl"
                  onClick={resetSettings}
                >
                  <img src={RefreshCircle} alt="Reset" className="w-5 h-5" />
                  <span className="text-sm text-black">Reset</span>
                </button>
                <button className="flex items-center gap-1 bg-white px-4 py-2 rounded-xl">
                  <img src={Reciept} alt="Statement" className="w-5 h-5" />
                  <span className="text-sm text-black">Statement</span>
                </button>
                <button className="flex items-center gap-1 bg-white px-4 py-2 rounded-xl">
                  <img src={EyeSlash} alt="Hide" className="w-5 h-5" />
                  <span className="text-sm text-black">Hide</span>
                </button>
              </div>

              <div className="w-full mb-4">
                <input
                  type="text"
                  className="w-full h-10 pl-3 rounded-xl text-black"
                  placeholder="Search in dictionary..."
                />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-b-lg">
              <AccessProfielSection
                profileSettings={profileSettings}
                onToggle={handleProfileToggle}
              />

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3 text-black dark:text-white">
                  Additional Settings
                </h3>

                <div className="mb-3">
                  <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Text Size
                  </label>
                  <select
                    name="textSize"
                    value={settings.textSize}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-black dark:text-white"
                  >
                    <option value="text-sm">Small</option>
                    <option value="text-base">Default</option>
                    <option value="text-lg">Large</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      High Contrast
                    </span>
                    <ToggleSwitch
                      isOn={settings.highContrast}
                      onToggle={() => setSettings(prev => ({
                        ...prev,
                        highContrast: !prev.highContrast
                      }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Grayscale Mode
                    </span>
                    <ToggleSwitch
                      isOn={settings.grayscale}
                      onToggle={() => setSettings(prev => ({
                        ...prev,
                        grayscale: !prev.grayscale
                      }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Dyslexia Font
                    </span>
                    <ToggleSwitch
                      isOn={settings.dyslexiaFont}
                      onToggle={() => setSettings(prev => ({
                        ...prev,
                        dyslexiaFont: !prev.dyslexiaFont
                      }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Focus Mode
                    </span>
                    <ToggleSwitch
                      isOn={settings.focusMode}
                      onToggle={() => setSettings(prev => ({
                        ...prev,
                        focusMode: !prev.focusMode
                      }))}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilitySettings;