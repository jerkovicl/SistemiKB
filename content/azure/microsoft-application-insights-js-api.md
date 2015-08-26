/*
Title: Microsoft Application Insights JS API
Sort: 3
*/

**Table of Contents**

- [In the Azure portal, create a new Application Insights resource:](#in-the-azure-portal-create-a-new-application-insights-resource)
- [Get the snippet from Quick Start section:](#get-the-snippet-from-quick-start-section)
- [Insert the script snippet just before the ``</head>`` tag of every page you want to track:](#insert-the-script-snippet-just-before-the-head-tag-of-every-page-you-want-to-track)
- [API Methods](#api-methods)





**Update 28.05.2015** [New pricing change from June 1](http://azure.microsoft.com/blog/2015/05/27/application-insights-pricing-effective-june-1/)

**Since there is no official documentation, here is the proper setup to enable Microsoft Application Insights for Javascript/Cordova apps and websites:**

#### In the Azure portal, create a new Application Insights resource

![Azure](https://acomdpsstorage.blob.core.windows.net/dpsmedia-prod/azure.microsoft.com/en-us/documentation/articles/app-insights-javascript/20150508050839/01-create.png)

#### Get the snippet from Quick Start section

![Quick Start](https://acomdpsstorage.blob.core.windows.net/dpsmedia-prod/azure.microsoft.com/en-us/documentation/articles/app-insights-javascript/20150508050839/02-monitor-web-page.png)

#### Insert the script snippet just before the ``</head>`` tag of every page you want to track

- In an ASP.NET MVC project, you'd put it in View\Shared_Layout.cshtml

- If your JavaScript app isn't a web page - for example, if it's a Cordova app or a Windows Runtime app using JavaScript - insert an extra line after the instrumentation key:

```js
...{
    instrumentationKey:"00000000-662d-4479-0000-40c89770e67c",
    endpointUrl:"https://dc.services.visualstudio.com/v2/track"
} ...
```

- For AngularJS there's an [AngularJS module](http://ngmodules.org/modules/angular-appinsights).

- If you want to check the telemetry that a web app/site is sending to Application Insights, check with debugging tools for requests sent to **dc.services.visualstudio.com**.

#### API Methods

- Send page views:

```js
appInsights.trackPageView("name");
appInsights.trackPageView("name", "url");
appInsights.trackPageView("name", "url", { prop: "p1" });
```

- Send events:

```js
appInsights.trackEvent("exampleEvent1");
appInsights.trackEvent("exampleEvent2", { exampleEventProperty1: "test", another: "test2" });
appInsights.startTrackEvent("exampleTimedEvent");
setTimeout(function() {
  appInsights.stopTrackEvent("exampleTimedEvent");
}, 1000);
```

- Send metrics:

```js
appInsights.trackMetric("metricName", 42);
appInsights.trackMetric("metricName", 42, { prop: "test" });
```

- Send traces:

```js
appInsights.trackTrace("trace message 1");
appInsights.trackTrace("trace message 2", { prop: "test" });
```

- Send exceptions:

```js
appInsights.trackException("error message1");
appInsights.trackException(new Error("error message2"));
appInsights.trackException(new Error("error message2"), "locationWhereThisWasHandled?");
appInsights.trackException(new Error("error message3"), null, { prop: "test" });
```
