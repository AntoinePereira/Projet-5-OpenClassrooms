let order = JSON.parse(localStorage.order);
let orderId = order.orderId;
let totalPrice = JSON.parse(localStorage.totalPrice);

function displayOrder(){
	let divParent = document.getElementById('confirmationJS');
	divParent.innerHTML = 'Votre commande<br>' + orderId + "<br>d'un montant de :<br>" + totalPrice + '$<br> est en cours de traitement';
}
displayOrder();