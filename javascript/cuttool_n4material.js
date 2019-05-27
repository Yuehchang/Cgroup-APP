var mtldd = document.getElementById("n4material");
mtldd.length = 0;

var mtldOpt = document.createElement("option");
mtldOpt.text = "请选择加工材质";
mtldOpt.value = "0";

mtldd.add(mtldOpt);
mtldd.selectedIndex = 0;

var mtlurl = "json/material.json";

var mtlrequest = new XMLHttpRequest();
mtlrequest.open('GET', mtlurl, true);

mtlrequest.onload = function() {
  if (mtlrequest.status === 200) {
    const data = JSON.parse(mtlrequest.responseText);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].text;
      option.value = data[i].value;
      mtldd.add(option);
    }
   } else {
    console.error("Unable to load cuttooldiameter data from json file")
  }   
}

mtlrequest.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + mtlurl);
};

mtlrequest.send();