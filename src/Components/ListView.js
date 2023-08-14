import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FormatPrice from "/Users/harshsahcdeva/Desktop/demo/newes/src/Helpers/Formatprice.js";
import Button from "/Users/harshsahcdeva/Desktop/demo/newes/src/Button.js";

const ListView = ({ products }) => {
  return (
    <Wrapper className="section">
      <div className="container grid">
        {products.map((curElem) => {
          const { id, name, image, price, description } = curElem;
          return (
            <div className="card grid grid-two-column">
              <figure>
                <img src={image} alt={name} />
              </figure>
              <div className="card-data">
                <h3>{name}</h3>
                <p>
                  <FormatPrice price={price} />
                </p>
                <p>{description.slice(0, 80)}...</p>
                <div className="btn-wrapper">
                  <NavLink to={`/singleproduct/${id}`} className="btn-main">
                    <Button className="btn">Read More</Button>
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
justify-content:center;
width:90%;
  padding: 9rem 0;
  .container {
    max-width: 120rem;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50%, 1fr)); /* Adjust minmax values as needed */
    gap: 3.2rem;
    justify-content: center;

  }
  figure {
    width: auto;
  margin-left: 10rem;
  display: inline;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: all 0.5s linear;
  ${'' /* max-width:10%; */}
  ${'' /* max-height:20%; */}
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      ${'' /* cursor: pointer; */}
    }
    &:hover::after {
      ${'' /* width: 100%; */}
    }
    &:hover img {
      ${'' /* transform: scale(1.2); */}
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }
  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    display: flex;
    align-items: center;
    .card-data {
      flex: 1;
      padding: 0 2rem;
      text-align: left;
      p:last-child {
        margin-bottom: 1rem;
      }
      .btn-wrapper {
        margin-top: 1rem;
      }
    }
    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      text-transform: capitalize;
    }
    .btn {
      margin: 0;
      background-color: rgb(0 0 0/0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color:rgba(94 82 243);
      &:hover {
        background-color: rgb(98 84 243);
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
    ${'' /* .btn-main .btn:hover{
        color:#fff;
    } */}
  }
`;

export default ListView;
 