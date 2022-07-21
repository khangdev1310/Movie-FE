import React, { useEffect, useState } from "react";

interface IUseAudio {
  playerId: string;
  setPlayerId: Function;
  isPlayerIdChanged: boolean;
  setIsPlayerIdChanged: Function;
}

const useAudio = () => {
  const [isPlayerIdChanged, setIsPlayerIdChanged] = useState(false);
  const [playerId, setPlayerId] = useState(
    localStorage.getItem("minizing-playing") || ""
  );

    

  return {
    playerId,
    setPlayerId,
    isPlayerIdChanged,
    setIsPlayerIdChanged,
  };
};

export default useAudio;
