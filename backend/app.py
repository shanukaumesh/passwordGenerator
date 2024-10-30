# backend/app.py

from flask import Flask, request, jsonify
import random
import string
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from the frontend

@app.route("/generate-password", methods=["POST"])
def generate_password():
    data = request.get_json()
    length = data.get("length", 12)
    use_uppercase = data.get("useUppercase", True)
    use_lowercase = data.get("useLowercase", True)
    use_numbers = data.get("useNumbers", True)
    use_symbols = data.get("useSymbols", True)

    char_set = ""
    if use_uppercase:
        char_set += string.ascii_uppercase
    if use_lowercase:
        char_set += string.ascii_lowercase
    if use_numbers:
        char_set += string.digits
    if use_symbols:
        char_set += "!@#$%^&*()_+-=[]{}|;:,.<>?"

    if not char_set:
        return jsonify({"password": ""})

    password = "".join(random.choice(char_set) for _ in range(length))
    return jsonify({"password": password})

if __name__ == "__main__":
    app.run(debug=True)
