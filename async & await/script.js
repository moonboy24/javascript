// async/await = Async - makes a function return a promise
//               Await - makes a async function wait for a promise

// Allows you write asynchronous code in a syncg=hronous manner
// Async doesn't have resolve or reject parameters
// Everything after Await is placed in an event queue


function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;
      if (dogWalked) {
        resolve("You walk the Dog");
      } else {
        reject("You didn't walked the dog");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenClean = true;
      if (kitchenClean) {
        resolve("You clean the kitchen");
      } else {
        reject("You didn't cleaned the kitchen");
      }
    }, 2500);
  });
}

function trashOut() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashClean = true;
      if (trashClean) {
        resolve("You take out the trash");
      } else {
        reject("You didn't take out the trash");
      }
    }, 500);
  });
}

// Callback Hell 👇
// walkDog(() => {
//     CleanKitchen(() => {
//         trashOut(() => {
//             console.log("You finished all the chroes")
//         })
//     });
// });

// walkDog().then((value) => {console.log(value);return CleanKitchen();})
//          .then((value) => {console.log(value);return trashOut();})
//          .then((value) => {console.log(value);console.log("You finished all the Chors!");})
//          .catch(error => console.error(error));


async function doChores() {

  try{
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const trashOutResult = await trashOut();
    console.log(trashOutResult);

    console.log("You done all the chores!")
    }
    catch(error){
      console.error(error);
    }
}

doChores();