import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

import './styles.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Single Tent',
  'Double Tent',
  'Luxury Tent'
];

export default function MultipleSelectCheckmarks({ handleChange, accommodationType }) {
  return (
    <div className='booking-multi-select'>
      <FormControl sx={{ m: 0, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Accommodation</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={accommodationType}
          onChange={handleChange}
          input={<OutlinedInput label="Accommodation" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {accommodationType && names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={accommodationType.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
