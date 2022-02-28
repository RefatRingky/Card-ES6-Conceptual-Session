const spinner = (spinnerStyle) => {
    const spinner = document.querySelector('.spinner-border').style.display = spinnerStyle
}
spinner()



const searchPlayer = () => {
    document.getElementById('detail').textContent = ''
    document.getElementById('container').textContent = ''
    spinner('block')
    const inputValue = document.getElementById('search-fild').value;

    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPlayer(data.drinks))


    document.getElementById('search-fild').value = ''



}


const displayPlayer = (drinks) => {
    if (drinks == null) {
        alert('food not found')
        spinner('none')

    }
    // console.log(drinks);
    const container = document.getElementById('container')
    // container.innerHTML = ''
    drinks.forEach(drink => {
        if (drink.length == 0) {
            alert('food not found')

        }

        const div = document.createElement('div')
        div.classList.add('myStyle')
        div.innerHTML = `
            <img class='w-50'  src="${drink.strDrinkThumb}" alt="">
            <h2>name: ${drink.strCategory} </h2>
            <p>${drink.strDrink}</p>
           
            <button class='text-white bg-success border rounded' onclick="showDetail('${drink.idDrink}')">Detail</button>
    
             
             `
        container.appendChild(div)


        spinner('none')


    })
}
const showDetail = (id) => {
    // console.log(id);
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetail(data.drinks))

}

const displayDetail = (drinkss) => {

    // console.log(drinkss);
    const details = document.getElementById('detail')
    details.textContent = ''
    drinkss.forEach(drink => {
        // console.log(drink);
        const div = document.createElement('div')
        div.classList.add('detail')
        div.classList.add('myStyle')
        div.innerHTML = `
        <img class='w-50'  src="${drink.strDrinkThumb}" alt="">
        <h2> ${drink.strAlcoholic} </h2>
        <p>${drink.strIngredient2}</p>
       
       
         
         `
        details.appendChild(div)


    })



}