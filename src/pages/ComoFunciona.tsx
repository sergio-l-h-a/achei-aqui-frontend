import "../styles/como-funciona.css";

export default function ComoFunciona() {
  return (
    <section className="como-funciona-container">
      <h1>Como Funciona</h1>

      <p className="intro">
        Nosso guia local foi criado para facilitar a vida de quem procura serviços.
        <br/> Aqui você encontra profissionais, lojas e estabelecimentos de forma rápida e direta.
      </p>

      <div className="steps">
        <div className="step">
          <span className="number">1</span>
          <div>
            <h3>Escolha uma categoria</h3>
            <p>
              Na página inicial você encontra várias categorias. Basta clicar na
              que representa o serviço que você procura.
            </p>
          </div>
        </div>

        <div className="step">
          <span className="number">2</span>
          <div>
            <h3>Veja os profissionais disponíveis</h3>
            <p>
              Ao entrar na categoria, você verá uma lista de negócios e
              profissionais cadastrados, com foto, descrição e endereço.
            </p>
          </div>
        </div>

        <div className="step">
          <span className="number">3</span>
          <div>
            <h3>Clique no botão de WhatsApp</h3>
            <p>
              Cada card possui um botão que abre diretamente o WhatsApp do
              profissional. Assim você conversa, tira dúvidas e combina tudo sem
              complicação.
            </p>
          </div>
        </div>

        <div className="step">
          <span className="number">4</span>
          <div>
            <h3>Seção lateral ajuda na navegação</h3>
            <p>
              A barra lateral permite que você mude de categoria rapidamente,
              deixando a navegação mais prática.
            </p>
          </div>
        </div>
      </div>

      <p className="final">
        Simples, rápido e direto. Nosso objetivo é conectar você aos melhores
        serviços da sua região.
      </p>
    </section>
  );
}
