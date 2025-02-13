
/**
 *Class definition for the Kaltura service: room.
 **/
var KalturaRoomService = {
	/**
	 * .
	 * @param	entry	KalturaRoomEntry		 (optional)
	 **/
	add: function(entry){
		var kparams = new Object();
		kparams.entry = entry;
		return new KalturaRequestBuilder("room_room", "add", kparams);
	},
	
	/**
	 * .
	 * @param	roomEntryId	string		 (optional)
	 * @param	mediaEntryId	string		 (optional)
	 **/
	attachRecordedEntry: function(roomEntryId, mediaEntryId){
		var kparams = new Object();
		kparams.roomEntryId = roomEntryId;
		kparams.mediaEntryId = mediaEntryId;
		return new KalturaRequestBuilder("room_room", "attachRecordedEntry", kparams);
	},
	
	/**
	 * .
	 * @param	roomId	string		 (optional)
	 **/
	deleteAction: function(roomId){
		var kparams = new Object();
		kparams.roomId = roomId;
		return new KalturaRequestBuilder("room_room", "delete", kparams);
	},
	
	/**
	 * .
	 * @param	roomId	string		 (optional)
	 **/
	get: function(roomId){
		var kparams = new Object();
		kparams.roomId = roomId;
		return new KalturaRequestBuilder("room_room", "get", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaRoomEntryFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("room_room", "list", kparams);
	},
	
	/**
	 * .
	 * @param	roomId	string		 (optional)
	 * @param	room	KalturaRoomEntry		Id (optional)
	 **/
	update: function(roomId, room){
		var kparams = new Object();
		kparams.roomId = roomId;
		kparams.room = room;
		return new KalturaRequestBuilder("room_room", "update", kparams);
	}
}
