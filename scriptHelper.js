// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
  
        const missionTarget = document.getElementById('missionTarget');
        
         missionTarget.innerHTML =  `<h2>Mission Destination</h2>
                 <ol>
                    <li>Name: ${name}</li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src= ${image} alt = "Planet Image">`
   
}


function validateInput(value) {
  if (value === '') {
    return 'Empty';
  } else if (isNaN(value)) {
    return 'Not a Number';
  } else {
    return 'Is a Number';
  }
}

  function formSubmission(document, list, pilotName, coPilotName, fuelLevel, cargoMass) {

       
        if (validateInput(pilotName.value) === 'Empty' || validateInput(coPilotName.value) === 'Empty' || validateInput(fuelLevel.value) === 'Empty' || 
        validateInput(cargoMass.value) === 'Empty') {
          window.alert('Please ensure all fields are filled not empty before submitting.'); 
        } else if (validateInput(pilotName.value) === 'Is a Number' || validateInput(coPilotName.value) === 'Is a NUmber' || validateInput(fuelLevel.value) === 'Not a Number' || 
        validateInput(cargoMass.value) === 'Not a Number'){
          window.alert('Please insure all fields have correct input before submitting')
        } 
        
    const pilotStatus = document.getElementById('pilotStatus');
    const copilotStatus = document.getElementById('copilotStatus');
    const fuelStatus = document.getElementById('fuelStatus');
    const cargoStatus = document.getElementById('cargoStatus');
    const launchStatus = document.getElementById('launchStatus');
  
    // pilotStatus.innerHTML = `Pilot ${pilotName.value} Ready`;
    // copilotStatus.innerHTML = `Co-pilot ${coPilotName.value} Ready`;
  
    if (fuelLevel.value < 10000 && cargoMass.value <= 10000 ) {
      list.style.visibility = 'visible';
      pilotStatus.innerHTML = `Pilot ${pilotName.value} Ready`;
      copilotStatus.innerHTML = `Co-pilot ${coPilotName.value} Ready`;
      fuelStatus.innerHTML = 'Fuel level is too low for launch';
      cargoStatus.innerHTML = 'Cargo mass is low enough for launch';
      launchStatus.innerHTML = 'Shuttle not ready for launch';
      launchStatus.style.color = 'red';
    } else if (cargoMass.value > 10000 && fuelLevel.value >= 10000) {
      list.style.visibility = 'visible';
      pilotStatus.innerHTML = `Pilot ${pilotName.value} Ready`;
      copilotStatus.innerHTML = `Co-pilot ${coPilotName.value} Ready`;
      fuelStatus.innerHTML = 'Fuel level is high enough for launch';
      cargoStatus.innerHTML = 'Cargo mass is too high for launch';
      launchStatus.innerHTML = 'Shuttle not ready for launch';
      launchStatus.style.color = '#C7254E';
    } else if (fuelLevel.value < 10000 && cargoMass.value > 10000) {
      list.style.visibility = 'visible';
      pilotStatus.innerHTML = `Pilot ${pilotName.value} Ready`;
      copilotStatus.innerHTML = `Co-pilot ${coPilotName.value} Ready`;
      fuelStatus.innerHTML = 'Fuel level to low for launch';
      cargoStatus.innerHTML = 'Cargo mass is too high for launch';
      launchStatus.innerHTML = 'Shuttle not ready for launch';
      launchStatus.style.color = '#C7254E';
    } else if (fuelLevel.value >= 10000 && cargoMass.value <= 10000) {
      list.style.visibility = 'visible';
      pilotStatus.innerHTML = `Pilot ${pilotName.value} Ready`;
      copilotStatus.innerHTML = `Co-pilot ${coPilotName.value} Ready`;
      launchStatus.innerHTML = 'Shuttle is ready for launch';
      launchStatus.style.color = '#419F6A';
      cargoStatus.innerHTML = 'Cargo mass is low enough for launch';
      fuelStatus.innerHTML = 'Fuel level is high enough for launch';
      }
    }
      

function pickPlanet(listedPlanets) {
 
const randomIndex = Math.floor(Math.random() * listedPlanets.length)
return listedPlanets[randomIndex]
}

 async function myFetch() {
  const response =  await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response){
    return response.json()
    });
   
   return response;
  }



module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
