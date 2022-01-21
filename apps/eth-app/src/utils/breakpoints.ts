import { useMediaQuery, useTheme } from '@mui/material';

export const useBreakpoints = () => {
  const theme = useTheme();
  const isLessThanXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isLessThanMd = useMediaQuery(theme.breakpoints.down('md'));
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));
  const isLg = useMediaQuery(theme.breakpoints.only('lg'));
  const isXl = useMediaQuery(theme.breakpoints.only('xl'));

  return { isLessThanXs, isLessThanMd, isXs, isSm, isMd, isLg, isXl };
};
