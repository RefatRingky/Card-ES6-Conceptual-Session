const main =document.getElementById('main');
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
        .then(data => cardsDisplay(data.cards))
        input.value= "";
    }
    
}

const cardsDisplay = (cards) =>{
    // cards = cards.cards;
    console.log(cards);
    for(const card of cards){
        console.log(card);
        const div = document.createElement("div");
        div.classList.add("col-lg-4")
        div.classList.add("mb-5")
        div.classList.add('mt-5')
        div.innerHTML=`
            <div class="card" style="width: 18rem;">
                <img src="${card.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${card.suit}</h5>
                    <p class="card-text">${card.code}</p>
                    <button onclick="cardDetails('${card.code}')" class="btn btn-primary">See Details</button>
                </div>
            </div>
        `
        main.appendChild(div)
    }
}


