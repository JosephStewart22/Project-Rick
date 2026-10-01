const seasonKeys = ['season1', 'season2', 'season3', 'season4', 'season5'];

export async function loadProjectData() {
  const response = await fetch('/db.json');
  if (!response.ok) throw new Error(`Could not load project data (${response.status})`);
  const data = await response.json();

  return {
    seasons: seasonKeys
      .map((key) => data[key])
      .filter(Boolean)
      .map((episodes) => ({
        id: episodes[0]?.season_name ?? episodes[0]?.episode,
        name: episodes[0]?.season_name ?? 'Season',
        image: episodes[0]?.image ?? '/images/404.png',
        episodes,
      })),
    characters: data.characters ?? [],
  };
}
