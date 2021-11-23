const crypto = require("crypto");

const cryptoHash = (...inputs) => {
  //to specify that we are gonna use sha256
  const hash = crypto.createHash("sha256");

  //to update the value that we need to put into the hashing function
  hash.update(inputs.sort().join(""));

  //to convert the hash to lowercase
  return hash.digest("hex");
};
console.log(cryptoHash("karan"));
module.exports = cryptoHash;
