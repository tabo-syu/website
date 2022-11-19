import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export const latestPosts = allPosts.sort((a, b) =>
  compareDesc(new Date(a.date), new Date(b.date))
);

export const tags = Array.from(
  new Set(
    allPosts
      .map((post) => post.tags)
      .flat()
      .filter((tag): tag is string => !!tag)
  )
);

export const findPostsFromTag = (tag: string) => {
  return allPosts.filter((post) => {
    if (!post.tags) {
      return false;
    }

    return post.tags.includes(tag);
  });
};
