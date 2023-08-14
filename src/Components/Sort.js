import React from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../Context/filter_context";

const Sort = () => {
  const {
    filter_products,
    grid_view,
    setGridView,
    setListView,
    sorting,
  } = useFilterContext();

  return (
    <Wrapper className="sort-section">
      <div className="sort-content">
        {/* 1st col */}
        <div className="sorting-list--grid">
          <button
            className={grid_view ? "active sort-btn" : "sort-btn"}
            onClick={setGridView}
          >
            <BsFillGridFill className="icon" />
          </button>
          <button
            className={!grid_view ? "active sort-btn" : "sort-btn"}
            onClick={setListView}
          >
            <BsList className="icon" />
          </button>
        </div>
        {/* 2nd col */}
        <div className="product-data">
          <p>{`${filter_products.length} Product Available`}</p>
        </div>
        {/* 3rd col */}
        <div className="sort-selection">
          <form action="#">
            <label htmlFor="sort"></label>
            <select
              name="sort"
              id="sort"
              className="sort-selection--style"
              onChange={sorting} // Updated event from onClick to onChange
            >
              <option value="lowest">Price (lowest)</option>
              <option value="#" disabled></option>
              <option value="highest">Price (highest)</option>
              <option value="#" disabled></option>
              <option value="a-z">Price (a-z)</option>
              <option value="#" disabled></option>
              <option value="z-a">Price (z-a)</option>
            </select>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
justify-content:center;
width:100%;
   display: flex;
  justify-content: center; 
  align-items: center; 
  .sort-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-right: 35rem;
    margin-top:7rem;
    gap:40rem;
    .sorting-list--grid {
      display: flex;
      gap: 2rem;
      .sort-btn {
        padding: 0.8rem 1rem;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
     .icon {
        font-size: 1.6rem;
      }
      .active {
        background-color: black;
        color: #fff;
      }
    }
    .product-data {
      p {
        margin: 0;
      }
    }
    .sort-selection {
      position: relative;

      label::after {
        content: "";
      position: absolute;
      top: 50%;
      right: 10px;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid #000;
      transform: translateY(-50%);
      pointer-events: none;
      }
      .sort-selection--style {
        padding: 0.5rem;
    cursor: pointer;
    position: relative;
      }
      .sort-select--option {
        padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
      }
    }
    @media screen and (max-width: 820px) {
      flex-direction: column;
      gap: 10rem;
      align-items: flex-start;
  }
  }
`;

export default Sort;
