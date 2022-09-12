import React, { useEffect } from "react";
import './ProductDetails.css'
import { Rate } from 'antd'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../../../redux/actions/productsActions";
import axiosInstance from "../../../utils/Request";
import { Link, useNavigate } from 'react-router-dom'
import Ins from '../../../akar-icons_instagram-fill.png'
import useAxios from "../../../hooks/useAxios";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const fetchProductDetail = async (id) => {
    //call API
    const response = await axiosInstance.get(`/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {

    //kiểm tra id
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="container-productDetail">

      {/* check nếu product rỗng */}
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        product.quantity = 1,

        <div className="productDetail-content">
          <div className="productDetail-content-desc">
            <div>
              <img className="productDetail-content-img" src={product.image} />
            </div>
            <div className="productDetail-content-contact">
              <h1 className="contact-title">{product.title}</h1>
              <h2>
                <div className="productDetail-content-rate-and-review">
                  <Rate allowHalf defaultValue={product.rating.rate} />
                  <p className="contact-count">({product.rating.count} reviews)</p>
                </div>
                <a className="contact-price">${product.price}</a>
              </h2>
              {/* <h3 className="contact-category">{product.category}</h3> */}
              <p className="contact-description">{product.description}</p>
              <div className="ui vertical animated button" onClick={() => dispatch({ type: "ADD", payload: product },alert('đã thêm vào giỏ hàng'))} tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content" >Add to Cart</div>
              </div>
              <hr className="line" />
              <div className="content-contacts">
                <p className="contacts-title">
                  Category:
                </p>
                <p className="contacts-desc">
                  {product.category}
                </p>
              </div>
              <div className="content-contacts">
                <p className="contacts-title">
                  Share On:
                </p>
                <Link to='/'>
                  <img srcSet={Ins} alt="" className="contacts-img" />
                </Link>
                <Link to='/'>
                  <img srcSet={Ins} alt="" className="contacts-img" />
                </Link>
                <Link to='/'>
                  <img srcSet={Ins} alt="" className="contacts-img" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
