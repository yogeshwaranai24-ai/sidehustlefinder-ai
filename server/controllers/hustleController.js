const hustles = require('../data/hustles');
const { generateAIRecommendation } = require('../services/openai');

const getRecommendations = async (req, res) => {
  try {
    const { skills, timeCommitment, budget, experienceLevel } = req.body;
    
    // Basic filtering
    let filteredHustles = hustles.filter(hustle => 
      hustle.requiredSkills.some(skill => skills.includes(skill)) &&
      hustle.timeCommitment.min <= timeCommitment &&
      hustle.budget.min <= budget
    );
    
    // AI-enhanced sorting and recommendations
    const aiEnhanced = await generateAIRecommendation({
      skills,
      timeCommitment,
      budget,
      experienceLevel,
      hustles: filteredHustles
    });
    
    // Prepare response with additional data
    const response = {
      topHustles: aiEnhanced.slice(0, 3),
      earningsProjection: generateEarningsProjection(aiEnhanced[0], timeCommitment),
      platforms: getRecommendedPlatforms(aiEnhanced[0].category),
      roadmap: generateRoadmap(aiEnhanced[0], experienceLevel)
    };
    
    res.json(response);
  } catch (error) {
    console.error('Error in getRecommendations:', error);
    res.status(500).json({ error: 'Failed to generate recommendations' });
  }
};

function generateEarningsProjection(hustle, hoursPerWeek) {
  const months = ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'];
  const baseEarnings = hustle.earnings.min + (hustle.earnings.max - hustle.earnings.min) * 0.3;
  
  return months.map((month, index) => ({
    month,
    earnings: Math.round(baseEarnings * (1 + index * 0.3) * (hoursPerWeek / 10))
  }));
}

function getRecommendedPlatforms(category) {
  const platforms = require('../data/platforms.json');
  return platforms
    .filter(p => p.categories.includes(category))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);
}

function generateRoadmap(hustle, experienceLevel) {
  const baseSteps = [
    {
      title: "Learn the Basics",
      description: `Understand the fundamentals of ${hustle.title}.`,
      resources: hustle.resources.learning
    },
    {
      title: "Setup Your Workspace",
      description: "Prepare your tools and environment for maximum productivity.",
      resources: hustle.resources.tools
    }
  ];
  
  if (experienceLevel === 'beginner') {
    baseSteps.unshift({
      title: "Assess Your Skills",
      description: "Take skill assessments to identify gaps.",
      resources: []
    });
  }
  
  return baseSteps.concat([
    {
      title: "Create Your Portfolio",
      description: "Build samples of your work to showcase to clients.",
      resources: hustle.resources.portfolioExamples
    },
    {
      title: "Find Your First Clients",
      description: "Start with small projects to build your reputation.",
      resources: hustle.resources.jobPlatforms
    },
    {
      title: "Scale Your Business",
      description: "Increase your rates and take on more complex projects.",
      resources: hustle.resources.scaling
    }
  ]);
}

module.exports = {
  getRecommendations
};