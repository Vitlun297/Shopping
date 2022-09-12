import { combineReducers } from "redux";
import { productsReducer,
  selectedProductsReducer,
  Cart
  
} from "./productsReducer";
const reducers = combineReducers({
  productsElectronic: productsReducer,
  productsJewelery: productsReducer,
  productsMenclothing: productsReducer,
  productsWomenclothing: productsReducer,
  product: selectedProductsReducer,
  cart:Cart
});
export default reducers;
