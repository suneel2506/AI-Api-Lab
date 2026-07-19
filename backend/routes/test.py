from fastapi import APIRouter
from utils.logger import logger

from models.request_models import TestRequest
from models.response_models import ApiResponse
from providers.provider_factory import ProviderFactory
from utils.timer import Timer

router = APIRouter()



@router.post("/test", response_model=ApiResponse)
def test_api(request: TestRequest):

    timer = Timer()
    timer.start()

    try:
        logger.info("=" * 50)
        logger.info("New AI Request")
        logger.info(f"Provider : {request.provider}")
        logger.info(f"Model    : {request.model}")
        
        

        provider = ProviderFactory.create_provider(
            request.provider,
            request.api_key
        )

        result = provider.test_connection(
            request.model,
            request.prompt
        )

        response_time = timer.stop()
        logger.info(f"Response Time : {response_time:.2f} sec")

        if not result["success"]:
            
            logger.error(result["error"])
            logger.info("=" * 50)
            return ApiResponse(
                success=False,
                message=result["error"],
                data=None
            )

        logger.info("Status : SUCCESS")
        logger.info("=" * 50)
        
        return ApiResponse(
            success=True,
            message="AI response generated successfully.",
            data={
                "provider": request.provider,
                "model": request.model,
                "response": result["response"],
                "response_time": f"{response_time:.2f} sec"
            }
        )

    except Exception as e:

        logger.exception("Unexpected Error")
        logger.info("=" * 50)

    return ApiResponse(
        success=False,
        message=str(e),
        data=None
    )