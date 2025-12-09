
# 📊 **Data Science Jobs Market Analysis (2025)**

### *Python • Excel • Power BI • Data Modeling • Web Scraping*

## 🚀 Executive Summary

This project analyzes **9,000+ Data Science job postings across India** collected from platforms like LinkedIn and Indeed using a custom Python-based web scraper. The goal was to understand **what skills, locations, industries, and job roles dominate the Indian job market**, and what qualifications employers expect in 2025.

Using **Python, Excel Pivot Tables, Power Query, and Power BI**, the dataset was cleaned, transformed, modeled, and visualized into a **single-page interactive dashboard** that provides valuable insights for job seekers, career changers, and workforce planners.

### 📌 Key Highlights

* **Total Jobs:** 9K+
* **Unique Companies Hiring:** 3K+
* **Unique Skills Identified:** 229
* **Top Skills:** Communication, Python, SQL, AWS, Leadership
* **Top Cities Hiring:** Bengaluru, Hyderabad, Pune
* **Top Industries Hiring:** Technology, Consulting, Finance
* **Most Required Education:** Masters & Bachelors
* **Experience Expectation:** 3–7 years for most roles

---

# 🧩 Business Problem

The Data Science job landscape evolves quickly — new tools emerge, cloud skills are demanded, and hiring hotspots shift. Candidates often struggle with:

* Which skills should I learn first?
* What cities/states have the most job opportunities?
* What job roles dominate the Indian market?
* What experience and education do companies expect?
* Which industries hire the most Data professionals?

### ❓ **Guiding Question:**

**“What does the Data Science job market in India look like in 2025, and how can job seekers align themselves with market demand?”**

---

# 🖼️ Dashboard Preview

![screenshot](./screenshots/screenshot.png)

---

# 🔍 Methodology

## 1️⃣ **Data Scraping (Python)**

A custom scraper (`job_scraper.py`) was developed using the **JobSpy Docker API** to extract thousands of job postings.

### Extracted fields included:

* Job title
* Company
* Description
* City & State
* Skills
* Education & Experience requirements
* Seniority & job type
* Posted date
* Industry mapping

Raw output stored as:

```
data/jobs_raw.csv
```

---

## 2️⃣ **Data Cleaning & EDA (Jupyter Notebook)**

Performed in `EDA.ipynb`:

✔ Removed duplicates
✔ Standardized job titles, cities, states
✔ Extracted skills from text
✔ Created skill list by splitting/unpivoting
✔ Cleaned education & experience columns
✔ Derived new fields (role category, skill count, etc.)

Exported cleaned dataset:

```
data/jobs_cleaned.csv
```

---

# 3️⃣ **Excel Analysis (Pivot Tables)**

Before building the Power BI dashboard, **Excel Pivot Tables** were used for validation, exploration, and generating dimension tables.

### ✔ Pivots Created

| Pivot Table                | Purpose                                  |
| -------------------------- | ---------------------------------------- |
| **Top States Hiring**      | Count jobs per state                     |
| **Top Cities Hiring**      | Identify major hiring hotspots           |
| **Top Companies**          | Companies with the highest hiring volume |
| **Top Skills**             | Skill frequency across all postings      |
| **Job Roles Distribution** | Count of Data Analyst, ML Engineer, etc. |
| **Education Requirement**  | Masters vs Bachelors vs PhD              |
| **Experience Required**    | 0–12 years distribution                  |

### ✔ Why Excel?

* Quick exploratory analysis
* Fast validation before BI modeling
* Easy export of Top 10 datasets
* Served as **dimension tables** in Power BI

All pivot tables were saved inside:

```
ds-jobs-analysis.xlsx
```

---

# 4️⃣ **Data Modeling (Power BI)**

A clean **star schema** was designed with:

### 📌 Fact Table

* `jobs` (1 row per job posting)

### 📌 Dimension Tables

* `skills`
* `jobs_skills` (bridge table for many-to-many relationships)
* `companies`
* `cities`
* `state`
* `job_roles`
* `education`
* `experience`
* `industries`
* Top 10 tables (from Excel pivots)

### 🔗 Relationships Include:

* `jobs` 1️⃣—🅱️ `jobs_skills`
* `skills` 1️⃣—🅱️ `jobs_skills`
* `jobs` 1️⃣—🅱️ `companies`, `cities`, `state`, `education`, `experience`

The model supports dynamic slicing across all filters.

---

# 5️⃣ **Dashboard Development (Power BI)**

The final dashboard includes:

### 📌 KPIs

* Total Jobs
* Unique Companies
* Unique Skills

### 📌 Visuals

* **Top Skills in Demand**
* **Top States & Cities Hiring**
* **Job Roles Distribution**
* **Education & Experience Requirements**
* **Top Hiring Companies**

### 📌 Filters

* Job Role
* Seniority
* State
* Skills
* Education

---

# 🛠 Skills Demonstrated

### 🔹 **Python**

* Web Scraping
* Regex-based skill extraction
* Cleansing & preprocessing

### 🔹 **Excel**

* Pivot Tables
* Data aggregation
* Data validation
* Slicer-based filtering

### 🔹 **Power BI**

* Data Modeling
* DAX measures
* Top-N ranking
* Relationships & bridge table handling
* KPI + interactive visual design

---

# 📈 Key Insights

📌 **Communication** is the most demanded skill — soft skills matter.
📌 **Python, SQL, Machine Learning, AWS** remain core technical requirements.
📌 **Bengaluru, Hyderabad, Pune** dominate India’s DS job market.
📌 **Technology & Consulting** are the largest hiring industries.
📌 **Mid-level experience (3–7 years)** is most commonly required.
📌 **Masters** degree still preferred for senior roles.

---

# 🚀 Recommendations

### For Job Seekers:

1. Prioritize **Python + SQL + ML + Cloud (AWS/Azure)**
2. Build projects that demonstrate **end-to-end ML workflows**
3. Improve **communication & storytelling** skills
4. Target job applications in **Bengaluru, Hyderabad, Pune**
5. Consider pursuing Masters if aiming for senior roles

### For Organizations:

* Use insights to refine job posting standards
* Improve clarity in skill requirements
* Benchmark hiring trends against industry leaders

---

# 📂 Repository Structure

```
data-science-jobs-analysis/
│── data/
│   ├── jobs_raw.csv
│   ├── jobs_cleaned.csv
│
│── notebook/
│   ├── EDA.ipynb
│
│── scraper/
│   ├── job_scraper.py
│   ├── docker-compose.yml
│   ├── docker-image-starter-cmd
│
│── ds-jobs-analysis.xlsx        # Excel Pivot Tables
│── data-science-jobs-analytics.pbix   # Power BI Dashboard
│── frontend/                    # Optional UI
│── requirements.txt
│── README.md
```
## 🚀 Next Steps

Here are potential enhancements:

1. **Add job trend forecasting** → Prophet or ARIMA
2. **Perform NLP on job descriptions** → Topic modeling / keyword cloud
3. **Build a search engine for job filtering** using Streamlit
4. **Automate daily scraping** with cron + GitHub Actions
5. **Deploy dashboard publicly** using Power BI service

---