# Exercícios de fixação - renderização de listas

- Crie uma aplicação React na sua máquina via create-react-app com o nome exercise-listing-components, crie os componentes Image e UserProfile mostrados abaixo. Além disso, altere o componente App conforme segue:
```javascript
// arquivo Image.js
import React from 'react';

class Image extends React.Component {
  render() {
    const { source, alternativeText } = this.props;
    return <img src={ source } alt={ alternativeText } />;
  }
}

export default Image;
```

```javascript
// arquivo UserProfile.js
import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <p> { user.name } </p>
        <p> { user.email } </p>
        <Image source={ user.avatar } alternativeText="User avatar" />
      </div>
    );
  }
}

export default UserProfile;
```

```javascript
// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const joao = {
      id: 102,
      name: 'João',
      email: 'joao@gmail.com',
      avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png'
    };

    const amelia = {
      id: 77,
      name: 'Amélia',
      email: 'amelia@gmail.com',
      avatar: 'https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png'
    };

    return (
      <div className="App">
        <UserProfile user={ joao } />
        <UserProfile user={ amelia } />
      </div>
    );
  }
}

export default App;
```
1- O componente App possui dois componentes UserProfile como filhos.
- Gere dinâmicamente os componentes utilizando a HOF `map`

2- A geração dinâmica dos componentes está incompleta, pois é preciso passar uma `key` para `UserProfile`. Ao inicializar o programa um `warning` será levantado pelo `React`, por estar faltando uma `key`
- Adicione uma `key` para `UserProfile` 