// import React, { useContext, useEffect, useState } from 'react'
// import productContext from '../context/ProductContext'
// import giph from '../assets/giphy.webp';

// const Profile = () => {
//  const context = useContext(productContext);
//  const {product, articles, fetchData} = context;
//  console.log('this is article',articles);
 

//  useEffect(()=>{
//  fetchData();
//  },[])


//   return (
//     <div className="container mt-4">
//       <h5 className="text-centre">This is my News</h5>
//       <div className="row">
//         {articles.map((item) => {
//           return (
//             <div className="col-md-4 mb-4" key={item.url}>
//               <div className="card">
//                 <img
//                   src={item.urlToImage}
//                   className="card-img-top"
//                   alt="news images"
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{item.title.slice(0, 80)}</h5>
//                   <p className="card-text">{item.description}</p>
//                   <a
//                     href={item.url}
//                     target="_blank"
//                     className="btn btn-primary"
//                   >
//                     Read news
//                   </a>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//        <div className="loading-container">
//         <img src={giph} alt="Loading.." />

//       </div>
//     </div>
//   );
// };


// export default Profile;

//yo mathi ko code chai news API batw data fetched garera dekhako ho dummy API batw 



import React, { useContext, useEffect, useState } from 'react'
import productContext from '../context/ProductContext'
import giph from '../assets/giphy.webp';
import Fruit from '../assets/apple.jpg';

const Profile = () => {
 const context = useContext(productContext);
 const {product} = context;
 console.log('this is Products',product);
 

 useEffect(()=>{
//  fetchData();
 },[])


  return (
    <div className="container mt-4">
      <h5 className="text-centre">These Are My Products</h5>
      <div className="row">
        {product.map((item) => {
          return (
            <div className="col-md-3 mb-4" key={item.url}>
              <div className="card">
                <img
                  src={Fruit}
                  className="card-img-top"
                  alt="news images"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <a
                    href={"#"}
                    className="btn btn-warning"
                  >
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default Profile



{/* // CRUD operation
// create=>POST
// read=> GET
// update=>PUT */}
