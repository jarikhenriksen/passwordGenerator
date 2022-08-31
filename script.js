
let slider = document.getElementById('characterRangeSlider')
let sliderValue = document.getElementById('characterLengthNumber')

// sliderValue.innerText = slider.value

slider.oninput = function() {
    
    sliderValue.innerText = this.value
}


function generatePassword() {

    let passwordLength = parseInt(sliderValue.innerText)

    let password = ''
    let passwordoptions = ''
    let upperCase = document.getElementById('upperCase')
    let lowerCase = document.getElementById('lowerCase')
    let numbers = document.getElementById('numbers')
    let symbols = document.getElementById('symbols')

    if (upperCase.checked) {
        passwordoptions += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }

    if (lowerCase.checked) {
        passwordoptions += 'abcdefghijklmnopqrstuvwxyz'
    }

    if (numbers.checked) {
        passwordoptions += '1234567890'
    }

    if (symbols.checked) {
        passwordoptions += '!@#$%^&*()-_=+`~/?[]{}.,:;'
    }



    for (let i=0;i<passwordLength;i++) {
        password += passwordoptions.charAt(Math.floor(Math.random() * passwordoptions.length));
    }

    document.getElementById('password').innerText = password

}




