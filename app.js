/*het is een goede gewoon om je function in een closure te zetten, dus (function() ... )(); */
(function(){
	var app = angular.module('store', [ 'store-products' ]); //In the array you can define dependencies (other libraries we might need)

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