import styled from "styled-components";
import { imgUrl } from "../../../constants/constant";
import { mainStyle } from "../../../styles/globalStyle";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// 반응형?
// =>각 디바이스 기기에 따라 디자인이 변경되도록 구현하는것
// @media screen and (max-width : ) and (min-width:)

const Banner = styled.section`
  width: 100%;
  height: 80vh;
  position: relative;
  padding: ${mainStyle.padding};
  padding-top: 250px;
  @media screen and (max-width: 500px) {
    height: 100vh;
    padding: ${mainStyle.moPadding};
  }
`;

const Box = styled.div`
  width: 100%;
  height: 60%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Title = styled.div`
  max-width: 650px;
  /* width: 100%; */
  font-size: 80px;
  font-weight: 700;
  line-height: 6rem;
  position: relative;
  z-index: 9;
  @media screen and (max-width: 500px) {
    font-size: 40px;
    line-height: 3rem;
    position: absolute;
    bottom: 20%;
    left: 20px;
  }
`;
const Desc = styled.div`
  max-width: 700px;
  width: 100%;
  font-size: 18px;
  margin-top: 20px;
  line-height: 2rem;
  opacity: 0.9;
  font-weight: 300;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const GoBtn = styled.div`
  width: 150px;
  height: 50px;
  font-size: 20px;
  border: 1px solid lightgray;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const MainBanner = ({ playData }) => {
  console.log(playData.id);
  return (
    <Banner
      style={{
        background: `url(${imgUrl}${playData.backdrop_path}) no-repeat center/cover`,
      }}
    >
      <Title> {playData.title}</Title>
      <Desc>{playData.overview.slice(0, 100) + "..."}</Desc>
      <Link to={`/detail/${playData.id}`}>
        <GoBtn>
          바로가기 <FontAwesomeIcon icon={faAngleRight} />
        </GoBtn>
      </Link>
      <Box />
    </Banner>
  );
};
// =>또는 playData : playing으로 이름을 바꿔줘도 사용가능
