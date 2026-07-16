# Codex Theme Galaxy

**English** | [简体中文](README.zh-CN.md)

A complete theme collection for **Codex Desktop → Settings → Appearance**, with light and dark share strings for every desktop theme:

- `Nebula` — deep-space indigo, violet, and ice blue.
- `Hacker` — terminal green, near-black surfaces, and subtle purple.
- `Muse` — neon magenta, pink-violet, and dark berry tones with readable, image-free editor surfaces.

## Live Preview

[Open the bilingual Codex Muse theme gallery](https://cosmiccoderdev.github.io/codex-themes/)

The gallery supports complete English and Chinese interfaces. Use the language button in the upper-right corner to switch modes. Both the selected theme and language preference are saved in the browser.

## Import a Desktop Theme

1. Open **Codex → Settings → Appearance**.
2. Select **Import** in the Light Theme or Dark Theme card.
3. Open the matching `.theme.txt` file in `desktop/share`, copy the complete single-line share string, and paste it into Codex.
4. System mode will automatically use the imported light or dark configuration based on the operating-system appearance.

The share strings use the `codex-theme-v1:` format and include base colors, contrast, translucent-window settings, code themes, and semantic colors. UI and code font values remain `null`, so Codex keeps the user's existing font configuration instead of importing unavailable fonts.

## Portrait Theme Gallery Prototype

`preview/index.html` is a standalone interactive interface prototype with eight fictional-character themes and eight celebrity photo themes:

- Sweet Berry — strawberries, bows, and soft portrait lighting.
- Nebula Violet — an observer, violet nebulae, and silver starlight.
- Cyber Cyan — an engineer, dark glass, and cyan neon.
- Oriental Red — cinnabar styling, ink-wash space, and a modern East Asian mood.
- Midnight Glamour — city lights, a black gown, and warm golden edges.
- Crimson Satin — red satin, warm gold lighting, and mature editorial styling.
- Afternoon Loft — a white shirt, a modern loft, and soft daylight.
- Neon Silver — a silver dress, midnight blue, and cyan-violet neon.
- Liu Yifei — a pink gown and blue festival lighting.
- Zhang Ziyi — black velvet and cinematic festival lighting.
- Zhou Xun — formal styling, a spotlight, and warm beige negative space.
- Fan Bingbing — ivory, gilded gold, and emerald tones.
- Anne Hathaway — dark hair, black styling, and midnight blue.
- Emma Watson — a bright close-up with crisp monochrome styling.
- Margot Robbie — a white gown, golden light, and a bright smile.
- Scarlett Johansson — silver-blue tailoring, a bright sky, and a natural smile.

Switch themes from the sidebar thumbnails, the theme drawer, or **Surprise me**. The current choice is stored in browser `localStorage` and restored after refresh. The eight fictional-character images are original AI-generated images depicting fictional adults. The eight celebrity images are open-licensed public-event photographs from Wikimedia Commons under CC BY or CC BY-SA licenses.

See [`ATTRIBUTION.md`](ATTRIBUTION.md) for generation notes, per-file sources, authors, license versions, modification disclosures, and personality-rights guidance. The celebrity themes do not imply endorsement, participation, sponsorship, or collaboration by the photographed people.

The gallery is a standalone prototype. It does not inject into or modify the Codex installation. Official Codex appearance customization continues to use the `codex-theme-v1:` share strings described above.

## Rebuild the Share Strings

Editable source configurations live in `desktop/source`. After changing a JSON file, run:

```powershell
.\scripts\build-desktop-themes.ps1
```

The script validates fields, colors, light/dark modes, code-theme IDs, and contrast values before regenerating `desktop/share/*.theme.txt`.

## Local Preview

Open `preview/index.html` in a browser to browse and switch among all portrait themes.

## CLI/TUI Companion Themes

The repository also includes two `.tmTheme` files. They change syntax colors in the Codex CLI/TUI only and do not modify the desktop interface:

- `themes/codex-nebula.tmTheme`
- `themes/codex-hacker.tmTheme`

From the project directory in PowerShell, run:

```powershell
.\scripts\install.ps1
```

By default, the script copies the themes to:

```text
C:\Users\<your-username>\.codex\themes
```

Existing files with the same names are skipped. To intentionally overwrite them, run:

```powershell
.\scripts\install.ps1 -Force
```

After installation, open the Codex TUI and run `/theme` to preview and save a theme.

You can also name a theme in the Codex configuration:

```toml
[tui]
theme = "codex-nebula"
```

## Dry Run

The install and uninstall scripts support PowerShell's `-WhatIf` mode:

```powershell
.\scripts\install.ps1 -WhatIf
.\scripts\uninstall.ps1 -WhatIf
```

## Uninstall

```powershell
.\scripts\uninstall.ps1
```

The uninstall script removes only the two themes managed by this repository and leaves all other files in the Codex theme directory untouched.

## Project Structure

```text
codex-themes/
├─ .github/workflows/        # GitHub Pages deployment
├─ desktop/
│  ├─ source/                # Editable desktop-theme JSON
│  └─ share/                 # Import-ready share strings
├─ themes/                   # Codex CLI/TUI syntax themes
├─ scripts/                  # Build, install, and uninstall scripts
└─ preview/                  # Bilingual portrait-theme website
```

## Design Principles

- Keep primary surfaces low in brightness to reduce fatigue during long coding sessions.
- Give keywords, functions, strings, and numbers clear but restrained visual hierarchy.
- Keep image backgrounds out of imported editor themes; the current Codex share format controls interface colors, fonts, contrast, and semantic colors rather than background imagery.
- Keep installation and uninstallation reversible without modifying Codex application files.

## License

- Source code, scripts, theme configurations, and documentation authored in this repository are available under the [MIT License](LICENSE).
- The AI-generated fictional-character images are available under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) to the extent that the project author may license them.
- Celebrity photographs are not covered by MIT or a single repository-wide image license. Each file remains subject to the corresponding CC BY or CC BY-SA license, attribution, and share-alike requirements documented in [`ATTRIBUTION.md`](ATTRIBUTION.md).
- The photographed people do not endorse, sponsor, participate in, or collaborate with this project. Open copyright licenses do not automatically grant publicity, commercial-endorsement, trademark, privacy, or other personality rights.
