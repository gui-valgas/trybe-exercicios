import React from 'react';
import About from './About';
import SelectAge from './SelectAge';
import Name from './Name';
import LastName from './LastName';

class Form extends React.Component {
  state = {
    nome: '',
    sobrenome: '',
    descricao: '',
    idade: '',
    concordo: 'false',
    formularioComErros: true,
  }

  handleError = () => {
    const { nome, sobrenome, descricao, idade, concordo } = this.state;

    const error = [
      !nome.length,
      !sobrenome.length,
      !idade.length,
      !descricao.length,
      !concordo,
    ];

    const validation = error.every((e) => e !== true);
    this.setState({
      formularioComErros: !validation,
    })
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({ [name]: value }, this.handleError);
  }

  render() {
    return (
      <div>
        <h1>Tech Skills</h1>
        <form>
          <fieldset>
            <legend>Informações Pessoais</legend>
            <Name value={this.state.nome} handleChange={this.handleChange} />
            <LastName value={this.state.sobrenome} handleChange={this.handleChange} />
            <SelectAge value={this.state.idade} handleChange={this.handleChange} />

          </fieldset>

          <fieldset>
            <legend>Sobre você</legend>
            <About value={this.state.descricao} handleChange={this.handleChange} />

            <label>
              Adicione uma foto
              <input type="file" />
            </label>
            
          </fieldset>

          <fieldset>
            <legend>Termos de uso</legend>

            <label>
              Concordo com os termos da Trybe
              <input name="concordo" type="checkbox" value={this.state.concordo} onChange={this.handleChange} />
            </label>
          </fieldset>

        </form>
      </div>
    )
  }
}

export default Form;