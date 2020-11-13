function fillBasket(){
	let basketContent = JSON.parse(localStorage.basketContent);
	basketContent.forEach((item) => {
		let divParent = document.getElementById('divJS');
		let divWrapper = document.createElement("div");

		addName(item, divWrapper);
		addPrice(item, divWrapper); 
		divParent.appendChild(divWrapper);
})
}
fillBasket();

function addName(item, divParent){
	let name = document.createElement('h3');
	name.innerHTML = item.name;
	divParent.appendChild(name);
}
function addPrice (item, divParent){
	let price = document.createElement('h4');
	price.innerHTML = 'Prix : ' + item.price + '$';
	divParent.appendChild(price);
}
	
function displayTotalPrice(){
	let basketContent = JSON.parse(localStorage.basketContent);	
	let divWrapper = document.getElementById('total');
	let sum = null;
	basketContent.forEach(function(value, index, array){
		sum += value.price;
	});
	divWrapper.innerHTML = sum + '$';
console.log(sum);
}
displayTotalPrice();


function sendOrder(tedInfo){
	const btn = document.getElementById('btn');
	btn.addEventListener('click', function(event){
		event.preventDefault();
		
		//creation objets 'contact' et 'products'
		let contact = {
		'firstName' : document.getElementById("name").value,
		'lastName' : document.getElementById("firstname").value,
		'address' : document.getElementById("adress").value,
		'city' : document.getElementById('city').value,
		'email' : document.getElementById("mail").value
		};
		let products = JSON.parse(localStorage.basketContent);
		let toBeSent = {contact, products};
		console.log(contact);
		//sendRequest(toBeSent);
		//envoi POST request
		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'http://localhost:3000/api/teddies/order');
    xhr.onreadystatechange = function() {
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      	var response = JSON.parse(this.response);
        console.log(xhr.response);
        //localStorage.setItem('orderId', response.orderId);
        //document.location.href = 'confirmation.html';
      } 
      else {
        alert('Une erreur est survenue');
      }
    };
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(toBeSent));
	});
}
sendOrder();
/*function sendRequest(toBeSent){
	fetch (" http://localhost:3000/api/teddies/order", {
  method: "POST",
  body: JSON.stringify(toBeSent),
  headers: {"Content-type": "application/json; charset=UTF-8"}
});
success:function sendRequest (response) {
     console.log(JSON.parse(response));
}*/


