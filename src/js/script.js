var name = prompt("Ваше имя?");
		age = prompt("Ваш возраст?");
		start = false;

function access() {	
 	console.log("Пользователь допущен")
}

if (age >= 18) {
	start = true;
} 	else  { start = false};

if (start == true) {
	confirm("Подписаны ли вы на рассылку?");
	access();
} else if (start == false) {
		alert("Доступ запрещен")
	}



var	btn1 = document.getElementById("btn1");
		btn2 = document.getElementById("btn2");
		main = document.getElementById("main");
		myList = document.getElementById("list");
		ul = document.getElementsByTagName("ul");
		story = myList.getElementsByClassName("item");
		popup = document.getElementsByClassName("popup")[0];
		close = document.getElementsByClassName("close")[0];

console.log(ul);
console.log(popup);
console.log(close);
console.log(list);

var addItems = function() {
	var newLi = document.createElement("li");
			newLi.innerHTML = "Новая задача";
			newLi.className = "item";
			myList.appendChild(newLi);
			popup.style.display = "none";
};
var delItems = function() {
		myList.removeChild(story[0]);

		if(story.length == 0){
			popup.style.display = "block";
		}
}

function closePopup() {
	popup.style.display = "none";
}

btn1.addEventListener("click", addItems);
btn2.addEventListener("click", delItems);
close.addEventListener("click", closePopup);