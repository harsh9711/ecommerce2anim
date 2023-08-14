// import React from "react";
import "/Users/harshsahcdeva/Desktop/demo/newes/src/App.css"
import styled from "styled-components";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { useFilterContext } from "../Context/filter_context";
import { GiPriceTag } from 'react-icons/gi';
import {FcFilledFilter} from 'react-icons/fc';
import { AiOutlineSearch } from 'react-icons/ai';
import {FaCheck} from "react-icons/fa";
import {TbColorSwatch} from "react-icons/tb";
import {FiLogOut} from "react-icons/fi";
import FormatPrice from "/Users/harshsahcdeva/Desktop/demo/newes/src/Helpers/Formatprice.js";
import Button from "/Users/harshsahcdeva/Desktop/demo/newes/src/Button.js";
import {TbCategory} from "react-icons/tb";
import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const FilterSection = ({children}) => {
  const {
    filters: { text, category, color, price,maxPrice,minPrice },
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext();
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const menuItem=[
      // {
      //     path:"/",
      //     name:"Dashboard",
      //     icon:<FaTh/>
      // },
      // {
      //     path:"/about",
      //     name:"About",
      //     icon:<FaUserAlt/>
      // },
      // {
      //     path:"/analytics",
      //     name:"Analytics",
      //     icon:<FaRegChartBar/>
      // },
      // {
      //     path:"/comment",
      //     name:"Comment",
      //     icon:<FaCommentAlt/>
      // },

      // {
      //     path:"/productList",
      //     name:"Product List",
      //     icon:<FaThList/>
      // }
  ]

  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    if (attr === "colors") {
      newVal = newVal.flat();
      return ["all", ...new Set(newVal)];
    } else {
      return ["all", ...new Set(newVal)];
    }
  };
  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");
  return (
    <Wrapper>
     <div className="container">
           <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <div style={{marginLeft: isOpen ? "250px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
                   {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo"></h1> */}
               </div>
      <div style={{width: isOpen ? "300px" : "50px"}} className="filter-search">
      <AiOutlineSearch style={{display: isOpen ?"none":"block",width: isOpen ?"300px":"50px"}} className="searchout"/>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            style={{display: isOpen ? "block" : "none"}} className="logo"
             placeholder="SEARCH"
          />
        </form>
      </div>
<div style={{width: isOpen ? "300px" : "50px"}} className="filter-category">
<TbCategory style={{display: isOpen ?"none":"block",width: isOpen ?"300px":"50px"}} className="searchout"/>
 <h3 style={{display: isOpen ? "block" : "none"}} className="logo">CATEGORY</h3>
      </div>
      <div className="category-options">
        {categoryData.map((curElem, index) => {
          return (
            <button
            style={{display: isOpen ? "block" : "none"}}
              key={index}
              type="button"
              name="category"
              value={curElem}
              onClick={updateFilterValue}>
              {curElem}            
            </button>
          );
        })}
      </div>
      <div style={{display: isOpen ? "block" : "none"}}className="filter-company">
      <h3 style={{display: isOpen ? "block" : "none"}} className="logo">COMPANY</h3>
        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onClick={updateFilterValue}>
            {companyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <FiLogOut style={{display: isOpen ?"none":"block",width: isOpen ?"300px":"50px"}} className="searchout1"/>
      <div className="filter-colors-colors">
      <TbColorSwatch style={{display: isOpen ?"none":"block",width: isOpen ?"300px":"50px"}} className="searchout"/>
      <h3 style={{display: isOpen ? "block" : "none"}} className="logo">COLORS</h3>
        <div className="filter-color-style">
        {colorsData.map((curColor,index)=>{ 
            {/* console.log(curColor); */}
            {/* console.log(color); */}
            if(curColor==="all")
            {
                return (
                    <button 
                    key={index}
                    type="button" 
                    name="color"
                    value={curColor}
                    style={{backgroundColor:curColor}}
                    className="color-all--style"
                    onClick={updateFilterValue}
                    >
                   <h5 style={{display: isOpen ? "block" : "none"}} className="logo">all</h5>
                    </button>
                 );
            }
            return (
                    <button 
                    key={index}
                    type="button" 
                    name="color"
                    value={curColor}
                   style={{backgroundColor:curColor}}
                    className={color===curColor?"btnStyle active":"btnStyle"}
                    onClick={updateFilterValue}>
                    {color === curColor ? <FaCheck className="checkStyle" />:null}
                    </button>
                 );        
            })} 
        </div>
    </div>
    <div style={{display: isOpen ? "block" : "none"}} className="filter-price">
    <h3 style={{display: isOpen ? "block" : "none"}} className="logo">PRICE</h3>
        <p>
        <FormatPrice price={price}/>
        </p>
        <input 
        type="range"
        name="price"
        min={minPrice}
        max={maxPrice}
        value={price}
        onChange={updateFilterValue}/>
    </div>
    <div className="filter-price">
    <GiPriceTag style={{display: isOpen ?"none":"block",width: isOpen ?"300px":"50px"}} className="searchout"/>
    {/* <Button className="btn" onClick={clearFilters}>Clear Filters</Button> */}
    <FcFilledFilter className="searchout" onClick={clearFilters}>Clear Filters</FcFilledFilter>
    </div>
               { menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
        </div>
    </Wrapper> 
  );
};
const Wrapper = styled.section`
.searchout1{
  margin-top:2rem;
  font-size:2rem;
  margin-bottom:2rem;
}
.sidebar {
    width: 300px; 
    transition: width 0.3s ease-in-out; 
}
.searchout{
  font-size:2rem;
}
${'' /* padding:5rem 0; */}
  display:flex;
  flex-direction: column;
  gap: 3rem;
  margin-right: 8rem;
  .filter-colors-colors{
    margin-top:1rem;
    h3 {
      padding: 1rem 0;
      font-weight: bold;
    }

  }
  .filter-price{
    margin-top:1rem;
    grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
    ${'' /* gap: 0.5rem; */}
    h3 {
        margin-top:1rem;
      padding: 1rem 0;
      font-weight: bold;
    }
    p{
        margin-top:2rem;
    }
    input{
	height: 0.5px;
	border-radius: 60px;
    }
  }
.color-all--style{
    background-color:transparent;
    text-transform:capitalize;
    border:none;
    cursor:pointer;
}
  .filter-color-style {
    display:flex;
    grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
    gap: 0.5rem;

    button {
      margin-top:2rem;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
    }
  }

  .filter-search {
    margin-top:0.5rem;
    margin-bottom: 2rem;
    input {
      padding: 0.6rem 1rem;
      width: 100%;
      max-width: 14rem;
    }
  }
.filter-company{
  margin-top:1rem;
  font-size:2rem;
    h3 {
      padding: 1rem 0;
      font-weight: bold;
    }
}
  .filter-category {
    h3 {
      padding: 1rem 0;
      font-weight: bold;
    }
  
}
.filter-company--select{
    padding:0.3rem;
    font-size:1.6rem;
    color:${({theme})=>theme.colors.text};
    text-transform: capitalize;
}

.category-options {
    justify-content: space-between; 
    gap: 2rem;
    display: flex;
    flex-wrap: wrap; /* Allow options to wrap to new lines */
    justify-content: flex-start; /* Align options to the left */

    button {
      width: calc(33.33% - 10px);
      margin-right: 10rem;
      padding: 0.5rem 1rem;
      border: none;
      background-color: transparent;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
      width: 20%; /* Each button occupies one line */
      text-transform: capitalize;

      &:hover {
        border-bottom: 2px solid red;
        width:50%;
      }
    }

    .active {
       /* Add an underline style for the active button */
      color: ${({ theme }) => theme.colors.btn};
    }
    @media screen and (max-width: 820px) {
    .sidebar {
        width: 50px;
        margin:0; /* Collapse sidebar on smaller screens */
    }
  /* Adjust other styles as needed */
}

  }
  `;

export default FilterSection;
