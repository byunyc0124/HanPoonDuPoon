import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.article import get_article_info
from app.article import fetch_info_from_openai



app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/articles/news/{companyName}")
def read_root(companyName: str):
    return {"data" : get_article_info(companyName)}

@app.get("/articles/info/{companyName}")
async def get_company_info(companyName: str):
    info = fetch_info_from_openai(companyName)
    if info is None:
        raise HTTPException(status_code=500, detail="Failed to retrieve information")
    return {"data": info}


if __name__ == '__main__':
    uvicorn.run(debug=False, host='0.0.0.0', port=8000)
