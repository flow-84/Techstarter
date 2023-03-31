from flask import Flask, render_template, request, redirect
from pymongo import MongoClient

app = Flask(__name__)

# Verbindung zur MongoDB-Datenbank herstellen
client = MongoClient('mongodb://root:example@localhost:27017/')
db = client['personendaten']

# Definieren der Personendaten-Kollektion
personen = db.personen

@app.route('/')
def index():
    return render_template('index.html')

@app.route("/add-friend")
def add_friend_form():
    return render_template('personenliste.html')

@app.route('/personenliste')
def personenliste():
    # Abfragen aller Personen aus der Datenbank
    alle_personen = list(personen.find())

    # Rückgabe der Liste als HTML-Seite
    return render_template('personenliste.html', personen=alle_personen)


@app.route('/submit', methods=['POST'])
def submit():
    # Extrahieren der Formulardaten
    vorname = request.form['vorname']
    nachname = request.form['nachname']
    alter = int(request.form['alter'])
    email = request.form['email']
    telefonnummer = int(request.form['telefonnummer'])

    # Einfügen der Daten in die Datenbank
    personen.insert_one({'vorname': vorname, 'nachname': nachname, 'email': email, 'telefonnummer': telefonnummer, 'alter': alter})

    # Weiterleitung auf die Startseite
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)