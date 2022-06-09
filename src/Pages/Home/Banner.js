import React from 'react';
import bannerImg from '../../images/ppp.png';
const Banner = () => {
    return (
        <section>
          <div className='banner-container px-5'>
              <div className='banner-info'>
                  <p>WELCOME TO MY WORLD</p>
                <h2>Hi ! I'm</h2>
                   <h1>SAJAL HOWLADER</h1>  
              </div>
              <div className="banner-img">
                <div className="img-shadow">
                <img src={bannerImg} alt="" />
                </div>
              </div>
              </div>  
        </section>
    );
};

export default Banner;