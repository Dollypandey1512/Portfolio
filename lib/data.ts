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
    tagline: "IIIT Bangalore Team Project: Analysis of ride-hailing operational data to identify demand patterns, payment preferences, and cancellations.",
    problem: "Ride-hailing services experience driver vs. customer cancellation gaps and commute-hour demand surges requiring operational and marketing clarity.",
    businessObjective: "Analyze operational and business data from Namma Yatri to identify demand patterns, cancellations, payment preferences, and zone-level performance, translating findings into technical and business strategy reports.",
    dataset: "Transactional ride-hailing logs featuring trip search requests, cancellations, payment methods, timestamps, and geographic zones.",
    toolsUsed: ["Tableau", "PowerPoint", "MS Word"],
    approach: "Executed data cleaning, relational joins, and feature engineering; constructed an interactive Tableau dashboard with dynamic filters (time, payment method, zone); authored Technical Methodology and Business Decision-Making PPT reports.",
    dashboard: "Interactive Tableau dashboard featuring dynamic filters for time of day, payment method, and geographic zone.",
    keyInsights: [
      "Uncovered driver vs. customer cancellation gaps, peak commute-hour demand patterns, and top-performing zones.",
      "Analyzed payment method preferences across ride categories to inform operational and marketing strategy.",
    ],
    businessImpact: "Delivered separate Technical Methodology and Business Decision-Making reports translating analytical findings into operational and marketing recommendations.",
    learning: "Enhanced skills in end-to-end data analysis, relational joins, feature engineering, and interactive Tableau dashboard design.",
    github: "https://github.com/Dollypandey1512/ADV_Namma_Yatri_Dolly-pandey_Sanitha_Suman.zip",
    demo: null,
    featured: true,
  },
  {
    title: "Credit Card EDA",
    tagline: "IIIT Bangalore EPGP Project: Exploratory data analysis on credit application data to uncover spending patterns and default risk indicators.",
    problem: "Financial institutions face credit risk from payment difficulties and customer defaults requiring data-driven exploratory identification.",
    businessObjective: "Explore and analyze application data and previous loan application data to uncover customer spending patterns, segment-level trends, and key risk indicators influencing default rates.",
    dataset: "Application Data (demographics and credit info) & Previous Application Data (historical loan records).",
    toolsUsed: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    approach: "Cleaned data by handling missing values (>30% column dropping, mean/median/mode imputation) and outliers; performed univariate, bivariate, and multivariate analysis on income, credit amount, education, and target default variable.",
    dashboard: "Python visual exploratory suite with spend distribution plots, category heatmaps, and segment risk summaries.",
    keyInsights: [
      "Uncovered key demographic and financial trends influencing loan payment difficulties among defaulters vs. non-defaulters.",
      "Identified correlation patterns between credit amounts, income groups, and loan default indicators.",
    ],
    businessImpact: "Delivered visualized insights for business intelligence reporting to support risk assessment and data-driven decision-making.",
    learning: "Mastered Python data wrangling with Pandas, missing value/outlier imputation, and exploratory data visualization.",
    github: "https://github.com/Dollypandey1512/Credit-EDA-Assignment",
    demo: null,
    featured: false,
  },
  {
    title: "Bike Sharing Demand Prediction",
    tagline: "Linear regression model with feature selection (RFE) & VIF analysis to predict daily bike rental demand.",
    problem: "Urban bike sharing operators require accurate demand forecasting to support operational planning, fleet dispatch, and inventory allocation.",
    businessObjective: "Build a linear regression model with feature engineering to predict daily bike rentals (`cnt`), using RFE feature selection and VIF multicollinearity evaluation.",
    dataset: "Historical daily bike sharing rental dataset combined with weather, seasonal, temperature, humidity, windspeed, and calendar features.",
    toolsUsed: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    approach: "Performed EDA, dummy encoding (`drop_first=True`), feature selection using RFE (Recursive Feature Elimination), VIF multicollinearity analysis, and linear regression modeling with residual and Q-Q plot validation.",
    dashboard: "Python model evaluation suite tracking RMSE and R² metrics alongside residual and Q-Q distribution plots.",
    keyInsights: [
      "Identified top demand predictors: temperature (`temp`), year (`yr`), and season (`season`).",
      "Validated key linear regression assumptions through residual distribution analysis and Q-Q plots.",
    ],
    businessImpact: "Presented model findings with data-driven recommendations to support daily operational planning.",
    learning: "Gained expertise in linear regression modeling, RFE feature selection, VIF multicollinearity analysis, and metric evaluation.",
    github: "https://github.com/Dollypandey1512/Linear-Regression-Assignment",
    demo: null,
    featured: false,
  },
  {
    title: "SQL – RSVP Movies Case Study",
    tagline: "Data-driven SQL case study for RSVP Movies to analyze past movie data for a 2022 global release.",
    problem: "Film production houses require structured analytical insights from past movie datasets to inform international release strategy, genre selection, and casting.",
    businessObjective: "Derive actionable business intelligence insights from a large movie database using structured SQL queries across four analytics segments to guide executive release strategy.",
    dataset: "Multi-table relational database featuring movie records, director profiles, ratings, genres, release platforms, and regional revenues.",
    toolsUsed: ["MySQL", "SQL"],
    approach: "Formulated structured SQL queries leveraging Inner/Left Joins, Common Table Expressions (CTEs), Subqueries, and Window Functions to analyze movie performance across languages, genres, and release platforms.",
    dashboard: "Structured SQL analytical report detailing revenue trends, rating distributions, and director performance metrics.",
    keyInsights: [
      "Extracted revenue trends, rating distributions, and actor/director combinations contributing to commercial success.",
      "Identified regional vs. global audience behavior patterns to inform genre, casting, and release platform recommendations.",
    ],
    businessImpact: "Structured analytical findings into a stakeholder-ready SQL report to support strategic planning for a global film launch.",
    learning: "Deepened expertise in SQL query optimization, complex subqueries, window functions, and business intelligence reporting.",
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
