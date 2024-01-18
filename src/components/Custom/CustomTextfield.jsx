import { TextField } from '@mui/material'
import { styled } from '@mui/system'

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

export default CustomTextField