'user strict';
angular.module('mmWeb.controllers', ['ui']);

var GlobalCtrl = ['$scope', '$location', '$window', '$route', '$routeParams', function($scope,$location,$window,$route,$routeParams){
	$scope.window = $window
	, $scope.location = $location
	, $scope.route = $route
	, $scope.routeParams = $routeParams
	, $scope.Math = $window.Math;
}];

var MainCtrl = ['$scope', function($scope){
	$scope.formState = true;
	$scope.next = function(){
		$scope.formState = false;
	}
	$scope.prev = function(){
		$scope.formState = true;
	}
}];

var ServicesCtrl = ['$scope', function($scope){
	$scope.formData = {};
	$scope.$emit('routeChange', 'services');
	console.log($scope.routeParams);
}];

var ProductsCtrl = ['$scope', function($scope){
	$scope.$emit('routeChange', 'products');
}];

var PlaygroundCtrl = ['$scope', function($scope){
	$scope.$emit('routeChange', 'playground');
}];

var PortfolioCtrl = ['$scope', function($scope){
	$scope.$emit('routeChange', 'portfolio');
}];
