import React from 'react';
import Like from './Like';

export default function LikePost() {
  return (
    <Like>
      {(likeCount, handleLike) => (
        <div>
          <button onClick={handleLike}>Like Post {likeCount}</button>
        </div>
      )}
    </Like>
  );
}