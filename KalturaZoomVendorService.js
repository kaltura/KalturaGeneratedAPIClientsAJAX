
/**
 *Class definition for the Kaltura service: zoomVendor.
 **/
var KalturaZoomVendorService = {
	/**
	 * .
	 **/
	deAuthorization: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("vendor_zoomvendor", "deAuthorization", kparams);
	},
	
	/**
	 * .
	 * @param	tokensData	string		 (optional)
	 * @param	iv	string		 (optional)
	 **/
	fetchRegistrationPage: function(tokensData, iv){
		var kparams = new Object();
		kparams.tokensData = tokensData;
		kparams.iv = iv;
		return new KalturaRequestBuilder("vendor_zoomvendor", "fetchRegistrationPage", kparams);
	},
	
	/**
	 * Retrieve zoom integration setting object by partner id.
	 * @param	partnerId	int		 (optional)
	 **/
	get: function(partnerId){
		var kparams = new Object();
		kparams.partnerId = partnerId;
		return new KalturaRequestBuilder("vendor_zoomvendor", "get", kparams);
	},
	
	/**
	 * List KalturaZoomIntegrationSetting objects.
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 **/
	listAction: function(pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("vendor_zoomvendor", "list", kparams);
	},
	
	/**
	 * .
	 * @param	jwt	string		 (optional)
	 **/
	localRegistrationPage: function(jwt){
		var kparams = new Object();
		kparams.jwt = jwt;
		return new KalturaRequestBuilder("vendor_zoomvendor", "localRegistrationPage", kparams);
	},
	
	/**
	 * load html page the that will ask the user for its KMC URL, derive the region of the user from it,
 *		 and redirect to the registration page in the correct region, while forwarding the necessary code for registration.
	 **/
	oauthValidation: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("vendor_zoomvendor", "oauthValidation", kparams);
	},
	
	/**
	 * .
	 **/
	preOauthValidation: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("vendor_zoomvendor", "preOauthValidation", kparams);
	},
	
	/**
	 * .
	 **/
	recordingComplete: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("vendor_zoomvendor", "recordingComplete", kparams);
	},
	
	/**
	 * .
	 * @param	accountId	string		 (optional)
	 * @param	integrationSetting	KalturaZoomIntegrationSetting		 (optional)
	 **/
	submitRegistration: function(accountId, integrationSetting){
		var kparams = new Object();
		kparams.accountId = accountId;
		kparams.integrationSetting = integrationSetting;
		return new KalturaRequestBuilder("vendor_zoomvendor", "submitRegistration", kparams);
	}
}
