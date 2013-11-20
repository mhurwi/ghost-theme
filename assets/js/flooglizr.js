var app = angular.module("flooglizr", [])

app.directive("floogle", function(){
	return {
		restrict: "A",
		templateUrl: "/assets/templates/floogle.html"
	}
})