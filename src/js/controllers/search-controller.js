function SearchController(model, searchView, resultsView) {
    // tell the search view about the model
    this.model = model;
    this.searchView = searchView;
    this.searchView.setController(this);


    this.configListeners = () => {
        this.searchView.view.addEventListener("submit", this.onHandleSubmit)

    }



    // form submit button handler
    this.onHandleSubmit = async (e) => {
        e.preventDefault();

        if (e.currentTarget.searchTerm.value == "") {  // input validation
            alert("The input text field can not be blank.")
        }
        else {                         // if input is valid
            const queryParams = {

                name: e.currentTarget.searchTerm.value
            }

            const searchResponse = await this.model.search(queryParams) // response object

            resultsView.renderStock(searchResponse) // response being rendered through this function into the DOM
        }


    }


    this.configListeners();

    return this;
}

export default SearchController