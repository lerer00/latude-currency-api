# latude-currency-api

This is a simple api that serves as a Oracle endpoint. 
For now we are returning only static rates for CAD and USD but we'll need to support much more.

Here's the current returned format 
```
 CAD;397.05|USD;201.13
```

This api should be call at every hour from a deployed contract. 
