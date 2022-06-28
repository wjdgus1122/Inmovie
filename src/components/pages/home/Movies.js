import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { imgUrl } from "../../../constants/constant";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin-top: 120px;
`;
const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
`;
const MovieImg = styled.div`
  /* width: 300px; */
  height: 250px;
  margin-top: 30px;
  margin-bottom: 20px;
`;
const MovieTitle = styled.div`
  font-size: 18px;
  font-weight: 200;
`;

export const Movies = ({ movieData, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Swiper slidesPerView={5.2} spaceBetween={20}>
        {movieData.map((play) => (
          <SwiperSlide key={play.id}>
            <Link to={"#"}>
              <MovieImg
                style={{
                  background: `url(${imgUrl}${play.backdrop_path}) no-repeat center/cover`,
                }}
              />
              <MovieTitle>{play.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
