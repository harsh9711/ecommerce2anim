import React from "react";
import styled from "styled-components";
import FilterSection from "./FilterSection.js";
import Sort  from "./Sort.js";
import ProductList from "./ProductList.js";
import { useFilterContext } from "../Context/filter_context.js";
const Products=()=>{
    const {filter_products}=useFilterContext();
   
return (
<Wrapper>
<div className="container grid grid-filter-column">
<div className="filter-section">
          <FilterSection />
        </div>
       <section className="product-view--sort">
       <div className="sort-filter">
        <Sort/>
       </div>  
       <div className="main-product">
        <ProductList/>
       </div>
    </section> 
</div>
</Wrapper>
);
};

const Wrapper=styled.section`
box-size:space-between;
max-width:90%;
justify-content:center;
.filter-section {
    flex: 0.2;
  }
  .product-view--sort {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .sort-filter {
    margin-bottom: 1rem;
  }

.grid-filter-column{
    display: flex;
    gap: 2rem;
    grid-template-columns:0.2fr 1fr;
} 
@media (max-width: ${({theme})=>theme.media.mobile})
{
    .grid-filter-column{
        grid-template-columns:1fr;
    }
}
`;
export default Products;