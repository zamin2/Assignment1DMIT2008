
function StockModel() {
   this.apiBaseUrl = 'https://www.alphavantage.co/query'


   this.init = function () { // initializing the stock model object
      const result = this.query('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo').then(res => res)
      return result
   }

   this.query = async function (url) { // function for making queries to the API
      const req = await fetch(url);
      const res = await req.json();
      return res
   }

   this.search = async function (formObj) { // Function to make a search query to the API
      const { name } = { ...formObj }
      let url = new URL(this.apiBaseUrl + '?function=GLOBAL_QUOTE&')


      // create search params for the url
      const params = new URLSearchParams()
      params.set('symbol', name)

      // joining the unique API key to make the search feature work
      url = url + params + '&apikey=L6KJYA05JU4MYJAE'

      console.log(url)

      // fetcg the data
      const req = await fetch(url);
      const res = await req.json();

      return res // return response data


   }



   return this 
}


export default StockModel // exporting the class