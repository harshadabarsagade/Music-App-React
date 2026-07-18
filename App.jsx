import { useState } from "react";

function App() {

  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);


  const searchSongs = async () => {

    if (!query) return;

    try {

      const response = await fetch(
        `https://itunes.apple.com/search?term=${query}&media=music&limit=10`
      );

      const data = await response.json();

      setSongs(data.results);

    } catch (error) {

      console.log("Error fetching songs", error);

    }

  };


  const playSong = (song) => {

    setCurrentSong(song.previewUrl);

  };


  return (

    <div className="app">


      <h1>
        🎵 My Spotify
      </h1>


      <h2>
        Search Songs 🎧
      </h2>


      <div className="search-box">


        <input

          value={query}

          onChange={(e)=>setQuery(e.target.value)}

          placeholder="Search your favorite song..."

        />


        <button onClick={searchSongs}>
          Search
        </button>


      </div>



      <div className="song-container">


        {
          songs.map((song)=> (

            <div className="song-card" key={song.trackId}>


              <img

                src={song.artworkUrl100}

                alt="cover"

              />


              <div>


                <h3>
                  {song.trackName}
                </h3>


                <p>
                  {song.artistName}
                </p>


                <button
                  onClick={()=>playSong(song)}
                >
                  ▶ Play
                </button>


              </div>


            </div>


          ))
        }


      </div>



      <div className="player">


        {
          currentSong && (

            <audio

              src={currentSong}

              controls

              autoPlay

            />

          )
        }


      </div>


    </div>

  )

}


export default App;