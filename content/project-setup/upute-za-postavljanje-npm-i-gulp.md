/*
Title: Upute za postavljanje NPM i Gulp.js unutar projekta
Sort: 1
*/

Nemojte samo copy/paste-ati package.json i gulpfile.js datoteke i misliti da će odmah sve magično raditi !!!!

## Upute:

- Prebacite **package.json** i **gulpfile.js** u root folder projekta npr. D:/Materijali/Sistemi/Website/Dev/v1/Web

### 1. NPM (package.json datoteka)

- Otvorite **package.json** datoteku u vama preferiranom IDE editor-u
- Unutar **package.json** datoteke su zapisani pozivi za Sass i LESS. Ovisno o vrsti projekta izbrišite jednu ili drugu stavku koju ne koristite. Nemojte ostaviti Sass poziv ako koristite LESS i obrnuto.
- Nakon što ste izmijenili i spremili package.json datoteku otvorite komandu liniju (administrator mode) u root folderu gdje se nalazi package.json npr. D:/Materijali/Sistemi/Website/Dev/v1/Web
- Upišite komandu **npm install**
- Pričekajte dok se instalacija ne izvrši

### 2. Gulp.js (gulpfile.js datoteka)
- Otvorite **gulpfile.js** datoteku u vama preferiranom IDE editor-u
- Unutar **gulpfile.js** datoteke su zapisani pozivi za Sass i LESS. Ovisno o vrsti projekta izbrišite jednu ili drugu stavku koju ne koristite. (linija 17 i 18)
- Unutar **gulpfile.js** datoteke se nalazi varijabla 'skinPath' koja određuje putanju do foldera sa skin paketom. Promijenite putanju da odgovara vašem projektu
- Unutar **gulpfile.js** se nalaze dva task-a pod imenom 'styles' za generiranje u css
- Ukoliko koristite Sass izbrišite task **'styles'** koji se odnosi na LESS (komentar Compile LESS to CSS)
- Ukoliko koristite LESS izbrišite task **'styles'** koji se odnosi na Sass (komentar Compile Sass to CSS)
- Zatim task **'styles'** izmijenite da odgovara vašem projektu. Provjerite naziv foldera gdje se nalaze LESS/Sass datoteke i naziv, ekstenziju glavne LESS/Sass datoteke.
- Unutar **gulfile.js** se nalazi task 'serve'
- Izmijenite putanju u stavci **'proxy'** da odgovara domeni vašeg lokalnog projekta.
- Na stavci **gulp.watch** provjerite naziv foldera i ime extenzije (defaultno piše sass,css - ukoliko se koristi LESS promijenite ekstenziju u less,css)
- Otvorite komandu liniju u root folderu gdje se nalazi gulpfile.js npr. D:/Materijali/Sistemi/Website/Dev/v1/Web
- Upišite komandu **gulp styles**
- Provjerite da li se css dobro izgenerirao
- Upišite komandu **gulp watch**
- Provjerite da li se browsersync dobro pokrenio
