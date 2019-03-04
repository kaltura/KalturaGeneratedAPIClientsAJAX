
/**
 *Class definition for the Kaltura service: confMaps.
 **/
var KalturaConfMapsService = {
	/**
	 * Add configuration map.
	 * @param	map	KalturaConfMaps		 (optional)
	 **/
	add: function(map){
		var kparams = new Object();
		kparams.map = map;
		return new KalturaRequestBuilder("confmaps_confmaps", "add", kparams);
	},
	
	/**
	 * Get configuration map.
	 * @param	filter	KalturaConfMapsFilter		 (optional)
	 **/
	get: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("confmaps_confmaps", "get", kparams);
	},
	
	/**
	 * List configuration maps names.
	 **/
	getMapNames: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("confmaps_confmaps", "getMapNames", kparams);
	},
	
	/**
	 * List configuration maps.
	 * @param	filter	KalturaConfMapsFilter		 (optional)
	 **/
	listAction: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("confmaps_confmaps", "list", kparams);
	},
	
	/**
	 * Update configuration map.
	 * @param	map	KalturaConfMaps		 (optional)
	 **/
	update: function(map){
		var kparams = new Object();
		kparams.map = map;
		return new KalturaRequestBuilder("confmaps_confmaps", "update", kparams);
	}
}
