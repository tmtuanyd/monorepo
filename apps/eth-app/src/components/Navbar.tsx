import React from 'react';
import { AppBar, Box, Button, Drawer } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CloseOutlined, DehazeOutlined } from '@mui/icons-material';

const items = ['Market', 'Exchanges', 'Tutorial', 'Wallets'];

const NavbarItem = ({ title, classProps }: { title: string; classProps?: string }) => {
  return (
    <Box mx={2} style={{ cursor: 'pointer' }} className={classProps}>
      {title}
    </Box>
  );
};

const Navbar = () => {
  const classes = useStyles();
  const [toggleMenu, setToggleMenu] = React.useState<boolean>(false);
  return (
    <AppBar position='relative' sx={{ bgcolor: 'unset' }}>
      <Box display='flex' alignItems={'center'} justifyContent={'space-around'}>
        <Box display='flex' justifyContent={{ xs: 'between', md: 'center' }} alignItems='center' p={2}>
          <img src={'/assets/images/logo.png'} alt='' style={{ width: '8rem' }} />
        </Box>
        <Box display={{ xs: 'none', md: 'flex' }} flexDirection={{ xs: 'column', md: 'row' }} alignItems='center'>
          {items.map((item, index) => (
            <NavbarItem title={item} key={index} />
          ))}
          <Button variant='contained' className={classes.loginButton}>
            Login
          </Button>
        </Box>
        <Box display={{ xs: 'flex', md: 'none' }} position='relative' className={classes.toggleButton}>
          {toggleMenu ? (
            <CloseOutlined onClick={() => setToggleMenu(false)} />
          ) : (
            <DehazeOutlined onClick={() => setToggleMenu(true)} />
          )}
          <Drawer
            anchor='right'
            open={toggleMenu}
            onClose={() => setToggleMenu(false)}
            PaperProps={{ className: classes.drawer }}
          >
            <Box display='flex' px={1} py={2}>
              <CloseOutlined className={classes.toggleButton} onClick={() => setToggleMenu(false)} />
              <Box mt={5} display='flex' flexDirection='column' alignItems='end' ml='auto'>
                {items.map((item, index) => (
                  <Box my={1} key={index}>
                    <NavbarItem title={item} />
                  </Box>
                ))}
              </Box>
            </Box>
          </Drawer>
        </Box>
      </Box>
    </AppBar>
  );
};

const useStyles = makeStyles({
  loginButton: {
    margin: 16
  },
  toggleButton: {
    cursor: 'pointer'
  },
  drawer: {
    background: 'rgba(75, 118, 207, 0.2)',
    backdropFilter: 'blur(5px)',
    color: 'white',
    width: 200
  }
});

export default Navbar;
