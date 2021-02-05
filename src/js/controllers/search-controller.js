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
        else {
            const queryParams = {

                name: e.currentTarget.searchTerm.value
            }

            const searchResponse = await this.model.search(queryParams)

            resultsView.renderStock(searchResponse)
        }


    }


    this.configListeners();

    return this;
}

export default SearchController