# 🧠 Data Science Jobs Analytics Dashboard

This is an end-to-end **Data Analytics Portfolio Project** that analyzes and visualizes the Indian Data Science job market.  
It demonstrates skills in **Python (ETL, EDA)**, **SQL (TiDB Cloud)**, **FastAPI**, **React**, and **Power BI** — combining data engineering, backend APIs, and interactive dashboards.

---

## 🚀 Project Overview

The goal of this project is to understand trends in the Data Science job market across India.  
Data was scraped from job portals, cleaned and analyzed in Python, stored in a cloud SQL database (TiDB), and visualized using both **React.js** (charts via Recharts) and **Power BI** (embedded reports).

---

## 🧩 Tech Stack

### 🐍 Backend
- **Python** – Data cleaning, preprocessing, and analysis.
- **FastAPI** – REST API framework for serving processed data.
- **TiDB Cloud** – Managed distributed SQL database for storing cleaned data.
- **Pandas / NumPy / Matplotlib / Seaborn** – EDA and visualization.
- **SQLAlchemy** – Database ORM for connection management.

### ⚛️ Frontend
- **React.js (Vite)** – Frontend framework for the dashboard.
- **Recharts** – For interactive data visualizations.
- **Power BI Embedded** – For advanced analytics visuals like choropleth maps.
- **Axios / Fetch API** – For consuming FastAPI routes.

---

## 📂 Directory Structure

```
data_science_jobs_analytics/
│
├── backend/
│   ├── data/
│   │   ├── jobs_raw.csv
│   │   ├── jobs_cleaned.csv
│   │   └── EDA/ (EDA result CSVs)
│   ├── notebooks/
│   │   └── EDA.ipynb
│   ├── scripts/
│   │   ├── db_connection.py
│   │   ├── load_jobs_to_db.py
│   │   ├── analytics_views.py
│   │   └── load_data_to_db.py
│   ├── main.py
│   ├── requirements.txt
│   └── README.md
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── charts/
│   │   │   │   ├── TopCitiesChart.jsx
│   │   │   │   ├── TopCompaniesChart.jsx
│   │   │   │   └── TopSkillsChart.jsx
│   │   │   └── powerBICharts/PowerBICharts.jsx
│   │   ├── pages/Dashboard.jsx
│   │   ├── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── App.css
│   │   └── index.css
│   ├── vite.config.js
│   ├── package.json
│   └── README.md
│
└── README.md  ← (this file)
```

---

## ⚙️ Setup Instructions

### 1️⃣ Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

**Run FastAPI server:**
```bash
uvicorn main:app --reload
```

The backend will start on:  
➡️ `http://127.0.0.1:8000`

You can test endpoints at:  
➡️ `http://127.0.0.1:8000/docs`

---

### 2️⃣ Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

The frontend will start on:  
➡️ `http://localhost:5173`

---

## 📊 Features

✅ Scraped job postings from multiple job portals.  
✅ Cleaned and standardized job data using Pandas.  
✅ Created SQL views in TiDB Cloud for:
- Top 10 Indian cities with Data Science jobs  
- Top hiring companies  
- Most in-demand technical skills  

✅ Built REST APIs with FastAPI for data access.  
✅ Developed a React-based dashboard:
- **TopSkillsChart**
- **TopCompaniesChart**
- **TopCitiesChart**
- **Power BI embedded visualizations** (including Indian choropleth heatmap).

✅ Deployed Power BI visuals for geographic analysis.

---

## 🗺️ Power BI Dashboard Highlights

- **Choropleth Map of India** — states shaded by job counts.  
- **Top In-Demand Skills** — visualized through bar charts.  
- **Top Hiring Companies** — insights into key employers.  
- **Top Cities for Data Science Jobs** — location-based insights.

---

## 📘 Learning Outcomes

- ETL pipeline design and automation  
- Cloud database integration (TiDB SQL Cloud)  
- Building REST APIs with FastAPI  
- Full-stack data visualization (React + Power BI)  
- Structuring real-world portfolio projects  

---

## 🔮 Future Improvements

- Add filters for job type, experience, and salary range.  
- Deploy on a public cloud (e.g., Render/Netlify + TiDB Cloud).  
- Integrate authentication for user dashboards.  
- Automate data refresh using scheduled scripts.

---

## 👨‍💻 Author

**Alok Deep**  
Data Analyst | Data Enthusiast | Full-Stack Data Projects  
📧 [www.linkedin.com/in/alokthedataguy]  
🌐 [https://alok-the-data-guy.vercel.app/]

---
