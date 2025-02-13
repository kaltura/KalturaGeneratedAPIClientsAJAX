
/**
 *Class definition for the Kaltura service: searchHistory.
 **/
var KalturaSearchHistoryService = {
	/**
	 * .
	 * @param	searchTerm	string		 (optional)
	 **/
	deleteAction: function(searchTerm){
		var kparams = new Object();
		kparams.searchTerm = searchTerm;
		return new KalturaRequestBuilder("searchhistory_searchhistory", "delete", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaESearchHistoryFilter		A filter used to aggregate the search terms (optional)
	 **/
	exportToCsv: function(filter){
		var kparams = new Object();
		kparams.filter = filter;
		return new KalturaRequestBuilder("searchhistory_searchhistory", "exportToCsv", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaESearchHistoryFilter		 (optional, default: null)
	 **/
	listAction: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("searchhistory_searchhistory", "list", kparams);
	}
}
