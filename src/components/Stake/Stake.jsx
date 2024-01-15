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
    '& .MuiFocused': {
      borderRadius: '500px'
    }
  })

  return (
    <Grid container className='bg'>
      <Grid item xs={12}>
        <h2 className='head-text'>Stake Credits</h2>
      </Grid>
      <Grid item xs={6}>
        <Grid item xs={12}>
          <h4>Staked: 0.000 xdcx</h4>
        </Grid>
        <Grid item xs={12}>
          <CustomTextField
            id="outlined-textarea"
            label="Enter Credits"
            placeholder="Enter credits to stake"
            multiline
            className='mb-3 w-75'
          />
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid item xs={12}>
          <h4>Rewards: 0.000 XDC</h4>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Stake