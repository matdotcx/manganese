// Manganese Deadline Dark theme for Blink Shell
// Based on the Manganese Deadline Zed theme

// Define the 16 color palette
black       = ‘#1f1f1f’;   // background
red         = ‘#d14d41’;   // red
green       = ‘#879a39’;   // green
yellow      = ‘#d0a215’;   // yellow
blue        = ‘#4385be’;   // blue
magenta     = ‘#ff9248’;   // orange/magenta
cyan        = ‘#3aa99f’;   // cyan
white       = ‘#e8e8e8’;   // light gray

lightBlack  = ‘#525561’;   // medium gray
lightRed    = ‘#d14d41’;   // bright red
lightGreen  = ‘#879a39’;   // bright green
lightYellow = ‘#d0a215’;   // bright yellow
lightBlue   = ‘#4385be’;   // bright blue
lightMagenta= ‘#ff9248’;   // bright orange/magenta
lightCyan   = ‘#3aa99f’;   // bright cyan
lightWhite  = ‘#f0f0f0’;   // white

// Set the color palette
t.prefs_.set(‘color-palette-overrides’,
[ black , red     , green  , yellow,
blue     , magenta , cyan   , white,
lightBlack   , lightRed  , lightGreen , lightYellow,
lightBlue    , lightMagenta  , lightCyan  , lightWhite ]);

// Set cursor, foreground and background colors
t.prefs_.set(‘cursor-color’, ‘#ff9248’);
t.prefs_.set(‘foreground-color’, ‘#e8e8e8’);
t.prefs_.set(‘background-color’, ‘#1f1f1f’);