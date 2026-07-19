from fastapi import APIRouter

from models.response_models import ApiResponse
from providers.provider_factory import ProviderFactory

router = APIRouter()

@router.get("/crash")
def crash():

    raise Exception("Testing Global Exception Handler")

@router.get("/health", response_model=ApiResponse)
def health():

    return ApiResponse(
        success=True,
        message="Backend is running.",
        data={
            "status": "online"
        }
    )


@router.get("/providers", response_model=ApiResponse)
def get_providers():

    providers = []

    for provider_name in ProviderFactory.get_provider_names():

        provider = ProviderFactory.create_provider(
            provider_name,
            api_key=""
        )

        providers.append(provider.get_info())

    return ApiResponse(
        success=True,
        message="Providers fetched successfully.",
        data=providers
    )


@router.get("/providers/{provider}/models", response_model=ApiResponse)
def get_models(provider: str):

    ai_provider = ProviderFactory.create_provider(
        provider,
        api_key=""
    )

    return ApiResponse(
        success=True,
        message="Models fetched successfully.",
        data=ai_provider.get_models()
    )