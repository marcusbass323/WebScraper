const request = require('request');
const cheerio = require('cheerio');

request('https://github.com/marcusbass323', (error, response, html) => {
    if(!error && response.statusCode == 200) {
       const $ = cheerio.load(html);

       $('.pinned-item-list-item-content').each((i, el) => {
        // PULLS LIST OF REPO NAMES ON USER OVERVIEW PAGE
        const title = $(el)
        .find('span').children()
        .text()
        .replace(/\s\s+/g,'');

        //PULLS THE REPO LINKS
        const link = $(el)
        .find('a')
        .attr('href');
     
        const Language = $(el)
        .find('p').children()
        .text()

        //WRITE ROW TO CSV
        //writeStream.write(`${title}, ${link}, ${inStock} \n`);

        console.log(Language);
     })
        
    } 
});


