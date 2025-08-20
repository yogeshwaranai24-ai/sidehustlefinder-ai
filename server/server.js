const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const hustleRoutes = require('./routes/hustleRoutes');
const marketRoutes = require('./routes/marketRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.use('/api', hustleRoutes);
app.use('/api', marketRoutes);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// Add this route for testing
app.get('/api/hustles', (req, res) => {
  try {
    const hustles = require('./data/hustles');
    res.json(hustles);
  } catch (error) {
    console.error('Error fetching hustles:', error);
    res.status(500).json({ error: 'Failed to fetch hustles' });
  }
});
app.post('/api/hustles', (req, res) => {
  try {
    console.log('Received hustle request:', {
      skills: req.body.skills,
      interests: req.body.interests,
      time: req.body.timeCommitment,
      budget: req.body.budget
    });

    const recommended = recommendHustles(req.body);
    
    // Always return success, even if we use fallback data
    res.json(recommended);
    
  } catch (error) {
    console.error('Server error in /api/hustles:', error);
    // Return hustles anyway with error info
    const hustles = require('./data/hustles');
    res.json(hustles.map(hustle => ({
      ...hustle,
      error: 'System issue - showing all options',
      originalError: error.message
    })));
  }
});