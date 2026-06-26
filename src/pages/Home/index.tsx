import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import api from "../../services/api";

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  cover: string;
  price: number;
}

export function Home() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("/products");

        setProducts(response.data);
      } catch (error) {
        return;
      }
    }

    getProducts();
  }, []);

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
      {products.length === 0 ? (
        <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Nenhum produto encontrado
          </h2>

          <p className="mt-3 max-w-md text-gray-500">
            Não foi possível carregar os produtos no momento. Tente atualizar a
            página ou volte mais tarde.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Tentar novamente
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
          {products.map((product) => (
            <section
              key={product.id}
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.cover}
                  alt={product.description}
                  className="mx-auto h-30 object-contain transition-transform duration-300 hover:scale-105"
                />
              </Link>

              <div className="mt-5 flex flex-1 flex-col">
                <h2 className="line-clamp-2 text-lg font-semibold">
                  {product.title}
                </h2>

                <p className="mt-2 line-clamp-3 text-sm text-gray-500">
                  {product.description}
                </p>

                <div className="mt-auto pt-5">
                  <strong className="block text-2xl text-green-600">
                    {product.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </strong>

                  <button
                    onClick={() => {
                      addToCart(product);
                      toast.success("Produto adicionado ao carrinho.");
                    }}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-black py-3 font-medium text-white transition hover:bg-gray-800"
                  >
                    <IoIosAddCircle size={24} />
                    Adicionar
                  </button>
                </div>
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
