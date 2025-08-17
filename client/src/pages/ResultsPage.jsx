import React, { useState, useEffect } from 'react';
import { Container, Grid, Box, Typography, CircularProgress, Alert } from '@mui/material';
import { useLocation } from 'react-router-dom';
import HustleCard from '../components/HustleCard';
import EarningsChart from '../components/EarningsChart';
import PlatformCompare from '../components/PlatformCompare';
import RoadmapAccordion from '../components/RoadmapAccordion';
import api from '../utils/api';

const ResultsPage = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await api.getRecommendations(location.state.formData);
        setResults(response.data);
      } catch (err) {
        setError(err.message || 'Failed to fetch recommendations');
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [location.state.formData]);

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center', my: 10 }}>
        <CircularProgress size={60} />
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Your Personalized Recommendations
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
              Top 3 Hustles For You
            </Typography>
            <Grid container spacing={3}>
              {results.topHustles.map((hustle) => (
                <Grid item xs={12} sm={6} key={hustle.id}>
                  <HustleCard hustle={hustle} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Potential Earnings
            </Typography>
            <EarningsChart data={results.earningsProjection} />
          </Grid>
          
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Platform Comparison
            </Typography>
            <PlatformCompare platforms={results.platforms} />
          </Grid>
          
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Getting Started Roadmap
            </Typography>
            <RoadmapAccordion steps={results.roadmap} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ResultsPage;