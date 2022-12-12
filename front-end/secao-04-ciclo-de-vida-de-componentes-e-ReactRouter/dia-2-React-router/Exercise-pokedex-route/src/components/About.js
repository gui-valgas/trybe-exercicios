import React from 'react';

class About extends React.Component {
  render() {
    const IMG_URL = 'https://archives.bulbagarden.net/media/upload/8/86/Gen_I_Pok%C3%A9dex.png';
    return (
      <section>
        <h1>About Pokédex</h1>
        <section>
          <p>
            The Pokédex is an invaluable tool to Trainers in the Pokémon world.
            It gives information about all Pokémon in the world
            that are contained in its database
          </p>
          <img
            src={ IMG_URL }
            alt="Pokedex"
          />
        </section>
      </section>
    );
  }
}

export default About;
