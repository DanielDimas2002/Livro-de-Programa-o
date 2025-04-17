import React, { useState } from "react";

// Componente principal do consultório odontológico
function Consultorio() {
  // Estado que armazena a lista de pacientes na fila
  const [paciente, setPaciente] = useState([]);

  // Estado que armazena o nome do paciente que está sendo atendido
  const [atendido, setAtedimento] = useState("");

  // Estado que controla o valor do input de nome do paciente
  const [nome, setNome] = useState("");

  // Função chamada ao enviar o formulário (adicionar paciente ao final da fila)
  const novoPaciente = (e) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário
    setPaciente([...paciente, nome]); // Adiciona o paciente ao final da fila
    setNome(""); // Limpa o campo de input
  };

  // Função para adicionar paciente com urgência (ao início da fila)
  const novoUrgente = () => {
    setPaciente([nome, ...paciente]); // Adiciona o paciente no início da fila
    setNome(""); // Limpa o campo de input
  };

  // Função que remove o primeiro paciente da fila e o coloca em atendimento
  const atenderPaciente = () => {
    if (!paciente.length) {
      alert("Não há pacientes na fila de espera");
      return;
    }
    setAtedimento(paciente[0]); // Define o primeiro paciente como em atendimento
    setPaciente(paciente.slice(1)); // Remove o primeiro da fila
  };

  // Estilo básico para os botões
  const buttonStyle = {
    padding: "5px 10px",
    marginRight: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "black",
    color: "white",
    cursor: "pointer",
  };

  // Estilo do paciente em atendimento (azul + negrito)
  const atendimentoStyle = {
    color: "#0a58ca",
    fontWeight: "bold",
    fontSize: "1.1em",
  };

  return (
    <div>
      <h1>Consultório Odontológico</h1>

      {/* Formulário para adicionar pacientes */}
      <form onSubmit={novoPaciente}>
        <p>
          Paciente:
          {/* Campo de texto controlado */}
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            autoFocus
            style={{ marginRight: "8px" }}
          />
          {/* Botão para adicionar paciente comum */}
          <input type="submit" value="Adicionar" style={buttonStyle} />

          {/* Botão para adicionar paciente com urgência */}
          <input type="button" value="Urgência" onClick={novoUrgente} style={buttonStyle} />

          {/* Botão para chamar o próximo paciente */}
          <input type="button" value="Atender" onClick={atenderPaciente} style={buttonStyle} />
        </p>
      </form>

      {/* Paciente que está sendo atendido */}
      <h3>Em atendimento:</h3>
      <span style={atendimentoStyle}>{atendido}</span>

      {/* Lista dos pacientes que ainda estão aguardando */}
      <pre>
        {paciente.map((p, i) => (
          <div key={i}>{p}</div>
        ))}
      </pre>
    </div>
  );
}

export default Consultorio;
