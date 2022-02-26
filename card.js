fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=2')
// button onclick handler
const searchButton = () =>{
    // input value
    const input = document.getElementById('input-value');
    const error = document.getElementById('error')
    const inputValue = input.value;
    if(isNaN(inputValue)){
        // alert('Please enter valid number');
        error.innerText = 'Please Enter an Number'
    }
    input.value= "";
}


