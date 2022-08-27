const scrollUp = document.getElementById("scroll-up");
//scroll screen up
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

//Searching for rentals in API
let search = document.getElementById('search').value

let btn_search = addEventListener('click', function searchRentals() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4af856f0d1mshc1d8102f0086981p10e823jsnc6ac426683f6',
            'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
        }
    };
    
    fetch('https://realty-in-us.p.rapidapi.com/properties/v2/list-for-rent?city=New%20York%20City&state_code=NY&limit=200&offset=0&sort=relevance', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
})


