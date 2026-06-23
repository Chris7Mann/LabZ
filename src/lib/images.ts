import fs from 'fs';
import path from 'path';

export function getThumbImageSrc(image?: string): string | undefined {
  if (!image?.startsWith('/images/')) {
    return image;
  }

  const fileName = image.split('/').pop();
  if (!fileName) {
    return image;
  }

  const baseName = fileName.replace(/\.[^.]+$/, '');
  const thumbImage = `/images/thumbs/${baseName}.webp`;
  const thumbPath = path.join(process.cwd(), 'public', thumbImage);

  return fs.existsSync(thumbPath) ? thumbImage : image;
}
