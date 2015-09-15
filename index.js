var request = require('request'),
    cheerio = require('cheerio');


module.exports = {
  fullList: function(callback) {
    // This is the basline URL from Wikipedia
    var url = 'https://en.wikipedia.org/wiki/Dow_Jones_Industrial_Average';
    // Sadly, trying to get the css selector to work without this
    // Once I see the start of the second table of changes to the S&P,
    // stop processing
    var isPastList = false;

    // Go grab the webpage
    var returnList = request(url, function(err, resp, body){
      // The array of stocks
      var stockList = [];

      // Get cheerio started
      $ = cheerio.load(body);
      // Sep, 2015 - There are two tables on the page with data
      $('wikitable sortable, tr td:nth-child(3)').each(function(i, element) {
        // There is only one sortable table on the page right now
        var data = {
          ticker: $(this).text()
        };
        stockList.push(data);
      });
      //console.log(stockList);
      callback(stockList);
    });
  },

  testIt: function() {
    console.log("yes?");
  }
};
