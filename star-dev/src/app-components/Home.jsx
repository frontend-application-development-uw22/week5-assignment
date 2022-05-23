import React from 'react'

const Home = () => {

  return (

    <div className="home">
      <h2>Welcome to Poké Dev</h2>
      <p>This app explores content from Pokémon Universe</p>
      <p>Click on a link above to start</p>
      <p>Data Source courtesy of The Pokemon API:</p>
      <br/>

      <div className="swapi">

        <div className="links">
          <a href="https://pokeapi.co/"
             style={{
               color: 'white',
               backgroundColor: '#f1356d',
               borderRadius: '8px',
               padding: 8,
               textDecoration: "none"

             }}
          >Pokémon API</a>

        </div>

      </div>

    </div>

  );
}

export default Home;
