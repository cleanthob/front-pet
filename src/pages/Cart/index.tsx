import { useContext } from "react";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { CartContext } from "../../contexts/CartContext";
import { IoBagCheckOutline } from "react-icons/io5";

export function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  function checkout() {
    toast.success("Compra feita com sucesso.");
  }

  return (
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="mb-8 text-3xl font-bold">Carrinho</h1>

      {cartItems.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 py-16 text-center">
          <h2 className="text-xl font-semibold">Seu carrinho está vazio 🛒</h2>
          <p className="mt-2 text-gray-500">
            Adicione alguns produtos para começar suas compras.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-5">
            {cartItems.map((item) => (
              <section
                key={item.id}
                className="flex flex-col gap-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-center gap-5">
                  <img
                    src={item.cover}
                    alt={item.description}
                    className="h-28 w-28 rounded-lg object-contain"
                  />

                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>

                    <p className="mt-2 text-green-600 font-bold">
                      {item.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => removeFromCart(item)}
                    className="transition hover:scale-110"
                  >
                    <IoIosRemoveCircle size={28} />
                  </button>

                  <span className="min-w-8 text-center font-bold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => addToCart(item)}
                    className="transition hover:scale-110"
                  >
                    <IoIosAddCircle size={28} />
                  </button>
                </div>

                <strong className="text-xl text-green-600">
                  {(item.price * item.quantity).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
              </section>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xl font-semibold">Total</span>

              <span className="text-2xl font-bold text-green-600">
                {getCartTotal().toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={clearCart}
                className="flex items-center gap-2 rounded-lg bg-red-500 px-5 py-3 font-medium text-white transition hover:bg-red-600"
              >
                <FaTrash />
                Limpar carrinho
              </button>
            </div>

            <button
              onClick={checkout}
              className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-green-700 hover:shadow-lg active:scale-95"
            >
              <IoBagCheckOutline size={20} />
              Finalizar compra
            </button>
          </div>
        </>
      )}
    </div>
  );
}
