import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { thunkChar } from './redux/actions';
import CharacterCard from './components/CharacterCard';

class App extends React.Component {
  state = {
    character: ''
  }

  render() {
    const { character } = this.state;
    const { dispatch } = this.props;
    return (
      <>
        <input
          type="text"
          onChange={ ({ target }) => this.setState({ character: target.value }) }
          value={ character }
        />
        <button
          type="button"
          onClick={ () => dispatch(thunkChar(character)) }
        >
          Search
        </button>
        <CharacterCard />
      </>
    );
  }
}

export default connect()(App);
