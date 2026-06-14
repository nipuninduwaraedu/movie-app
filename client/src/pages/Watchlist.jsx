import { useContext } from "react";
import { WatchlistContext } from "../context/WatchvistContext";
import MovieCard from "../components/MovieCard";

export default function watchlist() {
  const { watchlist, removeFromWatchlist } = useContext(WatchlistContext);

  return (
    <div className="container">
      <h1>My watchlist</h1>
      {watchlist.length === 0 && <p>No movies added yet</p>}

      <div className="grid">
        {watchlist.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
            <button
              onClick={() => removeFromWatchlist(movie.id)}
              style={{ marginTop: "10px" }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
