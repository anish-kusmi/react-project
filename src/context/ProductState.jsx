// import React, { useState } from 'react'
// import productContext from './ProductContext'


// const ProductState = (props) => {
//   let products=[  
//     {
//     id:1,
//     title:"Apple",
//     Description:"Apple from mustang",
//     price: 100,
//     Instock: 5
// },
// {
//     id:2,
//     title:"Mango",
//     Description:"Mango from kalaiya",
//     price: 50,
//     Instock: 4
// },
// {
//     id:3,
//     title:"Orange",
//     Description:"Orange from gorkha",
//     price: 100,
//     Instock: 5
// },
// ]
//   const[product, setProduct]=useState(products);

//     const [articles, setArticles]=useState([]);

//     const fetchData= async () =>{
//       try{
//         const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=ce282385a64b40b7a7138943ccd99c61');
//         if (!response.ok){
//           throw new Error(response.status);
//         }
//         const data= await response.json();
//         setArticles(data.articles);//stores only the article array
//         console.log('fetched data:',data.articles); 
//       }
//        catch(error){
//         console.error('Fetching error:',error);
//       }
//     };

//   return (
//     <productContext.Provider value={{product, articles, fetchData}}>
//       {props.children}
//     </productContext.Provider>
//   )
// }


// export default ProductState;

//yo mathi ko code chai news API batw data fetched garera dekhako ho dummy API batw 

//useReducer bhanne auta react ko hook ho jasma state ra dispatch method  hunxa card-reducer bhanne auta function banaunu parne hunxa ra initial state 10 aaunu parxa





import React, { useReducer, useState } from "react";
import productContext from "./productContext";
import { cartReducer } from "./Reducer";

const ProductState = (props) => {
  let products = [
    {
      id: 1,
      title: "apple",
      description: "apple from mustang sadwfsdafsadfsadfsaddsf",
      price: 100,
      instock: 5,
    },
    {
      id: 2,
      title: "mango",
      description: "mango from kalaiya",
      price: 50,
      instock: 4,
    },
    {
      id: 3,
      title: "orange",
      description: "orange from gorkha",
      price: 100,
      instock: 5,
    },
    {
      id: 4,
      title: "orange",
      description: "orange from gorkha",
      price: 100,
      instock: 6,
    },
  ];

  const [product, setProduct] = useState([]);
  const [homeProduct, setHomeProduct] = useState([]);
  const [state, dispatch] = useReducer(cartReducer, {
    products: product,
    cart: [],
  });

  const allProduct = async () => {
    const response = await fetch(
      "http://localhost:5000/api/product/getallproduct",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };
  const allHomeProduct = async () => {
    const response = await fetch(
      "http://localhost:5000/api/product/gethomeproduct",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    let data = await response.json();
    console.log(data);
    setHomeProduct(data);
  };

  const editProduct = async (selectedProduct, updateData) => {
    console.log("editing product ", selectedProduct);
    const { title, description, price, instock } = updateData;
    try {
      const response = await fetch(
        `http://localhost:5000/api/product/updateproduct/${selectedProduct}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({ title, description, instock, price }),
        }
      );
      if (!response.ok) {
        throw new Error("fail to update");
      }
      const json = await response.json();
      console.log(json);
      allProduct();
    } catch (error) {
      throw new Error("fail to update");
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/product/deleteproduct/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
      if (response.ok) {
        console.log("product deleted successfully");
      } else {
        console.error("failed to delete the product");
      }
      allProduct();
    } catch (error) {
      console.error("failed to delete the product");
    }
  };
  return (
    <productContext.Provider
      value={{
        product,
        allProduct,
        editProduct,
        deleteProduct,
        homeProduct,
        allHomeProduct,
        state,
        dispatch,
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};

export default ProductState;