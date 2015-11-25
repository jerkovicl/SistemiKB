/*
Title: Building  Angular & Kendo mobile applications
*/

I created a simple mobile app using kendo & angular.
You can start with these links. 


| Link  | Description  |                       
| -------  | ---------------- |
|[KendoAngular Sushi tutorial](http://docs.telerik.com/kendo-ui/mobile/angular/sushi-angular-tutorial "Visit the tutorial!")  |  First thing you need to go through.|
|[List of directives](http://docs.telerik.com/kendo-ui/mobile/angular/angular "AngularKendo directives")             |  List of AngularKendo Directives.   |
|[How to use the directives](http://docs.telerik.com/kendo-ui/mobile/angular/angular "How to use directives")               |  How to use AngularKendo directives?|



After completing the tutorial I started building my first Mobile application.
 I will list some tips and tricks on how to use kendo.mobile with angular.
 
 **Table of Contents**

- [Change skin](#change-skin)
- [All about buttons ](#all-about-buttons)
- [Go to the start or end of a line](#go-to-the-start-or-end-of-a-line)
- [Go to start or end of a file](#go-to-start-or-end-of-a-file)
- [Go one word left or right](#go-one-word-left-or-right)
- [Go up or down a line](#go-up-or-down-a-line)
- [Adding multiple Carets](#adding-multiple-carets)
- [Wrap with Quotes or Brackets](#wrap-with-quotes-or-brackets)
- [Column selection](#column-selection)
- [Carets and matching words](#carets-and-matching-words)
- [Jump to matching brackets](#jump-to-matching-brackets)
- [Indentation](#indentation)
- [Quickly comment your code](#quickly-comment-your-code)
- [Toggle Autocompletion](#toggle-autocompletion)
- [Cut/Copy/Paste/Undo/Redo](#cutcopypasteundoredo)
- [Increment and Decrement values](#increment-and-decrement-values)
- [Cycle through editing locations](#cycle-through-editing-locations)

## Change skin
The default skin changes based on the **DEVICE**  which means that if you use an **android device** you will get the default Android skin 'android' 
and if you use a **IOS device** you will get the default IOS skin 'ios7' one.
List of skins and how to use them with Angular directives.

**Device based**
+ Android
    - android-light
    - android _cordova default_
+ IOS
    - ios _old looking skin I dont like it_
    - ios7 _newer looking skin cordova default_ 
+ Wp
    - wp _cordova default_( kendo-back-button not working. )
    
**Platform Agnostic Skin**
+ flat _I liked and used this one._
+ nova
+ material
+ fiori
+ office365
[Official docs](http://docs.telerik.com/kendo-ui/mobile/styling "Official documentantion") 


**_HOW TO_**

Use the **k-skin** directive together with **kendo-mobile-application**
```html
<body kendo-mobile-application k-hash-bang="true" ng-app="statusPoslovnicaBankomata" k-skin="'flat'">
```
## All about buttons 

**Create button groups**
```html
<kendo-mobile-button-group id="test">
            <kendo-mobile-button id="1"></kendo-mobile-button>
            <kendo-mobile-button id="2"></kendo-mobile-button>
</kendo-mobile-button-group>        
```
**External button**

data-rel="external"
```html
<kendo-mobile-button data-rel="external" target="_system" href="#" onclick="window.open('link')"></kendo-mobile-button> <!-Opens systems default mobile browser--->                                
```
**Open view(including html)**
```html
<kendo-mobile-button  href="kendo/views/test.html"></kendo-mobile-button>
```
**Send data to the view  and get data in the view**

viewid is the id of the view you are calling in this case it is test.html

dataToSend is the data you want to send to the view

SEND
```html
<kendo-mobile-button  href="kendo/views/test.html# viewId ?dataToSend=1"></kendo-mobile-button>
```
GET
```html
<kendo-mobile-view id="viewId"                  
                   ng-controller="controller"                  
                   k-on-show="test(kendoEvent)">
```
Inside of Angular controller
```js
   function test(kendoEvent) {
            var test=parseInt(kendoEvent.view.params.dataToSend);
        };
```
**Add icon to button**
```html
<class="km-icon km-more">
```




                                
<!--//And in the Azure app settings of your website/app add a new app setting to match that in the picture below.
//![App Settings](%image_url%/appsettings.png)-->
