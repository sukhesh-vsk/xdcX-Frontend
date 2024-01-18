import { Button } from '@mui/material'
import { styled } from '@mui/system'

const CustomButton = styled(Button)(({ className }) => ({
    borderRadius: '10px',
    backgroundColor: className === 'stake-btn' ? 'var(--clr-primarybtn)' : 'var(--clr-secbtn)',
    color: className === 'stake-btn' ? '#000000CC' : '#A7FFC5CC',
    fontSize: '14px',
    fontWeight: '600',
    height: '40px',
    width: '100px',
    '&:hover': {
      backgroundColor: className === 'stake-btn' ? '#a7ffc5a3' : '#1b1b1b78',
    }
  }))

export default CustomButton