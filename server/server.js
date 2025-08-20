const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// All your hustle data - now with all 8 hustles!
const hustles = [
  {
    id: '1',
    title: 'AI Content Creation Service',
    description: 'Create blog posts, social media content, and marketing copy using AI tools',
    detailedDescription: 'Offer content creation services to businesses using AI tools like Jasper, Copy.ai, or ChatGPT. Many small businesses need consistent content but lack the time or writing skills.',
    earningsPotential: '$500-$5,000/month',
    timeRequired: '5-10 hours/week',
    skillLevel: 'Beginner',
    startupCost: '$100-$300',
    skills: ['writing', 'content', 'creativity', 'communication'],
    whyThisWorks: [
      'Content marketing is essential for all businesses',
      'AI tools dramatically reduce writing time',
      'You can scale by hiring virtual assistants',
      'Recurring revenue from content subscriptions'
    ],
    gettingStarted: [
      'Choose a niche (e.g., real estate, e-commerce)',
      'Set up basic website and samples',
      'Create packages (e.g., 4 blog posts/month)',
      'Market on LinkedIn, Upwork, and Facebook groups',
      'Use AI tools to speed up content creation'
    ],
    tools: [
      { name: 'Jasper', link: 'https://www.jasper.ai' },
      { name: 'Copy.ai', link: 'https://www.copy.ai' },
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'Grammarly', link: 'https://www.grammarly.com' }
    ],
    successStory: {
      quote: "I started offering AI content to small businesses and now have 12 recurring clients making me $3,800/month",
      person: "Sarah K.",
      earnings: "3800"
    }
  },
  {
    id: '2',
    title: 'Custom AI Chatbot Development',
    description: 'Build and deploy custom chatbots for businesses using no-code platforms',
    detailedDescription: 'Many businesses want to implement chatbots for customer service but don\'t know how. With no-code platforms like ManyChat, Chatfuel, or Landbot, you can create sophisticated chatbots without programming. Offer setup and monthly maintenance services.',
    earningsPotential: '$1,000-$10,000/month',
    timeRequired: '10-20 hours/week',
    skillLevel: 'Intermediate',
    startupCost: '$200-$500',
    skills: ['programming', 'development', 'problem solving', 'logic'],
    whyThisWorks: [
      'Chatbots reduce customer service costs by 30%',
      'Most businesses don\'t have in-house expertise',
      'Recurring revenue from maintenance contracts',
      'Can specialize by industry (e.g., e-commerce, real estate)'
    ],
    gettingStarted: [
      'Learn a no-code chatbot platform',
      'Create sample bots for different use cases',
      'Offer free audit of existing customer service',
      'Package your services (setup + monthly maintenance)',
      'Market to local businesses and online'
    ],
    tools: [
      { name: 'ManyChat', link: 'https://manychat.com' },
      { name: 'Chatfuel', link: 'https://chatfuel.com' },
      { name: 'Landbot', link: 'https://landbot.io' },
      { name: 'Dialogflow', link: 'https://dialogflow.cloud.google.com' }
    ],
    successStory: {
      quote: "After learning ManyChat, I landed 3 clients in my first month. Now I make $7,500/month maintaining chatbots.",
      person: "David T.",
      earnings: "7500"
    }
  },
  {
    id: '3',
    title: 'AI-Powered Resume Optimization',
    description: 'Help job seekers optimize their resumes with AI analysis and keyword targeting',
    detailedDescription: 'Job seekers struggle to get past automated resume screening systems. Offer services that use AI to analyze and optimize resumes for specific jobs, ensuring they contain the right keywords and formatting to get noticed.',
    earningsPotential: '$1,000-$8,000/month',
    timeRequired: '5-15 hours/week',
    skillLevel: 'Beginner',
    startupCost: '$50-$200',
    skills: ['writing', 'analysis', 'recruitment', 'career coaching'],
    whyThisWorks: [
      'High demand from job seekers in competitive markets',
      'AI tools make analysis quick and accurate',
      'Can scale with templates and automation',
      'Recurring business from career coaches'
    ],
    gettingStarted: [
      'Research ATS (Applicant Tracking Systems)',
      'Create sample optimized resumes',
      'Set up website with before/after examples',
      'Market on LinkedIn and job seeker forums',
      'Partner with career coaches'
    ],
    tools: [
      { name: 'ResumeWorded', link: 'https://resumeworded.com' },
      { name: 'Jobscan', link: 'https://www.jobscan.co' },
      { name: 'Teal', link: 'https://www.tealhq.com' },
      { name: 'ChatGPT', link: 'https://chat.openai.com' }
    ],
    successStory: {
      quote: "I started helping friends with their resumes using AI tools. Word spread and I now have a full-time income from this side hustle.",
      person: "Maria L.",
      earnings: "5200"
    }
  },
  {
    id: '4',
    title: 'AI Social Media Management',
    description: 'Manage social media accounts using AI tools for scheduling and analytics',
    detailedDescription: 'Businesses need consistent social media presence but lack time. Use AI tools to schedule posts, analyze performance, and generate content ideas across multiple platforms.',
    earningsPotential: '$800-$4,000/month',
    timeRequired: '5-15 hours/week',
    skillLevel: 'Beginner',
    startupCost: '$100-$300',
    skills: ['marketing', 'social media', 'content', 'analytics'],
    whyThisWorks: [
      'Every business needs social media presence',
      'AI tools automate repetitive tasks',
      'Can manage multiple clients simultaneously',
      'Recurring monthly retainers'
    ],
    gettingStarted: [
      'Learn popular social media AI tools',
      'Create content calendar templates',
      'Offer free social media audit',
      'Develop packaged services',
      'Market to local businesses'
    ],
    tools: [
      { name: 'Buffer', link: 'https://buffer.com' },
      { name: 'Hootsuite', link: 'https://hootsuite.com' },
      { name: 'Canva', link: 'https://canva.com' },
      { name: 'ChatGPT', link: 'https://chat.openai.com' }
    ],
    successStory: {
      quote: "I manage social media for 8 local businesses using AI tools, earning $3,200/month working 15 hours/week",
      person: "Alex R.",
      earnings: "3200"
    }
  },
  {
    id: '5',
    title: 'AI Video Editing Service',
    description: 'Offer video editing services enhanced with AI tools for effects and transitions',
    detailedDescription: 'Video content is in high demand. Use AI video editing tools to speed up your workflow and offer competitive pricing to clients for YouTube videos, social media content, and promotional materials.',
    earningsPotential: '$1,000-$6,000/month',
    timeRequired: '10-20 hours/week',
    skillLevel: 'Intermediate',
    startupCost: '$200-$600',
    skills: ['video editing', 'creativity', 'production', 'multimedia'],
    whyThisWorks: [
      'Explosive growth in video content demand',
      'AI tools reduce editing time by 70%',
      'High-value service you can premium price',
      'Work with clients worldwide'
    ],
    gettingStarted: [
      'Learn AI video editing software',
      'Create portfolio with sample videos',
      'Specialize in a niche (e.g., YouTube, TikTok)',
      'Offer package deals',
      'Market on video platforms and freelancer sites'
    ],
    tools: [
      { name: 'Runway ML', link: 'https://runwayml.com' },
      { name: 'Descript', link: 'https://descript.com' },
      { name: 'Adobe Premiere Pro', link: 'https://adobe.com/premiere' },
      { name: 'HeyGen', link: 'https://heygen.com' }
    ],
    successStory: {
      quote: "Using AI video tools, I edit 3x more content and earn $4,500/month from YouTube creators",
      person: "Mike T.",
      earnings: "4500"
    }
  },
  {
    id: '6',
    title: 'AI Data Analysis Service',
    description: 'Provide data analysis and visualization services using AI-powered tools',
    detailedDescription: 'Businesses collect data but often lack the skills to analyze it. Use AI tools to uncover insights, create visual reports, and provide actionable recommendations for e-commerce, marketing, and business operations.',
    earningsPotential: '$1,200-$7,000/month',
    timeRequired: '10-20 hours/week',
    skillLevel: 'Intermediate',
    startupCost: '$150-$400',
    skills: ['data analysis', 'analytics', 'statistics', 'visualization'],
    whyThisWorks: [
      'Data-driven decision making is crucial for businesses',
      'AI can find patterns humans miss',
      'High-value consulting service',
      'Recurring analysis contracts'
    ],
    gettingStarted: [
      'Learn AI data analysis platforms',
      'Develop sample reports and dashboards',
      'Specialize in an industry (e.g., e-commerce, healthcare)',
      'Offer free initial data assessment',
      'Network with business owners'
    ],
    tools: [
      { name: 'Tableau', link: 'https://tableau.com' },
      { name: 'Power BI', link: 'https://powerbi.microsoft.com' },
      { name: 'Google Analytics', link: 'https://analytics.google.com' },
      { name: 'ChatGPT Code Interpreter', link: 'https://openai.com/blog/chatgpt-plugins#code-interpreter' }
    ],
    successStory: {
      quote: "I help e-commerce stores analyze their data with AI tools, earning $5,800/month with just 6 clients",
      person: "Lisa W.",
      earnings: "5800"
    }
  },
  {
    id: '7',
    title: 'AI Translation Service',
    description: 'Offer translation services enhanced with AI tools for accuracy and speed',
    detailedDescription: 'Provide translation services using AI tools for initial translation, then human editing for quality assurance. Serve businesses expanding internationally, e-commerce stores, and content creators needing multilingual support.',
    earningsPotential: '$800-$5,000/month',
    timeRequired: '5-15 hours/week',
    skillLevel: 'Beginner',
    startupCost: '$100-$300',
    skills: ['translation', 'languages', 'writing', 'cultural knowledge'],
    whyThisWorks: [
      'Global business requires translation services',
      'AI handles bulk translation quickly',
      'Human touch ensures quality',
      'Work with multiple language pairs'
    ],
    gettingStarted: [
      'Choose language pairs you specialize in',
      'Set up AI translation workflow',
      'Create quality assurance process',
      'Market to international businesses',
      'Join translation platforms'
    ],
    tools: [
      { name: 'DeepL', link: 'https://deepl.com' },
      { name: 'Google Translate API', link: 'https://cloud.google.com/translate' },
      { name: 'Trados', link: 'https://trados.com' },
      { name: 'Grammarly', link: 'https://grammarly.com' }
    ],
    successStory: {
      quote: "I combine AI translation with human editing to serve 15 clients, earning $3,700/month working from home",
      person: "Carlos M.",
      earnings: "3700"
    }
  },
  {
    id: '8',
    title: 'AI Voice Over Service',
    description: 'Create voice overs using AI voice generation tools for various media',
    detailedDescription: 'Offer voice over services using AI voice generation tools. Perfect for explainer videos, audiobooks, commercial spots, and e-learning content. Provide natural-sounding voiceovers in multiple languages and accents.',
    earningsPotential: '$900-$5,500/month',
    timeRequired: '5-15 hours/week',
    skillLevel: 'Beginner',
    startupCost: '$100-$400',
    skills: ['voice over', 'audio production', 'acting', 'narration'],
    whyThisWorks: [
      'High demand for audio content',
      'AI voices sound increasingly natural',
      'Quick turnaround compared to human recording',
      'Offer multiple voice options'
    ],
    gettingStarted: [
      'Experiment with different AI voice platforms',
      'Create voice samples portfolio',
      'Specialize in a niche (e.g., e-learning, commercials)',
      'Set up efficient workflow',
      'Market to content creators and businesses'
    ],
    tools: [
      { name: 'ElevenLabs', link: 'https://elevenlabs.io' },
      { name: 'PlayHT', link: 'https://play.ht' },
      { name: 'Descript', link: 'https://descript.com' },
      { name: 'Audacity', link: 'https://audacityteam.org' }
    ],
    successStory: {
      quote: "I use AI voice tools to create voiceovers for 20+ clients, earning $4,200/month part-time",
      person: "Emma L.",
      earnings: "4200"
    }
  }
];

// Trends data
const trends = [
  { category: 'Content Creation', demand: 'High', growth: 'Rapid' },
  { category: 'Chatbots', demand: 'Medium', growth: 'High' },
  { category: 'Resume Optimization', demand: 'Medium', growth: 'Medium' },
  { category: 'Social Media', demand: 'High', growth: 'High' },
  { category: 'Video Editing', demand: 'Medium', growth: 'High' },
  { category: 'Data Analysis', demand: 'High', growth: 'Rapid' },
  { category: 'Translation', demand: 'Medium', growth: 'Medium' },
  { category: 'Voice Over', demand: 'Medium', growth: 'High' }
];

// Skill mapping for better recommendations
const skillMapping = {
  'writing': ['writing', 'content', 'copywriting', 'blogging', 'communication'],
  'design': ['design', 'creativity', 'graphics', 'ui', 'ux', 'visual'],
  'programming': ['programming', 'development', 'coding', 'technical', 'software'],
  'marketing': ['marketing', 'social media', 'seo', 'advertising', 'branding'],
  'video editing': ['video editing', 'production', 'multimedia', 'creativity'],
  'data analysis': ['data analysis', 'analytics', 'statistics', 'excel', 'visualization'],
  'translation': ['translation', 'languages', 'writing', 'cultural'],
  'voice over': ['voice over', 'audio', 'narration', 'acting', 'production']
};

// Simple recommendation function
function recommendHustles(criteria = {}) {
  try {
    const { skills = '', interests = '', timeCommitment = '', budget = '0' } = criteria;
    
    // If no skills provided, return all hustles
    if (!skills || skills.trim() === '') {
      return hustles;
    }

    const userSkills = skills.toLowerCase().split(',').map(skill => skill.trim());
    
    // Find relevant hustles based on skills
    const relevantHustles = hustles.filter(hustle => {
      return userSkills.some(userSkill => {
        if (!userSkill) return false;
        
        // Get related terms for this skill
        const relatedTerms = skillMapping[userSkill] || [userSkill];
        
        // Check if any related term matches hustle skills
        return relatedTerms.some(term => 
          hustle.skills.some(hustleSkill => 
            hustleSkill.toLowerCase().includes(term)
          )
        );
      });
    });

    return relevantHustles.length > 0 ? relevantHustles : hustles;

  } catch (error) {
    console.error('Error in recommendHustles:', error);
    return hustles; // Return all hustles as fallback
  }
}

// API Routes
app.post('/api/hustles', (req, res) => {
  try {
    const recommended = recommendHustles(req.body);
    res.json(recommended);
  } catch (error) {
    console.error('Error in /api/hustles:', error);
    res.json(hustles); // Fallback to all hustles
  }
});

app.get('/api/trends', (req, res) => {
  res.json(trends);
});

app.get('/api/stories', (req, res) => {
  res.json([]); // Empty array for now
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`✅ API endpoints available:`);
  console.log(`   - POST http://localhost:${PORT}/api/hustles`);
  console.log(`   - GET  http://localhost:${PORT}/api/trends`);
  console.log(`   - GET  http://localhost:${PORT}/api/stories`);
  console.log(`   - GET  http://localhost:${PORT}/api/health`);
  console.log(`✅ Now with ${hustles.length} side hustles available!`);
});