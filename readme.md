Usage
=====
var djiaList = require('djia-list');  
djiaList.fullList(callback);

That's it. It will return a JS object formatted:  
[{ ticker: 'AAPL'},  
{ticker: 'GOOG'},  
{ticker: 'MMM'}]  

But with all 30 Dow ticker symbols

Example
========

This will grab stock quotes from Yahoo Finance for the entire Dow 30
```
var djiaList = require('djia-list'),  
    yahooFinance = require('yahoo-finance');  

var myCallback = function(stockList) {    
        stockList.forEach(function(i)  {  
                console.log(i['ticker']);  
                yahooFinance.snapshot({  
                        symbol: i['ticker'],  
                        fields: ['s', 'n', 'd1', 'l1', 'y', 'r'],  
                }, function(err, snapshot) {  
                        console.log(snapshot);  
                });  
        });  
};  

djiaList.fullList(myCallback);
```
