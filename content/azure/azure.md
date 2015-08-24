/*
Title: Using Node.js with Raneto in Azure
Sort: 1
*/

Azure sets the path differently than Node has as a default. By default Node sets the working directory to that of the app.js file. But in Azure, it sets it to the bin folder, so add the following lines of code right before the exports line of config.js file to fix the problem.

```
... config stuff ...

if(process.env.azure)
    config.content_dir = '../content/';

module.exports = config;
```
And in the Azure app settings of your website/app add a new app setting to match that in the picture below.
![App Settings](%image_url%/appsettings.png)
