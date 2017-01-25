/*
Title: How to fix error - HTTP Error 503. The service is unavailable. App pool stops on accessing website
Sort: 2
*/


##### Error:

`HTTP Error 503. The service is unavailable. App pool stops on accessing website`

##### Solution:
- Check your __Windows__ __Event__ __Viewer__ , press `Win+R` and type: `eventvwr`, then press ENTER.
- On the left side of __Windows__ __Event__ __Viewer__ click on `Windows Logs -> Application`.
- Now you need to find some __ERRORS__ for source `IIS-W3SVC-WP` in middle window.
- Probably you will see message like: `The Module DLL >>path-to-DLL<< failed to load. The data is the error.`
- You have to go to `Control Panel -> Program and Features` and depending on which dll cannot be load you need to repair another module:  

> for __rewrite.dll__ - find `IIS URL Rewrite Module 2` and click __Change->Repair__

> for __aspnetcore.dll__ - find `Microsoft .NET Core 1.0.0 - VS 2015 Tooling` ... and click __Change->Repair__.

- Restart your computer.
