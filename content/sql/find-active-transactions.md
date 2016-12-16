/*
Title: How to check active transactions on SQL Server
Sort: 1
*/

Find active transactions on SQL Server

* Query with sys.sysprocesses:

`SELECT * FROM sys.sysprocesses WHERE open_tran = 1`

* Using DBCC OPENTRAN:

`DBCC OPENTRAN`

> helps to identify active transactions that may be preventing log truncation. 
> DBCC OPENTRAN displays information about the oldest active transaction and the oldest distributed and nondistributed replicated transactions, if any, within the transaction log of the specified database
> Results are displayed only if there is an active transaction that exists in the log or if the database contains replication information. 
An informational message is displayed if there are no active transactions in the log.

* Using sys.dm_tran_active_transactions:

`sys.dm_tran_active_transactions`

> Syntax Legend:
![Syntax](https://i.stack.imgur.com/eCTUJ.png)