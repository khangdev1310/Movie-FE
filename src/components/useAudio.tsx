import { useState } from 'react';

const useAudio = () => {
  const [isPlayerIdChanged, setIsPlayerIdChanged] = useState(false);
  const [playerId, setPlayerId] = useState(
    localStorage.getItem('minizing-playing') || ''
  );

  return {
    playerId,
    setPlayerId,
    isPlayerIdChanged,
    setIsPlayerIdChanged,
  };
};

export default useAudio;
