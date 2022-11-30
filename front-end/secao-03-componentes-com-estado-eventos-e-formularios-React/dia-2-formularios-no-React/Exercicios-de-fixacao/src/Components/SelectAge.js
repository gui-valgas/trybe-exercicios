import React from 'react';

class SelectAge extends React.Component {
  render() {
    const { value, handleChange } = this.props
    return (
      <>
        <label>
          Idade:
          <select
            id="idade"
            name="idade"
            value={value}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            <option value="adult">Maior que 18</option>
            <option value="underage">Menor que 18</option>
          </select>
        </label>
      </>
    )
  }
}

export default SelectAge;