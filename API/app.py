from flask import Flask, jsonify, request

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
@app.route('/triangleSides', methods=['GET'])
def getAll():
    return jsonify(triangleSides)

# edit
@app.route('/triangleSides/<string:name>', methods=['PUT'])
def editarValueByName(side):
    valueChanged = request.get_json()
    return changeValue(valueChanged, side)

def changeValue(value, side):
    for index, side in enumerate(triangleSides):
        if side.get('side') == side:
            triangleSides[index].update(value)
            return jsonify(triangleSides[index])

# run API
app.run(port = 5000, host = 'localhost', debug = True)