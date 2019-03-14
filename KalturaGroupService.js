
/**
 *Class definition for the Kaltura service: group.
 **/
var KalturaGroupService = {
	/**
	 * Adds a new group (user of type group)..
	 * @param	group	KalturaGroup		a new group (optional)
	 **/
	add: function(group){
		var kparams = new Object();
		kparams.group = group;
		return new KalturaRequestBuilder("group_group", "add", kparams);
	},
	
	/**
	 * Delete group by ID.
	 * @param	groupId	string		The unique identifier in the partner's system (optional)
	 **/
	deleteAction: function(groupId){
		var kparams = new Object();
		kparams.groupId = groupId;
		return new KalturaRequestBuilder("group_group", "delete", kparams);
	},
	
	/**
	 * Retrieves a group object for a specified group ID..
	 * @param	groupId	string		The unique identifier in the partner's system (optional)
	 **/
	get: function(groupId){
		var kparams = new Object();
		kparams.groupId = groupId;
		return new KalturaRequestBuilder("group_group", "get", kparams);
	},
	
	/**
	 * Lists group  objects that are associated with an account.
 *		 Blocked users are listed unless you use a filter to exclude them.
 *		 Deleted users are not listed unless you use a filter to include them..
	 * @param	filter	KalturaGroupFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		A limit for the number of records to display on a page (optional, default: null)
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
		return new KalturaRequestBuilder("group_group", "list", kparams);
	},
	
	/**
	 * Update group by ID.
	 * @param	groupId	string		The unique identifier in the partner's system (optional)
	 * @param	group	KalturaGroup		Id The unique identifier in the partner's system (optional)
	 **/
	update: function(groupId, group){
		var kparams = new Object();
		kparams.groupId = groupId;
		kparams.group = group;
		return new KalturaRequestBuilder("group_group", "update", kparams);
	}
}
