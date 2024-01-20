import React, { useEffect } from 'react';

import './Banner.css';
import useIntersectionObserver from '../Custom/CustomAnimation';
import banner from '../../assets/img/blockchain.png';

const Banner = () => {
  const fadeup = useIntersectionObserver('fade-in-up');
  const swiftup = useIntersectionObserver('swift-up-text');
  
  useEffect(() => {
    const swiftUpElements = document.querySelectorAll('.swift-up-text');
    
    swiftUpElements.forEach(elem => {
      
      const words = elem.textContent.split(' ');
      elem.innerHTML = '';
      
      words.forEach((el, index) => {
        words[index] = `<span><i>${words[index]}</i></span>`;
      });
      
      elem.innerHTML = words.join(' ');
      
      const children = document.querySelectorAll('span > i');
      children.forEach((node, index) => {
        node.style.animationDelay = `${index * .2}s`;
      });

    });

  }, []);
  
  return (
    <section className='container-fluid banner-container row d-flex align-items-center' id="banner">
      <div className='col-md-7 banner-text'>
        <span className='shadow-gradient' />
          <span ref={swiftup} className="text-start swift-up-text" style={{color: '#6fff9f'}}>Stake Smart, Pay Smarter with xdcX! </span>
        <p class="color-dim">Stake XDC and use xdcX while earning staking rewards.</p>
      </div>
      <div className='col-md-4 text-center'>
        <img ref={fadeup} src={banner} className='banner-img w-100 fade-in-up' alt='banner-img' />
      </div>
    </section>
  )
}

export default Banner
