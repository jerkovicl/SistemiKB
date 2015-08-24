/*
Title: Deploying on Azure from local git
Sort: 2
*/

From the cmd prompt pointing to your local git folder write these commands:

```
$ git init  
$ git add .  
$ git commit -m "init"  
$ git remote add azure https://jerkovicl@jerkoviclkb.scm.azurewebsites.net:443/jerkoviclKB.git  
$ git push azure master  
```

Next time you need to publish your local git changes to Azure only these commands will be enough:

```
$ git add .  
$ git commit -m "init"  
$ git push azure master  
```
