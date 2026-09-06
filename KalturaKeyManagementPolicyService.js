
/**
 *Class definition for the Kaltura service: keyManagementPolicy.
 **/
var KalturaKeyManagementPolicyService = {
	/**
	 * .
	 * @param	objectType	int		 (optional, enum: KalturaKeyManagementPolicyObjectType)
	 * @param	objectId	string		 (optional)
	 **/
	get: function(objectType, objectId){
		var kparams = new Object();
		kparams.objectType = objectType;
		kparams.objectId = objectId;
		return new KalturaRequestBuilder("drm_keymanagementpolicy", "get", kparams);
	},
	
	/**
	 * .
	 * @param	objectType	int		 (optional, enum: KalturaKeyManagementPolicyObjectType)
	 * @param	objectId	string		 (optional)
	 * @param	keyManagementPolicy	KalturaKeyManagementPolicy		 (optional)
	 **/
	update: function(objectType, objectId, keyManagementPolicy){
		var kparams = new Object();
		kparams.objectType = objectType;
		kparams.objectId = objectId;
		kparams.keyManagementPolicy = keyManagementPolicy;
		return new KalturaRequestBuilder("drm_keymanagementpolicy", "update", kparams);
	}
}
