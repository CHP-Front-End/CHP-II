import { useState } from "react";
import {
    PawPrint,
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
} from "lucide-react";

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
            icone: Phone,
            titulo: "Telefone",
            descricao: "(11) 99999-9999",
            detalhe: "Fale com nossa equipe",
        },
        {
            icone: Mail,
            titulo: "E-mail",
            descricao: "contato@petshop.com",
            detalhe: "Envie suas dúvidas",
        },
        {
            icone: MapPin,
            titulo: "Endereço",
            descricao: "São Paulo - SP",
            detalhe: "Venha nos visitar",
        },
        {
            icone: Clock,
            titulo: "Horário de atendimento",
            descricao: "Segunda a sábado",
            detalhe: "Das 9h às 18h",
        },
    ];

    const estiloInput =
        "w-full rounded-lg border border-sky-200 bg-sky-50/60 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100";

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
        <main className="min-h-screen bg-sky-50/70 px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                {/* Cabeçalho */}
                <header className="mb-12 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                        <PawPrint size={34} />
                    </div>

                    <h1 className="text-3xl font-extrabold text-sky-800 sm:text-4xl">
                        Entre em contato
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                        Estamos aqui para ajudar você e seu melhor amigo!
                        Envie sua dúvida, sugestão ou solicitação. Será um prazer
                        atender você.
                    </p>

                    <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-emerald-500" />
                </header>

                {/* Informações de contato */}
                <section className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {informacoes.map((item) => {
                        const Icone = item.icone;

                        return (
                            <article
                                key={item.titulo}
                                className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                                    <Icone size={23} />
                                </div>

                                <h2 className="font-bold text-sky-800">
                                    {item.titulo}
                                </h2>

                                <p className="mt-2 text-sm font-semibold text-emerald-600 break-all">
                                    {item.descricao}
                                </p>

                                <p className="mt-1 text-sm text-slate-500">
                                    {item.detalhe}
                                </p>
                            </article>
                        );
                    })}
                </section>

                {/* Formulário */}
                <section className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm sm:p-8">
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-sky-800">
                            Envie uma mensagem
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                            Tem alguma dúvida? Preencha o formulário e fale com nossa equipe.
                        </p>
                    </div>

                    {enviado && (
                        <div
                            role="status"
                            className="mb-5 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800"
                        >
                            Formulário preenchido com sucesso! A mensagem ainda não foi
                            enviada para a loja.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="nome"
                                    className="mb-2 block text-sm font-semibold text-slate-700"
                                >
                                    Nome completo *
                                </label>

                                <input
                                    id="nome"
                                    name="nome"
                                    type="text"
                                    value={formulario.nome}
                                    onChange={handleChange}
                                    placeholder="Digite seu nome"
                                    autoComplete="name"
                                    className={estiloInput}
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-semibold text-slate-700"
                                >
                                    E-mail *
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formulario.email}
                                    onChange={handleChange}
                                    placeholder="seuemail@exemplo.com"
                                    autoComplete="email"
                                    className={estiloInput}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="assunto"
                                className="mb-2 block text-sm font-semibold text-slate-700"
                            >
                                Assunto *
                            </label>

                            <select
                                id="assunto"
                                name="assunto"
                                value={formulario.assunto}
                                onChange={handleChange}
                                className={`${estiloInput} cursor - pointer`}
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

                        <div>
                            <label
                                htmlFor="mensagem"
                                className="mb-2 block text-sm font-semibold text-slate-700"
                            >
                                Mensagem *
                            </label>

                            <textarea
                                id="mensagem"
                                name="mensagem"
                                value={formulario.mensagem}
                                onChange={handleChange}
                                placeholder="Escreva sua mensagem..."
                                rows={4}
                                maxLength={1000}
                                className={`${estiloInput} resize - y`}
                                required
                            />

                            <p className="mt-1 text-right text-xs text-slate-400">
                                {formulario.mensagem.length}/1000 caracteres
                            </p>
                        </div>

                        <p className="text-xs text-slate-400">
                            * Campos obrigatórios
                        </p>

                        <button
                            type="submit"
                            className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 sm:w-auto sm:min-w-48"
                        >
                            <Send size={17} />
                            Enviar mensagem
                        </button>
                    </form>
                </section>

                {/* Detalhe decorativo no rodapé */}
                <div className="mt-10 h-1 w-full rounded-full bg-sky-200" />
            </div>
        </main>
    );
}