export const regions = [
  'Western Cape', 'Eastern Cape', 'Northern Cape', 
  'Free State', 'KwaZulu-Natal', 'North West', 
  'Gauteng', 'Mpumalanga', 'Limpopo'
];

export const crops = [
  {
    id: 1,
    name: 'Maize',
    waterNeeds: 'Moderate-High',
    season: 'Summer',
    growthPeriod: '90-120 days',
    tips: [
      'Plant in well-drained soil with good organic matter',
      'Use mulch to retain soil moisture',
      'Water deeply but infrequently to encourage deep root growth',
      'Test soil nutrients before planting and fertilize accordingly'
    ],
    pests: ['Stalk borer', 'Aphids', 'Cutworms'],
    diseases: ['Maize streak virus', 'Grey leaf spot', 'Rust'],
    regions: ['Free State', 'North West', 'Mpumalanga', 'KwaZulu-Natal']
  },
  {
    id: 2,
    name: 'Wheat',
    waterNeeds: 'Moderate',
    season: 'Winter',
    growthPeriod: '120-150 days',
    tips: [
      'Plant in well-drained clay-loam soils',
      'Avoid waterlogging as it promotes disease',
      'Rotate with legumes to improve soil nitrogen',
      'Monitor for rust diseases during damp conditions'
    ],
    pests: ['Russian wheat aphid', 'Hessian fly', 'Armyworm'],
    diseases: ['Stem rust', 'Leaf rust', 'Fusarium head blight'],
    regions: ['Western Cape', 'Northern Cape', 'Free State']
  },
  {
    id: 3,
    name: 'Grapes',
    waterNeeds: 'Low-Moderate',
    season: 'Summer',
    growthPeriod: '150-180 days',
    tips: [
      'Drip irrigation is highly recommended for water efficiency',
      'Prune properly to improve air circulation and reduce disease',
      'Use cover crops between rows to reduce evaporation',
      'Monitor sugar levels closely as harvest approaches'
    ],
    pests: ['Phylloxera', 'Mealybug', 'Leafhopper'],
    diseases: ['Powdery mildew', 'Downy mildew', 'Botrytis bunch rot'],
    regions: ['Western Cape', 'Northern Cape']
  },
  {
    id: 4,
    name: 'Citrus',
    waterNeeds: 'Moderate',
    season: 'All year',
    growthPeriod: '240-365 days',
    tips: [
      'Water deeply but infrequently to encourage deep roots',
      'Mulch around trees to retain moisture and suppress weeds',
      'Protect trees from frost with irrigation or wind machines',
      'Test leaf nutrients regularly for optimal fertilization'
    ],
    pests: ['False codling moth', 'Citrus thrips', 'Mediterranean fruit fly'],
    diseases: ['Citrus greening', 'Citrus black spot', 'Anthracnose'],
    regions: ['Limpopo', 'Eastern Cape', 'KwaZulu-Natal', 'Mpumalanga']
  },
  {
    id: 5,
    name: 'Potatoes',
    waterNeeds: 'High',
    season: 'Cool seasons',
    growthPeriod: '90-120 days',
    tips: [
      'Maintain consistent soil moisture, especially during tuber formation',
      'Use straw mulch to conserve moisture and keep soil cool',
      'Practice crop rotation to reduce disease buildup',
      'Hill soil around plants to protect tubers from sunlight'
    ],
    pests: ['Potato tuber moth', 'Aphids', 'Cutworms'],
    diseases: ['Late blight', 'Early blight', 'Bacterial wilt'],
    regions: ['Free State', 'Mpumalanga', 'Limpopo', 'KwaZulu-Natal']
  },
  {
    id: 6,
    name: 'Apples',
    waterNeeds: 'Moderate',
    season: 'Temperate',
    growthPeriod: '150-180 days',
    tips: [
      'Irrigate during dry spells, especially during fruit development',
      'Use windbreaks to reduce evaporation and protect blossoms',
      'Thin fruit to improve size and quality',
      'Monitor for codling moth during fruit development'
    ],
    pests: ['Codling moth', 'Woolly apple aphid', 'Red spider mite'],
    diseases: ['Apple scab', 'Fire blight', 'Powdery mildew'],
    regions: ['Western Cape', 'Eastern Cape', 'Free State']
  }
];

// Weather data for each region
export const weatherData = {
  'Western Cape': {
    temp: 22,
    humidity: 45,
    rainfall: 5,
    forecast: 'sunny',
    windSpeed: 15,
    uvIndex: 8,
    forecast7Days: [
      { day: 'Monday', temp: 21, condition: 'sunny', rainfall: 0 },
      { day: 'Tuesday', temp: 23, condition: 'partly cloudy', rainfall: 0 },
      { day: 'Wednesday', temp: 19, condition: 'rainy', rainfall: 8 },
      { day: 'Thursday', temp: 18, condition: 'cloudy', rainfall: 3 },
      { day: 'Friday', temp: 20, condition: 'partly cloudy', rainfall: 1 },
      { day: 'Saturday', temp: 22, condition: 'sunny', rainfall: 0 },
      { day: 'Sunday', temp: 24, condition: 'sunny', rainfall: 0 }
    ],
    seasonalOutlook: {
      rainfall: 'Below average rainfall expected for the season',
      temperature: 'Average to above average temperatures expected',
      recommendations: 'Implement water conservation measures early'
    }
  },
  'Eastern Cape': {
    temp: 25,
    humidity: 60,
    rainfall: 12,
    forecast: 'cloudy',
    windSpeed: 20,
    uvIndex: 6,
    forecast7Days: [
      { day: 'Monday', temp: 24, condition: 'cloudy', rainfall: 10 },
      { day: 'Tuesday', temp: 23, condition: 'rainy', rainfall: 15 },
      { day: 'Wednesday', temp: 22, condition: 'rainy', rainfall: 18 },
      { day: 'Thursday', temp: 21, condition: 'cloudy', rainfall: 8 },
      { day: 'Friday', temp: 23, condition: 'partly cloudy', rainfall: 3 },
      { day: 'Saturday', temp: 25, condition: 'sunny', rainfall: 0 },
      { day: 'Sunday', temp: 26, condition: 'sunny', rainfall: 0 }
    ],
    seasonalOutlook: {
      rainfall: 'Average to above average rainfall expected',
      temperature: 'Mild temperatures with occasional heatwaves',
      recommendations: 'Prepare drainage systems for heavy rainfall'
    }
  },
  'Northern Cape': {
    temp: 32,
    humidity: 25,
    rainfall: 0,
    forecast: 'sunny',
    windSpeed: 25,
    uvIndex: 11,
    forecast7Days: [
      { day: 'Monday', temp: 31, condition: 'sunny', rainfall: 0 },
      { day: 'Tuesday', temp: 33, condition: 'sunny', rainfall: 0 },
      { day: 'Wednesday', temp: 35, condition: 'sunny', rainfall: 0 },
      { day: 'Thursday', temp: 30, condition: 'windy', rainfall: 0 },
      { day: 'Friday', temp: 29, condition: 'sunny', rainfall: 0 },
      { day: 'Saturday', temp: 31, condition: 'sunny', rainfall: 0 },
      { day: 'Sunday', temp: 32, condition: 'sunny', rainfall: 0 }
    ],
    seasonalOutlook: {
      rainfall: 'Well below average rainfall expected',
      temperature: 'Above average temperatures throughout season',
      recommendations: 'Implement drought management strategies'
    }
  },
  'Free State': {
    temp: 28,
    humidity: 40,
    rainfall: 2,
    forecast: 'partly cloudy',
    windSpeed: 18,
    uvIndex: 9,
    forecast7Days: [
      { day: 'Monday', temp: 27, condition: 'partly cloudy', rainfall: 1 },
      { day: 'Tuesday', temp: 29, condition: 'sunny', rainfall: 0 },
      { day: 'Wednesday', temp: 26, condition: 'thunderstorms', rainfall: 12 },
      { day: 'Thursday', temp: 24, condition: 'cloudy', rainfall: 5 },
      { day: 'Friday', temp: 25, condition: 'partly cloudy', rainfall: 2 },
      { day: 'Saturday', temp: 27, condition: 'sunny', rainfall: 0 },
      { day: 'Sunday', temp: 28, condition: 'sunny', rainfall: 0 }
    ],
    seasonalOutlook: {
      rainfall: 'Average rainfall with isolated thunderstorms',
      temperature: 'Seasonal temperatures expected',
      recommendations: 'Monitor for hailstorms during thunderstorm activity'
    }
  },
  'KwaZulu-Natal': {
    temp: 26,
    humidity: 70,
    rainfall: 15,
    forecast: 'rainy',
    windSpeed: 22,
    uvIndex: 7,
    forecast7Days: [
      { day: 'Monday', temp: 25, condition: 'rainy', rainfall: 18 },
      { day: 'Tuesday', temp: 24, condition: 'rainy', rainfall: 20 },
      { day: 'Wednesday', temp: 23, condition: 'cloudy', rainfall: 8 },
      { day: 'Thursday', temp: 24, condition: 'partly cloudy', rainfall: 3 },
      { day: 'Friday', temp: 26, condition: 'sunny', rainfall: 0 },
      { day: 'Saturday', temp: 27, condition: 'sunny', rainfall: 0 },
      { day: 'Sunday', temp: 26, condition: 'partly cloudy', rainfall: 2 }
    ],
    seasonalOutlook: {
      rainfall: 'Above average rainfall expected, especially in coastal areas',
      temperature: 'Warm and humid conditions throughout season',
      recommendations: 'Implement fungal disease prevention measures'
    }
  },
  'North West': {
    temp: 30,
    humidity: 35,
    rainfall: 3,
    forecast: 'sunny',
    windSpeed: 20,
    uvIndex: 10,
    forecast7Days: [
      { day: 'Monday', temp: 29, condition: 'sunny', rainfall: 0 },
      { day: 'Tuesday', temp: 31, condition: 'sunny', rainfall: 0 },
      { day: 'Wednesday', temp: 28, condition: 'thunderstorms', rainfall: 15 },
      { day: 'Thursday', temp: 26, condition: 'cloudy', rainfall: 5 },
      { day: 'Friday', temp: 28, condition: 'partly cloudy', rainfall: 1 },
      { day: 'Saturday', temp: 30, condition: 'sunny', rainfall: 0 },
      { day: 'Sunday', temp: 31, condition: 'sunny', rainfall: 0 }
    ],
    seasonalOutlook: {
      rainfall: 'Average rainfall with occasional heavy thunderstorms',
      temperature: 'Hot conditions with cool nights',
      recommendations: 'Implement water harvesting from thunderstorms'
    }
  },
  'Gauteng': {
    temp: 27,
    humidity: 50,
    rainfall: 8,
    forecast: 'thunderstorms',
    windSpeed: 25,
    uvIndex: 8,
    forecast7Days: [
      { day: 'Monday', temp: 26, condition: 'thunderstorms', rainfall: 15 },
      { day: 'Tuesday', temp: 24, condition: 'cloudy', rainfall: 5 },
      { day: 'Wednesday', temp: 25, condition: 'partly cloudy', rainfall: 2 },
      { day: 'Thursday', temp: 27, condition: 'sunny', rainfall: 0 },
      { day: 'Friday', temp: 28, condition: 'sunny', rainfall: 0 },
      { day: 'Saturday', temp: 26, condition: 'thunderstorms', rainfall: 12 },
      { day: 'Sunday', temp: 24, condition: 'cloudy', rainfall: 6 }
    ],
    seasonalOutlook: {
      rainfall: 'Average to above average rainfall with regular thunderstorms',
      temperature: 'Mild to warm temperatures with high variability',
      recommendations: 'Implement hail protection for sensitive crops'
    }
  },
  'Mpumalanga': {
    temp: 24,
    humidity: 65,
    rainfall: 10,
    forecast: 'rainy',
    windSpeed: 15,
    uvIndex: 7,
    forecast7Days: [
      { day: 'Monday', temp: 23, condition: 'rainy', rainfall: 12 },
      { day: 'Tuesday', temp: 22, condition: 'cloudy', rainfall: 8 },
      { day: 'Wednesday', temp: 24, condition: 'partly cloudy', rainfall: 3 },
      { day: 'Thursday', temp: 25, condition: 'sunny', rainfall: 0 },
      { day: 'Friday', temp: 26, condition: 'sunny', rainfall: 0 },
      { day: 'Saturday', temp: 24, condition: 'thunderstorms', rainfall: 10 },
      { day: 'Sunday', temp: 23, condition: 'cloudy', rainfall: 6 }
    ],
    seasonalOutlook: {
      rainfall: 'Above average rainfall expected, especially in eastern areas',
      temperature: 'Mild temperatures with high humidity',
      recommendations: 'Monitor for fungal diseases in high humidity conditions'
    }
  },
  'Limpopo': {
    temp: 31,
    humidity: 55,
    rainfall: 6,
    forecast: 'partly cloudy',
    windSpeed: 18,
    uvIndex: 10,
    forecast7Days: [
      { day: 'Monday', temp: 30, condition: 'partly cloudy', rainfall: 2 },
      { day: 'Tuesday', temp: 32, condition: 'sunny', rainfall: 0 },
      { day: 'Wednesday', temp: 31, condition: 'sunny', rainfall: 0 },
      { day: 'Thursday', temp: 29, condition: 'thunderstorms', rainfall: 15 },
      { day: 'Friday', temp: 28, condition: 'cloudy', rainfall: 8 },
      { day: 'Saturday', temp: 30, condition: 'partly cloudy', rainfall: 3 },
      { day: 'Sunday', temp: 31, condition: 'sunny', rainfall: 0 }
    ],
    seasonalOutlook: {
      rainfall: 'Average rainfall with isolated heavy thunderstorms',
      temperature: 'Hot conditions throughout the season',
      recommendations: 'Implement shade systems for heat-sensitive crops'
    }
  }
};

// Regional alerts
export const alerts = [
  {
    id: 1,
    region: 'Western Cape',
    type: 'water-restriction',
    severity: 'high',
    title: 'Water Restrictions in Effect',
    message: 'Level 3 water restrictions implemented. Reduce irrigation by 30%. Fines apply for non-compliance.',
    date: '2023-11-15',
    expires: '2024-03-31'
  },
  {
    id: 2,
    region: 'Eastern Cape',
    type: 'weather',
    severity: 'medium',
    title: 'Heavy Rainfall Expected',
    message: '50mm+ rainfall predicted over the next 48 hours. Ensure proper drainage and avoid overwatering.',
    date: '2023-11-12',
    expires: '2023-11-14'
  },
  {
    id: 3,
    region: 'Northern Cape',
    type: 'drought',
    severity: 'high',
    title: 'Drought Warning',
    message: 'Extended drought conditions expected. Implement water conservation measures immediately.',
    date: '2023-10-01',
    expires: '2024-02-28'
  },
  {
    id: 4,
    region: 'KwaZulu-Natal',
    type: 'pest',
    severity: 'medium',
    title: 'Increased Fall Armyworm Activity',
    message: 'Higher than usual fall armyworm populations detected. Monitor crops and implement control measures.',
    date: '2023-11-10',
    expires: '2023-12-10'
  },
  {
    id: 5,
    region: 'Free State',
    type: 'weather',
    severity: 'high',
    title: 'Hail Warning',
    message: 'Severe thunderstorms with potential hail predicted for tomorrow. Protect sensitive crops if possible.',
    date: '2023-11-14',
    expires: '2023-11-15'
  },
  {
    id: 6,
    region: 'Gauteng',
    type: 'water-quality',
    severity: 'medium',
    title: 'Water Quality Advisory',
    message: 'Increased salinity detected in Vaal River system. Test irrigation water before use.',
    date: '2023-11-05',
    expires: '2023-12-05'
  },
  {
    id: 7,
    region: 'Mpumalanga',
    type: 'disease',
    severity: 'medium',
    title: 'Citrus Black Spot Alert',
    message: 'Conditions favorable for citrus black spot development. Implement preventive fungicide applications.',
    date: '2023-11-08',
    expires: '2023-12-08'
  },
  {
    id: 8,
    region: 'Limpopo',
    type: 'heat',
    severity: 'high',
    title: 'Extreme Heat Warning',
    message: 'Temperatures expected to exceed 38°C for the next 5 days. Increase irrigation frequency for sensitive crops.',
    date: '2023-11-13',
    expires: '2023-11-18'
  },
  {
    id: 9,
    region: 'North West',
    type: 'fire',
    severity: 'high',
    title: 'High Fire Danger',
    message: 'Extreme fire danger conditions. Clear vegetation around structures and have fire suppression equipment ready.',
    date: '2023-11-10',
    expires: '2023-11-17'
  }
];

// Water management recommendations
export const waterRecommendations = {
  'Western Cape': [
    {
      crop: 'Grapes',
      recommendation: 'Reduce irrigation by 20% during veraison period. Use mulch to retain soil moisture.',
      savings: '15-20% water savings'
    },
    {
      crop: 'Wheat',
      recommendation: 'Delay irrigation until necessary. Current soil moisture sufficient for next 7 days.',
      savings: '25% water savings'
    },
    {
      crop: 'Apples',
      recommendation: 'Implement deficit irrigation strategy. Reduce water by 15% during fruit sizing phase.',
      savings: '15% water savings'
    }
  ],
  'Eastern Cape': [
    {
      crop: 'Citrus',
      recommendation: 'Reduce irrigation frequency but maintain duration. Heavy rainfall expected later this week.',
      savings: '30% water savings'
    },
    {
      crop: 'Maize',
      recommendation: 'Suspend irrigation for 5-7 days. Sufficient soil moisture available.',
      savings: '100% water savings for period'
    }
  ],
  'Northern Cape': [
    {
      crop: 'Grapes',
      recommendation: 'Implement partial rootzone drying technique. Irrigate only one side of vines at a time.',
      savings: '30-40% water savings'
    },
    {
      crop: 'Sunflowers',
      recommendation: 'Use surge irrigation method to reduce deep percolation losses.',
      savings: '15% water savings'
    }
  ],
  'Free State': [
    {
      crop: 'Maize',
      recommendation: 'Switch to night irrigation to reduce evaporation losses.',
      savings: '10-15% water savings'
    },
    {
      crop: 'Potatoes',
      recommendation: 'Install moisture sensors to optimize irrigation timing.',
      savings: '20% water savings'
    },
    {
      crop: 'Wheat',
      recommendation: 'Use sprinkler irrigation with lower trajectory to reduce evaporation.',
      savings: '15% water savings'
    }
  ],
  'KwaZulu-Natal': [
    {
      crop: 'Sugarcane',
      recommendation: 'Implement trash blanketing to reduce evaporation from soil surface.',
      savings: '20% water savings'
    },
    {
      crop: 'Citrus',
      recommendation: 'Install drip irrigation with mulch for maximum efficiency.',
      savings: '35% water savings'
    }
  ],
  'North West': [
    {
      crop: 'Sunflowers',
      recommendation: 'Use conservation tillage to preserve soil moisture.',
      savings: '15-20% water savings'
    },
    {
      crop: 'Maize',
      recommendation: 'Implement regulated deficit irrigation during vegetative stage.',
      savings: '25% water savings'
    }
  ],
  'Gauteng': [
    {
      crop: 'Vegetables',
      recommendation: 'Collect rainwater from structures for irrigation use.',
      savings: 'Variable based on rainfall'
    },
    {
      crop: 'Maize',
      recommendation: 'Use soil moisture monitoring to optimize irrigation scheduling.',
      savings: '20% water savings'
    }
  ],
  'Mpumalanga': [
    {
      crop: 'Sugarcane',
      recommendation: 'Implement variable rate irrigation based on soil type variations.',
      savings: '15% water savings'
    },
    {
      crop: 'Citrus',
      recommendation: 'Use micro-sprinklers with precise placement for efficient watering.',
      savings: '25% water savings'
    }
  ],
  'Limpopo': [
    {
      crop: 'Citrus',
      recommendation: 'Apply anti-transpirant film to reduce water loss through leaves.',
      savings: '10-15% water savings'
    },
    {
      crop: 'Tomatoes',
      recommendation: 'Use shade nets to reduce evaporation and transpiration rates.',
      savings: '20% water savings'
    }
  ]
};

// Analytics data
export const analyticsData = {
  'Western Cape': {
    waterUsage: {
      current: 12500,
      average: 14500,
      trend: 'decreasing'
    },
    predictedYield: {
      current: 8.2,
      average: 7.8,
      trend: 'increasing'
    },
    costSavings: {
      water: 18500,
      energy: 4200,
      fertilizers: 3200
    },
    sustainabilityScore: 87,
    comparison: {
      region: 75,
      national: 68
    }
  },
  'Eastern Cape': {
    waterUsage: {
      current: 9800,
      average: 11200,
      trend: 'decreasing'
    },
    predictedYield: {
      current: 6.8,
      average: 6.5,
      trend: 'increasing'
    },
    costSavings: {
      water: 12400,
      energy: 2800,
      fertilizers: 2100
    },
    sustainabilityScore: 82,
    comparison: {
      region: 68,
      national: 68
    }
  },
  'Northern Cape': {
    waterUsage: {
      current: 6800,
      average: 8200,
      trend: 'decreasing'
    },
    predictedYield: {
      current: 5.2,
      average: 4.9,
      trend: 'increasing'
    },
    costSavings: {
      water: 15200,
      energy: 3800,
      fertilizers: 2800
    },
    sustainabilityScore: 91,
    comparison: {
      region: 72,
      national: 68
    }
  },
  'Free State': {
    waterUsage: {
      current: 21500,
      average: 24500,
      trend: 'decreasing'
    },
    predictedYield: {
      current: 9.5,
      average: 9.1,
      trend: 'increasing'
    },
    costSavings: {
      water: 21500,
      energy: 5200,
      fertilizers: 4100
    },
    sustainabilityScore: 84,
    comparison: {
      region: 71,
      national: 68
    }
  },
  'KwaZulu-Natal': {
    waterUsage: {
      current: 18700,
      average: 21500,
      trend: 'decreasing'
    },
    predictedYield: {
      current: 10.2,
      average: 9.8,
      trend: 'increasing'
    },
    costSavings: {
      water: 19800,
      energy: 4500,
      fertilizers: 3800
    },
    sustainabilityScore: 79,
    comparison: {
      region: 69,
      national: 68
    }
  },
  'North West': {
    waterUsage: {
      current: 13200,
      average: 15600,
      trend: 'decreasing'
    },
    predictedYield: {
      current: 7.4,
      average: 7.1,
      trend: 'increasing'
    },
    costSavings: {
      water: 17200,
      energy: 4100,
      fertilizers: 3200
    },
    sustainabilityScore: 86,
    comparison: {
      region: 73,
      national: 68
    }
  },
  'Gauteng': {
    waterUsage: {
      current: 8400,
      average: 9800,
      trend: 'decreasing'
    },
    predictedYield: {
      current: 5.8,
      average: 5.5,
      trend: 'increasing'
    },
    costSavings: {
      water: 11200,
      energy: 2800,
      fertilizers: 2100
    },
    sustainabilityScore: 83,
    comparison: {
      region: 70,
      national: 68
    }
  },
  'Mpumalanga': {
    waterUsage: {
      current: 15600,
      average: 18200,
      trend: 'decreasing'
    },
    predictedYield: {
      current: 8.9,
      average: 8.5,
      trend: 'increasing'
    },
    costSavings: {
      water: 19200,
      energy: 4400,
      fertilizers: 3500
    },
    sustainabilityScore: 81,
    comparison: {
      region: 70,
      national: 68
    }
  },
  'Limpopo': {
    waterUsage: {
      current: 12300,
      average: 14800,
      trend: 'decreasing'
    },
    predictedYield: {
      current: 7.8,
      average: 7.4,
      trend: 'increasing'
    },
    costSavings: {
      water: 16800,
      energy: 3900,
      fertilizers: 3100
    },
    sustainabilityScore: 85,
    comparison: {
      region: 72,
      national: 68
    }
  }
};

// Historical weather data for predictive models
export const historicalWeather = {
  'Western Cape': [
    { year: 2018, rainfall: 480, avgTemp: 18.2 },
    { year: 2019, rainfall: 420, avgTemp: 18.5 },
    { year: 2020, rainfall: 380, avgTemp: 19.1 },
    { year: 2021, rainfall: 350, avgTemp: 19.3 },
    { year: 2022, rainfall: 310, avgTemp: 19.6 },
    { year: 2023, rainfall: 290, avgTemp: 19.8 }
  ],
  'Eastern Cape': [
    { year: 2018, rainfall: 620, avgTemp: 19.5 },
    { year: 2019, rainfall: 580, avgTemp: 19.7 },
    { year: 2020, rainfall: 650, avgTemp: 19.3 },
    { year: 2021, rainfall: 720, avgTemp: 19.1 },
    { year: 2022, rainfall: 680, avgTemp: 19.4 },
    { year: 2023, rainfall: 710, avgTemp: 19.2 }
  ],
  // Similar data for other regions...
};

// Irrigation methods data
export const irrigationMethods = [
  {
    id: 1,
    name: 'Drip Irrigation',
    efficiency: '90-95%',
    waterSavings: '30-50%',
    cost: 'Medium-High',
    bestFor: 'Orchards, vineyards, row crops',
    description: 'Water delivered directly to root zone through emitters. Minimizes evaporation and runoff.'
  },
  {
    id: 2,
    name: 'Sprinkler Irrigation',
    efficiency: '70-85%',
    waterSavings: '15-30%',
    cost: 'Medium',
    bestFor: 'Field crops, pastures',
    description: 'Water distributed through pressurized pipes and sprinklers. Simulates rainfall.'
  },
  {
    id: 3,
    name: 'Flood Irrigation',
    efficiency: '50-70%',
    waterSavings: '0%',
    cost: 'Low',
    bestFor: 'Rice, pasture, some field crops',
    description: 'Water flows across field surface. Least efficient method with high evaporation losses.'
  },
  {
    id: 4,
    name: 'Center Pivot',
    efficiency: '80-90%',
    waterSavings: '20-40%',
    cost: 'High',
    bestFor: 'Large field crops',
    description: 'Rotating sprinkler system that moves in circular pattern. Good for large areas.'
  },
  {
    id: 5,
    name: 'Subsurface Drip',
    efficiency: '90-95%',
    waterSavings: '40-60%',
    cost: 'High',
    bestFor: 'High-value crops, arid regions',
    description: 'Drip lines buried below soil surface. Eliminates evaporation losses completely.'
  }
];

// Soil types data
export const soilTypes = [
  {
    id: 1,
    name: 'Sandy Soil',
    waterRetention: 'Low',
    drainage: 'High',
    bestCrops: ['Potatoes', 'Carrots', 'Peanuts'],
    management: 'Requires frequent irrigation, add organic matter to improve water retention'
  },
  {
    id: 2,
    name: 'Clay Soil',
    waterRetention: 'High',
    drainage: 'Low',
    bestCrops: ['Rice', 'Wheat', 'Cabbage'],
    management: 'Risk of waterlogging, requires careful irrigation management'
  },
  {
    id: 3,
    name: 'Loam Soil',
    waterRetention: 'Moderate',
    drainage: 'Moderate',
    bestCrops: ['Most crops including maize, beans, tomatoes'],
    management: 'Ideal soil type, requires standard irrigation practices'
  },
  {
    id: 4,
    name: 'Silt Soil',
    waterRetention: 'Moderate-High',
    drainage: 'Moderate',
    bestCrops: ['Most vegetables, grains'],
    management: 'Good water retention, may require drainage in wet areas'
  }
];

export default {
  regions,
  crops,
  weatherData,
  alerts,
  waterRecommendations,
  analyticsData,
  historicalWeather,
  irrigationMethods,
  soilTypes
};