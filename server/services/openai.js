const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const generateAIRecommendation = async ({ skills, timeCommitment, budget, experienceLevel, hustles }) => {
  try {
    const prompt = `
      You are a side hustle recommendation engine. Analyze the following user data and hustles:
      
      User:
      - Skills: ${skills.join(', ')}
      - Available time: ${timeCommitment} hours/week
      - Budget: $${budget}
      - Experience level: ${experienceLevel}
      
      Hustles:
      ${JSON.stringify(hustles, null, 2)}
      
      Recommend and rank the top 5 hustles for this user. Consider:
      1. Skill match
      2. Time commitment alignment
      3. Budget requirements
      4. Growth potential
      5. Earning potential
      
      Return a JSON array with the sorted hustles and add a new field "matchScore" (1-100) for each.
    `;
    
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that provides detailed side hustle recommendations."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 2000,
      response_format: { type: "json_object" }
    });
    
    const result = JSON.parse(response.choices[0].message.content);
    return result.recommendations || hustles;
  } catch (error) {
    console.error('Error in generateAIRecommendation:', error);
    return hustles; // Fallback to original list if AI fails
  }
};

module.exports = {
  generateAIRecommendation
};