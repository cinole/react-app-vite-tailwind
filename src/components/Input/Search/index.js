import * as React from 'react'
import TextField from '@mui/material/TextField'
import { SCInputSearch } from '@/components/Input/styled'

const index = () => {
  return (
    <div className="relative flex items-center">
      <SCInputSearch className="mw-full">
        <TextField
          sx={{
            maxWidth: '100%',
            '& input': {
              px: 1,
              py: 0.5
            }
          }}
          placeholder="Search"
        />
      </SCInputSearch>
      <img
        className="absolute right-0 mr-4"
        src="/static/icons/icon-search.svg"
        alt="G-Searching"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      />
    </div>
  )
}

export default index
