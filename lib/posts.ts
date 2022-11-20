import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export const allTags = Array.from(
  new Set(
    allPosts
      .map((post) => post.tags)
      .flat()
      .filter((tag): tag is string => !!tag)
  )
);

export const latestPosts = allPosts.sort((a, b) =>
  compareDesc(new Date(a.date), new Date(b.date))
);

export const findPostsFromTag = (tag: string) => {
  return allPosts.filter((post) => {
    if (!post.tags) {
      return false;
    }

    return post.tags.includes(tag);
  });
};
