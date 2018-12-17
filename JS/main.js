// // console.log("connected");

// build a form to capture user data
// display the result of the users login with javascript


function appList() {
	var item =document.getElementById("name").value
	var text = document.createTextNode(item)
	var newItem = document.createElement("ul")
	newItem.appendChild(text)
	document.getElementById("appList").appendChild(newItem);

	var seconditem = document.getElementById("comment").value
	var text = document.createTextNode(seconditem)
	var newItem = document.createElement("ul")
	newItem.appendChild(text)
	document.getElementById('appList').appendChild(newItem);

	var thirditem = document.getElementById("site").value
	var text = document.createTextNode(thirditem)
	var newItem = document.createElement("ul")
	newItem.appendChild(text)
	document.getElementById('appList').appendChild(newItem);
}

