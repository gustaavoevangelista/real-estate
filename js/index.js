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
let stateCode = document.getElementById('stateCode').value

let btn_search = addEventListener("click", function searchHouses(req,response) {

    let data = {
        state_code: stateCode,
        city: search,
        offset: 0,
        limit: 20
    }

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4af856f0d1mshc1d8102f0086981p10e823jsnc6ac426683f6',
            'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com', 
            'Content-type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin" : "*", 
            "Access-Control-Allow-Credentials" : true 
        },
        
        /* params: {data}  */

    };
    
    //colocar hard coded state code and city
    fetch('https://realty-in-us.p.rapidapi.com/properties/list-for-sale?state_code='+stateCode+'&city='+search+' &offset=0&limit=20', options)
        
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err))
}) 



