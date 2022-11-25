export type Repository = {
  name: string;
  description: string | null;
  url: string;
  language: {
    name: string;
    color: string;
  };
};
export const fetchPinnedRepositories = async () => {
  const accessToken = process.env.GITHUB_ACCESS_TOKEN;
  const query = {
    query: `{
      user(login: "tabo-syu") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              languages(first: 1, orderBy: {field: SIZE, direction: DESC}) {
                edges {
                  node {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    }`,
  };
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${accessToken}`,
    },
    body: JSON.stringify(query),
    next: {
      // 1day
      revalidate: 86_400,
    },
  });

  const { data } = await response.json();
  const repositories = data.user.pinnedItems.nodes.map((repo: any) => ({
    name: repo.name,
    description: repo.description,
    url: repo.url,
    language: {
      name: repo.languages.edges[0].node.name,
      color: repo.languages.edges[0].node.color,
    },
  }));

  return repositories as Repository[];
};
