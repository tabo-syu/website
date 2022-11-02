import path from 'path';

const getSlugs = (filepaths: string[]): string[] => {
  if (!filepaths.length) {
    return [];
  }

  const slugs = filepaths.map((filepath) => {
    const filename = path.basename(filepath);
    const slug = filename.split('.')[0];

    return slug;
  });

  return slugs;
};

export { getSlugs };
