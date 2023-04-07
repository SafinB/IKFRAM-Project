import React from 'react';

import {Box, Button, Typography} from '@mui/material';

const HeroBanner = () => (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
      <Typography color="#19A7CE" fontWeight="600" fontSize="26px">Fitness Baran</Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="15px" mt="10px">
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb="30px">
        Check out the most effective exercises
      </Typography>
        <Button href="#exercises" className="search-btn" sx={{ bgcolor: '#19A7CE', color: '#fff', textTransform: 'none',
            width: { lg: '173px', xs: '80px' }, height: '56px', fontSize: { lg: '20px', xs: '14px' } }} >
              Exercise
        </Button>
       </Box>
);

export default HeroBanner;



