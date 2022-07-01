import { useEffect, useState } from "react";
import { movieApi } from "../../../api";
import { movieNum } from "../../../constants/constant";
import { Loading } from "../../Loading";
import { MainBanner } from "./MainBanner";
import "swiper/css";
import { Container } from "../../Container";
import { Movies } from "./Movies";
import { PageTitle } from "../../PageTitle";

// const Box = styled.div`
//   width: 100%;
//   height: 80%;
//   background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
// `;

export const Home = () => {
  const [playing, setPlaying] = useState();
  const [rated, setRated] = useState();
  const [upcome, setUpcome] = useState();
  const [loading, setLoading] = useState(true);

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

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
      // =>예외처리 해주는 if/else문 같은 느낌
      // console.log(movieApi.latest())
    };
    movieData();
  }, []);
  console.log(`현재상영 영화: ${playing}`);
  // console.log(`인기 영화: ${rated}`);
  // console.log("상영예정 영화:", upcome);
  return (
    <>
      <PageTitle title={"Home"} />
      {loading ? (
        <Loading />
      ) : (
        <>
          {playing && (
            <>
              {/* <Box> */}
              <MainBanner playData={playing[movieNum]} />
              {/* </Box> */}
              <Container>
                <Movies movieData={playing} title="현재 상영 영화" />
                <Movies movieData={rated} title="인기 영화" />
                <Movies movieData={upcome} title="개봉 예정 영화" />
              </Container>
            </>
          )}
        </>
      )}
    </>
  );
};
