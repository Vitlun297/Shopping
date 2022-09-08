import { ActionTypes } from "../constants/action-types";

export const setProductsJewelery = (productsJewelery) => {
  return {
    type: ActionTypes.SET_PRODUCTS_JEWERELY,
    payload: productsJewelery,
  };
};


export const setProductsElectronic = (productsElectronic) => {
  return {
    type: ActionTypes.SET_PRODUCTS_ELECTRONIC,
    payload: productsElectronic,
  };
};


export const setProductsMenclothing = (productsMenclothing) => {
  return {
    type: ActionTypes.SET_PRODUCTS_MENCLOTHING,
    payload: productsMenclothing,
  };
};


export const setProductsWomenclothing = (productsMenclothing) => {
  return {
    type: ActionTypes.SET_PRODUCTS_WOMENCLOTHING,
    payload: productsMenclothing,
  };
};


export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};
