import fs from "fs"
import path from "path"

export interface CategoryImages {
  category: string
  images: string[]
}

const IMAGE_EXTENSIONS = /\.(png|jpe?g|webp|svg)$/i

export async function getBrandImages(): Promise<CategoryImages[]> {
  const brandDir = path.join(process.cwd(), "public/brand")
  try {
    const entries = fs.readdirSync(brandDir, { withFileTypes: true })
    const categories: CategoryImages[] = []

    for (const entry of entries) {
      if (!entry.isDirectory()) continue
      const categoryPath = path.join(brandDir, entry.name)
      const files = fs.readdirSync(categoryPath).filter((f) => IMAGE_EXTENSIONS.test(f))
      if (files.length > 0) {
        categories.push({ category: entry.name, images: files })
      }
    }

    return categories
  } catch {
    return []
  }
}
