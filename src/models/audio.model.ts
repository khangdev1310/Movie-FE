import {
  FETCH_AUDIO_REQUEST,
  FETCH_AUDIO_SUCCESS,
  FETCH_AUDIO_FAILURE,
} from "../redux/types/audioTypes";

export interface Root {
  tracks: ITrack[];
}

export interface ITrack {
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  href: string;
  id: string;
  name: string;
  preview_url: any;
  album: Album;
  artists: Artist2[]
}

export interface AudioState {
  audio: Root;
  loading: boolean;
  error: string | null;
}

export interface Album {
  album_type: string;
  id: string;
  images: Image[];
  name: string;
}

export interface Artist {
  external_urls: string;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface Artist2 {
  external_urls: string;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface FetchAudioSuccessPayload {
  data: Root;
}

export interface FetchAudioFailurePayload {
  message: string;
}

export interface FetchAudioRequest {
  type: typeof FETCH_AUDIO_REQUEST;
  id: string;
}

export type FetchAudioSuccess = {
  type: typeof FETCH_AUDIO_SUCCESS;
  payload: FetchAudioSuccessPayload;
};

export type FetchAudioFailure = {
  type: typeof FETCH_AUDIO_FAILURE;
  payload: FetchAudioFailurePayload;
};

export type AudioActions =
  | FetchAudioRequest
  | FetchAudioSuccess
  | FetchAudioFailure;
