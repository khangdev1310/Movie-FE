import {
  FETCH_RECOMMENDATION_FAILURE,
  FETCH_RECOMMENDATION_REQUEST,
  FETCH_RECOMMENDATION_SUCCESS,
} from "../redux/types/recommendTypes";

export interface RootRecommendation {
  tracks: Track[];
}

export interface Track {
  album: Album;
  artists: Artist2[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  id: string;
  preview_url?: string;
  name: string
}

export interface Album {
  images: Image[];
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

export interface ExternalIds {
  isrc: string;
}

export interface RecommendationState {
  recommends: RootRecommendation;
  loading: boolean;
  error: string | null;
}

export interface FetchRecommendSuccessPayload {
  data: RootRecommendation;
}

export interface FetchRecommendFailurePayload {
  error: string;
}

export interface FetchRecommendRequest {
  type: typeof FETCH_RECOMMENDATION_REQUEST;
}

export type FetchRecommendSuccess = {
  type: typeof FETCH_RECOMMENDATION_SUCCESS;
  payload: FetchRecommendSuccessPayload;
};
export type FetchRecommendFailure = {
  type: typeof FETCH_RECOMMENDATION_FAILURE;
  payload: FetchRecommendFailurePayload;
};

export type RecommendationActions =
  | FetchRecommendRequest
  | FetchRecommendSuccess
  | FetchRecommendFailure;
