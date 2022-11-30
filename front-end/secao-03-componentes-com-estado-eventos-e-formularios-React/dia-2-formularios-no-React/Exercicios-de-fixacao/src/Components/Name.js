import React from 'react';

class Name extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    const maxCaracteres = 50;

    return (
      <label htmlFor="name">
        Nome:
        <input name="nome" type="text" value={value} onChange={handleChange} />
        {!value ? 'O nome precisa ser preenchido' : ''}
        {value.length > maxCaracteres ? 'O nome atingiu o limite de caracteres' : ''}
      </label>
    )
  }
}

export default Name;