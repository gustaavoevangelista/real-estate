// fetch 20 houses for a given state code and city
function searchHouses(event) {
    event.preventDefault();
  
    //Search for houses for sale in API
    let search = document.getElementById('search').value;
    let stateCode = document.getElementById('stateCode').value;
  
    let data = {
      state_code: stateCode,
      city: search,
      offset: 0,
      limit: 20
    };
  
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4af856f0d1mshc1d8102f0086981p10e823jsnc6ac426683f6',
        'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com',
        'Content-type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      }
  
      /* params: {data}  */
    };
  
    console.log({ ...data });
  
    // colocar hard coded state code and city
    fetch(
      'https://realty-in-us.p.rapidapi.com/properties/list-for-sale?state_code=' +
        data.state_code +
        '&city=' +
        data.city +
        ' &offset=' +
        data.offset +
        '&limit=' +
        data.limit,
      options
    )
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }