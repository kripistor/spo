import uuid

from fastapi_users import schemas


class UserRead(schemas.BaseUser[uuid.UUID]):
    username: str
    pass


class UserCreate(schemas.BaseUserCreate):
    username: str
    pass


class UserUpdate(schemas.BaseUserUpdate):
    pass