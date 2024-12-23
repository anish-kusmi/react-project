import React, { useContext, useEffect, useState } from 'react'
import productContext from '../context/ProductContext'
import giph from '../assets/giphy.webp';

const Profile = () => {
 const context = useContext(productContext);
 const {product, articles, fetchData} = context;
 console.log('this is article',articles);
 

 useEffect(()=>{
 fetchData();
 },[])

  return (
    <div className='container mt-4'>
      <h4>This is News</h4>
  
      {articles && articles.length > 0 ?(
        articles.map((item)=>(
          <div key={item.url}>
            <div className='row'>
            <div className='col-md-6'>
          <div className="card" >
         <img src={item.urlToImage} className="card-img-top" alt="News-Image"/>
         <div className="card-body">
         <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
         <a href={item.url} target='blank' className="btn btn-primary">Go To News</a>
       </div>
       </div>
       </div>
       </div>
            </div>
        ))
      ) : (
        <div className="loading-container">
        <img src={giph} alt="Loading.." />
        
      </div>
      )}
    
    </div>
  );
};

export default Profile

// CRUD operation
// create=>POST
// read=> GET
// update=>PUT
