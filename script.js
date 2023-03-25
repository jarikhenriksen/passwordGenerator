
let slider = document.getElementById('characterRangeSlider')
let sliderValue = document.getElementById('characterLengthNumber')


slider.oninput = function() {

    
    sliderValue.innerText = this.value
    strengthIndicatorColour(sliderValue.innerText)
  
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

function strengthIndicatorColour(numOfCharacters) { //this gets called when slider is changed, takes current slider value as argument

    let bars = document.getElementsByClassName('strengthIndicator')
    let word = document.getElementById('passwordStrengthWord')
    let x = parseInt(numOfCharacters)


    switch (true) {
        case (x<5):
            word.innerText = 'Weak'
            for(let i=0; i<bars.length; i++) {
                bars[i].style.backgroundColor = 'red'
            }
            break;
        case ((x>6) && (x<15)):
            word.innerText = 'Better'
            for(let i=0; i<bars.length; i++) {
                bars[i].style.backgroundColor = 'orange'
            }
            break;
        case ((x>16) && (x<25)):
            word.innerText = 'Strong'
            for(let i=0; i<bars.length; i++) {
                bars[i].style.backgroundColor = 'yellow'
            }
            break;
        case ((x>25)):
            word.innerText = 'Unbreakable!'
            for(let i=0; i<bars.length; i++) {
                bars[i].style.backgroundColor = 'blue'
            }
            break
    }
}

function copyElementText() {
    let text = document.getElementById('password').innerText;
    let elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);

    alert(text)
}




