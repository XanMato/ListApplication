function AnimeListController($scope, $http, $routeParams, $localStorage)
{	
	$scope.getAll = function(){

		$scope.c = 0;
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
		$scope.$watch('animes', function(newValue, oldValue) 
			{
				APP.log('se ha modificado la lista, $scope.c : ' + $scope.c++);
				//	APP.log('newValue: '+newValue.toString());
				//	APP.log('oldValue: '+oldValue.toString());
			$localStorage.animes = $scope.animes;
			}, true
		);
	};
	$scope.add = function()
	{
		$scope.animes.push( 
			{ 
				id : [$scope.animes.length],
				title : $scope.newAnime.title,
				score : $scope.newAnime.score,
				current : $scope.newAnime.current,
				total : $scope.newAnime.total,
				type: $scope.newAnime.type
			}
		);
	};
	$scope.remove = function(item)
	{
		var i = $scope.animes.indexOf(item);
		$scope.animes.splice(i, 1);
	};
	$scope.update = function(){
		APP.log('TODO: esto esta sin hacer ^^u ...');
	};
	$scope.increment = function(anime, strField){
		if (strField == 'score')
		{
			if (anime.score < 10){
				anime.score ++;
			}
		}
		else if (strField = 'current')
		{
			if (anime.current < anime.total){
				anime.current ++;
			}
		}
	};
	$scope.reduce = function(anime, strField){
		if (strField == 'score')
		{
			if (anime.score > 0){
				anime.score --;
			}
		}
		else if (strField = 'current')
		{
			if (anime.current > 0 ){
				anime.current --;
			}
		}
	};
	$scope.toggleEdit = function(anime){

	};
	$scope.viewDetail = function(){
		//event.preventDefault();

	}
};
// example : https://github.com/ccoenraets/angular-cellar
// example : http://softwarejuancarlos.com/2014/09/09/angularjs-crud-grid/