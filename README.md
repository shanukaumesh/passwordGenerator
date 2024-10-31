# Password Generator

## Getting Started

This project is a secure password generator built using React for the frontend and Flask for the backend.

### Prerequisites

- Node.js (v14.x or later)
- Python 3.x

### Backend Setup

1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```

2. Create a virtual environment:
    ```sh
    python -m venv venv
    ```

3. Activate the virtual environment:
    - On Windows:
        ```sh
        .\venv\Scripts\activate
        ```
    - On macOS/Linux:
        ```sh
        source venv/bin/activate
        ```

4. Install the required packages:
    ```sh
    pip install -r requirements.txt
    ```

5. Run the Flask application:
    ```sh
    flask run
    ```

### Frontend Setup

1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm run dev
    ```

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. Use the interface to generate a secure password by specifying your preferences.
3. Click on the generated password box to automatically copy the password to your clipboard.

## Features

- Adjustable password length.
- Options to include uppercase letters, numbers, and symbols.
- Automatically copy generated password to clipboard on click.

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request for improvements or new features.
