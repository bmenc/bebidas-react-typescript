import { z } from 'zod'

const CategoryItemSchema = z.object({
  strCategory: z.string()
})

export const CategoriesAPIResponseSchema = z.object({
  drinks: z.array(CategoryItemSchema)
})

export const SearchFilterSchema = z.object({
  ingredient: z.string(),
  category: z.string()
})

export const DrinkAPIResponse = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strDrinkThumb: z.string(),
})

export const DrinksAPIResponse = z.object({
  drinks: z.array(DrinkAPIResponse)
})