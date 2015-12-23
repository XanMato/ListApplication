function AnimeController($scope, $http, $routeParams, $localStorage){

	$scope.id =  $routeParams.id;

	$scope.getAll = function(){

		if ( typeof  $localStorage.animes != 'undefined' 
			&& $localStorage.animes != null ){
			$scope.animes = $localStorage.animes;	
		} else {
			$http.get('/app/data/data.json').success(function(data){
				AnimeListController.animes = data.anime;
				$localStorage.animes = data.animes;
				$scope.animes = data.animes;
			});
		}
		$scope.$watch(function() 
			{
				return $scope.animes;
			}
			, function(newValue, oldValue) 
			{
				APP.log('se ha modificado la lista');
				APP.log('newValue: '+newValue.toString());
				APP.log('oldValue: '+oldValue.toString());
			$localStorage.animes = $scope.animes;
			}
		);

		$scope.anime= $scope.animes[$scope.id];
	};

/**
  	$http.get('/app/data/data.json').success(function(data) {
		$scope.anime = data.animes[$scope.id];
	});
**/
};