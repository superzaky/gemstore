/*het is een goede gewoon om je function in een closure te zetten, dus (function() ... )(); */
(function(){
	var app = angular.module('store', [ ]); //In the array you can define dependencies (other libraries we might need)

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

	app.controller('StoreController', function(){ //anonymous function wordt uitgevoerd wnnr de StoreController wordt aangeroepen.
		this.products = gems;
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2,
			description: '. . .',
			canPurchase: true,
			soldOut: true,
			reviews: [
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "This product sucks",
					author: "tim@hater.com"
				}
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: '. . .',
			canPurchase: true,
			soldOut: false
		}
	];

	app.controller('PanelController', function(){ //anonymous function wordt uitgevoerd wnnr de PanelController wordt aangeroepen.
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});	

	app.controller('ReviewController', function(){
		this.review = {};
		this.addReview = function(product) {
			product.reviews.push(this.review); 
			this.review = {};
		};
	});

})();