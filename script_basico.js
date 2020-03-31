// FUNÇÃO SINCRONA
function sumNumbers() {
  let result = 1 + 1;

  if (result === 2) {
    sucessCallback();
  } else {
    errorCallback();
  }
}

function sucessCallback() {
  console.log("Is number two");
}

function errorCallback() {
  console.log("Dont number two");
}

sumNumbers();

// USANDO PROMISSES
let p = new Promise((resolve, regect) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("sucess");
  } else {
    regect("failed");
  }
});

p.then(message => {
  console.log("this is in then " + message);
}).catch(err => {
  console.log("this is in catch " + message);
});
