import React, { useState } from 'react'
import productContext from './ProductContext'


const ProductState = (props) => {
  let products=[  
    {
    id:1,
    title:"Apple",
    Description:"Apple from mustang",
    price: 100,
    Instock: 5
},
{
    id:2,
    title:"Mango",
    Description:"Mango from kalaiya",
    price: 50,
    Instock: 4
},
{
    id:3,
    title:"Orange",
    Description:"Orange from gorkha",
    price: 100,
    Instock: 5
},
]
  const[product, setProduct]=useState(products);

    const [articles, setArticles]=useState([]);

    const fetchData= async () =>{
      try{
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=ce282385a64b40b7a7138943ccd99c61');
        if (!response.ok){
          throw new Error(response.status);
        }
        const data= await response.json();
        setArticles(data.articles);//stores only the article array
        console.log('fetched data:',data.articles); 
      }
       catch(error){
        console.error('Fetching error:',error);
      }
    };

  return (
    <productContext.Provider value={{product, articles, fetchData}}>
      {props.children}
    </productContext.Provider>
  )
}


export default ProductState
