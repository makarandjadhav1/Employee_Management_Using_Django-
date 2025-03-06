from django.db import models
from ninja import Schema
from datetime import date
class Employee(models.Model):
    name = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    joining_date = models.DateField()

    def __str__(self):
        return self.name
    
class EmployeeIn(Schema):
    name: str
    department: str
    salary: float
    joining_date: date

class EmployeeOut(Schema):
    id: int
    name: str
    department: str
    salary: float
    joining_date: date