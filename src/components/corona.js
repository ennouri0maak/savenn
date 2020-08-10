import React from 'react'

function corona() {
    function handleClick(e) {
      e.preventDefault();
      console.log('Le lien a été cliqué.');
    }
  
    return (
      <a href="http://localhost:3001/" onClick={handleClick}>
        Clique ici
      </a>
    );
  }
export default corona;