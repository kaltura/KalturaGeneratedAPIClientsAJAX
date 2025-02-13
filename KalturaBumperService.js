
/**
 *Class definition for the Kaltura service: bumper.
 **/
var KalturaBumperService = {
	/**
	 * Adds a bumper to an entry.
	 * @param	entryId	string		 (optional)
	 * @param	bumper	KalturaBumper		 (optional)
	 **/
	add: function(entryId, bumper){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.bumper = bumper;
		return new KalturaRequestBuilder("bumper_bumper", "add", kparams);
	},
	
	/**
	 * Delete bumper by EntryId.
	 * @param	entryId	string		 (optional)
	 **/
	deleteAction: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("bumper_bumper", "delete", kparams);
	},
	
	/**
	 * Allows to get the bumper.
	 * @param	entryId	string		 (optional)
	 **/
	get: function(entryId){
		var kparams = new Object();
		kparams.entryId = entryId;
		return new KalturaRequestBuilder("bumper_bumper", "get", kparams);
	},
	
	/**
	 * Allows to update a bumper.
	 * @param	entryId	string		 (optional)
	 * @param	bumper	KalturaBumper		 (optional)
	 **/
	update: function(entryId, bumper){
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.bumper = bumper;
		return new KalturaRequestBuilder("bumper_bumper", "update", kparams);
	}
}
