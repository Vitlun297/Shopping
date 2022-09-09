import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Rate } from 'antd';
import { setProductsMenclothing } from "../../redux/actions/productsActions";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";


const MenclothingComponent = () => {
    const products = useSelector((state) => state.productsMenclothing.products);
    const dispatch = useDispatch();


    const fetchProducts = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/category/men's%20clothing`)
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProductsMenclothing(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log("Products :", products);


    const renderList = products.map((product) => {
        return (
            <div className="four wide column" key={product.id}>
                <Link to={`/product/${product.id}`}>
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image">
                                <LazyLoadImage src={product.image} alt={product.title} />
                            </div>
                            <div className="content">
                                <div className="header">{product.title}</div>
                                <Rate allowHalf defaultValue={product.rating.rate} />
                                <div className="meta price">$ {product.price}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });
    return <>{renderList}</>;
};

export default MenclothingComponent;
