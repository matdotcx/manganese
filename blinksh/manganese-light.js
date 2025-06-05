// Manganese Light Theme for Blink Shell
// Based on the Manganese Deadline Light theme

const light = {
  // Core colors from accents
  orange:     "#ff7900",  // Primary accent
  red:        "#af3029",  // Variable color
  green:      "#66800b",  // String color
  yellow:     "#966307",  // Number/constant color
  blue:       "#3a94c5",  // Function color
  cyan:       "#3f8687",  // Type color
  
  // Background and foreground
  bg:         "#f8f5f0",  // Main background
  fg:         "#232323",  // Main text
  
  // Additional colors
  bgAlt:      "#efefef",  // Lighter background (status bar)
  fgMuted:    "#6f6e69",  // Muted text
  fgDim:      "#b4b4bb",  // Disabled text
  black:      "#f8f5f0",  // ANSI black (using bg for light theme)
  brightBlack:"#6f6e69",  // ANSI bright black
  white:      "#232323",  // ANSI white (using fg for light theme)
  brightWhite:"#454545"   // ANSI bright white
};

// Manganese Light Theme
t.prefs_.set('color-palette-overrides', [
  light.black,       // 0: black
  light.red,         // 1: red
  light.green,       // 2: green
  light.yellow,      // 3: yellow
  light.blue,        // 4: blue
  light.orange,      // 5: magenta (using orange as primary accent)
  light.cyan,        // 6: cyan
  light.white,       // 7: white
  light.brightBlack, // 8: bright black
  light.red,         // 9: bright red (using same as regular for consistency)
  light.green,       // 10: bright green
  light.yellow,      // 11: bright yellow
  light.blue,        // 12: bright blue
  light.orange,      // 13: bright magenta
  light.cyan,        // 14: bright cyan
  light.brightWhite  // 15: bright white
]);

t.prefs_.set('foreground-color', light.fg);
t.prefs_.set('background-color', light.bg);
t.prefs_.set('cursor-color', 'rgba(255, 121, 0, 0.5)'); // Semi-transparent orange
t.prefs_.set('cursor-blink', true);
