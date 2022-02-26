const main =document.getElementById('main')
// button onclick handler
const searchButton = () =>{
    // input value
    const input = document.getElementById('input-value');
    const error = document.getElementById('error')
    const inputValue = input.value;
   
    if(isNaN(inputValue) || inputValue==""){
        // alert('Please enter valid number');
        error.innerText = 'Please Enter an Number';
        input.value= "";
    }
    else if(inputValue <0){
        error.innerText = "Plaese enter positive value";
        input.value= "";
    }
    else{
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
        .then(res => res.json())
        .then(data => cardDisplay(data.cards))
        input.value= "";
    }
    
}

const cardDisplay = (cards) =>{
    console.log(cards);
    for(const card of cards){
        const div = document.createElement('div');
        div.innerHTML = `
        
        `
    }
}


