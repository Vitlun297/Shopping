import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Rate } from 'antd';
import { setProductsElectronic } from "../../redux/actions/productsActions";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useAxios from "../../hooks/useAxios";



const ElectronicsComponent = () => {
  const products = useSelector((state) => state.productsElectronic.products);
  const dispatch = useDispatch();


  const { response, loading, error } = useAxios({
    method: 'get',
    url: '/products/category/electronics'
  });
  useEffect(() => {
    if (response !== null) {
      dispatch(setProductsElectronic(response));
    }
    console.log('res', response)
  }, [response]);

  //console.log("Products :", products);


  const renderList = products.map((product) => {
    product.quantity = 1
    return (
      <>
        {loading ? (
          <p>loading...</p>
        ) : (
          <div className="container-listcard" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <div className="container-cards">
                <div className="card">
                  <div className="card-image">
                    <LazyLoadImage src={product.image} alt={product.title} className="card-img" />
                    <div className="button-hover">
                      View Detail
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="header-title">{product.title}</div>
                    <div className="card-content-bot">
                      <Rate allowHalf defaultValue={product.rating.rate} />
                      <div className="meta card-price">$ {product.price}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}
      </>
    );
  });
  return <>{renderList}</>;
};

export default ElectronicsComponent;
