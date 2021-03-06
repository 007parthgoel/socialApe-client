import {
  SET_SCREAMS,
  LOADING_DATA,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  DELETE_SCREAM,
} from "../types";

const initialState = {
  screams: [],
  scream: {},
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_DATA:
      return { ...state, loading: true };
    case SET_SCREAMS:
      return { ...state, screams: action.payload, loading: false };
    case LIKE_SCREAM:
    case UNLIKE_SCREAM:
      let index = state.screams.findIndex(
        (scream) => scream.screamId === action.payload.screamId
      );
      state.screams[index] = action.payload;
      return { ...state };
    case DELETE_SCREAM:
      // index = state.screams.findIndex(
      //   (scream) => scream.screamId === action.payload
      // );
      // state.screams.splice(index, 1);
      let newScreams=state.screams.filter((scream) => scream.screamId !== action.payload);
      console.log(newScreams);
      return {
        ...state,screams: newScreams
      };
    default:
      return state;
  }
};

export default reducer;
