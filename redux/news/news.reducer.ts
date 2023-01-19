import { NewsTypes } from "./news.types";
import * as interfaces from "./news.interface";

const initialState = {
  news: [],
};

const newsReducer = (
  state = initialState,
  action: interfaces.actionProps
) => {
  switch (action.type) {
    case NewsTypes.GET_NEWS_DATA: {
      return {
        ...state,
        news: action.payload,
      };
    }
    default:
      return state;
  }
};

export default newsReducer;
