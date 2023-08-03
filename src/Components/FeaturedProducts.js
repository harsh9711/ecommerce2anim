import { useProductContext } from '../Context/Productcontext';
import {styled} from 'styled-components';
import theme from '../theme';
import Product from './Product';
const FeaturedProducts=()=>{
    const {isLoading,featureProducts}= useProductContext();
     if(isLoading){
         return <div>........Loading</div>}
    // console.log(">>>,;>>>>>>>>>>>>>>",featureProducts, useProductContext);
    return(
     <Wrapper className="section">
        <div className="container">
            <div className="intro-data">Check Now!</div>
            <div className="common-heading">Our Feature Services</div>
            <div className="grid-grid-three-column">
            {featureProducts.map((curElem)=>{
                console.log(curElem);
                return <Product key={curElem.id}{...curElem}/>;
            })}
            </div>    
        </div>
    </Wrapper>
    );
};
const Wrapper=styled.section`
padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .container {
    max-width: 1200px; /* Adjust the max-width to your desired value */
    margin: 0 auto;
  }
  .grid-grid-three-column {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  figure {
    flex: 0 0 calc(33.33% - 1rem); /* Adjust the width and margin to your desired values */
    margin-bottom: 2rem; /* Adjust the margin to your desired value */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }
  .card {
    background-color: #fff;
    border-radius: 1rem;
    .card-data {
      padding: 0 2rem;
    }
    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }
    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
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
  }
`;
export default FeaturedProducts;
