# some_module.py
from db_connection import engine
import pandas as pd

# Example: read a table from TiDB
df = pd.read_sql("SELECT * FROM top_cities LIMIT 5", engine)
print(df)
