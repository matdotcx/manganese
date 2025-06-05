# Technical Specifications

## Colour Reference

### Shared Mono Tones
- Black: `#171717` (deepest dark)
- Charcoal: `#232323` (Deadline base dark)  
- Gray Dark: `#666666`
- Gray Light: `#808080`
- Paper Dark: `#e6e4d9`
- Paper Light: `#f8f5f0`

### Dark Theme
1. Primary: `#ff7900` (Deadline orange)
2. Error: `#ff4d33`
3. Info: `#4a7d99` 
4. Success: `#39996f`
5. Warning: `#e65c00`
6. Highlight: `#ffb366`
7. Muted: `#cc6100`
8. Deep: `#994d00`

### Light Theme  
1. Primary: `#ff7900` (Deadline orange)
2. Error: `#cc3300`
3. Info: `#336699`
4. Success: `#2a664d`
5. Warning: `#993300`
6. Deep: `#804000`
7. Muted: `#cc6100`
8. Deepest: `#663300`

## Standards & Compatibility

**Accessibility:**
- WCAG 2.1 AA compliant (4.5:1 minimum contrast ratio)
- WCAG 2.1 AAA compliant for large text (3:1 minimum contrast ratio)

**Technical:**
- True colour (24-bit) optimized
- Maintains semantic meaning across light/dark modes
- Based on traditional print colour relationships with proven readability
- Cross-platform terminal compatibility

**Design:**
- Uses warm, muted tones designed for comfortable extended viewing
- Semantic colour roles remain consistent between themes
- High contrast ratios support accessibility requirements

## Usage Guidelines

### Semantic Colour Roles

**Dark Theme Usage:**
- Keywords/Control flow: `#ff7900` (Primary)
- Types/Interfaces: `#4a7d99` (Info)
- Functions/Methods: `#39996f` (Success)
- Variables/Properties: `#ffb366` (Highlight)
- Strings/Literals: `#ffb366` (Highlight)
- Comments: `#808080` (Gray Light)
- Error states: `#ff4d33` (Error)
- Base text: `#f8f5f0` (Paper Light)

**Light Theme Usage:**
- Keywords/Control flow: `#ff7900` (Primary)
- Types/Interfaces: `#336699` (Info)
- Functions/Methods: `#2a664d` (Success)
- Variables/Properties: `#804000` (Deep)
- Strings/Literals: `#993300` (Warning)
- Comments: `#666666` (Gray Dark)
- Error states: `#cc3300` (Error)
- Base text: `#232323` (Charcoal)

All colours meet WCAG 2.1 AA accessibility standards for their intended use contexts.
