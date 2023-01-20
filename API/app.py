from flask import Flask, jsonify, request
import math

app = Flask(__name__)

triangleSides = [
    {
        'name': 'HIP',
        'value': ''
    },

    {
        'name': 'CO',
        'value': ''
    },

    {
        'name': 'CA',
        'value': ''
    }
]

# consult (every)


@app.route('/triangleSides/<float:hip>;<float:sizeA>;<float:sizeB>', methods=['GET'])
def getAll(hip, sizeA, sizeB):
    if (hip == 0):
        return jsonify(sizeA*sizeA + sizeB*sizeB)
    elif (sizeA == 0):
        return jsonify(math.sqrt(sizeB*sizeB - (hip*hip)))
    elif (sizeB == 0):
        return jsonify(math.sqrt(sizeA*sizeA - (hip*hip)))

# run API
app.run(port = 5000, host = 'localhost', debug = True)