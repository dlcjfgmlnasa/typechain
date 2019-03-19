import * as CryptoJS from "crypto-js";

class Block {
    static calcuateBlockHash = (
        index: number, 
        previodHash: string,
        timestamp: number,
        date: string
    ): string => CryptoJS.SHA256(index + previodHash + timestamp + date).toString()

    static valdidateStructure = (aBlock: Block) : Boolean => 
        typeof aBlock.index === "number" && 
        typeof aBlock.hash === "string" && 
        typeof aBlock.previodHash === "string" &&
        typeof aBlock.timestamp === "number" &&
        typeof aBlock.date === "string";

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

let blockChain : Block[] = [genesisBlock];

const getblockChain = ():Block[] => blockChain

const getLastestBlock = ():Block => blockChain[blockChain.length - 1]

const getNewTimeStamp = ():number => Math.round(new Date().getTime() / 1000)

const createNewBlock = (date: string): Block => {
    const previodBlock: Block = getLastestBlock();
    const newIndex: number = previodBlock.index + 1;
    const newTimestamp: number = getNewTimeStamp();
    const newHash: string = Block.calcuateBlockHash(
        newIndex, 
        previodBlock.hash,
        newTimestamp, 
        date)
    const newBlock: Block = new Block(
        newIndex, 
        newHash, 
        previodBlock.hash, 
        date, 
        newTimestamp);
    addBlock(newBlock)
    return newBlock;
}

const isBlockValid = (candidateBlock : Block, previodBlock: Block) : Boolean => {
    if(!Block.valdidateStructure(candidateBlock)){
        return false;
    } else if (previodBlock.index + 1 !== candidateBlock.index){
        return false;
    } else if (previodBlock.hash !== candidateBlock.previodHash){
        return false;
    } else {
        return true;
    }
}

const addBlock = (candidateBlock: Block) : void => {
    if(isBlockValid(candidateBlock, getLastestBlock())){
        blockChain.push(candidateBlock);
    }
}

createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");
console.log(blockChain);

export {};