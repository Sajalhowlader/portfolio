import React from 'react';
import bannerImg from '../../images/linked profile.jpg'
const Banner = () => {
    return (
        <section>
          <div className='banner-container'>
              <div className='banner-info'>

              </div>
              <div className="banner-img">
                  <img src={bannerImg} alt="" />
              </div>
              </div>  
        </section>
    );
};

export default Banner;