import { createContext,useReducer,useContext,useEffect} from "react";
import { useProductContext } from "./Productcontext";
import reducer from "../reducer/filterReducer.js";
const FilterContext=createContext();
const initialState={
    filter_products:[],
    all_products:[],
    grid_view:true,
    sorting_value:"lowest",
    filters : {
        text:"",
        category:"all",
        company:"all",
        color:"all",
        maxPrice:0,
        price:0,
        minPrice:0,
    },
};
export const FilterContextProvider=({children})=>{
    const {products}=useProductContext();
    // console.log(products);
    const [state,dispatch]=useReducer(reducer,initialState);
//     //to set to the grid view

    const setGridView=()=>{
        return dispatch({type:"SET_GRID_VIEW"});
    }; 
    //     //to set to the list view
    const setListView=()=>{
        return dispatch({type:"SET_LIST_VIEW"});
    };
    const sorting=(event)=>
    {
        let userValue=event.target.value;
        return dispatch({type:"SET_SORT_VALUE",payload:userValue});
    };
    // update the filter value
    const updateFilterValue=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        return dispatch({type:"UPDATE_FILTERS_VALUE",payload:{name,value}});
    };
    const clearFilters=()=>{
        dispatch({type:"CLEAR_FILTERS"})
    }
    // to sort the products
    useEffect(()=>{
        // console.log("hii");
        dispatch({type:"FILTER_PRODUCTS"});
        dispatch({type:"SORT_PRODUCTS"});
    },[products,state.sorting_value,state.filters]);

    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products});
    },[products]);
    return(
        <FilterContext.Provider
         value={{
             ...state,
             setGridView,
             setListView,
             sorting,
             updateFilterValue,
             clearFilters,
             }}>
        {children}
        </FilterContext.Provider>
    );
};
export const useFilterContext=()=>{
    return useContext(FilterContext);
}