	var search = window.location.search;
	var senseboxid = search.split("=")

	apiurl = "https://api.opensensemap.org/boxes/" + senseboxid[1];
	