import { useEffect, useState } from "react";
import "./App.css";

function Movie() {
  const genres = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLOading] = useState(false);
  const [name, setName] = useState("avengers");
  const [movieGenre, setMovieGenre] = useState([]);
  useEffect(() => {
    getData();
  }, [name]);

  const getData = async () => {
    setLOading(true);
    try {
      const movie = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=1f71cb96b8235a5dec120ab5a57a7812&query=${name}
            `
      );
      const res = await movie.json();

      setData(res.results);

      setLOading(false);
    } catch (error) {
      setError(true);
      setError("faild to fetch data");
    }
  };

  // readmore
  // const handleMovie = (e, movie) => {
  //   e.preventDefault();
  //   console.log(movie);
  // };
  // genre_ids

  // const newdata= [data.length && data[0].genre_ids]
const he=[]
  useEffect(() => {
    const newdata = [12, 28, 16];
    newdata.map((r) => {
      const movie = genres.find((movies) => {
        return movies.id === r;
      });
     he.push(movie);
    });
  }, []);

  useEffect(() => {
    setMovieGenre(he)
  
  }, [])

    console.log( movieGenre.length && movieGenre)
    console.log( data.length && data[1])
  // console.log(movieGenre);
  // const movie = genres.find((movies) => {
  //   return movies.id!==
  // })
  // console.log(movie)

  return (
    <>
      {/* {data.filter((datas) => {
        console.log(datas.genre_ids)
      })} */}
      <div className="input-field">
        <h2>Enter movie here:</h2>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {name.length <= 0 && (
        <h2
          style={{
            color: "red",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "1em",
          }}
        >
          Please enter somthing
        </h2>
      )}
      {loading && <h1>loading...</h1>}
      <h1>{error}</h1>
      <div className="movies_body">
        {data.length <= 0 ? (
          <h1>Movie not found</h1>
        ) : (
          data
            .filter((movies) => {
              return movies.vote_average !== 0 && movies.poster_path !== null;
            })
            .map((movies) => (
              <>
                <div key={movies.id} className="movie_card">
                  <img
                    className="movie_img"
                    src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`}
                    alt="this is done"
                  />

                  <h3>
                    {movies.title.length <= 25
                      ? movies.title.slice(0.15)
                      : `${movies.title.slice(0, 15)}...`}{" "}
                    <span
                      className={`${
                        movies.vote_average > 7 ? "vote-green" : "vote-orange"
                      } `}
                    >
                      {movies.vote_average}
                    </span>
                  </h3>
                </div>
              </>
            ))
        )}
      </div>
    </>
  );
}

export default Movie;
