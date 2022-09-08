import { combineReducers } from "redux";
import { 
  productsReducerJewerely,
  selectedProductReducer,
  productsReducerElectronic,
  productsReducerMenclothing,
  productsReducerWomenclothing
} from "./productsReducer";
const reducers = combineReducers({
  productsJewerely: productsReducerJewerely,
  productsElectronic: productsReducerElectronic,
  productsMenclothing: productsReducerMenclothing,
  productsWomenclothing: productsReducerWomenclothing,
  product:selectedProductReducer
});
export default reducers;
