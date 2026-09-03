import React, { useState, useEffect } from 'react';
import Axios from "axios";

function ListaAlunos({ atualizarLista }) {
  const [alunos, setAlunos] = useState([]);
  const [editingAluno, setEditingAluno] = useState(null);
  const [editedData, setEditedData] = useState({ nome: '', idade: '' });

  useEffect(() => {
    Axios.get("http://localhost:3001/listar")
      .then((response) => {
        setAlunos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [atualizarLista]);

  const handleExcluirAluno = (alunoId) => {
    Axios.delete(`http://localhost:3001/excluir/${alunoId}`)
      .then((response) => {
        setAlunos((prevAlunos) => prevAlunos.filter((aluno) => aluno.id !== alunoId));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEditClick = (aluno) => {
    setEditingAluno(aluno);
    setEditedData({ nome: aluno.nome, idade: aluno.idade });
  };

  const handleSaveClick = () => {
    Axios.put(`http://localhost:3001/editar/${editingAluno.id}`, editedData)
      .then((response) => {
        console.log(response.data);
        setAlunos((prevAlunos) =>
          prevAlunos.map((aluno) =>
            aluno.id === editingAluno.id ? { ...aluno, ...editedData } : aluno
          )
        );
        setEditingAluno(null);
        setEditedData({ nome: '', idade: '' });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="mt-4">
      <h2>Lista de Alunos</h2>
      <ul className="list-group">
        {alunos.map((aluno, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            <div>
              <strong>Nome:</strong> {aluno.nome}
              <br />
              <strong>Idade:</strong> {aluno.idade}
            </div>
            {editingAluno && editingAluno.id === aluno.id ? (
              <div>
                <input
                  type="text"
                  value={editedData.nome}
                  onChange={(e) => setEditedData({ ...editedData, nome: e.target.value })}
                />
                <input
                  type="text"
                  value={editedData.idade}
                  onChange={(e) => setEditedData({ ...editedData, idade: e.target.value })}
                />
                <button className="btn btn-success btn-sm" onClick={handleSaveClick}>
                  Salvar
                </button>
              </div>
            ) : (
              <div>
                <button className="btn btn-primary btn-sm" onClick={() => handleEditClick(aluno)}>
                  Editar
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleExcluirAluno(aluno.id)}>Excluir</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaAlunos;
