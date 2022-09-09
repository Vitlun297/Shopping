import { combineReducers } from "redux";
import { productsReducerJewelery,
  productsReducerElectronic, 
  selectedProductsReducer,
  productsReducerMenclothing, 
  productsReducerWomenclothing, 
} from "./productsReducer";
const reducers = combineReducers({
  productsElectronic: productsReducerElectronic,
  productsJewelery: productsReducerJewelery,
  productsMenclothing: productsReducerMenclothing,
  productsWomenclothing: productsReducerWomenclothing,
  product: selectedProductsReducer,
});
export default reducers;
