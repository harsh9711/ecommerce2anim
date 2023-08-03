import HeroSection  from "./Components/HeroSection";
import {useProductContext} from "./Context/Productcontext";
import FeaturedProducts from "/Users/harshsahcdeva/Desktop/demo/newes/src/Components/FeaturedProducts.js";
const About=()=>{
    const {myName}=useProductContext();
    const data={
        name:"HS Ecommerece",
    };
return(
  <>
  {myName}
  <HeroSection myData={data}/>{" "}  
  <FeaturedProducts/>
  </>  
);
};
export default About;