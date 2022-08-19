 var carObject = {
    vheicle: "Car",
    imageUrl: 'https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    farePerKilo: 3,
    capacity: 4,
    details: 'The website of CAR magazine UK: bursting with motoring news, reviews, car spyshots and features.The website of CAR magazine UK: bursting with motoring news, reviews, car spyshots and features.'
 };
 var bikeObject = {
    vheicle: 'Bike',
    imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
    farePerKilo: 2,
    capacity: 4,
    details: 'The website of CAR magazine UK: bursting with motoring news, reviews, car spyshots and features.The website of CAR magazine UK: bursting with motoring news, reviews, car spyshots and features.'
 };
 var busObject = {
    vheicle: 'Bus',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    farePerKilo: 1,
    capacity: 25,
    details: 'The website of CAR magazine UK: bursting with motoring news, reviews, car spyshots and features.The website of CAR magazine UK: bursting with motoring.'
 };



 
 function sevicesCard(objectName){
    const serviceSection = document.getElementById('sevice-section');
    const stringified = JSON.stringify(objectName);
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card mb-3 mx-auto" style="max-width: 800px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src=${objectName.imageUrl} class="img-fluid rounded-start h-100" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Transport Mood : ${objectName.vheicle}</h5>
                      <p class="card-text"><small class="text-muted">FarePerKilo : ${objectName.farePerKilo} </small> <small class="text-muted">Capcity : ${objectName.capacity} </small></p>
                      <p class="card-text">Details : ${objectName.details} </p>
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick='handleBooking(${stringified})' data-bs-target="#exampleModal">
                     Book Now
                    </button>
                    </div>
                  </div>
                </div>
              </div>`;
              serviceSection.appendChild(div);

 }
 sevicesCard(carObject);
 sevicesCard(bikeObject);
 sevicesCard(busObject);
 function handleBooking(obj){
    const modalbody = document.getElementById('modal-body');
    const stringifiedObj = JSON.stringify(obj);
    modalbody.innerHTML= `
    <div class="card mx-auto" style="width:  20rem;">
  <img src="${obj.imageUrl} " class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Vheicle Mood: ${obj.vheicle}</h5>
    <p class="card-text">Details : ${obj.details} </p>
    <p class="card-text"><small class="text-muted">FarePerKilo : ${obj.farePerKilo} </small> <small class="text-muted">Capcity : ${obj.capacity} </small></p>
    <div class="d-flex flex-column" >
    <p>Fare: <small class="text-muted" id="fare"></small > </p>
     <p>tax: <small class="text-muted" id="tax"></small > </p>
     <p>Total-cost: <small class="text-muted" id="total-cost"></small > </p>
                  <input id = 'kilometer-input' class="form-control mb-2" type="number" placeholder="Enter Kilometer" aria-label="Search">
                  <input id = 'vheicle-input' class="form-control mb-2" type="number" placeholder="Enter total vheicle" aria-label="Search">
                  <button class="btn btn-outline-success" onclick='costCalculation(${stringifiedObj})' type="submit">Submit </button>
                </div>
    
  </div>
</div>
    `
 }

 function costCalculation(obj){
   const distance = document.getElementById("kilometer-input").value;
   const quantity = document.getElementById('vheicle-input').value;
   const fareBox = document.getElementById('fare');
   fareBox.innerHTML = distance * quantity * obj.farePerKilo;
   
 }

 
