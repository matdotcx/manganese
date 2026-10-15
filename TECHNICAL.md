# Technical Specifications

## Colour reference

### Shared mono tones
- Black: `#171717` (deepest dark)
- Charcoal: `#232323` (Deadline base dark)
- Gray Dark: `#666666`
- Gray Light: `#808080`
- Paper Dark: `#e6e4d9`
- Paper Light: `#f8f5f0`

### Dark theme
1. Primary: `#ff7900` (Deadline orange)
2. Error: `#ff4d33`
3. Info: `#4a7d99`
4. Success: `#39996f`
5. Warning: `#e65c00`
6. Highlight: `#ffb366`
7. Muted: `#cc6100`
8. Deep: `#994d00`

### Light theme
1. Primary: `#ff7900` (Deadline orange)
2. Error: `#cc3300`
3. Info: `#336699`
4. Success: `#2a664d`
5. Warning: `#993300`
6. Deep: `#804000`
7. Muted: `#cc6100`
8. Deepest: `#663300`

## Syntax roles

**Dark**
- Keywords and control flow: `#ff7900` (Primary)
- Types and interfaces: `#4a7d99` (Info)
- Functions and methods: `#39996f` (Success)
- Variables and properties: `#ffb366` (Highlight)
- Strings and literals: `#ffb366` (Highlight)
- Comments: `#808080` (Gray Light)
- Errors: `#ff4d33` (Error)
- Base text: `#f8f5f0` (Paper Light)

**Light**
- Keywords and control flow: `#ff7900` (Primary)
- Types and interfaces: `#336699` (Info)
- Functions and methods: `#2a664d` (Success)
- Variables and properties: `#804000` (Deep)
- Strings and literals: `#993300` (Warning)
- Comments: `#666666` (Gray Dark)
- Errors: `#cc3300` (Error)
- Base text: `#232323` (Charcoal)

## Contrast

Measured against each theme's background using WCAG 2.1. AA needs 4.5:1 for normal text and 3:1 for large text and UI marks like icons and borders. AAA needs 7:1.

**Dark, on Charcoal (`#232323`)**

| Colour | Hex | Ratio | Rating |
|---|---|---|---|
| Paper Light | `#f8f5f0` | 14.45:1 | AAA |
| Highlight | `#ffb366` | 8.90:1 | AAA |
| Primary | `#ff7900` | 5.98:1 | AA |
| Error | `#ff4d33` | 4.76:1 | AA |
| Success | `#39996f` | 4.46:1 | Large text only |
| Warning | `#e65c00` | 4.41:1 | Large text only |
| Gray Light | `#808080` | 3.98:1 | Large text only |
| Muted | `#cc6100` | 3.95:1 | Large text only |
| Info | `#4a7d99` | 3.51:1 | Large text only |
| Deep | `#994d00` | 2.56:1 | Below 3:1 |

**Light, on Paper Light (`#f8f5f0`)**

| Colour | Hex | Ratio | Rating |
|---|---|---|---|
| Charcoal | `#232323` | 14.45:1 | AAA |
| Deepest | `#663300` | 9.47:1 | AAA |
| Deep | `#804000` | 7.28:1 | AAA |
| Warning | `#993300` | 6.83:1 | AA |
| Success | `#2a664d` | 6.22:1 | AA |
| Info | `#336699` | 5.52:1 | AA |
| Gray Dark | `#666666` | 5.28:1 | AA |
| Error | `#cc3300` | 4.78:1 | AA |
| Muted | `#cc6100` | 3.66:1 | Large text only |
| Primary | `#ff7900` | 2.42:1 | Below 3:1 |

Where the syntax roles fall short:

- **Light keywords** use Deadline orange at 2.42:1. It's the brightest thing on the page and the hardest to read as text.
- **Dark functions and comments** sit just under AA, at 4.46:1 and 3.98:1.
- **Dark types** use Info at 3.51:1.

Dark Deep isn't assigned to any syntax role, which is just as well at 2.56:1.

## Notes

- Written for 24-bit colour.
- Roles stay the same in both themes: orange for emphasis, blue for information, green for success, red for errors.
