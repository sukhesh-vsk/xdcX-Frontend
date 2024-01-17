import React from 'react'
import { Grid, TextField } from '@mui/material'
import { styled } from '@mui/system'

import './Stake.css'

const Stake = () => {
  const CustomTextField = styled(TextField)({
    '& .MuiInputBase-root': {
      backgroundColor: '#A7FFC54D',
      borderRadius: '15px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderWidth: '0px',
    },
    '& .MuiInputLabel-root.MuiInputLabel-shrink': {
      fontWeight: '600',
    },
    '& .MuiInputLabel-root': {
      color: '#f1f1f1',
      fontWeight: '550',
    }
  })

  return (
    <Grid container className='bg stake-container'>
      <Grid item xs={12} className="d-flex justify-content-center align-items-center">
        <h2 className='head-text'>Stake Credits</h2>
      </Grid>
      <Grid item xs={6} className="ps-5">
        <Grid item xs={12}>
          <h4 className='ps-2'>Staked: 0.000 xdcx</h4>
        </Grid>
        <Grid item xs={12}>
          <CustomTextField
            id="outlined-textarea"
            label="Enter Credits"
            placeholder="Enter credits to stake"
            multiline
            className='mb-1 w-75'
          />
          <p className="ps-3">Balance: 0.000 XDC</p>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid item xs={12} className="ms-5">
          <h4>Rewards: 0.000 XDC</h4>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <button className='stake-btn'>Stake</button>
        <button className='unstake-btn'>Unstake</button>
      </Grid>
    </Grid>
  )
}

export default Stake