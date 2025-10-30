
# Data Science Jobs Analytics - Backend

This is the **backend service** for the Data Science Jobs Analytics project. It provides APIs for loading, processing, and serving job-related data collected from various sources. The backend is built using **Python** and can be run locally with **Uvicorn**.

---

## 📁 Project Structure

```
backend/
├── data/
│   ├── EDA/
│   │   ├── eda_top_cities.csv
│   │   ├── eda_top_companies.csv
│   │   ├── eda_top_skills.csv
│   │   └── eda_trend.csv
│   ├── jobs_cleaned.csv
│   └── jobs_raw.csv
├── notebooks/
│   └── EDA.ipynb
├── scripts/
│   ├── analytics_views.py
│   ├── db_connection.py
│   ├── load_data_to_db.py
│   ├── load_jobs_to_db.py
│   ├── test.py
│   └── __pycache__/
├── main.py
├── requirements.txt
└── README.md
```

---

## ⚡ Features

* Load raw job data (`jobs_raw.csv`) into **TiDB/MySQL**.
* Clean and process job data for analysis.
* Perform **EDA (Exploratory Data Analysis)** and generate summary CSVs:

  * Top cities
  * Top companies
  * Top skills
  * Job trends
* API endpoints (via `main.py`) to serve processed job data.
* Integration with Python scripts for automation of data loading and analytics.

---

## 🛠️ Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd data_science_jobs_analytics/backend
```

2. Create a virtual environment and activate it:

```bash
python -m venv venv
source venv/bin/activate   # Linux/macOS
venv\Scripts\activate      # Windows
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

---

## 🚀 Running the Backend

Run the backend locally using **Uvicorn**:

```bash
uvicorn main:app --reload
```

* The API will be accessible at: `http://127.0.0.1:8000`
* Use `--reload` for hot-reloading during development.

---

## 🗄️ Data Loading

Scripts in `scripts/` help load data into the database:

```bash
# Load cleaned data to database
python scripts/load_data_to_db.py

# Load jobs data to database
python scripts/load_jobs_to_db.py
```

---

## 📊 Notebooks

The `notebooks/EDA.ipynb` contains exploratory analysis on the job datasets including:

* Top hiring cities
* Most in-demand skills
* Trends in job postings over time

---

## 🔗 Database Connection

The `scripts/db_connection.py` manages connection to the **TiDB/MySQL** database. Update credentials before running the scripts:

```python
TIDB_USER = "your_user"
TIDB_PASSWORD = "your_password"
TIDB_HOST = "your_host"
TIDB_PORT = 4000
TIDB_DB   = "test"
```

---

