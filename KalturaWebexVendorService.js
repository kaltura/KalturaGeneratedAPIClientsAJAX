
/**
 *Class definition for the Kaltura service: webexVendor.
 **/
var KalturaWebexVendorService = {
	/**
	 * .
	 * @param	tokensData	string		 (optional)
	 * @param	iv	string		 (optional)
	 **/
	fetchRegistrationPage: function(tokensData, iv){
		var kparams = new Object();
		kparams.tokensData = tokensData;
		kparams.iv = iv;
		return new KalturaRequestBuilder("webexapidropfolder_webexvendor", "fetchRegistrationPage", kparams);
	},
	
	/**
	 * List KalturaWebexAPIIntegrationSetting objects.
	 * @param	pager	KalturaFilterPager		Pager (optional, default: null)
	 **/
	listAction: function(pager){
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("webexapidropfolder_webexvendor", "list", kparams);
	},
	
	/**
	 * .
	 **/
	oauthValidation: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("webexapidropfolder_webexvendor", "oauthValidation", kparams);
	},
	
	/**
	 * .
	 **/
	preOauthValidation: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("webexapidropfolder_webexvendor", "preOauthValidation", kparams);
	},
	
	/**
	 * .
	 * @param	accountId	string		 (optional)
	 * @param	integrationSetting	KalturaWebexAPIIntegrationSetting		 (optional)
	 **/
	submitRegistration: function(accountId, integrationSetting){
		var kparams = new Object();
		kparams.accountId = accountId;
		kparams.integrationSetting = integrationSetting;
		return new KalturaRequestBuilder("webexapidropfolder_webexvendor", "submitRegistration", kparams);
	}
}
