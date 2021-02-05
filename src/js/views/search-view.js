function SearchView(viewId) {

     this.searchController;

     this.view = document.querySelector(viewId); // function to declare the view of searchView

     this.setController = function (controller) { // function to set the controller for searchview
          this.searchController = controller;
     }
     return this
}


export default SearchView // exporting the class