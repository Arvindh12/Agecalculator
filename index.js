function runfunction (){
var x = document.getElementById("myDate");
  var currentVal = x.value;
  var birthdate = new Date(currentVal);
  var birthyear=birthdate.getFullYear();
  var birthmonth=birthdate.getMonth();
  var todayyear=new Date().getFullYear();
  var todaymonth=new Date().getMonth();
 
  var age=todayyear-birthyear;
  var currentmonth =  todaymonth - birthmonth
  
  var totalmonth=birthmonth+1+(age-1)*12+todaymonth+1;
  var todaytime=new Date().getTime();
  var currentday= new Date().getDate() -birthdate.getDate();
  var days=Math.ceil((todaytime-birthdate)/(1000 * 3600 * 24));
  var Hours=Math.ceil((todaytime-birthdate)/(1000 * 3600));
  var Seconds=Math.ceil((todaytime-birthdate)/(1000));
  var MilliSeconds=Math.ceil((todaytime-birthdate));
  if(currentmonth<0) {age--;currentmonth= Math.abs(currentmonth);}
  if(currentday<0){currentmonth--;currentday=currentday+30}
  console.log(age,days,currentmonth,Hours,Seconds/60,Seconds,MilliSeconds)
  var message = `You are ${age} year, ${currentmonth} months and ${currentday} days old.`
  document.getElementById("year").innerHTML = age; 
  document.getElementById("months").innerHTML = totalmonth;
  document.getElementById("days").innerHTML =days;
  document.getElementById("hours").innerHTML =Hours;
  document.getElementById("Secs").innerHTML =Seconds;
  document.getElementById("millisecs").innerHTML =MilliSeconds;
  document.getElementById("message").innerText=message
}

var root = document.getElementById("root")
root.setAttribute("class","container")
var div1 = document.createElement("div")
div1.setAttribute("class","row")
var div2 = document.createElement("div")
div2.setAttribute("class","jumbotron jumbotron-fluid col-12")
var div3 = document.createElement("div")
div3.setAttribute("class","container")
var h1 = document.createElement("h1")
h1.setAttribute("class","display-4")
h1.innerText="Age Calculator";
div3.appendChild(h1)
var p = document.createElement("p")
p.setAttribute("class","lead")
p.innerText=""
div3.appendChild(p)
div2.appendChild(div3)
div1.appendChild(div2)
var div2 = document.createElement("div")
div2.setAttribute("class","col-12")
var div3 = document.createElement("div")
div3.setAttribute("class","input-group input-group-lg")
var inp = document.createElement("input")
inp.setAttribute("type","date")
inp.setAttribute("class","form-control")
inp.setAttribute("id","myDate")
div3.appendChild(inp)
div2.appendChild(div3)
div1.appendChild(div2)
root.appendChild(div1)

var div1 = document.createElement("div")
div1.setAttribute("class","row mt-3")
var div2 = document.createElement("div")
div2.setAttribute("class","col-md-4")
div1.appendChild(div2)
var div2 = document.createElement("div")
div2.setAttribute("class","col-md-4")
var but = document.createElement("button")
but.setAttribute("type","button")
but.setAttribute("onclick","runfunction()")
but.setAttribute("class","btn btn-primary btn-lg btn-block")
but.innerText="Calculate"
div2.appendChild(but)
div1.appendChild(div2)
var div2 = document.createElement("div")
div2.setAttribute("class","col-md-4")
div1.appendChild(div2)
root.appendChild(div1)

var div1 = document.createElement("div")
div1.setAttribute("class","row mt-3")
var table = document.createElement("table")
table.setAttribute("class","table")
var thead= document.createElement("thead")
var tr = document.createElement("tr")
var th = document.createElement("th")
th.setAttribute("scope","col")
th.setAttribute("colspan","2")
th.setAttribute("class","text-center")
th.setAttribute("id","message")
th.innerText="You are 0 year, 0 months and 0 days old"
tr.appendChild(th)
thead.appendChild(tr)
table.appendChild(thead)
var tbody = document.createElement("tbody")
tbody.appendChild(splitrows("Total Years","year"))
tbody.appendChild(splitrows("Total months","months"))
tbody.appendChild(splitrows("Total Days","days"))
tbody.appendChild(splitrows("Total hours","hours"))
tbody.appendChild(splitrows("Total Seconds","Secs"))
tbody.appendChild(splitrows("Total milliseconds","millisecs"))
table.appendChild(tbody)
div1.appendChild(table)
root.appendChild(div1)


function splitrows(dis,id){
    var tr = document.createElement("tr")
    var th = document.createElement("th")
    th.setAttribute("scope","row")
    th.innerText=dis;
    tr.appendChild(th)
    var td = document.createElement("td")
    td.setAttribute("id",id)
    tr.appendChild(td)
    return tr
}