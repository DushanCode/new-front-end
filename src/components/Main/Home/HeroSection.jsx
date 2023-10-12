import React from 'react';

import { phone_1, phone_2 } from '../../../assets';

const HeroSection = () => {
  return (
    <section className='hero-section' id='hero'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-12 hero-text-image'>
            <div className='row'>
              <div className='col-lg-8 text-center text-lg-start'>
                <h1 data-aos='fade-right'>Welcome to My Library</h1>
                <p className='mb-5' data-aos='fade-right' data-aos-delay='100'>
                  Entire world is on your pocket now!
                </p>
                <p
                  data-aos='fade-right'
                  data-aos-delay='200'
                  data-aos-offset='-500'
                >
                  <a href='#' className='btn btn-outline-white'>
                    Get started
                  </a>
                </p>
              </div>
              <div className='col-lg-4 iphone-wrap'>
                <img
                  src={phone_1}
                  alt=''
                  className='phone-1'
                  data-aos='fade-right'
                />
                <img
                  src={phone_2}
                  alt=''
                  className='phone-2'
                  data-aos='fade-right'
                  data-aos-delay='200'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
