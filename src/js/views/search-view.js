function SearchView(viewId){

     this.searchController;
     this.view = document.querySelector(viewId);

     this.setController = function(controller){
          this.searchController= controller;         
     }
     return this
}


export default SearchView 