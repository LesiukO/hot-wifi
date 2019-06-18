window.onload = function () {
	let places = document.querySelectorAll('.title-block__place');



	function printNumbersTimeout20_100() {
	  let i = 1;
	  let timerId = setTimeout(function go() {
	    console.log('place-' + i);
	    console.log(places[i - 1]);
	    let placeId = places[i - 1].getAttribute('id');
	    console.log(placeId);

	    if (placeId == 'place-' + i) {


	    	for (let place of places) {
	    		if (place.getAttribute('id') == 'place-' + i) {
					place.classList.add("title-block__place_visible");
	    		} else {
	    			place.classList.remove("title-block__place_visible");
	    		}
	    	}
	    }
	    if (i < places.length) {
	    	setTimeout(go, 3000);
	    	i++;
		} else {
			i = 1;
			setTimeout(go, 3000)
		}
	  }, 3000);
	}

// вызов
printNumbersTimeout20_100();


}