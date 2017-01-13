function seturl () {
  var senseboxid = document.getElementById("senseID").value;
 
  apiurl = "https://api.opensensemap.org/boxes/" + senseboxid;
 
  alert(apiurl);
}

document.getElementById("sendSenseID").onclick = seturl;
