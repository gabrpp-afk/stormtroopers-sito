# Sito ASD Storm Troopers

Sito statico (HTML/CSS/JS, nessun backend necessario), già personalizzato con i dati dell'associazione.

**Sito pubblicato:** https://gabrpp-afk.github.io/stormtroopers-sito/
**Repo GitHub:** gabrpp-afk/stormtroopers-sito (branch `main`)

## File

- `index.html` — struttura e contenuti
- `style.css` — tema multicam tan/marrone, font Oswald + Inter
- `script.js` — menu mobile, galleria hero, galleria foto con lightbox, animazioni allo scroll, anno footer
- `media/` — foto, loghi e patch del sito

## Stato attuale

Già inseriti e funzionanti:

- Email di contatto: `stormtroopers.asd@gmail.com`
- Link gruppo WhatsApp (nel pulsante in homepage e nella sezione contatti)
- Instagram: `instagram.com/stormtroopers.asd`
- TikTok: `tiktok.com/@stormtroopers.asd`
- Testi di "Chi siamo" e "Cosa facciamo"
- Numeri: 15 soci attivi, 35 giocate all'anno, fondazione 2025
- Logo (header + favicon) e patch (footer) caricati e funzionanti su GitHub Pages
- Galleria hero (3 foto `landing_photo1/2/3.jpeg`) caricata e funzionante su GitHub Pages
- **Galleria foto** (sezione "Galleria"): 18 foto (`gallery_01…15.jpg` + le 3 della landing), griglia a colonne con ingrandimento a schermo intero (frecce, Esc, tastiera). Foto convertite in JPEG da 1800 px per il web. Al momento i video non sono presenti nel sito.
- **Form contatti (Formspree) configurato**: Form ID `xwlkpkko` inserito in `index.html`, form attivo e funzionante

## Come aggiungere foto alla galleria

1. Esportare le foto in JPEG (circa 1800 px sul lato lungo, qualità ~80) e metterle in `media/` con nome `gallery_NN.jpg`
2. In `index.html`, nella sezione `gallery-grid`, copiare un blocco `<button class="gallery-item reveal" …>` aggiornando `data-index`, `src`, `alt`, `width` e `height`
3. Caricare su GitHub `index.html` e le nuove foto dentro `media/`

Nessuna modifica a `script.js`: il lightbox legge in automatico tutte le foto della griglia.

## Da fare

- Video: rimossi per ora dal sito. Quando saranno pronti si reinserisce una sezione video (file in `media/`).

## Come pubblicarlo / aggiornarlo

Il sito è già online su GitHub Pages: https://gabrpp-afk.github.io/stormtroopers-sito/

Per aggiornarlo: caricare i file nuovi/modificati su `github.com/gabrpp-afk/stormtroopers-sito` tramite **Add file → Upload files** (sovrascrivendo i file esistenti con lo stesso nome). Se si aggiungono file media, vanno trascinati dentro la cartella `media/` per mantenere i percorsi corretti.

Nota: i nomi file sono case-sensitive su GitHub Pages — devono corrispondere esattamente a quelli referenziati nel codice.

## Dominio personalizzato (opzionale, a pagamento)

Per un indirizzo tipo `www.asdstormtroopers.it`:

- Registrare il dominio (Register.it, IONOS, Namecheap — indicativamente 10-15€/anno per un `.it`)
- GitHub Pages permette di collegare un dominio personalizzato gratuitamente dalle impostazioni del repo (Settings > Pages)

## Costi complessivi

| Voce | Costo |
|---|---|
| Sito e hosting (GitHub Pages) | Gratuito |
| Form contatti (Formspree, piano free) | Gratuito fino a 50 messaggi/mese |
| Dominio personalizzato `.it` | Opzionale, ~10-15€/anno |

## Provare il sito

Il sito è già online: https://gabrpp-afk.github.io/stormtroopers-sito/ — il form di contatto (Formspree) funziona direttamente da lì.

## Log verifiche

- **16/09/2026** — verificato allineamento tra repo GitHub (branch `main`) e sito pubblicato su GitHub Pages: `index.html`, `style.css`, `script.js` coincidono, form Formspree confermato attivo e funzionante con ID `xwlkpkko`.
- **16/10/2026** — allineati locale e GitHub (`index.html`, `style.css`, `script.js`, cartella `media/`). Rimossa la sezione video, aggiunta la galleria foto con lightbox (18 foto).
