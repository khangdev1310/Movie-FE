import {
  RecommendationActions,
  RecommendationState,
} from "../../models/recommend.model";
import {
  FETCH_RECOMMENDATION_FAILURE,
  FETCH_RECOMMENDATION_REQUEST,
  FETCH_RECOMMENDATION_SUCCESS,
} from "../types/recommendTypes";

const initialState: RecommendationState = {
  recommends: {
    tracks: [
      {
        album: {
          images: [],
        },
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
        available_markets: [],
        disc_number: 0,
        duration_ms: 0,
        id: "",
        preview_url: "",
        name: "",
      },
    ],
  },
  loading: false,
  error: null,
};

export const recommendReducer = (
  state = initialState,
  action: RecommendationActions
): RecommendationState => {
  switch (action.type) {
    case FETCH_RECOMMENDATION_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_RECOMMENDATION_SUCCESS:
      return {
        ...state,
        recommends: action.payload.data,
        loading: false,
        error: null,
      };
    case FETCH_RECOMMENDATION_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};
