from dotenv import load_dotenv
import os

# Load .env file
load_dotenv()


class Config:
    """
    Central configuration for the application.
    """

    APP_NAME = "AI API Laboratory"

    APP_VERSION = "1.0.0"

    APP_DESCRIPTION = "Backend for testing multiple AI providers."

    DEFAULT_PROVIDER = "groq"

    DEFAULT_MODEL = "llama-3.3-70b-versatile"

    REQUEST_TIMEOUT = 30

    DEBUG = True