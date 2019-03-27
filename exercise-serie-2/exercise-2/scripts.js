
// Create a request variable and assign a new XMLHttpRequest object to it.



var request = new XMLHttpRequest();

request.open('GET', 'https://api.punkapi.com/v2/beers', true);

request.onload = function() {
  
  // Begin accessing JSON data here

  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {

    data.forEach(beer => {

      console.log(beer.name);
      console.log(beer.description);

      const row111 = document.getElementById("row1");

      const card = document.createElement('div');
      card.setAttribute('class', 'card shadow d-flex align-items-center mt-5');

      const image = document.createElement('img');
      image.setAttribute('class', 'card-img-top card-title pt-3 pb-3 rounded');
      image.src = beer.image_url;

      const cbody = document.createElement('div');
      cbody.setAttribute('class', 'card-body d-flex justify-content-center flex-column text-center');
      
      const h3 = document.createElement('h3');
      h3.textContent = beer.name;

      const h4 = document.createElement('h4');
      h4.textContent = beer.tagline;

      const p = document.createElement('p');
      p.textContent = beer.first_brewed;

     
            
      row1.appendChild(card);
      card.appendChild(image);
      card.appendChild(cbody);
      cbody.appendChild(h3);
      cbody.appendChild(h4);
      cbody.appendChild(p); 


    })
  } else {
    console.log('error');
    
  }
}

request.send();
