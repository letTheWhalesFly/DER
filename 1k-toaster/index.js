var buy_button = document.getElementById("product_buy");
var product_img = document.getElementById("product_img");

var select_list = document.getElementById("_select_model");
var select_images = [];

for (var i = 0; i < select_list.childNodes.length; i++) {
	
	if (select_list.childNodes[i].nodeName == "LI") {
		select_images.push(select_list.childNodes[i].childNodes[0]);	
	}
}

buy_button.addEventListener("click", function() {
	alert("Der DER-1k-Toaster ist leider ausverkauft aufgrund erhöhter Nachfrage. Bitte versuchen sie es zu einem späteren Zeitpunkt erneut."); 
});

for (var i = 0; i < select_images.length; i++) {
	select_images[i].addEventListener("click", function(e) {
		product_img.src = e.target.src;
		
		for (var j = 0; j < select_images.length; j++) {
			if (select_images[j] == e.target) {
				select_images[j].classList.add("_select_model_active");
			} else {
				select_images[j].classList.remove("_select_model_active");				
			}
		}
	});
}