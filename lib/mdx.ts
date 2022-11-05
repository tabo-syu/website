import glob from 'fast-glob';
import { readFile } from 'fs/promises';
import path, { sep } from 'path';

const mdxDir = `content${sep}blog`;

const getMdxPaths = async (dirpath: string) => {
  return await glob(`${dirpath}${sep}**${sep}*.mdx`);
};

const getMdxSlugs = (filepaths: string[]): string[] => {
  if (!filepaths.length) {
    return [];
  }

  const mdxPaths = filepaths.map((filepath) => {
    const filename = path.basename(filepath);
    const slug = filename.split('.')[0];

    return slug;
  });

  return mdxPaths;
};

const getMdxContent = async (dirpath: string, slug: string) => {
  const file = await readFile(`${dirpath}${sep}${slug}.mdx`, {
    encoding: 'utf-8',
  });

  return file;
};

export { mdxDir, getMdxPaths, getMdxSlugs, getMdxContent };
