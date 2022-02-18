let userName = prompt("Lütfen Adınızı Giriniz")
let myName;
let Name = document.querySelector("#myName")

Name.innerHTML = `${userName}`

function currentTime(){

    let date = new Date(); 
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session ="AM";
    

if(h > 12){
    session = "PM";
}

h = (h < 10) ? "0" + h: h;
m = (m < 10) ? "0" + m: m;
s = (s < 10) ? "0" + s: s;

let time = h + ":" + m + ":" + s + " " + session;

document.querySelector("#myClock").innerHTML = time;
let t = setTimeout(function(){ currentTime() }, 1000); 

}

currentTime();