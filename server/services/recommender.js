const hustles = require('../data/hustles');

// Skill mapping - connects user input to relevant hustles
const skillMapping = {
  // Writing skills
  'writing': ['writing', 'content', 'copywriting', 'blogging', 'communication'],
  'content': ['writing', 'content', 'marketing', 'blogging'],
  
  // Design skills
  'design': ['design', 'creativity', 'graphics', 'ui', 'ux', 'visual'],
  
  // Programming skills
  'programming': ['programming', 'development', 'coding', 'technical', 'software'],
  'development': ['programming', 'development', 'coding', 'technical'],
  'coding': ['programming', 'development', 'coding'],
  
  // Marketing skills
  'marketing': ['marketing', 'social media', 'seo', 'advertising', 'branding'],
  'social media': ['marketing', 'social media', 'content'],
  
  // Video editing skills
  'video editing': ['video editing', 'production', 'multimedia', 'creativity'],
  'editing': ['video editing', 'production', 'content'],
  
  // Data analysis skills
  'data analysis': ['data analysis', 'analytics', 'statistics', 'excel'],
  'analytics': ['data analysis', 'analytics', 'statistics'],
  
  // Translation skills
  'translation': ['translation', 'languages', 'writing', 'cultural'],
  'languages': ['translation', 'languages'],
  
  // Voice over skills
  'voice over': ['voice over', 'audio', 'narration', 'acting'],
  'audio': ['voice over', 'audio', 'production']
};

function recommendHustles(criteria = {}) {
  try {
    const { skills = '', interests = '', timeCommitment = '', budget = '0' } = criteria;
    
    console.log('Filtering for skills:', skills);
    
    // If no skills provided, return all hustles
    if (!skills || skills.trim() === '') {
      return hustles;
    }

    // Convert skills to lowercase and split
    const userSkills = skills.toLowerCase().split(',').map(skill => skill.trim());
    
    // Find relevant hustles based on skills
    const relevantHustles = hustles.filter(hustle => {
      // Check if any user skill matches the hustle's skills
      return userSkills.some(userSkill => {
        if (!userSkill) return false;
        
        // Get related terms for this skill
        const relatedTerms = skillMapping[userSkill] || [userSkill];
        
        // Check if any related term matches hustle skills
        return relatedTerms.some(term => 
          hustle.skills && hustle.skills.some(hustleSkill => 
            hustleSkill.toLowerCase().includes(term)
          )
        );
      });
    });

    // If no matches found, return all hustles with a message
    if (relevantHustles.length === 0) {
      console.log('No specific matches found, returning all hustles');
      return hustles.map(hustle => ({
        ...hustle,
        matchReason: 'Showing all available hustles'
      }));
    }

    console.log('Found', relevantHustles.length, 'matching hustles');
    return relevantHustles;

  } catch (error) {
    console.error('Error in recommendHustles:', error);
    // Return all hustles as fallback
    return hustles.map(hustle => ({
      ...hustle,
      matchReason: 'System temporarily showing all options'
    }));
  }
}

module.exports = { recommendHustles };