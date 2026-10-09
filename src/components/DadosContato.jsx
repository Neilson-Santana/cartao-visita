const DadosContato = () => {
  return (
    <div className="dados-contato">
      <h1 className="nome-usuario">Neilson Bento de Santana Junior</h1>
      <p className="cargo-usuario">Desenvolvedor Software / Estudante</p>
      
      <div className="lista-contatos">
        <p>📧 Email: <a href="Email:neilson.j@aluno.senai.br">neilson.j@aluno.senai.br</a></p>
        <p>📱 Telefone: <a href="tel:+5519988211423">(19) 98821-1423</a></p>
        <p>🌐 LinkedIn: <a href="https://linkedin.com/in/neilson-s-9739ba34b" target="_blank" rel="noreferrer">www.linkedin.com/in/neilson-s-9739ba34b</a></p>
        <p>💻 GitHub: <a href="https://github.com/Neilson-Santana" target="_blank" rel="noreferrer">https://github.com/Neilson-Santana</a></p>
      </div>
    </div>
  );
};

export default DadosContato;
