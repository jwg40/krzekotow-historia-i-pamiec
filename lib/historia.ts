import fs from "fs";
import path from "path";
import matter from "gray-matter";

const historiaPath = path.join(process.cwd(), "content/historia");

export function getSkrzynie() {
  return fs.readdirSync(historiaPath).map((folder) => {
    const metadataPath = path.join(
      historiaPath,
      folder,
      "metadata.json"
    );

    const metadata = JSON.parse(
      fs.readFileSync(metadataPath, "utf8")
    );

    return {
      id: folder,
      ...metadata,
    };
  });
}

export function getSkrzynia(folder: string) {
  const filePath = path.join(
    historiaPath,
    folder,
    "index.md"
  );

  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);

  return {
    metadata: data,
    content,
  };
}