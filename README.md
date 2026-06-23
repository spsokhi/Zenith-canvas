# ✦ Zenith Canvas

A polished, hand-drawn-style **digital whiteboard & note-taking** app that runs entirely
in your browser - no install, no account, no server. It's a single HTML file.

> **Live:** open `index.html` (or  GitHub Pages link). Everything runs locally; your
> work is saved automatically in the browser.

---

## Use it

- **Pick a tool** from the top toolbar and draw on the infinite canvas.
- **Pan:** scroll / drag with the hand tool / hold **Space** and drag. **Zoom:** Ctrl+scroll, or the −/+ controls.
- **Select** (V): click, shift-click, or drag a box to select; then move, resize, or rotate.
- **Text:** pick the Text tool (T) and click. While editing, a small bar lets you make part of
  the text **S/M/L/XL**, **bold**, or *italic* — select the words first, then click.
- **Sheets:** the **top-left dropdown** keeps separate pages per subject (Python, Java, …),
  each with its own drawing, zoom, and undo.

### Handy shortcuts

| | |
| --- | --- |
| Select / Pan | `V` / `H` |
| Rectangle / Diamond / Ellipse | `R` / `D` / `O` |
| Arrow / Line / Pen / Text | `A` / `L` / `P` / `T` |
| Eraser | `E` |
| Undo / Redo | `Ctrl+Z` / `Ctrl+Shift+Z` |
| Duplicate / Delete | `Ctrl+D` / `Del` |
| Zoom to fit | `Shift+1` |

Double-click empty space to add text; double-click a text box to edit it.

---

## Save, back up & move your notes

- **Autosave:** everything is stored in your browser (localStorage) and restored when you reopen —
  including your zoom level and all sheets.
- **Backup / move:** in the **Sheets dropdown**, use **Export all (.json)** to download every
  sheet to a file, and **Import sheets…** to restore it — in another browser, on another
  computer, or after clearing browser data.
- **Export art:** the top-right buttons export the current sheet as **PNG** or **SVG**, or copy a
  **share link**.

> ⚠️ Notes are saved **per browser**. A different browser/computer starts empty — use
> **Export all → Import** to carry your notes across.

---

## How it works

- **100% client-side.** One HTML file with all JavaScript and CSS inlined. No backend, no
  tracking, no network calls except an optional UI font (the hand-drawn font is bundled, so it
  works fully offline).
- **Canvas rendering.** Drawing, hit-testing, and the hand-drawn ("sketchy") look are done on an
  HTML5 canvas for low-latency interaction.
- **Storage.** Your sheets live in the browser's `localStorage` under one key; the JSON backup is
  the portable copy.
- GitHub Pages stores your sheets in the browser's localStorage/IndexedDB under spsokhi.github.io
- Local Zenith Canvas.html stores under file:// — a different origin entirely

- Browsers keep storage strictly isolated by origin, so the two never see each other's data.

## How to move data between them: 
- use the Export All / Import All backup feature (the .json file). Export from one, import into the other — all sheets + images transfer cleanly.



---

Made in India with ❤️ by **Sukhi**.
