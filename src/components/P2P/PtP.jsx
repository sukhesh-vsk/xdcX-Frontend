import React from 'react'
import { Grid, TextField, Button } from '@mui/material'
import { styled } from '@mui/system';
import CustomTextField from '../Custom/CustomTextfield';
import CustomButton from '../Custom/CustomButton';
import './PtP.css'
import payment from '../../assets/img/payment.png'
import xdc from '../../assets/img/xdc.png'

const PtP = () => {
  return (
    <Grid container>
      <Grid item xs={12} className='mt-3'>
        <span className='title head-text'>P2P Fund Transfer</span>
      </Grid>
      <Grid item xs={7} style={{paddingLeft: "11rem"}} className="my-auto">
        <Grid item xs={12} className="my-3">
          <span className='colordim ps-2'>Your balance</span>
          <Grid item className="d-flex showbalance" xs={12}>
            <img src={xdc} alt="xdc image" className='xdclogo'/>
            <span className='balance ps-2'>0.0000 XDC</span>
          </Grid>
        </Grid>
        <Grid item xs={12} className="d-flex flex-column my-4">
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
          <CustomButton variant="contained" className='my-4 transfer-btn' style={{marginLeft: "26%"}}>Transfer</CustomButton>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <img src={payment} alt="payment image"  className='d-flex justify-content-center payment-img'/>
      </Grid>
      <hr/>
    </Grid>
  )
}

export default PtP