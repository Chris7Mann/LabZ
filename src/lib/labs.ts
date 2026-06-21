import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const labsDirectory = path.join(process.cwd(), 'content/labs');

export type LabData = {
  slug: string;
  title?: string;
  coverImage?: string;
  date?: string;
  author?: string;
  tech?: string;
  difficulty?: string;
  excerpt?: string;
  tags?: string[];
};

export function getSortedLabsData(): LabData[] {
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

  return allLabsData.sort((a, b) => ((a.date || '') < (b.date || '') ? 1 : -1));
}
