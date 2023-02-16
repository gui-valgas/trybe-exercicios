import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import filmContext from './context/FilmsContext';

import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [films, setFilms] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    try {
      fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations')
        .then((result) => result.json())
        .then((data) => setFilms(data));
    } catch (e) {
      console.log(e);
    }
  }, []);

  function toggleFavorite(item) {
    const alreadyFavorite = favorites.find((fav) => fav.id === item.id);
    if (alreadyFavorite) {
      const newFav = favorites.filter((fav) => fav.id !== item.id);
      setFavorites(newFav);
    } else {
      setFavorites([...favorites, item]);
    }
  }

  const context = {
    films,
    favorites,
    toggleFavorite,
  };

  return (
    <filmContext.Provider value={ context }>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/favorites" component={ Favorites } />
      </Switch>
    </filmContext.Provider>
  );
}

export default App;
