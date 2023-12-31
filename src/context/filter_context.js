import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productcontex";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  //  set the grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

    //  set the LIST view
    const setListView = () => {
      return dispatch({ type: "SET_LIST_VIEW" });
    };
  
    // sorting function
    const sorting = (e) =>{
      let userValue = e.target.value;
      dispatch({type:"GET_SORT_VALUE", payload: userValue})
    };

  //sort products
  useEffect(()=>{
    dispatch({type: "SORTING_PRODUCTS", payload:products })
  },[state.sorting_value])

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state , setGridView, setListView, sorting}}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
