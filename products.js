(function(){
	var app = angular.module('store-products', []);
	//dash in HTML translates to camelCase in JavaScript. (Dit is voor de product-title (element in index.html)
	app.directive('productTitle', function(){
		//returns a directive definition object (this is basically a configuration object defining how your directive will work)
		return{
			//here we specify the type of directive in this case 'E' (which stands for Element). We are declaring a new HTML element.
			restrict: 'E',
			//here we specify the url of a template we want this directive to load into the page. In this case product-title.html.
			templateUrl: 'product-title.html'
		};
	});	

	app.directive('productPanels', function(){
		return{
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller: function(){

			},
			//Controller Alias
			controllerAs: 'panels'
		};
	});
})();