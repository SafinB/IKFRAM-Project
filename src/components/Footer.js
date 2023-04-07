import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo3.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#146C94">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '80px', height: '70px' }} />
    </Stack>
    <Typography color="White" variant="h6" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt={2} textAlign="center" pb="40px">
        © Meneer Baran | 2023
    </Typography>
  </Box>
);

export default Footer;
