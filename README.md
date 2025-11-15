# Anatomie

Een lichte, Apple-achtige anatomiequizinterface met alle nieuwe
20-vragenmodules. De volledige reeks (Atlas → Algemene voet) staat live,
waardoor elk bot rechtstreeks vanuit het hoofdmenu speelbaar is.

## Bekijk de site lokaal

1. **Download of kloon** deze repository.
2. Open de map in je bestandsbeheer of terminal.
3. Start een eenvoudige webserver:
   ```bash
   # Python 3
   python -m http.server 5500
   ```
4. Surf in je browser naar `http://localhost:5500/` en open `index.html`.

> Tip: Met VS Code kun je ook de "Live Server"-extensie gebruiken en direct op de play-knop klikken.

## Bestanden
- `index.html` – hoofdpagina met animaties, quizmenu en resultaatpaneel.
- `assets/css/styles.css` – styling met glow-effecten en layout.
- `assets/js/app.js` – quizdata en spel-logica.
