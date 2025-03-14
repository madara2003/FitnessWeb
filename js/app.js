document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
     
    });
});


let button1 = document.getElementById("button__show1")
let close1 = document.getElementById("close1")
let conn1 = document.getElementById("info_con1")

button1.addEventListener("click", function () {
	conn1.style.display = "block"
});

close1.addEventListener("click", function () {
	conn1.style.display = "none"
});

let button2 = document.getElementById("button__show2")
let close2 = document.getElementById("close2")
let conn2 = document.getElementById("info_con2")

button2.addEventListener("click", function () {
	conn2.style.display = "block"
});

close2.addEventListener("click", function () {
	conn2.style.display = "none"
});


let button3 = document.getElementById("button__show3")
let close3 = document.getElementById("close3")
let conn3 = document.getElementById("info_con3")

button3.addEventListener("click", function () {
	conn3.style.display = "block"
});

close3.addEventListener("click", function () {
	conn3.style.display = "none"
});

let button4 = document.getElementById("button__show4")
let close4 = document.getElementById("close4")
let conn4 = document.getElementById("info_con4")

button4.addEventListener("click", function () {
	conn4.style.display = "block"
});

close4.addEventListener("click", function () {
	conn4.style.display = "none"
});

let button5 = document.getElementById("button__show5")
let close5 = document.getElementById("close5")
let conn5 = document.getElementById("info_con5")

button5.addEventListener("click", function () {
	console.log("sss")
	conn5.style.display = "block"
});

close5.addEventListener("click", function () {
	conn5.style.display = "none"
});

let button6 = document.getElementById("button__show6")
let close6 = document.getElementById("close6")
let conn6 = document.getElementById("info_con6")

button6.addEventListener("click", function () {
	
	conn6.style.display = "block"
});

close6.addEventListener("click", function () {
	conn6.style.display = "none"
});


