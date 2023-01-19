import { Dispatch } from "redux";
import { getNewsAPI } from "./news.api";
import { NewsTypes } from "./news.types";

// settting news data in state
// interface propType {}

export const getNews = async (dispatch: Dispatch,limit:number) => {
  const newsData = await getNewsAPI(limit);
  dispatch({
    type: NewsTypes.GET_NEWS_DATA,
    payload: newsData,
  });
};
