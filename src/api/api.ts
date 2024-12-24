import { Transaction } from "./models/transaction";


let data: Transaction[] = []

export enum FetchState {
    FETCHING = "FETCHING",
    COMPLETE = "COMPLETE",
}

function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
  }

const postTransaction = (ammount:number) => {
    const nowDate = Date.now()
    data.push({
        id:uuidv4(),
        ammount,
        date: new Date(nowDate).toISOString().split('T')[0]
    });
}

function doSomethingAync(charlie) {
    
}

const getTransactions = (): Promise<Transaction[]>  => {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(data);
        }, 100);
    })
}
export {postTransaction, getTransactions}