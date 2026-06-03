import fs from 'fs';
import path from 'path';
const matter = require('gray-matter');

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export function getSortedArticlesData() {
    if (!fs.existsSync(articlesDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(articlesDirectory);
    const allArticlesData = fileNames.map((fileName) => {
        const fullPath = path.join(articlesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug: fileName.replace(/\.mdx$/, ''),
            ...data,
        };
    });

    // Ordina per data (dal più recente al più vecchio) se la data è presente
    return allArticlesData.sort((a: any, b: any) => {
        if (a.date && b.date) {
            return new Date(b.date).getTime() - new Date(a.date).getTime() > 0 ? -1 : 1;
        }
        return 0;
    });
}