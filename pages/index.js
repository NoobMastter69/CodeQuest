// Home.jsx

import React, { useState, useEffect } from "react";

function Home() {
  // Estado para o tema (claro/escuro)
  const [darkMode, setDarkMode] = useState(false);
  
  // Estado para o contador de visitas
  const [visitCount, setVisitCount] = useState(0);

  // Função para alternar entre modo claro e escuro
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Função para atualizar o contador de visitas
  useEffect(() => {
    // Verifica se já existe um contador armazenado no localStorage
    const storedCount = localStorage.getItem("visitCount");
    const newCount = storedCount ? parseInt(storedCount) + 1 : 1;
    
    // Atualiza o contador e armazena no localStorage
    setVisitCount(newCount);
    localStorage.setItem("visitCount", newCount);
  }, []);

  return (
    <div style={darkMode ? styles.darkContainer : styles.container}>
      {/* Cabeçalho */}
      <header style={styles.header}>
        <h1 style={styles.title}>Bem-vindo ao Meu Site</h1>
        <nav style={styles.nav}>
          <a href="#sobre" style={styles.link}>Sobre</a>
          <a href="#portfolio" style={styles.link}>Portfólio</a>
          <a href="#contato" style={styles.link}>Contato</a>
        </nav>
        {/* Botão de troca de tema */}
        <button onClick={toggleTheme} style={styles.themeButton}>
          {darkMode ? "Modo Claro" : "Modo Escuro"}
        </button>
      </header>

      {/* Seção de Apresentação */}
      <section style={styles.intro}>
        <h2>Olá, eu sou Ed Carlos Xavier Duarte Filho</h2>
        <p>Sou apaixonado por tecnologia e programação. Este é o meu site pessoal onde compartilho meus projetos e conhecimentos.</p>
        <p>Visitas à página: <strong>{visitCount}</strong></p>
        <button style={styles.button}>Saiba Mais</button>
      </section>

      {/* Rodapé */}
      <footer style={styles.footer}>
        <p>© 2024 Ed Carlos Xavier Duarte Filho. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

// Estilos para modo claro e escuro
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    color: "#333",
    backgroundColor: "#f4f4f4",
    padding: "20px",
    textAlign: "center",
    minHeight: "100vh",
  },
  darkContainer: {
    fontFamily: "Arial, sans-serif",
    color: "#000000",
    backgroundColor: "#333",
    padding: "20px",
    textAlign: "center",
    minHeight: "100vh",
  },
  header: {
    backgroundColor: "#4CAF50",
    padding: "20px 0",
    marginBottom: "20px",
  },
  title: {
    color: "#fff",
    fontSize: "2rem",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
  },
  intro: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  themeButton: {
    padding: "5px 15px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "15px",
  },
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 0",
  },
};

export default Home;
