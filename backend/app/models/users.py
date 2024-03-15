from typing import TYPE_CHECKING

from fastapi_users_db_sqlalchemy import SQLAlchemyBaseUserTableUUID
from sqlalchemy import Column, String

from app.db import Base

if TYPE_CHECKING:
    from app.models.item import Item  # noqa: F401


class User(SQLAlchemyBaseUserTableUUID, Base):
    username = Column(String, nullable=True, unique=True)
    __tablename__ = "users"

    def __repr__(self):
        return f"User(id={self.id!r}, name={self.email!r})"
