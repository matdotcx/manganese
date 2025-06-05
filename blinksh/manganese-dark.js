// Manganese Dark Theme for Blink Shell
// Based on the Manganese Deadline Dark theme

// Define color variables for clarity
const dark = {
  // Core colors from accents
  orange:     "#ff9248",  // Primary accent
  red:        "#d14d41",  // Variable color
  green:      "#879a39",  // String color
  yellow:     "#d0a215",  // Number/constant color
  blue:       "#4385be",  // Function color
  cyan:       "#3aa99f",  // Type color
  
  // Background and foreground
  bg:         "#1f1f1f",  // Main background
  fg:         "#e8e8e8",  // Main text
  
  // Additional colors
  bgAlt:      "#1a1a1a",  // Darker background (status bar)
  fgMuted:    "#878e98",  // Muted text
  fgDim:      "#525561",  // Disabled text
  black:      "#1f1f1f",  // ANSI black
  brightBlack:"#525561",  // ANSI bright black
  white:      "#e8e8e8",  // ANSI white
  brightWhite:"#e8e8e8"   // ANSI bright white
};

// Manganese Dark Theme
t.prefs_.set('color-palette-overrides', [
  dark.black,       // 0: black
  dark.red,         // 1: red
  dark.green,       // 2: green
  dark.yellow,      // 3: yellow
  dark.blue,        // 4: blue
  dark.orange,      // 5: magenta (using orange as primary accent)
  dark.cyan,        // 6: cyan
  dark.white,       // 7: white
  dark.brightBlack, // 8: bright black
  dark.red,         // 9: bright red
  dark.green,       // 10: bright green
  dark.yellow,      // 11: bright yellow
  dark.blue,        // 12: bright blue
  dark.orange,      // 13: bright magenta
  dark.cyan,        // 14: bright cyan
  dark.brightWhite  // 15: bright white
]);

t.prefs_.set('foreground-color', dark.fg);
t.prefs_.set('background-color', dark.bg);
t.prefs_.set('cursor-color', 'rgba(255, 146, 72, 0.5)'); // Semi-transparent orange
t.prefs_.set('cursor-blink', true);
