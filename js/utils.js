let res_houses = document.getElementById("res_houses")

// fetch 20 houses for a given state code and city
async function housesToBuy(event) {
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
  
    const teste = await fetch(
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
      .then(data => {
        //console.log(data.listings)
        let dict = data.listings.map(item => {
          //console.log(item)
          return {
            //house_id: item.property_id,
            house_photo: item.photo,
            house_short_price: item.short_price,
            house_prop_type: item.prop_type,
            house_beds: item.beds,
            house_baths: item.baths_full,
            house_address: item.address,
            house_url:item.rdc_web_url

          }
        })
        return dict
        
      })

      for (let i = 0; i <= teste.length; i++)
      {
        const houses = document.createElement("ul")

        for(let j in teste[i]){
          if(j !== 'house_photo'){
            const house_detail = document.createElement("li")
            house_detail.innerHTML = teste[i][j]
            houses.appendChild(house_detail)
          }
          else{
            const house_detail = document.createElement("img")
            house_detail.id = "house_photo"
            house_detail.src = teste[i][j]
            houses.appendChild(house_detail)
          }
        }
        res_houses.appendChild(houses)
      }
  }



  // fetch 20 houses for a given state code and city
async function housesToRent(event) {
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

  const teste = await fetch(
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
    .then(data => {
      //console.log(data.listings)
      let dict = data.listings.map(item => {
        //console.log(item)
        return {
          //house_id: item.property_id,
          house_photo: item.photo,
          house_short_price: item.short_price,
          house_prop_type: item.prop_type,
          house_beds: item.beds,
          house_baths: item.baths_full,
          house_address: item.address,
          house_url:item.rdc_web_url

        }
      })
      return dict
      
    })
    //console.log(teste)
    for (let i = 0; i <= teste.length; i++)
    {
      const houses = document.createElement("ul")

      for(let j in teste[i]){
        if(j !== 'house_photo'){
          const house_detail = document.createElement("li")
          house_detail.innerHTML = teste[i][j]
          houses.appendChild(house_detail)
        }
        else{
          const house_detail = document.createElement("img")
          house_detail.id = "house_photo"
          house_detail.src = teste[i][j]
          houses.appendChild(house_detail)
        }

      }
      res_houses.appendChild(houses)
    }
    //.catch(err => console.error(err));
}