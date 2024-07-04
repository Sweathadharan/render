
import React, { useState } from 'react';

export default function Like({ children }) {
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div>
      {children(likeCount, handleLike)}
    </div>
  );
}
