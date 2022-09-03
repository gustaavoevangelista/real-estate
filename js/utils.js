// fetch 20 houses for a given state code and city
function housesToBuy(event) {
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

    };
  
    console.log({ ...data });
  
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
      .then(data => /* console.log(data) */{
        const houses = data.results
        houses.forEach(house =>{
          document.getElementById("res_houses")
            .insertAdjacentHTML('beforeend', `<div id=${house.property_id}
                                                <div
                                                  <img src=${house.photo}>
                                                </div>
                                                <div>
                                                  <h3>${house.short_price}{house.prop_type}</h3>
                                                  <span>
                                                    ${house.beds} Beds ${house.baths_full} Bath
                                                  </span>
                                                  <span>
                                                    ${house.address}
                                                  </span>
                                                  <a href=${house.rdc_web_url}>
                                                    Details
                                                  </a>
                                                </div>
                                              </div>`)
        })
      })
      .catch(err => console.error(err));

    let res_houses = document.getElementById("res_houses")
    res_houses.innerHTML = document.createElement("div", "id=housesbox")
    /* let housesbox = document.getElementById("housesbox")
    housesbox.innerHTML = "box house" */




  }

  // fetch 20 houses for a given state code and city
function housesToRent(event) {
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

  };

  console.log({ ...data });

  fetch(
    'https://realty-in-us.p.rapidapi.com/properties/list-for-rent?state_code=' +
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