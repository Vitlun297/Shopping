import React from "react";
import { Tabs } from 'antd';
import './ProductListing.css'
import 'antd/dist/antd.css';
import ElectronicsComponent from "./ProductComponent/ElectronicsComponent";
import JeweleryComponent from "./ProductComponent/JeweleryComponent";
import MenclothingComponent from "./ProductComponent/MenclothingComponent";
import WomenclothingComponent from "./ProductComponent/WomenclothingComponent";

const { TabPane } = Tabs;

const ProductPage = () => {
  return (
    <div className="container-product">
      <div className="container-product-header">
        <h1 className="product-header-title">Products</h1>
      </div>
      <Tabs type="card">
        <TabPane tab="Jewelery" key="1">
          <div className="ui grid container-tab">
            <JeweleryComponent />
          </div>
        </TabPane>
        <TabPane tab="Electronics" key="2">
          <div className="ui grid container-tab">
            <ElectronicsComponent />
          </div>
        </TabPane>
        <TabPane tab="Men's clothing" key="3">
          <div className="ui grid container-tab">
            <MenclothingComponent />
          </div>
        </TabPane>
        <TabPane tab="Women's clothing" key="4">
          <div className="ui grid container-tab">
            <WomenclothingComponent />
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ProductPage;
