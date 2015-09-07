/*
Title: ODBC Encoding fix
Sort: 3
*/

I couldnt read č ć (Croatian letters) from the database so setting up encoding to __utf8__ inside ODBC Data Source Administrator tool settings fixed it:

![Fix](https://cloud.githubusercontent.com/assets/13118003/9715759/db1da6ca-5563-11e5-9844-47b38930d4a6.png)
