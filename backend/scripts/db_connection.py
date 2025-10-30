from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv
from pathlib import Path

load_dotenv()

TIDB_USER = os.getenv("TIDB_USER")
TIDB_PASSWORD = os.getenv("TIDB_PASSWORD")
TIDB_HOST = os.getenv("TIDB_HOST")
TIDB_PORT = os.getenv("TIDB_PORT")
TIDB_DB = os.getenv("TIDB_DB")

# resolved SSL certificate path
SSL_CA = Path(__file__).parent.parent / "isrgrootx1.pem"

# ✅ Create connection string
engine = create_engine(
    f"mysql+pymysql://{TIDB_USER}:{TIDB_PASSWORD}@{TIDB_HOST}:{TIDB_PORT}/{TIDB_DB}",
    connect_args={
        "ssl": {"ca": SSL_CA},
        "local_infile": 1  # optional
    }
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
