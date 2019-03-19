class Block {
    public index: number;
    public hash: string;
    public previodHash: string;
    public date: string;
    public timestamp: number;

    constructor(index: number, hash: string, previodHash: string, date: string, timestamp: number){
        this.index = index;
        this.hash = hash;
        this.previodHash = previodHash;
        this.date = date;
        this.timestamp = timestamp;
    }
}

const genesisBlock:Block = new Block(0, "202020202020", "", "Hello", 123456);

let blockChain : [Block] = [genesisBlock];
console.log(blockChain);
export {};