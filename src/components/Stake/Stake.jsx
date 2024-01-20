import React from 'react';
import CustomButton from '../Custom/CustomButton'
import CustomTextField from '../Custom/CustomTextfield'
import useIntersectionObserver from '../Custom/CustomAnimation';
import './Stake.css'

const Stake = () => {
  const bounce = useIntersectionObserver('bounce-in');

  return (
    <section className='container-fluid stake-container' id='stake'>
      <div className='col-md-12 my-5'>
        <h2 ref={bounce} className='head-text stake-head m-0'>Stake Credits</h2>
      </div>
      <div className="col-md-12 mb-5 row">
        <div className='col-md-6 stake-field'>
          <div className='col-md-12 p-0 ms-2'>
            <h4>Staked: 0.000 xdcx</h4>
          </div>
          <div className='col-md-12 my-5'>
            <CustomTextField
              id="outlined-textarea"
              label="Enter Credits"
              placeholder="Enter credits to stake"
              multiline
              className='mb-1 w-100'
            />
            <p className="ps-3" style={{ color: "var(--clr-dim)" }}>Balance: 0.000 XDC</p>
          </div>
          <div className='col-md-12 d-flex justify-content-around'>
            <CustomButton className='btn-green stake-btn'>Stake</CustomButton>
            <CustomButton className='unstake-btn'>Unstake</CustomButton>
          </div>
        </div>
        <div className='col-md-6 text-center'>
          <h4>Rewards: 0.000 XDC</h4>
        </div>
      </div>
    </section>
  )
}

export default Stake