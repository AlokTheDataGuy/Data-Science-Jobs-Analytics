from db_connection import engine
import pandas as pd

# --- 2️⃣ Loading from CSV ---
file_path = "../data/jobs_cleaned.csv" 
df = pd.read_csv(file_path)

# --- 3️⃣ Uploading to TiDB ---
df.to_sql(
    name="jobs",
    con=engine,
    if_exists="replace",   # can use "append" to add new data
    index=False,
    chunksize=1000,
    method="multi"
)

print("✅ CSV data successfully uploaded to TiDB Cloud!")
