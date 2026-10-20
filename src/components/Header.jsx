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
          <span className="text-2xl font-bold text-sky-800">MyPet Club</span>
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
    </header>
  );
}