import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

function displayStaffStatus() {
  availableAirplanes.forEach(function(element){
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff,flightRequirements.requiredStaff));
    });
};

displayStaffStatus();
