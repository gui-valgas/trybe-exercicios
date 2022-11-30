import React from 'react';

class About extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    let error = undefined;

    if (value.length > 120) {
      error = "Capacidade maxima de caracteres atingida"
    }
    return (
      <label>
        Descreva suas habilidades:
        <textarea name="descricao" value={value} onChange={handleChange} 
        />
        <span>{error !== undefined ? error : ''}</span>
        <span>{!value ? 'Esta área precisa ser preenchida' : ''}</span>
      </label>
    )
  }
}

export default About;
