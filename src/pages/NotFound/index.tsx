import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center px-6 text-center">
      <span className="mb-2 rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-600">
        Erro 404
      </span>

      <h1 className="text-8xl font-extrabold text-gray-900">404</h1>

      <h2 className="mt-4 text-3xl font-bold text-gray-800">
        Página não encontrada
      </h2>

      <p className="mt-3 max-w-md text-gray-500">
        A página que você está procurando não existe ou foi movida para outro
        endereço.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}
