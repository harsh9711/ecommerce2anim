import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "./Context/Productcontext";
 import PageNavigation from "./Components/PageNavigation";
import { Container } from "./Styles/Container";
import MyImage from "./Components/MyImage";
import FormatPrice from "/Users/harshsahcdeva/Desktop/demo/newes/src/Helpers/Formatprice.js";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Star from "./Components/Star";
import AddtoCart from "./Components/AddToCart";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
  const { id } = useParams();
  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="page_loading">Loading.....</div>;
  }

  return (
    <Wrapper>
      <PageNavigation title={name} />
      <Container className="container">
        <div className="grid grid-two-column">
          {/* Product images */}
          <div className="product_images">
            <MyImage imgs={image} />
          </div>
          {/* PRODUCT DATA */}
          <div className="product-data">
            <h2>{name}</h2>
            <Star stars={stars} review={reviews}/>
           <p>{reviews} reviews</p>
            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="product-data-price-product-data-real-price">
              Deal of the day:<FormatPrice price={price} />
            </p> 
            <p>{description}</p> 
            <div className="icons">
              <div className="product-data-warranty">
                <TbTruckDelivery className="warrant-icon" />
                <p>Free Delivery</p>
              </div>
              <div className="product-data-warranty">
                <TbReplace className="warrant-icon" />
                <p>30 days replacement</p>
              </div>
              <div className="product-data-warranty">
                <TbTruckDelivery className="warrant-icon" />
                <p>Thapa Delivered</p>
              </div>
              <div className="product-data-warranty">
                <MdSecurity className="warrant-icon" />
                <p>2 year warranty</p>
              </div>
              <div className="line"></div>
            </div>        
            <div className="product-data-info">
              <p>
                Available: <span>{stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID: <span>{id}</span>
              </p>
              <p>
                Brand: <span>{company}</span>
              </p> 
              <div className="line"></div>          
            </div>      
            <hr/>
            {stock>0 &&  <AddtoCart product={singleProduct}/>} 
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
width:70%;
padding :12rem 35rem;
.product-data-price-product-data-real-price{
    color:darkviolet;
}
  .container {
    padding: 9rem 0;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
  }

  .product_images {
    display:flex;
    align-items: center;
    grid-column: 1 / 2;
  }

  .product-data {
    text-transform: capitalize;
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
  }

  .product-data-warranty {
    display: inline;
    align-items: center;
  }

  .warrant-icon {
    background-color: rgba(220, 220, 220, 0.5);
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    padding: 0.6rem;
    margin-right: 1rem;
  }

  p {
    font-size: 1.4rem;
    padding-top: 0.4rem;
    text-align: left;
  }

  .icons {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    align-items: center;
    position: relative;
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: #ccc;
    position: absolute;
    bottom: -10px;
  }
  .product-data-info {
    position: relative;
    margin-bottom: 2rem;
  }

  .product-data-info::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -10px;
    width: calc(100% + 35rem); /* Adjust the value as needed */
    margin-left: -1rem;
    height: 1px;
    background-color: #000;
  }
`;

export default SingleProduct;
