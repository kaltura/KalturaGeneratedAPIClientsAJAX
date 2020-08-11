
/**
 *Class definition for the Kaltura service: pexip.
 **/
var KalturaPexipService = {
	/**
	 * .
	 * @param	entryId	string		 (optional)
	 * @param	regenerate	bool		 (optional, default: false)
	 * @param	sourceType	int		 (optional, enum: KalturaSipSourceType, default: 1)
	 **/
	generateSipUrl: function(entryId, regenerate, sourceType){
		if(!regenerate)
			regenerate = false;
		if(!sourceType)
			sourceType = 1;
		var kparams = new Object();
		kparams.entryId = entryId;
		kparams.regenerate = regenerate;
		kparams.sourceType = sourceType;
		return new KalturaRequestBuilder("sip_pexip", "generateSipUrl", kparams);
	},
	
	/**
	 * .
	 **/
	handleIncomingCall: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("sip_pexip", "handleIncomingCall", kparams);
	},
	
	/**
	 * .
	 * @param	offset	int		 (optional)
	 * @param	pageSize	int		 (optional, default: 500)
	 * @param	activeOnly	bool		 (optional, default: false)
	 **/
	listRooms: function(offset, pageSize, activeOnly){
		if(!offset)
			offset = 0;
		if(!pageSize)
			pageSize = 500;
		if(!activeOnly)
			activeOnly = false;
		var kparams = new Object();
		kparams.offset = offset;
		kparams.pageSize = pageSize;
		kparams.activeOnly = activeOnly;
		return new KalturaRequestBuilder("sip_pexip", "listRooms", kparams);
	}
}
