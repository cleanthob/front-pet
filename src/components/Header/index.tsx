import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoFrontPet from "../../assets/logo.png";
import { CartContext } from "../../contexts/CartContext";

export function Header() {
  const { cartItems } = useContext(CartContext);

  return (
    <header className="sticky top-0 z-50 bg-linear-to-r from-blue-600 to-blue-700">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="flex items-center gap-3 transition hover:scale-[1.02]"
        >
          <img
            src={logoFrontPet}
            alt="FrontPet"
            className="h-11 w-11 rounded-full bg-white p-1 shadow"
          />

          <div>
            <h1 className="text-xl font-bold tracking-wide text-white">
              FrontPet
            </h1>

            <p className="text-xs text-blue-100">Tudo para o seu pet</p>
          </div>
        </Link>

        <Link
          to="/cart"
          className="group relative rounded-full bg-white/15 p-3 text-white backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-white/25"
        >
          <FaCartPlus size={24} className="transition group-hover:rotate-6" />

          {cartItems.length > 0 && (
            <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white ring-2 ring-white">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
