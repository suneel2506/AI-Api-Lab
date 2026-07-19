from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.test import router as test_router
from routes.provider import router as provider_router
from exceptions.handlers import register_exception_handlers
from config import Config

app = FastAPI(
    title=Config.APP_NAME,
    version=Config.APP_VERSION,
    description=Config.APP_DESCRIPTION
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

register_exception_handlers(app)

@app.get("/")
def home():
    return {
        "message": "AI API Laboratory Backend Running 🚀"
    }


app.include_router(
    test_router,
    prefix="/api",
    tags=["Testing"]
)

app.include_router(
    provider_router,
    prefix="/api",
    tags=["Providers"]
)