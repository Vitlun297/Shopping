import React, { useEffect } from "react";
import '../../ProductListing.css'
import { useDispatch, useSelector } from "react-redux";
import 'antd/dist/antd.css';
import { Col, Row, Rate } from 'antd';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from 'react-router-dom'
import { setProductsWomenclothing } from "../../../redux/actions/productsActions";
import axios from "axios";

const ProductComponent = () => {


    const products = useSelector((state) => state.productsWomenclothing.products);
    const dispatch = useDispatch();


    const AxiosProductsWomenclothing = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/category/women's%20clothing`)
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProductsWomenclothing(response.data));
    };
    useEffect(() => {
        AxiosProductsWomenclothing();
    }, []);


    const renderList = products.map((product) => {
        return (
            <Col span={6} key={product.id}>
                <Link to={`/products/${product.id}`}>
                    <div className="cards" >
                        <div className="cards-item">
                            <div className="item-image">
                                <LazyLoadImage src={product.image} alt={product.title} className="item-image-img" />
                            </div>
                            <div className="item-content">
                                <div className="item-content-title">{product.title}</div>
                                <div className="item-content-child">
                                    <Rate allowHalf defaultValue={product.rating.rate} />
                                    <div className="item-content-price">$ {product.price}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </Col>
        );
    });
    return <Row>{renderList}</Row>;
};

export default ProductComponent;
