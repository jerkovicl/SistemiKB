/*
Title: CKeditor for DNN - Custom stuff
Sort: 4
*/

- [CKeditor postavke](#ckeditor-postavke)
- [CKeditor predlošci](#ckeditor-predlosci)

### CKeditor postavke

- Unutar "Editor Config" pretraži "StylesSet" i dodaj npr.
```
[
    // Block Styles

    // Inline styles
    { name: 'Boja: Zelena',   element: 'span',    attributes: { 'class': 'color--primary' } },
    { name: 'Boja: Zlatna',   element: 'span',    attributes: { 'class': 'color--secondary' } }

    // Object Styles
]
```

- Unutar "Editor Config" pretraži "ExtraAllowedContent" i dodaj: [ref link](http://drupal.stackexchange.com/questions/90710/prevent-wysiwygckeditor-from-stripping-html-classes)
```
span;ul;li;table;td;style;*[id];*(*);*{*}
```

- Ako se span, icon ili button klase ne ispisuju idi u "Editor Config" > "Protected Source" i izbriši sadržaj npr.:
```
[( /<i class[\s\S]*?>/g ),( /<\/i>/g ),( /<span class[\s\S]*?>/g ),( /<\/span>/g ),( /<em class[\s\S]*?>/g ),( /<\/em>/g ),( /<button class[\s\S]*?>/g ),( /<\/button>/g )]
```

### CKeditor predlošci
#### Dodavanje novih predložaka

* Unutar Portal foldera (npr. Portals/0/) kreirati datoteku nazvanu npr. "MyTemplates.xml" ili "MyTemplates.js" (XML je preporučeni format).
* Unutar datoteke je potrebno dodati sadržaj:
#### XML Format

```
<?xml version="1.0" encoding="utf-8" ?>
<Templates imagesBasePath="/Portals/0/images/templates/" templateName="default">
  <Template image="tech-specs.gif" title="Članak - okvir">
    <Description>Predložak za okvir članka</Description>
    <Html>
      <![CDATA[
        <div class="article__more-about">
            <p><strong>Unesite naslov</strong></p>
            <p>Unesite tekst Unesite tekst Unesite tekst Unesite tekst Unesite tekst Unesite tekst Unesite tekst Unesite tekst Unesite tekst Unesite tekst Unesite tekst Unesite tekst Unesite tekst Unesite tekst Unesite tekst Unesite tekst</p>
        </div>
      ]]>
    </Html>
  </Template>
</Templates>
```
* "imagesBasePath" je relativna putanja do sličica koje će se prikazivati u izboru predložaka. Slika se mora manualno prebaciti u navedeni folder.
* Da bi se predložak koristio potrebno je na portalu odabrati predložak pod "Editor Templates File" u Editor Options ispod Editor Templates.
* Više informacija: [CKEditor™ Provider for DNN](https://dnnckeditor.codeplex.com/wikipage?title=Add%20Custom%20Template)
