/*
Title: Outlook not sending Images fix
*/

Press  windows key + r , then write regedit press enter.

![Minion](https://i.imgur.com/kMFjbD4.png)

Registry editor opens.
Navigate to HKEY_CURRENT_USER\SOFTWARE\Microsoft\Office\16.0\Outlook\Options

Once in the Options look for Mail.
If it does not exist right Click -> New -> key -> name it Mail with capital M.
Right Click on the right side of the Registry editor -> New -> DWORD (32-bit) Value -> **S**end **P**ictures **W**ith **D**ocument
WITH CAPITAL ** _S P W D_**
Right Click on the new key and change its value to **1**.


