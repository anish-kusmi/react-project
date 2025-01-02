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


import React, { useReducer, useState } from 'react'
import productContext from './ProductContext'
import { cartReducer } from './Reducer';


const ProductState = (props) => {
  let products=[  
    {
    id:1,
    title:"Apple",
    description:"Apple from mustang",
    price: 100,
    instock: 4
},
{
    id:2,
    title:"Mango",
    description:"Mango from kalaiya",
    price: 200,
    instock: 5
},
{
    id:3,
    title:"Orange",
    description:"Orange from gorkha",
    price: 300,
    instock: 6
},
{
  id:4,
  title:"Banana",
  description:"Banana from gorkha",
  price: 400,
  instock: 7
}
]
  const[product, setProduct]=useState(products);
  const [state, dispatch]= useReducer(cartReducer,
    {
      products: product,
      cart:[]
       }
  );
  const allProduct= async () => {
    const response = await fetch('',{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "auth-token": localStorage.getItem('token')
      }
    })
    let data = await response.json();
    console.log(data);
    setProduct(data); 
  };
  const editProduct=async(selectedProduct,updateData)=>{
    console.log("editing product",selectedProduct);
    const {title, description,price,instock}=updateData
    try {
      const response= await fetch(`http://localhost:5174/api/product/${selectedProduct}`,{
        method:'PUT',
        headers:{
          "Content-Type":"application/json",
          "auth-token": localStorage.getItem('token'),
        },
        body:json.stringify({title, description,instock,price}),
      }
    );
    if(!response.ok){
      throw new Error('failed to update');
    }
    const json= await response.json()
    console.log(json);
    allProduct()

    } catch (error) {

      throw new Error('failed to update');
    }
  }
  const deleteProduct=async (id)=>{
    try {
      const response=await fetch(`http://localhost:5174/api/product/${id}`,{
        method:'DELETE',
        headers:{
          "content-type":"application/json",
          "auth-token":localStorage.getItem("token"),
        },
      });
      if(response.ok){
        console.log("product deleted successfully");
      }
      else{
        console.error("failed to delete ");
      }
    } catch (error) {
      console.error("failed to delete ");
    }
  }

  return (
    <productContext.Provider value={{product, state, dispatch, allProduct,editProduct,deleteProduct}}>
      {props.children}
    </productContext.Provider>
  )
}
export default ProductState

