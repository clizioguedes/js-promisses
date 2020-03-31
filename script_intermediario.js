const betterDeveloper = "NILZA";

function whoIsBetterDeveloper(callback, errorCallback) {
  return new Promise((resolve, reject) => {
    if (betterDeveloper == "CLIZIO" || betterDeveloper == "CLOVES") {
      resolve({
        name: betterDeveloper,
        message: "CLIZIO"
      });
    } else {
      reject({
        name: betterDeveloper,
        message: "NÃO É VDD"
      });
    }
  });
}

whoIsBetterDeveloper()
  .then(result => {
    console.log("ACERTO");
  })
  .catch(error => {
    console.log("ERRO");
  });
