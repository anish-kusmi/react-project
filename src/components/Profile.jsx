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
import Fruit from '../assets/apple.jpg';
import { BsThreeDots } from "react-icons/bs";
import EditProductModal from "./EditProductModal";

const Profile = () => {
 const context = useContext(productContext);
 const {state:{cart},dispatch,product} = context;
 console.log('this is Products',product);

 const [menuVisible, setMenuVisible]=useState(false);
 const [modalVisible, setModalVisible]=useState(false);
 const [selectedProduct, setSelectedProduct]=useState(null);

 const toggleMenu = (id)=>{
  setMenuVisible((prvState)=>({
    ...prvState,
    [id]: !prvState[id],
  }));
 };

 const openEditModal = (product) => {
  setSelectedProduct(product);
  setModalVisible(true);
};

const closeEditModal = () => {
  setModalVisible(false);
  selectedProduct(null);
};
const saveEdit = (updateData) => {
  editProduct(selectedProduct.id, updateData);
};
const handleDelete = async (id) => {
  console.log("deleting product");

  // await deleteProduct(id)
};

 

 useEffect(()=>{
//  fetchData();
 },[])

 return (
  <div className="container mt-4">
    <h5 className="text-centre">This is my Products</h5>
    <div className="row">
      {product.map((item) => {
        return (
          <div className="col-md-3 mb-4" key={item.id}>
            <div className="card">
              <img src={Fruit} className="card-img-top" alt="news images" />
              <div className="card-body">
                <div className="three-dots">
                  <h5 className="card-title">{item.title}</h5>
                  <BsThreeDots onClick={() => toggleMenu(item.id)} />
                  {menuVisible[item.id] && (
                    <div className="menu-options">
                      <button onClick={() => openEditModal(item)}>
                        Edit
                      </button>
                      <button onClick={() => handleDelete(item.id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </div>
                <p className="card-text">{item.description}</p>
                <p className="card-text">Rs. {item.price}</p>
                {cart && cart.some((p) => p.id === item.id) ? (
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: item,
                      });
                    }}
                  >
                    Remove form cart
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: item,
                      });
                    }}
                  >
                    Add to cart
                  </button>
                )}
              </div>
            </div>
            {modalVisible &&
              selectedProduct &&
              selectedProduct.id === item.id && (
                <EditProductModal
                  product={selectedProduct}
                  onClose={closeEditModal}
                  onSave={saveEdit}
                />
              )}
          </div>
        );
      })}
    </div>
  </div>
);
};



export default Profile


