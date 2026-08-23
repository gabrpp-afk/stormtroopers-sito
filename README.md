# Sito ASD Storm Troopers

Sito statico (HTML/CSS/JS, nessun backend necessario), già personalizzato con i dati dell'associazione.

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

## Cosa manca prima della pubblicazione

### 1. Form contatti (Formspree) — DA FARE

Il form invia i messaggi tramite [Formspree](https://formspree.io) (gratuito fino a 50 invii/mese), così non serve un server.

1. Registrarsi gratuitamente su formspree.io (si può usare `stormtroopers.asd@gmail.com`)
2. Cliccare "+ New Form", impostare come destinatario `stormtroopers.asd@gmail.com`
3. Formspree fornisce un endpoint tipo `https://formspree.io/f/xxxxaaaa` — la parte dopo `/f/` è il **Form ID**
4. In `index.html` cercare `INSERISCI-IL-TUO-ID` e sostituirlo con il Form ID
5. Confermare l'email di verifica che Formspree invia, altrimenti i messaggi non arrivano

Finché non è configurato, il form non invia nulla: i contatti restano comunque raggiungibili via email diretta e WhatsApp, che sono già attivi.

### 2. Video

Inserire i file in `media/` con nomi `video1.mp4`, `video2.mp4`, `video3.mp4` (oppure cambiare i percorsi nella sezione "Media" di `index.html`). Vedere `media/README.txt` per i consigli su compressione e sull'alternativa YouTube per i video più pesanti.

Vanno anche sostituiti i titoli placeholder `[Titolo evento 1/2/3]` sotto ogni video.

## Come pubblicarlo gratis

Opzione più semplice: **GitHub Pages**.

1. Creare un account su github.com (gratis)
2. Creare un nuovo repository, es. `stormtroopers-sito`
3. Caricare tutti i file di questa cartella nel repository (via web: "Add file" > "Upload files")
4. Andare in Settings > Pages e selezionare il branch `main` come sorgente
5. Dopo un paio di minuti il sito sarà online su `https://nomeaccount.github.io/stormtroopers-sito`

Alternativa altrettanto semplice: **Netlify** (netlify.com) — si trascina la cartella sul loro sito e si ottiene un link online in pochi secondi, gratis.

## Dominio personalizzato (opzionale, a pagamento)

Per un indirizzo tipo `www.asdstormtroopers.it`:

- Registrare il dominio (Register.it, IONOS, Namecheap — indicativamente 10-15€/anno per un `.it`)
- Sia GitHub Pages che Netlify permettono di collegare un dominio personalizzato gratuitamente dalle rispettive impostazioni

## Costi complessivi

| Voce | Costo |
|---|---|
| Sito e hosting (GitHub Pages o Netlify) | Gratuito |
| Form contatti (Formspree, piano free) | Gratuito fino a 50 messaggi/mese |
| Dominio personalizzato `.it` | Opzionale, ~10-15€/anno |

## Provare il sito

Basta aprire `index.html` con un doppio click nel browser. Per testare il form di contatto serve però che il sito sia online (Formspree non funziona da file locale).
