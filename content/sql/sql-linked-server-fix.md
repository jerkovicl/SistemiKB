/*
Title: SQL Linked Server Oracle Fix
Sort: 1
*/

- When trying to connect to Linked Server if you get the error like the one shown below check this [site](http://wiki.servicenow.com/index.php?title=Using_ODBC_Driver_in_SQL_Server#gsc.tab=0) for some tips & tricks
 
<pre>
cannot initialize the data source object of OLE DB provider MSADSQL for linked server 
specified driver could not be loaded due to system error 1114 (Oracle in OraClient12Home1) SQL Server, Error 7303
</pre>

 - The usual culprit is __Allow In Process__ option found inside __Security__ section of __MSDASQL__ Provider settings (Server Objects > Linked Server > Providers > Microsoft OLE DB Provider for ODBC Drivers).
 - Option needs to be set to __False__ so that provider runs in out-of-process mode and doesn't result in crashing the SQL server

 ![Settings](http://wiki.servicenow.com/images/3/31/Sqlserver_provider_options.jpg)