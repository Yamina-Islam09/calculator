function showValue(number) {
    //= value chaple result dekhabe
    if (number == "=") {
        const showValueNumber = document.getElementById('digit-show');
        const display = showValueNumber.innerText;
        const displayValue = document.getElementById('result-show');
        displayValue.innerText = eval(display);
    } else if (number == '<=X') { // etar jnno last er akta character bad porbe
        const showValueNumber = document.getElementById('digit-show');
        const display = showValueNumber.innerText;
        const newValue = display.substring(0, display.length - 1);
        showValueNumber.innerText = newValue;
    } else { //digit show krabe only
        const showValueNumber = document.getElementById('digit-show');
        const prevNumber = showValueNumber.innerText;
        if (prevNumber == '0' || prevNumber == "+" || prevNumber == "*" || prevNumber == "/" || prevNumber == "%") {
            const prevNumb = '';
            const newNumber = prevNumb + number;
            showValueNumber.innerText = newNumber;
        } else {
            const newNumber = prevNumber + number;
            showValueNumber.innerText = newNumber;
        }
    }


}
//bubble event kre button selection
document.getElementById('calculator').addEventListener('click', function(event) {
    const gotValue = event.target.innerText;
    //ac button chaple ki hbe
    if (gotValue == "AC") {
        const showValueNumber = document.getElementById('digit-show');
        showValueNumber.innerText = '0';
        const displayValue = document.getElementById('result-show');
        displayValue.innerText = '0';
    } else {
        showValue(gotValue); //noito value pass krbe
    }
})