
/**
 *Class definition for the Kaltura service: sso.
 **/
var KalturaSsoService = {
	/**
	 * Adds a new sso configuration..
	 * @param	sso	KalturaSso		a new sso configuration (optional)
	 **/
	add: function(sso){
		var kparams = new Object();
		kparams.sso = sso;
		return new KalturaRequestBuilder("sso_sso", "add", kparams);
	},
	
	/**
	 * Delete sso by ID.
	 * @param	ssoId	int		The unique identifier in the sso's object (optional)
	 **/
	deleteAction: function(ssoId){
		var kparams = new Object();
		kparams.ssoId = ssoId;
		return new KalturaRequestBuilder("sso_sso", "delete", kparams);
	},
	
	/**
	 * Retrieves sso object.
	 * @param	ssoId	int		The unique identifier in the sso's object (optional)
	 **/
	get: function(ssoId){
		var kparams = new Object();
		kparams.ssoId = ssoId;
		return new KalturaRequestBuilder("sso_sso", "get", kparams);
	},
	
	/**
	 * Lists sso objects that are associated with an account..
	 * @param	filter	KalturaSsoFilter		 (optional, default: null)
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
		return new KalturaRequestBuilder("sso_sso", "list", kparams);
	},
	
	/**
	 * Login with SSO, getting redirect url according to application type and partner Id
 *		 or according to application type and domain.
	 * @param	userId	string		 (optional)
	 * @param	applicationType	string		 (optional)
	 * @param	partnerId	int		 (optional, default: null)
	 **/
	login: function(userId, applicationType, partnerId){
		if(!partnerId)
			partnerId = null;
		var kparams = new Object();
		kparams.userId = userId;
		kparams.applicationType = applicationType;
		kparams.partnerId = partnerId;
		return new KalturaRequestBuilder("sso_sso", "login", kparams);
	},
	
	/**
	 * Update sso by ID.
	 * @param	ssoId	int		The unique identifier in the sso's object (optional)
	 * @param	sso	KalturaSso		Id The unique identifier in the sso's object (optional)
	 **/
	update: function(ssoId, sso){
		var kparams = new Object();
		kparams.ssoId = ssoId;
		kparams.sso = sso;
		return new KalturaRequestBuilder("sso_sso", "update", kparams);
	}
}
