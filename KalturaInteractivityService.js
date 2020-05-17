
/**
 *Class definition for the Kaltura service: interactivity.
 **/
var KalturaInteractivityService = {
	/**
	 * Add a interactivity object.
	 * @param	entryId	string		 (optional)
	 * @param	kalturaInteractivity	KalturaInteractivity		 (optional)
	 **/
	add: function(entryId, kalturaInteractivity){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.kalturaInteractivity = kalturaInteractivity;
		return new KalturaRequestBuilder("interactivity_interactivity", "add", kparams);
	},
	
	/**
	 * Delete a interactivity object by entry id.
	 * @param	entryId	string		 (optional)
	 **/
	deleteAction: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("interactivity_interactivity", "delete", kparams);
	},
	
	/**
	 * Retrieve a interactivity object by entry id.
	 * @param	entryId	string		 (optional)
	 **/
	get: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("interactivity_interactivity", "get", kparams);
	},
	
	/**
	 * Update an existing interactivity object.
	 * @param	entryId	string		 (optional)
	 * @param	version	int		 (optional)
	 * @param	kalturaInteractivity	KalturaInteractivity		 (optional)
	 **/
	update: function(entryId, version, kalturaInteractivity){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.version = version;
		kparams.kalturaInteractivity = kalturaInteractivity;
		return new KalturaRequestBuilder("interactivity_interactivity", "update", kparams);
	}
}
