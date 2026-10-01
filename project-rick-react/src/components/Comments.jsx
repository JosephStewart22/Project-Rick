import { useState } from 'react';

export default function Comments() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const value = comment.trim();
    if (!value) return;
    setComments((current) => [...current, value]);
    setComment('');
  }

  return (
    <section className="comments-section" aria-labelledby="comments-title">
      <div>
        <p className="eyebrow">COMMUNITY</p>
        <h2 id="comments-title">User Comments</h2>
      </div>

      <div className="comments-list">
        {comments.length === 0 ? (
          <p className="empty-state">No comments yet. Be the first to drop one.</p>
        ) : (
          comments.map((item, index) => <p key={`${item}-${index}`}>{item}</p>)
        )}
      </div>

      <form className="comment-form" onSubmit={handleSubmit}>
        <label htmlFor="comment-input">Tell us your favorite character:</label>
        <div className="comment-row">
          <input
            id="comment-input"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder="Rick? Morty? Meeseeks?"
          />
          <button type="submit">Comment</button>
        </div>
      </form>
    </section>
  );
}
