import * as React from 'react'
import TextField from '@mui/material/TextField'
import { SCInputSearch } from '@/components/Input/styled'

const index = () => {
  return (
    <div className="position-relative d-flex align-items-center">
      <SCInputSearch className="mw-100">
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
        className="position-absolute end-0 me-3"
        src="/static/icons/icon-search.svg"
        alt="G-Searching"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      />
    </div>
  )
}

export default index
