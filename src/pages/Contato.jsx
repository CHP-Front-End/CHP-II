
import { useState } from "react";
export default function Contato() {
    const [formulario, setFormulario] = useState({
        nome: "",
        email: "",
        assunto: "",
        mensagem: "",
    });

    const [enviado, setEnviado] = useState(false);

    const informacoes = [
        {
            icone: "☎",
            titulo: "Telefone",
            descricao: "(11) 99999-9999",
            detalhe: "Fale com nossa equipe",
        },
        {
            icone: "✉",
            titulo: "E-mail",
            descricao: "contato@mypetclub.com",
            detalhe: "Envie suas dúvidas",
        },
        {
            icone: "⌖",
            titulo: "Endereço",
            descricao: "São Paulo - SP",
            detalhe: "Venha nos visitar",
        },
        {
            icone: "◷",
            titulo: "Horário de atendimento",
            descricao: "Segunda a sábado",
            detalhe: "Das 9h às 18h",
        },
    ];

    function handleChange(event) {
        const { name, value } = event.target;

        setFormulario((anterior) => ({
            ...anterior,
            [name]: value,
        }));

        setEnviado(false);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setEnviado(true);

        setFormulario({
            nome: "",
            email: "",
            assunto: "",
            mensagem: "",
        });
    }

    return (
        <main className="contato">
            <div className="contato-container">
                <header className="contato-header">
                    <div className="contato-pata">🐾</div>

                    <h1>Entre em contato</h1>

                    <p>
                        Estamos aqui para ajudar você e seu melhor amigo!
                        Envie sua dúvida, sugestão ou solicitação. Será um
                        prazer atender você.
                    </p>

                    <div className="contato-detalhe" />
                </header>

                <section className="contato-informacoes">
                    {informacoes.map((item) => (
                        <article className="contato-card" key={item.titulo}>
                            <div className="contato-icone">{item.icone}</div>

                            <h2>{item.titulo}</h2>

                            <p className="contato-descricao">
                                {item.descricao}
                            </p>

                            <p className="contato-detalhe-texto">
                                {item.detalhe}
                            </p>
                        </article>
                    ))}
                </section>

                <section className="contato-formulario">
                    <h2>Envie uma mensagem</h2>

                    <p className="contato-subtitulo">
                        Tem alguma dúvida? Preencha o formulário e fale com
                        nossa equipe.
                    </p>

                    {enviado && (
                        <div className="contato-sucesso" role="status">
                            Formulário preenchido com sucesso! Sua mensagem
                            ainda não foi enviada para a loja.
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="contato-campos">
                            <div className="contato-campo">
                                <label htmlFor="nome">Nome completo *</label>

                                <input
                                    id="nome"
                                    name="nome"
                                    type="text"
                                    value={formulario.nome}
                                    onChange={handleChange}
                                    placeholder="Digite seu nome"
                                    autoComplete="name"
                                    required
                                />
                            </div>

                            <div className="contato-campo">
                                <label htmlFor="email">E-mail *</label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formulario.email}
                                    onChange={handleChange}
                                    placeholder="seuemail@exemplo.com"
                                    autoComplete="email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="contato-campo">
                            <label htmlFor="assunto">Assunto *</label>

                            <select
                                id="assunto"
                                name="assunto"
                                value={formulario.assunto}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Selecione um assunto</option>
                                <option value="Produtos">Dúvidas sobre produtos</option>
                                <option value="Pedidos">Pedidos e entregas</option>
                                <option value="Duvidas">Dúvidas gerais</option>
                                <option value="Sugestoes">Sugestões</option>
                                <option value="Outros">Outros assuntos</option>
                            </select>
                        </div>

                        <div className="contato-campo">
                            <label htmlFor="mensagem">Mensagem *</label>

                            <textarea
                                id="mensagem"
                                name="mensagem"
                                value={formulario.mensagem}
                                onChange={handleChange}
                                placeholder="Escreva sua mensagem..."
                                rows="4"
                                maxLength="1000"
                                required
                            />

                            <span className="contato-contador">
                                {formulario.mensagem.length}/1000 caracteres
                            </span>
                        </div>

                        <p className="contato-obrigatorio">
                            * Campos obrigatórios
                        </p>

                        <button type="submit" className="contato-botao">
                            ✉ Enviar mensagem
                        </button>
                    </form>
                </section>

                <div className="contato-rodape" />
            </div>
        </main>
    );
}
