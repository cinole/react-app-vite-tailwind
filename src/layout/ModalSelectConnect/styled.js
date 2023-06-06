import { styled } from '@mui/material'

export const SCModalConnect = styled('div', { label: 'Connect' })(({ theme }) => ({
  top: '50%',
  transform: 'translateY(-50%)',
  maxWidth: 400,
  margin: 'auto',
  background: theme.palette.primary.background,
  button: {
    background: 'none',
    border: '0.5px solid #fff',
    borderRadius: 4,
    color: '#FFF3DB',
    fontSize: 16,
    [theme.breakpoints.down('xs')]: {
      fontSize: 12
    },
    ':hover': {
      transform: 'translateY(-2px)',
      opacity: 0.6
    },

    img: {
      width: 22
    }
  },
  '.btn-close': {
    filter: 'invert(1)',
    cursor: 'pointer',
    zIndex: 2
  }
}))
