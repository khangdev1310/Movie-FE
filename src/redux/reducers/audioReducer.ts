import { AudioActions, AudioState } from "../../models/audio.model";
import {
  FETCH_AUDIO_FAILURE,
  FETCH_AUDIO_REQUEST,
  FETCH_AUDIO_SUCCESS,
} from "../types/audioTypes";

const initialState: AudioState = {
  audio: {
    tracks: [
      {
        disc_number: 0,
        duration_ms: 0,
        explicit: false,
        href: "",
        id: "",
        name: "",
        preview_url: "",
        album: {
          album_type: "",
          id: "",
          images: [],
          name: "",
        },
        artists: [],
      },
    ],
  },
  loading: false,
  error: null,
};

export const audioReducer = (
  state = initialState,
  action: AudioActions
): AudioState => {
  switch (action.type) {
    case FETCH_AUDIO_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_AUDIO_SUCCESS:
      console.log(action.payload.data);

      return {
        ...state,
        audio: action.payload.data,
        loading: false,
        error: null,
      };
    case FETCH_AUDIO_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};
