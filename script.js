//const { myFetch } = require("./scriptHelper");

       window.addEventListener('load',function(){

        let listedPlanets;
        let selectedPlanet;
        // Set listedPlanetsResponse equal to the value returned by calling myFetch()
        let listedPlanetsResponse = myFetch();
        listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        }).then(function () {
        selectedPlanet = pickPlanet(listedPlanets)
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star,selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image)
        })

        let list = document.getElementById('faultyItems')
        let form = document.querySelector('form'); 
        form.addEventListener('submit', function(event){
        event.preventDefault();
        let pilotName = document.querySelector('input[name=pilotName]' );
        let coPilotName = document.querySelector('input[name=copilotName]');
        let fuelLevel = document.querySelector('input[name=fuelLevel]');
        let cargoMass = document.querySelector('input[name=cargoMass]');

        formSubmission(document, list, pilotName, coPilotName, fuelLevel, cargoMass);
        })
    
});




