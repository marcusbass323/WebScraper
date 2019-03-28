const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv');

//HEADERS
writeStream.write(`Title,Link,In Stock \n`);

request('http://books.toscrape.com/', (error, 
    response, html) => {
    if(!error && response.statusCode == 200) {
       const $ = cheerio.load(html);

       $('.product_pod').each((i, el) => {
           const title = $(el)
           .find('h3')
           .text();
           

           const link = $(el)
           .find('a')
           .attr('href');
        
           const inStock = $(el)
           .find('.instock.availability')
           .text()
           .replace(/\s\s+/g,'');

           //WRITE ROW TO CSV
           writeStream.write(`${title}, ${link}, ${inStock} \n`);
        })
        
        console.log('Scraping Complete')
    }
});

