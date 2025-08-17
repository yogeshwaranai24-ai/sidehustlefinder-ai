import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import HustleForm from '../components/HustleForm';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    navigate('/results', { state: { formData } });
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Find Your Perfect AI Side Hustle
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Discover profitable side gigs that match your skills, schedule, and goals
        </Typography>
      </Box>
      <HustleForm onSubmit={handleSubmit} />
    </Container>
  );
};

export default HomePage;