window.onload = function () {
	let places 			= document.querySelectorAll('.title-block__place');
	let range1 			= document.querySelector('#range-1');
	let range2 			= document.querySelector('#range-2');
	let range3 			= document.querySelector('#range-3');
	let rangeText1 		= document.querySelector('#range-text-1');
	let rangeText2 		= document.querySelector('#range-text-2');
	let rangeText3 		= document.querySelector('#range-text-3');
	let resultNumber1 	= document.querySelector('#result__number_1');
	let resultNumber2 	= document.querySelector('#result__number_2');
	let resultNumber3 	= document.querySelector('#result__number_3');
	let mainButton1 	= document.querySelector('#mainButton1');
	let mainButton2 	= document.querySelector('#mainButton2');

	range1.addEventListener('input', function(e) {
		e.preventDefault;
		this.style.background = "-webkit-linear-gradient(left, #317bc7 0%, #317bc7 "+range1.value+"%, #ece7e7 "+range1.value+"%, #ece7e7 100%)";
		rangeText1.innerHTML = range1.value;
		resultNumber1.innerHTML = range1.value * 3;
		resultNumber3.innerHTML = range1.value * range2.value * range3.value;
	});

	range2.addEventListener('input', function(e) {
		e.preventDefault;
		this.style.background = "-webkit-linear-gradient(left, #ffae46 0%, #ffae46 "+range2.value+"%, #ece7e7 "+range2.value+"%, #ece7e7 100%)";
		rangeText2.innerHTML = range2.value;
		resultNumber2.innerHTML = range2.value * 2;
		resultNumber3.innerHTML = range1.value * range2.value * range3.value;
	});

	range3.addEventListener('input', function(e) {
		e.preventDefault;
		this.style.background = "-webkit-linear-gradient(left, #33c964 0%, #33c964 "+range3.value+"%, #ece7e7 "+range3.value+"%, #ece7e7 100%)";
		rangeText3.innerHTML = range3.value;
		resultNumber3.innerHTML = range1.value * range2.value * range3.value;
	});



	function changeText() {
	  let i = 1;
	  let timerId = setTimeout(function go() {
	    let placeId = places[i - 1].getAttribute('id');
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
changeText();

	mainButton1.addEventListener('click', function(e) {
			e.preventDefault();
			let sectionId 	= this.getAttribute('href')
			document.querySelector('' + sectionId).scrollIntoView({
				behavior: "smooth",
				block: "start"
			})
		});

	mainButton2.addEventListener('click', function(e) {
			e.preventDefault();
			let sectionId 	= this.getAttribute('href')
			document.querySelector('' + sectionId).scrollIntoView({
				behavior: "smooth",
				block: "start"
			})
		});

}