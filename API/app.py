from flask import Flask, jsonify, request
from flask_cors import CORS
import math

app = Flask(__name__)
CORS(app)

@app.route('/triangleSides/<float:hipotenusa>;<float:sizeA>;<float:sizeB>', methods=['GET'])
def returnValueOfTriangleSide(hipotenusa, sizeA, sizeB):
    if (hipotenusa == 0):
        return {"size": "hipotenusa", "value": math.sqrt(sizeA*sizeA + sizeB*sizeB)}
    elif (sizeA == 0):
        return {"size": "cateto A", "value": math.sqrt((hipotenusa*hipotenusa) - (sizeB*sizeB))}
    elif (sizeB == 0):
        return {"size": "cateto B", "value": math.sqrt((hipotenusa*hipotenusa) - (sizeA*sizeA))}

# run API
app.run(port = 5000, host = 'localhost', debug = True)