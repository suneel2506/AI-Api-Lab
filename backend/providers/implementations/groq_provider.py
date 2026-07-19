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
            import traceback

            print("\n" + "=" * 60)
            print("🔥 GROQ EXCEPTION")
            print("TYPE :", type(e))
            print("ERROR:", repr(e))

            print("\nTRACEBACK:")
            traceback.print_exc()

            if hasattr(e, "__cause__"):
                print("\nCAUSE:")
                print(repr(e.__cause__))

            if hasattr(e, "__context__"):
                print("\nCONTEXT:")
                print(repr(e.__context__))

            print("=" * 60 + "\n")

            return {
                "success": False,
                "error": str(e)
            }