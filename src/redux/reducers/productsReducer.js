import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
};

export const productsReducerJewerely = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS_JEWERELY:
      return { ...state, products: payload };
    default:
      return state;
  }
};
export const productsReducerElectronic = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS_ELECTRONIC:
      return { ...state, products: payload };
    default:
      return state;
  }
};
export const productsReducerMenclothing = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS_MENCLOTHING:
      return { ...state, products: payload };
    default:
      return state;
  }
};
export const productsReducerWomenclothing = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS_WOMENCLOTHING:
      return { ...state, products: payload };
    default:
      return state;
  }
};
export const selectedProductReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
