# Employee Management System using Django

Welcome to the **Employee Management System**! This is a web application built using Django that allows you to manage employee records efficiently. You can add, delete, and view employee details such as their name, salary, and date of joining. The system is designed to be user-friendly and visually appealing, with a clean and modern interface.

---

## Features

- **Add Employee**: Add new employees with details like name, salary, and date of joining.
- **Delete Employee**: Remove employees from the system.
- **View Employees**: View a list of all employees with their details.
- **Responsive Design**: The application is fully responsive and works seamlessly on all devices.
- **Attractive UI**: Built with modern HTML and CSS for an engaging user experience.

---

## Technologies Used

- **Backend**: Django (Python)
- **Frontend**: HTML, CSS, Bootstrap
- **Database**: SQLite (default Django database)

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/employee-management-system.git
   cd employee-management-system
   ```

2. **Create a Virtual Environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run Migrations**:
   ```bash
   python manage.py migrate
   ```

5. **Create a Superuser** (Optional):
   ```bash
   python manage.py createsuperuser
   ```

6. **Run the Development Server**:
   ```bash
   python manage.py runserver
   ```

7. **Access the Application**:
   Open your browser and go to `http://127.0.0.1:8000/`.

---

## Project Structure

```
employee-management-system/
├── manage.py
├── requirements.txt
├── employee_app/
│   ├── migrations/
│   ├── templates/
│   │   ├── base.html
│   │   ├── add_employee.html
│   │   ├── delete_employee.html
│   │   ├── employee_list.html
│   ├── admin.py
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   ├── forms.py
├── static/
│   ├── css/
│   │   ├── styles.css
│   ├── images/
├── README.md
```

---

## Screenshots

### Home Page
![Home Page](screenshots/home.png)

### Add Employee
![Add Employee](screenshots/add_employee.png)

### Employee List
![Employee List](screenshots/employee_list.png)

---

## Code Examples

### HTML Template (`base.html`)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Management System</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="{% static 'css/styles.css' %}">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="{% url 'home' %}">Employee Management</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="{% url 'add_employee' %}">Add Employee</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{% url 'employee_list' %}">View Employees</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container mt-4">
        {% block content %}
        {% endblock %}
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### CSS (`styles.css`)
```css
body {
    background-color: #f8f9fa;
    font-family: 'Arial', sans-serif;
}

.navbar {
    margin-bottom: 20px;
}

.container {
    max-width: 1200px;
}

.table {
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.btn-primary {
    background-color: #007bff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
}

.btn-danger {
    background-color: #dc3545;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
}
```

---

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For any questions or feedback, feel free to reach out:

- **Email**: your-email@example.com
- **GitHub**: [your-username](https://github.com/your-username)

---

Thank you for using the Employee Management System! 🚀
