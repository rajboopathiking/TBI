from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
import numpy as np

model_path = "/home/godfather101/Downloads/DBI/MOdel/DBI_Model.h5"
model = load_model(model_path)

app = Flask(__name__)

CORS(app)

@app.route("/", methods=["GET"])
def home():
    return jsonify({"model": "DBI"})

@app.route("/api", methods=["POST"])
def predict():
    try:
        data = request.get_json(force=True)
        input = data["data"]
        prediction = model.predict(np.array([input]))
        result = np.argmax(prediction)
        if result == 1:
            return jsonify({'Prediction':"Abnormal Condition"})
        else:
            return jsonify({'Prediction':"Normal Condition"})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
