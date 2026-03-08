import { z } from 'zod'


export const CategoriesAPIResponseSchema = z.object({
  drinks: z.array(
    z.object({
      strCategory: z.string(),
      strCategoryDescription: z.string(),
      strCategoryThumb: z.string(),
      strCategoryIcon: z.string(),
      strCategoryIconFav: z.string(),
    })
  )
})