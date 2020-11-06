var Crawler = require("crawler");

const fs = require('fs');
var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
     if(res){
         var page  = res.body;
         var res = page.match(/dodge/i);
         if(res&&res.length>0){
            fs.writeFileSync('./test19.html',page);
         }
     }
     $("a").each(function(index,a){
         c.queue(a.href)
     })

    }
});


c.queue('http://themes.pixelstrap.com/bigdeal/html/layout-2.html');
 