# Manganese for Claude Code

Two custom themes for [Claude Code](https://claude.com/claude-code):

- **Manganese Light** (`manganese-light.json`), for a paper background (`#f8f5f0`)
- **Manganese Dark** (`manganese-dark.json`), for a charcoal background (`#232323`)

They pair with the Ghostty themes in `../ghostty`.

## Install

```sh
mkdir -p ~/.claude/themes
cp manganese-light.json manganese-dark.json ~/.claude/themes/
```

Then run `/theme` in Claude Code and pick Manganese Light or Manganese Dark. You can also set it in `~/.claude/settings.json`:

```json
"theme": "custom:manganese-light"
```

Claude Code's "Auto (match terminal)" option only switches between its built-in themes, so use `/theme` to move between the two.

## Colour notes

Colours follow [TECHNICAL.md](../TECHNICAL.md) and the Ghostty palettes. A few roles use a neighbouring colour so text stays readable:

- In the light theme, Claude's spinner text uses Muted `#cc6100`. Deadline orange `#ff7900` is kept for the shimmer and the mascot.
- In the light theme, plan mode uses a darker teal, `#00807a`, than Ghostty's `#00998f`.
- In the dark theme, dimmed text uses a warm grey, `#999590`, instead of Gray Light `#808080`.

The rainbow "ultrathink" colours, the purple and yellow subagent colours, and the Chrome indicator come from Claude Code's built-in `light` and `dark` themes.
