var cncdd = document.getElementById("n4cnc");
cncdd.length = 0;

var cncdOpt = document.createElement("option");
cncdOpt.text = "请选择机台编号";
cncdOpt.value = "0";

cncdd.add(cncdOpt);
cncdd.selectedIndex = 0;

var cncurl = "json/cncid.json";

var cncrequest = new XMLHttpRequest();
cncrequest.open('GET', cncurl, true);

cncrequest.onload = function() {
  if (cncrequest.status === 200) {
    const data = JSON.parse(cncrequest.responseText);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].text;
      option.value = data[i].value;
      cncdd.add(option);
    }
   } else {
    console.error("Unable to load cnc data from json file")
  }   
}

cncrequest.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + cncurl);
};

cncrequest.send();

