import React, { useState } from 'react';
import Axios from "axios";

function CadastroAluno({ onAlunoCadastrado }) {
  const [values, setValues] = useState({ nome: '', idade: '' });

  const handleChangeValues = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  };

  const handleClickButton = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/register", {
      nome: values.nome,
      idade: values.idade
    }).then((response) => {
      console.log(response);
      setValues({ nome: '', idade: '' });
      onAlunoCadastrado();
    }).catch((error) => {
      console.error(error);
    })
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
         <div className="bg-primary p-3 mt-3 p-4 bg-primary rounded">
          <h2>Cadastro de Aluno</h2>
          <form onSubmit={handleClickButton}>
            <div className="form-group">
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                className="form-control"
                id="nome"
                name='nome'
                value={values.nome}
                onChange={handleChangeValues}
              />
            </div>
            <div className="form-group">
              <label htmlFor="idade">Idade:</label>
              <input
                type="text"
                name='idade'
                className="form-control"
                id="idade"
                value={values.idade}
                onChange={handleChangeValues}
              />
            </div>
            <button type="submit" className="btn btn-danger">
              Cadastrar
            </button>
          </form>
          </div>    
        </div>
      </div>
     
    </div>
  );
}

export default CadastroAluno;
