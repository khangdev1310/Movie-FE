import {
  FetchAudioFailure,
  FetchAudioFailurePayload,
  FetchAudioRequest,
  FetchAudioSuccess,
  FetchAudioSuccessPayload,
} from "../../models/audio.model";
import {
  FETCH_AUDIO_FAILURE,
  FETCH_AUDIO_REQUEST,
  FETCH_AUDIO_SUCCESS,
} from "../types/audioTypes";

export const fetchAudioRequest = (id: string): FetchAudioRequest => ({
  type: FETCH_AUDIO_REQUEST,
  id,
});

export const fetchAudioSuccess = (
  payload: FetchAudioSuccessPayload
): FetchAudioSuccess => ({
  type: FETCH_AUDIO_SUCCESS,
  payload,
});

export const fetchAudioFailure = (
  payload: FetchAudioFailurePayload
): FetchAudioFailure => ({
  type: FETCH_AUDIO_FAILURE,
  payload,
});
