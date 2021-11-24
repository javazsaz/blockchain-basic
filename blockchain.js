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
  isValidChain(chain) {
    
  }
}

module.exports = Blockchain;
