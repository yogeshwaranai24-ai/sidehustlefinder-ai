export const processHeatmapData = (rawData) => {
  return rawData.map(item => ({
    id: item.skill,
    data: item.trends.map(trend => ({
      x: trend.month,
      y: trend.demand_score
    }))
  }));
};

export const normalizeTrends = (trends) => {
  const maxValue = Math.max(...trends.map(t => t.value));
  return trends.map(t => ({
    ...t,
    normalizedValue: (t.value / maxValue) * 100
  }));
};

export const categorizeSkills = (skills) => {
  const categories = {
    technical: [],
    creative: [],
    business: [],
    other: []
  };

  skills.forEach(skill => {
    if (['Programming', 'Data Analysis', 'Web Development'].includes(skill.name)) {
      categories.technical.push(skill);
    } else if (['Writing', 'Design', 'Video Editing'].includes(skill.name)) {
      categories.creative.push(skill);
    } else if (['Marketing', 'Consulting', 'Virtual Assistant'].includes(skill.name)) {
      categories.business.push(skill);
    } else {
      categories.other.push(skill);
    }
  });

  return categories;
};