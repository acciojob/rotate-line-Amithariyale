//your JS code here. If required.
const line=document.getElementById('line');

let angle=2;
setInterval(()=>{
	line.style.transform=`rotate(${angle+=2}deg)`;
},20);