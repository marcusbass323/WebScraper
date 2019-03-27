const request = require('request');
const cheerio = require('cheerio');

request('http://books.toscrape.com/', (error, response, html) => {
    if(!error && response.statusCode) {
       const $ = cheerio.load(html);

       $('.product_pod').each((i, el) => {
           const title = $(el)
           .find('h3')
           .text()
           .replace(/\s\s+/g, '');
           
           const link = $(el)
           .find('a')
           .attr('href');

           const inStock = $(el)
           .find('.instock.availability')
           .text();



           console.log(title, link, inStock)
       })

    }
});

