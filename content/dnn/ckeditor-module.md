/*
Title: CKeditor for DNN - Custom stuff
Sort: 4
*/

- [CKeditor postavke](#ckeditor-postavke)
- [CKeditor template](#ckeditor-template)

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

### CKeditor template
#### Add Custom Template

This is a Quick How to Define Custom Templates for the Editor
* Create locally a file called MyTemplates.xml or MyTemplates.js (XML is the Recommended format).
* And add the Content bellow...
* The "imagesBasePath" attribute relative Path of Your Portal Home directory where you store the Template image files which can be defined for every template. The Image, must be uploaded manually to the folder.
* Now you can customize the templates as you like
* When done that must be uploaded to the Portal Home directory and selected in "Editor Templates File" in the Editor Options under Editor Templates.
