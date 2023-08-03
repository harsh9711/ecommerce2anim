// import React from "react";
// import styled from "styled-components";
// import { useFilterContext } from "../Context/filter_context";
// import { FaCheck } from "react-icons/fa";
// import FormatPrice from "/Users/harshsahcdeva/Desktop/demo/newes/src/Helpers/Formatprice.js";
// import Button from "/Users/harshsahcdeva/Desktop/demo/newes/src/Button.js";

// const FilterSection = () => {
//   const {
//     filters: { text, category, color, price,maxPrice,minPrice },
//     updateFilterValue,
//     all_products,
//     clearFilters,
//   } = useFilterContext();

//   const getUniqueData = (data, attr) => {
//     let newVal = data.map((curElem) => {
//       return curElem[attr];
//     });

//     if (attr === "colors") {
//       newVal = newVal.flat();
//       return ["all", ...new Set(newVal)];
//     } else {
//       return ["all", ...new Set(newVal)];
//     }
//   };


//   const categoryData = getUniqueData(all_products, "category");
//   const companyData = getUniqueData(all_products, "company");
//   const colorsData = getUniqueData(all_products, "colors");
// //   console.log(colorsData);
//   return (
//     <Wrapper>
//       <div className="filter-search">
//         <form onSubmit={(e) => e.preventDefault()}>
//           <input
//             type="text"
//             name="text"
//             value={text}
//             onChange={updateFilterValue}
//             placeholder="SEARCH"
//           />
//         </form>
//       </div>
//       <div className="filter-category">
//         <h3>Category</h3>
//       </div>
//       <div className="category-options">
//         {categoryData.map((curElem, index) => {
//           return (
//             <button
//               key={index}
//               type="button"
//               name="category"
//               value={curElem}
//               onClick={updateFilterValue}>
//               {curElem}
             
//             </button>
//           );
//         })}
//       </div>
//       <div className="filter-company">
//         <h3>Company</h3>
//         <form action="#">
//           <select
//             name="company"
//             id="company"
//             className="filter-company--select"
//             onClick={updateFilterValue}
            
//           >
//             {companyData.map((curElem, index) => {
//               return (
//                 <option key={index} value={curElem} name="company">
//                   {curElem}
//                 </option>
//               );
//             })}
//           </select>
//         </form>
//       </div>
//       <div className="filter-colors-colors">
//         <h3>Colors</h3>
//         <div className="filter-color-style">
//         {colorsData.map((curColor,index)=>{ 
//             {/* console.log(curColor); */}
//             {/* console.log(color); */}
//             if(curColor==="all")
//             {
//                 return (
//                     <button 
//                     key={index}
//                     type="button" 
//                     name="color"
//                     value={curColor}
//                   style={{backgroundColor:curColor}}
//                     className="color-all--style"
//                     onClick={updateFilterValue}
//                     all
//                     >
//                   all
//                     </button>
//                  );
//             }
//             return (
//                     <button 
//                     key={index}
//                     type="button" 
//                     name="color"
//                     value={curColor}
//                    style={{backgroundColor:curColor}}
//                     className={color===curColor?"btnStyle active":"btnStyle"}
//                     onClick={updateFilterValue}>
//                     {color === curColor ? <FaCheck className="checkStyle" />:null}
//                     </button>
//                  );
                 
//             })} 
//         </div>
//     </div>
//     <div className="filter-price">
//         <h3>Price</h3>
//         <p>
//         <FormatPrice price={price}/>
//         </p>
//         <input 
//         type="range"
//         name="price"
//         min={minPrice}
//         max={maxPrice}
//         value={price}
//          onChange={updateFilterValue}/>
//     </div>
//     <div className="filter-price">
//        <Button className="btn" onClick={clearFilters}>Clear Filters</Button>
//     </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   border: 2px solid red;
// padding:5rem 0;
//   display: flex;
//   flex-direction: column;
//   gap: 3rem;
//   margin-right: 8rem;
//   .filter-colors-colors{
//     h3 {
//       padding: 1rem 0;
//       font-weight: bold;
//     }

//   }
//   .filter-price{
//     grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
//     gap: 0.5rem;
//     h3 {
//         margin-top:1rem;
//       padding: 1rem 0;
//       font-weight: bold;
//     }
//     p{
//         margin-top:2rem;
//     }
//     input{
// 	height: 0.5px;
// 	border-radius: 60px;
//     }
//   }
// .color-all--style{
//     background-color:transparent;
//     text-transform:capitalize;
//     border:none;
//     cursor:pointer;
// }
//   .filter-color-style {
//     margin-top:2rem;
//     display: flex;
//     grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
//     gap: 0.5rem;

//     button {
//       width: 30px;
//       height: 30px;
//       border-radius: 50%;
//       border: none;
//       cursor: pointer;
//     }
//   }

//   .filter-search {
//     margin-top: 5rem;
//     margin-bottom: 4rem;
//     input {
//       padding: 0.6rem 1rem;
//       width: 100%;
//       max-width: 20rem;
//     }
//   }
// .filter-company{
//     h3 {
//       padding: 1rem 0;
//       font-weight: bold;
//     }
// }
//   .filter-category {
//     h3 {
//       padding: 1rem 0;
//       font-weight: bold;
//     }
  
// }
// .filter-company--select{
//     padding:0.3rem;
//     font-size:1.6rem;
//     color:${({theme})=>theme.colors.text};
//     text-transform: capitalize;
// }

// .category-options {
//     gap: 2rem;
//     display: flex;
//     flex-wrap: wrap; /* Allow options to wrap to new lines */
//     justify-content: flex-start; /* Align options to the left */

//     button {
//       margin-right: 10rem;
//       padding: 0.5rem 1rem;
//       border: none;
//       background-color: transparent;
//       cursor: pointer;
//       transition: background-color 0.3s ease-in-out;
//       width: 20%; /* Each button occupies one line */
//       text-transform: capitalize;

//       &:hover {
//         border-bottom: 2px solid red;
//         width:50%;
//       }
//     }

//     .active {
//        /* Add an underline style for the active button */
//       color: ${({ theme }) => theme.colors.btn};
//     }
//   }
//   `;

// export default FilterSection;
