/*
Title: How to Implement google reCaptcha v2 inside of DNN webforms
*/

I wanted to implement google's Recaptcha v2 inside of DNN webforms. 




| Link  | Description  |                       
| -------  | ---------------- |
|[Google reCAPTCHA ](https://www.google.com/recaptcha/admin#list "reCAPTCHA admin interface!")  |  reCAPTCHA admin interface |
|[reCAPTCHA docs](https://developers.google.com/recaptcha/intro?hl=en "reCAPTCHA docs")             |  How to use reCAPTCHA ?   |
|[Assembly](http://www.codeproject.com/Tips/884193/Google-ReCaptcha-ASP-net-Control "Source,dll and how to")   |  Source code, dll and how to use|


 **Table of Contents**

1. [Register your app on google](#register-for-recaptcha "1. part")
- [Download the DLL](#download-DLL)



## Register for recaptcha
So the first thing you need to do is go on google reCAPTCHA admin interface and press the big <span style="color:blue">blue button </span>_Get reCAPTCHA_. 
Login using your google account.
After  that you will get to the admins interface where you will register your site.

**The process is simple**
1. Give your new site a label
-  Enter the domain name(s) where you will use  reCAPTCHA

## Download DLL
Thanks to me you don't have to waste your time searching stackoverflow for answers.
So here is what I got!

Go to the [Assembly](http://www.codeproject.com/Tips/884193/Google-ReCaptcha-ASP-net-Control "Source,dll and how to")




After you donwload the DLL you need to place it inside of your website/bin/ folder 

The part where I figured out
[ **_trick ONE UNIVERSAL !_**](#trick-one "first trick")

The part where I figured out
[**_trick TWO !_**](#trick-two "second trick")


## Trick one
Use this if you dont want to disable Partial rendering!
```cpp
 if (ctrlGoogleReCaptcha.Validate())
            {
              
                label1.Text = "success";
                //do your things

            }
            else
            {

                label1.Text = "err";
                Random x = new Random();
                int test = x.Next(1, 300);
                 ScriptManager.RegisterStartupScript(Page, Page.GetType(), "RemoveScriptTest", @"$('script').each(function(index) {"
                + "if (this.src.substring(0, 39) === 'https://www.gstatic.com/recaptcha/api2/' && index<2) {"
                 + "   $(this).remove();  }});", true);


                ScriptManager.RegisterStartupScript(Page, Page.GetType(), "RemoveScriptTest2", @"$('script').each(function(index) {"
+ "if (this.src.substring(0, 39) === 'https://www.google.com/recaptcha/api.js') {alert('REMOVING API:jS');"
 + "   $(this).remove();  }});", true);

                //ScriptManager.RegisterClientScriptInclude(this.Page, this.Page.GetType(), "test", "https://www.google.com/recaptcha/api.js");
                ScriptManager.RegisterClientScriptInclude(Page, Page.GetType(), "test", "https://www.google.com/recaptcha/api.js?onload=test"+test.ToString());

```
**The logic is **
1. Create a random number, why you ask? Read step 3.
-  Remove all recaptcha javascripts (gstatic and api.js)
- Include a new recaptcha Api script, it will render the captcha inside of first <div> that has class of g-recaptcha

**WHY THE RANDOM NUMBER**

Not exactly sure myself. There are some conflicts between ASP.NET Ajax updatePanels & jquery functions.


The Partial rendering option destroys all events. So you need to have 
ScriptManager.RegisterClientScriptInclude(Page, Page.GetType(), "test", "https://www.google.com/recaptcha/api.js?onload=test"+test.ToString());
exactly as IS.

This will work in every situation.


**For More on the topic**

Go to the [Conflicts between ASP.NET AJAX UpdatePanels & jQuery functions](http://weblogs.asp.net/hajan/make-them-to-love-each-other-asp-net-ajax-updatepanels-amp-javascript-jquery-functions "Conflicts between ASP.NET AJAX UpdatePanels & jQuery functions")

## Trick two

You have to disable the Partial rendering option for your register controll
You do this by going to HOST->Extensions->REGISTRATION->Edit pencil

**INSIDE OF REGISTRATION**
Open Module definitions ->Module controls->Account registration ->edit pencil

**INSIDE OF EDIT MODULE CONTROLL**
Disable Supports Partial Rendering?
By disabling this I AM NOT SURE WHAT can go wrong.

Now the ASP.NET Assemlby will work as expected
