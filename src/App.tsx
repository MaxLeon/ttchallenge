import { useEffect, useState } from 'react'
import './App.css'
import {postTransaction, getTransactions, FetchState } from './api/api'
import { Transaction } from './api/models/transaction'

function App() {

  const [fetchState, setFetchState] = useState(FetchState.FETCHING)
  const [addInput, setAddInput] = useState<string>()
  const [transactions, setTransactions] = useState<Transaction[]>()

const addTransactionHandler = (ammount?:string) => {
  if(ammount) {
    postTransaction(parseInt(ammount))
    setFetchState(FetchState.FETCHING)
  }
}

useEffect(() =>{

  const transactions = async () =>{ getTransactions() }
  setTransactions(transactions);
},[fetchState])

  return (
    <>
      <div>
        
      </div>
      <div>
        <input onChange={(e)=>setAddInput(e.target.value)} placeholder='amount'/>
        <button onClick={()=>addTransactionHandler(addInput)} title='add-transaction'>
          Add transaction
        </button>
      </div>
      <div>
        CHECK
      </div>
      <div>
        {transactions?.map(({id, ammount, date})=> 
        <div>
          <div>transaction id: {id}</div>
          <div>amount id: {ammount}</div>
          <div>date: {date}</div>
        </div>)}
      </div>
    </>
  )
}

export default App
