import { useEffect, useState } from 'react';
import Header from './components/Header';
import SeasonNav from './components/SeasonNav';
import Spotlight from './components/Spotlight';
import CharacterSection from './components/CharacterSection';
import Comments from './components/Comments';
import Video from './components/Video';
import { loadProjectData } from './data/api';

export default function App() {
  const [seasons, setSeasons] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadProjectData()
      .then(({ seasons: loadedSeasons, characters: loadedCharacters }) => {
        setSeasons(loadedSeasons);
        setCharacters(loadedCharacters);
        setSelectedSeason(loadedSeasons[0] ?? null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="app-shell">
      <Header />

      {loading && <div className="status-card">Loading Project Rick...</div>}
      {error && <div className="status-card error">{error}</div>}

      {!loading && !error && (
        <>
          <main className="main-layout">
            <SeasonNav
              seasons={seasons}
              selectedSeason={selectedSeason}
              onSelect={setSelectedSeason}
            />
            <Spotlight season={selectedSeason} />
          </main>

          <CharacterSection characters={characters} />
          <Comments />
          <Video />
        </>
      )}
    </div>
  );
}
