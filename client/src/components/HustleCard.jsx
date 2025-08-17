import React from 'react';
import { Card, CardContent, Typography, Chip, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: theme.shadows[6]
  }
}));

const HustleCard = ({ hustle }) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {hustle.title}
        </Typography>
        
        <Box sx={{ mb: 2 }}>
          <Chip label={`Earnings: $${hustle.earnings.min}-$${hustle.earnings.max}/month`} color="success" sx={{ mr: 1 }} />
          <Chip label={`Time: ${hustle.timeCommitment} hrs/week`} color="info" />
        </Box>

        <Typography variant="body2" color="text.secondary" paragraph>
          {hustle.description}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button size="small" variant="outlined">Learn More</Button>
          <Button size="small" variant="contained" color="primary">
            Get Started
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default HustleCard;