import ejs from "ejs";

function isEmpty(obj) { // function to check for empty json object
  return Object.keys(obj).length === 0;
}

const stockView = `
<aside class="stockdiv">
  <ul class="details" >
    <li><b> Stock Symbol: <span><%= a["01. symbol"] %></span><b></li>
    <li> Current Price: <span>USD <%= a["05. price"] %></span></li>
    <li> Latest Trading Date: <span><%= a["07. latest trading day"] %></span></li>
    <li> Open: <span><%= a["02. open"] %></span></li>
    <li> High: <span><%= a["03. high"] %></span></li>
    <li> Low: <span><%= a["04. low"] %></span></li>
    <li> Volume: <span><%= a["06. volume"] %></span></li>
    <li> Previous closing price: <span><%= a["08. previous close"] %></span></li>
    <li> Change Percentage: <span><%= a["10. change percent"] %></span></li>
  </ul>

</aside>
`;

const noResultsView = `
<aside class="error">
  <header>
    <h3> Not found</h3>
 <header>
</aside>
`;

function ResultsView(viewId) {    
  this.container = document.querySelector(viewId);
  this.renderStock = function (stockinfo) {
    // if there are no people in the results
    this.removeChildElements();
    if (isEmpty(stockinfo["Global Quote"])) {
      const elem = ejs.render(noResultsView);  // it renders in case if response object is empty
      this.container.insertAdjacentHTML("afterbegin", elem);
    }
    else
    {
      let a = stockinfo["Global Quote"];  // it renders in case if response object is not empty
      const elem = ejs.render(stockView, { a });
      this.container.insertAdjacentHTML("afterbegin", elem);
    }
    
    

  };

  this.removeChildElements = function () {  // removes previously generated HTML elements in the results container
    this.container.querySelectorAll("aside").forEach((stockdiv) => {
      console.log("remove")
      console.log(stockdiv)
      this.container.removeChild(stockdiv);
    });
  };
  return this;
}

export default ResultsView;
