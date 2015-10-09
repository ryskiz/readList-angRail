angular.module('readingList', ['ngAnimate', 'ui.router', 'ui.bootstrap'])
.factory('list', [function(){
	var o = {
		list: [{
		title:'The Prince',
		author:'Niccolo Machiavelli',
		isbn: '0486272745',
		review: 'Learn the political nature of a cynical animal and destroy your enemies!',
		percent: 9,
		genres: {'non-fiction': true},
	},
	{
		title:'The Republic',
		author:'Plato',
		isbn:'1503379981',
		review:'This book holds the key to understanding the mysteries of life itself... Platonic forms!',
		percent:10,
		genres:{'non-fiction':true, 'poetry':true},
	}]
	};
	return o;
}])
.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'partials/app.html',
			controller: 'ReadingList'
		});

		$urlRouterProvider.otherwise('home');
	}])
.controller('ReadingList', ['$scope', 'list', function($scope, list){
	$scope.books = list.list;
	$scope.genres = ['fable', 'fantasy', 'fiction', 'horror', 'humor', 'mystery', 'non-fiction', 'poetry'];
	$scope.showForm = false;
	$scope.rate = 7;
	$scope.max = 10;
	$scope.isReadonly = false;
	$scope.book = {genres:{}};
	$scope.hoveringOver = function(value) {
		$scope.overStar = value;
		$scope.percent = 100 * (value/$scope.max);
	};

	$scope.ratingStates = [
	{stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'}
	];

	$scope.addReview = function(form){
		$scope.books.push($scope.book)
		$scope.book = {genres:{}}
		form.$setPristine();
	}
	}]);