from ninja import NinjaAPI
from employee.models import Employee ,EmployeeIn, EmployeeOut

api = NinjaAPI()

@api.post("/employees/", response=EmployeeOut)
def create_employee(request, payload: EmployeeIn):
    employee = Employee.objects.create(**payload.dict())
    return employee

@api.get("/employees/{employee_id}", response=EmployeeOut)
def get_employee(request, employee_id: int):
    employee = Employee.objects.get(id=employee_id)
    return employee

@api.get("/employees/", response=list[EmployeeOut])
def list_employees(request):
    return Employee.objects.all()

@api.put("/employees/{employee_id}", response=EmployeeOut)
def update_employee(request, employee_id: int, payload: EmployeeIn):
    employee = Employee.objects.get(id=employee_id)
    for attr, value in payload.dict().items():
        setattr(employee, attr, value)
    employee.save()
    return employee

@api.delete("/employees/{employee_id}")
def delete_employee(request, employee_id: int):
    Employee.objects.filter(id=employee_id).delete()
    return {"success": True}