function Home({ songs = [], playSong }) {

  return (
    <div>

      <h1>🎵 Home</h1>


      {
        songs.length === 0 ? (

          <h3>No songs available</h3>

        ) : (

          songs.map((song, index) => (

            <div key={index}>

              <h3>
                {song.title || song.trackName}
              </h3>


              <p>
                {song.artist || song.artistName}
              </p>


              <button 
                onClick={() => playSong && playSong(song)}
              >
                ▶ Play
              </button>


            </div>

          ))

        )
      }


    </div>
  );
}


export default Home;