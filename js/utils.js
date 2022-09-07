let res_houses = document.getElementById("res_houses")

// fetch 20 houses for a given state code and city
async function housesToBuy(event) {
    event.preventDefault();
  
    
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
  //Search for houses for sale in API
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
        //show house_details after fetch
        let dict = data.listings.map(item => {

          return {
            //house_id: item.property_id,
            house_photo: item.photo,
            Price: item.short_price,
            Type: item.prop_type,
            Beds: item.beds,
            Baths: item.baths_full,
            Address: item.address,
            house_url:item.rdc_web_url

          }
        })
        return dict
        
      })

      //create a card to display stylezed house_details
      for (let i = 0; i <= teste.length; i++)
      {
        const card = document.createElement("div")
        card.className='card'
        const left = document.createElement('div')
        const right = document.createElement('div')
        right.className='right'
        const houses = document.createElement("ul")

        for(let j in teste[i]){
          if(j !== 'house_photo' && j !== 'house_url'){
            const house_detail = document.createElement("li")
            house_detail.innerHTML = j + ': ' + teste[i][j]
            houses.appendChild(house_detail)
          }
          else if (j!== 'house_photo'){
            const house_detail = document.createElement("li")
            const link = document.createElement('a')
            link.innerHTML = 'More Details'
            link.style.color= 'rgb(225, 187, 128)'
            link.href = teste[i][j]
            house_detail.appendChild(link)
            houses.appendChild(house_detail)

          }
          else{
            const house_detail = document.createElement("img")
            house_detail.id = "house_photo"
            house_detail.src = teste[i][j]
            left.appendChild(house_detail)
          }
          right.appendChild(houses)
          card.appendChild(left)
          card.appendChild(right)
        }
        res_houses.appendChild(card)
      }
  }



  // fetch 20 houses for a given state code and city
async function housesToRent(event) {
  event.preventDefault();

  
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

//Search for houses to rent in API
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
      //show house details after fetch
      let dict = data.listings.map(item => {
        return {
          //house_id: item.property_id,
          house_photo: item.photo,
          Price: item.short_price,
          Type: item.prop_type,
          Beds: item.beds,
          Baths: item.baths_full,
          Address: item.address,
          house_url:item.rdc_web_url

        }
      })
      return dict
      
    })
    //create a card to display stylezed house details
    for (let i = 0; i <= teste.length; i++)
    {
      const card = document.createElement("div")
      card.className='card'
      const left = document.createElement('div')
      const right = document.createElement('div')
      right.className='right'
      const houses = document.createElement("ul")

      for(let j in teste[i]){
        if(j !== 'house_photo' && j !== 'house_url'){
          const house_detail = document.createElement("li")
          house_detail.innerHTML = j + ': ' + teste[i][j]
          houses.appendChild(house_detail)
        }
        else if (j!== 'house_photo'){
          const house_detail = document.createElement("li")
          const link = document.createElement('a')
          link.innerHTML = 'More Details'
          link.href = teste[i][j]
          house_detail.appendChild(link)
          houses.appendChild(house_detail)

        }
        else{
          const house_detail = document.createElement("img")
          house_detail.id = "house_photo"
          house_detail.src = teste[i][j]
          left.appendChild(house_detail)
        }
        right.appendChild(houses)
        card.appendChild(left)
        card.appendChild(right)
      }
      res_houses.appendChild(card)
    }
}