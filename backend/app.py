from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import string

app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route('/generate', methods=['POST'])
def generate_password():
    data = request.json
    length = data.get('length', 12)
    include_uppercase = data.get('includeUppercase', False)
    include_numbers = data.get('includeNumbers', False)
    include_symbols = data.get('includeSymbols', False)

    # Character pool for password generation
    characters = string.ascii_lowercase
    if include_uppercase:
        characters += string.ascii_uppercase
    if include_numbers:
        characters += string.digits
    if include_symbols:
        characters += string.punctuation

    if length < 1:
        return jsonify({"error": "Password length must be at least 1"}), 400

    password = ''.join(random.choice(characters) for _ in range(length))
    return jsonify({"password": password})

if __name__ == '__main__':
    app.run(debug=True)
