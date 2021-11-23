const { GENESIS_DATA } = require("./config");

class Block {
  constructor({ timestamp, lastHash, hash, data }) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }
  // static means-- it can be used without instantiating the class
  static genesis() {
    return new this(GENESIS_DATA);
  }

  static mineBlock(lastBlock, data) {
    return new this({
      timestamp: Date.now(),
      lastHash: lastBlock.hash,
      data,
    });
  }
}

//sharing class with other files
module.exports = Block;
