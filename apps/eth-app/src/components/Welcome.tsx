import React from 'react';
import { Box, Button, Divider, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Ethereum } from '../Icons/Ethereum';
import { InfoOutlined } from '@mui/icons-material';
import { useBreakpoints } from '../utils/breakpoints';
import { colors } from '../theme';

const Welcome = () => {
  const classes = useStyles();
  const { isLessThanMd } = useBreakpoints();
  return (
    <Box
      display='flex'
      width='100%'
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={isLessThanMd ? 'column' : 'row'}
    >
      <Box
        display={'flex'}
        flexDirection={{ xs: 'column', md: 'row' }}
        alignItems={'start'}
        justifyContent={'space-between'}
        p={{ xs: 4, md: 10 }}
      >
        <Box color={'white'}>
          <Typography variant={isLessThanMd ? 'h5' : 'h2'}>
            Send Crypto <br /> across the world
          </Typography>
          <Box width={{ xs: '95%', md: '75%' }} my={2}>
            <Typography>Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.</Typography>
          </Box>
          <Button variant={'contained'} fullWidth>
            Connect Wallet
          </Button>
          <Box display={'grid'} mt={5} gridTemplateColumns={'auto auto auto'}>
            <Box className={classes.componentStyles} borderRadius={'16px 0 0 0'}>
              Reliability
            </Box>
            <Box className={classes.componentStyles}>Security</Box>
            <Box className={classes.componentStyles} borderRadius={'0 16px 0 0'}>
              Ethereum
            </Box>
            <Box className={classes.componentStyles} borderRadius={'0 0 0 16px'}>
              Web 3.0
            </Box>
            <Box className={classes.componentStyles}>Low Fees</Box>
            <Box className={classes.componentStyles} borderRadius={'0 0 16px 0'}>
              Blockchain
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display={'flex'}
        flexDirection='column'
        justifyContent={'center'}
        alignItems={'center'}
        p={{ xs: 4, md: 10 }}
      >
        <Box
          width={'100%'}
          height={'10rem'}
          className={'eth-card white-glassmorphism'}
          borderRadius={'0.75rem'}
          my={2}
          p={1}
          display={'flex'}
          flexDirection={'column'}
          maxWidth={'18rem'}
        >
          <Box display={'flex'} justifyContent={'space-between'}>
            <Ethereum />
            <InfoOutlined style={{ color: 'white' }} />
          </Box>
          <Box mt={'auto'} color={'white'}>
            <Typography gutterBottom>Address</Typography>
            <Typography variant={'h6'}>Ethereum</Typography>
          </Box>
        </Box>
        <Box className={'blue-glassmorphism'} p={2} width={{ xs: '18rem', md: '24rem' }} maxWidth={'100%'}>
          <TextField
            placeholder={'Address To'}
            name={'addressTo'}
            type={'text'}
            size={'small'}
            fullWidth
            variant={'filled'}
            sx={{ color: 'white', my: 1 }}
            inputProps={{ className: 'white-glassmorphism' }}
          />
          <TextField
            placeholder={'Amount (ETH)'}
            name={'amount'}
            type={'number'}
            size={'small'}
            inputProps={{ step: 0.0001, className: 'white-glassmorphism' }}
            fullWidth
            variant={'filled'}
            sx={{ color: 'white', my: 1 }}
          />
          <TextField
            placeholder={'Keyword (Gif'}
            name={'keyword'}
            type={'text'}
            size={'small'}
            fullWidth
            variant={'filled'}
            sx={{ color: 'white', my: 1 }}
            inputProps={{ className: 'white-glassmorphism' }}
          />
          <TextField
            placeholder={'Enter Message'}
            name={'message'}
            type={'text'}
            size={'small'}
            fullWidth
            variant={'filled'}
            sx={{ color: 'white', my: 1 }}
            inputProps={{ className: 'white-glassmorphism' }}
          />
          <Divider sx={{ borderColor: colors.grey[400], my: 2 }} />
          <Button fullWidth variant={'outlined'} sx={{ color: colors.white }}>
            Send Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme: any) => ({
  componentStyles: {
    minHeight: 70,
    padding: '0 8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '0.5px solid grey',
    [theme.breakpoints.up('sm')]: {
      padding: 0,
      minWidth: 120
    }
  }
}));

export default Welcome;
