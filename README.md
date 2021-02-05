Zahid Bin Amin DMIT2008-A02
# Assignment 1 DMIT2008 'Stock Ticker App'

Welcome to my git repo of Stock Ticker App!

This web app is useful for retrieving information about the stock market. Such pieces of information about a stock include the following:
- Current Price of stock
- Date
- High Price of stock
- Low Price of stock
- Volume of stock
- Previous stock value
- Percentage change in value between current and previous dates.

## Instructions to use the app

This web app is easy to use! All you need is an internet connection and a internet-enabled computer machine with any web browser installed in it.

Open your browser and type the following URL to visit the web page:
https://assignment1dmit2008zahid.netlify.app/


Once you enter the webpage, you can type the name of the stock symbol into our search bar and click the button 'Search'. The results of the search will be displayed right below in a block. You can do multiple searches one after another in my app. 

## Tools used in our app

### Alpha Advantage API

I used Alpha Advantage API as my rest API to fetch the stock data in our app.

You can visit this URL to visit this API's documentation:
https://www.alphavantage.co/documentation/

In order to make most of the queries work for this API, you need request a Free API key. However the API Key I used in my App is <b>L6KJYA05JU4MYJAE</b>.

An example query used in the information retrieval process in my app is: https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=300135.SHZ&apikey=L6KJYA05JU4MYJAE

`? indicates the endpoint and all the code after ? are the query parameters. In the above query, there are three query parameters, i.e. function, symbol & apikey. You need to supply your unique api key with the every time you make a query to this API.`

### Node.js
I used to node.js in the development of our app. You necessarily don't need it run our webpage in the browser, but might need it if you want to do any development in your local machine. You can get Node.js for your computer from the following link:
https://nodejs.org/en/

### Netlify
I deployed my app into Netlify through this GitHub Repository in the mode of continuous deployment. It is running under npm run build command since we used Node.js in the App Development.

### Boilerplate CSS
I used boilerplate CSS template for the design of my app.  






