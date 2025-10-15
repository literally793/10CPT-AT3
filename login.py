from flask import Flask, render_template, request, redirect, url_for, flash, session
from werkzeug.security import check_password_hash
import sqlite3

app = Flask(__name__)
app.secret_key = "key" 

def get_db_connection():
    conn = sqlite3.connect("data_source.db")
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        conn = get_db_connection()
        user = conn.execute("SELECT * FROM Users WHERE user = ?", (username,)).fetchone()
        conn.close()

        if user and check_password_hash(user['password'], password):
            session['user'] = user['user']
            session['first_name'] = user['first_name']
            session['last_name'] = user['last_name']
            session['email'] = user['email']
            return redirect(url_for('profile'))
        else:
            flash("Username or password is incorrect.", "error")

    return render_template('login.html')

@app.route('/profile')
def profile():
    if 'user' not in session:
        flash("Please log in first.", "error")
        return redirect(url_for('login'))

    return render_template(
        'profile.html',
        first_name=session['first_name'],
        last_name=session['last_name'],
    )

if __name__ == '__main__':
    app.run(debug=True)
