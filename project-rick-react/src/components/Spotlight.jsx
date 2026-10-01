export default function Spotlight({ season }) {
  if (!season) return null;

  return (
    <section className="spotlight" aria-labelledby="spotlight-title">
      <div className="spotlight-heading">
        <p className="eyebrow">CURRENTLY VIEWING</p>
        <h2 id="spotlight-title">{season.name}</h2>
      </div>

      <img
        className="spotlight-image"
        src={`/${season.image}`}
        alt={`${season.name} artwork`}
      />

      <div className="episodes-panel">
        <h3>EPISODES</h3>
        <ol className="episodes-list">
          {season.episodes.map((episode) => (
            <li key={episode.id}>
              <div>
                <strong>{episode.name}</strong>
                <span>{episode.episode} · {episode.air_date}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
