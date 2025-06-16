import {
  createContext,
  useEffect,
  useState,
  ReactNode
} from "react";
interface Settings {
  textSize: string;
  highContrast: boolean;
  grayscale: boolean;
  focusMode: boolean;
  readingMask: boolean;
  seizureSafe: boolean;
  visionImpaired: boolean;
  adhdFriendly: boolean;
  cognitiveDisability: boolean;
  keyboardNavigation: boolean;
  screenReader: boolean;
  visionEmpired: boolean;
  bigWhiteCursor: boolean;
  bigBlackCursor: boolean;
  dyslexiaFont: boolean,
  fontSize: number;
  letterSpacing: number;
  textMagnifier: boolean;
  lineHeight: number;
  readingGuide: boolean;
}

type Theme = "light" | "dark" | "system";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  settings: Settings;
  setSettings: React.Dispatch<React.SetStateAction<Settings>>;
  handleProfileToggle: (profile: keyof Settings) => void;
  toggleReadingMask: () => void;
  toggleScreenReader: () => void;
  toggleVisionImpaired: () => void;
  toggleDyslexiaFont: () => void;
  togglekeyboardNavigation: () => void;
  toggleBigWhiteCursor: () => void;
  toggleBigBlackCursor: () => void,
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetSettings: () => void;
  increaseLetterSpacing: () => void;
  toggleReadingGuide: () => void;
  decreaseLetterSpacing: () => void;
  increaseLineHeight: () => void;
  decreaseLineHeight: () => void;
  toggleTextMagnifier: () => void;
  pathname: string;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "system";
  });
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const [magnifierContent, setMagnifierContent] = useState("");
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [settings, setSettings] = useState<Settings>({
    textSize: "base",
    highContrast: false,
    grayscale: false,
    focusMode: false,
    readingMask: false,
    seizureSafe: false,
    visionImpaired: false,
    adhdFriendly: false,
    cognitiveDisability: false,
    keyboardNavigation: false,
    screenReader: false,
    visionEmpired: false,
    bigWhiteCursor: false,
    bigBlackCursor: false,
    textMagnifier: false,
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 1.5,
    dyslexiaFont: false,
    readingGuide: false,
  });

  const [pathname, setPathname] = useState<string>("");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const applyCursorStyles = (settings: Settings) => {
    // Remove any existing cursor classes first
    document.documentElement.classList.remove(
      'big-white-cursor',
      'big-black-cursor'
    );

    if (settings.bigWhiteCursor) {
      document.documentElement.classList.add('big-white-cursor');
    } else if (settings.bigBlackCursor) {
      document.documentElement.classList.add('big-black-cursor');
    }
  };

  const increaseFontSize = () => {
    setSettings(prev => ({
      ...prev,
      fontSize: Math.min(prev.fontSize + 2, 24) // Limit max size to 24px
    }));
  };

  const toggleReadingGuide = () => {
    setSettings(prev => {
      const newValue = !prev.readingGuide;
      if (newValue) {
        enableReadingGuide();
        document.addEventListener("mousemove", moveReadingGuide);
      } else {
        disableReadingGuide();
        document.removeEventListener("mousemove", moveReadingGuide);
      }
      return { ...prev, readingGuide: newValue };
    });
  };

  const enableReadingGuide = () => {
    if (!document.getElementById("reading-guide")) {
      const guide = document.createElement("div");
      guide.id = "reading-guide";
      guide.className = "reading-guide";
      document.body.appendChild(guide);
    }

    const guide = document.getElementById("reading-guide");
    if (guide) {
      guide.style.display = "block";
    }
  };

  const disableReadingGuide = () => {
    const guide = document.getElementById("reading-guide");
    if (guide) {
      guide.style.display = "none";
    }
  };

  const moveReadingGuide = (e: MouseEvent) => {
    const guide = document.getElementById("reading-guide");
    if (guide) {
      guide.style.top = `${e.clientY}px`;
      guide.style.left = `${e.clientX}px`;
    }
  };

  const decreaseFontSize = () => {
    setSettings(prev => ({
      ...prev,
      fontSize: Math.max(prev.fontSize - 2, 12) // Limit min size to 12px
    }));
  };

  const increaseLetterSpacing = () => {
    setSettings(prev => ({
      ...prev,
      letterSpacing: Math.min(prev.letterSpacing + 0.5, 5) // Limit max to 5px
    }));
  };

  const decreaseLetterSpacing = () => {
    setSettings(prev => ({
      ...prev,
      letterSpacing: Math.max(prev.letterSpacing - 0.5, 0) // Can't go below 0
    }));
  };

  const toggleDyslexiaFont = () => {
    setSettings(prev => ({
      ...prev,
      dyslexiaFont: !prev.dyslexiaFont
    }));
  };

  const increaseLineHeight = () => {
    setSettings(prev => ({
      ...prev,
      lineHeight: Math.min(prev.lineHeight + 0.1, 3) // Limit max to 3
    }));
  };

  const decreaseLineHeight = () => {
    setSettings(prev => ({
      ...prev,
      lineHeight: Math.max(prev.lineHeight - 0.1, 1) // Can't go below 1
    }));
  };

  const toggleTextMagnifier = () => {
    setSettings(prev => ({
      ...prev,
      textMagnifier: !prev.textMagnifier
    }));
  };


  useEffect(() => {
    if (!settings.textMagnifier) {
      setShowMagnifier(false);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Only show magnifier if hovering over text content
      if (target.textContent && target.textContent.trim() !== "") {
        setMagnifierPosition({ x: e.clientX, y: e.clientY });
        setMagnifierContent(target.textContent.trim());
        setShowMagnifier(true);
      } else {
        setShowMagnifier(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [settings.textMagnifier]);

  const applyProfileEffects = (settings: Settings) => {
    applyCursorStyles(settings);

    if (settings.visionImpaired) {
      document.documentElement.style.zoom = "1.25";
      document.documentElement.style.transformOrigin = "top left";
    } else {
      document.documentElement.style.zoom = "1";
    }

    if (settings.screenReader) {
      document.documentElement.classList.add("screen-reader-optimized");
      // Add ARIA attributes and roles
      document.querySelectorAll('img').forEach(img => {
        if (!img.getAttribute('alt')) {
          img.setAttribute('aria-hidden', 'true');
        }
      });
      document.querySelectorAll('[aria-hidden="false"]').forEach(el => {
        el.setAttribute('aria-hidden', 'true');
      });
    } else {
      document.documentElement.classList.remove("screen-reader-optimized");
      // Remove added ARIA attributes
      document.querySelectorAll('[aria-hidden="true"]').forEach(el => {
        el.removeAttribute('aria-hidden');
      });
    }


    if (settings.keyboardNavigation) {
      document.documentElement.classList.add("keyboard-navigation");
      // Add focus styles for all focusable elements
      document.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach(el => {
        el.classList.add('keyboard-focusable');
      });
    } else {
      document.documentElement.classList.remove("keyboard-navigation");
      // Remove focus styles
      document.querySelectorAll('.keyboard-focusable').forEach(el => {
        el.classList.remove('keyboard-focusable');
      });
    }
    if (settings.seizureSafe) {
      document.documentElement.classList.add("seizure-safe", "safe-colors", "no-animations");
      document.documentElement.classList.remove("grayscale");
    } else {
      document.documentElement.classList.remove("seizure-safe", "safe-colors", "no-animations");
    }

    if (settings.visionImpaired) {
      document.documentElement.classList.add("high-contrast", "large-text");
    } else {
      document.documentElement.classList.remove("high-contrast", "large-text");
    }

    if (settings.adhdFriendly) {
      document.documentElement.classList.add("focus-mode", "reduced-distractions");
    } else {
      document.documentElement.classList.remove(
        "focus-mode",
        "reduced-distractions"
      );
    }

    if (settings.cognitiveDisability) {
      document.documentElement.classList.add("dyslexia-font", "simplified-layout");
    } else {
      document.documentElement.classList.remove(
        "dyslexia-font",
        "simplified-layout"
      );
    }

    if (settings.keyboardNavigation) {
      document.documentElement.classList.add("keyboard-navigation");
    } else {
      document.documentElement.classList.remove("keyboard-navigation");
    }

    if (settings.screenReader) {
      document.documentElement.classList.add("screen-reader-optimized");
    } else {
      document.documentElement.classList.remove("screen-reader-optimized");
    }
  };

  const moveReadingMask = (e: MouseEvent) => {
    const mask = document.getElementById("reading-mask");
    const line = document.getElementById("reading-mask-line");

    if (mask && line) {
      const lineHeight = 180;
      const lineTop = e.clientY - lineHeight / 2;

      line.style.top = `${lineTop}px`;
      mask.style.setProperty("--mask-top", `${lineTop}px`);
      mask.style.setProperty("--mask-height", `${lineHeight}px`);
    }
  };

  const toggleBigWhiteCursor = () => {
    setSettings(prev => ({
      ...prev,
      bigWhiteCursor: !prev.bigWhiteCursor,
      bigBlackCursor: false // Ensure only one cursor type is active
    }));
  };

  const toggleBigBlackCursor = () => {
    setSettings(prev => ({
      ...prev,
      bigBlackCursor: !prev.bigBlackCursor,
      bigWhiteCursor: false // Ensure only one cursor type is active
    }));
  };

  const enableReadingMask = () => {
    if (!document.getElementById("reading-mask")) {
      const mask = document.createElement("div");
      mask.id = "reading-mask";
      mask.className = "reading-mask";
      document.body.appendChild(mask);

      const line = document.createElement("div");
      line.id = "reading-mask-line";
      line.className = "reading-mask-line";
      document.body.appendChild(line);
    }

    const mask = document.getElementById("reading-mask");
    const line = document.getElementById("reading-mask-line");

    if (mask && line) {
      mask.style.display = "block";
      line.style.display = "block";
      document.documentElement.classList.add("reading-mask-active");
    }

    document.addEventListener("mousemove", moveReadingMask);
  };

  const disableReadingMask = () => {
    const mask = document.getElementById("reading-mask");
    const line = document.getElementById("reading-mask-line");

    if (mask && line) {
      mask.style.display = "none";
      line.style.display = "none";
    }

    document.documentElement.classList.remove("cursor-none");
    document.removeEventListener("mousemove", moveReadingMask);
  };

  const toggleReadingMask = () => {
    setSettings((prev) => {
      const newValue = !prev.readingMask;
      if (newValue) {
        enableReadingMask();
      } else {
        disableReadingMask();
      }
      return { ...prev, readingMask: newValue };
    });
  };



  const toggleScreenReader = async () => {
    setSettings((prev) => {
      const newValue = !prev.screenReader;
      return {
        ...prev,
        screenReader: newValue,
        // Optionally toggle keyboardNavigation if still needed
        keyboardNavigation: !prev.keyboardNavigation,
      };
    });
  };
  // const toggleScreenReader = () => {
  //   setSettings((prev) => {
  //     const newValue = !prev.keyboardNavigation;
  //     return {
  //       ...prev,
  //       keyboardNavigation: newValue
  //     };
  //   });
  //   setSettings((prev) => {
  //     const newValue = !prev.screenReader;

  //     // Announce the change
  //     const announcement = document.createElement('div');
  //     announcement.setAttribute('aria-live', 'assertive');
  //     announcement.className = 'sr-only';
  //     announcement.textContent = newValue ? 'Screen reader mode activated' : 'Screen reader mode deactivated';
  //     document.body.appendChild(announcement);
  //     setTimeout(() => announcement.remove(), 1000);

  //     // Apply immediate changes
  //     if (newValue) {
  //       // Add skip to content link if not present
  //       if (!document.getElementById('skip-to-content')) {
  //         const skipLink = document.createElement('a');
  //         skipLink.id = 'skip-to-content';
  //         skipLink.href = '/home';
  //         skipLink.className = 'skip-link';
  //         skipLink.textContent = 'Skip to content';
  //         document.body.insertBefore(skipLink, document.body.firstChild);
  //       }
  //     }

  //     return {
  //       ...prev,
  //       screenReader: newValue
  //     };
  //   });
  // };
  // In your ThemeProvider component
  useEffect(() => {
    // Add this to your existing useEffect
    if (settings.seizureSafe || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  }, [settings.seizureSafe]);

  const toggleVisionImpaired = () => {
    setSettings((prev) => {
      const newValue = !prev.visionImpaired;
      return {
        ...prev,
        visionImpaired: newValue,
        // You might want to also adjust textSize when toggling vision impaired
        textSize: newValue ? "xl" : "base"
      };
    });
  };


  const togglekeyboardNavigation = () => {
    setSettings((prev) => {
      const newValue = !prev.keyboardNavigation;
      return {
        ...prev,
        keyboardNavigation: newValue
      };
    });
  };

  const handleProfileToggle = (profile: keyof Settings) => {
    setSettings((prev) => {
      const newSettings = { ...prev, [profile]: !prev[profile] };
      applyProfileEffects(newSettings);
      return newSettings;
    });
  };

  useEffect(() => {
    if (settings.keyboardNavigation) {
      // Add keyboard event listeners
      const handleFirstTab = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          document.documentElement.classList.add('keyboard-navigation-active');
          window.removeEventListener('keydown', handleFirstTab);
        }
      };

      window.addEventListener('keydown', handleFirstTab);

      return () => {
        window.removeEventListener('keydown', handleFirstTab);
      };
    }
  }, [settings.keyboardNavigation]);

  const resetSettings = () => {
    setSettings({
      textSize: "base",
      highContrast: false,
      grayscale: false,
      focusMode: false,
      readingMask: false,
      seizureSafe: false,
      visionImpaired: false,
      adhdFriendly: false,
      cognitiveDisability: false,
      keyboardNavigation: false,
      screenReader: false,
      visionEmpired: false,
      bigBlackCursor: false,
      bigWhiteCursor: false,
      fontSize: 16,
      letterSpacing: 0,
      textMagnifier: false,
      lineHeight: 1.5,
      dyslexiaFont: false,
      readingGuide: false,
    });
    document.documentElement.className = "";
    disableReadingMask();
  };


  useEffect(() => {
    document.documentElement.style.fontSize = `${settings.fontSize}px`;
    document.documentElement.style.setProperty('--letter-spacing', `${settings.letterSpacing}px`);
    document.documentElement.style.setProperty('--line-height', `${settings.lineHeight}`);
  }, [theme, settings]);

  useEffect(() => {
    // Theme logic
    const applyTheme = (selectedTheme: Theme) => {
      if (selectedTheme === "dark") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else if (selectedTheme === "light") {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        document.documentElement.classList.toggle("dark", prefersDark);
        localStorage.setItem("theme", "system");
      }
    };

    applyTheme(theme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);

    // Accessibility settings logic
    document.documentElement.classList.remove("text-sm", "text-base", "text-lg");
    document.documentElement.classList.add(`text-${settings.textSize}`);

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

    if (settings.focusMode) {
      document.documentElement.classList.add("focus-overlay");
    } else {
      document.documentElement.classList.remove("focus-overlay");
    }

    applyProfileEffects(settings);

    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, [theme, settings]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTextMagnifier,
        setTheme,
        increaseFontSize,
        decreaseFontSize,
        settings,
        setSettings,
        toggleVisionImpaired,
        handleProfileToggle,
        toggleReadingMask,
        resetSettings,
        togglekeyboardNavigation,
        toggleScreenReader,
        toggleBigWhiteCursor,
        toggleBigBlackCursor,
        increaseLetterSpacing,
        decreaseLetterSpacing,
        increaseLineHeight,
        decreaseLineHeight,
        toggleDyslexiaFont,
        toggleReadingGuide,
        pathname
      }}
    >
      {children}
      {settings.textMagnifier && showMagnifier && (
        <div
          className="fixed z-[9999] pointer-events-none bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 border border-gray-200 dark:border-gray-700"
          style={{
            left: `${magnifierPosition.x + 20}px`,
            top: `${magnifierPosition.y + 20}px`,
            transform: 'translate(0, 0)',
            fontSize: '24px',
            lineHeight: '1.5',
            maxWidth: '300px',
            wordBreak: 'break-word'
          }}
        >
          {magnifierContent}
        </div>
      )}
    </ThemeContext.Provider>
  );
};