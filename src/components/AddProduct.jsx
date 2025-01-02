import React, { useState } from "react";
import axios from 'axios'

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    instock: "",
    image:""
  });
  const handleChange = (e) => {
    if (e.target.type==='file') {
        setProduct({...product,[e.target.name]:e.target.files[0]});
        console.log(e.target.files[0]);
        
    } else {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }
  
  };
  const handleSubmit=async(e)=>{
    e.preventDefault(); //prevent default form submition behaviour
   const formData= new formData()
   formData.append('title',product.title);
   formData.append('description',product.description);
   formData.append('price',product.price);
   formData.append('instock',product.instock);
   if(product.image){
    formData.append('myfile',product.image);
   }
   try {
    const response= await axios.post(''.formData,{
        headers:{
            'auth-token': localStorage.getItem("token")
        }
    })
    console.log(response.data);
    setProduct({
        title: "",
        description: "",
        price: "",
        instock: "",
        image:""

    })
    
   } catch (error) {
    console.error(error);
    
   }
  }
  return (
    <div className="container mt-4">
      <h4>Add your product here</h4>

      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Instock
          </label>
          <input
            type="Number"
            name="instock"
            value={product.instock}
            onChange={handleChange}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Image
          </label>
          <input
            name="image"
            type="file"  
            multiple
            onChange={handleChange}
            className="form-control"
            id="image"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

