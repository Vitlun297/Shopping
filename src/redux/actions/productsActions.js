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

export const setProductsWomenclothing = (productsWomenclothing) => {
  return {
    type: ActionTypes.SET_PRODUCTS_WOMENCLOTHING,
    payload: productsWomenclothing,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const addToCart = (productID) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      id: productID
    }
  };
}

export const removeFromCart = (productID) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      id: productID
    }
  };
}

export const adjustQty = (productID,value) => {
  return {
    type: ActionTypes.ADJUST_QTY,
    payload: {
      id: productID,
      qty:value
    }
  };
}

export const loadCurrentitem = (product) => {
  return {
    type: ActionTypes.LOAD_CURRENT_ITEM,
    payload: product
  };
}



export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
