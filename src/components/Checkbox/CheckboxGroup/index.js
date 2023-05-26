import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import Checkbox from '@mui/material/Checkbox'

const index = ({ list, name: _name, value, onChange, ...rest }) => {
  const handleChange = (event) => {
    const { name } = event.target
    const checked = event.target.checked
    const _val = checked
      ? [...value, name]
      : [...value].filter((i) => i !== name)
    onChange({ [_name]: _val })
    // console.log({ name, checked, _val, value }, value.includes(name))
  }

  return (
    <div className="wp-group-ckb">
      <FormControl>
        <FormGroup className={rest?.className}>
          {list.map((item, idx) => (
            <FormControlLabel
              className={`wp-group-ckb__item text-sub mx-0 text-${item.value}`}
              key={item?.text || idx + item.value}
              control={
                <Checkbox
                  className="wp-group-ckb__item--box me-2 p-0"
                  checked={value.includes(item.value)}
                  onChange={handleChange}
                  name={item.value}
                />
              }
              label={item.text}
            />
          ))}
        </FormGroup>
      </FormControl>
    </div>
  )
}

export default index
