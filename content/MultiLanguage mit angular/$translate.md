/*
Title: Multilanguage sites, different examples!
*/

I was developing a cordova angular/kendo mobile application. One of the user requests was a multilanguage website / mobile application.
I know there are many ways you can do this but I chose angular, and now I will guide you through the process step by step.





| Link  | Description  |                       
| -------  | ---------------- |
|[I learned it here ](http://www.sitepoint.com/multilingual-support-for-angularjs/ "Start here!")  |  A very good guide explaining everything|


So I started with the guide above, after I finished it I wanted to use what I learned so that I could fortify my knowledge.

.json file
```json
{
  "BANKOMATI": "ATMs",
  "POSLOVNICE": "Branches",
  "NOTIFIKACIJE": "Notifications",
  "CONTACT": "Contact us!",
  "CLOSEST": "Near by",
  "CITY": "Group by city",
  "MAP": "GMap",
  "HOME": "Home",
  "IN": "in",
  "DETAILS": "Details",
  "CALL_CENTER": "Call center",
  "EMAIL_US": "E-mail us",
  "CONTACT_FORM": "Contact form",
  "DETALJI": "Details",
  "FLAG_ICON": "kendo/translations/flags/United-Kingdom.png",
  "FLAG_NAME": "English"
}
```
 
 **Table of Contents**

1. [Using it as a filter](#filter)
- [Using it as a attribute ](#attribute)



## Filter
The following example shows you how to use $translate filter inside the controller.

I wanted to change the title of one of my kendoAngular mobile views.
```html
<kendo-mobile-view id="kontaktPage"
                   ng-controller="formsController"
                    k-title="langF"
                   k-transition="'slide'"
                  >
```




```js
   function langF() {
            var newVal = $translate.instant('CONTACT');
            console.log(newVal);
            return newVal;
        }

```

## Attribute
I changed my navigation footer using the translate attribute.

```html
    <kendo-mobile-footer>
        <kendo-mobile-tab-strip>
            <a href="/" data-icon="custom"><span translate="HOME"></span></a>
            
            <a href="kendo/views/najbliziObjekti.html#najbliziObjekti?id={{tip}}" data-icon="action">
                <span translate="CLOSEST"></span>
            </a>
            </a>
            <a href="kendo/views/groupBy.html#groupBy?id={{tip}}" data-icon="favorites">
                <span translate="CITY">
                </span>
            </a>
            <a href="kendo/views/navigacija.html#navigacija?id={{tip}}" data-icon="search">
                <span translate="MAP">

                </span>
            </a>
        </kendo-mobile-tab-strip>
    </kendo-mobile-footer>
```





