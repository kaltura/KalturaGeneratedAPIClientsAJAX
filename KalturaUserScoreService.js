
/**
 *Class definition for the Kaltura service: userScore.
 **/
var KalturaUserScoreService = {
	/**
	 * .
	 * @param	gameObjectId	string		 (optional)
	 * @param	gameObjectType	string		 (optional, enum: KalturaGameObjectType)
	 * @param	userId	string		 (optional)
	 **/
	deleteAction: function(gameObjectId, gameObjectType, userId){
		var kparams = new Object();
		kparams.gameObjectId = gameObjectId;
		kparams.gameObjectType = gameObjectType;
		kparams.userId = userId;
		return new KalturaRequestBuilder("game_userscore", "delete", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaUserScorePropertiesFilter		 (optional)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("game_userscore", "list", kparams);
	},
	
	/**
	 * .
	 * @param	gameObjectId	string		 (optional)
	 * @param	gameObjectType	string		 (optional, enum: KalturaGameObjectType)
	 * @param	userId	string		 (optional)
	 * @param	score	int		 (optional)
	 **/
	update: function(gameObjectId, gameObjectType, userId, score){
		var kparams = new Object();
		kparams.gameObjectId = gameObjectId;
		kparams.gameObjectType = gameObjectType;
		kparams.userId = userId;
		kparams.score = score;
		return new KalturaRequestBuilder("game_userscore", "update", kparams);
	}
}
