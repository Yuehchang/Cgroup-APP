var rtRdd = document.getElementById("n4extendR");
rtRdd.length = 0;

var rtRdOpt = document.createElement("option");
rtRdOpt.text = "请选择伸出长比";
rtRdOpt.value = "0";

rtRdd.add(rtRdOpt);
rtRdd.selectedIndex = 0;

var rtRurl = "json/extendR.json";

var rtRrequest = new XMLHttpRequest();
rtRrequest.open('GET', rtRurl, true);

rtRrequest.onload = function() {
  if (rtRrequest.status === 200) {
    const data = JSON.parse(rtRrequest.responseText);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].text;
      option.value = data[i].value;
      rtRdd.add(option);
    }
   } else {
    console.error("Unable to load cuttooldiameter data from json file")
  }   
}

rtRrequest.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + rtRurl);
};

rtRrequest.send();