
/**
 *Class definition for the Kaltura service: vendorIntegration.
 **/
var KalturaVendorIntegrationService = {
	/**
	 * Add new integration setting object.
	 * @param	integration	KalturaIntegrationSetting		 (optional)
	 * @param	remoteId	string		 (optional)
	 **/
	add: function(integration, remoteId){
		var kparams = new Object();
		kparams.integration = integration;
		kparams.remoteId = remoteId;
		return new KalturaRequestBuilder("vendor_vendorintegration", "add", kparams);
	},
	
	/**
	 * Delete integration object by ID.
	 * @param	integrationId	int		 (optional)
	 **/
	deleteAction: function(integrationId){
		var kparams = new Object();
		kparams.integrationId = integrationId;
		return new KalturaRequestBuilder("vendor_vendorintegration", "delete", kparams);
	},
	
	/**
	 * Retrieve integration setting object by ID.
	 * @param	integrationId	int		 (optional)
	 **/
	get: function(integrationId){
		var kparams = new Object();
		kparams.integrationId = integrationId;
		return new KalturaRequestBuilder("vendor_vendorintegration", "get", kparams);
	},
	
	/**
	 * Update an existing vedor catalog item object.
	 * @param	id	int		 (optional)
	 * @param	integrationSetting	KalturaIntegrationSetting		 (optional)
	 **/
	update: function(id, integrationSetting){
		var kparams = new Object();
		kparams.id = id;
		kparams.integrationSetting = integrationSetting;
		return new KalturaRequestBuilder("vendor_vendorintegration", "update", kparams);
	},
	
	/**
	 * Update vendor catalog item status by id.
	 * @param	id	int		 (optional)
	 * @param	status	KalturaIntegrationSetting		 (optional)
	 **/
	updateStatus: function(id, status){
		var kparams = new Object();
		kparams.id = id;
		kparams.status = status;
		return new KalturaRequestBuilder("vendor_vendorintegration", "updateStatus", kparams);
	}
}
