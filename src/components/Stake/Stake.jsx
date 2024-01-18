import React from 'react'
import { Grid, TextField, Button } from '@mui/material'
import { styled } from '@mui/system'

import './Stake.css'

const Stake = () => {
  const CustomTextField = styled(TextField)({
    border: '0px',
    '& .MuiInputBase-root': {
      backgroundColor: '#A7FFC54D',
      borderRadius: '15px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: '0px',
    },
    '& .MuiInputLabel-root.MuiInputLabel-shrink': {
      fontWeight: '600',
    },
    '& .MuiInputLabel-root': {
      color: '#f1f1f1',
      fontWeight: '550',
    }
  })

  const CustomButton = styled(Button)(({ className }) => ({
    borderRadius: '10px',
    backgroundColor: className === 'stake-btn' ? '#A7FFC5' : '#1B1B1BCC',
    color: className === 'stake-btn' ? '#000000CC' : '#A7FFC5CC',
    fontSize: '14px',
    fontWeight: '600',
    height: '40px',
    width: '100px',
    '&:hover': {
      backgroundColor: className === 'stake-btn' ? '#a7ffc5a3' : '#1b1b1b78',
    }
  }))

  return (
    <Grid container className='bg stake-container'>
      <Grid item xs={12} className="d-flex justify-content-center align-items-center">
        <h2 className='head-text'>Stake Credits</h2>
      </Grid>
      <Grid item xs={6} className="ps-5 h-25">
        <Grid item xs={12}>
          <h4 className='ps-2'>Staked: 0.000 xdcx</h4>
        </Grid>
        <Grid item xs={12}>
          <CustomTextField
            id="outlined-textarea"
            label="Enter Credits"
            placeholder="Enter credits to stake"
            multiline
            className='mb-1 mt-5 w-75'
          />
          <p className="ps-3">Balance: 0.000 XDC</p>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid item xs={12} className="ms-5">
          <h4>Rewards: 0.000 XDC</h4>
        </Grid>
      </Grid>
      <Grid item xs={6} className="d-flex justify-content-center align-items-center stake-btns pe-5">
        <CustomButton className='stake-btn'>Stake</CustomButton>
        <CustomButton className='unstake-btn'>Unstake</CustomButton>
      </Grid>
    </Grid>
  )
}

export default Stake