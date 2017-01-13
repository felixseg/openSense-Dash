function seturl () {
  var senseboxid = document.getElementById("senseID").value;
 
  apiurl = "https://api.opensensemap.org/boxes/" + senseboxid;
 
  //alert(apiurl);
  window.open(apiurl);
}

document.getElementById("sendSenseID").onclick = seturl;


