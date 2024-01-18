import React from 'react'
import { Grid, TextField, Button } from '@mui/material'
import CustomButton from '../Custom/CustomButton'
import CustomTextField from '../Custom/CustomTextfield'

import './Stake.css'

const Stake = () => {
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
          <p className="ps-3" style={{color: "var(--clr-dim)"}}>Balance: 0.000 XDC</p>
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