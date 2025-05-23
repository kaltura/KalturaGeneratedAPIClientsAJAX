
/**
 *Class definition for the Kaltura service: PartnerCatalogItem.
 **/
var KalturaPartnerCatalogItemService = {
	/**
	 * Assign existing catalogItem to specific account.
	 * @param	id	int		source catalog item to assign to partner (optional)
	 * @param	defaultReachProfileId	int		 (optional, default: null)
	 **/
	add: function(id, defaultReachProfileId){
		if(!defaultReachProfileId)
			defaultReachProfileId = null;
		var kparams = new Object();
		kparams.id = id;
		kparams.defaultReachProfileId = defaultReachProfileId;
		return new KalturaRequestBuilder("reach_partnercatalogitem", "add", kparams);
	},
	
	/**
	 * Remove existing catalogItem from specific account.
	 * @param	id	int		source catalog item to remove (optional)
	 **/
	deleteAction: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("reach_partnercatalogitem", "delete", kparams);
	}
}
