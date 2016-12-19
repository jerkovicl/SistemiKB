/*
Title: Test Sending Email Without an SMTP Server
Sort: 1
*/

### **Tools to setup local SMTP server for your development**

- [Neptune](http://www.donovanbrown.com/post/Neptune-with-POP3)
- [SMTP4Dev](http://smtp4dev.codeplex.com/) - better choice because it lets you open email message in your default email client and can even check the formatting of sent email

### **Sample code to test functionality of these tools**

```
MailMessage mail = new MailMessage("test@gmail.com", "test2@gmail.com");
SmtpClient client = new SmtpClient();
client.UseDefaultCredentials = true;
client.Host = "localhost";
mail.Subject = "This is a fantastic email subject!";
mail.Body = "This is a fantastic email body!";
client.Send(mail);
```
> add using System.Net.Mail to the top of your .cs file
