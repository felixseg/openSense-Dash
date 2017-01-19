	var search = window.location.search;
	var senseboxid = search.split("=")

	var apiurl = "https://api.opensensemap.org/boxes/" + senseboxid[1];
	
	var sourceConfig = {
			  "sensebox": apiurl
			};
	
	
	
	
	
	var sensors = {
			 "name": {
			    "name": "titlesp"
			  },

			 "Temperatur": {
				"value": "temperaturesp"
			  },

			 "rel. Luftfeuchte": {
			     "value": "humiditysp"
			  },
							  
			 "Luftdruck": {
			     "value": "airpressuresp"
			  },
								 
		     "Beleuchtungsstärke": {
			     "value": "illuminancesp"
			  },							  
		     				  
			 "UV-Intensität": {
				 "value": "uvsp"
			  },			  
			  
			 "Schall": {
			     "value": "noisesp"
			  },
			  
		     /*"rel. Luftfeuchte": {
		     	 "value": "distancesp"
			  }, */
			  
			 "Wifi-Stärke": {
		    	 "value": "wifisp"
			  },
			  
			 "Eingangsspannung": {
			     "value": "voltagesp"
			  },
			  
			  alert(temperaturesp);
	}