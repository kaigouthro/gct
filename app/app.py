from flask import Flask, render_template
from gct import api
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder="frontend/build/static", template_folder="frontend/build")
cors = CORS(app)

@app.route("/")
def hello_world():
    print(api.run("app.py")[0].source)
    return render_template('index.html')

@app.route("/gct", methods=["POST"])
def get_gct():
    digraph, code = api.run("app.py")
    print({"digraph": digraph.source, "code" : code})
    return {"digraph": digraph.source, "code" : code}