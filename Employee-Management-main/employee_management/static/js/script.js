document.addEventListener('DOMContentLoaded', function () {
    fetchEmployees();

    document.getElementById('employeeForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const employee = {
            name: document.getElementById('name').value,
            department: document.getElementById('department').value,
            salary: parseFloat(document.getElementById('salary').value),
            joining_date: document.getElementById('joiningDate').value,
        };
        createEmployee(employee);
    });
});

async function fetchEmployees() {
    const response = await fetch('/api/employees/');
    const employees = await response.json();
    const tbody = document.querySelector('#employeeTable tbody');
    tbody.innerHTML = '';
    employees.forEach(employee => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>${employee.joining_date}</td>
            <td>
                <button onclick="editEmployee(${employee.id})">Edit</button>
                <button onclick="deleteEmployee(${employee.id})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

async function createEmployee(employee) {
    await fetch('/api/employees/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employee),
    });
    fetchEmployees();
}

async function deleteEmployee(id) {
    await fetch(`/api/employees/${id}`, { method: 'DELETE' });
    fetchEmployees();
}

async function editEmployee(id) {
    const employee = {
        name: prompt('Enter new name'),
        department: prompt('Enter new department'),
        salary: parseFloat(prompt('Enter new salary')),
        joining_date: prompt('Enter new joining date (YYYY-MM-DD)'),
    };
    await fetch(`/api/employees/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employee),
    });
    fetchEmployees();
}