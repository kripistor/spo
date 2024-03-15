import uuid
from typing import Optional, List

from pydantic import BaseModel, ConfigDict


class TaskCreate(BaseModel):
    text: str
    category_id: int
    is_completed: Optional[bool] = False


class TaskUpdate(TaskCreate):
    pass


class TaskRead(TaskCreate):
    id: int
    is_completed: bool
