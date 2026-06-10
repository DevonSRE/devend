import fs from "fs"
import path from "path"

export interface CategoryImages {
  category: string
  images: string[]
}

const IMAGE_EXTENSIONS = /\.(png|jpe?g|webp|svg)$/i

export async function getBrandImages(): Promise<CategoryImages[]> {
  const shopimgDir = path.join(process.cwd(), "public/brand/shopimg")
  try {
    const files = fs.readdirSync(shopimgDir).filter((f) => IMAGE_EXTENSIONS.test(f))

    const shirts: string[] = []
    const notebooks: string[] = []
    const cups: string[] = []

    for (const file of files) {
      const lower = file.toLowerCase()
      if (lower.startsWith("m")) {
        cups.push(file)
      } else if (lower.startsWith("b") || lower.includes("(1)")) {
        notebooks.push(file)
      } else if (lower.startsWith("n")) {
        shirts.push(file)
      }
    }

    return [
      { category: "shirts", images: shirts },
      { category: "notebooks", images: notebooks },
      { category: "cups", images: cups },
    ]
  } catch {
    return []
  }
}
