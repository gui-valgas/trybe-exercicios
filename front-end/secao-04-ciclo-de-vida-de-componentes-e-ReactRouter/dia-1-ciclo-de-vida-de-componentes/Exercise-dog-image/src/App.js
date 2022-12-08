import React from 'react';
import './App.css';
// first commit
class App extends React.Component {
  state = {
    image: '',
    isLoading: true,
  };

  componentDidMount() {
    const storageImage = localStorage.getItem('image');
    if (storageImage) {
      this.setState({
        image: storageImage,
        isLoading: false });
    } else {
      this.fetchAPI();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !nextState.image.includes('terrier');
  }

  componentDidUpdate() {
    const { image } = this.state;
    localStorage.setItem('image', image);

    const breed = image.split('/')[4];
    alert(breed);
  }

  fetchAPI = () => {
    const API_URL = 'https://dog.ceo/api/breeds/image/random';

    fetch(API_URL)
      .then((result) => result.json())
      .then((data) => this.setState({
        image: data.message,
        isLoading: false,
      }));
  };

  render() {
    const { image, isLoading } = this.state;
    const breed = image.split('/')[4];

    if (isLoading) {
      return <span>Loading...</span>;
    }
    return (
      <div className="main-content">
        <h1 className="title">Dogs 🐕‍🦺</h1>
        <button
          type="button"
          onClick={ this.fetchAPI }
          className="btn"
        >
          Novo doguinho!
        </button>
        <div className="img-container">
          <img src={ image } alt="Doguinho aleatório" />
        </div>
        <div className="breed">
          <h2>{breed}</h2>
        </div>
      </div>
    );
  }
}

export default App;
