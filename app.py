from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)

# Secret key for session
app.secret_key = "friendship_secret_key_2026"

# Change this password anytime
PASSWORD = "friendsforever"


# ==========================
# Loading Page
# ==========================
@app.route("/")
def loading():
    return render_template("loading.html")


# ==========================
# Password Page
# ==========================
@app.route("/loginpage")
def loginpage():
    return render_template("login.html")


@app.route("/login", methods=["POST"])
def login():

    password = request.form.get("password")

    if password == PASSWORD:
        return redirect(url_for("name_page"))

    return render_template(
        "login.html",
        error="❌ Wrong Password! Try Again ❤️"
    )


# ==========================
# Name Page
# ==========================
@app.route("/name")
def name_page():
    return render_template("name.html")


@app.route("/save_name", methods=["POST"])
def save_name():

    username = request.form.get("username", "").strip()

    if not username:
        username = "My Friend"

    session["friend_name"] = username

    return redirect(url_for("welcome"))


# ==========================
# Welcome Page
# ==========================
@app.route("/welcome")
def welcome():

    username = session.get("friend_name", "My Friend")

    return render_template(
        "welcome.html",
        username=username
    )


# ==========================
# Question Page
# ==========================
@app.route("/question")
def question():

    username = session.get("friend_name", "My Friend")

    return render_template(
        "question.html",
        username=username
    )


# ==========================
# Lucky Gift Boxes
# ==========================
@app.route("/lucky_boxes")
def lucky_boxes():

    username = session.get("friend_name", "My Friend")

    return render_template(
        "lucky_boxes.html",
        username=username
    )


# ==========================
# Balloon Game
# ==========================
@app.route("/balloons")
def balloons():

    username = session.get("friend_name", "My Friend")

    return render_template(
        "balloons.html",
        username=username
    )


# ==========================
# Gift Page
# ==========================
@app.route("/gift")
def gift():

    username = session.get("friend_name", "My Friend")

    return render_template(
        "gift.html",
        username=username
    )


# ==========================
# Compliments
# ==========================
@app.route("/compliments")
def compliments():

    username = session.get("friend_name", "My Friend")

    return render_template(
        "compliments.html",
        username=username
    )


# ==========================
# Final Page
# ==========================
@app.route("/final")
def final():

    username = session.get("friend_name", "My Friend")

    return render_template(
        "final.html",
        username=username
    )


# ==========================
# Restart Journey
# ==========================
@app.route("/restart")
def restart():

    session.clear()

    return redirect(url_for("loading"))


if __name__ == "__main__":
    app.run(debug=True)