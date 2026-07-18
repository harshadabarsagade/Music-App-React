function Favorites({ favorites }) {


  return (

    <div>

      <h1>Favorites</h1>


      {
        favorites.map((song,index)=>(

          <h3 key={index}>
            {song.title}
          </h3>

        ))
      }


    </div>

  );

}


export default Favorites;