const hustles = require('../data/hustles');

function recommendHustles(criteria) {
  const { skills = '', interests = '', timeCommitment = '', budget = '' } = criteria;
  
  // Simple filtering logic
  return hustles.filter(hustle => {
    const minBudget = parseInt(budget);
    const hustleCost = parseInt(hustle.startupCost.replace(/\D/g, ''));
    return minBudget >= hustleCost;
  });
}

module.exports = { recommendHustles };