import React, { useContext, useEffect, useState } from "react";
import productContext from "../context/productContext";

import { BsThreeDots } from "react-icons/bs";
import EditProductModal from "./EditProductModal";

const Profile = () => {
  const context = useContext(productContext);
  const {
    state: { cart },
    product,
    allProduct,
    allHomeProduct,
    homeProduct,
    dispatch,
    editProduct,
    deleteProduct,
  } = context;
  console.log("this is porducts1111", product);
  console.log("this is home product", homeProduct);
  const [menuVisible, setMenuVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleMenu = (id) => {
    setMenuVisible((prvState) => ({
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
    editProduct(selectedProduct._id, updateData);
  };
  const handleDelete = async (id) => {
    console.log("deleting product");

    await deleteProduct(id);
  };
  useEffect(() => {
    // fetchData();
    allProduct();
    allHomeProduct();
  }, []);

  return (
    <div className="container mt-4">
      <h5 className="text-centre">This is my Products</h5>
      <div className="row">
        {product &&
          product.map((item) => {
            return (
              <div className="col-md-3 mb-4" key={item._id}>
                <div className="card">
                  <img
                    // src={`http://localhost:5000/uploads/${item.images[0]}`}
                    src={`http://localhost:5000/uploads/${item.images}`}
                    className="card-img-top"
                    alt="news images"
                  />
                  <div className="card-body">
                    <div className="three-dots">
                      <h5 className="card-title">{item.title}</h5>
                      <BsThreeDots onClick={() => toggleMenu(item._id)} />
                      {menuVisible[item._id] && (
                        <div className="menu-options">
                          <button onClick={() => openEditModal(item)}>
                            Edit
                          </button>
                          <button onClick={() => handleDelete(item._id)}>
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">Rs. {item.price}</p>
                    {cart && cart.some((p) => p._id === item._id) ? (
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
                  selectedProduct._id === item._id && (
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

export default Profile;