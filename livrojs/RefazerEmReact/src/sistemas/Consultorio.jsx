import React, { useState } from "react";

function Consultorio() {
  const [paciente, setPaciente] = useState([]);
  const [atendido, setAtedimento] = useState("");
  const [nome, setNome] = useState("");

  const novoPaciente = (e) => {
    e.preventDefault();
    setPaciente([...paciente, nome]);
    setNome("");
  };

  const novoUrgente = () => {
    setPaciente([nome, ...paciente]);
    setNome("");
  };

  const atenderPaciente = () => {
    if (!paciente.length) {
      alert("Não há pacientes na fila de espera");
      return;
    }
    setAtedimento(paciente[0]);
    setPaciente(paciente.slice(1));
  };

  // Estilos bem simples
  const buttonStyle = {
    padding: "5px 10px",
    marginRight: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "black",
    cursor: "pointer",
  };

  const buttonHover = {
    backgroundColor: "white",
    color: "black"
  };

  const atendimentoStyle = {
    color: "#0a58ca", // azul discreto
    fontWeight: "bold",
    fontSize: "1.1em",
  };

  return (
    <div>
      <h1>Consultório Odontológico</h1>
      <form onSubmit={novoPaciente}>
        <p>
          Paciente:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            autoFocus
            style={{ marginRight: "8px" }}
          />
          <input type="submit" value="Adicionar" style={buttonStyle} />
          <input type="button" value="Urgência" onClick={novoUrgente} style={buttonStyle} />
          <input type="button" value="Atender" onClick={atenderPaciente} style={buttonStyle} />
        </p>
      </form>

      <h3>Em atendimento:</h3>
      <span style={atendimentoStyle}>{atendido}</span>

      <pre>
        {paciente.map((p, i) => (
          <div key={i}>{p}</div>
        ))}
      </pre>
    </div>
  );
}

export default Consultorio;
