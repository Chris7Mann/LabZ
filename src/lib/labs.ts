import fs from 'fs';
import path from 'path';

// Utilizziamo require per bypassare i problemi di import di TypeScript/Turbopack
const matter = require('gray-matter');

const labsDirectory = path.join(process.cwd(), 'content/labs');

export function getSortedLabsData() {
  if (!fs.existsSync(labsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(labsDirectory);
  const allLabsData = fileNames.map((fileName) => {
    const fullPath = path.join(labsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: fileName.replace(/\.mdx$/, ''),
      ...data,
    };
  });

  return allLabsData.sort((a: any, b: any) => (a.date < b.date ? 1 : -1));
}