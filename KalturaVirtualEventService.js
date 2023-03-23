
/**
 *Class definition for the Kaltura service: virtualEvent.
 **/
var KalturaVirtualEventService = {
	/**
	 * Add a new virtual event.
	 * @param	virtualEvent	KalturaVirtualEvent		 (optional)
	 **/
	add: function(virtualEvent){
		var kparams = new Object();
		kparams.virtualEvent = virtualEvent;
		return new KalturaRequestBuilder("virtualevent_virtualevent", "add", kparams);
	},
	
	/**
	 * Delete a virtual event.
	 * @param	id	int		 (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("virtualevent_virtualevent", "delete", kparams);
	},
	
	/**
	 * Retrieve a virtual event by id.
	 * @param	id	int		 (optional)
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("virtualevent_virtualevent", "get", kparams);
	},
	
	/**
	 * List virtual events.
	 * @param	filter	KalturaVirtualEventFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("virtualevent_virtualevent", "list", kparams);
	},
	
	/**
	 * Update an existing virtual event.
	 * @param	id	int		 (optional)
	 * @param	virtualEvent	KalturaVirtualEvent		 (optional)
	 **/
	update: function(id, virtualEvent){
		var kparams = new Object();
		kparams.id = id;
		kparams.virtualEvent = virtualEvent;
		return new KalturaRequestBuilder("virtualevent_virtualevent", "update", kparams);
	}
}
