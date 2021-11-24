const Block = require("./block");

class Blockchain {
  constructor() {
    // adding genesis block into the chain
    this.chain = [Block.genesis()];
  }
  addBlock({ data }) {
    const newBlock = Block.mineBlock({
      lastBlock: this.chain[this.chain.length - 1],
      data,
    });
    this.chain.push(newBlock);
  }
  // static isValidChain(chain) {
  //   if (chain[0] !== Block.genesis()) {
  //     return false;
  //   }
  //   for (let i = 1; i < chain.length; i++) {
  //     const block = chain[i];
  //     const actualHash
  //   }
  //   return true;
  // }
}

const blockchain = new Blockchain();
console.log(blockchain);
module.exports = Blockchain;
