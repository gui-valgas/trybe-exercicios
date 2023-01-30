import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class FormDataDisplay extends Component {
  render() {
    const {
      name,
      email,
      cpf,
      address,
      city,
      uf,
      curriculum,
      job,
      description,
    } = this.props;
    return (
      <section>
        <h1>Dados Enviados</h1>
        <div>
          Nome:
          { name }
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { address }
        </div>
        <div>
          Cidade:
          { city }
        </div>
        <div>
          Estado:
          { uf }
        </div>
        <div>
          Currículo:
          { curriculum }
        </div>
        <div>
          Cargo:
          { job }
        </div>
        <div>
          Descrição do cargo:
          { description }
        </div>
      </section>
    );
  }
}

FormDataDisplay.propTypes = {
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  job: propTypes.string.isRequired,
  curriculum: propTypes.string.isRequired,
  uf: propTypes.string.isRequired,
  city: propTypes.string.isRequired,
  address: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  cpf: propTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.personal,
  ...state.profissional,
});

export default connect(mapStateToProps)(FormDataDisplay);
