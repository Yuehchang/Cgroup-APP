var ctdd = document.getElementById("n4ct");
ctdd.length = 0;

var ctdOpt = document.createElement("option");
ctdOpt.text = "请选择刀具直径";
ctdOpt.value = "0";

ctdd.add(ctdOpt);
ctdd.selectedIndex = 0;

var cturl = "json/cuttooldiameter.json";

var ctrequest = new XMLHttpRequest();
ctrequest.open('GET', cturl, true);

ctrequest.onload = function() {
  if (ctrequest.status === 200) {
    const data = JSON.parse(ctrequest.responseText);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].text;
      option.value = data[i].value;
      ctdd.add(option);
    }
   } else {
    console.error("Unable to load cuttooldiameter data from json file")
  }   
}

ctrequest.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + cturl);
};

ctrequest.send();

