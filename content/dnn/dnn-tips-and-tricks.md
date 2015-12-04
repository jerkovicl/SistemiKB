/*
Title: DotNetNuke – Developer Tips and Tricks
Sort: 1
*/

#### Changing the current page title, description, keywords, metadescription and metakeywords

```
using DotNetNuke.Framework;

protected void Page_Load(object sender, EventArgs e)
{
    try
    {
        var tabPage = (CDefault)Page;
        tabPage.Title = "My New Page Title";
        tabPage.Description= "My New Page Description";
        tabPage.KeyWords = "Page, Title, DotNetNuke"
    }
    catch (Exception exc) //Module failed to load
    {
        Exceptions.ProcessModuleLoadException(this, exc);
    }
}
```

#### Include css and js files into your view

I find the best way to include StyleSheets and JavaScript files into my view is to use the DnnCssInclude and DnnJsInclude elements. What you will need to do is reference the below DotNetNuke assemblies.
```
> ClientDependency.Core.dll
  DotNetNuke.Web.Client.dll
```

Then in your view.ascx file include the following:

```
<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="View.ascx.cs" Inherits="IntenseGaming.Modules.eSportsPro.View" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<dnn:DnnCssInclude runat="server" ID="cssBootstrap" FilePath="~/DesktopModules/eSportsPro/Resources/bootstrap.min.css" Priority="90" />
<dnn:DnnCssInclude runat="server" ID="cssBootstrapTheme" FilePath="~/DesktopModules/eSportsPro/Resources/bootstrap-theme.min.css" Priority="100" />
<dnn:DnnJsInclude runat="server" ID="jsBootstrap" FilePath="~/DesktopModules/eSportsPro/Resources/Bootstrap.min.js" Priority="100" />
```

For more information about regarding the DnnCssInclude or DnnJsInclude please see the DotNetNuke wiki page [Client Resource Management API](http://www.dnnsoftware.com/wiki/client-resource-management-api)
