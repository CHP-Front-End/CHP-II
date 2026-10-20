import { useState } from "react";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const links = [
    { nome: "Home", caminho: "/" },
    { nome: "Sobre", caminho: "/sobre" },
    { nome: "Contato", caminho: "/contato" },
  ];

  return (
    <header className="w-full bg-sky-50 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400 text-2xl"
            aria-hidden="true"
          >
            🐾
          </span>
          <span className="text-2xl font-bold text-sky-800">
            MyPet <span className="text-emerald-500">Club</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.nome}
              href={link.caminho}
              className="font-medium text-slate-700 transition-colors hover:text-sky-600"
            >
              {link.nome}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="text-3xl text-sky-800 md:hidden"
          aria-label="Abrir ou fechar menu"
          aria-expanded={menuAberto}
        >
          {menuAberto ? "✕" : "☰"}
        </button>
      </div>

      {menuAberto && (
        <nav className="flex flex-col gap-4 bg-sky-100 px-6 py-5 md:hidden">
          {links.map((link) => (
            <a
              key={link.nome}
              href={link.caminho}
              onClick={() => setMenuAberto(false)}
              className="font-medium text-slate-700 hover:text-sky-600"
            >
              {link.nome}
            </a>
          ))}
        </nav>
      )}

      <div className="h-1 w-full bg-gradient-to-r from-sky-500 via-emerald-400 to-yellow-400" />
    </header>
  );
}