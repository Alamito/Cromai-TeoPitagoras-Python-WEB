from flask import Flask, jsonify, request

app = Flask(__name__)

triangleValues = [
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

# Consult (every)


@app.route('/triangleValues')
def getAll():
    return jsonify(triangleValues)

app.run(port = 5000, host = 'localhost', debug = True)