from providers.implementations.groq_provider import GroqProvider


class ProviderFactory:

    PROVIDERS = {
        "groq": GroqProvider
    }

    @classmethod
    def create_provider(cls, provider: str, api_key: str):

        provider = provider.lower()

        if provider not in cls.PROVIDERS:
            raise ValueError(f"Unsupported provider: {provider}")

        return cls.PROVIDERS[provider](api_key)

    @classmethod
    def get_provider_names(cls):
        return list(cls.PROVIDERS.keys())