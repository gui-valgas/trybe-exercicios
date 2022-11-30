import React from 'react';

class LastName extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        Sobrenome:
        <input name="sobrenome" type="text" value={value} onChange={handleChange} />
      </label>
    )
  }
}

export default LastName;