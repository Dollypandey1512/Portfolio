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
  github?: string | null;
  demo?: string | null;
  caseStudyLink?: string | null;
  featured: boolean;
  isFlagship?: boolean;
}

export const profile = {
  name: "Dolly Pandey",
  subheading: "Data Analyst | Python • SQL • Tableau • Power BI • AI Automation",
  roles: [
    "Data Analyst",
    "Business Intelligence",
    "SQL • Python • Tableau",
    "Data Visualization",
    "AI Workflow Automation",
  ],
  headline:
    "Transforming complex datasets into actionable business insights using Python, SQL, Tableau, Power BI, and AI-driven automation.",
  summary:
    "Data Analyst with hands-on experience in KPI tracking, funnel analytics, data pipeline development, and insight generation for cross-functional stakeholders. Proficient in Python, SQL, Tableau, Power BI, and Google Analytics. Experienced in EDA, predictive modeling, ETL processes, and AI-powered automation. Adept at translating business requirements into analytical problems and delivering actionable, data-driven recommendations. Holding an Executive Post Graduate Programme in Data Science from IIIT Bangalore (GPA 3.8 / 4.0).",
  location: "Delhi, India",
  email: "dollypandey221@gmail.com",
  phone: "+91 8957879301",
  links: {
    github: "https://github.com/Dollypandey1512",
    linkedin: "https://www.linkedin.com/in/dolly-pandey-258147286",
    kaggle: "https://www.kaggle.com/dolly1512",
    resume: "/resume.pdf",
  },
};

export const stats = [
  { value: "12+", label: "Content topic clusters tracked for KPI performance" },
  { value: "3.8 / 4.0", label: "GPA, Executive PG Programme in Data Science (IIIT Bangalore)" },
  { value: "3+", label: "Live production website implementations shipped" },
];

export const skills = [
  {
    category: "Programming & Querying",
    items: ["Python", "SQL (window functions, CTEs, query optimisation)", "JavaScript", "VBA", "Regex"],
  },
  {
    category: "Data Analytics",
    items: [
      "EDA",
      "KPI Tracking",
      "Funnel Analysis",
      "Cohort Analysis",
      "Anomaly Detection",
      "A/B Testing",
      "Statistical Analysis",
      "Inferential Statistics",
      "Hypothesis Testing",
    ],
  },
  {
    category: "Data Engineering",
    items: [
      "Data Modeling",
      "ETL Pipelines",
      "Data Wrangling",
      "Feature Engineering",
      "Data Validation",
      "n8n Workflow Automation",
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
      "Google Search Console",
    ],
  },
  {
    category: "Machine Learning",
    items: [
      "Regression",
      "Classification",
      "Clustering",
      "NLP",
      "Predictive Modelling",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],
  },
  {
    category: "AI & Automation",
    items: ["Claude", "ChatGPT", "OpenAI Codex", "Cowork", "Smartlead AI", "n8n", "Prompt Engineering"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MS SQL Server"],
  },
  {
    category: "Cloud & Big Data",
    items: [
      "AWS (EC2, S3, Cloud Fundamentals)",
      "Apache Spark (RDDs, Structured APIs)",
      "Hadoop",
      "Azure Fundamentals",
    ],
  },
  {
    category: "Dev Tools & Other",
    items: ["Git", "GitHub", "Jupyter", "Google Colab", "VS Code", "Trello", "Excel", "Google Sheets", "Macros"],
  },
];

export const toolsList = [
  { name: "Python", category: "Programming" },
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
    role: "Data Science Intern",
    org: "Devot AI",
    date: "Nov 2025 – May 2026",
    points: [
      "Tracked and analyzed KPIs including CTR, organic traffic trends, and keyword ranking metrics across multiple client properties using Google Search Console and Google Analytics, delivering actionable insights to stakeholders.",
      "Defined and monitored content engagement metrics across 12+ topic clusters, identifying performance trends and optimizing content strategy based on data-driven insights aligned with business goals.",
      "Performed anomaly detection on search performance data to identify keyword cannibalization issues; implemented corrective strategies that improved site crawlability and organic discoverability.",
      "Managed and tracked lead funnel performance through AI-powered outreach campaigns (Smartlead AI), monitoring conversion rates, engagement metrics, and email sequence performance across the full lead lifecycle.",
      "Developed automated data pipelines using n8n for multi-source data integration, orchestrating ETL workflows across tools to streamline data extraction, transformation, and reporting processes.",
      "Collaborated with cross-functional teams including campaign managers and content leads, maintaining clear documentation of datasets and processes and presenting data-driven findings in narrative format aligned with business objectives.",
      "Built and maintained production-level website features using Next.js, React, and Tailwind CSS, contributing to 3+ live deployments and managing Git workflows in a collaborative team environment.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Supply Chain Analytics – Open-Pit Mining Equipment",
    tagline: "⭐ IIIT Bangalore Capstone Project: Operational analysis of mining equipment production, trips, and payload utilization.",
    problem: "Open-pit mining operations depend heavily on efficient equipment utilization. Underperforming equipment leads to higher cost per ton, lower production efficiency, and increased maintenance overhead.",
    businessObjective: "Analyze equipment-level performance, identify high-performing and low-performing equipment, evaluate payload utilization, analyze trips versus production, and recommend operational improvements.",
    dataset: "Equipment-wise Production data, Trips per Day, Payload Utilization %, and Maintenance Status.",
    toolsUsed: ["Power BI", "MySQL", "SQL", "Excel", "PowerPoint"],
    approach: "Designed a live tracking system using MySQL Workbench stored procedures and relational schema; built Power BI dashboards tracking equipment production, trips, and payload efficiency; presented data storytelling recommendations via slide presentation.",
    dashboard: "Power BI interactive reporting suite featuring Executive Overview, Equipment-wise Production Analysis, Trips vs Production, Efficiency Analysis, Payload Utilization, and Low-Performing Equipment views.",
    keyInsights: [
      "Production is concentrated among a small number of high-performing equipment (e.g. EX8044, EX8047, EX8051).",
      "Trip count alone is not a reliable performance indicator.",
      "Payload utilization is one of the strongest efficiency drivers.",
      "Low-performing equipment increase operational cost without proportional production output.",
    ],
    businessImpact: "Provided actionable recommendations for payload optimization, trip optimization, maintenance prioritization, and asset rationalization.",
    learning: "Demonstrated skills in SQL stored procedures, dimensional data modeling, Power BI dashboard development, KPI analysis, and data storytelling.",
    github: "https://github.com/Dollypandey1512/Supply-Chain-Analytics",
    demo: "https://drive.google.com/file/d/1YF0urw14xzN1HDYaNsUF_b0oTeD0MYkp/view?usp=drive_link",
    caseStudyLink: "/projects/supply-chain-analytics",
    featured: true,
    isFlagship: true,
  },
  {
    title: "Namma Yatri Case Study – Data Analysis & Visualization",
    tagline: "IIIT Bangalore Project: End-to-end analysis of ride-hailing data to uncover demand patterns and cancellation trends.",
    problem: "Ride-hailing services experience driver vs. customer cancellation gaps and commute-hour demand surges requiring operational and marketing clarity.",
    businessObjective: "Conducted end-to-end analysis of Namma Yatri ride-hailing data — cleaning, joins, and feature engineering — to uncover demand patterns, cancellations, payment preferences, and zone-level performance trends.",
    dataset: "Transactional ride-hailing logs featuring trip search requests, cancellations, payment methods, timestamps, and geographic zones.",
    toolsUsed: ["Tableau", "PowerPoint", "MS Word"],
    approach: "Performed data cleaning, relational joins, and feature engineering; constructed an interactive Tableau dashboard with filters for time, payment method, and zone; authored separate technical and business-facing reports.",
    dashboard: "Interactive Tableau dashboard featuring dynamic filters for time of day, payment method, and geographic zone.",
    keyInsights: [
      "Uncovered driver vs. customer cancellation gaps, peak commute-hour demand patterns, and top-performing zones.",
      "Analyzed payment method preferences across ride categories to inform operational and marketing strategy.",
    ],
    businessImpact: "Delivered separate technical and business-facing reports translating analytical findings into operational and marketing recommendations.",
    learning: "Enhanced skills in end-to-end data analysis, relational joins, feature engineering, and interactive Tableau dashboard design.",
    github: "https://github.com/Dollypandey1512/ADV_Namma_Yatri_Dolly-pandey_Sanitha_Suman.zip",
    demo: null,
    featured: true,
  },
  {
    title: "Credit Card EDA",
    tagline: "Exploratory data analysis and data wrangling to uncover spending patterns and risk indicators.",
    problem: "Raw credit card datasets contain data quality issues (missing values, outliers) that hinder accurate customer segmentation and risk analysis.",
    businessObjective: "Performed EDA and data wrangling on a credit card dataset to uncover customer spending patterns, segment-level trends, and risk indicators — delivering visualised insights for business intelligence reporting.",
    dataset: "Credit card customer demographics, monthly transaction categories, credit utilization, and repayment histories.",
    toolsUsed: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    approach: "Identified data quality issues (missing values, outliers); applied data cleaning and wrangling techniques to prepare a validated analytical dataset.",
    dashboard: "Python visual exploratory suite with spend distribution plots, category heatmaps, and segment risk summaries.",
    keyInsights: [
      "Uncovered customer spending patterns, segment-level trends, and risk indicators for business intelligence reporting.",
      "Applied cleaning techniques to prepare a validated analytical dataset.",
    ],
    businessImpact: "Delivered visualised insights for business intelligence reporting to support data-driven decision-making.",
    learning: "Mastered Python data wrangling with Pandas, missing value/outlier cleaning, and exploratory data visualization.",
    github: "https://github.com/Dollypandey1512/Credit-EDA-Assignment",
    demo: null,
    featured: false,
  },
  {
    title: "Bike Sharing Demand Prediction",
    tagline: "Linear regression model with feature engineering to predict daily bike rental volume.",
    problem: "Urban bike sharing operators require accurate demand forecasting to support operational planning and resource management.",
    businessObjective: "Built a linear regression model with feature engineering to predict daily bike rentals, achieving strong performance through iterative pipeline optimisation and feature selection.",
    dataset: "Multi-year rental dataset combined with daily weather, seasonal, and calendar features.",
    toolsUsed: ["Python", "Scikit-learn", "Pandas"],
    approach: "Built a linear regression model with feature engineering; performed iterative pipeline optimization and feature selection; tracked model KPIs (RMSE, R²) across iterations.",
    dashboard: "Python model evaluation suite tracking RMSE and R² metrics across pipeline iterations.",
    keyInsights: [
      "Achieved strong predictive performance through iterative pipeline optimization and feature selection.",
      "Tracked model KPIs (RMSE, R²) across iterations to validate feature predictive power.",
    ],
    businessImpact: "Presented findings with data-driven recommendations for operational planning.",
    learning: "Gained expertise in linear regression modeling, feature engineering pipelines, and metric optimization (RMSE, R²).",
    github: "https://github.com/Dollypandey1512/Linear-Regression-Assignment",
    demo: null,
    featured: false,
  },
  {
    title: "SQL – RSVP Movies Case Study",
    tagline: "Deriving business intelligence insights from a large movie database using complex SQL queries.",
    problem: "Film distribution and production teams require structured analytical insights from relational movie datasets to inform business strategies.",
    businessObjective: "Derived actionable business intelligence insights from a large movie dataset using complex SQL queries, subqueries, and window functions — structured as a stakeholder-ready analytical report.",
    dataset: "Multi-table relational database featuring movie records, director profiles, ratings, genres, and regional revenues.",
    toolsUsed: ["MS SQL Server"],
    approach: "Wrote complex SQL queries, subqueries, and window functions across relational database tables; structured findings into a stakeholder-ready analytical report.",
    dashboard: "Structured SQL analytical report detailing revenue trends, rating distributions, and genre performance.",
    keyInsights: [
      "Extracted actionable business intelligence insights across movie ratings, regional box office trends, and genres.",
      "Utilized SQL window functions and subqueries to evaluate director performance and release patterns.",
    ],
    businessImpact: "Structured analytical findings into a stakeholder-ready report to support strategic business decisions.",
    learning: "Deepened expertise in MS SQL Server, complex subqueries, window functions, and business intelligence reporting.",
    github: "https://github.com/Dollypandey1512/SQL---RSVP-Movies-Case-Study",
    demo: null,
    featured: false,
  },
];

export const certifications = [
  {
    title: "Executive Post Graduate Programme (EPGP) in Data Science",
    org: "IIIT Bangalore",
    meta: "Nov 2024 – Nov 2025 · GPA 3.8 / 4.0",
    url: "https://www.credential.net/4009cc81-da40-4990-8ee2-b2858cad8f19#acc.cpnj0eEs",
  },
  {
    title: "Data Science Programming Bootcamp",
    org: "upGrad (Python, Pandas, SQL)",
    meta: null,
    url: "https://www.credential.net/0291c988-a57f-465c-8fbd-d8f586db14d5",
  },
  {
    title: "Intro to Machine Learning",
    org: "Kaggle",
    meta: null,
    url: "https://www.kaggle.com/learn/certification/dolly1512/intro-to-machine-learning",
  },
  {
    title: "Tata GenAI Data Analytics Simulation",
    org: "Forage",
    meta: null,
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_upZtw2bhEZeaQqEzC_1750326463450_completion_certificate.pdf",
  },
  {
    title: "Microsoft Azure Fundamentals",
    org: "Microsoft Learn (Cloud Concepts, all module assessments passed)",
    meta: "May 2025",
    url: null,
  },
];

export const achievements = [
  "Graduating with a 3.8 / 4.0 GPA in the Executive PG Programme in Data Science at IIIT Bangalore.",
  "Tracked KPIs across 12+ content clusters & engineered automated n8n ETL pipelines during data science internship at Devot AI.",
  "Contributed to 3+ live production deployments at Devot AI using Next.js, React, and Tailwind CSS.",
];
