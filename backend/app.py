from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import psycopg2
from datetime import datetime

# create and configure the app
app = Flask(__name__)

connection = psycopg2.connect(database='cs348', user='ilhoonlee', host='localhost', port='5432')
cursor = connection.cursor()

with app.app_context():
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://ilhoonlee@localhost:5432/cs348'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db = SQLAlchemy(app)

    movie_genres = db.Table('movie_genres',
        db.Column('movie_id', db.Integer, db.ForeignKey('movies.id'), primary_key=True),
        db.Column('genre_id', db.Integer, db.ForeignKey('genres.id'), primary_key=True)
    )

    class Movie(db.Model):
        __tablename__ = 'movies'
        id = db.Column(db.Integer, primary_key=True)
        title = db.Column(db.String, nullable=False)
        director = db.Column(db.String, nullable=False)
        release_date = db.Column(db.Date, nullable=False)
        rating = db.Column(db.Float, nullable=False)
        genres = db.relationship('Genre', secondary=movie_genres, back_populates='movies')

        def __init__(self, title, director, release_date, rating):
            self.title = title
            self.director = director
            self.release_date = release_date
            self.rating = rating

        def insert(self):
            db.session.add(self)
            db.session.commit()
        
        def update(self):
            db.session.commit()

        def delete(self):
            db.session.delete(self)
            db.session.commit()

        def __repr__(self):
            return f'<Movie {self.id} {self.title}>'

        def format(self):
            return {
                'id': self.id,
                'title': self.title,
                'director': self.director,
                'release_date': self.release_date,
                'genres': [genre.name for genre in self.genres],
                'rating': self.rating
            }
        
    class Genre(db.Model):
        __tablename__ = 'genres'
        id = db.Column(db.Integer, primary_key=True)
        name = db.Column(db.String, nullable=False)
        movies = db.relationship('Movie', secondary=movie_genres, back_populates='genres')

        def __init__(self, name):
            self.name = name

        def insert(self):
            db.session.add(self)
            db.session.commit()
        
        def update(self):
            db.session.commit()

        def delete(self):
            db.session.delete(self)
            db.session.commit()

        def __repr__(self):
            return f'<Genre {self.id} {self.name}>'

        def format(self):
            return {
                'id': self.id,
                'name': self.name
            }
        
    db.create_all()

CORS(app)

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS')
    return response

@app.route('/')
def index():
    return 'Ilhoon Lee'

@app.route('/movies')
def get_movies():
    movies = Movie.query.all()
    return jsonify({
        'success': True,
        'movies': [movie.format() for movie in movies]
    })

@app.route('/movies/<int:movie_id>')
def get_movie(movie_id):
    movie = Movie.query.get(movie_id)
    return jsonify({
        'success': True,
        'movie': movie.format()
    })

@app.route('/movies', methods=['POST'])
def create_movie():
    title = request.json.get('title')
    director = request.json.get('director')
    releaseDate = request.json.get('release_date')
    genres = request.json.get('genres')
    rating = request.json.get('rating')

    movie = Movie(title=title, director=director, release_date=releaseDate, rating=rating)

    for genre in genres:
        genre_obj = Genre.query.filter_by(name=genre).one_or_none()
        if genre_obj is None:
            genre_obj = Genre(name=genre)
            genre_obj.insert()
        movie.genres.append(genre_obj)
    
    movie.insert()

    return jsonify({
        'success': True,
        'movie': movie.format()
    })

@app.route('/movies/<int:movie_id>', methods=['PATCH'])
def update_movie(movie_id):
    movie = Movie.query.get(movie_id)

    title = request.json.get('title')
    director = request.json.get('director')
    release_date = request.json.get('release_date')
    genres = request.json.get('genres')
    rating = request.json.get('rating')

    movie.title = title
    movie.director = director
    movie.release_date = release_date
    movie.rating = rating
    movie.genres.clear()

    for genre in genres:
        genre_obj = Genre.query.filter_by(name=genre).one_or_none()
        if genre_obj is None:
            genre_obj = Genre(name=genre)
            genre_obj.insert()
        if genre_obj not in movie.genres:
            movie.genres.append(genre_obj)

    movie.update()

    return jsonify({
        'success': True,
        'movie': movie.format()
    })

@app.route('/movies/<int:movie_id>', methods=['DELETE'])
def delete_movie(movie_id):
    movie = Movie.query.get(movie_id)
    movie.delete()

    return jsonify({
        'success': True,
        'delete': movie_id
    })

@app.route('/directors')
def get_directors():
    directors = db.session.query(Movie.director).distinct().all()

    return jsonify({
        'success': True,
        'directors': [director[0] for director in directors]
    })

@app.route('/genres')
def get_genres():
    genres = Genre.query.all()

    return jsonify({
        'success': True,
        'genres': [genre.name for genre in genres]
    })

@app.route('/report', methods=['POST'])
def get_report():
    director = request.json.get('director')
    genres = request.json.get('genre')
    release_sdate = request.json.get('releaseSDate')
    release_edate = request.json.get('releaseEDate')
    min_rating = request.json.get('minRating')
    max_rating = request.json.get('maxRating')

    genres = ', '.join([f'\'{x}\'' for x in genres])

    release_sdate = datetime.strptime(release_sdate, '%m/%d/%Y').date()
    release_edate = datetime.strptime(release_edate, '%m/%d/%Y').date()

    query = (
        "SELECT * " + 
        "FROM movie_genres " +
        "JOIN movies ON movie_genres.movie_id = movies.id " +
        "JOIN genres ON movie_genres.genre_id = genres.id "
    )

    condition_query = ""
    if director != 'All':
        condition_query += f"movies.director = '{director}'"
    if len(genres) > 0:
        if condition_query != "":
            condition_query += " AND "
        condition_query += f"genres.name IN ({genres})"
    if release_sdate != release_edate:
        if condition_query != "":
            condition_query += " AND "
        condition_query += f"movies.release_date BETWEEN '{release_sdate}' AND '{release_edate}'"
    if min_rating > 1:
        if condition_query != "":
            condition_query += " AND "
        condition_query += f"movies.rating >= {min_rating}"
    if max_rating < 10:
        if condition_query != "":
            condition_query += " AND "
        condition_query += f"movies.rating <= {max_rating}"
    if condition_query != "":
        condition_query = "WHERE " + condition_query

    query += condition_query

    cursor.execute(query)
    record = cursor.fetchall()
    print(record)

    res = []
    for r in record:
        if any(r[0] == x['id'] for x in res):
            for x in res:
                if x['id'] == r[0]:
                    x['genres'].append(r[8])
        else:
            res.append({
                'id': r[0],
                'title': r[3],
                'director': r[4],
                'release_date': r[5],
                'genres': [r[8]],
                'rating': r[6]
            })
    
    print(res)

    return jsonify({
        'success': True,
        'movies': res
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8081, debug=True)