const scrollUp = document.getElementById('scroll-up');
//scroll screen up
scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

// Select search button
let btn_search = document
  .getElementById('btn-search')
  .addEventListener('click', searchHouses);

// let btn_search_rents = document.getElementById().addEventListener('click',searchHouses)


// usar map() , appendchild() , innerHTML

