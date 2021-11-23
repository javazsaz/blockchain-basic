const { GENESIS_DATA } = require("./config");
const cryptoHash = require("./crypto-hash");

class Block {
  constructor({ timestamp, lastHash, hash, data }) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }
  // static means-- it can be used without instantiating the class
  static genesis() {
    return new Block(GENESIS_DATA);
  }

  static mineBlock({ lastBlock, data }) {
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;
    return new Block({
      timestamp,
      lastHash,
      data,
      hash: cryptoHash(timestamp, lastHash, data),
    });
  }
}
console.log(Block.mineBlock({ lastBlock: GENESIS_DATA, data: "data" }));
console.log(Block.mineBlock({ lastBlock: GENESIS_DATA, data: "saadadsa" }));
//sharing class with other files
module.exports = Block;
