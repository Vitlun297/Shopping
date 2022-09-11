import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
};

//hiện sản phẩm ở phần products
export const productsReducerJewelery = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS_JEWERELY:
      return { ...state, products: payload };
    default:
      return state;
  }
};

//hiện sản phẩm ở phần products
export const productsReducerElectronic = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS_ELECTRONIC:
      return { ...state, products: payload };
    default:
      return state;
  }
};

//hiện sản phẩm ở phần products
export const productsReducerMenclothing = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS_MENCLOTHING:
      return { ...state, products: payload };
    default:
      return state;
  }
};

//hiện sản phẩm ở phần products
export const productsReducerWomenclothing = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS_WOMENCLOTHING:
      return { ...state, products: payload };
    default:
      return state;
  }
};

//hiện chi tiết sản phẩm
export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};


// thêm sản phẩm vào giỏ hàng
export const Cart = (cart = [], { type, payload }) => {
  if (type === "ADD") {
    let addcart = cart.filter((product) => product.id === payload.id)
    if (addcart < 1) {
      return [...cart, payload]
    } else {
      return cart
    }
  }
  if (type === "REMOVE") {
    return cart.filter((item) => item.id !== payload.id);
  }
  return cart;
}