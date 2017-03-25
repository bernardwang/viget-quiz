document.addEventListener("DOMContentLoaded", function(event) { 
	var sliderElem = document.getElementsByClassName('tab-slider');
	if (sliderElem.length === 1) {
		var slider = TabSlider();
		slider.init(sliderElem[0]);
	}
});