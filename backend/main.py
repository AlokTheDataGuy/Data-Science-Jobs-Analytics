from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text
from scripts.db_connection import engine

app = FastAPI(title="Data Science Jobs API", version="1.0")

# ✅ Allow frontend (localhost:5173) to access the backend
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://data-jobs-analytics.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],   # allow all HTTP methods
    allow_headers=["*"],   # allow all headers
)

@app.get("/")
def root():
    return {"message": "Data Science Jobs API is running"}

@app.get("/api/top-skills")
def get_top_skills():
    with engine.connect() as conn:
        result = conn.execute(text("SELECT * FROM v_top_skills LIMIT 20")).mappings().all()
    return result

@app.get("/api/top-cities")
def get_top_cities():
    with engine.connect() as conn:
        result = conn.execute(text("SELECT * FROM v_top_cities")).mappings().all()
    return result

@app.get("/api/top-companies")
def get_top_companies():
    with engine.connect() as conn:
        result = conn.execute(text("SELECT * FROM v_top_companies LIMIT 20")).mappings().all()
    return result

@app.get("/api/trends")
def get_trends():
    with engine.connect() as conn:
        result = conn.execute(text("SELECT * FROM v_job_trends")).mappings().all()
    return result

@app.get("/api/roles")
def get_roles():
    with engine.connect() as conn:
        result = conn.execute(text("SELECT * FROM v_role_categories")).mappings().all()
    return result

@app.get("/api/states")
def get_states():
    with engine.connect() as conn:
        result = conn.execute(text("SELECT DISTINCT state FROM jobs WHERE state IS NOT NULL ORDER BY state")).mappings().all()
    return result

@app.get("/api/skills")
def get_skills(role: str = None, state: str = None):
    query = """
        SELECT 
            LOWER(
                TRIM(
                    REPLACE(
                        REPLACE(
                            REPLACE(
                                REPLACE(skill_data, '[', ''),
                                ']', ''
                            ),
                            '"', ''
                        ),
                        '''', ''
                    )
                )
            ) AS skill,
            COUNT(*) AS count
        FROM (
            SELECT 
                SUBSTRING_INDEX(SUBSTRING_INDEX(j.top_skills_list, ',', n.n), ',', -1) AS skill_data
            FROM jobs j
            LEFT JOIN v_categorized_roles r ON j.job_hash = r.job_hash
            CROSS JOIN (
                SELECT 1 n UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5
                UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9 UNION SELECT 10
            ) n
            WHERE j.top_skills_list IS NOT NULL 
              AND j.top_skills_list <> ''
    """

    params = {}

    if role and role != "all":
        query += " AND r.role_category = :role"
        params["role"] = role

    if state and state != "all":
        query += " AND TRIM(LOWER(j.state)) = TRIM(LOWER(:state))"
        params["state"] = state

    query += """
        ) skills
        WHERE skill_data IS NOT NULL AND skill_data <> ''
        GROUP BY skill
        HAVING skill <> ''
        ORDER BY count DESC
        LIMIT 20
    """

    with engine.connect() as conn:
        result = conn.execute(text(query), params).mappings().all()
    return result



@app.get("/api/cities")
def get_cities(role: str = None, state: str = None):
    query = "SELECT city, COUNT(*) as count FROM jobs j"
    
    conditions = []
    params = {}
    
    if role and role != 'all':
        query += " JOIN v_categorized_roles r ON j.job_hash = r.job_hash"
        conditions.append("r.role_category = :role")
        params['role'] = role
    
    if state and state != 'all':
        conditions.append("TRIM(LOWER(j.state)) = TRIM(LOWER(:state))")
        params['state'] = state
    
    if conditions:
        query += " WHERE " + " AND ".join(conditions)
    
    query += " GROUP BY city ORDER BY count DESC LIMIT 20"
    
    with engine.connect() as conn:
        result = conn.execute(text(query), params).mappings().all()
    return result

@app.get("/api/companies")
def get_companies(role: str = None, state: str = None):
    query = "SELECT j.company, COUNT(*) as count FROM jobs j"
    
    conditions = []
    params = {}
    
    if role and role != 'all':
        query += " JOIN v_categorized_roles r ON j.job_hash = r.job_hash"
        conditions.append("r.role_category = :role")
        params['role'] = role
    
    if state and state != 'all':
        conditions.append("TRIM(LOWER(j.state)) = TRIM(LOWER(:state))")
        params['state'] = state
    
    if conditions:
        query += " WHERE " + " AND ".join(conditions)
    
    query += " GROUP BY j.company ORDER BY count DESC LIMIT 20"
    
    with engine.connect() as conn:
        result = conn.execute(text(query), params).mappings().all()
    return result
