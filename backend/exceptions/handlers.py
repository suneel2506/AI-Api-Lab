from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse

from models.response_models import ApiResponse


def register_exception_handlers(app: FastAPI):

    @app.exception_handler(Exception)
    async def global_exception_handler(request: Request, exc: Exception):

        response = ApiResponse(
            success=False,
            message="An unexpected error occurred.",
            data={
                "error": str(exc)
            }
        )

        return JSONResponse(
            status_code=500,
            content=response.model_dump()
        )