import { useEffect, useState } from "react";
import { movieApi } from "../../../api";
import { imgUrl } from "../../../constants/constant";
import { useParams } from "react-router";
import { Container } from "../../Container";
import styled from "styled-components";
import { Loading } from "../../Loading";

const Wrap = styled.section`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;
const MainPoster = styled.div`
  width: 48%;
  height: 80vh;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 70vh;
  }
`;
const TextWrap = styled.div`
  width: 800px;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 500;
  margin-bottom: 40px;
  @media screen and (max-width: 500px) {
    font-size: 30px;
    margin: 30px 0;
  }
`;
const SWrap = styled.div``;
const Date = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin: 20px 0;
  @media screen and (max-width: 500px) {
    font-size: 20px;
    margin: 20px 0;
  }
`;
const Genres = styled.div`
  margin-top: 20px;
  li {
    list-style: disc;
    margin-bottom: 5px;
  }
  @media screen and (max-width: 500px) {
    li {
      font-size: 15px;
      margin-bottom: 10px;
    }
  }
`;
const MovieTime = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
  @media screen and (max-width: 500px) {
    font-size: 18px;
    margin: 20px 0;
  }
`;
const Text = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 2.2rem;
  margin-top: 30px;
  opacity: 0.8;
  letter-spacing: 0.5px;
  @media screen and (max-width: 500px) {
    font-size: 15px;
    margin: 20px 0;
  }
`;

export const Detail = () => {
  const [dt, setDt] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  // =>url주소에 있는 변수값을 가져옴
  useEffect(() => {
    const mvdetail = async () => {
      // const {
      //   data: { results: playingData },
      // } = await movieApi.nowPlaying();
      // setPlaying(playingData);
      const { data } = await movieApi.moviedetail(id);
      setDt(data);
      setLoading(false);
    };
    mvdetail();
  }, []);
  console.log(dt);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Wrap>
            <MainPoster
              style={{
                background: `url(${
                  dt.backdrop_path
                    ? `${imgUrl}${dt.backdrop_path}`
                    : `https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png`
                }) no-repeat center/cover`,
              }}
            />
            <TextWrap>
              <Title>{dt.title}</Title>
              <SWrap>
                <Date>{dt.release_date}</Date>
                <MovieTime>{dt.runtime}분</MovieTime>
                <Genres>
                  {dt.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </Genres>
              </SWrap>
              <Text>{dt.overview}</Text>
            </TextWrap>
          </Wrap>
        </Container>
      )}
    </>
  );
};
