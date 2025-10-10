from flask import Flask
from flask import render_template
from flask import request
import database_manager as dbHandler

app = Flask(__name__)


@app.route("/index.html", methods=["GET"])
@app.route("/", methods=["POST", "GET"])
def index():
        data = dbHandler.listExtension()
        return render_template('/index.html', content=data)


@app.route("/profile.html", methods=["GET"])
@app.route("/", methods=["POST", "GET"])
def profile():
    data = dbHandler.listExtension()
    return render_template('/profile.html', content=data)


@app.route("/messages.html", methods=["GET"])
@app.route("/", methods=["POST", "GET"])
def messages():
    data = dbHandler.listExtension()
    return render_template('/messages.html', content=data)


@app.route("/home.html", methods=["GET"])
@app.route("/", methods=["POST", "GET"])
def home():
    data = dbHandler.listExtension()
    return render_template('/home.html', content=data)


@app.route("/login.html", methods=["GET"])
@app.route("/", methods=["POST", "GET"])
def login():
    data = dbHandler.listExtension()
    return render_template('/login.html', content=data)


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5100)

