from pydantic import BaseModel


class TestRequest(BaseModel):
    provider: str
    api_key: str
    model: str
    prompt: str