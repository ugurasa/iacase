import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface IOMDBRecord {
  Title: string;
  Year: string;
  imdbID: string;
  Type: "movie" | "series" | "episode";
  Poster: string;
}

interface IOMDBResponseData {
  Response: "True" | "False";
  Search?: Array<IOMDBRecord>;
  totalResults?: string;
  Plot?: string;
  Title?: string;
  Year?: string;
  Poster?: string;
  Runtime?: string;
  imdbRating?: string;
  Writer?: string;
  Genre?: string;
  Director?: string;
  Actors?: string;
}

interface IState {
  data: IOMDBResponseData | null
  error: string | null
  loading: boolean
}

const useFetch = (url: string, options: AxiosRequestConfig = {}) => {
  const [state, setState] = useState<IState>({
    data: null,
    error: null,
    loading: true
  });

  useEffect(() => {
    setState({data: null, error: null, loading: true});
    axios({
      url,
      ...options,
    })
      .then((response: AxiosResponse) => {
        setState({
          data: response?.data,
          error: null,
          loading: false
        });
      })
      .catch((response) =>
        setState({
          data: null,
          error: response?.message,
          loading: false
        })
      );
  }, [url, JSON.stringify(options)]);

  return state;
};

export default useFetch;
