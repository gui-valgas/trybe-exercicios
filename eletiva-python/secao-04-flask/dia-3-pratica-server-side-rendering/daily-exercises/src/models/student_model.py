from .db import db
from models.abstract_model import AbstractModel


class StudentModel(AbstractModel):
    _collection = db['students']

    def __init__(self, json_data):
        super().__init__(json_data)

    def to_dict(self):
        return {
            "nome": self.data["nome"],
            "matricula": self.data["matricula"],
            "id": self.data["_id"]
        }
