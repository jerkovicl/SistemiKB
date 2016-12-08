/*
Title: Identify SQL Server TCP IP port being used
Sort: 1
*/

Quick way to find port of SQL Server instance:

```
USE master
GO
xp_readerrorlog 0, 1, N'Server is listening on', 'any', NULL, NULL, N'asc' 
GO
```

> More info and alternative ways [here](https://www.mssqltips.com/sqlservertip/2495/identify-sql-server-tcp-ip-port-being-used/)

