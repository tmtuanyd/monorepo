import React from 'react';
import { Navbar, Welcome, Footer, Services, Transactions } from './components';
import { Box } from '@mui/material';

function App() {
  return (
    <Box minWidth='100%'>
      <Box className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </Box>
      <Services />
      <Transactions />
      <Footer />
    </Box>
  );
}

export default App;
