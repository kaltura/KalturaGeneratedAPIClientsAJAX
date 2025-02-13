
/**
 *Class definition for the Kaltura service: sharepointExtension.
 **/
var KalturaSharepointExtensionService = {
	/**
	 * Is this Kaltura-Sharepoint-Server-Plugin supports minimum version of $major.$minor.$build (which is required by the extension).
	 * @param	serverMajor	int		 (optional)
	 * @param	serverMinor	int		 (optional)
	 * @param	serverBuild	int		 (optional)
	 **/
	isVersionSupported: function(serverMajor, serverMinor, serverBuild){
		var kparams = new Object();
		kparams.serverMajor = serverMajor;
		kparams.serverMinor = serverMinor;
		kparams.serverBuild = serverBuild;
		return new KalturaRequestBuilder("kalturasharepointextension_sharepointextension", "isVersionSupported", kparams);
	},
	
	/**
	 * list uiconfs for sharepoint extension.
	 **/
	listUiconfs: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("kalturasharepointextension_sharepointextension", "listUiconfs", kparams);
	}
}
