from groq import Groq

from providers.base.base_provider import BaseProvider


class GroqProvider(BaseProvider):

    MODELS = [
        {
            "id": "llama-3.3-70b-versatile",
            "name": "Llama 3.3 70B",
            "context_window": 131072,
            "supports_streaming": True,
            "supports_vision": False
        },
        {
            "id": "llama-3.1-8b-instant",
            "name": "Llama 3.1 8B Instant",
            "context_window": 131072,
            "supports_streaming": True,
            "supports_vision": False
        },
        {
            "id": "gemma2-9b-it",
            "name": "Gemma 2 9B",
            "context_window": 8192,
            "supports_streaming": True,
            "supports_vision": False
        }
    ]

    def __init__(self, api_key: str):
        self.client = Groq(api_key=api_key)

    def get_info(self):
        return {
            "id": "groq",
            "name": "Groq",
            "description": "Ultra-fast AI inference platform",
            "website": "https://groq.com",
            "supports_chat": True,
            "supports_streaming": True,
            "supports_vision": False
        }

    def get_models(self):
        return self.MODELS

    def test_connection(self, model: str, prompt: str):
        try:
            response = self.client.chat.completions.create(
                model=model,
                messages=[
                    {
                        "role": "user",
                        "content": prompt
                    }
                ]
            )

            return {
                "success": True,
                "response": response.choices[0].message.content
            }

        except Exception as e:
            return {
                "success": False,
                "error": str(e)
            }