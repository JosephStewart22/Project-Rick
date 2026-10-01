export default function SeasonNav({ seasons, selectedSeason, onSelect }) {
  return (
    <aside className="season-sidebar" aria-label="Seasons">
      <h2>SEASONS</h2>
      <div className="season-cards">
        {seasons.map((season) => (
          <button
            className={`season-card ${selectedSeason?.id === season.id ? 'active' : ''}`}
            key={season.id}
            onClick={() => onSelect(season)}
            type="button"
          >
            <span>{season.name}</span>
            <img src={`/${season.image}`} alt={season.name} />
          </button>
        ))}
      </div>
    </aside>
  );
}
