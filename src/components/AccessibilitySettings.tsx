import { useContext, useEffect, useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import { ThemeContext } from "@/context/themeContext";
import AccessabiltyIcon from "@/assets/icons/AccessabiltyIcon";
import ResetSettings from "@/assets/icons/ResetSettings";
import CloseCircle from "@/assets/images/close-circle.png"
import FlashCircle from "@/assets/icons/FlashCircle";
import { Eclipse, EyeIcon, LassoSelect, MousePointer, PaintRoller, Voicemail, Ruler, CircleArrowLeft, CircleArrowRight, PencilRuler, Ratio, ZoomIn, Type, TableRowsSplit } from "lucide-react";
import ADHDFriendly from "@/assets/icons/ADHDFriendly";
import KeyboardNavigation from "@/assets/icons/KeyboardNavigation";

const AccessibilitySettings = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "AccessibilitySettings must be used within a ThemeProvider"
    );
  }

  const {
    settings,
    handleProfileToggle,
    toggleReadingMask,
    toggleVisionImpaired,
    togglekeyboardNavigation,
    toggleScreenReader,
    resetSettings,
    setSettings,
    toggleBigWhiteCursor,
    toggleBigBlackCursor,
    toggleReadingGuide
  } = context;

  const [isOpen, setIsOpen] = useState(false);
  // ===== Screen Reader Speech =====
  useEffect(() => {
    if (!settings.screenReader) return;

    const speak = (text: string) => {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.cancel(); // Stop previous speech
      window.speechSynthesis.speak(utterance);
    };

    const handleFocus = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      const textToSpeak =
        target.getAttribute('aria-label') ||
        target.textContent?.trim() ||
        target.getAttribute('placeholder');

      if (textToSpeak) speak(textToSpeak);
    };

    document.addEventListener('focus', handleFocus, true);

    return () => {
      document.removeEventListener('focus', handleFocus, true);
      window.speechSynthesis.cancel(); // Clean up
    };
  }, [settings.screenReader]);
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-full z-50 bg-white dark:bg-[#2e3439] shadow-lg"
        aria-label="Accessibility settings"
      >
        <AccessabiltyIcon />
      </button>

      {isOpen && (
        <div className="absolute right-0 bottom-20 w-[22rem] sm:w-[35rem] max-h-[80vh] bg-background-white dark:bg-background-navy dark:text-text-whitish shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 overflow-y-auto">
          <div className="flex flex-col">
            <div className="bg-accent-green dark:bg-background-navygrey rounded-t-lg p-4 flex flex-col items-center">
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
                <div className="w-6 h-6"></div>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mb-4 w-full">
                <button
                  className="flex items-center gap-1 bg-white dark:bg-[#2E3439] px-4 py-2 rounded-xl"
                  onClick={resetSettings}
                >
                  <ResetSettings />
                  <span className="text-sm text-text-blackish dark:text-text-whitish">
                    Reset
                  </span>
                </button>
              </div>

              <div className="w-full mb-4">
                <input
                  type="text"
                  className="w-full h-10 pl-3 rounded-xl dark:bg-[#2E3439] text-text-blackish dark:text-text-whitish placeholder:text-text-blackish dark:placeholder:text-text-whitish"
                  placeholder="Search in dictionary..."
                />
              </div>
            </div>
            <div className="bg-background-gray dark:bg-background-navy p-4 rounded-b-lg">
              <div className="w-[41.5] bg-white px-2 py-3 rounded-lg">
                <h3 className="text-[16px] font-semibold mb-3 text-black dark:text-white">
                  Choose the right accessibility profile for you
                </h3>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-black dark:text-white">
                    Accessibility Profiles
                  </h3>
                  <div className="">
                    <div className="flex items-center justify-between">
                      <ToggleSwitch
                        isOn={settings.seizureSafe}
                        onToggle={() => handleProfileToggle("seizureSafe")}
                      />
                      <div className="flex flex-col">
                        <span className="text-[16px] font-bold text-text-blackish dark:text-text-whitish">
                          Seizure Safe Profile
                        </span>
                        <span className="text-[12px] text-[#CCCCCC] font-bold">
                          Clear flashes & reduces color
                        </span>
                      </div>
                      <FlashCircle />
                    </div>
                    <div className="flex items-center justify-between">
                      <ToggleSwitch
                        isOn={settings.visionImpaired}
                        onToggle={toggleVisionImpaired}
                      />
                      <div className="flex flex-col">
                        <span className="text-[16px] font-bold text-text-blackish dark:text-text-whitish">
                          Vision Impaired Profile
                        </span>
                        <span className="text-[12px] text-[#CCCCCC] font-bold">
                          Enhances website’s visuals
                        </span>
                      </div>
                      <EyeIcon />
                    </div>
                    <div className="flex items-center justify-between">
                      <ToggleSwitch
                        isOn={settings.readingMask}
                        onToggle={toggleReadingMask}
                      />
                      <div className="flex flex-col">
                        <span className="text-[16px] font-bold text-text-blackish dark:text-text-whitish">
                          ADHD Friendly Profile
                        </span>
                        <span className="text-[12px] text-[#CCCCCC] font-bold">
                          More focus & fewer distractions
                        </span>
                      </div>
                      <ADHDFriendly />
                    </div>
                    <div className="flex items-center justify-between">
                      <ToggleSwitch
                        isOn={settings.keyboardNavigation}
                        onToggle={togglekeyboardNavigation}
                      />
                      <div className="flex flex-col">
                        <span className="text-[16px] font-bold text-text-blackish dark:text-text-whitish">
                          Keyboard Navigation (Motor)
                        </span>
                        <span className="text-[12px] text-[#CCCCCC] font-bold">
                          Use website with the keyboard
                        </span>
                      </div>
                      <KeyboardNavigation />
                    </div>
                    <div className="flex items-center justify-between">
                      <ToggleSwitch
                        isOn={settings.screenReader}
                        onToggle={toggleScreenReader}
                      />
                      <div className="flex flex-col">
                        <span className="text-[16px] font-bold text-text-blackish dark:text-text-whitish">
                          Blind Users (Screen Reader)
                        </span>
                        <span className="text-[12px] text-[#CCCCCC] font-bold">
                          Optimize website for screen-readers
                        </span>
                      </div>
                      <Voicemail />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[41.5] mt-4 bg-white px-2 py-3 rounded-lg">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-black dark:text-white">
                    Orientation Adjustments
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div className="w-full flex justify-between items-center px-3">
                      <div>
                        <button
                          className={`w-[8.875rem] ${settings.bigBlackCursor ? "bg-accent-darkorange text-white" : "bg-[#f2f2f2]"} flex justify-center items-center gap-5 flex-col  rounded-xl h-[6.75rem]`}
                          onClick={toggleBigBlackCursor}
                        >
                          <span>
                            <LassoSelect />
                          </span>
                          <span className="text-[16px]">Big Black Cursor</span>
                        </button>
                      </div>
                      <div>
                        <button
                          className={`w-[8.875rem] ${settings.bigWhiteCursor ? "bg-accent-darkorange text-white" : "bg-[#f2f2f2]"} flex justify-center items-center gap-5 flex-col  rounded-xl h-[6.75rem]`}
                          onClick={toggleBigWhiteCursor}
                        >
                          <span>
                            <MousePointer />
                          </span>
                          <span className="text-[16px]">Big White Cursor</span>
                        </button>
                      </div>
                      <div>
                        <button
                          className={`w-[8.875rem] ${settings.highContrast ? "bg-accent-darkorange text-white" : "bg-[#f2f2f2]"} flex justify-center items-center gap-5 flex-col  rounded-xl h-[6.75rem]`}
                          onClick={() =>
                            setSettings((prev) => ({
                              ...prev,
                              highContrast: !prev.highContrast,
                            }))}
                        >
                          <span>
                            <Eclipse />
                          </span>
                          <span className="text-[16px]">High Contrast</span>
                        </button>
                      </div>
                    </div>
                    <div className="w-full flex justify-between items-center px-3">
                      <div>
                        <div className={`w-[19.4rem] bg-[#f2f2f2] flex flex-col justify-center items-center gap-2 rounded-xl h-[6.75rem]`}>
                          <div className="flex items-center gap-2">
                            <span>
                              <Ruler />
                            </span>
                            <span className="text-[16px]">Adjust Font Size</span>
                          </div>
                          <div className="w-full flex justify-around items-center">
                            <button
                              onClick={context.decreaseFontSize}
                              className="p-2 rounded-full hover:bg-gray-200"
                              aria-label="Decrease font size"
                            >
                              <CircleArrowLeft />
                            </button>
                            <span className="text-lg font-medium min-w-[3rem] text-center">
                              {settings.fontSize}px
                            </span>
                            <button
                              onClick={context.increaseFontSize}
                              className="p-2 rounded-full hover:bg-gray-200"
                              aria-label="Increase font size"
                            >
                              <CircleArrowRight />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button
                          className={`w-[8.875rem] ${settings.grayscale ? "bg-accent-darkorange text-white" : "bg-[#f2f2f2]"} flex justify-center items-center gap-5 flex-col  rounded-xl h-[6.75rem]`}
                          onClick={() =>
                            setSettings((prev) => ({
                              ...prev,
                              grayscale: !prev.grayscale,
                            }))}
                        >
                          <span>
                            <PaintRoller />
                          </span>
                          <span className="text-[16px]">Grayscale Mode</span>
                        </button>
                      </div>
                    </div>
                    <div className="w-full flex justify-between items-center px-3">
                      <div>
                        <div className={`w-[19.4rem] bg-[#f2f2f2] flex flex-col justify-center items-center gap-2 rounded-xl h-[6.75rem]`}>
                          <div className="flex items-center gap-2">
                            <Ratio />
                            <span className="text-[16px]">Line Height</span>
                          </div>
                          <div className="w-full flex justify-around items-center">
                            <button
                              onClick={context.decreaseLineHeight}
                              className="p-2 rounded-full hover:bg-gray-200"
                              aria-label="Decrease line height"
                            >
                              <CircleArrowLeft />
                            </button>
                            <span className="text-lg font-medium min-w-[3rem] text-center">
                              {settings.lineHeight.toFixed(1)}
                            </span>
                            <button
                              onClick={context.increaseLineHeight}
                              className="p-2 rounded-full hover:bg-gray-200"
                              aria-label="Increase line height"
                            >
                              <CircleArrowRight />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button
                          className={`w-[8.875rem] ${settings.textMagnifier ? "bg-accent-darkorange text-white" : "bg-[#f2f2f2]"} flex justify-center items-center gap-5 flex-col rounded-xl h-[6.75rem]`}
                          onClick={context.toggleTextMagnifier}
                        >
                          <span>
                            <ZoomIn />
                          </span>
                          <span className="text-[16px]">Text Magnifier</span>
                        </button>
                      </div>
                    </div>
                    <div className="w-full flex justify-between items-center px-3">
                      <div className="w-full">
                        <div className={`w-[19.4rem] bg-[#f2f2f2] flex flex-col justify-center items-center gap-2 rounded-xl h-[6.75rem]`}>
                          <div className="flex items-center gap-2">
                            <PencilRuler />
                            <span className="text-[16px]">Letter Spacing</span>
                          </div>
                          <div className="w-full flex justify-around items-center">
                            <button
                              onClick={context.decreaseLetterSpacing}
                              className="p-2 rounded-full hover:bg-gray-200"
                              aria-label="Decrease letter spacing"
                            >
                              <CircleArrowLeft />
                            </button>
                            <span className="text-lg font-medium min-w-[3rem] text-center">
                              {settings.letterSpacing}px
                            </span>
                            <button
                              onClick={context.increaseLetterSpacing}
                              className="p-2 rounded-full hover:bg-gray-200"
                              aria-label="Increase letter spacing"
                            >
                              <CircleArrowRight />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button
                          className={`w-[8.875rem] ${settings.readingGuide ? "bg-accent-darkorange text-white" : "bg-[#f2f2f2]"} flex justify-center items-center gap-5 flex-col rounded-xl h-[6.75rem]`}
                          onClick={context.toggleReadingGuide}
                        >
                          <span>
                            <TableRowsSplit />
                          </span>
                          <span className="text-[16px]">Reading Guide</span>
                        </button>
                      </div>
                      {/* <div>
                        <button
                          className={`w-[8.875rem] ${settings.dyslexiaFont ? "bg-accent-darkorange text-white" : "bg-[#f2f2f2]"} flex justify-center items-center gap-5 flex-col rounded-xl h-[6.75rem]`}
                          onClick={toggleDyslexiaFont}
                        >
                          <span>
                            <Type />
                          </span>
                          <span className="text-[16px]">Dyslexia Font</span>
                        </button>
                      </div> */}
                    </div>
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

export default AccessibilitySettings