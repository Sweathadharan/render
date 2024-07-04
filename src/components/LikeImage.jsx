import React from 'react';
import Like from './Like';

export default function LikeImage() {
  return (
    <Like>
      {(likeCount, handleLike) => (
        <div>
          <button onClick={handleLike}>Like Image {likeCount}</button>
        </div>
      )}
    </Like>
  );
}