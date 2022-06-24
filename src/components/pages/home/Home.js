import { useEffect } from "react";
import { movieApi } from "../../../api";

export const Home = () => {
  useEffect(() => {
    const movieData = async () => {
      // console.log(await movieApi.nowPlaying());
      const {
        data: { results },
      } = await movieApi.nowPlaying();
      console.log(results);
      // console.log(playing);
    };
    movieData();
  }, []);
  return <>Home!</>;
};
