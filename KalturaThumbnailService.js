
/**
 *Class definition for the Kaltura service: thumbnail.
 **/
var KalturaThumbnailService = {
	/**
	 * Retrieves a thumbnail according to the required transformation.
	 * @param	transformString	string		 (optional)
	 **/
	transform: function(transformString){
		var kparams = new Object();
		kparams.transformString = transformString;
		return new KalturaRequestBuilder("thumbnail_thumbnail", "transform", kparams);
	}
}
