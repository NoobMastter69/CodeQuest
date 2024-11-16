// pages/sobre.jsx
import Link from "next/link";
import React from "react";

export default function Sobre() {
  return (
    <div style={styles.container}>
      <h1>Sobre Mim</h1>
      <p>
        Olá! Eu sou Ed Carlos Xavier Duarte Filho, um desenvolvedor apaixonado por tecnologia e programação.
        Neste site, compartilho meus projetos e conhecimentos.
      </p>
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
  link: {
    color: "#4CAF50",
    textDecoration: "none",
    fontSize: "1.2rem",
    marginTop: "20px",
    display: "block",
  },
};
