import styled from "styled-components";
import { imgUrl } from "../../../constants/constant";

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

export const MovieDetail = ({ dt }) => {
  return (
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
  );
};