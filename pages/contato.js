// pages/contato.jsx
import Link from "next/link";
import React, { useState } from "react";

export default function Contato() {
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setMensagem("");
  };

  return (
    <div style={styles.container}>
      <h1>Contato</h1>
      <p>Entre em contato comigo preenchendo o formulário abaixo:</p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <textarea
          placeholder="Digite sua mensagem..."
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>
          Enviar
        </button>
      </form>
      {enviado && <p style={styles.successMessage}>Mensagem enviada com sucesso!</p>}
      <Link href="/" style={styles.link}>
        Voltar para a Página Inicial
      </Link>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    textAlign: "center",
  },
  form: {
    marginTop: "20px",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  successMessage: {
    color: "green",
    marginTop: "10px",
  },
  link: {
    color: "#4CAF50",
    textDecoration: "none",
    fontSize: "1.2rem",
    marginTop: "20px",
    display: "block",
  },
};
