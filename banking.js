
function getInputValue(id, place, event) {
    // get input
    const idInput = document.getElementById(id);
    const idInputValue = parseFloat(idInput.value);
    // deposit 
    const deposit = document.getElementById('deposit-total');
    let depositTotal = parseFloat(deposit.innerText)
    // withdraw 
    const widthDraw = document.getElementById('withdraw-total')
    let widthDrawTotal = parseFloat(widthDraw.innerText)
    // total balance 
    const total = document.getElementById('balance-total');
    let balanceTotal = parseFloat(total.innerText);
    if (isNaN(idInputValue) || idInputValue < 0) {

        const getId = id + '-eror'
        document.getElementById(getId).style.display = 'block'
        console.log(getId)
    }
    else {
        const getId = id + '-eror'
        document.getElementById(getId).style.display = 'none'

        if (place == 'deposit') {
            depositTotal = depositTotal + idInputValue;
            deposit.innerText = depositTotal
            balanceTotal = balanceTotal + depositTotal;
        }
        else {
            widthDrawTotal = widthDrawTotal + idInputValue;
            widthDraw.innerText = widthDrawTotal
            balanceTotal = balanceTotal - widthDrawTotal;

        }
        total.innerText = balanceTotal

    }
    idInput.value = ''
}



