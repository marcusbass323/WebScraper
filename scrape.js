const request = require('request');
const cheerio = require('cheerio');

request('http://books.toscrape.com/', (error, response, html) => {
    if(!error && response.statusCode) {
       const $ = cheerio.load(html);

       const siteHeading = $('header')

    //    console.log(siteHeading.html());
    //    console.log(siteHeading.text());

      // const output = siteHeading.find('div').text();

      $('div a').each((i, el) => {
          const item = $(el).text();
          const link = $(el).attr('href');

          console.log(link);
      })

    }
});

