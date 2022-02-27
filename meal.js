 const searchFood= () =>{
   const searchField = document.getElementById('search-field');
   const searchText = searchField.value;
   console.log(searchText);
   searchField.value ="";
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
   fetch(url)
   .then(res =>res.json())
   .then(data =>showResult(data.meals))
 }

 const showResult = meals =>{
    const searchResult = document.getElementById('search-results');
    meals.forEach( meal =>{
        console.log(meal);
        const div = document.createElement('div');
        div.innerHTML = `
        <div  class="col">
        <div class="card">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
        `
        searchResult.appendChild(div);

    })
 }
