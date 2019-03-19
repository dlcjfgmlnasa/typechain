import * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previodHash: string;
    public date: string;
    public timestamp: number;

    static calcuateBlockHash = (
        index: number, 
        previodHash: string,
        timestamp: number,
        date: string
    ): string => CryptoJS.SHA256(index + previodHash + timestamp + date).toString()

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

export {};