Books = new Mongo.Collection("books");

if (Meteor.isClient) {

  Meteor.call('webScrape', function(error,result){
    if(error){
      console.log("error", error);
    };

    console.log(result);
    Meteor.call('webScrape2', function(error, result2){
      if (error){
        console.log("error", error);
      };
      console.log(result2)
      Session.set("scraper2", result2);

    })
    Session.set("scraper", result);
  });

  Template.scraper.helpers({
    bookTitles: function(){
      return Session.get("scraper");
    },
    bookRatings: function(){
      return Session.get("scraper2")
    },
    scrapeIsNotFinished: function(){
      return !Session.get("scraper");
    }
  })

  Meteor.Spinner.options={
    className:'spinner',
    top: 'auto',
  }
    }


    if (Meteor.isServer) {
      Meteor.startup(function () {
        var cheerio = Meteor.npmRequire('cheerio');

        Meteor.methods({

          webScrape: function (){
            result = Meteor.http.get("https://www.bookbub.com/ebook-deals/latest");
            $ = cheerio.load(result.content);
            var bookPanels = $('div.book-panel').toArray()
            for(i=0; i<bookPanels.length(); i++){
              $ = cheerio.load(bookPanels[i])
              var title= $('h5.standard').text()
              var url= $('a[href$="1"]').toString()
              var result2 = Meteor.http.get(url);
              $1 = cheerio.load(result2.content);
              var rating = $1('#avgRating > span > a > span').text();
              console.log(title)
              Books.insert({Panel: bookPanels[i], Title: title, url: url, Rating: rating})
              }
            return true;
            }

        });
    });
}
