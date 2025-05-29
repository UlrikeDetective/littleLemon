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
   python3 -m venv lemon_env
   source lemon_env/bin/activate
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
If there are issus with migrations, you can reset the database by deleting the `db.sqlite3` file and running the migrations again or 

find . -name "*.pyc" -delete
find . -name "__pycache__" -type d -exec rm -r {} +
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
  
## After running python manage.py makemigrations and python manage.py migrate, your next steps are:

Create a superuser (admin account) so you can access the Django admin panel:

Follow the prompts to set a username, email, and password.

(Optional) Load initial data if you have fixtures or want to pre-populate your database.

Start the development server:

Access the admin panel in your browser at http://127.0.0.1:8000/admin/ and log in with your superuser credentials.

Test your API endpoints at:

http://127.0.0.1:8000/api/menu-items/
http://127.0.0.1:8000/api/categories/
http://127.0.0.1:8000/api/orders/

and look at Open your browser and go to:
http://127.0.0.1:8000/admin/

Document any created users and passwords in notes.txt for submission.




## Submission

To submit your project, zip the entire project directory and include the `db.sqlite3` file. Also, ensure to provide the superuser’s username and password in the `notes.txt` file located in the project directory.