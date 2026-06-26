import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import api from "../../services/api";
import { type ProductProps } from "../Home";
import { IoIosAddCircle } from "react-icons/io";

export function Detail() {
  const { id } = useParams();
  const [detailProduct, setDetailProduct] = useState<ProductProps>();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function getProduct() {
      const response = await api.get(`/products/${id}`);

      setDetailProduct(response.data);
    }

    getProduct();
  }, [id]);

  return (
    detailProduct && (
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-md md:grid-cols-2">
          <div className="flex items-center justify-center">
            <img
              src={detailProduct.cover}
              alt={detailProduct.description}
              className="max-h-96 object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-gray-900">
              {detailProduct.title}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              {detailProduct.description}
            </p>

            <strong className="mt-8 text-4xl font-bold text-green-600">
              {detailProduct.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>

            <button
              onClick={() => {
                addToCart(detailProduct);
                toast.success("Produto adicionado ao carrinho.");
                navigate("/cart");
              }}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
            >
              <IoIosAddCircle size={28} />
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
    )
  );
}
