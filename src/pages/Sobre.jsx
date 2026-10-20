import { Link } from "react-router-dom";

const Sobre = () => {
  return (
    <main>
      <div className="bg-sky-100 px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-sky-800 md:text-5xl">
          Sobre Nós
        </h1>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
          Bem-vindo ao MyPet Club! Somos um petshop criado para levar
          carinho, saúde e alegria para cães, gatos e todos os
          bichinhos que fazem parte da família.
        </p>

        <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-emerald-400" />
      </div>

      <div className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-500">
            Quem somos
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-sky-800 md:text-4xl">
            Muito mais que um petshop!
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            O MyPet Club nasceu com o propósito de levar cuidado
            e felicidade para o dia a dia dos animais e de seus
            tutores. Mais do que vender produtos, queremos fazer
            parte de momentos que ficam na memória: um passeio, uma
            brincadeira no quintal ou um novo truque aprendido a
            cada dia.
          </p>

          <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-600">
            Nosso objetivo é proporcionar uma experiência acolhedora,
            em que cada pet seja tratado como parte da família e cada
            visita se transforme em uma lembrança especial.
          </p>

          <div className="mx-auto mt-10 h-1.5 w-24 rounded-full bg-gradient-to from-sky-500 via-emerald-400 to-yellow-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 px-6 py-12 md:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl border border-sky-100 bg-white px-6 py-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-300">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-3xl">
            📖
          </div>

          <h2 className="text-2xl font-bold text-sky-800">
            Nossa História
          </h2>

          <div className="mt-3 h-1 w-16 rounded-full bg-emerald-400" />

          <p className="mt-5 leading-7 text-slate-600">
            O MyPet Club nasceu com o propósito de tornar a vida dos
            animais ainda mais feliz, oferecendo produtos e serviços
            que promovem bem-estar e proporcionam momentos
            inesquecíveis com seus tutores.
          </p>
        </div>

        <div className="rounded-2xl border border-sky-100 bg-white px-6 py-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-300">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
            🎯
          </div>

          <h2 className="text-2xl font-bold text-sky-800">
            Nossa Missão
          </h2>

          <div className="mt-3 h-1 w-16 rounded-full bg-emerald-400" />

          <p className="mt-5 leading-7 text-slate-600">
            Proporcionar saúde, conforto e diversão aos pets por
            meio de produtos e serviços de qualidade, com muito
            carinho e responsabilidade.
          </p>
        </div>

        <div className="rounded-2xl border border-sky-100 bg-white px-6 py-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-300 md:col-span-2 xl:col-span-1">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-3xl">
            🐾
          </div>

          <h2 className="text-2xl font-bold text-sky-800">
            Nossos Valores
          </h2>

          <div className="mt-3 h-1 w-16 rounded-full bg-emerald-400" />

          <p className="mt-5 leading-7 text-slate-600">
            Valorizamos o amor pelos animais, a segurança, a
            qualidade, o respeito e o bem-estar de cada pet.
          </p>
        </div>
      </div>

      <div className="mx-6 my-8 rounded-2xl bg-sky-800 px-6 py-12 text-center md:mx-auto md:max-w-5xl">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          O carinho está em cada patinha!
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-sky-100">
          No MyPet Club, acreditamos que cuidar de um animal é uma
          forma de amar, aprender e criar memórias especiais.
          Venha fazer parte da nossa família!
        </p>

        <Link to="/contato" className="mt-6 inline-block rounded-full bg-emerald-500 px-8 py-3 font-bold text-white shadow transition-colors duration-300 hover:bg-emerald-600">
          🦴 Entre em contato
        </Link>

      </div>
    </main>
  )
}

export default Sobre
