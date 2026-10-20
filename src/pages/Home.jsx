
const Home = () => {
    return (
        <main className="bg-white text-slate-700">
            <section className="bg-sky-50 px-6 py-20 text-center">
                <h1 className="mx-auto max-w-2xl text-4xl font-extrabold leading-tight text-sky-900 md:text-5xl">
                    Cuidado de verdade para o seu melhor amigo
                </h1>
                <p className="mx-auto mt-5 max-w-xl text-lg text-slate-600">
                    Banho, consultas e produtos em um só lugar. Conheça o MyPet Club.
                </p>
                <a
                    href="/contato"
                    className="mt-8 inline-block rounded-full bg-emerald-500 px-8 py-3 font-semibold text-white shadow transition-colors hover:bg-emerald-600"
                >
                    Fale com a gente
                </a>
            </section>

            <section className="mx-auto max-w-5xl px-6 py-16">
                <h2 className="text-center text-3xl font-bold text-sky-900">
                    Nossos serviços
                </h2>

                <div className="mt-10 grid gap-6 sm:grid-cols-3">
                    <div className="rounded-2xl border border-sky-100 bg-white p-6 text-center shadow-sm">
                        <h3 className="text-lg font-semibold text-sky-900">🛁 Banho e tosa</h3>
                        <p className="mt-2 text-sm text-slate-600">
                            Higiene e cuidado para o pelo do seu pet.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-sky-100 bg-white p-6 text-center shadow-sm">
                        <h3 className="text-lg font-semibold text-sky-900">🩺 Veterinário</h3>
                        <p className="mt-2 text-sm text-slate-600">
                            Agende consultas e vacinas.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-sky-100 bg-white p-6 text-center shadow-sm">
                        <h3 className="text-lg font-semibold text-sky-900">🦴 Loja</h3>
                        <p className="mt-2 text-sm text-slate-600">
                            Rações, brinquedos e acessórios para o seu pet.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home