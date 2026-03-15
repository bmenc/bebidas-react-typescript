import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

export default function Header() {
  const [searchFilters, setSearchFilter] = useState({
    ingredient: '',
    category: ''
  })
  const { pathname } = useLocation()
  const isHome = useMemo(() => pathname === '/', [pathname])
  const fetchCategories = useAppStore((state) => state.fetchCategories)
  const categories = useAppStore((state) => state.categories)
  const searchRecipes = useAppStore((state) => state.searchRecipes)
  const showNotification = useAppStore((state) => state.showNotification)

  useEffect(() => {
    fetchCategories()
  }, [])


  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setSearchFilter({
      ...searchFilters,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()


    if (Object.values(searchFilters).includes('')) {
      showNotification({
        text: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }

    searchRecipes(searchFilters)
  }

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
            onSubmit={handleSubmit}>
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
                onChange={handleChange}
                value={searchFilters.ingredient}
              />
            </div>
            <div className="space-y-4">
              <label
                htmlFor="category"
                className="block text-white uppercase font-extrabold text-lg"
              >Categoría</label>

              <select
                id="category"
                name="category"
                className="p-3 w-full rounded-lg bg-white border border-gray-300 shadow-sm"
                onChange={handleChange}
                value={searchFilters.category}
              >
                <option value="">-- Seleccione --</option>
                {categories.drinks.map((item) => (
                  <option key={item.strCategory} value={item.strCategory}>
                    {item.strCategory}
                  </option>
                ))}
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