/*
Title: How to use google recaptcha in cordova application
*/

I was developing a cordova angular/kendo mobile application. One of the user requests was a contact form.
I wanted to implemenet google reCAPTCHA as a prevention from bot attacks.
The only way to implement a reCAPTCHA in a cordova/phonegap application is with a secure token.


| Link  | Description  |                       
| -------  | ---------------- |
|[Google reCAPTCHA ](https://www.google.com/recaptcha/admin#list "reCAPTCHA admin interface!")  |  reCAPTCHA admin interface |
|[reCAPTCHA docs](https://developers.google.com/recaptcha/intro?hl=en "reCAPTCHA docs")             |  How to use reCAPTCHA ?   |
|[Secure token](https://developers.google.com/recaptcha/docs/secure_token "Secure token docs")   |  Secure token docs|



After two days I was finnaly able to figure out how to make reCAPTCHA work inside a cordova app.

 
 **Table of Contents**

1. [Register your app on google](#register-for-recaptcha "1. part")
- [Google stackoverflow for 2 days ](#stackoverflow)



## Register for recaptcha
So the first thing you need to do is go on google reCAPTCHA admin interface and press the big <span style="color:blue">blue button </span>_Get reCAPTCHA_. 
Login using your google account.
After  that you will get to the admins interface where you will register your site.

**The process is simple**
1. Give your new site a label
-  Enter the domain name(s) where you will use  reCAPTCHA

## Stackoverflow
Thanks to me you don't have to waste your time searching stackoverflow for answers.
So here is what I got!

The part where I figured out
[ **_what to use!_**](http://stackoverflow.com/questions/32611205/recaptcha-usage-in-cordova-phonegap-application "First hope") 

The part where I figured out
[**_how to use!_**](http://stackoverflow.com/questions/31794193/google-recaptcha-v2-encryption-in-vb-net "Second hope")


**_What to use_**

So basically you have to use a secure json token in the following format : 
```js
  {"session_id": "e6e9c56e-a7da-43b8-89fa-8e668cc0b86f", "ts_ms": 1421774317718}
```
After you encrypt it, you get something like :
```js
    "Fg2rtWDZ6kf_Cc1fZs5xKJWnkkVvZgNCF-5fVhPS5_r1fB2NRXPg3WobIUUsyOvfN-ElyBz3zz29lK5v9NE0ByWrGzicUWecnoV8hwSb6W4"

```
But how can you do this?
Well you have to use something called **AES** encryption/decryption. 

More on the topic 
[I googled for you!](https://www.google.hr/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=aes%20encryption )

**_How to use_**
```cpp
serverSide(siteKey,secretKey,response)
```

I have implemented a webApi that returns the encrypted token.
[Code  used](https://github.com/xantari/RecaptchaV2.NET)

To generate the token you need  Secret and Site key which are provided by google reCAPTCHA admin interface.

```cpp
clientSide(reCAPTCHA api,token)
```
On the client side if you are using angular and kendo which I do, you need to do the following.
1. HTML
```html
<div class="g-recaptcha" data-sitekey="{{your site key}}" data-stoken="{{secureToken}}"></div>
```
- Load the reCAPTCHA api 
```js
$scope.secureToken;
      if (typeof Recaptcha == "undefined") {
           
                $.getScript('https://www.google.com/recaptcha/api.js');
                //jquery script fetch
        }
        activate();
        function activate() {

            return getSecureToken().then(function () {
            //the web api returns and array of letters
            //you need to combine these letters in one string
                var stringify = "";
                for (var i = 0 ; i < $scope.secureToken.length; i++) {
                    stringify += $scope.secureToken[i];
                }
                $scope.secureToken = stringify;
                $scope.$apply();
                //apply the changes 
                return $scope.secureToken;
            });
        }

        function getSecureToken() {
            return getStatusApi.getSecureToken.fetch(function () {
                //this is my kendo data source which calls the webApi.
            }).then(function () {
                $scope.secureToken = getStatusApi.getSecureToken.view();
                return $scope.secureToken;
            });
        };
```


