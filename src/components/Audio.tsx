import { FC, Fragment, useEffect, useRef, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { IoMdPause } from 'react-icons/io';
import { MdRepeat, MdVolumeOff, MdVolumeUp } from 'react-icons/md';
import { RiExternalLinkLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { fetchAudioRequest } from '../redux/actions/audioAction';
import { AppState, useAppDispatch, useAppSelector } from '../redux/rootReducer';
import { formatDuration } from '../ultils';
import Spinner from './Spinner';
import Volume from './Volume';

type AudioProps = {
  playerId: string;
};

const Audio: FC<AudioProps> = ({ playerId }) => {
  // get audio from store
  const { audio, loading, error } = useAppSelector(
    (state: AppState) => state.audio
  );

  //Get id when change tracks

  const dispatch = useAppDispatch();

  // State for audio
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(
    Number(localStorage.getItem('music-volume') || 1)
  );

  const [duration, setDuration] = useState(0);
  const [isLoop, setIsLoop] = useState(false);

  const [isPaused, setIsPaused] = useState(false);

  const isError = error;
  const audioRef = useRef<HTMLAudioElement>(null);

  // Effect
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === ' ') {
        setIsPaused((prev) => !prev);
      }
    };

    const spacePressedHandler = (e: KeyboardEvent) => {
      if (e.key === ' ') e.preventDefault();
    };

    window.addEventListener('keyup', handler);
    window.addEventListener('keydown', spacePressedHandler);

    return () => {
      window.removeEventListener('keyup', handler);
      window.removeEventListener('keydown', spacePressedHandler);
    };
  }, []);

  useEffect(() => {
    if (isPaused) audioRef.current?.pause();
    else audioRef.current?.play().catch(() => setIsPaused(true));
  }, [isPaused]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = audioRef.current.muted ? 0 : volume;
    }
    localStorage.setItem('music-volume', JSON.stringify(volume));
  }, [audioRef.current?.muted, volume, playerId]);

  useEffect(() => {
    dispatch(fetchAudioRequest(playerId));
  }, [playerId]);

  // if (error) {
  //   throw new Error(error);
  // }

  return (
    <>
      <audio
        controls
        ref={audioRef}
        key={audio.tracks[0]?.id}
        src={audio.tracks[0]?.preview_url}
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
            setIsPaused(false);
            audioRef.current?.play();
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
            src={audio.tracks[0]?.album?.images[0]?.url}
            alt="audio"
            className="w-14 h-14 object-cover"
          />
          <div className="hidden md:block">
            <h1 className="line-clamp-1">{audio.tracks[0]?.name} </h1>
            <p className="text-gray-400 line-clamp-1">
              {audio.tracks[0]?.artists.map((artist, index) => (
                <Fragment key={artist.id}>
                  {index !== 0 && <span>, </span>}
                  <Link to={`/artist/${artist.id}`}>{artist.name}</Link>
                </Fragment>
              ))}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center flex-1">
          <div className="flex items-center justify-center gap-5">
            <button
              title={isLoop ? 'Disable repeat' : 'Enable repeat'}
              onClick={() => setIsLoop(!isLoop)}
              disabled={!!isError || loading}
            >
              <MdRepeat
                className={`${
                  isLoop
                    ? 'fill-purple-hover'
                    : 'fill-white hover:fill-purple-hover'
                } w-5 h-5 transition duration-200`}
              />
            </button>

            <button
              title={isError ? 'Error' : isPaused ? 'Play' : 'Pause'}
              className={`h-8 w-8 border rounded-full flex justify-center items-center group hover:border-purple-hover transition duration-200
              ${isPaused ? '' : 'border-purple-hover'} ${
                isError || audio.tracks[0].preview_url === null
                  ? 'border-red-500 !important'
                  : ''
              }  `}
              onClick={() => setIsPaused((prev) => !prev)}
              disabled={!!error || loading}
            >
              {isError || audio.tracks[0].preview_url === null ? (
                <span className="text-red-500">{`!`}</span>
              ) : loading ? (
                <Spinner />
              ) : isPaused ? (
                <FaPlay className="w-3 h-3 fill-white group-hover:fill-purple-hover" />
              ) : (
                <IoMdPause className="w-3 h-3 fill-purple-hover group-hover:fill-white" />
              )}
            </button>

            <a
              title="Open in Spotify"
              href="https://open.spotify.com/track/02Vb9vfZUmqAKNhQwFjPSZ"
              target="_blank"
              rel="noopener noreferrer"
              className={loading || isError ? 'pointer-events-none' : ''}
            >
              <RiExternalLinkLine className="w-5 h-5 transition duration-200 fill-white hover:fill-purple-hover" />
            </a>
          </div>

          <div className="items-center justify-center hidden w-full gap-4 text-sm md:flex">
            <span className="flex-shrink-0">
              {audio.tracks[0].preview_url === null
                ? formatDuration(0 * 1000)
                : formatDuration(currentTime * 1000)}
            </span>

            <Volume
              className="flex-grow max-w-[400px]"
              width={
                audio.tracks[0].preview_url === null
                  ? 0
                  : duration !== 0
                  ? (currentTime / duration) * 100
                  : 0
              }
              setWidth={(val: number) => {
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

        <div className="flex items-center justify-end flex-1 gap-3">
          {audioRef.current !== null && (
            <button
              title={audioRef.current.muted ? 'Unmute' : 'Mute'}
              onClick={() => {
                if (audioRef.current) {
                  if (audioRef.current?.volume === 0) {
                    audioRef.current.muted = false;
                  } else {
                    audioRef.current.muted = !audioRef.current.muted;
                  }
                }
              }}
            >
              {audioRef.current.muted || audioRef.current.volume === 0 ? (
                <MdVolumeOff className="w-5 h-5 transition duration-200 fill-white hover:fill-purple-hover" />
              ) : (
                <MdVolumeUp className="w-5 h-5 transition duration-200 fill-white hover:fill-purple-hover" />
              )}
            </button>
          )}

          <div className="hidden md:block">
            {audioRef.current !== null && (
              <Volume
                className="w-[100px]"
                width={
                  audioRef.current.muted ? 0 : audioRef.current.volume * 100
                }
                setWidth={(value: number) => {
                  setVolume(value / 100);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Audio;
