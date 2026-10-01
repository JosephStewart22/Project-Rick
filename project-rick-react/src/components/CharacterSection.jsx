import { useMemo, useState } from 'react';

export default function CharacterSection({ characters }) {
  const [selectedId, setSelectedId] = useState('');

  const selectedCharacter = useMemo(
    () => characters.find((character) => String(character.id) === selectedId),
    [characters, selectedId]
  );

  return (
    <section className="character-section" aria-labelledby="character-title">
      <div>
        <p className="eyebrow">EXPLORE THE CAST</p>
        <h2 id="character-title">Favorite Character</h2>
      </div>

      <select
        id="char-dropdown"
        value={selectedId}
        onChange={(event) => setSelectedId(event.target.value)}
      >
        <option value="">Select your favorite character</option>
        {characters.map((character) => (
          <option key={character.id} value={character.id}>
            {character.name}
          </option>
        ))}
      </select>

      {selectedCharacter ? (
        <div className="character-card">
          <img src={selectedCharacter.image} alt={selectedCharacter.name} />
          <div>
            <h3>{selectedCharacter.name}</h3>
            <p>{selectedCharacter.status} · {selectedCharacter.species}</p>
            <p>{selectedCharacter.origin?.name}</p>
          </div>
        </div>
      ) : (
        <div className="character-placeholder">
          <img src="/images/404.png" alt="Select a character" />
          <p>Pick a character to bring them into the spotlight.</p>
        </div>
      )}
    </section>
  );
}
