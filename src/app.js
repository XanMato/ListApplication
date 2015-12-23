var APP = {
	logPrefix: '%c',
	logBgColor: '#1f1f1f',
	logColor: 'green',
	errorBgColor: '#1f1f1f',
	errorColor: 'red',
	log : function(str){
		console.log(this.logPrefix+str, 'background: '+ this.logBgColor + '; color: ' + this.logColor);
	},
	error : function(str){
		console.error(this.logPrefix+str, 'background: '+ this.errorBgColor + '; color: ' + this.errorColor);
	}
}

var myModule = angular.module('myApp', ['ngRoute', 'ngStorage']);
myModule.config(['$routeProvider', function($routeProvider){		
	$routeProvider.
		when('/anime', { 
			templateUrl : 'src/views/anime-list.html',
			controller : AnimeListController}).
		when('/anime/:id', { 
			templateUrl : 'src/views/anime-detail.html',
			controller : AnimeController}).
		otherwise({
			redirectTo : '/anime'});
}]);