from flask import Flask, jsonify
from flask_cors import CORS
import requests # type: ignore
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

print("DB_PASSWORD:", os.getenv("DB_PASSWORD"))

@app.route('/fetch-b', methods=['GET'])
def fetch_b():
    try:
        # response = requests.get('http://host.docker.internal:3002/fetch-a')
        # response = requests.get('http://server_b:3002/fetch-a')
        response = requests.get('http://server-a-service:3001/hello')
        
        return jsonify({"message": f"Service C received:-------> {response.text}"})
    except:
        return jsonify({"error": "Error connecting to Service B"}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3003)