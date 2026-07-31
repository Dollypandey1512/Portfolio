export interface Project {
  title: string;
  tagline: string;
  problem: string;
  businessObjective: string;
  dataset: string;
  toolsUsed: string[];
  approach: string;
  dashboard: string;
  keyInsights: string[];
  businessImpact: string;
  learning: string;
  github: string;
  demo?: string | null;
  caseStudyLink?: string | null;
  featured: boolean;
  isFlagship?: boolean;
}

export const profile = {
  name: "Dolly Pandey",
  subheading: "Data Analyst | Business Intelligence | AI Automation",
  roles: [
    "Data Analyst",
    "Business Intelligence",
    "SQL • Power BI",
    "Data Visualization",
    "AI Workflow Automation",
  ],
  headline:
    "Transforming data into actionable insights using SQL, Python, Power BI, and AI-driven automation.",
  summary:
    "I am a Data Analyst with an Executive PG Programme in Data Science & AI from IIIT Bangalore (GPA 3.8/4.0) and hands-on experience turning complex datasets into business decisions. My expertise spans writing optimized SQL queries, designing interactive Power BI & Tableau dashboards, tracking funnel metrics, and engineering automated AI workflows. During my analytics internship at Devot AI, I tracked core KPIs across 12+ content clusters, built automated ETL data pipelines, and monitored lead conversion funnels. I bring rigorous analytical problem-solving and clear data storytelling to convert business requirements into measurable, high-impact results.",
  location: "Delhi, India",
  email: "dollypandey221@gmail.com",
  phone: "+91 8957879301",
  links: {
    github: "https://github.com/Dollypandey1512",
    linkedin: "https://www.linkedin.com/in/dolly-pandey-258147286/",
    kaggle: "https://www.kaggle.com/dolly1512",
    resume: "/resume.pdf",
  },
};

export const stats = [
  { value: "12+", label: "Topic clusters tracked for business KPI performance" },
  { value: "3.8/4.0", label: "GPA, Executive PG in Data Science & AI (IIIT Bangalore)" },
  { value: "100%", label: "Focus on SQL, Power BI, BI & AI Automation" },
];

export const skills = [
  {
    category: "Data Analytics",
    items: ["SQL", "Python", "Power BI", "Tableau", "Excel", "Pandas", "NumPy"],
  },
  {
    category: "Analytics",
    items: [
      "KPI Tracking",
      "Funnel Analytics",
      "Exploratory Data Analysis",
      "Statistical Analysis",
      "Data Visualization",
      "Google Analytics",
      "Google Search Console",
      "A/B Testing",
      "Cohort Analysis",
    ],
  },
  {
    category: "AI & Automation",
    items: [
      "ChatGPT",
      "Claude",
      "Cursor",
      "OpenAI Codex",
      "Prompt Engineering",
      "n8n",
      "Smartlead AI",
      "AI Workflow Automation",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "MS SQL Server"],
  },
  {
    category: "Cloud",
    items: ["AWS Fundamentals", "Azure Fundamentals"],
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub"],
  },
];

export const toolsList = [
  { name: "Python", category: "Language" },
  { name: "SQL", category: "Database Querying" },
  { name: "Power BI", category: "Business Intelligence" },
  { name: "Tableau", category: "Data Visualization" },
  { name: "Excel", category: "Spreadsheets & Analysis" },
  { name: "Git", category: "Version Control" },
  { name: "GitHub", category: "Code Collaboration" },
  { name: "ChatGPT", category: "Generative AI" },
  { name: "Claude", category: "LLM Reasoning" },
  { name: "Cursor", category: "AI Analytics Tools" },
  { name: "OpenAI", category: "AI Models" },
  { name: "Google Analytics", category: "Web Analytics" },
  { name: "Google Search Console", category: "Search Performance" },
  { name: "MySQL", category: "Relational DB" },
  { name: "AWS", category: "Cloud Infrastructure" },
  { name: "Azure", category: "Cloud Services" },
  { name: "n8n", category: "Workflow Automation" },
];

export const experience = [
  {
    role: "Data Analyst Intern",
    org: "Devot AI",
    date: "Nov 2025 – May 2026",
    points: [
      "Tracked and analyzed core digital KPIs—including CTR, conversion funnels, organic traffic, and keyword positioning—across client web properties using Google Analytics and Search Console.",
      "Monitored lead-generation funnel metrics across 12+ content topic clusters, leveraging Smartlead AI and automated outreach workflows to optimize conversion rates across the lead lifecycle.",
      "Executed complex SQL queries and designed automated ETL data integration pipelines in n8n, streamlining multi-source data extraction, transformation, and daily executive reporting.",
      "Performed anomaly detection on search and funnel performance datasets to identify keyword cannibalization and traffic drop-offs, delivering actionable optimization recommendations to stakeholders.",
      "Collaborated with cross-functional technical teams to maintain web analytics tracking and support data-driven digital product updates.",
    ],
  },
  {
    role: "GenAI Data Analytics Simulation Intern",
    org: "Tata iQ (Forage)",
    date: "June 2025",
    points: [
      "Conducted exploratory data analysis (EDA) using GenAI tools to identify data quality anomalies, outliers, and trend indicators across complex enterprise datasets.",
      "Engineered predictive features and created visual analytical summaries to present executive-level recommendations for strategic business decision-making.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Supply Chain Analytics — Open-Pit Mining Equipment",
    tagline: "⭐ IIIT Bangalore Executive PG Capstone: Equipment utilization, payload optimization, and operational bottleneck reduction.",
    problem: "Open-pit mining operations heavily depend on efficient equipment utilization. Poor equipment performance directly inflates operational costs, reduces production output, compromises payload efficiency, and increases unscheduled maintenance.",
    businessObjective: "Analyze equipment-level operational performance, study production trends, evaluate payload utilization vs. trip frequency, and deliver actionable data-driven recommendations to maximize mining productivity.",
    dataset: "Operational equipment logs including daily production tonnage, trip counts, payload utilization %, equipment maintenance status, and operational cycle times.",
    toolsUsed: ["Power BI", "MySQL", "SQL", "Excel", "PowerPoint"],
    approach: "Modeled a relational star-schema in MySQL; executed advanced SQL CTEs & window functions to analyze trip efficiency and payload variance; built interactive Power BI executive dashboards for operational monitoring.",
    dashboard: "Multi-tab Power BI executive dashboard featuring equipment performance metrics, production trends, trips vs. production correlation, payload utilization distributions, and low-performing asset alerts.",
    keyInsights: [
      "Pareto Distribution in Equipment Output: A small fraction of active equipment accounted for the majority of total tonnage output.",
      "Trip Frequency vs. Productivity Decoupling: High trip frequency did not always correspond to higher production due to partial payload loads.",
      "Payload Utilization as Efficiency Driver: Payload utilization emerged as the single strongest indicator of overall operational productivity.",
      "Asset Tail-End Drag: Several active assets delivered disproportionately low output while incurring full operational and maintenance costs.",
    ],
    businessImpact: "Formulated operational strategies projected to optimize payload capacity, streamline dispatch planning, prioritize preventive maintenance, and reduce equipment idle costs.",
    learning: "Demonstrated master-level proficiency in dimensional modeling, SQL analysis, BI dashboard design, KPI tracking, and executive stakeholder communication.",
    github: "https://github.com/Dollypandey1512",
    demo: null,
    caseStudyLink: "/projects/supply-chain-analytics",
    featured: true,
    isFlagship: true,
  },
  {
    title: "Namma Yatri Case Study — Ride-Hailing Analytics",
    tagline: "Uncovering spatial-temporal demand patterns and trip cancellation bottlenecks in urban mobility.",
    problem: "Ride-hailing platforms face driver supply shortages and high trip cancellation rates during peak hours without granular visibility into micro-zone demand.",
    businessObjective: "Identify root causes of booking drop-offs, optimize driver allocation across high-demand zones, and maximize completed ride revenue.",
    dataset: "Transactional ride logs featuring trip search requests, driver quotes, cancellations, payment modes, location coordinates, and timestamps.",
    toolsUsed: ["Tableau", "SQL", "Excel", "PowerPoint"],
    approach: "Cleaned and joined multi-table transactional data; engineered funnel conversion metrics (Search to Booking ratio); built interactive Tableau dashboards with dynamic time, zone, and payment filters.",
    dashboard: "Interactive multi-tab Tableau executive suite displaying hourly demand heatmaps, cancellation funnel breakdowns, and zone-level conversion matrices.",
    keyInsights: [
      "Identified a 34% drop-off between estimate generation and booking confirmation during morning rush hours.",
      "Pinpointed 3 core urban micro-zones that accounted for 52% of all unfulfilled rider requests.",
    ],
    businessImpact: "Formulated driver incentive reallocation strategies projected to reduce peak-hour cancellations by ~18% and improve fleet utilization.",
    learning: "Gained deep understanding of spatial-temporal funnel analysis and dynamic pricing levers in two-sided marketplace analytics.",
    github: "https://github.com/Dollypandey1512",
    demo: null,
    featured: true,
  },
  {
    title: "Bike Sharing Demand Forecasting",
    tagline: "Predictive linear regression modeling for urban fleet management and inventory optimization.",
    problem: "Urban bike-sharing operators struggle with fleet misallocation, leading to empty docking stations during surge hours and excess inventory during off-peak periods.",
    businessObjective: "Build a reliable predictive model to forecast daily and hourly bike rental demand based on weather conditions, seasonal trends, and calendar events.",
    dataset: "Multi-year rental records combined with hourly environmental metrics (temperature, humidity, windspeed) and calendar indicators.",
    toolsUsed: ["Python", "Scikit-learn", "statsmodels", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    approach: "Executed thorough EDA and feature engineering (VIF calculation for multicollinearity, log transformations, dummy variables); evaluated multiple linear regression iterations using R² and RMSE metrics.",
    dashboard: "Python diagnostic analytics dashboard featuring residual Q-Q plots, feature coefficient rankings, and actual vs. predicted demand trend curves.",
    keyInsights: [
      "Temperature and feeling temperature were the strongest positive predictors of demand (R² = 0.82).",
      "High humidity (>75%) combined with adverse weather caused an immediate 45% drop in casual rider bookings.",
    ],
    businessImpact: "Provided quantitative fleet rebalancing rules allowing operational teams to pre-position bikes 2 hours prior to forecasted demand spikes.",
    learning: "Deepened expertise in regression diagnostics (homoscedasticity, residual normality) and translating mathematical coefficients into business actions.",
    github: "https://github.com/Dollypandey1512/Linear-Regression-Assignment",
    demo: null,
    featured: false,
  },
  {
    title: "Credit Card Customer Spending & Risk Analysis",
    tagline: "Exploratory data analysis and customer cohort segmentation for risk-adjusted portfolio growth.",
    problem: "Financial institutions lack granular visibility into customer spending habits across demographics, resulting in mispriced credit limits and unmitigated default risk.",
    businessObjective: "Segment cardholders by spending behavior, identify high-value customer cohorts, and isolate early indicators of credit delinquency.",
    dataset: "Credit card holder demographic records, monthly transaction categories, credit utilization ratios, repayment histories, and default flags.",
    toolsUsed: ["Python", "Pandas", "Matplotlib", "Seaborn", "Excel"],
    approach: "Performed extensive data wrangling and outlier treatment; conducted demographic cohort analysis; built multi-variable cross-tabulations to evaluate spending vs. default correlation.",
    dashboard: "Exploratory analytics suite with spending category heatmaps, credit limit utilization boxplots, and delinquency risk matrices.",
    keyInsights: [
      "Top 15% high-net-worth cardholders accounted for 58% of total fee revenue.",
      "Younger cardholders (aged 22-28) exhibited the highest rate of late payment risk in month 3 of card issuance.",
    ],
    businessImpact: "Recommended targeted credit limit adjustments and risk-tiered retention campaigns to optimize portfolio yield while reducing default exposure.",
    learning: "Strengthened advanced Pandas data manipulation, financial anomaly detection, and risk-focused executive data storytelling.",
    github: "https://github.com/Dollypandey1512/Credit-EDA-Assignment",
    demo: null,
    featured: false,
  },
  {
    title: "Employee Retention & Attrition Risk Modeling",
    tagline: "Translating machine learning attrition probabilities into proactive HR retention risk scores.",
    problem: "High employee turnover drives up recruitment expenses, depletes institutional knowledge, and destabilizes team productivity.",
    businessObjective: "Identify key workplace attrition drivers and construct an interpretable risk-scoring model to enable proactive HR intervention.",
    dataset: "Comprehensive HR survey dataset featuring employee tenure, evaluation ratings, salary tier, project workload, satisfaction scores, and exit records.",
    toolsUsed: ["Python", "Scikit-learn", "Pandas", "NumPy", "Seaborn"],
    approach: "Cleaned survey logs; addressed class imbalance using SMOTE; trained and evaluated Logistic Regression, Decision Tree, and Random Forest models; extracted feature importance rankings.",
    dashboard: "HR Retention Risk Scorecard displaying high-risk employee alerts, workload vs. satisfaction heatmaps, and salary benchmark comparisons.",
    keyInsights: [
      "Low satisfaction combined with heavy project workload (>5 concurrent projects) without promotion in 3+ years was the #1 predictor of exit (88% attrition probability).",
      "Evaluation scores had minimal impact on retention compared to salary tier and project load balance.",
    ],
    businessImpact: "Empowered HR leadership to establish proactive retention interventions for high-performing employees, mitigating turnover in critical roles.",
    learning: "Learned how to transform raw ML output probabilities into actionable business risk scores digestible for non-technical HR managers.",
    github:
      "https://github.com/Dollypandey1512/Predicting_Employee_Retention_-Dolly_Pandey-Aayush_Tyagi-N_Gokul_Ram",
    demo: null,
    featured: false,
  },
  {
    title: "RSVP Movies — SQL Relational Business Intelligence",
    tagline: "Relational database analysis and SQL window functions guiding global film production decisions.",
    problem: "An international film studio required data-backed strategy insights from historical release data to plan its global production and launch roadmap.",
    businessObjective: "Analyze global film performance metrics (box office revenue, ratings, director track record, genre trends) to guide production greenlighting.",
    dataset: "Multi-table relational database containing movie records, director profiles, actor filmographies, ratings, genres, and regional box office revenues.",
    toolsUsed: ["SQL", "MS SQL Server", "MySQL", "Excel"],
    approach: "Designed complex SQL queries employing Inner/Left Joins, Window Functions (RANK, DENSE_RANK, LEAD/LAG), CTEs, and aggregate groupings to extract multi-dimensional insights.",
    dashboard: "Structured SQL BI report detailing top-performing directors by average rating, revenue-to-budget ratios by region, and optimal release window matrix.",
    keyInsights: [
      "Drama and Thriller genres yielded the highest international ROI when released in Q3.",
      "Directors with a track record of >3 highly-rated films consistently delivered 2.4x higher median box office returns.",
    ],
    businessImpact: "Delivered data-driven recommendations for optimal release timing, talent acquisition, and production budget allocations.",
    learning: "Mastered advanced SQL query optimization, complex CTE chaining, and business intelligence reporting for executive stakeholders.",
    github: "https://github.com/Dollypandey1512/SQL---RSVP-Movies-Case-Study",
    demo: null,
    featured: false,
  },
];

export const certifications = [
  {
    title: "Executive PG Programme in Data Science & AI",
    org: "IIIT Bangalore",
    meta: "Nov 2024 – Nov 2025 · GPA 3.8/4.0",
    url: "https://www.iiitb.ac.in/",
  },
  {
    title: "Data Science Programming Bootcamp",
    org: "upGrad — Python, Pandas, SQL",
    meta: "Passed with Distinction",
    url: "https://www.upgrad.com/",
  },
  {
    title: "Intro to Machine Learning",
    org: "Kaggle",
    meta: "Credential Verified",
    url: "https://www.kaggle.com/dolly1512",
  },
  {
    title: "Tata GenAI Data Analytics Simulation",
    org: "Forage",
    meta: "Credential Verified",
    url: "https://www.theforage.com/",
  },
  {
    title: "Microsoft Azure Fundamentals",
    org: "Microsoft Learn — Cloud Concepts",
    meta: "May 2025",
    url: "https://learn.microsoft.com/",
  },
];

export const achievements = [
  "Maintained a 3.8 / 4.0 GPA in the Executive PG Programme in Data Science & AI at IIIT Bangalore.",
  "Tracked KPIs across 12+ content clusters & engineered automated n8n/AI workflows during data analytics internship at Devot AI.",
  "Built executive Tableau & Power BI dashboards delivering actionable insights for operational & lead funnel optimization.",
];
