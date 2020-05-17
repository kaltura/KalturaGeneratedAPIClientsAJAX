
/**
 *Class definition for the Kaltura service: volatileInteractivity.
 **/
var KalturaVolatileInteractivityService = {
	/**
	 * add a volatile interactivity object.
	 * @param	entryId	string		 (optional)
	 * @param	kalturaVolatileInteractivity	KalturaVolatileInteractivity		 (optional)
	 **/
	add: function(entryId, kalturaVolatileInteractivity){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.kalturaVolatileInteractivity = kalturaVolatileInteractivity;
		return new KalturaRequestBuilder("interactivity_volatileinteractivity", "add", kparams);
	},
	
	/**
	 * Delete a volatile interactivity object by entry id.
	 * @param	entryId	string		 (optional)
	 **/
	deleteAction: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("interactivity_volatileinteractivity", "delete", kparams);
	},
	
	/**
	 * Retrieve a volatile interactivity object by entry id.
	 * @param	entryId	string		 (optional)
	 **/
	get: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("interactivity_volatileinteractivity", "get", kparams);
	},
	
	/**
	 * Update a volatile interactivity object.
	 * @param	entryId	string		 (optional)
	 * @param	version	int		 (optional)
	 * @param	kalturaVolatileInteractivity	KalturaVolatileInteractivity		 (optional)
	 **/
	update: function(entryId, version, kalturaVolatileInteractivity){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.version = version;
		kparams.kalturaVolatileInteractivity = kalturaVolatileInteractivity;
		return new KalturaRequestBuilder("interactivity_volatileinteractivity", "update", kparams);
	}
}
