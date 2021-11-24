const Blockchain = require("../blockchain");
const Block = require("../block");

describe("Blockchain", () => {
  let blockchain;
  beforeEach(() => {
    blockChain = new Blockchain();
  });
  it("checks for the instance of an array", () => {
    expect(blockchain.chain instanceof Array).toBe(true);
  });

  it("starts with the genesis block", () => {
    expect(blockchain.chain[0]).toEqual(Block.genesis());
  });

  it("adds a new block to the chain", () => {
    const newData = "foo-bar";
    blockchain.addBlock({ data: newData });
    expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(newData);
  });

  // check for the function isValidChain()
  describe("isValidChain()", () => {
    // when the chain does not starts with the genesis block
    describe("when the chain does not starts with the genesis block", () => {
      it("returns false", () => {
        blockchain.chain[0] = { data: "worthless-data" };
        expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);
      });
    });

    // when the chain starts with genesis block and has multiple blocks
    describe("when the chain starts with genesis block and has multiple blocks", () => {
      // runs a function before each of the test
      beforeEach(() => {
        blockchain.addBlock({ data: "Bears" });
        blockchain.addBlock({ data: "Beets" });
        blockchain.addBlock({ data: "Battlestar Galactica" });
      });
      // when the lastHash reference has changed
      describe("and a lastHash reference has changed", () => {
        it("returns false", () => {
          blockchain.chain[2].lastHash = "broken-lastHash";

          expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);
        });
      });

      //when the chain contains a block with an invalid field {timestamp, date, lastHash, hash}
      describe("and the chain contains an invalid field", () => {
        blockchain.chain[2].data = "this-is-some-bad-data";
        expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);
      });
    });
    // and the chain does not contain any invalid blocks
    describe("and the chain does not contain any invalid blocks", () => {
      it("returns true", () => {
        expect(Blockchain.isValidChain(blockchain.chain)).toBe(true);
      });
    });
  });
});
