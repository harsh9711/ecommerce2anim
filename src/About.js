import React from 'react';
import IntroVideo2 from '/Users/harshsahcdeva/Desktop/demo/newes/src/Components/intro.js';
import IntroVideo3 from '/Users/harshsahcdeva/Desktop/demo/newes/src/Components/intro3.js';


import "./About.css";

const About = () => {
  return (
    <div className="page-container">
      <IntroVideo2/>
      <div className="background-image"></div>
    <div className="headings">
        <div className="heading1"><h1>Who We Are</h1></div>
        <div className="heading2">
        <h5>four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking</h5>
        <div className="button primary">
        <span>App</span>
        <img src="https://static.tildacdn.com/tild6439-6430-4738-a338-623832393134/arrow-up-right.svg" className="images"/>
        </div>
        </div>
        </div> 
        <div className="card-container1">
              <div className="card1">
              <img src="https://static.tildacdn.com/tild6434-3437-4237-a435-373538663033/shield-tick.svg" alt="do"/>
                <h2>Our Positions</h2>
                <p>While our positions are carefully considered and deeply held, there is much room for healthy debate and differing opinions. We hope being clear about our positions is helpful.</p>
              </div>
              <div className="card1">
              <img src="https://static.tildacdn.com/tild3766-6666-4434-b962-663632303962/zap-fast.svg" alt="do"/>
                <h2>Public Policy</h2>
                <p>We engage with policymakers on a wide range of issues that are important to our customers and employees. Learn more about our views on current policy issues.</p>
              </div>
              <div className="card1">
              <img src="	https://static.tildacdn.com/tild3530-3633-4362-b163-336239653834/palm.svg" alt="do"/>
                <h2>Awards and Recognition</h2>
                <p>We are honored to be recognized for the work we do on behalf of our customers, employees, and communities every day.</p>
              </div>
            </div>
            <div className="thirdslide">   
                <div className="fuel">
                    <h2>HS STORE “Day 1” </h2>
                    <p>Mentality is our approach of doing everything with the energy and entrepreneurial spirit of a new organization on its first day.</p>
                    <div className="button secondary">
        <span>More about Us</span>
        <img src="https://static.tildacdn.com/tild6439-6430-4738-a338-623832393134/arrow-up-right.svg" className="images"/>
        </div>
                </div>
                <div className="thirdslide1">
                
                <div className="imagesdir">
                <img src ="https://thumb.tildacdn.com/tild6237-3161-4761-b861-633762633565/-/format/webp/03-1-squashed.png"/>
                </div>
                    <div className="headears">
                        <h2>Our Workplace</h2>
                        <p>The customer is at the heart of everything we do. Amazon is a place where smart, passionate people obsess over customers and innovate on their behalf. Amazon has created more U.S. jobs in the last decade than any other company. These are jobs that pay an average of $19 per hour, more than double the federal minimum wage. We also invest in employees’ success. Amazon will spend over $1.2 billion to provide free skills training to employees—helping them further their careers in tech and in-demand roles such as cloud computing.</p>
                    </div>
                </div>
                <div className="thirdslide1">
                <div className="imagesdir"><img src="https://thumb.tildacdn.com/tild6435-3465-4135-b835-336639613236/-/format/webp/02-squashed.png"/></div>
                    <div className="headears">
                        <h2>Our Impact</h2>
                        <p>Our Impact has created more jobs in the past decade than any U.S. company, and we have invested more than $530 billion in the U.S. over the last decade. Beyond our own workforce, Amazon’s investments have supported nearly 1.6 million indirect jobs in fields like construction and hospitality. We also actively work to help communities by responding to the urgent needs of reducing hunger and homelessness and investing in education for children and young adults.</p>
                    </div>
                </div>
                <div className="thirdslide1">
                
                <div className="imagesdir"><img src ="https://thumb.tildacdn.com/tild3036-3235-4835-b035-616537616631/-/format/webp/01-squashed.png"/></div>
                    <div className="headears">
                        <h2>Our Planet</h2>
                        <p>Fuel uses Eth consensus algorithms and Ethereum's data warehouse, proven over the years. This ensures the reliability of the protocols and the highest security of user assetsWe are committed to and invested in sustainability because it’s a win all around—it’s good for the planet, for business, for our customers, and for our communities.</p>
                    </div>
                </div>           
                </div>
                <div className="intro1"> <IntroVideo3/> </div>
              {/* <div className="background-image"></div> */}
              <div className="fourthslide">
                <div className="introvideo2-center">
                    <h2>Battle tested solution</h2>
                    <p>Network brings Compound protocol to a completely performance level</p>
                    <div></div>
                    <div className="button secondary">
        <span>App</span>
        <img src="https://static.tildacdn.com/tild6439-6430-4738-a338-623832393134/arrow-up-right.svg" className="images"/>
</div>
                </div>
                </div>
        </div>

  )
}

export default About
