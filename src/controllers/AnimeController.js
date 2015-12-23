function AnimeController($scope, $http,  $routeParams){
	$scope.id =  $routeParams.id;
	
	  $http.get('/app/data/data.json').success(function(data) {
		$scope.anime = data.animes[$scope.id];
	});
};