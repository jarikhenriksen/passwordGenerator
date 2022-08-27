
let slider = document.getElementById('characterRangeSlider')
let sliderValue = document.getElementById('characterLengthNumber')

sliderValue.innerText = slider.value

slider.oninput = function() {
    sliderValue.innerHTML = this.value
}




