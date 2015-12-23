function CustomObject(json)
{
	for ( var k in json){
		this['_'+k] = json[k];
	}

};

function Anime(json) 
{
	CustomObject.call(this, json);
};

Anime.prototype = 
{
	getField : function(field){
		return this['_'+field];
	},
	getId : function(){
		return  this._id;
	},
	getTitle : function(){
		return  this._title;
	},
	getScore : function(){
		return  this._score;
	},
	getCurrent : function(){
		return  this._current;
	},
	getTotal : function(){
		return  this._total;
	},
	getType : function(){
		return  this._type;
	},
	getById : function(id){
		APP.log('TODO: implementar ... ^^u ');
	},
	getAll : function(){
		APP.log('TODO: implementar ... ^^u ');
	},
	save : function(){
		APP.log('TODO: implementar ... ^^u ');
	},
	delete : function(){
		APP.log('TODO: implementar ... ^^u ');
	}
};