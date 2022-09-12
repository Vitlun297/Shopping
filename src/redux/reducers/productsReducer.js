import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
};

//hiện sản phẩm ở phần products
export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS_JEWERELY:
      return { ...state, products: payload };
    case ActionTypes.SET_PRODUCTS_ELECTRONIC:
      return { ...state, products: payload };
    case ActionTypes.SET_PRODUCTS_MENCLOTHING:
      return { ...state, products: payload };
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
    const addcart = cart.filter((product) => product.id === payload.id)
    if (addcart < 1) {
      return [...cart, payload]
    } else {
      return cart
    }
  }
  if (type === "REMOVE") {
    return cart.filter((product) => product.id !== payload.id);
  }

  //thêm số lượng
  if (type === "INCREASE") {
    let tempcart = cart.map((item) => {
      if (item.id === payload.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    return tempcart;
  }

  //bớt số lượng
  if (type === "DECREASE") {
    let tempcart = cart.map((item) => {
      if (item.id === payload.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    return tempcart;
  }
  return cart
}