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
    // searchResult.innerHTML = '';
    searchResult.textContent='';
    meals.forEach( meal =>{
        // console.log(meal);
        const div = document.createElement('div');
        div.innerHTML = `
        <div onclick = "loadMealDetails(${meal.idMeal})" class="col">
        <div class="card">
          <img src="${meal.strMealThumb}" class="card-img-top " alt="..." >
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

 const loadMealDetails = mealId =>{
     const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
     fetch(url)
     .then(res =>res.json())
     .then(data => displayMealDetails(data.meals[0]))
    // console.log(mealId);
 }

 const displayMealDetails = meal =>{
     const mealDetails = document.getElementById('meal-details');
     const div = document.createElement('div');
     div.classList.add('card');
     div.innerHTML = `
     <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
     `
     mealDetails.appendChild(div);
 }


