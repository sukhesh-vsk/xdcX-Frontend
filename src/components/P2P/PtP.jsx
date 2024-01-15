import React from 'react'
import { Grid, TextField, Button } from '@mui/material'
import { styled } from '@mui/system';

import './PtP.css'
import payment from '../../assets/img/payment.png'
import xdc from '../../assets/img/xdc.png'

const PtP = () => {
  const CustomTextField = styled(TextField)({
    '& .MuiFormLabel-root, .MuiInputBase-input': {
      color: '#ffffffcc',
      backgroundColor: '#2C71FC',
      fontFamily: "Circular Pro Medium,sans-serif",
    },
    '& .MuiInputBase-root': {
      backgroundColor: '#2C71FC',
      borderRadius: '15px',
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        border: 'none',
      }
    },
    '& .MuiInputLabel-root.MuiInputLabel-shrink': {
      color: '#000000cc',
      fontSize: '1rem',
      textStroke: '0.5px #000000cc',
      WebkitTextStroke: '0.5px #000000cc',
      background: 'none',
    },
    '& .MuiInputBase-input::placeholder': {
      color: '#ffffffcc',
      fontFamily: "Circular Pro Medium,sans-serif",
    },
    'MuiInputBase-input': {
      color: 'red',
    }
  });

  const CustomButton = styled(Button) ({
    background: "linear-gradient(to bottom right, #4294E3, #8F12FD)",
    borderRadius: '10px',
  });
  
  return (
    <Grid container>
      <Grid item xs={12} className='mt-3'>
        <span className='title'>P2P Fund Transfer</span>
      </Grid>
      <Grid item xs={7} style={{paddingLeft: "11rem"}} className="my-auto">
        <Grid item xs={12} className="my-3">
          <span className='colordim ps-2'>Your balance</span>
          <Grid item className="d-flex showbalance" xs={12}>
            <img src={xdc} alt="xdc image" className='xdclogo'/>
            <span className='balance colordark ps-2'>0.0000 XDC</span>
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
    </Grid>
  )
}

export default PtP