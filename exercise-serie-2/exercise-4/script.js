//Check to see if script is linked properly.

console.log("This script is linked properly!")


// Write your JS code here...

var request = new XMLHttpRequest();

request.open('GET', 'https://character-database.becode.xyz/characters', true);

request.onload = function() {
  
// Begin accessing JSON data here

  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {

    data.forEach(characters => {

      console.log("id= " + characters.id);
      console.log(characters.name);
      console.log(characters.description);
      console.log(characters.shortDescription);
      console.log(characters.image.substring(0, 150));

      const row111 = document.getElementById("row1");

      const card = document.createElement('div');
      card.setAttribute('class', 'card shadow d-flex align-items-center mt-5');

      const image = document.createElement('img');
      image.setAttribute('class', 'card-img-top card-title pt-3 pb-3 rounded');
      image.setAttribute('id', 'myImg');

      image.src = "data:image/gif;base64," + characters.image;


      // *************

      const cbody = document.createElement('div');
      cbody.setAttribute('class', 'card-body d-flex justify-content-center flex-column text-center');
      
      const h2 = document.createElement('h2');
      h2.textContent = characters.name;

      const h4 = document.createElement('h4');
      h4.textContent = characters.shortDescription.substring(0, 50);

      const p = document.createElement('p');
      p.textContent = characters.description.substring(0, 50);


      // *************

      //  Get the modal

      const modal111 = document.createElement("div");
      modal111.setAttribute('class', 'modal');
      modal111.setAttribute('id', 'myModal');

      const span111 = document.createElement("span");
      span111.setAttribute('class', 'close');

      const img111 = document.createElement("img");
      img111.setAttribute('class', 'modal-content');
      img111.setAttribute('id', 'img111');
      img111.setAttribute('alt', 'becode.xyz/characters');
      img111.src = "data:image/gif;base64," + characters.image;

      const p2 = document.createElement('p');
      p2.textContent = "### " + characters.name + ", " + characters.shortDescription + ". ### " + characters.description ;

      const caption111 = document.createElement("div");
      caption111.setAttribute('id', 'caption');
      

      var modal = document.getElementById('myModal');


      //  Get the image and insert it inside the modal - use its "alt" text as a caption

      var modalImg = document.getElementById("img111");
      
      image.onclick = function(){
      modal111.style.display = "block";
      modalImg.src = img111.src;
      }

      //  Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      //  When the user clicks on <span> (x), close the modal
      span111.onclick = function() { 
      modal.style.display = "none";
      }
      
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {

        if (event.target.className == modal.className) {
        event.target.style.display = "none";
        console.log(event.target, modal);
        }
      }

      // *************

      // Append the cards to the container element
            
      row1.appendChild(card);
      card.appendChild(image);
      card.appendChild(cbody);
      card.appendChild(modal111);

      cbody.appendChild(h2);
      cbody.appendChild(h4);
      cbody.appendChild(p); 

      modal111.appendChild(span111);
      modal111.appendChild(img111);
      modal111.appendChild(caption111);
      modal111.appendChild(p2);

    })

  } else {
    console.log('error');

  }
}

request.send();

//************************ */

// Send a POST request


async function sendXYZ() {

    var w = (document.getElementById("char_name").value);
    var x = (document.getElementById("char_short_dsc").value);
    var y = (document.getElementById("char_long_dsc").value);
    var z = (document.getElementById("char_image").value);

    console.log("W="  + w);
    console.log("X="  + x);
    console.log("Y="  + y);
    console.log("Z="  + z);

  if (w > '                                         ') {
    
    console.log("w= blank ...  " + w);

axios({


  method: 'POST',
  url: 'https://character-database.becode.xyz/characters',
  data: {
    name: document.getElementById("char_name").value,
    shortDescription: document.getElementById("char_short_dsc").value,
    description: document.getElementById("char_long_dsc").value,
    image: document.getElementById("char_image").value
  }

})

// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// })

;
}
}

//*********************** */

function resetXYZ() {
  document.getElementById("newCharRecord").reset();
}



