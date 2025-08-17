import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import api from '../utils/api';

const StoryPage = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await api.getSuccessStories();
        setStories(response.data);
      } catch (error) {
        console.error('Error fetching success stories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center', my: 10 }}>
        <CircularProgress size={60} />
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Success Stories
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph align="center">
        Real people who turned their side hustles into significant income
      </Typography>
      
      <Grid container spacing={4}>
        {stories.map((story) => (
          <Grid item xs={12} md={6} key={story.id}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar src={story.avatar} sx={{ width: 56, height: 56, mr: 2 }} />
                  <Box>
                    <Typography variant="h6">{story.name}</Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      {story.hustle} • ${story.earnings}/month
                    </Typography>
                  </Box>
                </Box>
                
                <Typography variant="body1" paragraph>
                  "{story.testimonial}"
                </Typography>
                
                <Typography variant="body2" color="text.secondary">
                  <strong>Started with:</strong> {story.startingPoint}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Time to first $1k:</strong> {story.timeToFirstK}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  <strong>Key strategy:</strong> {story.keyStrategy}
                </Typography>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {story.tags.map((tag, index) => (
                    <Typography key={index} variant="caption" color="primary" sx={{ px: 1, py: 0.5, bgcolor: 'primary.light', borderRadius: 1 }}>
                      {tag}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default StoryPage;