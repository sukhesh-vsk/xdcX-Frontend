import React from 'react';

import './Banner.css';
import banner from '../../assets/img/blockchain.png';

const Banner = () => {
  return (
    <section className='container-fluid banner-container row d-flex align-items-center'>
      <div className='col-md-7 banner-text'>
        <span className='shadow-gradient' />
        <span className="head-text text-start">Stake Smart, <br/>Pay Smarter <br/>with xdcX! </span>
        <p class="color-dim">Stake XDC and use xdcX while earning staking rewards.</p>
      </div>
      <div className='col-md-4 text-center'>
        <img src={banner} className='banner-img w-100' alt='banner-img' />
      </div>
    </section>
  )
}

export default Banner
