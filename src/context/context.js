import React, { useReducer, createContext } from 'react';
import contextReducer  from './contextReducer'

const  initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":75,"category":"House","type":"Expense","date":"2023-07-25","id":"0e18fb32-2444-487e-9750-74301aef9211"},{"amount":55,"category":"Travel","type":"Expense","date":"2023-07-24","id":"dcd44d7b-d400-4b3e-b0a3-6ba080f700cd"},{"amount":50,"category":"Business","type":"Income","date":"2023-07-25","id":"fd301b50-736e-4c23-9c23-126a2f4b10d2"},
{"amount":100,"category":"Salary","type":"Income","date":"2023-07-24","id":"128c4d6b-bcf3-49df-ac33-dd80ce15ea0a"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children})=>{
    const [transactions,dispatch] = useReducer(contextReducer,initialState);

    //action creators
    const deleteTransaction = (id)=>{
        dispatch({type:'DELETE_TRANSACTION', payload:id})
    }
    const addTransaction = (transaction)=>{
        dispatch({type:'ADD_TRANSACTION', payload:transaction})
    }
    const balance = transactions.reduce((acc,currVal)=> {
        return (currVal.type === 'Expense' ? acc-currVal.amount : acc+currVal.amount )
    },0);
    return (
        <ExpenseTrackerContext.Provider value={{deleteTransaction,addTransaction,transactions,balance}}>
            {children}
        </ExpenseTrackerContext.Provider>
    );
};