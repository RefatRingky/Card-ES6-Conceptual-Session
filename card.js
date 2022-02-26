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
        main.innerHTML = "";
    }
    else if(inputValue <0){
        error.innerText = "Plaese enter positive value";
        input.value= "";
        main.innerHTML = "";
    }
    else{
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
        .then(res => res.json())
        .then(data => cardsDisplay(data.cards))
        input.value= "";
        error.innerHTML = "";
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

const cardDetails = (code) =>{
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
        .then(res => res.json())
        .then(data => {
            const allCards = data.cards;
            const singleCard = allCards.find(card => card.code === code)
            console.log(singleCard);
            const div = document.createElement("div");
            main.innerHTML="";
            div.innerHTML=`
                <div class="card" style="width: 18rem;">
                    <img src="${singleCard.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${singleCard.suit}</h5>
                        <p class="card-text">${singleCard.code}</p>
                        <p class="card-text">${singleCard.value}</p>
                    </div>
                </div>
            `
            main.appendChild(div)
        })
            
           
       
}


