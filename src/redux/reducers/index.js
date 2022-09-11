import { combineReducers } from "redux";
import { productsReducerJewelery,
  productsReducerElectronic, 
  selectedProductsReducer,
  productsReducerMenclothing, 
  productsReducerWomenclothing,
  Cart
  
} from "./productsReducer";
const reducers = combineReducers({
  productsElectronic: productsReducerElectronic,
  productsJewelery: productsReducerJewelery,
  productsMenclothing: productsReducerMenclothing,
  productsWomenclothing: productsReducerWomenclothing,
  product: selectedProductsReducer,
  cart:Cart
});
export default reducers;
