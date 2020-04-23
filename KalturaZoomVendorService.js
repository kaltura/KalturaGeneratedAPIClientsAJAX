
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
	 * .
	 **/
	oauthValidation: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("vendor_zoomvendor", "oauthValidation", kparams);
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
