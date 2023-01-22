from flask import Flask, jsonify, request
from flask_cors import CORS
import math

app = Flask(__name__)
CORS(app)

@app.route('/triangleSides/<float:hip>;<float:sizeA>;<float:sizeB>', methods=['GET'])
def getAll(hip, sizeA, sizeB):
    if (hip == 0):
        return {"size": "hip", "value": math.sqrt(sizeA*sizeA + sizeB*sizeB)}
    elif (sizeA == 0):
        return {"size": "A", "value": math.sqrt((hip*hip) - (sizeB*sizeB))}
    elif (sizeB == 0):
        return {"size": "B", "value": math.sqrt((hip*hip) - (sizeA*sizeA))}

# run API
app.run(port = 5000, host = 'localhost', debug = True)