const makeHash = (data) => {
  return data + 1;
};
class Block {
  constructor(data, hash, lastHash) {
    this.data = data;
    this.hash = hash;
    this.lastHash = lastHash;
  }
}

class Blockchain {
  constructor() {
    const genesis = new Block("gen-data", 0 + "x", "");
    this.chain = [genesis];
  }
  addBlock(data) {
    const lastHash = this.chain[this.chain.length - 1].hash;
    const hash = makeHash(lastHash);
    const block = new Block(data, hash, lastHash);
    this.chain.push(block);
  }
}

const fooBlockchain = new Blockchain();
fooBlockchain.addBlock("One");
fooBlockchain.addBlock("Two");
fooBlockchain.addBlock("Three");

console.log(fooBlockchain);
