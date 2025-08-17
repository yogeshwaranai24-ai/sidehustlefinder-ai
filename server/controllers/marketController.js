const { scrapeMarketTrends } = require('../services/scraper');
const hustles = require('../data/hustles.json');
const platforms = require('../data/platforms.json');

const getMarketTrends = async (req, res) => {
  try {
    const trends = await scrapeMarketTrends();
    const trendingHustles = hustles
      .filter(h => trends.some(t => t.skill === h.category))
      .map(h => ({
        ...h,
        trendData: trends.find(t => t.skill === h.category)
      }))
      .sort((a, b) => b.trendData.demand - a.trendData.demand)
      .slice(0, 5);
    
    res.json({
      trendingHustles,
      platformStats: platforms.map(p => ({
        name: p.name,
        growth: p.growthRate,
        avgEarnings: p.avgEarnings
      }))
    });
  } catch (error) {
    console.error('Error in getMarketTrends:', error);
    res.status(500).json({ error: 'Failed to fetch market trends' });
  }
};

const getSuccessStories = (req, res) => {
  try {
    const stories = require('../data/stories.json');
    res.json(stories);
  } catch (error) {
    console.error('Error in getSuccessStories:', error);
    res.status(500).json({ error: 'Failed to fetch success stories' });
  }
};

module.exports = {
  getMarketTrends,
  getSuccessStories
};