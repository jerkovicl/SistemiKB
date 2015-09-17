/*
Title: How to Write a Custom DotNetNuke SchedulerClient (i.e. a Scheduled Task)
Sort: 1
*/

### Sub-Class From SchedulerClient

All of your scheduled tasks begin by sub-classing from the DotNetNuke.Services.Scheduling.SchedulerClient class.

Example:

```
class ScheduledTaskExample : SchedulerClient
```

### Overload Your Class Constructor

The next thing that DotNetNuke requires from a scheduled task is an overloaded constructor that accepts a DotNetNuke.Services.Scheduling.ScheduleHistoryItem object.   This overloaded constructor must also call the constructor of its parent class. This is done by using the base() syntax in C#.
The final thing that your constructor must do is assign the ScheduleHistoryItem parameter to the ScheduleHistoryItem property of the class.  
Here is an example of a constructor that meets these requirements:

Example:
```
public ScheduledTaskExample(ScheduleHistoryItem objScheduleHistoryItem)
    : base()
{
    ScheduleHistoryItem = objScheduleHistoryItem;
}
```
### Override DoWork() Method

The DoWork() method is the entry point for the execution of your scheduled task.  
When the DotNetNuke portal determines that it is time for your scheduled task to run, it creates an instance of your class and calls its DoWork() method.  
So this is where you put all your custom functionality.

There are a few things to keep in mind when writing this method.   
First, you need to include logic that alerts the portal to whether or not your task succeeded at whatever it needed to do.  
The way you do this is by enclosing your code within a try-catch block.  
If your code runs as planned, then you set the Succeeded property of the ScheduledHistoryItem member to true.  
Otherwise, you set the Succeeded property to False.  
In the catch portion of your try-catch block you will also want to set the Succeeded property to False so that when an exception is thrown, the scheduled task will report that it failed.

Example:
```
public override void DoWork()
{
    try
    {
        // do some stuff ...

        // then report success to the scheduler framework
        ScheduleHistoryItem.Succeeded = true;
    }

    // handle any exceptions
    catch (Exception exc)
    {
        // report a failure
        ScheduleHistoryItem.Succeeded = false;

        // log the exception into
        // the scheduler framework
        ScheduleHistoryItem.AddLogNote("EXCEPTION: " + exc.ToString());

        // call the Errored method
        Errored(ref exc);

        // log the exception into the DNN core
        Exceptions.LogException(exc);
    }
}
```

You will notice in the examples above that there are a few other things you should do when an exception occurs.  
You should log the exception into the scheduler framework which allows you to view the exception in your scheduler's history page.  
This is done by calling the AddLogNote() method on the ScheduleHistoryItem member.  
Secondly, you need to call the parent class's Errored() method so it can take its own necessary actions.  
Lastly, you should log the exception into the DNN core exception log by calling the LogException method on the DotNetNuke.Services.Exceptions.Exceptions class.

### Compile & Install

Once you are finished overriding the DoWork() method you are ready to compile and install your new scheduled task.  
Compiling instructions will vary depending upon what tool and project type you are using, so I will not discuss those details here.  
Once you are compiled up into a DLL file you will want to copy the DLL file into the bin directory of your DNN Web site installation.

To install your new task you go into Host menu > Schedule  page and click on the Add Item to Schedule link.  
Then enter the full class name, followed by a comma, followed by the name of your DLL.  
Configure it up, hit Update, and you should be good to go.  

### Some Tips

Since scheduled tasks do not run in the context of a Web page execution, nor in the context of any particular DotNetNuke portal, you will often need to find alternative ways to access the information that your task requires. Instead of Server.Globals.MapPath() use System.Web.HttpRuntime.AppDomainAppPath to get the file path to your DNN installation. If your task uses some of the DNN framework methods that require you to pass the ID of a portal, then you can either use a PortalController to get all of the portal IDs and loop through them, or you can access particular portal IDs by storing and retrieving them using System.Configuration.ConfigurationSettings.AppSettings. AppSettings allows you to store configuration information inside the .config files within the .Net configuration hierarchy. Likewise for tab IDs and module IDs, you may have to manually store and retrieve these from in a .config file.

Another thing to keep in mind is that the Add/GetSetting methods on the ScheduleHistoryItem class really suck. You might be tempted to use it, but you'll quickly be scratching your head because there are no easy ways to update an existing setting.  
So you will need to find an alternate method to store settings for your scheduled task.  
Here is an example of a working scheduled task. It writes out a file to the root folder of your web application.

ScheduledTaskExample.cs:
```
using System;
using System.IO;
using System.Web;

using DotNetNuke.Services.Scheduling;
using DotNetNuke.Services.Exceptions;

namespace Kemmis.Examples.DotNetNuke
{
    class ScheduledTaskExample : SchedulerClient
    {
        public ScheduledTaskExample(ScheduleHistoryItem objScheduleHistoryItem)
            : base()
        {
            ScheduleHistoryItem = objScheduleHistoryItem;
        }

        public override void DoWork()
        {
            try
            {
                // perform some task                
                String strPath = HttpRuntime.AppDomainAppPath + "CS_DID_IT.TXT";
                using (StreamWriter sw = new StreamWriter(strPath, true))
                {
                    sw.WriteLine(DateTime.Now.ToString() + " - C# DID IT!");
                    sw.Close();
                }

                // report success to the scheduler framework
                ScheduleHistoryItem.Succeeded = true;
            }
            catch (Exception exc)
            {
                ScheduleHistoryItem.Succeeded = false;
                ScheduleHistoryItem.AddLogNote("EXCEPTION: " + exc.ToString());
                Errored(ref exc);
                Exceptions.LogException(exc);
            }
        }
    }
}
```
