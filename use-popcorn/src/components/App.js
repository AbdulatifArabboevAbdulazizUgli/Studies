import { useState, useEffect } from "react";
import "../App.css";
import NavBar from "./NavBar";
import Main from "./main";
import MoviesBox from "./MoviesBox";
import NumResults from "./NumResults";
import ListBox from "./ListBox";
import Summary from "./Summary";
import WatchedMovieList from "./WatchedMovieList";
import Loader from "./Loader";
import Search from "./Search";
import ErrorMessage from "./ErrorMessega";
import MovieDetails from "./MovieDetails";

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster: "logo192.png",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Bact to the future",
    Year: "1985",
    Poster: "logo192.png",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];
const APIKey = "6daf3dc4";
function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [watched, setWatched] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState("");

  function handleSelectedMovie(id) {
    setSelectedId(id);
  }
  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }
  function handleDeleteWatched(id) {
    setWatched((movie) => watched.filter((movie) => movie.imdbID !== id));
  }
  function handleCloseMovie() {
    setSelectedId("");
  }

  useEffect(
    function () {
      const fetchMovies = async function () {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${APIKey}&s=${query}`
          );
          const data = await res.json();
          if (data.Response === "False") throw new Error(data.Error);

          setMovies(data.Search);
          setIsLoading();
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };
      if (query.length < 3) {
        setMovies([]);
        return;
      }

      fetchMovies();
    },
    [query]
  );
  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <ListBox>
          {isLoading && <Loader />}
          {!isLoading && error && <ErrorMessage message={error} />}
          {!isLoading && !error && (
            <MoviesBox movies={movies} onSelectMovie={handleSelectedMovie} />
          )}
        </ListBox>

        <ListBox>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <Summary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </ListBox>
      </Main>
    </>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////

export default App;
