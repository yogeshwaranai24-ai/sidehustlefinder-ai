import React, { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Grid, Slider, Typography } from '@mui/material';

const HustleForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    skills: [],
    timeCommitment: 10,
    budget: 500,
    experienceLevel: 'beginner'
  });

  const skillsList = [
    'Writing', 'Design', 'Programming', 'Marketing', 
    'Video Editing', 'Data Analysis', 'Translation', 'Voice Over'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSliderChange = (name) => (e, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Your Skills</InputLabel>
            <Select
              multiple
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              renderValue={(selected) => selected.join(', ')}
            >
              {skillsList.map((skill) => (
                <MenuItem key={skill} value={skill}>
                  {skill}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Typography gutterBottom>Weekly Time Commitment (hours)</Typography>
          <Slider
            value={formData.timeCommitment}
            onChange={handleSliderChange('timeCommitment')}
            min={1}
            max={40}
            step={1}
            valueLabelDisplay="auto"
          />
        </Grid>

        <Grid item xs={12}>
          <Typography gutterBottom>Initial Budget ($)</Typography>
          <Slider
            value={formData.budget}
            onChange={handleSliderChange('budget')}
            min={0}
            max={5000}
            step={100}
            valueLabelDisplay="auto"
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Experience Level</InputLabel>
            <Select
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleChange}
            >
              <MenuItem value="beginner">Beginner</MenuItem>
              <MenuItem value="intermediate">Intermediate</MenuItem>
              <MenuItem value="expert">Expert</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth size="large">
            Find My Side Hustle
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default HustleForm;