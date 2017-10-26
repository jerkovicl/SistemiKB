/*
Title: Changing the default date locale to croatian for Kendo admin
*/

#### To change default locale to Croatian you need to do the following:

- Find and open file: 
```
'src/Presentation/Nop.Web/Administration/Views/Shared/_AdminLayout.cshtml'
```

- Add line: 
```html
'Html.AppendScriptParts(string.Format("~/Administration/Scripts/kendo/{0}/cultures/kendo.culture.hr-HR.min.js", kendoVersion));' 
```

- just under: 
```html
Html.AppendScriptParts(string.Format("~/Administration/Scripts/kendo/{0}/kendo.web.min.js", kendoVersion));
```

- then add line bellow to just before closing </head> tag:
```js
<script type="text/javascript">
  //set kendos current culture to the "hr-HR" culture script
  kendo.culture("hr-HR");
</script>
```

**Make sure the locale is the same as the one you have used above).**

For more information follow the topic [here](https://www.nopcommerce.com/boards/t/2653/how-to-change-date-format-for-admin-interface.aspx?p=6).
