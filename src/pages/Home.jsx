

const Home = () => {
    const servicos = [
        { icone: "🛁", titulo: "Banho e tosa", texto: "Higiene e cuidado para o pelo do seu pet." },
        { icone: "🩺", titulo: "Veterinário", texto: "Consultas e vacinas com profissionais de confiança." },
        { icone: "🦴", titulo: "Loja", texto: "Rações, brinquedos e petiscos para todos os pets." },
    ];

    return (
        <main>
            <section>
                <h1>Cuidado de verdade para o seu melhor amigo</h1>
                <p>Banho, consultas e produtos em um só lugar. Conheça o MyPet Club.</p>
                <a href="/contato">Fale com a gente</a>
            </section>

            <section>
                <h2>Nossos serviços</h2>
                <div>
                    <h3>Banho e tosa</h3>
                    <p>Higiene e cuidado para o pelo do seu pet.</p>
                </div>
                <div>
                    <h3>Veterinário</h3>
                    <p>Agende consultas e vacinas.</p>
                </div>
                <div>
                    <h3>Loja</h3>
                    <p>Rações, brinquedos e acessórios para o seu pet.</p>
                </div>
            </section>
        </main>
    )
}

export default Home
