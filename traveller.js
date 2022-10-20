const Traveller = function (journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function(startLocation) {
  return this.journeys.filter((journeys)=>{
    return journeys.startLocation === startLocation;
  })
};

Traveller.prototype.getJourneyEndLocations = function (endLocation) {
  return this.journeys.filter((journeys) => {
    return journeys.endLocation === endLocation;
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journeys) => {
    return journeys.transport === transport;
  })
};

Traveller.prototype.getJourneysByMinDistance = function () {
  return this.journeys.reduce((minDistance, journeys) => {
    return journeys.minDistance >= minDistance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
