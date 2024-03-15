from fastapi import APIRouter
from app.api.v1 import(
    task,
)
api_router = APIRouter()

api_router.include_router(task.router, tags=["task"])



