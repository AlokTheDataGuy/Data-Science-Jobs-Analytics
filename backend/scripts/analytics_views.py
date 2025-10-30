# from sqlalchemy import text
# from db_connection import engine

# with engine.connect() as conn:
    
#     # # --- View: Top Skills Overall ---
#     # conn.execute(text("""
#     # CREATE OR REPLACE VIEW v_top_skills AS
#     # SELECT Skill, SUM(Count) AS total_count
#     # FROM top_skills
#     # GROUP BY Skill
#     # ORDER BY total_count DESC;
#     # """))

#     # # --- View: Top Hiring Companies ---
#     # conn.execute(text("""
#     # CREATE OR REPLACE VIEW v_top_companies AS
#     # SELECT * FROM top_companies ORDER BY count DESC;
#     # """))

#     # # --- View: City-wise Job Count ---
#     # conn.execute(text("""
#     # CREATE OR REPLACE VIEW v_top_cities AS
#     # SELECT * FROM top_cities ORDER BY count DESC;
#     # """))

#     # # --- View: Job Posting Trends Over Time ---
#     # conn.execute(text("""
#     # CREATE OR REPLACE VIEW v_job_trends AS
#     # SELECT 
#     #     posted_month,
#     #     COUNT(*) AS job_count
#     # FROM jobs
#     # GROUP BY posted_month
#     # ORDER BY posted_month;
#     # """))
    
#     # --- View: Job Count By State ---
#     # conn.execute(text("""
#     # CREATE OR REPLACE VIEW job_count_by_state AS
#     # SELECT 
#     #     state,
#     #     COUNT(*) AS job_count
#     # FROM jobs
#     # WHERE state IS NOT NULL AND state <> ''
#     # GROUP BY state
#     # ORDER BY job_count DESC;
#     # """))
    
# #     # --- View: Categorized Roles ---
# #     conn.execute(text("""
# #     CREATE OR REPLACE VIEW v_categorized_roles AS
# #     SELECT 
# #         CASE 
# #             WHEN LOWER(title) REGEXP '(^|\\s)(data|reporting|power bi|insight|metadata).*analyst($|\\s)' 
# #                         OR LOWER(title) REGEXP 'analyst($|\\s)' 
# #                         OR LOWER(title) LIKE '%data analyst%' 
# #                     THEN 'Data Analyst'            
# #             WHEN LOWER(title) LIKE '%data scientist%' THEN 'Data Scientist'
# #             WHEN LOWER(title) LIKE '%data engineer%' THEN 'Data Engineer'
# #             WHEN LOWER(title) LIKE '%machine learning%' OR LOWER(title) LIKE '%ml engineer%' THEN 'ML Engineer'
# #             WHEN LOWER(title) LIKE '%ai engineer%' OR LOWER(title) LIKE '%artificial intelligence%' THEN 'AI Engineer'
# #             WHEN LOWER(title) LIKE '%business analyst%' THEN 'Business Analyst'
# #             ELSE 'Other'
# #         END as role_category,
# #         job_hash,
# #         title,
# #         city,
# #         state,
# #         company
# #     FROM jobs;
# #     """))

# #     # --- View: Skills by Role Category ---
#         conn.execute(text("""
#         CREATE OR REPLACE VIEW v_skills_by_role_category AS
#         SELECT 
#             r.role_category,
#             TRIM(BOTH '[]' FROM TRIM(BOTH '"' FROM SUBSTRING_INDEX(SUBSTRING_INDEX(j.top_skills_list, ',', n.n), ',', -1))) AS skill,
#             j.state,
#             j.city,
#             COUNT(*) AS count
#         FROM jobs j
#         JOIN v_categorized_roles r ON j.job_hash = r.job_hash
#         JOIN (
#             SELECT 1 n UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5
#             UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9 UNION SELECT 10
#         ) n
#         WHERE j.top_skills_list IS NOT NULL 
#         AND j.top_skills_list != ''
#         AND TRIM(BOTH '[]' FROM TRIM(BOTH '"' FROM SUBSTRING_INDEX(SUBSTRING_INDEX(j.top_skills_list, ',', n.n), ',', -1))) != ''
#         GROUP BY r.role_category, j.state, j.city, skill
#         ORDER BY count DESC;

#         """))

# #     # --- View: Jobs by Role and Location ---
# #     conn.execute(text("""
# #     CREATE OR REPLACE VIEW v_jobs_by_role_location AS
# #     SELECT 
# #         role_category,
# #         state,
# #         city,
# #         COUNT(*) as job_count
# #     FROM v_categorized_roles
# #     GROUP BY role_category, state, city
# #     ORDER BY job_count DESC;
# #     """))

# #     # --- View: Role Categories Summary ---
# #     conn.execute(text("""
# #     CREATE OR REPLACE VIEW v_role_categories AS
# #     SELECT 
# #         role_category,
# #         COUNT(*) as count
# #     FROM v_categorized_roles
# #     GROUP BY role_category
# #     ORDER BY count DESC;
# #     """))


    
    
# print("✅ All analytics views created successfully!")