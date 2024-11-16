// pages/portfolio.jsx
import Link from "next/link";
import React from "react";

export default function Portfolio() {
  return (
    <div style={styles.container}>
      <h1>Meu Portfólio</h1>
      <p>Aqui você encontrará alguns dos meus projetos recentes:</p>
      <ul style={styles.list}>
        <li>Projeto 1: Aplicação Web em React</li>
        <li>Projeto 2: API RESTful com Node.js</li>
        <li>Projeto 3: Site de E-commerce com Next.js</li>
      </ul>
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
  list: {
    listStyleType: "none",
    padding: 0,
  },
  link: {
    color: "#4CAF50",
    textDecoration: "none",
    fontSize: "1.2rem",
    marginTop: "20px",
    display: "block",
  },
};
