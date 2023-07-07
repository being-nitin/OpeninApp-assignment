import React from 'react'
import Data from './Rawdata'
import Users from "./images/Users.png";
import Likes from "./images/Likes.png";
import Revenues from "./images/Revenues.png";
import Transaction from "./images/Transactions.png";

const Displaydivs=()=> {
    let transactions=0,revenues=0,likes=0,users=0;
  return (
    <>
    {
       Data.map((item)=>{
        transactions = transactions+ item.transaction;
        revenues = revenues+item.revenues ;
        likes= likes+ item.likes;
        users=users+item.users;
       }) 
    }
    <div className='displayDivs' >

    <div
    className='revenues'
    >
    <img className='boxImage' src={Revenues}/>

    <div className='contentDiv'>
        <p className='detailDiv'>
        Total Revenues
        </p>
        <p className='numbers' >
        {"$"+revenues}

        </p>
    </div>

    </div>

    <div
    className='transactions'
    >
    <img className='boxImage' src={Transaction}/>
     
     <div className='contentDiv'>
    <p className='detailDiv'>
         Total Transactions
        </p>
        <p className='numbers'>
            {transactions}
        </p>
        </div>
    </div>

    <div
    className='likes'
    >
    <img className='boxImage' src={Likes}/>
        <div className='contentDiv'>
    <p className='detailDiv'>
      Total Likes
        </p>
        <p className='numbers'>
            {likes}
        </p>
        </div>
    </div>

    <div
    className='users'
    >
    <img className='boxImage' src={Users}/>
     
     <div className='contentDiv'>
    <p className='detailDiv'>
      Total Users
        </p>
        <p className='numbers'>
            {users}
        </p>
        </div>
    </div>

    </div>
    </>
  )
}

export default Displaydivs;