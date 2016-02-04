# webscraping3
Bookbub Webscraping

Bookbub's Latest Deals page gives a list of book titles at discounted prices, and links to buy each book.

Clicking on the Amazon link for a given book will take you to Amazon's website where you can see the book rating.

We wanted a way to scrape the ratings from Amazon so that the ratings could be displayed directly on Bookbub's Latest Deals page.

This way all the ratings would be in one place and the user wouldn't have to navigate between pages to see ratings for books they are interested in.

Our general methodology:

Create a collection called 'books' which would store three things: book title, the amazon link for that book, and the rating

Used HTML selectors to write javaScript that would know to look for the title on the appropriate website and insert each title into our book collection.

Similarly, used HTML selectors to write javaScript to find the Amazon link associated with each book title. Inserted each rating into our collection.

Used HTML selectors from each Amazon URL to scrape the ratings for each book. Inserted each rating into the book collection.

Copied the page source information from Bookbub's Latest Deals page to get an exact copy of Bookbub's website.

Bookbub's site was designed such that each book recommendation was stored in a "book panel" within the HTML.

We deleted all of Bookbub's panels and replaced them with our own panels. Our panels were identical to Bookbub's except that ours included the ratings for each book.

The result was a website that looked identical to Bookbub's Latest Deals page (bookbub.com/ebooks-deals/latest), except for our added feature that each book rating was displayed neatly underneath the cover of every book.
