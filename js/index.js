const scrollUp = document.getElementById("scroll-up");
//scroll screen up
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

//Search for houses for sale in API
let search = document.getElementById('search').value

let btn_search = addEventListener('click', function searchHouses() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4af856f0d1mshc1d8102f0086981p10e823jsnc6ac426683f6',
            'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
        },
        params: {
            state_code: req.query.state_code,
            city: req.query.city,
            offset: "0",
            limit: "20",
        }
    };
    
    fetch('https://realty-in-us.p.rapidapi.com/properties/v2/list-for-sale', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}) 



