
/**
 *Class definition for the Kaltura service: userAppRole.
 **/
var KalturaUserAppRoleService = {
	/**
	 * Assign an application role for a user.
	 * @param	userAppRole	KalturaUserAppRole		 (optional)
	 **/
	add: function(userAppRole){
		var kparams = new Object();
		kparams.userAppRole = userAppRole;
		return new KalturaRequestBuilder("userapprole", "add", kparams);
	},
	
	/**
	 * Delete an application role for a user and app guid.
	 * @param	userId	string		the user id (optional)
	 * @param	appGuid	string		the app-registry id (optional)
	 **/
	deleteAction: function(userId, appGuid){
		var kparams = new Object();
		kparams.userId = userId;
		kparams.appGuid = appGuid;
		return new KalturaRequestBuilder("userapprole", "delete", kparams);
	},
	
	/**
	 * Get an application role for a user and app guid.
	 * @param	userId	string		the user id (optional)
	 * @param	appGuid	string		the app-registry id (optional)
	 **/
	get: function(userId, appGuid){
		var kparams = new Object();
		kparams.userId = userId;
		kparams.appGuid = appGuid;
		return new KalturaRequestBuilder("userapprole", "get", kparams);
	},
	
	/**
	 * List an application roles by filter and pager.
	 * @param	filter	KalturaUserAppRoleFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("userapprole", "list", kparams);
	},
	
	/**
	 * Update an application role for a user.
	 * @param	userId	string		 (optional)
	 * @param	appGuid	string		 (optional)
	 * @param	userAppRole	KalturaUserAppRole		 (optional)
	 **/
	update: function(userId, appGuid, userAppRole){
		var kparams = new Object();
		kparams.userId = userId;
		kparams.appGuid = appGuid;
		kparams.userAppRole = userAppRole;
		return new KalturaRequestBuilder("userapprole", "update", kparams);
	}
}
