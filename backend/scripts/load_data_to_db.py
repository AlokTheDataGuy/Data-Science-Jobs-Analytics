from db_connection import engine
import pandas as pd
import os

# --- 3️⃣ Defining CSV files and target table names ---
csv_table_map = {
    # "eda_top_cities.csv": "top_cities",
    # "eda_top_companies.csv": "top_companies",
    # "eda_top_skills.csv": "top_skills",
    "eda_trend.csv": "job_trends"
}

# --- 4️⃣ Base folder where CSVs are located ---
base_path = "../data/eda/"   

# --- 5️⃣ Uploading all CSVs ---
for file_name, table_name in csv_table_map.items():
    file_path = os.path.join(base_path, file_name)
    
    if not os.path.exists(file_path):
        print(f"⚠️ Skipping {file_name} (not found)")
        continue

    print(f"📤 Uploading {file_name} → TiDB table `{table_name}` ...")

    df = pd.read_csv(file_path)
    
    df.to_sql(
        name=table_name,
        con=engine,
        if_exists="replace",  # or "append"
        index=False,
        chunksize=1000,
        method="multi"
    )

    print(f"✅ {file_name} uploaded successfully as `{table_name}`")

print("\n🎯 All CSVs processed successfully!")
