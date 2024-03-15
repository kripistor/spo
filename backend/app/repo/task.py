import logging
import uuid
from typing import List

from sqlalchemy import select, delete

from app.models.task import Task
from app.repo.repo import SQLAlchemyRepo
from app.schemas.task import TaskCreate, TaskUpdate, TaskRead


class TaskRepo(SQLAlchemyRepo):
    async def get_user_tasks(self, user_id: uuid.UUID) -> List[Task]:
        return (
            (
                await self.session.execute(
                    select(Task).filter(Task.user_id == user_id)
                )
            ).scalars().all()
        )

    async def get_task_by_id(self, task_id: int) -> Task:
        return (
            (
                await self.session.execute(
                    select(Task).filter(Task.id == task_id)
                )
            ).scalar()
        )

    async def create_task(self, task_in: Task) -> Task:
        try:
            self.session.add(task_in)
            await self.session.commit()
            return task_in
        except Exception as e:
            await self.session.rollback()

    async def delete_task(self, task_id: int) -> None:
        try:
            await self.session.execute(delete(Task).where(Task.id == task_id))
            await self.session.commit()
        except Exception as e:
            await self.session.rollback()
            logging.error(f"Error deleting task: {e}")

    async def update_task(self, task_id, task_in: TaskUpdate) -> Task:
        task: Task = await self.get_task_by_id(task_id)
        update_data = task_in.model_dump(exclude_unset=True)
        for field, value in update_data.items():
            setattr(task, field, value)
        await self.session.commit()
        return task
