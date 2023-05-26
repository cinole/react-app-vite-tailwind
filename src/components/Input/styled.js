import { styled } from '@mui/material'

export const SCInputSearch = styled('div')(({ theme }) => ({
  '& input::placeholder': {
    color: theme.colors['--color-common-secondary50']
  },
  '& input:valid': {
    padding: '4px 14px',
    width: '300px',
    height: '24px',
    borderRadius: '32px',
    background: theme.colors['--color-common-azure500'],
    fontFamily: 'Mulish',
    ...theme.typography['normal-text--regular']
  },
  '& fieldset': {
    border: 'none !important'
  }
}))
