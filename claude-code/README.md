# Manganese for Claude Code

The same ink, paper and grease pencil, now in Claude Code.

Manganese Light is set on Paper Light (`#f8f5f0`) and Manganese Dark on Charcoal (`#232323`), so both sit naturally alongside the Ghostty themes next door.

## Install

```sh
mkdir -p ~/.claude/themes
cp manganese-light.json manganese-dark.json ~/.claude/themes/
```

Run `/theme` and pick Manganese Light or Manganese Dark, or set it in `~/.claude/settings.json`:

```json
"theme": "custom:manganese-light"
```

"Auto (match terminal)" only switches between Claude Code's built-in themes, so changing moods is done by hand with `/theme`.

## Small compromises

Everything comes from [TECHNICAL.md](../TECHNICAL.md), with three exceptions where legibility won:

- Deadline orange (`#ff7900`) is too bright to read as text on paper, so the light theme's spinner text uses Muted (`#cc6100`). The full orange stays on the shimmer and on Clawd.
- Ghostty's teal (`#00998f`) washes out on cream, so plan mode in the light theme uses a deeper `#00807a`.
- Gray Light (`#808080`) falls just short of AA on Charcoal, so dimmed text in the dark theme uses a warm `#999590`.

The ultrathink rainbow, the purple and yellow subagent colours and the Chrome indicator keep Claude Code's defaults. A rainbow should stay a rainbow.
