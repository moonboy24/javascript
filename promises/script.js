// Promises - An object that manages asynchronous operations
//            Wrap a prpmise object around {asynchronous code}
//            "I Promise to return a value"
//             PENDING --> Resolved or Rejected
//             new Promise(resolve , reject) => {asynchronous code}

// Do these chroes in order

// 1. Walk the Dog
// 2. Clean the Kitchen
// 3. Take out the Trash

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

function CleanKitchen() {
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
      const trashClean = false;
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

walkDog()
  .then((value) => {
    console.log(value);
    return CleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return trashOut();
  })
  .then((value) => {
    console.log(value);
    console.log("You finished all the Chors!");
  })
  .catch(error => console.error(error));
