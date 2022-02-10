import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/material';
import Proptypes from 'prop-types';

const SelectSettings = (
  { category, funcCategory, level, funcLevel, type, funcType },
) => (
  <Box className="box-settings">
    <FormControl variant="standard" sx={ { width: '50%' } }>
      <InputLabel id="category">Category</InputLabel>
      <Select
        labelId="category"
        value={ category }
        onChange={ funcCategory }
        label="Category"
      >
        <MenuItem value="">Default</MenuItem>
        <MenuItem value="9">General Knowledge</MenuItem>
        <MenuItem value="10">Entertainment: Books</MenuItem>
        <MenuItem value="11">Entertainment: Film</MenuItem>
        <MenuItem value="12">Entertainment: Music</MenuItem>
        <MenuItem value="14">Entertainment: Television</MenuItem>
        <MenuItem value="15">Entertainment: Video Games</MenuItem>
      </Select>
    </FormControl>
    <FormControl variant="standard" sx={ { width: '50%' } }>
      <InputLabel id="level">Difficult</InputLabel>
      <Select
        labelId="level"
        value={ level }
        onChange={ funcLevel }
        label="Difficult"
      >
        <MenuItem value="">Default</MenuItem>
        <MenuItem value="easy">Easy</MenuItem>
        <MenuItem value="medium">Medium</MenuItem>
        <MenuItem value="hard">Hard</MenuItem>
      </Select>
    </FormControl>
    <FormControl variant="standard" sx={ { width: '50%' } }>
      <InputLabel id="type">Type</InputLabel>
      <Select
        labelId="type"
        value={ type }
        onChange={ funcType }
        label="Difficult"
      >
        <MenuItem value="">Default</MenuItem>
        <MenuItem value="multiple">Multiple Choice</MenuItem>
        <MenuItem value="boolean">True/False</MenuItem>
      </Select>
    </FormControl>
  </Box>
);

SelectSettings.propTypes = {
  category: Proptypes.string.isRequired,
  funcCategory: Proptypes.func.isRequired,
  level: Proptypes.string.isRequired,
  funcLevel: Proptypes.func.isRequired,
  type: Proptypes.string.isRequired,
  funcType: Proptypes.func.isRequired,
};

export default SelectSettings;
