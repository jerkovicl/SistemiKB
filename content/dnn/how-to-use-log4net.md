/*
Title: How to use LOG4NET in your DNN modules
Sort: 1
*/

> **Adding log4net to your modules**

> - The core DNN framework is utilizing log4net but your custom built applications will get the benefits from Exception.LogException() function posting to log4net automatically but you can implement more granular alerts by referencing log4net in your application.

> - Add a Reference to using DotNetNuke.Instrumentation.dll located in the bin directory of DotNetNuke
> - Now simply send the type of message alert you would like
> - See the full list of public functions on image below:
![Public Functions](http://www.dnnsoftware.com/Portals/0/Blog/Files/254/3474/Windows-Live-Writer-Using-log4net_A22B-image_4.png)

> **Example of sending debug log message:**

```
ILog logger = LoggerSource.Instance.GetLogger(typeof(ClassName)); //change ClassName with yours
logger.Error("Page Not found", exc);
```

> **Example of adding new appender to output DNN log statements in the standard ASP.net Trace Output for the page**
```
<?xml version="1.0" encoding="utf-8" ?>
<log4net>
  <appender name="RollingFile" type="log4net.Appender.RollingFileAppender">
    <file value="Portals/_default/Logs/" />
    <datePattern value="yyyy.MM.dd'.log.resources'" />
    <rollingStyle value="Date" />
    <staticLogFileName value="false" />
    <appendToFile value="true" />
    <maximumFileSize value="10MB" />
    <maxSizeRollBackups value="5" />
    <lockingModel type="log4net.Appender.FileAppender+MinimalLock"/>
    <layout type="log4net.Layout.PatternLayout">
      <conversionPattern value="%date [%property{log4net:HostName}][Thread:%thread][%level] %logger - %message%newline" />
      <locationInfo value="true" />
    </layout>
  </appender>
  <appender name="AspNetTraceAppender" type="log4net.Appender.AspNetTraceAppender" >
    <layout type="log4net.Layout.PatternLayout">
        <conversionPattern value="%date [%thread] %-5level %logger - %message%newline" />
    </layout>
</appender>
  <root>
    <level value="DEBUG" />
    <appender-ref ref="RollingFile" />
    <appender-ref ref="AspNetTraceAppender" />
  </root>
</log4net>
```
> - Some other examples you can see [here](http://logging.apache.org/log4net/release/config-examples.html)
