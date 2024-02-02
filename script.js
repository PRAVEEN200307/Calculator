
const btnGroupEl = document.getElementById('buttonGroup');
const outputScreen = document.getElementById('outputScreen');
const equalBtn = document.getElementById('equalBtn');
const clearBtn = document.getElementById('allClearBtn');
const deleteBtn = document.getElementById('deleteBtn');
const  outputScreenValue=outputScreen.value

//handle the numberic and operator button
const handleBtn = (e) => {
    const value = e.target.value
    outputScreenValue += value
}
btnGroupEl.addEventListener('click', handleBtn)

//handle the equal button
const handleEqualBtn = () => {
    try {
        outputScreenValue = eval(outputScreenValue);
    }
    catch (error) {
        outputScreenValue = 'Error'
    }
}
equalBtn.addEventListener('click', handleEqualBtn);

//handle clear btn
clearBtn.addEventListener('click', () => { outputScreenValue = ''})

//handle delete
deleteBtn.addEventListener('click', () => {outputScreenValue=outputScreenValue.slice(0,-1)})

