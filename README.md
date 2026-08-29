# Sito ASD Storm Troopers

Sito statico (HTML/CSS/JS, nessun backend necessario), già personalizzato con i dati dell'associazione.

**Sito pubblicato:** https://gabrpp-afk.github.io/stormtroopers-sito/
**Repo GitHub:** gabrpp-afk/stormtroopers-sito (branch `main`)

## File

- `index.html` — struttura e contenuti
- `style.css` — tema multicam tan/marrone, font Oswald + Inter
- `script.js` — menu mobile, animazioni allo scroll, anno footer
- `media/` — cartella dove inserire i video

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
- **Form contatti (Formspree) configurato**: Form ID `xwlkpkko` inserito in `index.html`, form attivo e funzionante

## Cosa manca prima della pubblicazione completa

### Video — DA FARE

I 3 riquadri video nella sezione "Media" puntano a `media/video1.mp4`, `video2.mp4`, `video3.mp4`, ma questi file non sono mai stati caricati su GitHub (danno errore 404 sul sito pubblicato).

1. Caricare i 3 file video reali nella cartella `media/` del repo, con esattamente questi nomi: `video1.mp4`, `video2.mp4`, `video3.mp4`
2. Sostituire i titoli placeholder `[Titolo evento 1]`, `[Titolo evento 2]`, `[Titolo evento 3]` in `index.html` con i titoli veri

Finché non è fatto, i contatti restano comunque raggiungibili via email diretta, WhatsApp e ora anche via form (Formspree attivo).

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
