from typing import Any, List
from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException
from fastapi_users import FastAPIUsers
from fastapi_users.authentication import Authenticator
from starlette.responses import Response
from app.deps.db import CurrentAsyncSession
from app.repo.task import TaskRepo
from app.schemas.task import TaskCreate, TaskUpdate, TaskRead
from app.deps.request_params import ItemRequestParams
from app.models.task import Task
from app.models.users import User
from app.deps.users import fastapi_users

router = APIRouter(prefix="/tasks")


@router.get("/{task_id}", response_model=TaskRead)
async def get_task(
        task_id: int,
        response: Response,
        session: CurrentAsyncSession,
        user: User = Depends(fastapi_users.current_user())
) -> Any:
    task_repo: TaskRepo = TaskRepo(session)
    task = await task_repo.get_task_by_id(task_id)
    if not task:
        response.status_code = 404
        raise HTTPException(status_code=404, detail="Task not found")
    return task


@router.put("/{task_id}", response_model=TaskRead)
async def update_task(
        task_id: int,
        task_in: TaskUpdate,
        response: Response,
        session: CurrentAsyncSession,
        user: User = Depends(fastapi_users.current_user())
) -> Any:
    task_repo: TaskRepo = TaskRepo(session)
    task = await task_repo.update_task(task_id, task_in)
    return task


@router.get("", response_model=List[TaskRead])
async def get_user_tasks(
        response: Response,

        session: CurrentAsyncSession,
        user: User = Depends(fastapi_users.current_user())
) -> Any:
    task_repo: TaskRepo = TaskRepo(session)
    tasks = await task_repo.get_user_tasks(user.id)
    if not tasks:
        return []
    return tasks


@router.get("/category/{category_id}", response_model=List[TaskRead])
async def get_user_tasks_by_category(
        category_id: int,
        response: Response,
        session: CurrentAsyncSession,
        user: User = Depends(fastapi_users.current_user())
) -> Any:
    task_repo: TaskRepo = TaskRepo(session)
    tasks = await task_repo.get_user_tasks_by_category(user.id, category_id)
    if not tasks:
        return []
    return tasks


@router.post("", response_model=TaskRead, status_code=201)
async def create_task(
        task_in: TaskUpdate,
        session: CurrentAsyncSession,
        user: User = Depends(fastapi_users.current_user())
) -> Any:
    task_repo: TaskRepo = TaskRepo(session)
    task = Task(**task_in.model_dump(), user_id=user.id)
    result = await task_repo.create_task(task)
    return result


@router.delete("/{task_id}")
async def delete_task(
        task_id: int,
        session: CurrentAsyncSession,
        user: User = Depends(fastapi_users.current_user())
) -> Any:
    task_repo: TaskRepo = TaskRepo(session)
    task = await task_repo.delete_task(task_id)
    return task
