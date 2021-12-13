import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import '../App.css';

const Login = () => (
  <Box
    component="section"
    className="section-login"
    sx={ { maxWidth: 'sm' } }
  >
    <TextField
      id="outlined-name"
      label="Player Name"
      variant="standard"
      fullWidth
    />
    <TextField
      type="email"
      id="outlined-email"
      label="E-mail"
      variant="standard"
      margin="normal"
      fullWidth
    />
    <Button
      variant="contained"
      endIcon={ <SendIcon /> }
    >
      Play
    </Button>
  </Box>
);

export default Login;
