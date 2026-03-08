import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {

  const { pathname } = useLocation()

  const isHome = useMemo(() => pathname === '/', [pathname])

  return (
    <header className={isHome ? 'bg-header bg-cover bg-center bg-no-repeat' : 'bg-slate-800'}>
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img src="/logo.svg" alt="logotipo" className="w-32" />
          </div>
          <nav className="flex gap-4 bg-slate-700 p-2 rounded-2xl">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 uppercase font-bold bg-slate-900 rounded-2xl p-2' : 'text-white uppercase font-bold p-2'}
            >Inicio</NavLink>
            <NavLink
              to="/favoritos"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 uppercase font-bold bg-slate-900 rounded-2xl p-2' : 'text-white uppercase font-bold p-2'}
            >Favoritos</NavLink>
          </nav>
        </div>

        {isHome && (
          <form
            className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
            action="">
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >Nombre o Ingredientes</label>

              <input
                id="ingredient"
                type="text"
                name="ingredient"
                className="p-3 w-full rounded-lg bg-white border border-gray-300 shadow-sm"
                placeholder="Nombre o Ingrediente. Ej Vodka, Tequila, Café"
              />
            </div>
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >Categoría</label>

              <select
                id="ingredient"
                name="ingredient"
                className="p-3 w-full rounded-lg bg-white border border-gray-300 shadow-sm"
                placeholder="Nombre o Ingrediente. Ej Vodka, Tequila, Café"
              >
                <option value="">-- Seleccione --</option>
              </select>
            </div>
            <input
              type="submit"
              value="Buscar Recetas"
              className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase"
            />

          </form>
        )}
      </div>
    </header>
  )
} 