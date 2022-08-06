import { ArtistActions, ArtistState } from "../../models/artist.model";
import {
  FETCH_ARTIST_ALBUMS_FAILURE,
  FETCH_ARTIST_ALBUMS_REQUEST,
  FETCH_ARTIST_ALBUMS_SUCCESS,
  FETCH_ARTIST_FAILURE,
  FETCH_ARTIST_RELATED_FAILURE,
  FETCH_ARTIST_RELATED_REQUEST,
  FETCH_ARTIST_RELATED_SUCCESS,
  FETCH_ARTIST_REQUEST,
  FETCH_ARTIST_SUCCESS,
  FETCH_ARTIST_TOPTRACK_FAILURE,
  FETCH_ARTIST_TOPTRACK_REQUEST,
  FETCH_ARTIST_TOPTRACK_SUCCESS,
} from "../types/artistTypes";

const initialState: ArtistState = {
  artist: {
    external_urls: {
      spotify: "",
    },
    followers: {
      href: "",
      total: 0,
    },
    genres: [],
    href: "",
    id: "",
    images: [],
    name: "",
    popularity: 0,
    type: "",
    uri: "",
  },
  artistToptracks: {
    tracks: [
      {
        album: {
          album_type: "",
          artists: [
            {
              external_urls: "",
              href: "",
              id: "",
              name: "",
              type: "",
              uri: "",
            },
          ],
          external_urls: {
            spotify: "",
          },
          href: "",
          id: "",
          images: [],
          name: "",
          release_date: "",
          release_date_precision: "",
          total_tracks: 0,
          type: "",
          uri: "",
        },
        artists: [],
        disc_number: 0,
        duration_ms: 0,
        explicit: false,
        external_ids: "",
        external_urls: "",
        href: "",
        id: "",
        is_local: false,
        is_playable: false,
        name: "",
        popularity: 0,
        preview_url: "",
        track_number: 0,
        type: "",
        uri: "",
      },
    ],
  },
  artistAlbums: {
    href: "",
    items: [],
    limit: 0,
    next: "",
    offset: 0,
    previous: "",
    total: 0,
  },
  artistRelated: {
    artists: [
      {
        external_urls: "",
        followers: {
          href: "",
          total: 0,
        },
        genres: [],
        href: "",
        id: "",
        images: [],
        name: "",
        popularity: 0,
        type: "",
        uri: "",
      },
    ],
  },

  loading: false,
  error: null,
};

export const artistReducer = (
  state = initialState,
  action: ArtistActions
): ArtistState => {
  switch (action.type) {
    // Fetch Artist
    case FETCH_ARTIST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ARTIST_SUCCESS:
      return {
        ...state,
        artist: action.payload.data,
        loading: false,
        error: null,
      };
    case FETCH_ARTIST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    //   Fetch Artist Top Tracks
    case FETCH_ARTIST_TOPTRACK_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ARTIST_TOPTRACK_SUCCESS:
      return {
        ...state,
        artistToptracks: action.payload.data,
        loading: false,
        error: null,
      };
    case FETCH_ARTIST_TOPTRACK_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    //   ArtistAlbums

    case FETCH_ARTIST_ALBUMS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ARTIST_ALBUMS_SUCCESS:
      return {
        ...state,
        artistAlbums: action.payload.data,
        loading: false,
        error: null,
      };
    case FETCH_ARTIST_ALBUMS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    //   ArtistRelated
    case FETCH_ARTIST_RELATED_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ARTIST_RELATED_SUCCESS:
      return {
        ...state,
        artistRelated: action.payload.data,
        loading: false,
        error: null,
      };
    case FETCH_ARTIST_RELATED_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};
