import React from 'react'

import './PtP.css'
import CustomTextField from '../Custom/CustomTextfield';
import CustomButton from '../Custom/CustomButton';
import payment from '../../assets/img/payment.png'
import xdc from '../../assets/img/xdc.png'

const PtP = () => {
  return (
    <section className='container-fluid ptp-container'>
      <div className='col-md-12 py-5'>
        <h2 className='head-text'>P2P Fund Transfer</h2>
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
        <img src={payment} alt="payment image" className='d-flex justify-content-center payment-img' />
      </div>
      </div>
    </section>
  )
}

export default PtP