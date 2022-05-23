import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <img src="https://fontmeme.com/permalink/220522/0bafee88ce1e973f69ae759e2b3b927b.png" alt="star-dev"/>
        <br />
        <br />
        <div className="links">
          <a href="/"
             style={{
               color: 'white',
               // backgroundColor: '#48C2F9',
               backgroundColor: '#386abb',
               borderRadius: '8px'
             }}
          >Home</a>
          <a href="/pokemons"
             style={{
               color: 'white',
               // backgroundColor: '#48C2F9',
               // backgroundColor: '#6200ea',
               backgroundColor: '#f1356d',
               borderRadius: '8px'
             }}
          >Pokemons</a>
          <a href="/items" style={{
            color: 'white',
            // backgroundColor: '#48C2F9',
            backgroundColor: '#44af35',
            borderRadius: '8px'
          }}>Items</a>
          <a href="/machines"
             style={{
               color: 'white',
               // backgroundColor: '#48C2F9',
               backgroundColor: '#fccf00',
               borderRadius: '8px'
             }}
          >Machines</a>
          <a href="/berries"
             style={{
               color: 'white',
               // backgroundColor: '#48C2F9',
               // backgroundColor: '#fccf00',
               backgroundColor: '#e62310',
               borderRadius: '8px'
             }}
          >Berries</a>



        </div>

      </div>

    </nav>
  );
}

export default Navbar;
