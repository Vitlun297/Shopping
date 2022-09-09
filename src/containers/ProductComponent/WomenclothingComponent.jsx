import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Rate } from 'antd';
import { setProductsWomenclothing } from "../../redux/actions/productsActions";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axiosInstance from "../../utils/Request";


const WomenclothingComponent = () => {
    const products = useSelector((state) => state.productsWomenclothing.products);
    const dispatch = useDispatch();


    const fetchProducts = async () => {
        const response = await axiosInstance.get(`/products/category/women's%20clothing`)
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProductsWomenclothing(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log("Products :", products);


    const renderList = products.map((product) => {
        return (
            <div className="four wide column" key={product.id}>
                <Link to={`/product/${product.id}`}>
                    <div className="container-cards">
                        <div className="card">
                            <div className="card-image">
                                <LazyLoadImage src={product.image} alt={product.title} className="card-img" />
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
        );
    });
    return <>{renderList}</>;
};

export default WomenclothingComponent;
