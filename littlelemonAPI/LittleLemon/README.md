# Little Lemon API Project

This project is designed to provide a set of APIs for managing a restaurant's operations, including user management, menu management, and order processing.

## Project Structure

The project is structured as follows:

```
LittleLemon/
├── LittleLemon/            # Main Django project directory
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── LittleLemonAPI/        # Django app for the API
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── migrations/
│   │   └── __init__.py
│   ├── models.py
│   ├── serializers.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
├── db.sqlite3             # SQLite database file
├── manage.py              # Command-line utility for Django
├── notes.txt              # User credentials for the project
└── README.md              # Project documentation
```

## Installation

1. Clone the repository or download the project files.
2. Navigate to the project directory.
3. Create a virtual environment using pipenv:
   ```
   pipenv install
   ```
4. Activate the virtual environment:
   ```
   pipenv shell
   ```
5. Run the migrations to set up the database:
   ```
   python manage.py migrate
   ```

## Usage

- Start the development server:
  ```
  python manage.py runserver
  ```
- Access the API endpoints through your browser or a tool like Insomnia.

## Features

- Admin functionalities for managing users, menu items, and orders.
- User functionalities for registration, login, and order management.
- API endpoints for browsing menu items and categories.

## Submission

To submit your project, zip the entire project directory and include the `db.sqlite3` file. Also, ensure to provide the superuser’s username and password in the `notes.txt` file located in the project directory.