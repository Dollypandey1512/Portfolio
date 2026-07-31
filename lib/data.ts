export const profile = {
  name: "Dolly Pandey",
  roles: [
    "Data Analyst",
    "KPI & Funnel Analytics",
    "AI Automation Engineer",
  ],
  headline: "Turning KPIs and funnels into decisions people actually act on.",
  summary:
    "I'm a data analyst who started in biotechnology and moved into data because I wanted to work with evidence, not just theory. My day-to-day is KPI tracking, funnel analytics, and building the data pipelines that feed them — turning raw search, campaign, and operational data into insight a stakeholder can act on the same week. I've built ETL workflows, anomaly-detection processes, and interactive dashboards that shipped to real teams, not just notebooks that stayed on a laptop. I bring the same rigor to a SQL query as I do to explaining what it means to someone who isn't technical.",
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
  { value: "12+", label: "topic clusters tracked for KPI performance" },
  { value: "3+", label: "live features shipped in production" },
  { value: "3.8/4.0", label: "GPA, Data Science, IIIT Bangalore" },
];

export const skills = [
  {
    category: "Programming & Querying",
    items: ["Python", "SQL (window functions, CTEs)", "JavaScript", "VBA", "Regex"],
  },
  {
    category: "Data Analytics",
    items: [
      "KPI Tracking",
      "Funnel Analysis",
      "Cohort Analysis",
      "Anomaly Detection",
      "A/B Testing",
      "Hypothesis Testing",
      "Inferential Statistics",
    ],
  },
  {
    category: "Data Engineering",
    items: [
      "ETL Pipelines",
      "Data Modeling",
      "Data Wrangling",
      "Feature Engineering",
      "Data Validation",
      "n8n Automation",
    ],
  },
  {
    category: "Visualisation Tools",
    items: [
      "Tableau",
      "Power BI",
      "Metabase",
      "Matplotlib",
      "Seaborn",
      "Google Analytics",
      "Search Console",
    ],
  },
  {
    category: "Machine Learning",
    items: ["Regression", "Classification", "Clustering", "NLP", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    category: "AI & Automation",
    items: ["Claude", "ChatGPT", "OpenAI Codex", "Smartlead AI", "n8n", "Prompt Engineering"],
  },
  {
    category: "Cloud & Big Data",
    items: ["AWS (EC2, S3)", "Apache Spark", "Hadoop", "Azure Fundamentals"],
  },
];

export const experience = [
  {
    role: "Data Analyst (Data Science Intern)",
    org: "Devot AI",
    date: "Nov 2025 – May 2026",
    points: [
      "Tracked KPIs including CTR, organic traffic, and keyword rankings across multiple client properties in Google Search Console and Analytics, delivering actionable insights to stakeholders.",
      "Defined and monitored engagement metrics across 12+ content topic clusters, identifying performance trends and optimizing strategy against business goals.",
      "Ran anomaly detection on search performance data to catch keyword cannibalization, then implemented fixes that improved site crawlability and discoverability.",
      "Managed lead-funnel performance through AI-powered outreach (Smartlead AI), monitoring conversion rates and engagement across the full lead lifecycle.",
      "Built automated ETL pipelines in n8n for multi-source data integration, streamlining extraction, transformation, and reporting.",
      "Shipped 3+ production website features with Next.js, React, and Tailwind CSS, and managed Git workflows in a collaborative team environment.",
    ],
  },
  {
    role: "GenAI-Powered Data Analytics Intern",
    org: "Tata iQ — Forage",
    date: "June 2025",
    points: [
      "Ran exploratory data analysis using GenAI tooling to surface data quality issues, outliers, and risk indicators ahead of modeling.",
      "Prepared and engineered features on production-style datasets to feed predictive modeling pipelines.",
    ],
  },
];

export const projects = [
  {
    title: "Namma Yatri Case Study — Ride-Hailing Analytics",
    description:
      "End-to-end analysis of ride-hailing data — cleaning, joins, and feature engineering — to uncover demand patterns, cancellations, and zone-level performance, built into an interactive Tableau dashboard with time/payment/zone filters. Delivered separate technical and business-facing reports.",
    tech: ["Tableau", "PowerPoint", "MS Word"],
    github: "#",
    demo: null,
    featured: true,
    note: "GitHub link placeholder — repo not public yet",
  },
  {
    title: "Supply Chain Analytics — Capstone",
    description:
      "Live-tracking system design for an open-pit mine's digger–crusher supply chain: cleaned and modeled raw operational data in MySQL, then built dashboards tracking inventory and operational KPIs in near real time.",
    tech: ["MySQL", "Tableau", "Power BI"],
    github: "#",
    demo: null,
    featured: true,
    note: "GitHub link placeholder — repo not public yet",
  },
  {
    title: "Bike Sharing Demand Prediction",
    description:
      "Linear regression model forecasting daily bike rental volume from weather, season, and calendar features — tracking RMSE and R² across iterations and presenting operational recommendations, not just a fitted model.",
    tech: ["Python", "Scikit-learn", "statsmodels", "Pandas"],
    github: "https://github.com/Dollypandey1512/Linear-Regression-Assignment",
    demo: null,
    featured: false,
  },
  {
    title: "Credit Card Spending — EDA",
    description:
      "Exploratory analysis of a credit card dataset to uncover customer spending patterns, segment-level trends, and risk indicators, with data quality cleanup to produce a validated analytical dataset.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/Dollypandey1512/Credit-EDA-Assignment",
    demo: null,
    featured: false,
  },
  {
    title: "Employee Retention Prediction",
    description:
      "Team project modeling employee attrition risk from HR data, translating model output into retention-risk factors a people team could actually use.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    github:
      "https://github.com/Dollypandey1512/Predicting_Employee_Retention_-Dolly_Pandey-Aayush_Tyagi-N_Gokul_Ram",
    demo: null,
    featured: false,
  },
  {
    title: "SQL — RSVP Movies Case Study",
    description:
      "Business-intelligence case study for a film studio, using subqueries and window functions across a relational movie dataset to inform a global launch decision.",
    tech: ["SQL", "MS SQL Server"],
    github: "https://github.com/Dollypandey1512/SQL---RSVP-Movies-Case-Study",
    demo: null,
    featured: false,
  },
];

export const certifications = [
  {
    title: "Executive PG Programme in Data Science",
    org: "IIIT Bangalore",
    meta: "Nov 2024 – Nov 2025 · GPA 3.8/4.0",
  },
  {
    title: "Data Science Programming Bootcamp",
    org: "upGrad — Python, Pandas, SQL",
    meta: null,
  },
  {
    title: "Intro to Machine Learning",
    org: "Kaggle",
    meta: null,
  },
  {
    title: "Tata GenAI Data Analytics Simulation",
    org: "Forage",
    meta: null,
  },
  {
    title: "Microsoft Azure Fundamentals",
    org: "Microsoft Learn — Cloud Concepts",
    meta: "May 2025",
  },
];

export const achievements = [
  "Shipped 3+ live production features as an early-career intern, not just internal tools",
  "GPA of 3.8/4.0 in an Executive PG Programme in Data Science at IIIT Bangalore",
  "Built and ran outreach automation (Smartlead AI + n8n) end-to-end for a live team",
];
