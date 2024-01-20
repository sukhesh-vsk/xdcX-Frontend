import React from 'react'

import './PtP.css'
import CustomTextField from '../Custom/CustomTextfield';
import CustomButton from '../Custom/CustomButton';
import useIntersectionObserver from '../Custom/CustomAnimation';
import payment from '../../assets/img/payment.png'
import xdc from '../../assets/img/xdc.png'

const PtP = () => {
  const bounce = useIntersectionObserver('bounce-in');
  const fadeimage = useIntersectionObserver('fade-in-left');

  return (
    <section className='container-fluid ptp-container'>
      <div className='col-md-12 py-5'>
        <h2 ref={bounce} className='head-text ptp-head bounce-in'>P2P Fund Transfer</h2>
      </div>
      <div className='col-md-12 row mb-5'>
      <div className='col-md-8 ptp-field'>
        <div className='col-md-12 mb-5'>
          <span className='colordim ps-2'>Your balance</span>
          <div item className="d-flex showbalance" xs={12}>
            <img src={xdc} alt="xdc image" className='xdclogo' />
            <span className='balance ps-2'>0.0000 XDC</span>
          </div>
        </div>
        <div className='col-md-12 d-flex flex-column'>
          <CustomTextField
            id="outlined-textarea"
            label="Recipient Address"
            placeholder="Enter Recipient Address"
            multiline
            className={`mb-3 w-75`}
          />
          <CustomTextField
            id="outlined-textarea"
            label="Amount"
            placeholder="Amount to transfer (XDC)"
            multiline
            className='mb-3 w-75'
          />
        </div>
        <div className='col-md-12'>
        <CustomButton variant="contained" className='my-4 transfer-btn' style={{ marginLeft: "26%" }}>Transfer</CustomButton>
        </div>
      </div>
      <div className='col-md-4'>
        <img ref={fadeimage} src={payment} alt="payment image" className='d-flex justify-content-center payment-img fade-in-left' />
      </div>
      </div>
    </section>
  )
}

export default PtP