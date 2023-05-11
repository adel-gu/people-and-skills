import React from 'react';
import { Stack, Autocomplete, TextField, colors } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import { MdPersonSearch } from 'react-icons/md';

const theme = createTheme({
  components: {},
  palette: {
    primary: {
      main: '#cddc39',
    },
  },
});

const SearchBar = () => {
  return (
    <div className="">
      <ThemeProvider theme={theme}>
        <Stack sx={{ width: '100%' }}>
          {/* <span className="flex items-center text-xl">
            <MdPersonSearch />
          </span> */}
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={[1, 2, 3].map((option) => option)}
            className="w-full rounded-full"
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search skills by people name"
                placeholder="Search skills by people name"
                size="small"
                className="text-white rounded-full"
                color="primary"
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
            )}
          />
        </Stack>
      </ThemeProvider>
    </div>
  );
};

export default SearchBar;
