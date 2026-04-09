import fs from "fs";
import path from "path";

export async function getBrandImages(): Promise<string[]> {
  const dir = path.join(process.cwd(), "public/brand");
  try {
    const files = fs.readdirSync(dir);
    return files.filter((file) => /\.(png|jpe?g|webp|svg)$/i.test(file));
  } catch (e) {
    return [];
  }
}
