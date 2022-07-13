import React, { FC, Fragment, useEffect, useRef } from "react";
import { useState } from "react";
import { MdRepeat, MdVolumeOff, MdVolumeUp } from "react-icons/md";
import { RiExternalLinkLine } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import { IoMdPause } from "react-icons/io";
import { Link } from "react-router-dom";
import { formatDuration } from "../ultils";
import Volume from "./Volume";

const Audio: FC = () => {
  // State for audio
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(
    Number(localStorage.getItem("music-volume") || 1)
  );
  const [isMuted, setIsMuted] = useState(
    Number(localStorage.getItem("music-muted")) || false
  );
  const [duration, setDuration] = useState(0);
  const [isLoop, setIsLoop] = useState(false);

  const [isPaused, setIsPaused] = useState(true);

  const isError = false;
  const audioRef = useRef<HTMLAudioElement>(null);

  // Effect
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === " ") {
        setIsPaused((prev) => !prev);
      }
    };
    const spacePressedHandler = (e: KeyboardEvent) => {
      if (e.key === " ") e.preventDefault();
    };

    window.addEventListener("keyup", handler);
    window.addEventListener("keydown", spacePressedHandler);

    return () => {
      window.removeEventListener("keyup", handler);
      window.removeEventListener("keydown", spacePressedHandler);
    };
  }, []);

  useEffect(() => {
    if (isPaused) audioRef.current?.pause();
    else audioRef.current?.play().catch(() => setIsPaused(true));
  }, [isPaused]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
    localStorage.setItem("music-volume", JSON.stringify(volume));
    localStorage.setItem("music-muted", JSON.stringify(+isMuted));
  }, [isMuted, volume]);
 

  return (
    <>
      <audio
        controls
        ref={audioRef}
        src="https://p.scdn.co/mp3-preview/4da72a9b39cc80395fc93795c2ca93079d4c5d4b?cid=fea4cc8d6f3b4c02b39922b75a6bd658"
        className="hidden"
        hidden
        autoPlay={false}
        loop={isLoop}
        onTimeUpdateCapture={() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
          }
        }}
        onLoadedDataCapture={() => {
          if (audioRef.current) {
            setCurrentTime(0);
            setDuration(audioRef.current.duration);
          }
        }}
        onEndedCapture={() => {
          if (!isLoop) {
            setCurrentTime(0);
            setIsPaused(true);
          }
        }}
      ></audio>
      <div className="sticky bottom-0 left-0 right-0 h-20 flex items-center bg-dark border-t-2 border-gray-800 px-[5vw]">
        <div className="flex flex-1 justify-start gap-3 items-center">
          <img
            src="./test.jpg"
            alt="audio"
            className="w-14 h-14 object-cover"
          />
          <div className="hidden md:block">
            <h1 className="line-clamp-1">TestAudio</h1>
            <p className="text-gray-400 line-clamp-1">
              <Link to={`artists/id`}>WINNER</Link>
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col flex-1">
          <div className="flex justify-center items-center gap-5">
            <button
              title={isLoop ? "Disable repeat" : "Enable repeat"}
              onClick={() => setIsLoop(!isLoop)}
            >
              <MdRepeat
                className={`${
                  isLoop
                    ? "fill-purple-hover"
                    : "fill-white hover:fill-purple-hover"
                } w-5 h-5 transition duration-200`}
              />
            </button>

            <button
              title={isError ? "Error" : isPaused ? "Play" : "Pause"}
              className={`h-8 w-8 border rounded-full flex justify-center items-center group hover:border-purple-hover transition duration-200${
                isError ? "border-red-500" : ""
              } ${isPaused ? "" : "border-purple-hover"}`}
              onClick={() => setIsPaused((prev) => !prev)}
            >
              {isError ? (
                <span className="text-red-500">{`!`}</span>
              ) : isPaused ? (
                <FaPlay className="fill-white w-3 h-3 group-hover:fill-purple-hover" />
              ) : (
                <IoMdPause className="fill-purple-hover w-3 h-3 group-hover:fill-white" />
              )}
            </button>

            <a
              title="Open in Spotify"
              href="https://open.spotify.com/track/02Vb9vfZUmqAKNhQwFjPSZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiExternalLinkLine className="fill-white w-5 h-5 hover:fill-purple-hover duration-200 transition" />
            </a>
          </div>

          <div className="hidden md:flex justify-center items-center gap-4 text-sm w-full">
            <span className="flex-shrink-0">
              {formatDuration(currentTime * 1000)}
            </span>

            <Volume
              className="flex-grow max-w-[400px]"
              width={duration != 0 ? (currentTime / duration) * 100 : 0}
              setWidth={(val: number) => {
                setCurrentTime((val / 100) * duration);
                if (audioRef.current) {
                  audioRef.current.currentTime = (val / 100) * duration;
                }
              }}
            />
            <span className="flex-shrink-0">
              {formatDuration(duration * 1000)}
            </span>
          </div>
        </div>

        <div className="flex flex-1 justify-end items-center gap-3">
          <button
            title={isMuted || volume === 0 ? "Unmute" : "Mute"}
            onClick={() => {
              if (volume === 0) {
                setVolume(1);
                setIsMuted(!isMuted);
              } else {
                setIsMuted(!isMuted);
              }
            }}
          >
            {isMuted || volume === 0 ? (
              <MdVolumeOff className="fill-white w-5 h-5 hover:fill-purple-hover transition duration-200" />
            ) : (
              <MdVolumeUp className="fill-white w-5 h-5 hover:fill-purple-hover transition duration-200" />
            )}
          </button>
          <div className="hidden md:block">
            <Volume
              className="w-[100px]"
              width={isMuted ? 0 : volume * 100}
              setWidth={(value: number) => {
                setVolume(value / 100);
                setIsMuted(false);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Audio;
