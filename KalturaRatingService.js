
/**
 *Class definition for the Kaltura service: rating.
 **/
var KalturaRatingService = {
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 **/
	checkRating: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("rating_rating", "checkRating", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaRatingCountFilter		 (optional)
	 **/
	getRatingCounts: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("rating_rating", "getRatingCounts", kparams);
	},
	
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 * @param	rank	int		 (optional)
	 **/
	rate: function(entryId, rank){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.rank = rank;
		return new KalturaRequestBuilder("rating_rating", "rate", kparams);
	},
	
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 **/
	removeRating: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("rating_rating", "removeRating", kparams);
	}
}
