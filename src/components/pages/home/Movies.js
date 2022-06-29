import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { imgUrl } from "../../../constants/constant";
import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import "swiper/css/navigation";

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
  const params = {
    breakpoints: {
      320: {
        slidesPerView: 2.2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 5.2,
        spaceBetween: 20,
      },
    },
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Swiper modules={[Navigation]} navigation {...params}>
        {movieData.map((play) => (
          <SwiperSlide key={play.id}>
            <Link to={`/detail/${play.id}`}>
              <MovieImg
                style={{
                  background: `url(${
                    play.backdrop_path
                      ? `${imgUrl}${play.backdrop_path}`
                      : "https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png"
                  }) no-repeat center/cover`,
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
