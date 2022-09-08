import React from "react";
import { Tabs } from 'antd';
import './ProductListing.css'
import 'antd/dist/antd.css';
import JeweleryComponent from "./ProductComponents/JeweleryComponent/JeweleryComponent";
import ElectronicsComponent from './ProductComponents/ElectronicsComponent/ElectronicsComponent'
import MenclothingComponent from './ProductComponents/MenclothingComponent/MenclothingComponent'
import WomenclothingComponent from './ProductComponents/WomenclothingComponent/WomenclothingComponent'
const { TabPane } = Tabs;

const ProductPage = () => {
  return (
    <div className="container-products">
      <div className="container-products-header">
        <h1 className="products-header-title">
          Feature Products
        </h1>
      </div>
      <Tabs type="card">
        <TabPane tab="Jewelery" key="1">
            <JeweleryComponent />
        </TabPane>
        <TabPane tab="Electronics" key="2">
            <ElectronicsComponent />
        </TabPane>
        <TabPane tab="Men's clothing" key="3">
            <MenclothingComponent />
        </TabPane>
        <TabPane tab="Women's clothing" key="4">
            <WomenclothingComponent />
        </TabPane>
      </Tabs>

    </div>
  );
};
export default ProductPage;
