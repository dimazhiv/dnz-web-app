import { useState } from 'react';

import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase } from '@mui/material';
import './SearchField.css';

const Search = styled('div')(() => ({
  display: 'flex',
  border: '1px solid red',
  flexDirection: 'row',
  borderRadius: '20px',
  backgroundColor: 'red',
  '&:hover': {
    backgroundColor: 'lightpink',
  },
  marginTop: '50px',
  marginBottom: '50px',
  minWidth: '150px',
}));

const StyledInputBase = styled(InputBase)(() => ({
  backgroundColor: 'white',
  borderTopLeftRadius: '20px',
  borderBottomLeftRadius: '20px',
  paddingLeft: '20px',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: '5px',
    width: '100%',
    fontSize: '20px',
    color: 'red',
  },
}));

export type SearchFieldProps = {
  onSearchPress: (id: string) => void;
};

export default function SearchField({ onSearchPress }: SearchFieldProps) {
  const [value, setValue] = useState('');

  const handleSearch = () => onSearchPress(value);

  const onChange = (event: any) => setValue(event.target.value);

  return (
    <Search role="form">
      <StyledInputBase
        placeholder="input word for search"
        inputProps={{ 'aria-label': 'search' }}
        onChange={onChange}
      />

      <IconButton aria-label="search" onClick={handleSearch}>
        <SearchIcon fontSize="large" style={{ fill: 'white' }} />
      </IconButton>
    </Search>

  );
}
