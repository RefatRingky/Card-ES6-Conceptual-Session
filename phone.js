const spinner = (spinnerStyle) => {
    const spinner = document.querySelector('.spinner-border').style.display = spinnerStyle
}
spinner()



const searchPhone = () => {
    document.getElementById('phone-detail').textContent = ''
    document.getElementById('container').textContent = ''
    spinner('block')
    const inputValue = document.getElementById('search-field').value;

    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPlayer(data.data))


    document.getElementById('search-field').value = ''



}


const displayPlayer = (data) => {
    // if (data == null) {
    //     alert('food not found')
    //     spinner('none')

    // }
    // console.log(data);
    const container = document.getElementById('container')
    // container.innerHTML = ''
    data.forEach(data => {
        console.log(data);
        // if (data.length == 0) {
        //     alert('food not found')

        // }

        const div = document.createElement('div')
        div.classList.add('myStyle')
        div.innerHTML = `
            <img class='w-50'  src="${data.image}" alt="">
            <h2>name: ${data.brand} </h2>
            <p>${data.phone_name}</p>
            <button class='text-white bg-success border rounded' onclick="showDetail('${data.slug}')">Detail</button>
             
             `
        container.appendChild(div)


        spinner('none')


    })
}
const showDetail = (id) => {
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data))

}


const displayDetails = (details) =>{
    console.log(details);
    const phoneDetails = document.getElementById('phone-detail');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <div class="card">
           <img src="${details.image}" class="card-img-top" alt="...">
        //    <div class="card-body">
        //      <h5 class="card-title">${data.mainFeatures}</h5>
        //      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //      <a href="${data.others}" class="btn btn-primary">Show Detail</a>
        //    </div>
         </div>
         <div class="details">
         <h2>Brand:${details.brand}</h2>
         <p>Name:${details.name}</p>
         <p>releaseDate:${details.releaseDate}</p>
         </div>
    `
    phoneDetails.appendChild(div);
}

// const displayDetail = (phones) => {

//     // console.log(drinkss);
//     const details = document.getElementById('phone-detail')
//     details.textContent = ''
//     phones.forEach(data => {
//         // console.log(drink);
//         const div = document.createElement('div')
//         div.classList.add('detail')
//         div.classList.add('myStyle')
//         div.innerHTML = `
//         <img class='w-50'  src="${data.image}" alt="">
//         <h2> ${data.sensors} </h2>
//         <p>${data.chipSet}</p>
       
       
         
//          `
//         details.appendChild(div)


//     })



// }