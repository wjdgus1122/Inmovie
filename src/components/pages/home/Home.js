import { useEffect, useState } from "react";
import { movieApi } from "../../../api";

export const Home = () => {
  const [playing, setPlaying] = useState();
  const [rated, setRated] = useState();
  const [upcome, setUpcome] = useState();

  useEffect(() => {
    const movieData = async () => {
      try {
        const {
          data: { results: playingData },
        } = await movieApi.nowPlaying();
        setPlaying(playingData);

        const {
          data: { results: ratedData },
        } = await movieApi.topRated();
        // =>비구조화 할당 이용시  변수명 변경할때는
        // 변수명:변경할이름
        setRated(ratedData);

        const {
          data: { results: upcomeData },
        } = await movieApi.upComing();
        setUpcome(upcomeData);
      } catch (error) {
        console.log(error);
      }
      // =>예외처리 해주는 if/else문 같은 느낌
      // console.log(movieApi.latest())
    };
    movieData();
  }, []);
  // console.log(`현재상영 영화: ${playing}`);
  // console.log(`인기 영화: ${rated}`);
  // console.log(`최신 영화: ${late}`);
  console.log("상영예정 영화:", upcome);
  return <></>;
};
