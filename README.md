# Boris Lahoš • Cybersecurity Portfolio

Profesionalni statički portfolio sa fokusom na cybersecurity, penetration testing, CTF aktivnosti, volonterski/community angažman i proof-based prikaz rada.

## Struktura projekta

```text
Portfolio/
|-- index.html
|-- cv.css
|-- script.js
|-- README.md
|-- test.txt
`-- public/
    |-- docs/
    |   `-- README.md
    `-- images/
        |-- README.md
        |-- ctf/
        |   |-- README.md
        |   `-- ctf-proof-placeholder.svg
        |-- og/
        |   `-- og-preview.svg
        |-- profile/
        |   |-- README.md
        |   `-- profile-placeholder.svg
        |-- projects/
        |   |-- README.md
        |   `-- project-proof-placeholder.svg
        |-- qr/
        |   |-- README.md
        |   `-- portfolio-qr-placeholder.svg
        `-- volunteering/
            |-- README.md
            `-- volunteering-proof-placeholder.svg
```

## Kako pokrenuti lokalno

1. Otvori folder projekta.
2. Najjednostavnije: otvori `index.html` direktno u browseru.
3. Ako želiš lokalni server:
   - u VS Code koristi Live Server
   - ili pokreni `python -m http.server 8000`
4. Otvori `http://localhost:8000` ako koristiš lokalni server.

## Dependencies

- Nema runtime dependencies ni build koraka.
- Sajt je čist `HTML + CSS + JavaScript`.
- Google Fonts se učitavaju spolja radi tipografije (`Sora` i `IBM Plex Mono`).

## Gde menjaš sadržaj

- `script.js`
  - Ovde menjaš gotovo sav sadržaj sajta.
  - Sekcije `skills`, `projects`, `competitions` i `volunteering` su data-driven.
  - Tu menjaš opise, tehnologije, datume, linkove i putanje do proof slika.

- `index.html`
  - Menjaš SEO meta tagove, osnovni raspored sekcija i statičke blokove kao što su hero, education, contact i CV/QR sekcija.
  - Tu su i jasni komentari:
    - `PLACE YOUR PROFILE IMAGE HERE`
    - `PLACE YOUR CV PDF HERE`
    - `PLACE YOUR QR IMAGE HERE`

- `cv.css`
  - Menjaš vizuelni identitet, raspored, responsive ponašanje i animacije.

- `public/images/projects/`
  - PLACE YOUR PROOF IMAGES HERE za projektne screenshotove i dijagrame.

- `public/images/ctf/`
  - PLACE YOUR PROOF IMAGES HERE za scoreboard slike, task dashboard ili writeup screenshotove.

- `public/images/volunteering/`
  - PLACE YOUR PROOF IMAGES HERE za fotografije sa događaja, akreditacije i zvanične objave.

- `public/images/profile/`
  - Zameni `profile-placeholder.svg` svojom profesionalnom fotografijom.

- `public/images/qr/`
  - Zameni `portfolio-qr-placeholder.svg` stvarnim QR kodom ka deploy-ovanom portfolio sajtu.

- `public/docs/`
  - Dodaj svoj CV kao `boris-lahos-cv.pdf`.

## Kako dopunjavaš proof sadržaj

1. Ubaci sliku u odgovarajući folder unutar `public/images/`.
2. Otvori `script.js`.
3. U `images` nizu odgovarajućeg projekta, CTF-a ili angažmana promeni `src`, `alt` i `caption`.
4. Sačuvaj i osveži stranicu.

## Napomene

- Portfolio je namerno postavljen kao ozbiljan, dokaziv i prilagođen slanju iz CV-ja preko QR koda.
- Ako kasnije pređeš na hosting, preporuka je da dodaš pravi `og:image`, favicon i finalni URL.
