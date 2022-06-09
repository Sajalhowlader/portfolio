import React from 'react';
import bannerImg from '../../images/pp.png';
const Banner = () => {
    return (
        <section>
          <div className='banner-container'>
              <div className='banner-info'>
 <h2>Hi ! I'm</h2>
 <h1>SAJAL HOWLADER</h1>

              </div>
              <div className="banner-img">
                  <img src={bannerImg} alt="" />
              </div>
              </div>  
        </section>
    );
};

export default Banner;