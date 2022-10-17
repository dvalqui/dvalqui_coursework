// //Episode 1
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);

  //Prediction: no definition
  //Nothing showed up

//   //Episode 2
//   const murderer = 'Professor Plum';

//   const changeMurderer = function() {
//     murderer = 'Mrs. Peacock';
//   }
  
//   const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
//   }
  
//   changeMurderer();
//   const verdict = declareMurderer();
//   console.log(verdict);

  //Prediction: The murderer is Professor Plum.
  //I was wrong. There was an error because there was disagreement
  //with the constant variable.
  //Also murderer = 'Mrs. Peacock';

//   //Episode 3
//   let murderer = 'Professor Plum';

//   const declareMurderer = function() {
//     let murderer = 'Mrs. Peacock';
//     return `The murderer is ${murderer}.`;
//   }
  
//   const firstVerdict = declareMurderer();
//   console.log('First Verdict: ', firstVerdict);
  
//   const secondVerdict = `The murderer is ${murderer}.`;
//   console.log('Second Verdict: ', secondVerdict);

  //Prediction: First Verdict: The murderer is Mrs. Peacock.
  //Second Verdict: The murderer is Professor Plum.
  //Yes! I got it!

//   //Episode 4
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

//Prediction: The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
//Suspect three is Colonel Mustard.
//I think I understand why I got Colonel Mustard wrong. Because it wasn't in the same function
//as the Colonel Mustard function.

//   //Episode 5
//   const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
  
//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);

  //Prediction: The weapon is the Revolver.
 //YES! 

//   //Episode 6
//   let murderer = 'Colonel Mustard';

//   const changeMurderer = function() {
//     murderer = 'Mr. Green';
  
//     const plotTwist = function() {
//       murderer = 'Mrs. White';
//     }
  
//     plotTwist();
//   }
  
//   const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
//   }
  
//   changeMurderer();
//   const verdict = declareMurderer();
//   console.log(verdict);

  //Prediction: The murderer is Colonel Mustard.
  //Don't totally understand why it's Mrs. White. Or why 'plot twist' is in there.
  //Is it Mrs. White because the function ends with plotTwist();?

//   //Episode 7
// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//Prediction: The murderer is Miss Scarlet. 
//Confused.

//   //Episode 8
//   const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
//   };
  
//   const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';
  
//     const plotTwist = function(room) {
//       if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//       }
  
//       const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//           scenario.weapon = 'Candle Stick';
//         }
//       }
  
//       unexpectedOutcome('Colonel Mustard');
//     }
  
//     plotTwist('Dining Room');
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
//   }
  
//   changeScenario();
//   const verdict = declareWeapon();
//   console.log(verdict);

  //Prediction: The weapon is the candlestick.
  //YES! Although I am not sure I could give the right answer as to why...because if the 
  //scenario had 'room' in it, then the murderer is Colonel Mustard, and if the murderer is Colonel 
  //Mustard, then the weapon is the candlestick.

//   //Episode 9
// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

//Prediction: The murderer is Mrs. Peacock.
//Confused. 

//   //Extension

let murderer = 'Miss Scarlet';


if (murderer === 'Miss Scarlet') {
    return 'the red lady';
}
const declareMurderer = function() {
      return `The murderer is ${murderer}.`;
 }
const verdict = declareMurder;
console.log(verdict);